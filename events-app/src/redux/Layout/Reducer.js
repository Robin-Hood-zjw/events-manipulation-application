import { SET_SIDER } from "./constants";

initiState = {
  siderProducts: "",
};

const LayoutReducer = (state = initiState, { type, payload }) => {
  switch (type) {
    case SET_SIDER:
      return {
        ...state,
        siderProducts: payload,
      };
    default:
      return state;
  }
};

export default LayoutReducer;
