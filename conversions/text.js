const fs = require('fs');

function jsonToText(jsonData, outputFileName) {
  const jsonString = JSON.stringify(jsonData, null, 2);
  fs.writeFileSync(outputFileName, jsonString);
  console.log(`Text file "${outputFileName}" has been created.`);
}

module.exports = { jsonToText };
