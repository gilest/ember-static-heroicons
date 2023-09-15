import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var codeBracket = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" aria-hidden=\"true\">\n  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { codeBracket as default };
//# sourceMappingURL=code-bracket.js.map
