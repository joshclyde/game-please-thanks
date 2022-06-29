import { MicrosoftProduct, Game } from "../types";

// TODO: clean this up

export const getName = (product: MicrosoftProduct) =>
  product.LocalizedProperties?.[0].ProductTitle;

export const getIsBundle = (microsoftProduct: MicrosoftProduct) =>
  Boolean(microsoftProduct.DisplaySkuAvailabilities?.[0].Sku.Properties.IsBundle);

/*
  Only add the sizes for platforms for Windows.Xbox.

  Some of the packages will be Windows.Desktop, and the size actually displayed
  on microsoft's site I believe is for PC and not Xbox, so my calculated size
  will not match up (though it should be close-ish).
*/
const getSize = (product: MicrosoftProduct) =>
  product.DisplaySkuAvailabilities?.[0].Sku.Properties.Packages?.filter(
    ({ PlatformDependencies }) =>
      PlatformDependencies?.some(({ PlatformName }) => PlatformName === `Windows.Xbox`),
  ).reduce(
    (partialSum, { MaxDownloadSizeInBytes }) => partialSum + MaxDownloadSizeInBytes,
    0,
  );

const getRatingData = (product: MicrosoftProduct) => {
  const y = product.MarketProperties?.[0].UsageData?.find(
    (x) => x.AggregateTimeSpan === `AllTime`,
  );
  if (y) {
    return {
      rating: y.AverageRating,
      ratingCount: y.RatingCount,
    };
  } else {
    console.log(`No rating for ${getName(product)}`);
  }
};

export const getBundleProductIds = (
  microsoftProduct: MicrosoftProduct,
): Array<string> => {
  return (
    microsoftProduct.DisplaySkuAvailabilities?.[0].Sku.Properties?.BundledSkus?.map(
      ({ BigId }) => BigId,
    ) || []
  );
};

export const getProductType = (microsoftProduct: MicrosoftProduct) =>
  microsoftProduct.ProductType;

const getMin = (microsoftProduct: MicrosoftProduct) => {
  const value1 = microsoftProduct.Properties.Attributes?.find(
    ({ Name }) => Name === `XblOnlineCoop`,
  )?.Minimum;
  const value2 = microsoftProduct.Properties.Attributes?.find(
    ({ Name }) => Name === `XblOnlineMultiPlayer`,
  )?.Minimum;
  let possibleReturnValue;
  if (!value1 || !value2) {
    possibleReturnValue = value1 || value2 || 1;
  } else {
    possibleReturnValue = Math.min(value1, value2);
  }
  // if it says that the minimum players is "2" I want to change it to 1
  return possibleReturnValue < 3 ? 1 : possibleReturnValue;
};

const getMax = (microsoftProduct: MicrosoftProduct) => {
  const value1 = microsoftProduct.Properties.Attributes?.find(
    ({ Name }) => Name === `XblOnlineCoop`,
  )?.Maximum;
  const value2 = microsoftProduct.Properties.Attributes?.find(
    ({ Name }) => Name === `XblOnlineMultiPlayer`,
  )?.Maximum;
  if (!value1 || !value2) {
    return value1 || value2 || 1;
  }
  return Math.max(value1, value2);
};

export const getImageUrl = (microsoftProduct: MicrosoftProduct, imagePurpose: string) => {
  const uri = microsoftProduct.LocalizedProperties?.[0].Images?.find(
    ({ ImagePurpose }) => ImagePurpose === imagePurpose,
  )?.Uri;
  if (uri) {
    return `https:${uri}`;
  }
  return undefined;
};

export const convertProductToGame = (
  product: MicrosoftProduct,
  isOnGamePass: boolean,
): Game => {
  const productId = product.ProductId;
  const name = getName(product);
  const size = getSize(product);
  if (!size) {
    console.log(`No size for ${productId} (${name})`);
  }
  const urlTitle = name
    ?.replace(/[\W_]+/g, ` `)
    .trim()
    .replace(` `, `-`)
    .toLowerCase();
  const game = {
    id: productId,
    name,
    minPlayers: getMin(product),
    maxPlayers: getMax(product),
    externalUrl: urlTitle
      ? `https://www.microsoft.com/en-us/p/${urlTitle}/${productId}?activetab=pivot:overviewtab`
      : `none`,
    images: {
      TitledWide: {
        url: getImageUrl(product, `TitledHeroArt`),
      },
      TitledLong: {
        url: getImageUrl(product, `Poster`),
      },
      UntitledWide: {
        url: getImageUrl(product, `SuperHeroArt`),
      },
      UntitledSquare: {
        url: getImageUrl(product, `FeaturePromotionalSquareArt`),
      },
      TitledSquare: {
        url: getImageUrl(product, `BoxArt`),
      },
    },
    price:
      product.DisplaySkuAvailabilities?.[0].Availabilities?.[0].OrderManagementData.Price
        .MSRP,
    isOnGamePass,
    size: getSize(product),
    ...getRatingData(product),
  };
  return game;
};
