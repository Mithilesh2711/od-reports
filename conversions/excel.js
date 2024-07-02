const XLSX = require('xlsx');
const fs = require('fs');

function jsonToExcel(jsonData, outputFileName) {
  const ws = XLSX.utils.json_to_sheet(jsonData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, outputFileName);
  console.log(`Excel file "${outputFileName}" has been created.`);
}

module.exports = { jsonToExcel };
