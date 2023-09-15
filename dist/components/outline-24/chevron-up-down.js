import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var chevronUpDown = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { chevronUpDown as default };
//# sourceMappingURL=chevron-up-down.js.map
