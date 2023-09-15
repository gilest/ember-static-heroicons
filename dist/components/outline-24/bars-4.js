import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var bars4 = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { bars4 as default };
//# sourceMappingURL=bars-4.js.map