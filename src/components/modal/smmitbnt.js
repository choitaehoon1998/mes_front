import React from "react";

const SmmitBnt = (props) => {
  const { close } = props;
  return (
    <button type="submit" className="close" onClick={close}>
      {props.name}
    </button>
  );
};

export default SmmitBnt;
