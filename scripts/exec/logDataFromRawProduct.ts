/*
  It's nice to have some statistics on the raw product data that has been pulled.
*/

import { RawProduct } from "../types";
import { onEachRawProductData } from "../utils";

interface Stats {
  count: number;
  productKind: Record<string, number>;
  productType: Record<string, number>;
  productFamily: Record<string, number>;
  attributes: Record<string, number>;
  productGroupId: Record<string, number>;
  relatedProducts: Record<string, number>;
}

const stats: Stats = {
  count: 0,
  productKind: {},
  productType: {},
  productFamily: {},
  attributes: {},
  productGroupId: {},
  relatedProducts: {},
};

const groups = {};
const groupsData = {};

const smiteGroup = {
  ids: [],
  rawProducts: [],
};

const hasParent = (rawProduct: RawProduct) => {
  let value = false;
  rawProduct.MarketProperties[0].RelatedProducts?.forEach(({ RelationshipType }) => {
    if (typeof RelationshipType === `string` && RelationshipType === `Parent`) {
      value = true;
    }
  });
  return value;
};

const operation = async (rawProduct: RawProduct) => {
  if (hasParent(rawProduct) || rawProduct.ProductKind !== `Game`) {
    return;
  }
  stats.count = stats.count + 1;

  stats.productKind[rawProduct.ProductKind] =
    stats.productKind[rawProduct.ProductKind] + 1 || 1;

  stats.productType[rawProduct.ProductType] =
    stats.productType[rawProduct.ProductType] + 1 || 1;

  stats.productFamily[rawProduct.ProductFamily] =
    stats.productFamily[rawProduct.ProductFamily] + 1 || 1;

  groups[rawProduct.Properties.ProductGroupName] =
    groups[rawProduct.Properties.ProductGroupName] + 1 || 1;

  groupsData[rawProduct.Properties.ProductGroupName] = [
    ...(groupsData[rawProduct.Properties.ProductGroupName] || []),
    rawProduct,
  ];

  if (rawProduct.Properties.ProductGroupName === `Smite`) {
    smiteGroup.rawProducts.push(rawProduct);
    console.log(
      `smite: ${rawProduct.ProductId} ${rawProduct.LocalizedProperties[0].ProductTitle} ${rawProduct.Properties.ProductGroupId} ${rawProduct.ProductKind}`,
    );
    smiteGroup.ids.push(rawProduct.ProductId);
    rawProduct.MarketProperties[0].RelatedProducts?.forEach((relatedProduct) => {
      if (typeof relatedProduct?.RelationshipType === `string`) {
        console.log(relatedProduct);
      }
    });
  }

  rawProduct.MarketProperties[0].RelatedProducts?.forEach(({ RelationshipType }) => {
    if (typeof RelationshipType === `string`) {
      stats.relatedProducts[RelationshipType] =
        stats.relatedProducts[RelationshipType] + 1 || 1;
    }
  });
};

const analyzeSmiteGroup = () => {};

const execute = async () => {
  await onEachRawProductData(operation);
  console.log(stats);
  Object.keys(groups).forEach((name) => {
    // console.log(`${name}: ${groups[name]}`);
    if (groups[name] > 1) {
      console.log(`${name}: ${groups[name]}`);
      groupsData[name].forEach((element) => {
        console.log(element.Properties.XboxConsoleGenCompatible);
        console.log(element.MarketProperties?.[0]?.RelatedProducts);
        console.log(
          element.DisplaySkuAvailabilities[0].Availabilities[0].OrderManagementData.Price
            .MSRP,
        );
      });
      console.log(`\n`);
    }
  });
  // console.log(smiteGroup);
};

execute();
