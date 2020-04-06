const drawerReducer = (state = false, action) => {
  switch (action.type) {
    case "DRAWERTOGGLE_CLICK":
      return !state;
    case "BACKDROP_CLICK":
      return !state;
    default:
      return state;
  }
};

export default drawerReducer;
