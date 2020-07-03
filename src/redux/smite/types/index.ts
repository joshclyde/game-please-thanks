import { GodData } from "./godData";
import { ItemData } from "./itemData";

export interface BuildItems {
  filters: {
    isAttackSpeed: boolean;
    isPhysicalPower: boolean;
    isPhysicalPenetration: boolean;
    isPhysicalLifesteal: boolean;
  };
}

export interface SmiteState {
  items: Array<ItemData>;
  gods: Array<GodData>;
  search: {
    term: string;
  };
  buildItems: {
    [key: string]: BuildItems;
  };
}
