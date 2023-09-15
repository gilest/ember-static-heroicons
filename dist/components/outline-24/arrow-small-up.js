import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowSmallUp = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowSmallUp as default };
//# sourceMappingURL=arrow-small-up.js.map
