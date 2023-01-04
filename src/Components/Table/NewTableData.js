import React, { useState } from "react";
import "./TableStyle.css";
import headJsonData from "../JSON/HeadJson.json";
import JsonData from "../JSON/newJson.json";

const NewTableData = () => {
  const [showRow, SetShowRow] = useState({});
  const [showChildRow, SetshowChildRow] = useState({});
  const [showSubChildRow, SetshowSubChildRow] = useState({});

  const toggleHandler = (index) => {
    console.log(index);
    SetShowRow(!showRow);
  };
  const toggleHandlerchild = (index) => {
    console.log(index);
    SetshowChildRow(!showChildRow);
  };
  const toggleHandlerSubChild = (index) => {
    console.log(index);
    SetshowSubChildRow(!showSubChildRow);
  };
  return (
    <table className="TableWrapper" border={1}>
      {headJsonData.map((datalist, headindex) => {
        return (
          <th className="table-head" key={headindex}>
            {datalist}
          </th>
        );
      })}

      <tbody>
        {JsonData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.items.security} </td>
                <td>{item.items.reqRt} </td>
                <td>{item.items.reqQty} </td>
                <td>{item.items.secname}</td>
                <td>{item.items.netCurrentlyLend} </td>
                <td>
                  {item.items.setlLock}
                  {item.items.multiData?.items.length > 0 ? (
                    <button
                      onClick={() => toggleHandler(index)}
                      style={{ cursor: "pointer" }}
                    >
                      {showRow ? "+" : "-"}
                    </button>
                  ) : (
                    ""
                  )}
                </td>
                <td>{item.items.reclaimRt} </td>
                <td>{item.items.collType} </td>
                <td>{item.items.loanRt} </td>
                <td>{item.items.collrate} </td>
                <td>{item.items.collLvl} </td>
                <td>{item.items.liftableQty} </td>
                <td>{item.items.availableExLimits} </td>
              </tr>
              {!showRow
                ? item.items.multiData?.items.map((data, i) => {
                    return (
                      <React.Fragment key={i}>
                        <tr className={!showRow ? "childBgcolor" : ""}>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>{data.security} </td>
                          <td>{data.reqRt} </td>
                          <td>{data.reqQty} </td>
                          <td>{data.secname} </td>
                          <td>{data.netCurrentlyLend} </td>
                          <td>{data.setlLock} </td>
                          <td>
                            {data.reclaimRt}
                            {data.multiChildData?.items.length > 0 ? (
                              <button
                                onClick={() => toggleHandlerchild(i)}
                                style={{ cursor: "pointer" }}
                              >
                                {showChildRow ? "+" : "-"}
                              </button>
                            ) : (
                              ""
                            )}
                          </td>
                          <td>{data.collType} </td>
                          <td>{data.loanRt} </td>
                          <td>{data.collrate} </td>
                          <td>{data.collLvl} </td>
                          <td>{data.liftableQty} </td>
                          <td>{data.availableExLimits} </td>
                        </tr>
                        {!showChildRow
                          ? data.multiChildData?.items.map(
                              (innerdata, innerKey) => {
                                return (
                                  <React.Fragment key={innerKey}>
                                    <tr
                                      className={
                                        !showChildRow ? "childBgcolor" : ""
                                      }
                                    >
                                      <td>
                                        <input type="checkbox" />
                                      </td>
                                      <td>{innerdata.security} </td>
                                      <td>{innerdata.reqRt} </td>
                                      <td>{innerdata.reqQty} </td>
                                      <td>{innerdata.secname} </td>
                                      <td>{innerdata.netCurrentlyLend} </td>
                                      <td>{innerdata.setlLock} </td>
                                      <td>
                                        {innerdata.reclaimRt}
                                        {innerdata.innermultiChildData?.itmes
                                          .length > 0 ? (
                                          <button
                                            onClick={() =>
                                              toggleHandlerSubChild(innerKey)
                                            }
                                            style={{ cursor: "pointer" }}
                                          >
                                            {showSubChildRow ? "+" : "-"}
                                          </button>
                                        ) : (
                                          ""
                                        )}
                                      </td>
                                      <td>{innerdata.collType} </td>
                                      <td>{innerdata.loanRt} </td>
                                      <td>{innerdata.collrate} </td>
                                      <td>{innerdata.collLvl} </td>
                                      <td>{innerdata.liftableQty} </td>
                                      <td>{innerdata.availableExLimits} </td>
                                    </tr>
                                    {!showSubChildRow
                                      ? innerdata.innermultiChildData?.itmes.map(
                                          (list) => {
                                            return (
                                              <>
                                                <tr
                                                  className={
                                                    !showChildRow
                                                      ? "childBgcolor"
                                                      : ""
                                                  }
                                                >
                                                  <td>
                                                    <input type="checkbox" />
                                                  </td>
                                                  <td>{list.security} </td>
                                                  <td>{list.reqRt} </td>
                                                  <td>{list.reqQty} </td>
                                                  <td>{list.secname} </td>
                                                  <td>
                                                    {list.netCurrentlyLend}
                                                  </td>
                                                  <td>{list.setlLock} </td>
                                                  <td>{list.reclaimRt}</td>
                                                  <td>{list.collType} </td>
                                                  <td>{list.loanRt} </td>
                                                  <td>{list.collrate} </td>
                                                  <td>{list.collLvl} </td>
                                                  <td>{list.liftableQty} </td>
                                                  <td>
                                                    {list.availableExLimits}
                                                  </td>
                                                </tr>
                                              </>
                                            );
                                          }
                                        )
                                      : ""}
                                  </React.Fragment>
                                );
                              }
                            )
                          : ""}
                      </React.Fragment>
                    );
                  })
                : ""}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default NewTableData;
