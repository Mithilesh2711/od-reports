const fs = require('fs');
const PDFDocument = require('pdfkit');

function jsonToPdfTable(jsonData, outputFileName) {
  const doc = new PDFDocument();
  const stream = fs.createWriteStream(outputFileName);
  doc.pipe(stream);

  // Define table column headers
  const headers = Object.keys(jsonData[0]);
  
  // Define table row values
  const rows = jsonData.map(obj => Object.values(obj));

  // Set up initial x and y coordinates for drawing
  let y = 50; // Starting y position for table

  // Draw headers
  doc.font('Helvetica-Bold');
  doc.fontSize(12);
  headers.forEach((header, i) => {
    doc.text(header, 50 + i * 150, y, { width: 150, align: 'left' });
  });
  y += 20; // Move y position down for rows

  // Draw rows
  doc.font('Helvetica');
  rows.forEach(row => {
    row.forEach((cell, i) => {
      doc.text(cell.toString(), 50 + i * 150, y, { width: 150, align: 'left' });
    });
    y += 20; // Move y position down for next row
  });

  // Finalize PDF file
  doc.end();
  
  stream.on('finish', () => {
    console.log(`PDF file "${outputFileName}" has been created.`);
  });
}

module.exports = { jsonToPdfTable };
