import React, { useState } from "react";
import InputExcel from "./component/InputExcel";
import Table from "./component/Table";

function App() {
  let [data, setData] = useState();
  return (
    <div className="container">
      <h1 className="py-3">Excel To Table</h1>
      <InputExcel setData={setData} />
      <Table data={data} />
    </div>
  );
}

export default App;
