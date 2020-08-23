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

export interface BuildAGod {
  godName?: string;
  level?: number;
  items: Array<number>;
  view: "god" | "item 0" | "item 1" | "item 2" | "item 3" | "item 4" | "item 5";
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
  buildAGod: {
    [key: string]: BuildAGod;
  };
}
