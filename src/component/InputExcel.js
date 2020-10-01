import React, { useState } from "react";
import XLSX from "xlsx";

const InputExcel = ({ setData }) => {
  const [file, setFile] = useState();
  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var reader = new FileReader();
    reader.onload = function (e) {
      var data = e.target.result;
      let readedData = XLSX.read(data, { type: "binary" });
      const wsname = readedData.SheetNames[0];
      const ws = readedData.Sheets[wsname];

      /* Convert array to json*/
      //   const dataParse = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const dataParse = XLSX.utils.sheet_to_csv(ws, { header: 1 });
      /* Update state */
      const dataJson = convertToJson(dataParse, [
        "no",
        "name",
        "age",
        "phoneNumber",
      ]);
      setData(dataJson);
    };
    reader.readAsBinaryString(file);
  };

  const convertToJson = (csv, keys) => {
    const lines = csv.split("\n");
    let result = [];
    for (let i = 0; i < lines.length - 1; i++) {
      //   var obj = objKey;
      const obj = {};
      const currentline = lines[i].split(",");
      for (let j = 0; j < keys.length; j++) {
        obj[keys[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result; //JSON
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleFormControlFile1">Excel file input</label>
        <input
          type="file"
          name="excel"
          onChange={handleFile}
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default InputExcel;
