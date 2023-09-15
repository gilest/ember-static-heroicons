import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowUpLeft = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 19.5l-15-15m0 0v11.25m0-11.25h11.25\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowUpLeft as default };
//# sourceMappingURL=arrow-up-left.js.map
