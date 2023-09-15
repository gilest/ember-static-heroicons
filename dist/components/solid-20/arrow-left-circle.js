import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import templateOnly from '@ember/component/template-only';

var arrowLeftCircle = setComponentTemplate(precompileTemplate("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" aria-hidden=\"true\">\n  <g clip-path=\"url(#clip0_9_2121)\">\n    <path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 100-16 8 8 0 000 16zm3.25-7.25a.75.75 0 000-1.5H8.66l2.1-1.95a.75.75 0 10-1.02-1.1l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 001.02-1.1l-2.1-1.95h4.59z\" clip-rule=\"evenodd\" />\n  </g>\n  <defs>\n    {{!-- Tag doesn't compile properly \u2013 \"clipPath' is not defined\" --}}\n    {{!-- <clipPath id=\"clip0_9_2121\">\n      <path d=\"M0 0h20v20H0z\"/>\n    </clipPath> --}}\n  </defs>\n</svg>\n", {
  strictMode: true
}), templateOnly());

export { arrowLeftCircle as default };
//# sourceMappingURL=arrow-left-circle.js.map
