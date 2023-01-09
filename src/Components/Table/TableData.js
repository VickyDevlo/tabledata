import React, { useState } from "react";
import "./TableStyle.css";
import HeadJsonData from "../JSON/HeadJson.json";
import JsonData from "../JSON/BodyJson.json";

const TableData = () => {
  const [activeRow, setActiveRow] = useState([]);

  const handleCollaps = (userId) => {
    console.log(userId);
    const currentRow = activeRow;
    const rowExpand = currentRow.includes(userId);

    const newRowExpand = rowExpand
      ? currentRow.filter((id) => id !== userId)
      : currentRow.concat(userId);

    setActiveRow(newRowExpand);
  };

  return (
    <table width="100%">
      <thead className="thead">
        {HeadJsonData.map((headItems, headindex) => {
          return (
            <th scope="col" key={headindex}>
              {headItems}
            </th>
          );
        })}
      </thead>

      <tbody>
        {JsonData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <tr className="TableWrapper">
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.items.security}</td>
                <td>{item.items.reqRt}</td>
                <td>{item.items.reqQty}</td>
                <td>{item.items.secname}</td>
                <td>{item.items.netCurrentlyLend}</td>
                <td
                  className={
                    activeRow.includes(item.id) &&
                    item.items &&
                    item.items.multiData &&
                    item.items.multiData.name === "setlLoc" &&
                    item.items.multiData?.items
                      ? "multiTd"
                      : ""
                  }
                >
                  {item.items.setlLoc}
                  {item.items &&
                    item.items.multiData &&
                    item.items.multiData.name === "setlLoc" && (
                      <button
                        className="btnHandler"
                        onClick={() => handleCollaps(item.id)}
                      >
                        {activeRow.includes(item.id) ? "-" : "+"}
                      </button>
                    )}
                </td>
                <td
                  className={
                    activeRow.includes(item.id) &&
                    item.items.multiInnerChildData?.name === "reclaimRt"
                      ? "lastchild"
                      : ""
                  }
                >
                  {item.items.reclaimRt}
                  {item.items &&
                    item.items.multiInnerChildData &&
                    item.items.multiInnerChildData.name === "reclaimRt" && (
                      <button
                        className="btnHandler"
                        onClick={() => handleCollaps(item.id)}
                      >
                        {activeRow.includes(item.id) ? "-" : "+"}
                      </button>
                    )}
                </td>

                <td>{item.items.collType}</td>
                <td>{item.items.loanRt}</td>
                <td>{item.items.collrate}</td>
                <td>{item.items.collLvl}</td>
                <td>{item.items.liftableQty}</td>
                <td>{item.items.availableExLimits}</td>
              </tr>

              {item.items.multiData &&
                item.items.multiData.items.map(
                  (multiItmes, multiChildIndex) => {
                    return (
                      <React.Fragment key={multiChildIndex}>
                        <tr
                          className={
                            activeRow.includes(item.id)
                              ? "active"
                              : "not-Active"
                          }
                          key={multiChildIndex}
                        >
                          <td></td>
                          <td>{multiItmes.security}</td>
                          <td>{multiItmes.reqRt}</td>
                          <td>{multiItmes.reqQty}</td>
                          <td>{multiItmes.secname}</td>
                          <td>{multiItmes.netCurrentlyLend}</td>
                          <td
                            className={
                              activeRow.includes(item.id) ? "multiTd" : ""
                            }
                          >
                            {multiItmes.setlLoc}
                          </td>
                          <td
                            className={
                              multiItmes.multiChildData?.name == "reclaimRt" &&
                              activeRow.includes(item.items.multiData.id)
                                ? "innerchind"
                                : ""
                            }
                          >
                            {multiItmes.reclaimRt}
                            {multiItmes.multiChildData &&
                              multiItmes.multiChildData.items &&
                              multiItmes.multiChildData.name ===
                                "reclaimRt" && (
                                <button
                                  className="btnHandler"
                                  onClick={() =>
                                    handleCollaps(item.items.multiData.id)
                                  }
                                >
                                  {activeRow.includes(item.items.multiData.id)
                                    ? "-"
                                    : "+"}
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

                        {multiItmes.multiChildData &&
                          multiItmes.multiChildData.items.map(
                            (innerItems, innerChildIndex) => {
                              return (
                                <React.Fragment key={innerChildIndex}>
                                  <tr
                                    className={
                                      activeRow.includes(
                                        item.items.multiData.id
                                      )
                                        ? "active"
                                        : "not-Active"
                                    }
                                  >
                                    <td></td>
                                    <td>{innerItems.security}</td>
                                    <td>{innerItems.reqRt}</td>
                                    <td>{innerItems.reqQty}</td>
                                    <td>{innerItems.secname}</td>
                                    <td>{innerItems.netCurrentlyLend}</td>
                                    <td
                                      className={
                                        activeRow.includes(item.id)
                                          ? "multiTd"
                                          : ""
                                      }
                                    >
                                      {innerItems.setlLoc}
                                    </td>
                                    <td
                                      className={`${activeRow.includes(item.items.multiData.id) &&
                                        innerItems.innermultiChildData?.name !=="reclaimRt"
                                          ? "innerchind"
                                          : ""}
                                          ${innerItems.innermultiChildData?.id === 33 &&
                                        activeRow.includes(
                                          innerItems.innermultiChildData.id
                                        )
                                          ? "secondChild"
                                          : ""
                                      }`}
                                    >
                                      {innerItems.reclaimRt}
                                      {innerItems.innermultiChildData &&
                                        innerItems.innermultiChildData.itmes &&
                                        innerItems.innermultiChildData.name ===
                                          "reclaimRt" && (
                                          <button
                                            className="btnHandler"
                                            onClick={() =>
                                              handleCollaps(
                                                innerItems.innermultiChildData
                                                  .id
                                              )
                                            }
                                          >
                                            {activeRow.includes(
                                              innerItems.innermultiChildData.id
                                            )
                                              ? "-"
                                              : "+"}
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

                                  {innerItems.innermultiChildData &&
                                    innerItems.innermultiChildData.itmes.map(
                                      (
                                        innerChildItems,
                                        innerMultiChildIndex
                                      ) => {
                                        return (
                                          <>
                                            <tr
                                              key={innerMultiChildIndex}
                                              className={
                                                activeRow.includes(
                                                  innerItems.innermultiChildData
                                                    .id
                                                )
                                                  ? "active"
                                                  : "not-Active"
                                              }
                                            >
                                              <td></td>
                                              <td>
                                                {innerChildItems.security}
                                              </td>
                                              <td>{innerChildItems.reqRt}</td>
                                              <td>{innerChildItems.reqQty}</td>
                                              <td>{innerChildItems.secname}</td>
                                              <td>
                                                {
                                                  innerChildItems.netCurrentlyLend
                                                }
                                              </td>
                                              <td
                                                className={
                                                  item.items.multiData.name ===
                                                  "setlLoc"
                                                    ? "multiTd"
                                                    : ""
                                                }
                                              >
                                                {innerChildItems.setlLoc}
                                              </td>
                                              <td
                                                className={
                                                  innerItems.innermultiChildData
                                                    ?.itmes &&
                                                  innerItems.innermultiChildData
                                                    ?.name === "reclaimRt"
                                                    ? "secondChild"
                                                    : ""
                                                }
                                              >
                                                {innerChildItems.reclaimRt}
                                              </td>
                                              <td>
                                                {innerChildItems.collType}
                                              </td>
                                              <td>{innerChildItems.loanRt}</td>
                                              <td>
                                                {innerChildItems.collrate}
                                              </td>
                                              <td>{innerChildItems.collLvl}</td>
                                              <td>
                                                {innerChildItems.liftableQty}
                                              </td>
                                              <td>
                                                {
                                                  innerChildItems.availableExLimits
                                                }
                                              </td>
                                            </tr>
                                          </>
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
              {item.items.multiInnerChildData?.items.map((chidData) => {
                return (
                  <tr
                    className={
                      activeRow.includes(item.id) ? "active" : "not-Active"
                    }
                  >
                    <td></td>
                    <td>{chidData.security}</td>
                    <td>{chidData.reqRt}</td>
                    <td>{chidData.reqQty}</td>
                    <td>{chidData.secname}</td>
                    <td>{chidData.netCurrentlyLend}</td>
                    <td>{chidData.setlLoc}</td>
                    <td
                      className={activeRow.includes(item.id) ? "lastchild" : ""}
                    >
                      {chidData.reclaimRt}
                    </td>
                    <td>{chidData.collType}</td>
                    <td>{chidData.loanRt}</td>
                    <td>{chidData.collrate}</td>
                    <td>{chidData.collLvl}</td>
                    <td>{chidData.liftableQty}</td>
                    <td>{chidData.availableExLimits}</td>
                  </tr>
                );
              })}
            </React.Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableData;
