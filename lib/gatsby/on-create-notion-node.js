const { createDataNode } = require("./data-node");

const NOTION_NODE_TYPE = "Notion";

function isPublished(node) {
  return node.properties["Published"].value === true;
}

function isType(node, type) {
  return node.properties["Type"].value.string === type;
}

// A node should only be transformed if:
//
// * It's a Notion node.
// * It has a `Type` field that's set to the provided type.
// * It has a `Published` field that's set to true.
function isValidNotionNode(node, type) {
  return node.internal.type === NOTION_NODE_TYPE && isType(node, type) && isPublished(node);
}

/**
 * Constructs an onCreateNode function specific to notion nodes.
 * @param Each Notion node must have a `Type` field that indicates its content type. This parameter
 * is used to filter those fields.
 * @param transformNode This function is called to transform the notion node to an object.
 * @return Returns a function that can be used for Gatsby's onCreateNode callback.
 */
exports.buildOnCreateNotionNode = (type, transformNode) => {
  return async ({ node, ...gatsby }) => {
    if (!isValidNotionNode(node, type)) {
      return;
    }

    createDataNode(node, type, gatsby, transformNode(node));
  };
};

