import React from "react";
import "./TableStyle.css";
import HeadJsonData from "../JSON/HeadJson.json";
import JsonData from "../JSON/newJson.json";

const TableData = () => {
  const handleCollaps = (id) => {
    console.log("CollData", id);
  };
  return (
    <>
      <table width="100%">
        {/* HeadingData */}
        <thead className="thead">
          {HeadJsonData.map((headItems, headindex) => {
            return (
              <th scope="col" key={headindex}>
                {headItems}
              </th>
            );
          })}
        </thead>

        {/* BodyData */}
        <tbody>
          {JsonData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{item.items.security}</td>
                  <td>{item.items.reqRt}</td>
                  <td>{item.items.reqQty}</td>
                  <td>{item.items.secname}</td>
                  <td>{item.items.netCurrentlyLend}</td>
                  <td>
                    {item.items.setlLoc}
                    {item.items &&
                      item.items.multiData &&
                      item.items.multiData.name === "setlLoc" && (
                        <button
                          className="btnHandler"
                          onClick={() => handleCollaps(item.id)}
                        >
                          +
                        </button>
                      )}
                  </td>
                  <td>{item.items.reclaimRt}</td>
                  <td>{item.items.collType}</td>
                  <td>{item.items.loanRt}</td>
                  <td>{item.items.collrate}</td>
                  <td>{item.items.collLvl}</td>
                  <td>{item.items.liftableQty}</td>
                  <td>{item.items.availableExLimits}</td>
                </tr>
                {item.items.multiData?.items.map(
                  (multiItmes, multiChildIndex) => {
                    console.log(item.id);
                    return (
                      <React.Fragment key={multiChildIndex}>
                        <tr>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>{multiItmes.security}</td>
                          <td>{multiItmes.reqRt}</td>
                          <td>{multiItmes.reqQty}</td>
                          <td>{multiItmes.secname}</td>
                          <td>{multiItmes.netCurrentlyLend}</td>
                          <td>{multiItmes.setlLoc}</td>
                          <td>
                            {multiItmes.reclaimRt}
                            {multiItmes.multiChildData &&
                              multiItmes.multiChildData.items &&
                              multiItmes.multiChildData.name ===
                                "reclaimRt" && (
                                <button
                                  className="btnHandler"
                                  onClick={() => handleCollaps()}
                                >
                                  +
                                </button>
                              )}
                          </td>
                          <td>{multiItmes.collType}</td>
                          <td>{multiItmes.loanRt}</td>
                          <td>{multiItmes.collrate}</td>
                          <td>{multiItmes.collLvl}</td>
                          <td>{multiItmes.liftableQty}</td>
                          <td>{multiItmes.availableExLimits}</td>
                        </tr>
                        {multiItmes.multiChildData?.items.map(
                          (innerItems, innerChildIndex) => {
                            return (
                              <React.Fragment key={innerChildIndex}>
                                <tr>
                                  <td>
                                    <input type="checkbox" />
                                  </td>
                                  <td>{innerItems.security}</td>
                                  <td>{innerItems.reqRt}</td>
                                  <td>{innerItems.reqQty}</td>
                                  <td>{innerItems.secname}</td>
                                  <td>{innerItems.netCurrentlyLend}</td>
                                  <td>{innerItems.setlLoc}</td>
                                  <td>
                                    {innerItems.reclaimRt}
                                    {innerItems.innermultiChildData &&
                                      innerItems.innermultiChildData.itmes &&
                                      innerItems.innermultiChildData.name ===
                                        "reclaimRt" && (
                                        <button
                                          className="btnHandler"
                                          onClick={() => handleCollaps(item.id)}
                                        >
                                          +
                                        </button>
                                      )}
                                  </td>
                                  <td>{innerItems.collType}</td>
                                  <td>{innerItems.loanRt}</td>
                                  <td>{innerItems.collrate}</td>
                                  <td>{innerItems.collLvl}</td>
                                  <td>{innerItems.liftableQty}</td>
                                  <td>{innerItems.availableExLimits}</td>
                                </tr>
                                {innerItems.innermultiChildData?.itmes.map(
                                  (innnerChildItems, innerMultiChildIndex) => {
                                    return (
                                      <tr key={innerMultiChildIndex}>
                                        <td>
                                          <input type="checkbox" />
                                        </td>
                                        <td>{innnerChildItems.security}</td>
                                        <td>{innnerChildItems.reqRt}</td>
                                        <td>{innnerChildItems.reqQty}</td>
                                        <td>{innnerChildItems.secname}</td>
                                        <td>
                                          {innnerChildItems.netCurrentlyLend}
                                        </td>
                                        <td>{innnerChildItems.setlLoc}</td>
                                        <td>{innnerChildItems.reclaimRt}</td>
                                        <td>{innnerChildItems.collType}</td>
                                        <td>{innnerChildItems.loanRt}</td>
                                        <td>{innnerChildItems.collrate}</td>
                                        <td>{innnerChildItems.collLvl}</td>
                                        <td>{innnerChildItems.liftableQty}</td>
                                        <td>
                                          {innnerChildItems.availableExLimits}
                                        </td>
                                      </tr>
                                    );
                                  }
                                )}
                              </React.Fragment>
                            );
                          }
                        )}
                      </React.Fragment>
                    );
                  }
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
