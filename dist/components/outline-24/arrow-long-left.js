import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowLongLeft = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowLongLeft as default };
//# sourceMappingURL=arrow-long-left.js.map