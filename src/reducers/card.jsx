const list = [
  {
    name: "Heroes Tier List",
    description: "List of current meta heroes.",
    wallpaper: "Chou",
    ref: "HeroesTierList",
    id: 1,
  },

  {
    name: "Heroes",
    description: "List of all heroes and details.",
    wallpaper: "Kimmy",
    ref: "Heroes",
    id: 2,
  },
  {
    name: "Guides",
    description: "Guides for new or experience players.",
    wallpaper: "Claude",
    ref: "Guides",
    id: 3,
  },
  {
    name: "Preparation",
    description:
      "Best Item, Spell and Emblem from top global or professional players.",
    wallpaper: "Kaja",
    ref: "Heroes",
    id: 4,
  },
];

const cardListReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_LIST":
      return list;
    default:
      return state;
  }
};

export default cardListReducer;
