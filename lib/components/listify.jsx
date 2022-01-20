import _ from "lodash";
import PropTypes from "prop-types";

function intersperse(array, separator) {
  return array.reduce((accumulator, item, index) => {
    accumulator.push(item);

    if (index !== array.length - 1) {
      accumulator.push(separator);
    }

    return accumulator;
  }, []);
}

export function Listify({ items }) {
  if (items.length === 0) {
    return null;
  }

  if (items.length === 1) {
    return items[0];
  }

  return [
    ...intersperse(_.initial(items), ", "),
    " and ",
    _.last(items)
  ];
}

Listify.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired
};
