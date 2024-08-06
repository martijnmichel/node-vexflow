"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var jsdom_1 = require("jsdom");
var dom = new jsdom_1.JSDOM("<!DOCTYPE html></html>");
var window = dom.window;
document = dom.window.document;
function createCanvas() {
    var canvas = document.createElement("canvas");
    dom.window.document.body.appendChild(canvas);
    return canvas;
}
function _getImageData(canvas) {
    return canvas.toDataURL().split(";base64,").pop();
}
function extractImage(canvas) {
    var image = Buffer.from(_getImageData(canvas), "base64");
    return image;
}
function writeImage(canvas, filename) {
    var image = _getImageData(canvas);
    fs.writeFileSync(filename, image, { encoding: "base64" });
}
module.exports = {
    dom: dom,
    createCanvas: createCanvas,
    extractImage: extractImage,
    writeImage: writeImage,
};
