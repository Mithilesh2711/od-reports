const fs = require('fs');
const path = require('path');
const { jsonToExcel } = require('./conversions/excel');
const { jsonToHtml } = require('./conversions/html');
const { jsonToPdfTable } = require('./conversions/pdf');
const { jsonToText } = require('./conversions/text');
const { jsonToTableImage } = require('./conversions/table');

// Sample JSON data (replace with your own or load from a file)
const jsonData = require('./data/sample.json');

// Define output file paths
const outputExcelFile = path.join(__dirname, 'output', 'output.xlsx');
const outputHtmlFile = path.join(__dirname, 'output', 'output.html');
const outputPdfFile = path.join(__dirname, 'output', 'output.pdf');
const outputTextFile = path.join(__dirname, 'output', 'output.txt');
const outputTableImageFile = path.join(__dirname, 'output', 'output.png');

// Convert JSON to Excel
jsonToExcel(jsonData, outputExcelFile);

// Convert JSON to HTML
jsonToHtml(jsonData, outputHtmlFile);

// Convert JSON to PDF
jsonToPdfTable(jsonData, outputPdfFile);

// Convert JSON to Text
jsonToText(jsonData, outputTextFile);

// Convert JSON to Table Image
jsonToTableImage(jsonData, outputTableImageFile);
