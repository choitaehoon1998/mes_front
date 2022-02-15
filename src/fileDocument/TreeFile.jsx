import React from "react";
import InfiniteTree from "react-infinite-tree";
import TreeNode from "./TreeNode";

const data = {
  id: "root",
  name: "root",

  children: [
    {
      id: "01",
      name: "000.개요",
      loadOnDemand: true,
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
      loadOnDemand: true,
      children: [
        {
          id: "02-01",
          name: "000.개요02",
          loadOnDemand: true,
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
    <InfiniteTree width={400} height={500} rowHeight={35} data={data}>
      {({ node, tree }) => {
        let toggleState = "";
        const hasChildren = node.hasChildren();

        if (!hasChildren || (hasChildren && !node.state.open)) {
          toggleState = "closed";
        }
        if (hasChildren && node.state.open) {
          toggleState = "opened";
        }

        return (
          <TreeNode
            depth={node.state.depth}
            onClick={() => {
              if (toggleState === "closed") {
                tree.openNode(node);
              } else if (toggleState === "opened") {
                tree.closeNode(node);
              }
            }}
          >
            <>
              {toggleState === "closed" && <i> + </i>}
              {toggleState === "opened" && <i> ¬ </i>}
            </>
            <span> {node.name} </span>
          </TreeNode>
        );
      }}
    </InfiniteTree>
  );
};

export default TreeFile;
