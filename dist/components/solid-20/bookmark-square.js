import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var bookmarkSquare = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n  <path fill-rule=\"evenodd\" d=\"M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM6 13.25V3.5h8v9.75a.75.75 0 01-1.064.681L10 12.576l-2.936 1.355A.75.75 0 016 13.25z\" clip-rule=\"evenodd\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { bookmarkSquare as default };
//# sourceMappingURL=bookmark-square.js.map