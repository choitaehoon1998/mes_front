import React from "react";

const imageText = (props) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <span style={{ width: "30%", fontSize: "25px" }}>{props.children}</span>
      <span style={{ width: "70%", fontSize: "25px" }}>{props.data}</span>
    </div>
  );
};

export default imageText;
