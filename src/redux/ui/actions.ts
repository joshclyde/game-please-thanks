export const SET_WIDTH = "SET_WIDTH";
export const setWidth = (width: number) => ({ type: SET_WIDTH, width });

export const SET_HEIGHT = "SET_HEIGHT";
export const setHeight = (height: number) => ({ type: SET_HEIGHT, height });

export const SET_SIZE = "SET_SIZE";
export const setSize = (width: number, height: number) => ({ type: SET_SIZE, width, height });
