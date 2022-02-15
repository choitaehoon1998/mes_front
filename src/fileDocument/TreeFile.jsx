import React from "react";
import InfiniteTree from "react-infinite-tree";
import TreeNode from "./TreeNode";
import Toggler from "./TreeToggler";

const data = {
  id: "root",
  name: "root",
  children: [
    {
      id: "01",
      name: "000.개요",
      children: [
        {
          id: "01-01",
          name: "000.개요01",
          loadOnDemand: true,
        },
        {
          id: "01-02",
          name: "000.개요02",
          loadOnDemand: true,
        },
      ],
    },
    {
      id: "02",
      name: "001.개요-Summary",
      children: [
        {
          id: "02-01",
          name: "000.개요02",
          children: [
            {
              id: "02-01-01",
              name: "000.개요Neted",
              loadOnDemand: true,
            },
          ],
        },
      ],
    },
  ],
};
const TreeFile = () => {
  return (
    <div>
      <InfiniteTree width="500px" height="400px" rowHeight={30} data={data}>
        {({ node, tree }) => {
          // Determine the toggle state
          let toggleState = "";
          const hasChildren = node.hasChildren();

          if (
            (!hasChildren && node.loadOnDemand) ||
            (hasChildren && !node.state.open)
          ) {
            toggleState = "closed";
          }
          if (hasChildren && node.state.open) {
            toggleState = "opened";
          }

          return (
            <TreeNode
              selected={node.state.selected}
              depth={node.state.depth}
              onClick={(event) => {
                tree.selectNode(node);
              }}
            >
              <Toggler
                state={toggleState}
                onClick={() => {
                  if (toggleState === "closed") {
                    tree.openNode(node);
                  } else if (toggleState === "opened") {
                    tree.closeNode(node);
                  }
                }}
              />
              <span>{node.name}</span>
            </TreeNode>
          );
        }}
      </InfiniteTree>
    </div>
  );
};

export default TreeFile;
