"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableValues = exports.Grabber = void 0;
const sys = require("samara");
//Constants
const req = require("request");
//Classes
class Grabber {
    //Constructor
    constructor(url) {
        this.url = url;
    }
    //Methods
    getTable(search) {
        let values = new TableValues();
        let sc = this.sc;
        if (sc.indexOf(search) > -1) {
            sc = sc.substring(sc.indexOf(search), sc.length);
            if (sc.indexOf("<table") > -1) {
                sc = sc.substring(sc.indexOf("<table"), sc.length);
                sc = sc.substring(sc.indexOf(">") + 1, sc.length);
                sc = sc.substring(0, sc.indexOf("</table>"));
                //sc = sys.removeAll(sc, "<tr>");
                sc = sys.removeBreaksAndTabs(sc);
                let rows = sc.split("</tr>");
                for (let row of rows) {
                    if (!sys.isNull(row)) {
                        let type;
                        if (row.indexOf("<th") > -1) {
                            type = "th";
                        }
                        else {
                            type = "td";
                        }
                        if (row.indexOf("<" + type) > -1) {
                            row = row.substring(row.indexOf("<" + type), row.length);
                            //console.log("ROW: " + row);
                            let cols = row.split("</" + type + ">");
                            let cols_temp = [];
                            for (let col of cols) {
                                if (!sys.isNull(col)) {
                                    col = col.substring(col.indexOf(">") + 1, col.length);
                                    if (type === "th") {
                                        values.addTitle(col);
                                    }
                                    else {
                                        cols_temp.push(col);
                                    }
                                    //console.log("COL: " + col);
                                }
                            }
                            if (cols_temp.length > 0) {
                                values.addRow(cols_temp);
                            }
                            //console.log("-------------------------");
                        }
                    }
                }
            }
        }
        //TODO: All
        return values;
    }
    async read() {
        let sc = await this.readSC();
        this.sc = sc.toString();
    }
    readSC() {
        return new Promise((resolve, reject) => {
            req(this.url, (error, response, body) => {
                if (error)
                    reject(error);
                if (response.statusCode != 200) {
                    reject('Invalid status code <' + response.statusCode + '>');
                }
                resolve(body);
            });
        });
    }
}
exports.Grabber = Grabber;
class TableValues {
    //Constructor
    constructor() {
        this.rows = [];
        this.titles = [];
    }
    //Methods
    addRow(values) {
        this.rows.push(values);
    }
    addTitle(title) {
        this.titles.push(title);
    }
}
exports.TableValues = TableValues;
//# sourceMappingURL=grabber.js.map