import { SET_SIDER } from "./constants";

export const setSider = (products) => {
  return {
    type: SET_SIDER,
    payload: products,
  };
};
