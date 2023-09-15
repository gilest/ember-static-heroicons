import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var chartPie = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z\" />\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { chartPie as default };
//# sourceMappingURL=chart-pie.js.map
