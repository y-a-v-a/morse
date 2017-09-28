const antlr4 = require('antlr4');
const morsecodeLexer = require('./morsecodeLexer');
const morsecodeParser = require('./morsecodeParser');
const morsecodeListener = require('./morsecodeListener').morsecodeListener;

var text = '- .... . --.- ..- .. -.-. -.- -... .-. --- .-- -. ..-. --- -..- .--- ..- -- .--. ... --- ...- . .-. .---- ...-- .-.. .- --.. -.-- -.. --- --. ...';

var chars = new antlr4.InputStream(text);
var lexer = new morsecodeLexer.morsecodeLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new morsecodeParser.morsecodeParser(tokens);
parser.buildParseTrees = true;

var tree = parser.morsecode();

MorsePrinter = function() {
  morsecodeListener.call(this);
  return this;
}

MorsePrinter.prototype = Object.create(morsecodeListener.prototype);

MorsePrinter.prototype.constructor = MorsePrinter;

var result = [];

MorsePrinter.prototype.exitMorsecode = function() {
  console.log(result.join(''));
}

for (let i = 65; i < 91; i++) {
  let char = String.fromCharCode(i);
  MorsePrinter.prototype['enter' + char] = function(ctx) {
    result.push(char.toLowerCase());
  }
}

var printer = new MorsePrinter();

antlr4.tree.ParseTreeWalker.DEFAULT.walk(printer, tree);

