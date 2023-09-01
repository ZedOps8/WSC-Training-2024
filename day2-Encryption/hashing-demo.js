const crypto = require('crypto');

// Function to generate the SHA-256 hash of a given input
function sha256Hash(input) {
  const hash = crypto.createHash('sha256');
  hash.update(input);
  return hash.digest('hex');
}

// Main function to demonstrate hashing
function main() {
  const inputText = 'Hello, this is a hashing demo!';
  
  // Calculate the SHA-256 hash of the input text
  const hashValue = sha256Hash(inputText);
  
  console.log('Input Text:', inputText);
  console.log('SHA-256 Hash:', hashValue);
}

// Run the main function
main();