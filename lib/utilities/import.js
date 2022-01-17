import _ from "lodash";
import { camelCase } from "voca";

/**
 * Returns the basename of a given file path.
 * @param path The Unix file path whose basename will be returned.
 * @return Returns the basename of the path (without the extension).
 */
export function basename(path) {
  return camelCase(path.replace(/.*\//, "").replace(/\.[^.]+$/, ""));
}

/**
 * This is a utility function that makes require.context easier to work with. To use it, pass the
 * results of require.context into this function.
 *
 * const icons = importHash(require.context("../../images/icons", false, /\.svg$/));
 */
export function importHash(requireContext, property = "default") {
  return _.fromPairs(requireContext.keys().map(key => {
    return [
      basename(key),
      requireContext(key)[property]
    ];
  }));
}
