import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowUturnUp = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowUturnUp as default };
//# sourceMappingURL=arrow-uturn-up.js.map
