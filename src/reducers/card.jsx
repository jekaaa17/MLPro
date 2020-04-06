const list = [
  {
    name: "Heroes Tier List",
    description: "List of current meta heroes.",
    wallpaper: "Chou",
    id: "HeroesTierList",
  },

  {
    name: "Heroes",
    description: "List of all heroes and details.",
    wallpaper: "Kimmy",
    id: "Heroes",
  },
  {
    name: "Guides",
    description: "Guides for new or experience players.",
    wallpaper: "Claude",
    id: "Guides",
  },
  {
    name: "Preparation",
    description:
      "Best Item, Spell and Emblem from top global or professional players.",
    wallpaper: "Kaja",
    id: "Heroes",
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
