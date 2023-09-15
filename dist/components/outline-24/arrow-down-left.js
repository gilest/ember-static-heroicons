import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowDownLeft = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 4.5l-15 15m0 0h11.25m-11.25 0V8.25\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowDownLeft as default };
//# sourceMappingURL=arrow-down-left.js.map
