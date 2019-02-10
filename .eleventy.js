// TODO: Figure out how to move the root pages into a separate `pages` directory.
module.exports = function(eleventyConfig) {

  eleventyConfig.addLayoutAlias("default", "layouts/layout.njk");
  eleventyConfig.addLayoutAlias("note", "layouts/note.njk");

  return {
    dir: {
      input: "source",
      output: "build",
      includes: "includes"
    },
  };
};
