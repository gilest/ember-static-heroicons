import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowLongUp = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowLongUp as default };
//# sourceMappingURL=arrow-long-up.js.map
