import { State } from "../types";

export type StateJustSmite = Pick<State, "smite">;

export const selectAllGodNames = (state: StateJustSmite): Array<string> =>
  state.smite.gods.map(({ Name }: { Name: string }) => Name);

const selectGodData = (
  state: StateJustSmite,
  godName: string,
): { godCard_URL: string; godIcon_URL: string } =>
  state.smite.gods.find(({ Name }: { Name: string }) => Name === godName);

const selectAbilityData = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
): {
  URL: string;
  Summary: string;
  Description: {
    itemDescription: {
      cooldown: string;
      cost: string;
      description: string;
      rankitems: Array<{ description: string; value: string }>;
      menuitems: Array<{ description: string; value: string }>;
    };
  };
} =>
  state.smite.gods.find(({ Name }: { Name: string }) => Name === godName)[
    `Ability_${abilityIndex}`
  ];

export const selectGodIcon = (state: StateJustSmite, godName: string): string =>
  selectGodData(state, godName).godIcon_URL;

export const selectGodCardUrl = (state: StateJustSmite, godName: string): string =>
  selectGodData(state, godName).godCard_URL;

export const selectGodAbilityImageUrl = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) => selectAbilityData(state, godName, abilityIndex).URL;

export const selectGodAbilityName = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) => selectAbilityData(state, godName, abilityIndex).Summary;

export const selectGodAbilityCooldown = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) => selectAbilityData(state, godName, abilityIndex).Description.itemDescription.cooldown;

export const selectGodAbilityCost = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) => selectAbilityData(state, godName, abilityIndex).Description.itemDescription.cost;

export const selectGodAbilityDescription = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) =>
  selectAbilityData(state, godName, abilityIndex).Description.itemDescription.description;

export const selectGodAbilityStats = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) =>
  selectAbilityData(state, godName, abilityIndex).Description.itemDescription.rankitems;

export const selectGodAbilityStatsMore = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) =>
  selectAbilityData(state, godName, abilityIndex).Description.itemDescription.menuitems;

export const selectSmiteSearchTerm = (state: StateJustSmite) => state.smite.search.term;
