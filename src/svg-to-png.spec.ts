import { svgToPng } from './svg-to-png';

describe('svg-to-png', () => {

  it('svgToPng', () => {
    const clock = jasmine.clock().install();
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '600');
    svg.setAttribute('height', '600');
    svg.innerHTML = `
      <g id="layer1">
      <g id="g3765" stroke="#2a4b8d" fill="none">
        <path id="rect2990" d="m70.064 422.35 374.27-374.26 107.58 107.58-374.26 374.27-129.56 21.97z" stroke-width="30"/>
        <path id="path3771" d="m70.569 417.81 110.61 110.61" stroke-width="25"/>
        <path id="path3777" d="m491.47 108.37-366.69 366.68" stroke-width="25"/>
        <path id="path3763" d="m54.222 507.26 40.975 39.546" stroke-width="25"/>
      </g>
    </g>`;
    svgToPng(svg).subscribe(value => expect(value.startsWith('data:image/png;base64,')).toBeTrue());
    clock.tick(1);
  });

});
