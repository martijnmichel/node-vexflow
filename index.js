"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dom = void 0;
exports.createCanvas = createCanvas;
exports._getImageData = _getImageData;
exports.extractImage = extractImage;
exports.writeImage = writeImage;
var fs = require("fs");
var jsdom_1 = require("jsdom");
exports.dom = new jsdom_1.JSDOM("<!DOCTYPE html></html>");
var window = exports.dom.window;
var document = exports.dom.window.document;
function createCanvas() {
    var canvas = document.createElement("canvas");
    exports.dom.window.document.body.appendChild(canvas);
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
