import React, { useState } from "react";
import "./TableStyle.css";
import headJsonData from "../JSON/HeadJson.json";
import JsonData from "../JSON/newJson.json";

const NewTableData = () => {
  const [showRow, SetShowRow] = useState({});
  const [showChildRow, SetshowChildRow] = useState({});
  const [showSubChildRow, SetshowSubChildRow] = useState({});

  const toggleHandler = () => {
    SetShowRow(!showRow);
  };
  const toggleHandlerchild = () => {
    SetshowChildRow(!showChildRow);
  };
  const toggleHandlerSubChild = () => {
    SetshowSubChildRow(!showSubChildRow);
  };
  return (
    <table width="100%">
      <thead className="thead">
        {headJsonData.map((datalist, headindex) => (
          <th scope="col" key={headindex}>
            {datalist}
          </th>
        ))}
      </thead>

      <tbody>
        {JsonData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <tr className="TableWrapper">
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.items.security} </td>
                <td>{item.items.reqRt} </td>
                <td>{item.items.reqQty} </td>
                <td>{item.items.secname}</td>
                <td>{item.items.netCurrentlyLend} </td>
                <td>
                  {item.items.setlLoc}
                  {item.items.multiData?.items.length > 0 ? (
                    <button onClick={toggleHandler} className="btnHandler">
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
                      <tr className={!showRow ? "childWrapper" : ""}>
                        <td>
                          <input type="checkbox" />
                        </td>
                        <td>{data.security} </td>
                        <td>{data.reqRt} </td>
                        <td>{data.reqQty} </td>
                        <td>{data.secname} </td>
                        <td>{data.netCurrentlyLend} </td>
                        <td>{data.setlLoc} </td>
                        <td>
                          {data.reclaimRt}
                          {data.multiChildData?.items.length > 0 ? (
                            <button
                              onClick={toggleHandlerchild}
                              className="btnHandler"
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
                                    !showChildRow ? "childWrapper" : ""
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
                                  <td>{innerdata.setlLoc} </td>
                                  <td>
                                    {innerdata.reclaimRt}
                                    {innerdata.innermultiChildData?.itmes
                                      .length > 0 ? (
                                      <button
                                        onClick={toggleHandlerSubChild}
                                        className="btnHandler"
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
                                                ? "childWrapper"
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
                                            <td>{list.setlLoc} </td>
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
