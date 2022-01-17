import { MDXProvider } from "@mdx-js/react";
import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";
import useDarkMode from "use-dark-mode";

import { HighlightedPreHack } from "../components/highlighted-pre-hack";

// Custom components used in MDX rendering.
const MDX_COMPONENTS = {
  pre: HighlightedPreHack
};

export function Layout({ children, className, title, description, navigation, fullScreen }) {
  let { value: darkMode } = useDarkMode();

  return <>
    <Helmet>
      <title>{ title }</title>
      <meta name="description" content={ description } />

      <meta name="viewport" content="width=device-width, initial-scale=1" />

      { /* Google Fonts */ }
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href={
          "https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:ital,wght@0,400;0,700;1,"
          + "400;1,700&family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400;1,700;1,800&family="
          + "Source+Code+Pro:ital@0;1&display=swap"
        }
        rel="stylesheet"
      />
      <body data-theme={ darkMode ? "dark" : "light" } />
    </Helmet>
    { navigation }
    <main className={ classNames("layout", className, { "layout--full-screen": fullScreen }) }>
      <MDXProvider components={ MDX_COMPONENTS }>
        { children }
      </MDXProvider>
    </main>
  </>;
}

Layout.defaultProps = {
  fullScreen: false
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  navigation: PropTypes.node
};
