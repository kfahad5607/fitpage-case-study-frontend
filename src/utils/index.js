const TAG_COLORS = {
  green: '#34B71F',
  red: '#F3392F',
};

const sorter = (a, b) => {
  if (!Number.isInteger(a) && Number.isInteger(b)) return -1;
  if (Number.isInteger(a) && !Number.isInteger(b)) return 1;

  return Math.abs(a) - Math.abs(b);
};

export const sortNumbers = (numbers) => {
  return JSON.parse(JSON.stringify(numbers)).sort(sorter);
};

export const getTagColor = (name) => {
  return TAG_COLORS[name] || name;
};

export const titleCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
