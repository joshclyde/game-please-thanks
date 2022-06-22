import { getProductImageIds } from "../utils/database";
import { createImage } from "../utils/image";

const execute = async () => {
  const productIds = await getProductImageIds();
  const errors: Array<{ productId: string; e: any }> = [];
  for (const productId of productIds) {
    try {
      await createImage(productId);
      console.log(`SUCCESS: ${productId}`);
    } catch (e) {
      console.log(`FAILED productId ${productId} | ERROR: ${e}`);
      errors.push({ productId, e });
    }
  }
  console.log(`\nThere were ${errors.length} failed attempts.`);
  errors.forEach(({ productId, e }) => {
    console.log(`FAILED ID ${productId} | ERROR: ${e}`);
  });
};
execute();
