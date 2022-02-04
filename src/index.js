const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "*****": " ",
};

function decode(expr) {
  let result = "";
  let counter = 0;
  let intermediateArray = [];
  let binaryArray = [];
  let dotsArray = [];

  for (let i = 0; i < expr.length; i++) {
    intermediateArray.push(expr[i]);
    counter++;
    if (counter === 10) {
      binaryArray.push(intermediateArray.join(""));
      counter = 0;
      intermediateArray = [];
    }
  }

  let newArray = [];
  binaryArray.forEach((binary) => {
    for (let i = 0; i < binary.length; i += 2) {
      if (parseInt(binary[i]) !== 0 || parseInt(binary[i + 1]) !== 0) {
        if (binary[i] === "1" && binary[i + 1] === "0") {
          dotsArray.push(".");
        } else if (binary[i] === "1" && binary[i + 1] === "1") {
          dotsArray.push("-");
        } else {
          dotsArray.push("*");
        }
      }
    }
    newArray.push(dotsArray.join(""));
    // console.log(dotsArray);
    dotsArray = [];
  });

  newArray.forEach((element) => {
    result += MORSE_TABLE[element];
  });

  return result;
}

// decode("0000001111**********0000000010");
// Someday i will optimize it. I promise... :)

module.exports = {
  decode,
};
