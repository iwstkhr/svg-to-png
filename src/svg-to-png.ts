import { filter, fromEvent, map, Observable, take, throwIfEmpty } from 'rxjs';

/**
 * Convert SVG to PNG (Base64).
 *
 * @param svgElement
 * @param scale A scaling coefficient
 * @return Observable<string>
 */
export const svgToPng = (svgElement: SVGSVGElement, scale = 4): Observable<string> => {
  const canvas = createCanvas(svgElement, scale);
  const image = new Image();

  const source = fromEvent(image, 'load').pipe(
    take(1),
    map(() => canvas.getContext('2d', {})),
    throwIfEmpty(),
    filter(Boolean),
    map((context) => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL('image/png', 1);
    }),
  );

  image.src = svgToBase64(svgElement);
  return source;
}

const createCanvas = (svgElement: SVGSVGElement, scale = 4): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = svgElement.width.baseVal.value * scale;
  canvas.height = svgElement.height.baseVal.value * scale;
  return canvas;
};

const svgToBase64 = (svgElement: SVGSVGElement): string => {
  const svg = new XMLSerializer().serializeToString(svgElement);
  const base64 = window.btoa(unescape(encodeURIComponent(svg)));
  return `data:image/svg+xml;charset=utf-8;base64,${base64}`;
};
