import classNames from "classnames";
import { isNil } from "lodash";
import PropTypes from "prop-types";
import React from "react";

function HeaderLink({ className, children, href }) {
  if (isNil(href)) {
    return children;
  }

  // TODO: Use a Gatsby Link if applicable.
  return <a className={ className } href={ href }>{ children }</a>;
}

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string
};

export function Header({ className, children, superText, title, href, subText }) {
  return <header className={ classNames("header", className) }>
    <h1 className="header__header">
      <span className="header__super-text">
        { superText }
      </span>
      { " " }
      <span className="header__title">
        <HeaderLink className="header__title-link" href={ href }>{ title }</HeaderLink>
      </span>
    </h1>
    <div className="header__sub-text" data-test-id="sub-text">
      { subText }
    </div>
    { children }
  </header>;
}

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  superText: PropTypes.node,
  title: PropTypes.node.isRequired,
  subText: PropTypes.node,
  href: PropTypes.string
};
