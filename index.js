
/*
 *  @Soldy\binaryrc\2020.12.07\GPL3
 */
'use strict'


/*
 * @prototype
 */
const _binary=function(){
    /*
     * @param {array}
     * @public
     * @retur {string}
    */
    this.aTs = function(input){
        return _aTs(input);
    }
    /*
     * @param {string}
     * @public
     * @retur {array}
    */
    this.sTa8 = function(input){
        return _sTa8(input);
    }
    /*
     * @param {string}
     * @public
     * @retur {array}
    */
    this.sTa = function(input){
        return _sTa(input);
    }
    /*
     * @param {string}
     * @private
     * @retur {array}
    */
    const _sTa = (input)=>{
        let pushed = input.split('');
        const  strLen=input.length;
        for (let i=0; i < strLen ; i++) 
            pushed[i]=input.charCodeAt(i);
        return pushed;
    }
    /*
     * @param {string}
     * @private
     * @retur {array}
    */
    const _sTa8 = function(input){
        let pushed = _sTa(input);
        let buf = new Uint8Array(pushed.length);
        buf.set(pushed);
        return buf;

    }
    /*
     * @param {array}
     * @private
     * @retur {string}
    */
    const _aTs = function(input){
        return String.fromCharCode.apply(
            null,
            input
        );
    }
}
exports.base = _binary;
