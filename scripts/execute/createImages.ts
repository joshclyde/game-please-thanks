import { getProductImageIds } from "../utils/database";
import { createImage } from "../utils/image";

const execute = async () => {
  const productIds = await getProductImageIds();
  const errors: Array<{ productId: string; e: any }> = [];
  console.log(`Going to generate ${productIds.length} images.`);
  let left = productIds.length;
  for (const productId of productIds) {
    left--;
    try {
      await createImage(productId);
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
