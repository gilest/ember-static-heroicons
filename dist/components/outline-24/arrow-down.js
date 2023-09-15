import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowDown = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowDown as default };
//# sourceMappingURL=arrow-down.js.map
