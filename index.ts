import * as fs from "fs";
import { JSDOM } from "jsdom";
export const dom = new JSDOM(`<!DOCTYPE html></html>`);
const window = dom.window;
const document = dom.window.document;

export function createCanvas() {
  const canvas = document.createElement("canvas");
  dom.window.document.body.appendChild(canvas);

  return canvas;
}

export function _getImageData(canvas) {
  return canvas.toDataURL().split(";base64,").pop();
}

export function extractImage(canvas) {
  const image = Buffer.from(_getImageData(canvas), "base64");

  return image;
}

export function writeImage(canvas, filename) {
  const image = _getImageData(canvas);

  fs.writeFileSync(filename, image, { encoding: "base64" });
}
