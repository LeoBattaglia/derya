//Imports
import * as ref from "./ref/code_generator/reference.json";
import * as sys from "samara";

//Constants
const req = require("request");
const fs = require("fs");

//Declarations
let urls_tags:string[] = [];
let json:string;
let ts:string;
let ts_add:string;
let ts_close:string;
let ts_open:string;
let limit:number = 10000;
let count:number;

//Functions
function isUnique(name:string):Boolean{
    for(let str of ref.unique){
        if(name === str){
            return true;
        }
    }
    return false;
}

function printLine(){
    console.log("-------------------------------------------------------------------------------------");
}

function requestGlobalAttributes(){
    let url:string = "https://www.w3schools.com/TAGS/ref_standardattributes.asp";
    req({
        uri: url,
    }, function(error, response, body){
        let sc:string = body;
        sc = sc.substr(sc.indexOf("<h2>HTML Global Attributes</h2>") + "<h2>HTML Global Attributes</h2>".length, sc.length);
        sc = sc.substr(0, sc.indexOf("</table>"));
        let lines :string[] = sc.split("\n");
        let atts:string[] = [];
        for(let line of lines){
            if(line.indexOf("href=") > -1){
                line = line.substr(line.indexOf("\">") + 2, line.length);
                line = line.substr(0, line.indexOf("</a>"))
                atts.push(line);
            }
        }
        json = "";
        for(let att of atts){
            console.log("Att: " + att);
            json += "{\n";
            json += "\"attributes\":[\n";

            json += "\n";
            json += "\n";
            json += "\n";
            json += "\n";

            json += "]\n";
            json += "}\n";

        }


        fs.writeFile("./lib/ref/html_tags.json", json, err => {
            if(err){
                console.error(err)
                return
            }
        })

    });
    //TODO: All

}

function requestTags(){
    if(urls_tags.length > 0 && count < limit){
        count++;
        let url:string = urls_tags[0];
        urls_tags.shift();
        req({
            uri: url,
        }, function(error, response, body){
            let name:string = body;
            let search:string = "<title>HTML ";
            name = name.substr(name.indexOf(search) + search.length, name.length);
            name = name.substr(0, name.indexOf(" "));
            let unique:Boolean = isUnique(name);
            let closed:Boolean = false;
            if(body.indexOf("&lt;/" + name + "&gt;") > -1){
                closed = true;
            }
            let global:Boolean = false;
            if(body.indexOf("supports the <a href=\"ref_standardattributes.asp\">Global Attributes in HTML") > -1){
                global = true;
            }else if(body.indexOf("supports the \n<a href=\"ref_standardattributes.asp\">Global Attributes in HTML") > -1){
                global = true;
            }
            let events:Boolean = false;
            if(body.indexOf("supports the <a href=\"ref_eventattributes.asp\">Event Attributes in HTML") > -1){
                events = true;
            }else if(body.indexOf("supports the \n<a href=\"ref_eventattributes.asp\">Event Attributes in HTML") > -1){
                events = true;
            }
            let attributes:any[] = [];
            let sc:string = body;
            search = "<h2>Attributes</h2>";
            if(sc.indexOf(search) > -1){
                sc = sc.substr(sc.indexOf(search) + search.length, sc.length);
                sc = sc.substr(0, sc.indexOf("</table>"));
                let trs:string[] = sc.split("</tr>");
                for(let tr of trs){
                    if(tr.indexOf("href=") > -1){
                        let tds:string[] = tr.split("</td>");
                        let nr:number = -1;
                        let att:string;
                        let vals:any[] = [];
                        for(let td of tds){
                            if(td.indexOf("<td>") > -1){
                                if(td.indexOf("href=") > -1){
                                    nr++;
                                    att = td.substr(td.indexOf("\">") + 2, td.length);
                                    att = att.substr(0, att.indexOf("<"));
                                }else{
                                    if(nr === 0){
                                        let value:string;
                                        nr++;
                                        value = td.trim();
                                        value = value.replace("<td>", "");
                                        if(value.indexOf("<br>") < 0){
                                            if(value.indexOf("<i>") > -1 || value.indexOf("<em>") > -1){
                                                value = "#" + sys.removeTags(value).trim().toLowerCase();
                                                vals.push(value);
                                            }else{
                                                value = sys.removeTags(value).trim();
                                                vals.push(value);
                                            }
                                        }else{
                                            let vals2 = value.split("<br>");
                                            for(let val of vals2){
                                                if(val.indexOf("<i>") > -1 || val.indexOf("<em>") > -1){
                                                    val = "#" + sys.removeTags(val).trim().toLowerCase();
                                                    vals.push(val);
                                                }else{
                                                    val = sys.removeTags(val).trim();
                                                    vals.push(val);
                                                }
                                            }
                                        }
                                    }else if(nr === 1){
                                        nr = -1;
                                        let desc:string = sys.removeTags(td).trim();
                                        desc = sys.removeAll(desc, "\n");
                                        desc = sys.removeAll(desc, "\t");
                                        while(desc.indexOf("  ") > -1){
                                            desc = desc.replace("  ", " ");
                                        }
                                        let data:any[] = [];
                                        data.push(att);
                                        data.push(vals);
                                        data.push(desc);
                                        attributes.push(data);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            json += "{\n";
            json += "\"name\":\"" + name + "\",\n";
            json += "\"unique\":" + unique + ",\n";
            json += "\"closed\":" + closed + ",\n";
            json += "\"global\":" + global + ",\n";
            json += "\"events\":" + events + ",\n";
            json += "\"attributes\":[";
            if(attributes.length > 0){
                json += "\n";
            }
            let cnt:number = 0;
            for(let att of attributes){
                json += "{\n";
                json += "\"name\":\"" + att[0] + "\",\n";
                json += "\"types\":[\n";
                for(let type of att[1]){
                    json += "\"" + type + "\",\n";
                }
                json += "]\n";
                json += "},\n";
            }
            json += "]\n";
            json += "},\n";
            if(closed){
                ts_close += "close" + sys.capitalizeFirstLetter(name) + "():HTMLElement{\n";
                ts_close += "return this.openTagUnsafe(\"" + name + "\");\n";
                ts_close += "}\n";
                ts_close += "\n";
                ts_open += "open" + sys.capitalizeFirstLetter(name) + "():HTMLElement{\n";
                ts_open += "return this.openTagUnsafe(\"" + name + "\");\n";
                ts_open += "}\n";
                ts_open += "\n";
            }else{
                if(name !== "doctype"){
                    ts_add += "add" + sys.capitalizeFirstLetter(name) + "():HTMLElement{\n";
                    ts_add += "return this.openTagUnsafe(\"" + name + "\");\n";
                    ts_add += "}\n";
                    ts_add += "\n";
                }
            }
            requestTags();
        });
    }else{
        json += "]\n";
        json += "}";
        json = sys.replaceAll(json, ",\n]", "\n]");
        //console.log("JSON: " + json);
        fs.writeFile("./lib/ref/html_tags.json", json, err => {
            if(err){
                console.error(err)
                return
            }
        })
        let ts_file:string = fs.readFileSync("./lib/html_sourcecode_functions.ts").toString();
        ts_file = ts_file.substr(0, ts_file.indexOf("//Generated-Methods") + "//Generated-Methods".length);
        ts = ts_file + "\n" + ts_add + ts_close + ts_open + "}";
        fs.writeFile("./lib/html_sourcecode_functions_gen.ts", ts, err => {
            if(err){
                console.error(err)
                return
            }
        })
    }
}

function requestTagURLs(){
    let url:string = "https://www.w3schools.com/TAGS/default.ASP";
    req({
        uri: url,
    }, function(error, response, body){
        let search:string = "<table class=\"ws-table-all notranslate\">";
        body = body.substr(body.indexOf(search) + search.length, body.length);
        search = "</tr>";
        body = body.substr(body.indexOf(search) + search.length, body.length);
        body = body.substr(0, body.indexOf("</table>"));
        let lines:string[] = body.split("\n");
        for(let line of lines){
            if(line.indexOf("href=\"") > -1 && line.indexOf("deprecated") < 0 && line.indexOf("notsupported") < 0){
                line = line.substr(line.indexOf("href=") + 6, line.length);
                line = line.substr(0, line.indexOf("\""));
                if(line !== "tag_comment.asp"){
                    urls_tags.push("https://www.w3schools.com/TAGS/" + line);
                }
            }
        }
        count = 0;
        json = "{\n";
        json += "\"tags\":[\n";
        ts = "";
        ts_add = "";
        ts_close = "";
        ts_open = "";
        requestTags();
    });
}

//Export-Class
export class CodeGenerator{
    //Start-Method
    start(){
        //requestTagURLs();
        requestGlobalAttributes();

        //TODO: Next Request

    }
}