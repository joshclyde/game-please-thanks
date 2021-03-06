import { createProductImage } from "../utils/image";

/*
  Use this whenever I am testing changes to the createImage function
*/
const execute = async () => {
  const productIds = [
    `9P6F6TBGGVK3`, // risk of rain,
    `9P2N57MC619K`, // sea of thieves,
    `BQ7NMRJT1NQ4`, // don't starve me,
    `9NBLGGH537BL`, // minecraft,
    `BPQ955FQFPH6`, // destiny 2,
    `C2MHS238PDNS`, // smite,
    `BNG91PT95LQN`, // monster hunter,
    `BPQZT43FWD49`, // gang beasts,
    `BPK4ZKFCFL5G`, // halo,
    `C125W9BG2K0V`, // rocket league,
    `C1C4DZJPBC2V`, // overwatch,
    `BNNMLWZRNQF6`, // ultimate chicken horse,
    `C21TDXKRNMHZ`, // halo wars 2,
    `C10GWTNNNBZ8`, // castle crashers,
    `9NKJ0VZQ4N0L`, // it takes two,
    `C0GWTPD0S8S1`, // star wars 2,
    `BPJ686W6S0NH`, // gta v,
    `C2JQRC2C49B0`, // destiny,
    `9MT6TG9CXR2H`, // FAILING
  ];

  const errors: Array<{ productId: string; e: any }> = [];
  for (const productId of productIds) {
    try {
      await createProductImage(productId);
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
