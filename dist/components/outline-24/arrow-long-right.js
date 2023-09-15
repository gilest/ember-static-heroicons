import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowLongRight = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowLongRight as default };
//# sourceMappingURL=arrow-long-right.js.map
