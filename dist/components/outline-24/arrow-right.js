import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowRight = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowRight as default };
//# sourceMappingURL=arrow-right.js.map
