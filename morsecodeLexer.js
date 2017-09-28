// Generated from ./morsecode.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0006\u0015\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0002\u0002\u0006\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u0003\u0002\u0003\u0004\u0002\u000b\f\u000f\u000f\u0002\u0014",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0003\u000b\u0003\u0002\u0002\u0002\u0005\r\u0003\u0002\u0002\u0002",
    "\u0007\u000f\u0003\u0002\u0002\u0002\t\u0011\u0003\u0002\u0002\u0002",
    "\u000b\f\u00070\u0002\u0002\f\u0004\u0003\u0002\u0002\u0002\r\u000e",
    "\u0007/\u0002\u0002\u000e\u0006\u0003\u0002\u0002\u0002\u000f\u0010",
    "\u0007\"\u0002\u0002\u0010\b\u0003\u0002\u0002\u0002\u0011\u0012\t\u0002",
    "\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0014\b\u0005",
    "\u0002\u0002\u0014\n\u0003\u0002\u0002\u0002\u0003\u0002\u0003\b\u0002",
    "\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function morsecodeLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

morsecodeLexer.prototype = Object.create(antlr4.Lexer.prototype);
morsecodeLexer.prototype.constructor = morsecodeLexer;

morsecodeLexer.EOF = antlr4.Token.EOF;
morsecodeLexer.DOT = 1;
morsecodeLexer.DASH = 2;
morsecodeLexer.SPACE = 3;
morsecodeLexer.WS = 4;

morsecodeLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

morsecodeLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

morsecodeLexer.prototype.literalNames = [ null, "'.'", "'-'", "' '" ];

morsecodeLexer.prototype.symbolicNames = [ null, "DOT", "DASH", "SPACE", 
                                           "WS" ];

morsecodeLexer.prototype.ruleNames = [ "DOT", "DASH", "SPACE", "WS" ];

morsecodeLexer.prototype.grammarFileName = "morsecode.g4";



exports.morsecodeLexer = morsecodeLexer;

