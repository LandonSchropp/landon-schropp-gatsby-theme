import { useLocation } from "@reach/router";
import { graphql, navigate } from "gatsby";
import _ from "lodash";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

import { NoteSummary } from "../../components/note-summary";
import { Tag } from "../../components/tag";
import {
  ARTICLE_CATEGORY,
  BOOK_CATEGORY,
  OTHER_CATEGORY,
  PODCAST_CATEGORY,
  TALK_CATEGORY,
  VIDEO_CATEGORY
} from "../../data/constants";
import { Layout } from "../../layout/layout";

export const query = graphql`
  query Notes {
    allNote(sort: {fields: [date], order: DESC}) {
      nodes {
        authors
        category
        date
        published
        slug
        source
        title
        url
      }
    }
  }
`;

export default function NotesPage({ data }) {

  const { href } = useLocation();
  let [ category, setCategory ] = useState(null);

  // If the URL contains a category, remove it and store it in the state.
  useEffect(() => {
    const url = new URL(href);

    if (url.searchParams.has("category")) {
      setCategory(url.searchParams.get("category"));
      url.searchParams.delete("category");
      navigate(`${ url.pathname }${ url.search }${ url.hash }`, { replace: true });
    }
  }, [ href ]);

  // Filter the notes if a category is selected.
  // NOTE: I'm using includes here to accomodate the `Live Talk` category, which should be included
  // by `Talk`.
  let notes = _.isNil(category)
    ? data.allNote.nodes
    : data.allNote.nodes.filter(article => article.category.includes(category));

  // TODO: Remove this once the example post is removed.
  notes = notes.filter(note => note.title !== "Example");

  function toggleCategory(updatedCategory) {
    setCategory(category === updatedCategory ? null : updatedCategory);
  }

  return <Layout
    title="Landon Schropp - Notes"
    description="My personal notes on blog posts, talks, podcasts and books."
  >

    <header className="header">
      <h1 className="header__header">
        Notes
      </h1>

      <p className="header__subhead">
        This is my personal collection of notes on entrepreneurship, development and design.
      </p>

      <div className="header__tags">
        <span className="header__tag-group">
          <Tag
            category={ ARTICLE_CATEGORY }
            onClick={ () => toggleCategory(ARTICLE_CATEGORY) }
            selected={ category === ARTICLE_CATEGORY }
          />
          <Tag
            category={ BOOK_CATEGORY }
            onClick={ () => toggleCategory(BOOK_CATEGORY) }
            selected={ category === BOOK_CATEGORY }
          />
          <Tag
            category={ VIDEO_CATEGORY }
            onClick={ () => toggleCategory(VIDEO_CATEGORY) }
            selected={ category === VIDEO_CATEGORY }
          />
        </span>
        <span className="header__tag-group">
          <Tag
            category={ TALK_CATEGORY }
            onClick={ () => toggleCategory(TALK_CATEGORY) }
            selected={ category === TALK_CATEGORY }
          />
          <Tag
            category={ PODCAST_CATEGORY }
            onClick={ () => toggleCategory(PODCAST_CATEGORY) }
            selected={ category === PODCAST_CATEGORY }
          />
          <Tag
            category={ OTHER_CATEGORY }
            onClick={ () => toggleCategory(OTHER_CATEGORY) }
            selected={ category === OTHER_CATEGORY }
          />
        </span>
      </div>
    </header>

    <section className="note-summaries">
      { notes.map(note => <NoteSummary key={ note.slug } note={ note } />) }
    </section>
  </Layout>;
}

NotesPage.propTypes = {
  data: PropTypes.object
};
