import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowSmallRight = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowSmallRight as default };
//# sourceMappingURL=arrow-small-right.js.map
