const { COMMANDS } = require("./constants");
const MAGIC = "FG";
const ENCODING = "utf8";

class Parser {
  _readMagic() {
    const magic = this._readStringOfLength(MAGIC.length);
    if (magic !== MAGIC) {
      throw new Error("Magic number does not mach. Is this a maki file?");
    }
    return magic;
  }

  _readVersion() {
    // No idea what we're actually expecting here.
    this._i += 2;
  }

  _readTypes() {
    let count = this._readUInt32LE();
    const types = [];
    while (count--) {
      let identifier = "";
      let chunks = 4;
      while (chunks--) {
        identifier += this._readUInt32LE().toString(16);
      }
      types.push(identifier.padStart(32, "0"));
    }
    return types;
  }

  _readFunctionsNames() {
    let count = this._readUInt32LE();
    const functionNames = [];
    while (count--) {
      const func = {};
      func.classCode = this._readUInt16LE();
      // Offset into our parsed types
      func.classType = func.classCode & 0xff;
      func.dummy2 = this._readUInt16LE();
      func.name = this._readString();
      functionNames.push(func);
    }
    return functionNames;
  }

  _readVariables() {
    let count = this._readUInt32LE();
    const variables = [];
    while (count--) {
      const type = this._readUInt8();
      const object = this._readUInt8();
      const subClass = this._readUInt16LE();
      const uinit1 = this._readUInt16LE();
      const uinit2 = this._readUInt16LE();
      const uinit3 = this._readUInt16LE();
      const uinit4 = this._readUInt16LE();
      const global = this._readUInt8();
      const system = this._readUInt8();
      const variable = {
        type,
        object,
        subClass,
        uinit1,
        uinit2,
        uinit3,
        uinit4,
        global,
        system
      };
      variables.push(variable);
    }
    return variables;
  }

  _readConstants() {
    let count = this._readUInt32LE();
    const constants = [];
    while (count--) {
      const varNum = this._readUInt32LE();
      const value = this._readString();
      constants.push({ varNum, value });
    }
    return constants;
  }

  _readFunctions() {
    let count = this._readUInt32LE();
    const functions = [];
    while (count--) {
      const varNum = this._readUInt32LE();
      const funcNum = this._readUInt32LE();
      const offset = this._readUInt32LE();
      functions.push({ varNum, offset, funcNum });
    }
    return functions;
  }

  _readCommands(code) {
    let i = 0;
    while (i < code.length) {
      const opCode = code.charCodeAt(i);
      const command = COMMANDS[opCode];
      if (command.arg == null) {
        i++;
        continue;
      }
      switch (command.arg) {
        case "var":
          // This is the index into this._debug.variables
          // this._readUInt32LE();
          i += 5;
          break;
        default:
          i += 5;
      }
      // console.log({ command });
    }
  }

  _readFunctionsCode() {
    const code = this._readStringOfLength(this._readUInt32LE());
    return code;
  }

  _readUInt32LE() {
    const int = this._buffer.readUInt32LE(this._i);
    this._i += 4;
    return int;
  }

  _readUInt16LE() {
    const int = this._buffer.readUInt16LE(this._i);
    this._i += 2;
    return int;
  }

  _readUInt8() {
    const int = this._buffer.readUInt8(this._i);
    this._i++;
    return int;
  }

  _readStringOfLength(length) {
    const str = this._buffer.toString(ENCODING, this._i, this._i + length);
    this._i += length;
    return str;
  }

  _readString() {
    return this._readStringOfLength(this._readUInt16LE());
  }

  parse(buffer) {
    this._buffer = buffer;
    this._i = 0;

    const magic = this._readMagic();
    this._readVersion();
    this._readUInt32LE(); // Not sure what we are skipping over here. Just some UInt 32.
    const types = this._readTypes();
    const functionNames = this._readFunctionsNames();
    const variables = this._readVariables();
    const constants = this._readConstants();
    const functions = this._readFunctions();
    const functionsCode = this._readFunctionsCode();
    this._readCommands(functionsCode);
    return {
      magic,
      types,
      functionNames,
      variables,
      constants,
      functionsCode,
      functions
    };
  }
}

function parse(buffer) {
  const parser = new Parser();
  return parser.parse(buffer);
}

module.exports = { parse };
