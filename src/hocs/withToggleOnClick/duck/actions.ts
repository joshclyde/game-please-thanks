const TOGGLE_ON_CLICK = "toggleOnClick";

export const toggleOnClick = ({ componentId }: { componentId: string }) => ({
  type: TOGGLE_ON_CLICK,
  payload: {
    componentId,
  },
});

export const getIsAction = ({ type }: { type: string }) => type === TOGGLE_ON_CLICK;
export const getComponentId = ({ componentId }: { componentId: string }) => componentId;
