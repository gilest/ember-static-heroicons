import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var bellSlash = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\">\n  <path d=\"M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.57 16.476c-.223.082-.448.161-.674.238L7.319 4.137A6.75 6.75 0 0118.75 9v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206z\" />\n  <path fill-rule=\"evenodd\" d=\"M5.25 9c0-.184.007-.366.022-.546l10.384 10.384a3.751 3.751 0 01-7.396-1.119 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z\" clip-rule=\"evenodd\" />\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { bellSlash as default };
//# sourceMappingURL=bell-slash.js.map
