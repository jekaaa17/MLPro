const list = [
  {
    name: "How to Reach Mythic Faster for New Player",
    description: "",
    wallpaper: "rank-guide",
    id: 1,
  },
  {
    name: "Best Heroes for Solo Player",
    description: "",
    wallpaper: "best-heroes-guide",
    id: 2,
  },
  {
    name: "How to Max Emblems Faster",
    description: "",
    wallpaper: "emblem-guide",
    id: 3,
  },
];

const allList = [
  {
    name: "How to Reach Mythic Faster for New Player",
    wallpaper: "rank-guide",
    id: 1,
  },
  {
    name: "Best Heroes for Solo Player",
    wallpaper: "best-heroes-guide",
    id: 2,
  },
  {
    name: "How to Max Emblems Faster",
    wallpaper: "emblem-guide",
    id: 3,
  },
  {
    name: "How to Buy Heroes in Mobile Legends Without Using Diamond",
    wallpaper: "gold-usage-guide",
    id: 4,
  },
];

const guidesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_GUIDES":
      return list;
    case "GET_ALL_GUIDES":
      return allList;
    default:
      return state;
  }
};

export default guidesReducer;
