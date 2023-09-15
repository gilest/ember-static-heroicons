import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowSmallDown = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowSmallDown as default };
//# sourceMappingURL=arrow-small-down.js.map
