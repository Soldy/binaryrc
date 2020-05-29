

exports.binary=function(){
    this.aTs = function(input){
        return String.fromCharCode.apply(
            null,
            input
        );
    }
    this.sTa8 = function(input){
        let pushed = this.sTa(input);
        let buf = new Uint8Array(pushed.length);
        buf.set(pushed);
        return buf;
    }
    this.sTa = function(input){
        let pushed = input.split('');
        for (let i=0, strLen=input.length; i < strLen; i++) 
            pushed[i]=input.charCodeAt(i);
        return pushed;
    }
}

