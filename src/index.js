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
};

function decode(expr) {
  // write your solution here
  const values = Object.values(MORSE_TABLE);
  const keys = Object.keys(MORSE_TABLE);
  const str = String(expr);

  const arr = keys.map((el) => el.split(""));

  const newArr = arr.map((el) =>
    el.map((el) => (el == "." ? (el = "10") : (el = "11")))
  );

  const lastarr = newArr.map((el) => el.reduce((a, b) => a + b));
  const padArr = lastarr.map((el) =>
    el.length < 10 ? (el = el.padStart(10, "0")) : el
  );
  //console.log(padArr);

  const strArr = [];
  for (let i = 0; i < expr.length; i += 10) {
    strArr.push(str.slice(i, i + 10));
  }

  const NEW_TABLE = {};
  for (let j = 0; j < values.length; j++) {
    for (let i = 0; i < padArr.length; i++) {
      NEW_TABLE[padArr[i]] = values[i];
    }
  }

  //console.log(NEW_TABLE);
  NEW_TABLE["**********"] = " ";
  //console.log(NEW_TABLE);
  //console.log(strArr);
  const finalString = [];
  for (let i = 0; i < strArr.length; i++) {
    for (let key in NEW_TABLE) {
      if (strArr[i] == key) {
        finalString.push(NEW_TABLE[key]);
      }
    }
  }
  return finalString.join("");
}

module.exports = {
  decode,
};
