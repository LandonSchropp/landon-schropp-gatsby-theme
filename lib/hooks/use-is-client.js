import { useEffect, useState } from "react";

/**
 * This hooks is designed to avoid rehydration issues. It works by using an effect to detect if a
 * component needs to be rerendered. This implementation is taken from
 * [here](https://www.nickbaxter.dev/gatsby-rehydration/).
 */
export const useIsClient = () => {
  const [ isClient, setClient ] = useState(false);
  useEffect(() => setClient(true), []);
  return isClient;
};
