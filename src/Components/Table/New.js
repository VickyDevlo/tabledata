// import "./styles.css";
import { useState } from "react";

export default function New({ rowData, onExpand }) {
  const [expandetData, setExpandetData] = useState([]);
  const { id, rowInfo, expandetRows } = rowData;
  const openExpandedRow = expandetRows.filter((info) => {
    return expandetData.includes(info.id);
  });
  return (
    <>
      <tr>
        {rowInfo.map((col, index) => {
          const handleExpand = () => {
            if (expandetData.includes(col.expandRowsInfoId)) {
              let deletedChildClasses = [];
              const deletedExpandedData = expandetData.filter((id) => {
                if (id === col.expandRowsInfoId) {
                  deletedChildClasses = [
                    ...deletedChildClasses,
                    ...col.allChildClasses,
                  ];
                }
                return id !== col.expandRowsInfoId;
              });
              const finalRemainChild = deletedExpandedData.filter((id) => {
                return !deletedChildClasses.includes(id);
              });
              console.log(deletedChildClasses, "finalRemainChild");
              setExpandetData(finalRemainChild);
            } else {
              setExpandetData([...expandetData, col.expandRowsInfoId]);
            }
          };
          return (
            <td>
              {col.title}
              {col.isExpandet ? (
                <button onClick={handleExpand}>
                  {expandetData.includes(col.expandRowsInfoId) ? "-" : "+"}
                </button>
              ) : null}
            </td>
          );
        })}
      </tr>

      {openExpandedRow.map((row, index) => {
        const { rowInfo } = row;
        return (
          <tr>
            {rowInfo.map((col, index) => {
              const handleExpand = () => {
                if (expandetData.includes(col.expandRowsInfoId)) {
                  const deletedExpandedData = expandetData.filter((id) => {
                    return id !== col.expandRowsInfoId;
                  });
                  setExpandetData(deletedExpandedData);
                } else {
                  setExpandetData([...expandetData, col.expandRowsInfoId]);
                }
              };
              return (
                <td>
                  {col.title}{" "}
                  {col.isExpandet ? (
                    <button onClick={handleExpand}>
                      {" "}
                      {expandetData.includes(col.expandRowsInfoId) ? "-" : "+"}
                    </button>
                  ) : null}
                </td>
              );
            })}
          </tr>
        );
      })}
    </>
  );
}
