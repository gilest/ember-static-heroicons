import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var minusSmall = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n  <path d=\"M6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { minusSmall as default };
//# sourceMappingURL=minus-small.js.map
