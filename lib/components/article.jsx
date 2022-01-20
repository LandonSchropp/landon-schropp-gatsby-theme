import { format, parseISO } from "date-fns";
import { MDXRenderer } from "gatsby-plugin-mdx";
import PropTypes from "prop-types";
import React from "react";

import { validateDateString } from "../utilities/date";
import { Header } from "./header";

export function Article({ article, content }) {
  return <article className="article">
    <Header
      title={ article.title }
      subText={
        <>
          <span rel="author">Landon Schropp</span>
          { " " }
          •
          { " " }
          <time dateTime={ article.date }>{ format(parseISO(article.date), "PPP") }</time>
        </>
      }
    />

    <MDXRenderer>
      { content }
    </MDXRenderer>
  </article>;
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    date: validateDateString,
    published: PropTypes.bool.isRequired
  }).isRequired,
  content: PropTypes.string.isRequired
};
