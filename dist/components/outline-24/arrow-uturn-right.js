import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowUturnRight = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowUturnRight as default };
//# sourceMappingURL=arrow-uturn-right.js.map
