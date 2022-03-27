const { Extension, type, api } = require('clipcc-extension');

class StringExtension extends Extension {

    find_(str, find, from){
        return str.indexOf(find, from-1)+1;
    }

    insertStr(soure, start, newStr){   
        return soure.slice(0, start) + newStr + soure.slice(start);
    }

    substr_(str, from, to) {
        return str.slice(from-1,to);
    }	

    charCodeAt(str,index) {
        if (index < 1 || index > str.length) return NaN;
        return str.charCodeAt(index-1);
    };
    changeStr(str,index,lastIndex,changeStr){
        return str.substr(0, index-1) + changeStr.substr(0,lastIndex-index+1)+ str.substr(lastIndex , str.length);
    }

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

    cut_list(str,char,num){
        return str.split(char)[num-1]
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
            opcode: 'jasonxu.string.LowUpCheck.opcode',
            type: type.BlockType.BOOLEAN,
            messageId: 'jasonxu.string.LowUpCheck',
            categoryId: 'jasonxu.string.string',
            function: args => args.TEXT1 === args.TEXT2,
            param: {
                TEXT1: {
                    type: type.ParameterType.STRING,
                    default: 'a'
                },TEXT2: {
                    type: type.ParameterType.STRING,
                    default: 'A'
                }
            }
        });
        
        api.addBlock({
            opcode: 'jasonxu.string.replace.opcode',
            type:type.BlockType.REPORTER,
            messageId: 'jasonxu.string.replace',
            categoryId: 'jasonxu.string.string',
            function: args => args.STR.replace(args.TXT1,args.TXT2),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'Scratch yyds! Scratch yyds!'
                },TXT1: {
                    type: type.ParameterType.STRING,
                    default: 'Scratch'
                },TXT2: {
                    type: type.ParameterType.STRING,
                    default: 'ClipCC'
                }
            }
        });
        
        api.addBlock({
            opcode: 'jasonxu.string.replaceAll.opcode',
            type:type.BlockType.REPORTER,
            messageId: 'jasonxu.string.replaceAll',
            categoryId: 'jasonxu.string.string',
            function: args => args.STR.replaceAll(args.TXT1,args.TXT2),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'Scratch yyds! Scratch yyds!'
                },TXT1: {
                    type: type.ParameterType.STRING,
                    default: 'Scratch'
                },TXT2: {
                    type: type.ParameterType.STRING,
                    default: 'ClipCC'
                }
            }
        });

        api.addBlock({
            opcode: 'jasonxu.string.changeStr.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.changeStr',
            categoryId: 'jasonxu.string.string',
            function: args => this.changeStr(args.STR,args.INDEX,args.LASTINDEX,args.CHSTR),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'Hello, World'
                },INDEX: {
                    type: type.ParameterType.NUMBER,
                    default: 7
                },LASTINDEX: {
                    type: type.ParameterType.NUMBER,
                    default: 12
                },CHSTR: {
                    type: type.ParameterType.STRING,
                    default: 'ClipCC'
                }
            }
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
                    default: '#E96848'
                }
            }
        });


        api.addBlock({
            opcode: 'jasonxu.string.cutList.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.cutList', 
            categoryId: 'jasonxu.string.string',
            function: args => this.cut_list(args.LIST, args.CUTER, args.NUM),
            param: {
                LIST: {
                    type: type.ParameterType.STRING,
                    default: 'ClipTeam|yyds!'
                },
                CUTER: {
                    type: type.ParameterType.STRING,
                    default: '|'
                },
                NUM: {
                    type: type.ParameterType.NUMBER,
                    default: '1'
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
                    default: '%E4%BD%A0%E5%A5%BD'
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
                    default: '你好'
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
            opcode: 'jasonxu.string.join.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.join', 
            categoryId: 'jasonxu.string.string',
            function: args => this.insertStr(args.STR, args.INDEX-1, args.JOIN),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'ClipTeam yds!'
                },
                INDEX: {
                    type: type.ParameterType.NUMBER,
                    default: '10'
                },
                JOIN: {
                    type: type.ParameterType.STRING,
                    default: 'y'
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
            opcode: 'jasonxu.string.findfrom.opcode',
            type: type.BlockType.REPORTER,
            messageId: 'jasonxu.string.findfrom', 
            categoryId: 'jasonxu.string.string',
            function: args => this.find_(args.STR, args.FIND, args.FROM),
            param: {
                STR: {
                    type: type.ParameterType.STRING,
                    default: 'ClipTeam yyds!'
                },
                FROM: {
                    type: type.ParameterType.NUMBER,
                    default: '1'
                },
                FIND: {
                    type: type.ParameterType.STRING,
                    default: 'yyds'
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
                    default: '16'
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
                    default: '10000'
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
                    default: '1'
                },
                TO: {
                    type: type.ParameterType.NUMBER,
                    default: '3'
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
                    default: '33609'
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
                    default: '草'
                },
                INDEX: {
                    type: type.ParameterType.NUMBER,
                    default: '1'
                }
            }
        });
    }

    onUninit(){
        api.removeCategory('jasonxu.string.string');
    }
}     

module.exports = StringExtension;
