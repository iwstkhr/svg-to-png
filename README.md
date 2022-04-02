# svg-to-png
A library to convert svg to png (base64)

## Install
```
npm install https://github.com/iwstkhr/svg-to-png.git
```

## Usage
### HTML
Copy `main.js` to your app js directory.
```
cp node_modules/@iwstkhr/svg-to-png/dist/main.js $YOUR_APP_JS_PATH
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<p>SVG</p>
<div style="border: 1px solid gray; width: fit-content">
  <svg id="svg" width="600" height="600">
    <g id="layer1">
      <g id="g3765" stroke="#2a4b8d" fill="none">
        <path id="rect2990" d="m70.064 422.35 374.27-374.26 107.58 107.58-374.26 374.27-129.56 21.97z" stroke-width="30"/>
        <path id="path3771" d="m70.569 417.81 110.61 110.61" stroke-width="25"/>
        <path id="path3777" d="m491.47 108.37-366.69 366.68" stroke-width="25"/>
        <path id="path3763" d="m54.222 507.26 40.975 39.546" stroke-width="25"/>
      </g>
    </g>
  </svg>
</div>

<p>PNG (Base64)</p>
<img id="png" width="600" height="600" style="border: 1px solid gray">

<p>Base64</p>
<textarea id="base64" cols="120" rows="50"></textarea>

<script src="main.js"></script>
<script>
  svgToPngLib.svgToPng(document.querySelector('#svg')).subscribe(function (value) {
    document.querySelector('#png').setAttribute('src', value);
    document.querySelector('#base64').innerHTML = value;
  });
</script>
</body>
</html>
```

### TypeScript
```typescript
import { svgToPng } from '@iwstkhr/svg-to-png';

const svg = document.querySelector('#svg') as SVGSVGElement;
svgToPng(svg).subscribe(value => console.info(value));
```

## License
MIT
