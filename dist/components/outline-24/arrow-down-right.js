import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowDownRight = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowDownRight as default };
//# sourceMappingURL=arrow-down-right.js.map
