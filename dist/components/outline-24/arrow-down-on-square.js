import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowDownOnSquare = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowDownOnSquare as default };
//# sourceMappingURL=arrow-down-on-square.js.map
