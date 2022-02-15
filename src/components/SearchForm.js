import { React, useState } from "react";

export default function SearchForm() {
  const date = new Date();
  const [totalSearchKeyword, setTotalSearchKeyword] = useState("");
  const [createDate, setCreateDate] = useState(
    date.toISOString().substring(0, 10)
  );
  return (
    <div className="ant-card ant-card-bordered">
      <div className="ant-card-body">
        <form id="basic" className="ant-form ant-form-inline">
          <div className="ant-row ant-form-item">
            <div className="ant-col ant-form-item-label">
              <label htmlFor="basic_username" className="" title="통합검색">
                통합검색
              </label>
            </div>
            <div className="ant-col ant-form-item-control">
              <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                  <input
                    type="text"
                    id="basic_username"
                    className="ant-input"
                    value={totalSearchKeyword}
                    onChange={(e) => {
                      setTotalSearchKeyword(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ant-row ant-form-item">
            <div className="ant-col ant-form-item-label">
              <label htmlFor="basic_password" className="" title="등록일">
                등록일
              </label>
            </div>
            <div className="ant-col ant-form-item-control">
              <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                  <input
                    type="text"
                    id="basic_password"
                    className="ant-input"
                    value={createDate}
                    onChange={(e) => {
                      setCreateDate(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ant-row ant-form-item">
            <div className="ant-col ant-form-item-control">
              <div className="ant-form-item-control-input">
                <div className="ant-form-item-control-input-content">
                  <button type="submit" className="ant-btn ant-btn-primary">
                    <span>검색</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
