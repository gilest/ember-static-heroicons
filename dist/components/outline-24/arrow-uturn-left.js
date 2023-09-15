import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowUturnLeft = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowUturnLeft as default };
//# sourceMappingURL=arrow-uturn-left.js.map
