import { GodData } from "./godData";
import { ItemData } from "./itemData";

export interface SmiteState {
  items: Array<ItemData>;
  gods: Array<GodData>;
  search: {
    term: string;
  };
}
