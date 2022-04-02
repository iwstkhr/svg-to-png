"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.svgToPng = void 0;
var rxjs_1 = require("rxjs");
/**
 * Convert SVG to PNG (Base64).
 *
 * @param svgElement
 * @param scale A scaling coefficient
 * @return Observable<string>
 */
var svgToPng = function (svgElement, scale) {
    if (scale === void 0) { scale = 4; }
    var canvas = createCanvas(svgElement, scale);
    var image = new Image();
    var source = (0, rxjs_1.fromEvent)(image, 'load').pipe((0, rxjs_1.take)(1), (0, rxjs_1.map)(function () { return canvas.getContext('2d', {}); }), (0, rxjs_1.throwIfEmpty)(), (0, rxjs_1.filter)(Boolean), (0, rxjs_1.map)(function (context) {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/png', 1);
    }));
    image.src = svgToBase64(svgElement);
    return source;
};
exports.svgToPng = svgToPng;
var createCanvas = function (svgElement, scale) {
    if (scale === void 0) { scale = 4; }
    var canvas = document.createElement('canvas');
    canvas.width = svgElement.width.baseVal.value * scale;
    canvas.height = svgElement.height.baseVal.value * scale;
    return canvas;
};
var svgToBase64 = function (svgElement) {
    var svg = new XMLSerializer().serializeToString(svgElement);
    var base64 = window.btoa(unescape(encodeURIComponent(svg)));
    return "data:image/svg+xml;charset=utf-8;base64,".concat(base64);
};
//# sourceMappingURL=svg-to-png.js.map