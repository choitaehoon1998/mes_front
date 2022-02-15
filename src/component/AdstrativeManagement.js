import React from "react";
import "../css/light-theme.css";
import "axui-datagrid/style.css";
import GridDocument from "../fileDocument/GridDocument";
import FormHeader from "../form/formHeader";
import TreeFile from "../fileDocument/TreeFile";
import ImageText from "../form/imageText";

const AdstrativeManagement = () => {
  return (
    <div>
      <div className="app-content">
        <FormHeader>행정관리</FormHeader>
        <div style={{ display: "flex" }}>
          <h3>Dhandy Document Management</h3>
          <input
            placeholder="문서제목"
            style={{ marginLeft: "205px", width: "20%" }}
          />
        </div>
        <div className="button-file">
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
          <div style={{ marginLeft: 50, width: "100%" }}>
            <h3 style={{ textAlign: "center" }}>PRIVIEW</h3>
            <div className="img-set-content">
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  border: "1px solid",
                  marginBottom: "15px",
                }}
              ></div>
            </div>
            <div>
              <ImageText>이름</ImageText>
              <ImageText>사이즈</ImageText>
              <ImageText>생성일</ImageText>
              <ImageText>생성자</ImageText>
              <ImageText>수정일</ImageText>
              <ImageText>수정자</ImageText>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                <button style={{ width: "350px", height: "50px" }}>
                  PREVIEW
                </button>
              </div>
              <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <button style={{ width: "350px", height: "50px" }}>
                  DOWNLOAD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdstrativeManagement;
