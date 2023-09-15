import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowLongDown = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\n  <path fill-rule=\"evenodd\" d=\"M12 2.25a.75.75 0 01.75.75v16.19l2.47-2.47a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 111.06-1.06l2.47 2.47V3a.75.75 0 01.75-.75z\" clip-rule=\"evenodd\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowLongDown as default };
//# sourceMappingURL=arrow-long-down.js.map
