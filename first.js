const fs = require('fs');

// Create a readable stream to read from input file
const readableStream = fs.createReadStream('input.txt', 'utf8');

// Create a writable stream to write to output file
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Listen for 'finish' event to know when writing is done
writableStream.on('finish', () => {
  console.log('Writing to file is done.');
});

// Listen for errors
readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing to file:', err);
});
