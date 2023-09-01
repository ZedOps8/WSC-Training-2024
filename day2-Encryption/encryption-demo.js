const crypto = require('crypto');

// Function to generate a random 32-byte key
function generateRandomKey() {
  return crypto.randomBytes(32);
}

// Function to encrypt the plaintext using a secret key
function encrypt(plaintext, key) {
  const iv = crypto.randomBytes(16); // Generate a random IV (Initialization Vector)
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(plaintext, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + encrypted;
}

// Function to decrypt the ciphertext using the same secret key
function decrypt(ciphertext, key) {
  const iv = Buffer.from(ciphertext.slice(0, 32), 'hex'); // Extract the IV from the ciphertext
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(ciphertext.slice(32), 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Main function to demonstrate encryption and decryption
function main() {
  const secretKey = generateRandomKey(); // Generate a random 32-byte key
  const plaintext = 'Hello, this is a simple encryption demo!';

  // Encrypt the plaintext
  const encryptedMessage = encrypt(plaintext, secretKey);
  console.log('Encrypted:', encryptedMessage);

  // Decrypt the ciphertext
  const decryptedMessage = decrypt(encryptedMessage, secretKey);
  console.log('Decrypted:', decryptedMessage);
}

// Run the main function
main();