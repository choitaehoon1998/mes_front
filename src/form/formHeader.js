import React from "react";

const formHeader = (props) => {
  return (
    <div className="app-page-header">
      <h3 className="mb-0 mr-3 font-weight-bold">{props.children}</h3>
    </div>
  );
};

export default formHeader;
