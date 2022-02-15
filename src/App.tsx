import React from "react";
import "./App.css";
import "./css/light-theme.css";
import "axui-datagrid/style.css";
import GridDocument from "./fileDocument/GridDocument";
import GroupingList from "./fileDocument/GroupingList";
import FormHeader from "./form/formHeader";
import TreeFile from "./fileDocument/TreeFile";

function App() {
  return (
    <>
      <div className="app-content">
        <FormHeader />

        <h3>Dhandy File Management</h3>
        <div className="button-file">
          <button>EXPAND</button>
          <button>프로젝트</button>
          <button>폴더</button>
          <button>파일</button>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ border: "1px solid" }}>
            <TreeFile />
          </div>
          <div style={{ marginLeft: 50 }}>
            <GridDocument />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
