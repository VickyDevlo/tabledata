import React, { useState } from "react";
import headJsonData from "../JSON/HeadJson.json";
import bodyJsonData from "../JSON/BodyJson.json";

const TableData = () => {
  return (
    <>
      <table
        bgcolor="#242526"
        style={{ width: "100%", color: "white" }}
        border={1}
      >
        {/* heading title */}
        {headJsonData.map((datalist, headindex) => {
          return <th key={headindex}>{datalist}</th>;
        })}

        <tbody>
          {bodyJsonData.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <tr>
                  <td>{item.checkbox}</td>
                  <td>{item.security}</td>
                  <td>{item.ReqQty}</td>
                  <td>{item.Secname}</td>
                  <td>{item.NetCurrentlyLeadable}</td>
                  <td>{item.SetlLoc}</td>
                  <td>{item.ReclaimRt}</td>
                  <td>{item.CollType}</td>
                  <td>{item.LoanRt}</td>
                  <td>{item.CollCurr}</td>
                  <td>{item.CollLevl}</td>
                  <td>{item.LoftableQty}</td>
                </tr>

                {item.multiData.map((multiItem, multiIndex) => {
                  return (
                    <tr key={multiIndex}>
                      <>
                        <td>{multiItem.checkbox}</td>
                        <td>{multiItem.security}</td>
                        <td>{multiItem.ReqQty}</td>
                        <td>{multiItem.Secname}</td>
                        <td>{multiItem.NetCurrentlyLeadable}</td>
                        <td>{multiItem.SetlLoc} </td>
                        <td>{multiItem.ReclaimRt}</td>
                        <td>{multiItem.CollType}</td>
                        <td>{item.LoanRt}</td>
                        <td>{item.CollCurr}</td>
                        <td>{item.CollLevl}</td>
                        <td>{item.LoftableQty}</td>
                      </>
                    </tr>
                  );
                })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableData;
