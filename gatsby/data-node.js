/**
 * This is a helper functio that can be used to quickly create data nodes in Gatsby.
 * @param parent The parent node that will have data appended to it.
 * @param type A string representing the new node type.
 * @param gatsby The gatsby properties passed to onCreateNode.
 * @param data The data to be included in the node.
 */
function createDataNode(parent, type, {
  actions: { createNode, createParentChildLink },
  createNodeId,
  createContentDigest
}, data) {
  const dataNode = {
    ...data,
    id: createNodeId(`${ parent.id } >>> ${ type }`),
    internal: {
      contentDigest: createContentDigest(data),
      type
    }
  };

  createNode(dataNode);
  createParentChildLink({ parent, child: dataNode });
}

module.exports = { createDataNode };
