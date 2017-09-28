// Generated from ./morsecode.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var morsecodeListener = require('./morsecodeListener').morsecodeListener;
var grammarFileName = "morsecode.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0006\u0124\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0006\u0002R\n\u0002\r\u0002\u000e\u0002S\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003z\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003",
    "$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003\'\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0002\u0002(\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJL\u0002\u0002\u0002",
    "\u0121\u0002N\u0003\u0002\u0002\u0002\u0004y\u0003\u0002\u0002\u0002",
    "\u0006{\u0003\u0002\u0002\u0002\b~\u0003\u0002\u0002\u0002\n\u0083\u0003",
    "\u0002\u0002\u0002\f\u0088\u0003\u0002\u0002\u0002\u000e\u008c\u0003",
    "\u0002\u0002\u0002\u0010\u008e\u0003\u0002\u0002\u0002\u0012\u0093\u0003",
    "\u0002\u0002\u0002\u0014\u0097\u0003\u0002\u0002\u0002\u0016\u009c\u0003",
    "\u0002\u0002\u0002\u0018\u009f\u0003\u0002\u0002\u0002\u001a\u00a4\u0003",
    "\u0002\u0002\u0002\u001c\u00a8\u0003\u0002\u0002\u0002\u001e\u00ad\u0003",
    "\u0002\u0002\u0002 \u00b0\u0003\u0002\u0002\u0002\"\u00b3\u0003\u0002",
    "\u0002\u0002$\u00b7\u0003\u0002\u0002\u0002&\u00bc\u0003\u0002\u0002",
    "\u0002(\u00c1\u0003\u0002\u0002\u0002*\u00c5\u0003\u0002\u0002\u0002",
    ",\u00c9\u0003\u0002\u0002\u0002.\u00cb\u0003\u0002\u0002\u00020\u00cf",
    "\u0003\u0002\u0002\u00022\u00d4\u0003\u0002\u0002\u00024\u00d8\u0003",
    "\u0002\u0002\u00026\u00dd\u0003\u0002\u0002\u00028\u00e2\u0003\u0002",
    "\u0002\u0002:\u00e7\u0003\u0002\u0002\u0002<\u00ed\u0003\u0002\u0002",
    "\u0002>\u00f3\u0003\u0002\u0002\u0002@\u00f9\u0003\u0002\u0002\u0002",
    "B\u00ff\u0003\u0002\u0002\u0002D\u0105\u0003\u0002\u0002\u0002F\u010b",
    "\u0003\u0002\u0002\u0002H\u0111\u0003\u0002\u0002\u0002J\u0117\u0003",
    "\u0002\u0002\u0002L\u011d\u0003\u0002\u0002\u0002NQ\u0005\u0004\u0003",
    "\u0002OP\u0007\u0005\u0002\u0002PR\u0005\u0004\u0003\u0002QO\u0003\u0002",
    "\u0002\u0002RS\u0003\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003",
    "\u0002\u0002\u0002T\u0003\u0003\u0002\u0002\u0002Uz\u0005\u0006\u0004",
    "\u0002Vz\u0005\b\u0005\u0002Wz\u0005\n\u0006\u0002Xz\u0005\f\u0007\u0002",
    "Yz\u0005\u000e\b\u0002Zz\u0005\u0010\t\u0002[z\u0005\u0012\n\u0002\\",
    "z\u0005\u0014\u000b\u0002]z\u0005\u0016\f\u0002^z\u0005\u0018\r\u0002",
    "_z\u0005\u001a\u000e\u0002`z\u0005\u001c\u000f\u0002az\u0005\u001e\u0010",
    "\u0002bz\u0005 \u0011\u0002cz\u0005\"\u0012\u0002dz\u0005$\u0013\u0002",
    "ez\u0005&\u0014\u0002fz\u0005(\u0015\u0002gz\u0005*\u0016\u0002hz\u0005",
    ",\u0017\u0002iz\u0005.\u0018\u0002jz\u00050\u0019\u0002kz\u00052\u001a",
    "\u0002lz\u00054\u001b\u0002mz\u00056\u001c\u0002nz\u00058\u001d\u0002",
    "oz\u0005:\u001e\u0002pz\u0005<\u001f\u0002qz\u0005> \u0002rz\u0005@",
    "!\u0002sz\u0005B\"\u0002tz\u0005D#\u0002uz\u0005F$\u0002vz\u0005H%\u0002",
    "wz\u0005J&\u0002xz\u0005L\'\u0002yU\u0003\u0002\u0002\u0002yV\u0003",
    "\u0002\u0002\u0002yW\u0003\u0002\u0002\u0002yX\u0003\u0002\u0002\u0002",
    "yY\u0003\u0002\u0002\u0002yZ\u0003\u0002\u0002\u0002y[\u0003\u0002\u0002",
    "\u0002y\\\u0003\u0002\u0002\u0002y]\u0003\u0002\u0002\u0002y^\u0003",
    "\u0002\u0002\u0002y_\u0003\u0002\u0002\u0002y`\u0003\u0002\u0002\u0002",
    "ya\u0003\u0002\u0002\u0002yb\u0003\u0002\u0002\u0002yc\u0003\u0002\u0002",
    "\u0002yd\u0003\u0002\u0002\u0002ye\u0003\u0002\u0002\u0002yf\u0003\u0002",
    "\u0002\u0002yg\u0003\u0002\u0002\u0002yh\u0003\u0002\u0002\u0002yi\u0003",
    "\u0002\u0002\u0002yj\u0003\u0002\u0002\u0002yk\u0003\u0002\u0002\u0002",
    "yl\u0003\u0002\u0002\u0002ym\u0003\u0002\u0002\u0002yn\u0003\u0002\u0002",
    "\u0002yo\u0003\u0002\u0002\u0002yp\u0003\u0002\u0002\u0002yq\u0003\u0002",
    "\u0002\u0002yr\u0003\u0002\u0002\u0002ys\u0003\u0002\u0002\u0002yt\u0003",
    "\u0002\u0002\u0002yu\u0003\u0002\u0002\u0002yv\u0003\u0002\u0002\u0002",
    "yw\u0003\u0002\u0002\u0002yx\u0003\u0002\u0002\u0002z\u0005\u0003\u0002",
    "\u0002\u0002{|\u0007\u0003\u0002\u0002|}\u0007\u0004\u0002\u0002}\u0007",
    "\u0003\u0002\u0002\u0002~\u007f\u0007\u0004\u0002\u0002\u007f\u0080",
    "\u0007\u0003\u0002\u0002\u0080\u0081\u0007\u0003\u0002\u0002\u0081\u0082",
    "\u0007\u0003\u0002\u0002\u0082\t\u0003\u0002\u0002\u0002\u0083\u0084",
    "\u0007\u0004\u0002\u0002\u0084\u0085\u0007\u0003\u0002\u0002\u0085\u0086",
    "\u0007\u0004\u0002\u0002\u0086\u0087\u0007\u0003\u0002\u0002\u0087\u000b",
    "\u0003\u0002\u0002\u0002\u0088\u0089\u0007\u0004\u0002\u0002\u0089\u008a",
    "\u0007\u0003\u0002\u0002\u008a\u008b\u0007\u0003\u0002\u0002\u008b\r",
    "\u0003\u0002\u0002\u0002\u008c\u008d\u0007\u0003\u0002\u0002\u008d\u000f",
    "\u0003\u0002\u0002\u0002\u008e\u008f\u0007\u0003\u0002\u0002\u008f\u0090",
    "\u0007\u0003\u0002\u0002\u0090\u0091\u0007\u0004\u0002\u0002\u0091\u0092",
    "\u0007\u0003\u0002\u0002\u0092\u0011\u0003\u0002\u0002\u0002\u0093\u0094",
    "\u0007\u0004\u0002\u0002\u0094\u0095\u0007\u0004\u0002\u0002\u0095\u0096",
    "\u0007\u0003\u0002\u0002\u0096\u0013\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0007\u0003\u0002\u0002\u0098\u0099\u0007\u0003\u0002\u0002\u0099\u009a",
    "\u0007\u0003\u0002\u0002\u009a\u009b\u0007\u0003\u0002\u0002\u009b\u0015",
    "\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u0003\u0002\u0002\u009d\u009e",
    "\u0007\u0003\u0002\u0002\u009e\u0017\u0003\u0002\u0002\u0002\u009f\u00a0",
    "\u0007\u0003\u0002\u0002\u00a0\u00a1\u0007\u0004\u0002\u0002\u00a1\u00a2",
    "\u0007\u0004\u0002\u0002\u00a2\u00a3\u0007\u0004\u0002\u0002\u00a3\u0019",
    "\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u0004\u0002\u0002\u00a5\u00a6",
    "\u0007\u0003\u0002\u0002\u00a6\u00a7\u0007\u0004\u0002\u0002\u00a7\u001b",
    "\u0003\u0002\u0002\u0002\u00a8\u00a9\u0007\u0003\u0002\u0002\u00a9\u00aa",
    "\u0007\u0004\u0002\u0002\u00aa\u00ab\u0007\u0003\u0002\u0002\u00ab\u00ac",
    "\u0007\u0003\u0002\u0002\u00ac\u001d\u0003\u0002\u0002\u0002\u00ad\u00ae",
    "\u0007\u0004\u0002\u0002\u00ae\u00af\u0007\u0004\u0002\u0002\u00af\u001f",
    "\u0003\u0002\u0002\u0002\u00b0\u00b1\u0007\u0004\u0002\u0002\u00b1\u00b2",
    "\u0007\u0003\u0002\u0002\u00b2!\u0003\u0002\u0002\u0002\u00b3\u00b4",
    "\u0007\u0004\u0002\u0002\u00b4\u00b5\u0007\u0004\u0002\u0002\u00b5\u00b6",
    "\u0007\u0004\u0002\u0002\u00b6#\u0003\u0002\u0002\u0002\u00b7\u00b8",
    "\u0007\u0003\u0002\u0002\u00b8\u00b9\u0007\u0004\u0002\u0002\u00b9\u00ba",
    "\u0007\u0004\u0002\u0002\u00ba\u00bb\u0007\u0003\u0002\u0002\u00bb%",
    "\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u0004\u0002\u0002\u00bd\u00be",
    "\u0007\u0004\u0002\u0002\u00be\u00bf\u0007\u0003\u0002\u0002\u00bf\u00c0",
    "\u0007\u0004\u0002\u0002\u00c0\'\u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\u0007\u0003\u0002\u0002\u00c2\u00c3\u0007\u0004\u0002\u0002\u00c3\u00c4",
    "\u0007\u0003\u0002\u0002\u00c4)\u0003\u0002\u0002\u0002\u00c5\u00c6",
    "\u0007\u0003\u0002\u0002\u00c6\u00c7\u0007\u0003\u0002\u0002\u00c7\u00c8",
    "\u0007\u0003\u0002\u0002\u00c8+\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0007\u0004\u0002\u0002\u00ca-\u0003\u0002\u0002\u0002\u00cb\u00cc",
    "\u0007\u0003\u0002\u0002\u00cc\u00cd\u0007\u0003\u0002\u0002\u00cd\u00ce",
    "\u0007\u0004\u0002\u0002\u00ce/\u0003\u0002\u0002\u0002\u00cf\u00d0",
    "\u0007\u0003\u0002\u0002\u00d0\u00d1\u0007\u0003\u0002\u0002\u00d1\u00d2",
    "\u0007\u0003\u0002\u0002\u00d2\u00d3\u0007\u0004\u0002\u0002\u00d31",
    "\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007\u0003\u0002\u0002\u00d5\u00d6",
    "\u0007\u0004\u0002\u0002\u00d6\u00d7\u0007\u0004\u0002\u0002\u00d73",
    "\u0003\u0002\u0002\u0002\u00d8\u00d9\u0007\u0004\u0002\u0002\u00d9\u00da",
    "\u0007\u0003\u0002\u0002\u00da\u00db\u0007\u0003\u0002\u0002\u00db\u00dc",
    "\u0007\u0004\u0002\u0002\u00dc5\u0003\u0002\u0002\u0002\u00dd\u00de",
    "\u0007\u0004\u0002\u0002\u00de\u00df\u0007\u0003\u0002\u0002\u00df\u00e0",
    "\u0007\u0004\u0002\u0002\u00e0\u00e1\u0007\u0004\u0002\u0002\u00e17",
    "\u0003\u0002\u0002\u0002\u00e2\u00e3\u0007\u0004\u0002\u0002\u00e3\u00e4",
    "\u0007\u0004\u0002\u0002\u00e4\u00e5\u0007\u0003\u0002\u0002\u00e5\u00e6",
    "\u0007\u0003\u0002\u0002\u00e69\u0003\u0002\u0002\u0002\u00e7\u00e8",
    "\u0007\u0003\u0002\u0002\u00e8\u00e9\u0007\u0004\u0002\u0002\u00e9\u00ea",
    "\u0007\u0004\u0002\u0002\u00ea\u00eb\u0007\u0004\u0002\u0002\u00eb\u00ec",
    "\u0007\u0004\u0002\u0002\u00ec;\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\u0007\u0003\u0002\u0002\u00ee\u00ef\u0007\u0003\u0002\u0002\u00ef\u00f0",
    "\u0007\u0004\u0002\u0002\u00f0\u00f1\u0007\u0004\u0002\u0002\u00f1\u00f2",
    "\u0007\u0004\u0002\u0002\u00f2=\u0003\u0002\u0002\u0002\u00f3\u00f4",
    "\u0007\u0003\u0002\u0002\u00f4\u00f5\u0007\u0003\u0002\u0002\u00f5\u00f6",
    "\u0007\u0003\u0002\u0002\u00f6\u00f7\u0007\u0004\u0002\u0002\u00f7\u00f8",
    "\u0007\u0004\u0002\u0002\u00f8?\u0003\u0002\u0002\u0002\u00f9\u00fa",
    "\u0007\u0003\u0002\u0002\u00fa\u00fb\u0007\u0003\u0002\u0002\u00fb\u00fc",
    "\u0007\u0003\u0002\u0002\u00fc\u00fd\u0007\u0003\u0002\u0002\u00fd\u00fe",
    "\u0007\u0004\u0002\u0002\u00feA\u0003\u0002\u0002\u0002\u00ff\u0100",
    "\u0007\u0003\u0002\u0002\u0100\u0101\u0007\u0003\u0002\u0002\u0101\u0102",
    "\u0007\u0003\u0002\u0002\u0102\u0103\u0007\u0003\u0002\u0002\u0103\u0104",
    "\u0007\u0003\u0002\u0002\u0104C\u0003\u0002\u0002\u0002\u0105\u0106",
    "\u0007\u0004\u0002\u0002\u0106\u0107\u0007\u0003\u0002\u0002\u0107\u0108",
    "\u0007\u0003\u0002\u0002\u0108\u0109\u0007\u0003\u0002\u0002\u0109\u010a",
    "\u0007\u0003\u0002\u0002\u010aE\u0003\u0002\u0002\u0002\u010b\u010c",
    "\u0007\u0004\u0002\u0002\u010c\u010d\u0007\u0004\u0002\u0002\u010d\u010e",
    "\u0007\u0003\u0002\u0002\u010e\u010f\u0007\u0003\u0002\u0002\u010f\u0110",
    "\u0007\u0003\u0002\u0002\u0110G\u0003\u0002\u0002\u0002\u0111\u0112",
    "\u0007\u0004\u0002\u0002\u0112\u0113\u0007\u0004\u0002\u0002\u0113\u0114",
    "\u0007\u0004\u0002\u0002\u0114\u0115\u0007\u0003\u0002\u0002\u0115\u0116",
    "\u0007\u0003\u0002\u0002\u0116I\u0003\u0002\u0002\u0002\u0117\u0118",
    "\u0007\u0004\u0002\u0002\u0118\u0119\u0007\u0004\u0002\u0002\u0119\u011a",
    "\u0007\u0004\u0002\u0002\u011a\u011b\u0007\u0004\u0002\u0002\u011b\u011c",
    "\u0007\u0003\u0002\u0002\u011cK\u0003\u0002\u0002\u0002\u011d\u011e",
    "\u0007\u0004\u0002\u0002\u011e\u011f\u0007\u0004\u0002\u0002\u011f\u0120",
    "\u0007\u0004\u0002\u0002\u0120\u0121\u0007\u0004\u0002\u0002\u0121\u0122",
    "\u0007\u0004\u0002\u0002\u0122M\u0003\u0002\u0002\u0002\u0004Sy"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'.'", "'-'", "' '" ];

var symbolicNames = [ null, "DOT", "DASH", "SPACE", "WS" ];

var ruleNames =  [ "morsecode", "letter", "a", "b", "c", "d", "e", "f", 
                   "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 
                   "r", "s", "t", "u", "v", "w", "x", "y", "z", "one", "two", 
                   "three", "four", "five", "six", "seven", "eight", "nine", 
                   "zero" ];

function morsecodeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

morsecodeParser.prototype = Object.create(antlr4.Parser.prototype);
morsecodeParser.prototype.constructor = morsecodeParser;

Object.defineProperty(morsecodeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

morsecodeParser.EOF = antlr4.Token.EOF;
morsecodeParser.DOT = 1;
morsecodeParser.DASH = 2;
morsecodeParser.SPACE = 3;
morsecodeParser.WS = 4;

morsecodeParser.RULE_morsecode = 0;
morsecodeParser.RULE_letter = 1;
morsecodeParser.RULE_a = 2;
morsecodeParser.RULE_b = 3;
morsecodeParser.RULE_c = 4;
morsecodeParser.RULE_d = 5;
morsecodeParser.RULE_e = 6;
morsecodeParser.RULE_f = 7;
morsecodeParser.RULE_g = 8;
morsecodeParser.RULE_h = 9;
morsecodeParser.RULE_i = 10;
morsecodeParser.RULE_j = 11;
morsecodeParser.RULE_k = 12;
morsecodeParser.RULE_l = 13;
morsecodeParser.RULE_m = 14;
morsecodeParser.RULE_n = 15;
morsecodeParser.RULE_o = 16;
morsecodeParser.RULE_p = 17;
morsecodeParser.RULE_q = 18;
morsecodeParser.RULE_r = 19;
morsecodeParser.RULE_s = 20;
morsecodeParser.RULE_t = 21;
morsecodeParser.RULE_u = 22;
morsecodeParser.RULE_v = 23;
morsecodeParser.RULE_w = 24;
morsecodeParser.RULE_x = 25;
morsecodeParser.RULE_y = 26;
morsecodeParser.RULE_z = 27;
morsecodeParser.RULE_one = 28;
morsecodeParser.RULE_two = 29;
morsecodeParser.RULE_three = 30;
morsecodeParser.RULE_four = 31;
morsecodeParser.RULE_five = 32;
morsecodeParser.RULE_six = 33;
morsecodeParser.RULE_seven = 34;
morsecodeParser.RULE_eight = 35;
morsecodeParser.RULE_nine = 36;
morsecodeParser.RULE_zero = 37;

function MorsecodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_morsecode;
    return this;
}

MorsecodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MorsecodeContext.prototype.constructor = MorsecodeContext;

MorsecodeContext.prototype.letter = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LetterContext);
    } else {
        return this.getTypedRuleContext(LetterContext,i);
    }
};

MorsecodeContext.prototype.SPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.SPACE);
    } else {
        return this.getToken(morsecodeParser.SPACE, i);
    }
};


MorsecodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterMorsecode(this);
	}
};

MorsecodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitMorsecode(this);
	}
};




morsecodeParser.MorsecodeContext = MorsecodeContext;

morsecodeParser.prototype.morsecode = function() {

    var localctx = new MorsecodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, morsecodeParser.RULE_morsecode);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this.letter();
        this.state = 79; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 77;
            this.match(morsecodeParser.SPACE);
            this.state = 78;
            this.letter();
            this.state = 81; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===morsecodeParser.SPACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LetterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_letter;
    return this;
}

LetterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LetterContext.prototype.constructor = LetterContext;

LetterContext.prototype.a = function() {
    return this.getTypedRuleContext(AContext,0);
};

LetterContext.prototype.b = function() {
    return this.getTypedRuleContext(BContext,0);
};

LetterContext.prototype.c = function() {
    return this.getTypedRuleContext(CContext,0);
};

LetterContext.prototype.d = function() {
    return this.getTypedRuleContext(DContext,0);
};

LetterContext.prototype.e = function() {
    return this.getTypedRuleContext(EContext,0);
};

LetterContext.prototype.f = function() {
    return this.getTypedRuleContext(FContext,0);
};

LetterContext.prototype.g = function() {
    return this.getTypedRuleContext(GContext,0);
};

LetterContext.prototype.h = function() {
    return this.getTypedRuleContext(HContext,0);
};

LetterContext.prototype.i = function() {
    return this.getTypedRuleContext(IContext,0);
};

LetterContext.prototype.j = function() {
    return this.getTypedRuleContext(JContext,0);
};

LetterContext.prototype.k = function() {
    return this.getTypedRuleContext(KContext,0);
};

LetterContext.prototype.l = function() {
    return this.getTypedRuleContext(LContext,0);
};

LetterContext.prototype.m = function() {
    return this.getTypedRuleContext(MContext,0);
};

LetterContext.prototype.n = function() {
    return this.getTypedRuleContext(NContext,0);
};

LetterContext.prototype.o = function() {
    return this.getTypedRuleContext(OContext,0);
};

LetterContext.prototype.p = function() {
    return this.getTypedRuleContext(PContext,0);
};

LetterContext.prototype.q = function() {
    return this.getTypedRuleContext(QContext,0);
};

LetterContext.prototype.r = function() {
    return this.getTypedRuleContext(RContext,0);
};

LetterContext.prototype.s = function() {
    return this.getTypedRuleContext(SContext,0);
};

LetterContext.prototype.t = function() {
    return this.getTypedRuleContext(TContext,0);
};

LetterContext.prototype.u = function() {
    return this.getTypedRuleContext(UContext,0);
};

LetterContext.prototype.v = function() {
    return this.getTypedRuleContext(VContext,0);
};

LetterContext.prototype.w = function() {
    return this.getTypedRuleContext(WContext,0);
};

LetterContext.prototype.x = function() {
    return this.getTypedRuleContext(XContext,0);
};

LetterContext.prototype.y = function() {
    return this.getTypedRuleContext(YContext,0);
};

LetterContext.prototype.z = function() {
    return this.getTypedRuleContext(ZContext,0);
};

LetterContext.prototype.one = function() {
    return this.getTypedRuleContext(OneContext,0);
};

LetterContext.prototype.two = function() {
    return this.getTypedRuleContext(TwoContext,0);
};

LetterContext.prototype.three = function() {
    return this.getTypedRuleContext(ThreeContext,0);
};

LetterContext.prototype.four = function() {
    return this.getTypedRuleContext(FourContext,0);
};

LetterContext.prototype.five = function() {
    return this.getTypedRuleContext(FiveContext,0);
};

LetterContext.prototype.six = function() {
    return this.getTypedRuleContext(SixContext,0);
};

LetterContext.prototype.seven = function() {
    return this.getTypedRuleContext(SevenContext,0);
};

LetterContext.prototype.eight = function() {
    return this.getTypedRuleContext(EightContext,0);
};

LetterContext.prototype.nine = function() {
    return this.getTypedRuleContext(NineContext,0);
};

LetterContext.prototype.zero = function() {
    return this.getTypedRuleContext(ZeroContext,0);
};

LetterContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterLetter(this);
	}
};

LetterContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitLetter(this);
	}
};




morsecodeParser.LetterContext = LetterContext;

morsecodeParser.prototype.letter = function() {

    var localctx = new LetterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, morsecodeParser.RULE_letter);
    try {
        this.state = 119;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 83;
            this.a();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 84;
            this.b();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 85;
            this.c();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 86;
            this.d();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 87;
            this.e();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 88;
            this.f();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 89;
            this.g();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 90;
            this.h();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 91;
            this.i();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 92;
            this.j();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 93;
            this.k();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 94;
            this.l();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 95;
            this.m();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 96;
            this.n();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 97;
            this.o();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 98;
            this.p();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 99;
            this.q();
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 100;
            this.r();
            break;

        case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 101;
            this.s();
            break;

        case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 102;
            this.t();
            break;

        case 21:
            this.enterOuterAlt(localctx, 21);
            this.state = 103;
            this.u();
            break;

        case 22:
            this.enterOuterAlt(localctx, 22);
            this.state = 104;
            this.v();
            break;

        case 23:
            this.enterOuterAlt(localctx, 23);
            this.state = 105;
            this.w();
            break;

        case 24:
            this.enterOuterAlt(localctx, 24);
            this.state = 106;
            this.x();
            break;

        case 25:
            this.enterOuterAlt(localctx, 25);
            this.state = 107;
            this.y();
            break;

        case 26:
            this.enterOuterAlt(localctx, 26);
            this.state = 108;
            this.z();
            break;

        case 27:
            this.enterOuterAlt(localctx, 27);
            this.state = 109;
            this.one();
            break;

        case 28:
            this.enterOuterAlt(localctx, 28);
            this.state = 110;
            this.two();
            break;

        case 29:
            this.enterOuterAlt(localctx, 29);
            this.state = 111;
            this.three();
            break;

        case 30:
            this.enterOuterAlt(localctx, 30);
            this.state = 112;
            this.four();
            break;

        case 31:
            this.enterOuterAlt(localctx, 31);
            this.state = 113;
            this.five();
            break;

        case 32:
            this.enterOuterAlt(localctx, 32);
            this.state = 114;
            this.six();
            break;

        case 33:
            this.enterOuterAlt(localctx, 33);
            this.state = 115;
            this.seven();
            break;

        case 34:
            this.enterOuterAlt(localctx, 34);
            this.state = 116;
            this.eight();
            break;

        case 35:
            this.enterOuterAlt(localctx, 35);
            this.state = 117;
            this.nine();
            break;

        case 36:
            this.enterOuterAlt(localctx, 36);
            this.state = 118;
            this.zero();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_a;
    return this;
}

AContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AContext.prototype.constructor = AContext;

AContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

AContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

AContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterA(this);
	}
};

AContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitA(this);
	}
};




morsecodeParser.AContext = AContext;

morsecodeParser.prototype.a = function() {

    var localctx = new AContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, morsecodeParser.RULE_a);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(morsecodeParser.DOT);
        this.state = 122;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_b;
    return this;
}

BContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BContext.prototype.constructor = BContext;

BContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

BContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


BContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterB(this);
	}
};

BContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitB(this);
	}
};




morsecodeParser.BContext = BContext;

morsecodeParser.prototype.b = function() {

    var localctx = new BContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, morsecodeParser.RULE_b);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 124;
        this.match(morsecodeParser.DASH);
        this.state = 125;
        this.match(morsecodeParser.DOT);
        this.state = 126;
        this.match(morsecodeParser.DOT);
        this.state = 127;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_c;
    return this;
}

CContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CContext.prototype.constructor = CContext;

CContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


CContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


CContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterC(this);
	}
};

CContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitC(this);
	}
};




morsecodeParser.CContext = CContext;

morsecodeParser.prototype.c = function() {

    var localctx = new CContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, morsecodeParser.RULE_c);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(morsecodeParser.DASH);
        this.state = 130;
        this.match(morsecodeParser.DOT);
        this.state = 131;
        this.match(morsecodeParser.DASH);
        this.state = 132;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_d;
    return this;
}

DContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DContext.prototype.constructor = DContext;

DContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

DContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


DContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterD(this);
	}
};

DContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitD(this);
	}
};




morsecodeParser.DContext = DContext;

morsecodeParser.prototype.d = function() {

    var localctx = new DContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, morsecodeParser.RULE_d);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(morsecodeParser.DASH);
        this.state = 135;
        this.match(morsecodeParser.DOT);
        this.state = 136;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_e;
    return this;
}

EContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EContext.prototype.constructor = EContext;

EContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

EContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterE(this);
	}
};

EContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitE(this);
	}
};




morsecodeParser.EContext = EContext;

morsecodeParser.prototype.e = function() {

    var localctx = new EContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, morsecodeParser.RULE_e);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_f;
    return this;
}

FContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FContext.prototype.constructor = FContext;

FContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


FContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

FContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterF(this);
	}
};

FContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitF(this);
	}
};




morsecodeParser.FContext = FContext;

morsecodeParser.prototype.f = function() {

    var localctx = new FContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, morsecodeParser.RULE_f);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(morsecodeParser.DOT);
        this.state = 141;
        this.match(morsecodeParser.DOT);
        this.state = 142;
        this.match(morsecodeParser.DASH);
        this.state = 143;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function GContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_g;
    return this;
}

GContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GContext.prototype.constructor = GContext;

GContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


GContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

GContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterG(this);
	}
};

GContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitG(this);
	}
};




morsecodeParser.GContext = GContext;

morsecodeParser.prototype.g = function() {

    var localctx = new GContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, morsecodeParser.RULE_g);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this.match(morsecodeParser.DASH);
        this.state = 146;
        this.match(morsecodeParser.DASH);
        this.state = 147;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function HContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_h;
    return this;
}

HContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HContext.prototype.constructor = HContext;

HContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


HContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterH(this);
	}
};

HContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitH(this);
	}
};




morsecodeParser.HContext = HContext;

morsecodeParser.prototype.h = function() {

    var localctx = new HContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, morsecodeParser.RULE_h);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(morsecodeParser.DOT);
        this.state = 150;
        this.match(morsecodeParser.DOT);
        this.state = 151;
        this.match(morsecodeParser.DOT);
        this.state = 152;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_i;
    return this;
}

IContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IContext.prototype.constructor = IContext;

IContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


IContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterI(this);
	}
};

IContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitI(this);
	}
};




morsecodeParser.IContext = IContext;

morsecodeParser.prototype.i = function() {

    var localctx = new IContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, morsecodeParser.RULE_i);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(morsecodeParser.DOT);
        this.state = 155;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function JContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_j;
    return this;
}

JContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
JContext.prototype.constructor = JContext;

JContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

JContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


JContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterJ(this);
	}
};

JContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitJ(this);
	}
};




morsecodeParser.JContext = JContext;

morsecodeParser.prototype.j = function() {

    var localctx = new JContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, morsecodeParser.RULE_j);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 157;
        this.match(morsecodeParser.DOT);
        this.state = 158;
        this.match(morsecodeParser.DASH);
        this.state = 159;
        this.match(morsecodeParser.DASH);
        this.state = 160;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function KContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_k;
    return this;
}

KContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KContext.prototype.constructor = KContext;

KContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


KContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

KContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterK(this);
	}
};

KContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitK(this);
	}
};




morsecodeParser.KContext = KContext;

morsecodeParser.prototype.k = function() {

    var localctx = new KContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, morsecodeParser.RULE_k);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.match(morsecodeParser.DASH);
        this.state = 163;
        this.match(morsecodeParser.DOT);
        this.state = 164;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_l;
    return this;
}

LContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LContext.prototype.constructor = LContext;

LContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


LContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

LContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterL(this);
	}
};

LContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitL(this);
	}
};




morsecodeParser.LContext = LContext;

morsecodeParser.prototype.l = function() {

    var localctx = new LContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, morsecodeParser.RULE_l);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(morsecodeParser.DOT);
        this.state = 167;
        this.match(morsecodeParser.DASH);
        this.state = 168;
        this.match(morsecodeParser.DOT);
        this.state = 169;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_m;
    return this;
}

MContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MContext.prototype.constructor = MContext;

MContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


MContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterM(this);
	}
};

MContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitM(this);
	}
};




morsecodeParser.MContext = MContext;

morsecodeParser.prototype.m = function() {

    var localctx = new MContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, morsecodeParser.RULE_m);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(morsecodeParser.DASH);
        this.state = 172;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_n;
    return this;
}

NContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NContext.prototype.constructor = NContext;

NContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

NContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

NContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterN(this);
	}
};

NContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitN(this);
	}
};




morsecodeParser.NContext = NContext;

morsecodeParser.prototype.n = function() {

    var localctx = new NContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, morsecodeParser.RULE_n);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 174;
        this.match(morsecodeParser.DASH);
        this.state = 175;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_o;
    return this;
}

OContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OContext.prototype.constructor = OContext;

OContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


OContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterO(this);
	}
};

OContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitO(this);
	}
};




morsecodeParser.OContext = OContext;

morsecodeParser.prototype.o = function() {

    var localctx = new OContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, morsecodeParser.RULE_o);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 177;
        this.match(morsecodeParser.DASH);
        this.state = 178;
        this.match(morsecodeParser.DASH);
        this.state = 179;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_p;
    return this;
}

PContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PContext.prototype.constructor = PContext;

PContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


PContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


PContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterP(this);
	}
};

PContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitP(this);
	}
};




morsecodeParser.PContext = PContext;

morsecodeParser.prototype.p = function() {

    var localctx = new PContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, morsecodeParser.RULE_p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 181;
        this.match(morsecodeParser.DOT);
        this.state = 182;
        this.match(morsecodeParser.DASH);
        this.state = 183;
        this.match(morsecodeParser.DASH);
        this.state = 184;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function QContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_q;
    return this;
}

QContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QContext.prototype.constructor = QContext;

QContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


QContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

QContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterQ(this);
	}
};

QContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitQ(this);
	}
};




morsecodeParser.QContext = QContext;

morsecodeParser.prototype.q = function() {

    var localctx = new QContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, morsecodeParser.RULE_q);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(morsecodeParser.DASH);
        this.state = 187;
        this.match(morsecodeParser.DASH);
        this.state = 188;
        this.match(morsecodeParser.DOT);
        this.state = 189;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


RContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitR(this);
	}
};




morsecodeParser.RContext = RContext;

morsecodeParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, morsecodeParser.RULE_r);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this.match(morsecodeParser.DOT);
        this.state = 192;
        this.match(morsecodeParser.DASH);
        this.state = 193;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_s;
    return this;
}

SContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SContext.prototype.constructor = SContext;

SContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


SContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterS(this);
	}
};

SContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitS(this);
	}
};




morsecodeParser.SContext = SContext;

morsecodeParser.prototype.s = function() {

    var localctx = new SContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, morsecodeParser.RULE_s);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.match(morsecodeParser.DOT);
        this.state = 196;
        this.match(morsecodeParser.DOT);
        this.state = 197;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_t;
    return this;
}

TContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TContext.prototype.constructor = TContext;

TContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

TContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterT(this);
	}
};

TContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitT(this);
	}
};




morsecodeParser.TContext = TContext;

morsecodeParser.prototype.t = function() {

    var localctx = new TContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, morsecodeParser.RULE_t);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_u;
    return this;
}

UContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UContext.prototype.constructor = UContext;

UContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


UContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

UContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterU(this);
	}
};

UContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitU(this);
	}
};




morsecodeParser.UContext = UContext;

morsecodeParser.prototype.u = function() {

    var localctx = new UContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, morsecodeParser.RULE_u);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(morsecodeParser.DOT);
        this.state = 202;
        this.match(morsecodeParser.DOT);
        this.state = 203;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_v;
    return this;
}

VContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VContext.prototype.constructor = VContext;

VContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


VContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

VContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterV(this);
	}
};

VContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitV(this);
	}
};




morsecodeParser.VContext = VContext;

morsecodeParser.prototype.v = function() {

    var localctx = new VContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, morsecodeParser.RULE_v);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        this.match(morsecodeParser.DOT);
        this.state = 206;
        this.match(morsecodeParser.DOT);
        this.state = 207;
        this.match(morsecodeParser.DOT);
        this.state = 208;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_w;
    return this;
}

WContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WContext.prototype.constructor = WContext;

WContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

WContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


WContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterW(this);
	}
};

WContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitW(this);
	}
};




morsecodeParser.WContext = WContext;

morsecodeParser.prototype.w = function() {

    var localctx = new WContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, morsecodeParser.RULE_w);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 210;
        this.match(morsecodeParser.DOT);
        this.state = 211;
        this.match(morsecodeParser.DASH);
        this.state = 212;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function XContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_x;
    return this;
}

XContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
XContext.prototype.constructor = XContext;

XContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


XContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


XContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterX(this);
	}
};

XContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitX(this);
	}
};




morsecodeParser.XContext = XContext;

morsecodeParser.prototype.x = function() {

    var localctx = new XContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, morsecodeParser.RULE_x);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this.match(morsecodeParser.DASH);
        this.state = 215;
        this.match(morsecodeParser.DOT);
        this.state = 216;
        this.match(morsecodeParser.DOT);
        this.state = 217;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function YContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_y;
    return this;
}

YContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
YContext.prototype.constructor = YContext;

YContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


YContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

YContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterY(this);
	}
};

YContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitY(this);
	}
};




morsecodeParser.YContext = YContext;

morsecodeParser.prototype.y = function() {

    var localctx = new YContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, morsecodeParser.RULE_y);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 219;
        this.match(morsecodeParser.DASH);
        this.state = 220;
        this.match(morsecodeParser.DOT);
        this.state = 221;
        this.match(morsecodeParser.DASH);
        this.state = 222;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ZContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_z;
    return this;
}

ZContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ZContext.prototype.constructor = ZContext;

ZContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


ZContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


ZContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterZ(this);
	}
};

ZContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitZ(this);
	}
};




morsecodeParser.ZContext = ZContext;

morsecodeParser.prototype.z = function() {

    var localctx = new ZContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, morsecodeParser.RULE_z);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 224;
        this.match(morsecodeParser.DASH);
        this.state = 225;
        this.match(morsecodeParser.DASH);
        this.state = 226;
        this.match(morsecodeParser.DOT);
        this.state = 227;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OneContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_one;
    return this;
}

OneContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OneContext.prototype.constructor = OneContext;

OneContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

OneContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


OneContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterOne(this);
	}
};

OneContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitOne(this);
	}
};




morsecodeParser.OneContext = OneContext;

morsecodeParser.prototype.one = function() {

    var localctx = new OneContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, morsecodeParser.RULE_one);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 229;
        this.match(morsecodeParser.DOT);
        this.state = 230;
        this.match(morsecodeParser.DASH);
        this.state = 231;
        this.match(morsecodeParser.DASH);
        this.state = 232;
        this.match(morsecodeParser.DASH);
        this.state = 233;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TwoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_two;
    return this;
}

TwoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TwoContext.prototype.constructor = TwoContext;

TwoContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


TwoContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


TwoContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterTwo(this);
	}
};

TwoContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitTwo(this);
	}
};




morsecodeParser.TwoContext = TwoContext;

morsecodeParser.prototype.two = function() {

    var localctx = new TwoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, morsecodeParser.RULE_two);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 235;
        this.match(morsecodeParser.DOT);
        this.state = 236;
        this.match(morsecodeParser.DOT);
        this.state = 237;
        this.match(morsecodeParser.DASH);
        this.state = 238;
        this.match(morsecodeParser.DASH);
        this.state = 239;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ThreeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_three;
    return this;
}

ThreeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThreeContext.prototype.constructor = ThreeContext;

ThreeContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


ThreeContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


ThreeContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterThree(this);
	}
};

ThreeContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitThree(this);
	}
};




morsecodeParser.ThreeContext = ThreeContext;

morsecodeParser.prototype.three = function() {

    var localctx = new ThreeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, morsecodeParser.RULE_three);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 241;
        this.match(morsecodeParser.DOT);
        this.state = 242;
        this.match(morsecodeParser.DOT);
        this.state = 243;
        this.match(morsecodeParser.DOT);
        this.state = 244;
        this.match(morsecodeParser.DASH);
        this.state = 245;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FourContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_four;
    return this;
}

FourContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FourContext.prototype.constructor = FourContext;

FourContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


FourContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

FourContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterFour(this);
	}
};

FourContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitFour(this);
	}
};




morsecodeParser.FourContext = FourContext;

morsecodeParser.prototype.four = function() {

    var localctx = new FourContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, morsecodeParser.RULE_four);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
        this.match(morsecodeParser.DOT);
        this.state = 248;
        this.match(morsecodeParser.DOT);
        this.state = 249;
        this.match(morsecodeParser.DOT);
        this.state = 250;
        this.match(morsecodeParser.DOT);
        this.state = 251;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_five;
    return this;
}

FiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FiveContext.prototype.constructor = FiveContext;

FiveContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


FiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterFive(this);
	}
};

FiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitFive(this);
	}
};




morsecodeParser.FiveContext = FiveContext;

morsecodeParser.prototype.five = function() {

    var localctx = new FiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, morsecodeParser.RULE_five);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(morsecodeParser.DOT);
        this.state = 254;
        this.match(morsecodeParser.DOT);
        this.state = 255;
        this.match(morsecodeParser.DOT);
        this.state = 256;
        this.match(morsecodeParser.DOT);
        this.state = 257;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_six;
    return this;
}

SixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SixContext.prototype.constructor = SixContext;

SixContext.prototype.DASH = function() {
    return this.getToken(morsecodeParser.DASH, 0);
};

SixContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


SixContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterSix(this);
	}
};

SixContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitSix(this);
	}
};




morsecodeParser.SixContext = SixContext;

morsecodeParser.prototype.six = function() {

    var localctx = new SixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, morsecodeParser.RULE_six);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.match(morsecodeParser.DASH);
        this.state = 260;
        this.match(morsecodeParser.DOT);
        this.state = 261;
        this.match(morsecodeParser.DOT);
        this.state = 262;
        this.match(morsecodeParser.DOT);
        this.state = 263;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SevenContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_seven;
    return this;
}

SevenContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SevenContext.prototype.constructor = SevenContext;

SevenContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


SevenContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


SevenContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterSeven(this);
	}
};

SevenContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitSeven(this);
	}
};




morsecodeParser.SevenContext = SevenContext;

morsecodeParser.prototype.seven = function() {

    var localctx = new SevenContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, morsecodeParser.RULE_seven);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.match(morsecodeParser.DASH);
        this.state = 266;
        this.match(morsecodeParser.DASH);
        this.state = 267;
        this.match(morsecodeParser.DOT);
        this.state = 268;
        this.match(morsecodeParser.DOT);
        this.state = 269;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EightContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_eight;
    return this;
}

EightContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EightContext.prototype.constructor = EightContext;

EightContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


EightContext.prototype.DOT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DOT);
    } else {
        return this.getToken(morsecodeParser.DOT, i);
    }
};


EightContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterEight(this);
	}
};

EightContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitEight(this);
	}
};




morsecodeParser.EightContext = EightContext;

morsecodeParser.prototype.eight = function() {

    var localctx = new EightContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, morsecodeParser.RULE_eight);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(morsecodeParser.DASH);
        this.state = 272;
        this.match(morsecodeParser.DASH);
        this.state = 273;
        this.match(morsecodeParser.DASH);
        this.state = 274;
        this.match(morsecodeParser.DOT);
        this.state = 275;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_nine;
    return this;
}

NineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NineContext.prototype.constructor = NineContext;

NineContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


NineContext.prototype.DOT = function() {
    return this.getToken(morsecodeParser.DOT, 0);
};

NineContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterNine(this);
	}
};

NineContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitNine(this);
	}
};




morsecodeParser.NineContext = NineContext;

morsecodeParser.prototype.nine = function() {

    var localctx = new NineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, morsecodeParser.RULE_nine);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 277;
        this.match(morsecodeParser.DASH);
        this.state = 278;
        this.match(morsecodeParser.DASH);
        this.state = 279;
        this.match(morsecodeParser.DASH);
        this.state = 280;
        this.match(morsecodeParser.DASH);
        this.state = 281;
        this.match(morsecodeParser.DOT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ZeroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = morsecodeParser.RULE_zero;
    return this;
}

ZeroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ZeroContext.prototype.constructor = ZeroContext;

ZeroContext.prototype.DASH = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(morsecodeParser.DASH);
    } else {
        return this.getToken(morsecodeParser.DASH, i);
    }
};


ZeroContext.prototype.enterRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.enterZero(this);
	}
};

ZeroContext.prototype.exitRule = function(listener) {
    if(listener instanceof morsecodeListener ) {
        listener.exitZero(this);
	}
};




morsecodeParser.ZeroContext = ZeroContext;

morsecodeParser.prototype.zero = function() {

    var localctx = new ZeroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, morsecodeParser.RULE_zero);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(morsecodeParser.DASH);
        this.state = 284;
        this.match(morsecodeParser.DASH);
        this.state = 285;
        this.match(morsecodeParser.DASH);
        this.state = 286;
        this.match(morsecodeParser.DASH);
        this.state = 287;
        this.match(morsecodeParser.DASH);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.morsecodeParser = morsecodeParser;
