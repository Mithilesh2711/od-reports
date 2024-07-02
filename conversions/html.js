const fs = require('fs');

function jsonToHtml(jsonData, outputFileName) {
  let html = '<html><body><table border="1">';
  html += '<tr>' + Object.keys(jsonData[0]).map(key => `<th>${key}</th>`).join('') + '</tr>';
  jsonData.forEach(row => {
    html += '<tr>' + Object.values(row).map(cell => `<td>${cell}</td>`).join('') + '</tr>';
  });
  html += '</table></body></html>';
  fs.writeFileSync(outputFileName, html);
  console.log(`HTML file "${outputFileName}" has been created.`);
}

module.exports = { jsonToHtml };
