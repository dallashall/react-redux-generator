export const asArray = ({ all }) => (
  Object.keys(all).map(key => all[key])
);
