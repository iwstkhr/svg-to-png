import { Observable } from 'rxjs';
/**
 * Convert SVG to PNG (Base64).
 *
 * @param svgElement
 * @param scale A scaling coefficient
 * @return Observable<string>
 */
export declare const svgToPng: (svgElement: SVGSVGElement, scale?: number) => Observable<string>;
