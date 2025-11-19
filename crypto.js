import crypto from "node:crypto";
import { scrypt } from "node:crypto";
import { createCipheriv, createDecipheriv } from "node:crypto";

const password = "This is the password for the ciphering";
const algorithm = "aes-192-cbc";

const hashed = crypto
  .createHmac("sha256", "salt")
  .update(JSON.stringify({ name: "John Paulo" }))
  .digest("hex");

function cipherFunc() {
  scrypt(password, "secret", 24, (err, key) => {
    if (err) throw err;
    crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;
      const cipher = createCipheriv(algorithm, key, iv);
      let result = cipher.update("text to be ciphered", "utf-8", "hex");
      result+=cipher.final("hex")
      const ciphered = result;
      const deciphered = decipherFunc(ciphered);
      console.log(deciphered);
    });
  });
}

function decipherFunc(enc) {
  scrypt(password, "secret", 24, (err, key) => {
    if (err) throw err;
    crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;
      const decipher = createDecipheriv(algorithm, key, iv);
      let result = decipher.update(enc, "hex", "utf-8");
      result += decipher.final("utf-8")
      // return result;
      //
      // console.log(iv);
    });
  });
}

  //           //
 //           //
//           //

const algorithm2 = "aes-192-cbc";
const password2 = "This is the password for the ciphering";
const key = crypto.scryptSync(password2, "salt", 24);
const iv = Buffer.alloc(16, 0); // Initialization vector.

const encrypt = (text) => {
  const cipher = createCipheriv(algorithm2, key, iv);
  let encrypted = cipher.update(text, "utf-8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

const decipher = (encrypted) => {
  const decipher = createDecipheriv(algorithm2, key, iv);
  let decrypted = decipher.update(encrypted, "hex", "utf-8");
  decrypted += decipher.final("utf-8"); //
  return decrypted;
};

const encrypted = encrypt("Hello, World!");
const decrypted = decipher(encrypted);

// console.log("Encrypted:", encrypted);
// console.log("Decrypted:", decrypted);

// console.log();
cipherFunc();
