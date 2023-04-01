const TAG_COLORS = {
  green: "#34B71F",
  red: "#F3392F",
};

export const getTagColor = (name) => {
  return TAG_COLORS[name] || name;
};
