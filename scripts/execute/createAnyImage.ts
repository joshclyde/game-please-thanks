import { createImage } from "../utils/image";

const paths: Array<{ inputPath: string; outputPath: string }> = [
  // EXAMPLE
  // {
  //   inputPath: `./scripts/data/xboxProfileImage/xboxLogo.png`,
  //   outputPath: `./scripts/data/profileImage/default.png`,
  // },
  {
    inputPath: `./scripts/data/xboxProfileImage/defaultProfile.png`,
    outputPath: `./scripts/data/profileImage/defaultProfile.jpeg`,
  },
];

const execute = async () => {
  let imagesLeft = paths.length;
  for (const { inputPath, outputPath } of paths) {
    imagesLeft--;
    try {
      await createImage(inputPath, outputPath);
      console.log(`SUCCESS: ${inputPath}`);
    } catch (e) {
      console.log(`FAILED ${inputPath} | ERROR: ${e}`);
    }
    console.log(`${imagesLeft} images left to go`);
  }
};
execute();
