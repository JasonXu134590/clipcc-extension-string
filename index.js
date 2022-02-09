const { Extension, type, api } = require('clipcc-extension');

class StringExtension extends Extension {

    substr_(str, from, to) {
        return str.slice(from-1,to);
    }

    charCodeAt(str,index) {
        if (index < 1 || index > str.length) return NaN;
        return str.charCodeAt(index-1);
    };

    fromCharCode(code) {
        return String.fromCharCode(code);
    };

    toDecimal(num,base){
        return parseInt(num,base);
    }

    convertFromDecimal(num,base){
        return parseInt(num).toString(parseInt(base));
    }

    toUppercase(str){
        return str.toUpperCase();
    }

    toLowercase(str){
        return str.toLowerCase();
    }

    reverse(str){
        return str.split('').reverse().join('');
    }

    colorToDecimal(color_){
        if(typeof(color_)=='string'){
            return parseInt(color_.slice(1,7),16);
        }else if(typeof(color_)=='number'){
            return color_;
        }else{
            return 'Error';
        }
    }

    onInit() {
        api.addCategory({
            categoryId: 'jasonxu.string.string',
            messageId: 'jasonxu.string.string.messageid',
            color: '#E96848'
        });

        api.addBlock({
            opcode: 'jasonxu.string.colorToDecimal.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.colorToDecimal',
            categoryId: 'jasonxu.string.string',
            function: args => this.colorToDecimal(args.COLOUR),
            param: {
                COLOUR: {
                    type: type.ParameterType.COLOR,
                    default: '#114514'
                }
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.decodeURI.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.decodeURI',
            categoryId: 'jasonxu.string.string',
            function: args => decodeURI(args.STR),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: '%E5%A3%B9%E5%A3%B9%E8%82%86%E4%BC%8D%E5%A3%B9%E8%82%86'
                }
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.encodeURI.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.encodeURI',
            categoryId: 'jasonxu.string.string',
            function: args => encodeURI(args.STR),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: '壹壹肆伍壹肆'
                }
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.reverse.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.reverse',
            categoryId: 'jasonxu.string.string',
            function: args => this.reverse(args.STR),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'ClipTeam yyds!'
                }
            }
        });
        
        api.addBlock({
            opcode: 'jasonxu.string.toLowercase.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.toLowercase',
            categoryId: 'jasonxu.string.string',
            function: args => this.toLowercase(args.STR),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'ClipTeam yyds!'
                }
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.toUppercase.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.toUppercase',
            categoryId: 'jasonxu.string.string',
            function: args => this.toUppercase(args.STR),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'ClipTeam yyds!'
                }
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.convertFromDecimal.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.convertFromDecimal',
            categoryId: 'jasonxu.string.string',
            function: args => this.convertFromDecimal(args.NUM, args.BASE),
            param: {
                NUM:{
                    type: type.ParameterType.NUMBER,
                    default: '114514'
                },
                BASE:{
                    type: type.ParameterType.NUMBER,
                    default: '2'
                }  
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.toDecimal.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.toDecimal',
            categoryId: 'jasonxu.string.string',
            function: args => this.toDecimal(args.NUM, args.BASE),
            param: {
                NUM:{
                    type: type.ParameterType.NUMBER,
                    default: '11011111101010010'
                },
                BASE:{
                    type: type.ParameterType.NUMBER,
                    default: '2'
                }  
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.substr.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.substr', 
            categoryId: 'jasonxu.string.string',
            function: args => this.substr_(args.STR, args.FROM, args.TO),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'ClipTeam yyds!'
                },
                FROM: {
                    type: type.ParameterType.NUMBER,
                    default: '114514'
                },
                TO: {
                    type: type.ParameterType.NUMBER,
                    default: '1919810'
                }
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.fromCharCode.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.fromCharCode', 
            categoryId: 'jasonxu.string.string',
            function: args => this.fromCharCode(args.CODE),
            param: {
                CODE: {
                    type: type.ParameterType.NUMBER,
                    default: '114514'
                }
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.charCodeAt.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.charCodeAt', 
            categoryId: 'jasonxu.string.string',
            function: args => this.charCodeAt(args.STR, args.INDEX),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'ClipTeam yyds!'
                },
                INDEX: {
                    type: type.ParameterType.NUMBER,
                    default: '114514'
                }
            }
        });
    }

    onUninit(){
        api.removeCategory('jasonxu.string.string');
    }
}     

module.exports = StringExtension;
