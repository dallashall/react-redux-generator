export const asArray = ({ examples }) => (
  Object.keys(examples).map(key => examples[key])
);
