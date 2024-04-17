const echoDiv = (x, y) => {
    const quotient = Math.floor(x / y);
    const remainder = x % y;
    const message = "商: " + quotient + ", 余り: " + remainder;
    return message;
};

const reply = (message = "返信なし") => {
    return message;
  };

module.exports = { echoDiv, reply };
