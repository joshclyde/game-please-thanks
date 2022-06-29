import Jimp from "jimp";

/*
  SuperHeroArt - cool looking wide image
  FeaturePromotionalSquareArt - current image used
  BoxArt - current image with name

  rocket league: C125W9BG2K0V
  
*/
import { getUniquePartOfImage } from "../utils/image/getUniquePartOfImage";

// get box art image
// compare the 2 and remove any pixels that don't match
// clear and unused space
// determine the size of the bitted image version should be
// create the image
// save it
const doIt = async (productId: string) => {
  // get product image
  const image1 = await Jimp.read(`./scripts/data/productImage/${productId}.jpeg`);
  const image2 = await Jimp.read(`./scripts/data/productBoxArtImage/${productId}.jpeg`);
  const image3 = await getUniquePartOfImage(image1, image2);
  image3.write(`./scripts/data/MORE_IMAGES/${productId}.jpeg`);
};

const execute = async () => {
  const productIds = [`C125W9BG2K0V`];
  const errors: Array<{ productId: string; e: any }> = [];
  console.log(`Going to generate ${productIds.length} images.`);
  let left = productIds.length;
  for (const productId of productIds) {
    left--;
    try {
      await doIt(productId);
      console.log(`SUCCESS: ${productId}`);
    } catch (e) {
      console.log(`FAILED productId ${productId} | ERROR: ${e}`);
      errors.push({ productId, e });
    }
    console.log(`${left} images left to go`);
  }
  console.log(`\nThere were ${errors.length} failed attempts.`);
  errors.forEach(({ productId, e }) => {
    console.log(`FAILED ID ${productId} | ERROR: ${e}`);
  });
};
execute();
