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
  const TRANSFORM_MORSE_TABLE = {};

  for (let morse in MORSE_TABLE) {
    const newKey = morse.replace(/\-/g, "11").replace(/\./g, "10");
    TRANSFORM_MORSE_TABLE[
      newKey !== 10 ? "0".repeat(10 - newKey.length) + newKey : newKey
    ] = MORSE_TABLE[morse];
  }

  const chanks = expr.match(/.{1,10}/g);

  return chanks.reduce(
    (acc, curr) =>
      acc + (curr !== "**********" ? TRANSFORM_MORSE_TABLE[curr] : " "),
    ""
  );
}

module.exports = {
  decode,
};
