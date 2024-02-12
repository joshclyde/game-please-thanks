import { GameItemsEntity } from "./TitleHub";

export class Title {
  data: GameItemsEntity;

  constructor(data: GameItemsEntity) {
    this.data = data;
  }

  get name() {
    return this.data.DisplayName;
  }

  get titleId() {
    return this.data.Url.split(`titleid=`)[1].split(`&`)[0];
  }

  get isXbox() {
    return this.data.Devices?.some((x) => x.includes(`Xbox`));
  }
}
