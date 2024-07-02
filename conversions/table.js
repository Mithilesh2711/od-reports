const { createCanvas } = require('canvas');
const fs = require('fs');

function jsonToTableImage(jsonData, outputFileName) {
  const canvasWidth = 400;
  const canvasHeight = 200;
  const cellPadding = 10;
  const fontSize = 16;

  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');

  // Fill canvas with white background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);

  // Draw table headers
  ctx.fillStyle = '#000000';
  ctx.font = `bold ${fontSize}px Arial`;
  let x = cellPadding;
  Object.keys(jsonData[0]).forEach(key => {
    ctx.fillText(key, x, fontSize + cellPadding);
    x += canvasWidth / Object.keys(jsonData[0]).length;
  });

  // Draw table rows
  ctx.font = `${fontSize}px Arial`;
  let y = fontSize + 2 * cellPadding;
  jsonData.forEach((row, rowIndex) => {
    x = cellPadding;
    Object.values(row).forEach((cell, cellIndex) => {
      ctx.fillText(cell.toString(), x, y + (rowIndex + 1) * fontSize);
      x += canvasWidth / Object.keys(jsonData[0]).length;
    });
    y += fontSize + cellPadding;
  });

  // Save canvas to PNG file
  const out = fs.createWriteStream(outputFileName);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  out.on('finish', () => {
    console.log(`Table image file "${outputFileName}" has been created.`);
  });
}

module.exports = { jsonToTableImage };
