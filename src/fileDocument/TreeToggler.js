import React from "react";
import styled from "styled-components";

const Toggler = styled(({ state, ...props }) => (
  <a {...props}>
    {state === "closed" && <i> + </i>}
    {state === "opened" && <i> ¬ </i>}
  </a>
))`
  color: #333;
  display: inline-block;
  text-align: center;
  margin-right: 2px;
`;

export default Toggler;
