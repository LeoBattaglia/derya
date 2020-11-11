//Functions
export function parse(str:string):string[]{
    str = removeAll(str, "\t");
    str = replaceAll(str, "\r\n", " ");
    str = replaceAll(str, "  ", " ");
    str = str.trim();
    let temp:string;
    let sc:string[] = [];
    while(str.length > 0){
        if(str.indexOf("/*") == 0 && str.indexOf("*/") > 0){
            //temp = str.substring("/*".length, str.indexOf("*/")).trim();
            //console.log("COMMENT: " + temp);
            //sc.push(temp);
            str = str.substring(str.indexOf("*/") + 2, str.length).trim();
        }else if(str.indexOf("@charset") == 0){
            temp = str.substring(0, str.indexOf(";") + 1).trim();
            //console.log("CHARSET: " + temp);
            sc.push(temp);
            str = str.substring(str.indexOf(";") + 1, str.length).trim();
        }else if(str.indexOf("@import") == 0){
            temp = str.substring(0, str.indexOf(";") + 1).trim();
            //console.log("IMPORT: " + temp);
            sc.push(temp);
            str = str.substring(str.indexOf(";") + 1, str.length).trim();
        }else if(str.indexOf("{") > 0 && str.indexOf("}") > str.indexOf("{")){
            let char:string = null;
            let level:number = 0;
            let pos:number = 0;
            while(char !== "}" || level > 0){
                char = str.substring(pos, pos + 1);
                if(char === "{"){
                    level++;
                }
                if(char === "}"){
                    level--;
                }
                pos++;
            }
            temp = str.substring(0, pos).trim();
            //console.log("BRACES: " + temp);
            sc.push(temp);
            str = str.substring(pos, str.length).trim();
        }else{
            console.log("ERROR Unknown String: " + str);
        }


    }
    return sc;
}

function removeAll(str:string, search:string):string{
    while(str.indexOf(search) > -1){
        str = str.replace(search, "");
    }
    return str;
}

function replaceAll(str:string, search:string, replace:string):string{
    while(str.indexOf(search) > -1){
        str = str.replace(search, replace);
    }
    return str;
}