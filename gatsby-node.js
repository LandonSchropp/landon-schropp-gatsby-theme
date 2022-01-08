const { onCreateNotionNoteNode } = require("./gatsby/on-create-notion-note-node");
const { onCreateSVGDataNode } = require("./gatsby/on-create-svg-data-node");

// Add custom onCreateNode callbacks to Gatsby.
exports.onCreateNode = async (...parameters) => {
  await onCreateNotionNoteNode(...parameters);
  await onCreateSVGDataNode(...parameters);
};
