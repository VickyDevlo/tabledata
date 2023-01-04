import React from "react";
import jsondata from '../JSON/newJson.json'
import New from '../Table/New'

const NewData = () => {
  return (
    // console.log(proJson, "proJson");

    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <table border="1px">
        <tr>
          <th>head 2</th>
          <th>head 1</th>
          <th>head 1</th>
          <th>head 1</th>
          <th>head 1</th>
        </tr>
        {jsondata.map((row, index) => {
          return <New key={index} rowData={row} />;
        })}
      </table>
    </div>
  );
};

export default NewData;
