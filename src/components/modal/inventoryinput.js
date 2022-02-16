import React from "react";

function InventoryInput(props) {
  const { inventoryData } = props;

  return (
    <>
      <input
        type="text"
        name="inventoryinfo"
        value={inventoryData}
        className="form-shape"
        // onFocus="this.blur();"
      />
    </>
  );
}

export default InventoryInput;
