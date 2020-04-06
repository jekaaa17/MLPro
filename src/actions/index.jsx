export const drawerToggleClick = () => {
  return {
    type: "DRAWERTOGGLE_CLICK",
  };
};

export const backDropClick = () => {
  return {
    type: "BACKDROP_CLICK",
  };
};

export const getList = () => {
  return {
    type: "GET_LIST",
  };
};

export const getGuides = () => {
  return {
    type: "GET_GUIDES",
  };
};

export const getAllGuides = () => {
  return {
    type: "GET_ALL_GUIDES",
  };
};

export const getAll = () => {
  return {
    type: "GET_ALL",
  };
};

export const getFighter = () => {
  return {
    type: "GET_FIGHTER",
  };
};

export const getAssasin = () => {
  return {
    type: "GET_ASSASIN",
  };
};

export const getMarksman = () => {
  return {
    type: "GET_MARKSMAN",
  };
};

export const getMage = () => {
  return {
    type: "GET_MAGE",
  };
};

export const getSupport = () => {
  return {
    type: "GET_SUPPORT",
  };
};

export const getTank = () => {
  return {
    type: "GET_TANK",
  };
};

export const openModal = () => {
  return {
    type: "OPEN_MODAL",
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};

/////////////////////////////////////

export const SEARCH_HERO = "SEARCH_HERO";

export function searchHero(data) {
  return {
    type: SEARCH_HERO,
    payload: data,
  };
}

export const SEARCH_TANK = "SEARCH_TANK";

export function searchTank(data) {
  return {
    type: SEARCH_TANK,
    payload: data,
  };
}

export const SEARCH_FIGHTER = "SEARCH_FIGHTER";

export function searchFighter(data) {
  return {
    type: SEARCH_FIGHTER,
    payload: data,
  };
}

export const SEARCH_ASSASIN = "SEARCH_ASSASIN";

export function searchAssasin(data) {
  return {
    type: SEARCH_ASSASIN,
    payload: data,
  };
}

export const SEARCH_MAGE = "SEARCH_MAGE";

export function searchMage(data) {
  return {
    type: SEARCH_MAGE,
    payload: data,
  };
}

export const SEARCH_MARKSMAN = "SEARCH_MARKSMAN";

export function searchMarksman(data) {
  return {
    type: SEARCH_MARKSMAN,
    payload: data,
  };
}

export const SEARCH_SUPPORT = "SEARCH_SUPPORT";

export function searchSupport(data) {
  return {
    type: SEARCH_SUPPORT,
    payload: data,
  };
}
