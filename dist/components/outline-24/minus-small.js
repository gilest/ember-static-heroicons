import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var minusSmall = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M18 12H6\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { minusSmall as default };
//# sourceMappingURL=minus-small.js.map
