(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sn-common-lib/styles/styles.scss":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./node_modules/sn-common-lib/styles/styles.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}\n.cdk-overlay-container{position:fixed;z-index:1000}\n.cdk-overlay-container:empty{display:none}\n.cdk-global-overlay-wrapper{display:-webkit-box;display:flex;position:absolute;z-index:1000}\n.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:-webkit-box;display:flex;max-width:100%;max-height:100%}\n.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;-webkit-transition:opacity .4s cubic-bezier(.25,.8,.25,1);transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}\n@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}\n.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}\n.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}\n.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:1px;min-height:1px}\n.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n@font-face {\n  font-family: 'SantanderHeadline';\n  src: url(\"/assets/fonts/santander/SantanderHeadlineW05-Rg.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderHeadlineW05-Rg.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-Rg.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-Rg.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-Rg.ttf\") format(\"truetype\");\n  font-weight: normal; }\n@font-face {\n  font-family: 'SantanderHeadline';\n  src: url(\"/assets/fonts/santander/SantanderHeadlineW05-Italic.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderHeadlineW05-Italic.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-Italic.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-Italic.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-Italic.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic; }\n@font-face {\n  font-family: 'SantanderHeadline';\n  src: url(\"/assets/fonts/santander/SantanderHeadlineW05-Bold.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderHeadlineW05-Bold.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-Bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-Bold.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-Bold.ttf\") format(\"truetype\");\n  font-weight: bold; }\n@font-face {\n  font-family: 'SantanderHeadline';\n  src: url(\"/assets/fonts/santander/SantanderHeadlineW05-BoldIt.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderHeadlineW05-BoldIt.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-BoldIt.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-BoldIt.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderHeadlineW05-BoldIt.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: italic; }\n@font-face {\n  font-family: 'SantanderText';\n  src: url(\"/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderTextW05-Light.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderTextW05-Light.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderTextW05-Light.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderTextW05-Light.ttf\") format(\"truetype\");\n  font-weight: lighter; }\n@font-face {\n  font-family: 'SantanderText';\n  src: url(\"/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderTextW05-LightIt.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderTextW05-LightIt.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderTextW05-LightIt.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderTextW05-LightIt.ttf\") format(\"truetype\");\n  font-weight: lighter;\n  font-style: italic; }\n@font-face {\n  font-family: 'SantanderText';\n  src: url(\"/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderTextW05-Regular.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderTextW05-Regular.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderTextW05-Regular.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderTextW05-Regular.ttf\") format(\"truetype\");\n  font-weight: normal; }\n@font-face {\n  font-family: 'SantanderText';\n  src: url(\"/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderTextW05-Italic.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderTextW05-Italic.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderTextW05-Italic.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderTextW05-Italic.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic; }\n@font-face {\n  font-family: 'SantanderText';\n  src: url(\"/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderTextW05-Bold.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderTextW05-Bold.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderTextW05-Bold.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderTextW05-Bold.ttf\") format(\"truetype\");\n  font-weight: bold; }\n@font-face {\n  font-family: 'SantanderText';\n  src: url(\"/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix\");\n  src: url(\"/assets/fonts/santander/SantanderTextW05-BoldItalic.eot?#iefix\") format(\"eot\"), url(\"/assets/fonts/santander/SantanderTextW05-BoldItalic.woff2\") format(\"woff2\"), url(\"/assets/fonts/santander/SantanderTextW05-BoldItalic.woff\") format(\"woff\"), url(\"/assets/fonts/santander/SantanderTextW05-BoldItalic.ttf\") format(\"truetype\");\n  font-style: italic;\n  font-weight: bold; }\n@font-face {\n  font-family: 'OpenSans';\n  src: url(\"/assets/fonts/open-sans/OpenSans-Bold.ttf\");\n  font-weight: bold; }\n@font-face {\n  font-family: 'OpenSans';\n  src: url(\"/assets/fonts/open-sans/OpenSans-BoldItalic.ttf\");\n  font-weight: bold;\n  font-style: italic; }\n@font-face {\n  font-family: 'OpenSans';\n  src: url(\"/assets/fonts/open-sans/OpenSans-ExtraBold.ttf\");\n  font-weight: bolder; }\n@font-face {\n  font-family: 'OpenSans';\n  src: url(\"/assets/fonts/open-sans/OpenSans-Italic.ttf\");\n  font-weight: italic; }\n@font-face {\n  font-family: 'OpenSans';\n  src: url(\"/assets/fonts/open-sans/OpenSans-Light.ttf\");\n  font-weight: lighter; }\n@font-face {\n  font-family: 'OpenSans';\n  src: url(\"/assets/fonts/open-sans/OpenSans-Regular.ttf\");\n  font-weight: normal; }\n@font-face {\n  font-family: 'OpenSans';\n  src: url(\"/assets/fonts/open-sans/OpenSans-SemiBold.ttf\");\n  font-weight: 600; }\n@font-face {\n  font-family: 'OpenSans';\n  src: url(\"/assets/fonts/open-sans/OpenSans-SemiBoldItalic.ttf\");\n  font-weight: 600;\n  font-style: italic; }\n/* \nOne of the key elements in our brand is the typeface we use to communicate. By using the correct typeface, we can tie all of our communications together and create visual continuity.\n\n Typeface\n    Our typeface is Santander Font, a sans serif font with a wide range of weights that will allow us to create interfaces with great legibility\n    and hierarchies data ink. This typeface has two variations:\n Santander Headline\n    Should only be used in our navigation bar, in the modal-view’s headlines and, to sum up, at every… headline.\n Santander Text\n    To be used in bodycopies, coachmarks, labels and everything not considered a headline. */\n.display_level_1 {\n  line-height: 1.2;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .display_level_1 {\n      font-size: 3.75rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .display_level_1 {\n      font-size: 3.75rem; } }\n@media only screen and (max-width: 375px) {\n    .display_level_1 {\n      font-size: 2.625rem; } }\n.display_level_2 {\n  line-height: 1.2;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .display_level_2 {\n      font-size: 3.375rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .display_level_2 {\n      font-size: 3.375rem; } }\n@media only screen and (max-width: 375px) {\n    .display_level_2 {\n      font-size: 2.25rem; } }\n.display_level_3 {\n  line-height: 1.2;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .display_level_3 {\n      font-size: 3rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .display_level_3 {\n      font-size: 3rem; } }\n@media only screen and (max-width: 375px) {\n    .display_level_3 {\n      font-size: 2rem; } }\n.heading_level_1,\nh1 {\n  line-height: 1.2;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .heading_level_1,\n    h1 {\n      font-size: 2.625rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .heading_level_1,\n    h1 {\n      font-size: 2.625rem; } }\n@media only screen and (max-width: 375px) {\n    .heading_level_1,\n    h1 {\n      font-size: 2rem; } }\n.heading_level_2,\nh2 {\n  line-height: 1.2;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .heading_level_2,\n    h2 {\n      font-size: 2.25rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .heading_level_2,\n    h2 {\n      font-size: 2.25rem; } }\n@media only screen and (max-width: 375px) {\n    .heading_level_2,\n    h2 {\n      font-size: 2rem; } }\n.heading_level_3,\nh3 {\n  line-height: 1.2;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .heading_level_3,\n    h3 {\n      font-size: 2rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .heading_level_3,\n    h3 {\n      font-size: 2rem; } }\n@media only screen and (max-width: 375px) {\n    .heading_level_3,\n    h3 {\n      font-size: 1.75rem; } }\n.heading_level_4,\nh4 {\n  line-height: 1.2;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .heading_level_4,\n    h4 {\n      font-size: 1.75rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .heading_level_4,\n    h4 {\n      font-size: 1.75rem; } }\n@media only screen and (max-width: 375px) {\n    .heading_level_4,\n    h4 {\n      font-size: 1.5rem; } }\n.heading_level_5,\nh5 {\n  line-height: 1.2;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .heading_level_5,\n    h5 {\n      font-size: 1.5rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .heading_level_5,\n    h5 {\n      font-size: 1.5rem; } }\n@media only screen and (max-width: 375px) {\n    .heading_level_5,\n    h5 {\n      font-size: 1.25rem; } }\n.heading_level_6,\nh6 {\n  line-height: 1.4;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .heading_level_6,\n    h6 {\n      font-size: 1.25rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .heading_level_6,\n    h6 {\n      font-size: 1.25rem; } }\n@media only screen and (max-width: 375px) {\n    .heading_level_6,\n    h6 {\n      font-size: 1.125rem; } }\n.body_text_large {\n  line-height: 1.5;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .body_text_large {\n      font-size: 1.125rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .body_text_large {\n      font-size: 1.125rem; } }\n@media only screen and (max-width: 375px) {\n    .body_text_large {\n      font-size: 1rem; } }\n.body_text_medium {\n  font-size: 1rem;\n  line-height: 1.5;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .body_text_medium {\n      font-size: 1rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .body_text_medium {\n      font-size: 1rem; } }\n@media only screen and (max-width: 375px) {\n    .body_text_medium {\n      font-size: 0.875rem; } }\n.body_text_small {\n  line-height: 1.5;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .body_text_small {\n      font-size: 0.875rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .body_text_small {\n      font-size: 0.875rem; } }\n@media only screen and (max-width: 375px) {\n    .body_text_small {\n      font-size: 0.875rem; } }\n.body_text_xsmall {\n  line-height: 1.5;\n  letter-spacing: 0; }\n@media only screen and (min-width: 768px) {\n    .body_text_xsmall {\n      font-size: 0.75rem; } }\n@media only screen and (min-width: 375px) and (max-width: 768px) {\n    .body_text_xsmall {\n      font-size: 0.75rem; } }\n@media only screen and (max-width: 375px) {\n    .body_text_xsmall {\n      font-size: 0.875rem; } }\n:root {\n  --body-bg: $color-primary-white;\n  --body-color: $color-secondary-gray; }\n/*\n    This function calculate the fontSize in px to em\n*/\n/*\n\tThis function calculate the em value by pixel\n\texample: 24px = 1.98em\n\n\tWhen I calculate 25px multiplied by 1.98em divided by 24px I will catch the value of 25px in em\n\tAfter this if I subtract the result of the first calculation by the 1.98em  I will receive the em per px\n\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none; }\n*::-webkit-scrollbar-track,\n  *::before::-webkit-scrollbar-track,\n  *::after::-webkit-scrollbar-track {\n    background-color: lightgray; }\n*::-webkit-scrollbar,\n  *::before::-webkit-scrollbar,\n  *::after::-webkit-scrollbar {\n    width: 6px;\n    background-color: lightgray; }\n*::-webkit-scrollbar-thumb,\n  *::before::-webkit-scrollbar-thumb,\n  *::after::-webkit-scrollbar-thumb {\n    background-color: gray; }\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(var(--color-secondary-gray, #444444), 0); }\narticle,\naside,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nnav,\nsection {\n  display: block; }\nbody {\n  margin: 0;\n  font-family: \"SantanderText\";\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--color-secondary-gray, #444444);\n  text-align: left;\n  background-color: var(--color-primary-white, #FFFFFF);\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none; }\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"SantanderHeadline\";\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\nbutton {\n  font-family: \"SantanderText\";\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: var(--color-secondary-gray, #444444);\n  background-color: var(--color-primary-white, #FFFFFF);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  border: none;\n  margin: 0;\n  text-decoration: none;\n  outline: none;\n  padding: 0%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.pac-container {\n  font-family: inherit !important; }\n.pac-container .pac-item .pac-item-query {\n    line-height: 1rem !important;\n    font-family: SantanderText !important;\n    font-weight: normal !important; }\n.pac-container .pac-item .pac-item-query .pac-matched {\n      font-family: SantanderText !important;\n      font-weight: bold !important;\n      font-size: 1em !important; }\n.pac-container .pac-item .pac-item-query + span {\n      font-family: SantanderText !important;\n      font-weight: lighter !important;\n      display: block !important;\n      font-size: 1em !important;\n      margin-left: 22px !important;\n      line-height: 1rem !important; }\n.pac-container::after {\n    display: none !important; }\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: \"SantanderHeadline\";\n  font-weight: 500;\n  line-height: 1.2; }\nh1, .h1 {\n  font-size: 40px; }\nh2, .h2 {\n  font-size: 32px; }\nh3, .h3 {\n  font-size: 28px; }\nh4, .h4 {\n  font-size: 24px; }\nh5, .h5 {\n  font-size: 20px; }\nh6, .h6 {\n  font-size: 16px; }\n.sn-modal {\n  background-color: var(--body-modal-bg, #00000052); }\n.sn-modal > {\n    width: 100%;\n    height: 100%;\n    max-height: 100%;\n    min-width: 100%;\n    overflow: hidden; }\n.sn-panel-action-sheet {\n  pointer-events: auto;\n  width: 100%;\n  position: absolute;\n  bottom: 0; }\n.Type-1-Style {\n  font-family: SantanderText;\n  font-size: 32px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--color-secondary-gray, #444444); }\n.Type-2_Bold-Style {\n  font-family: SantanderText;\n  font-size: 24px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--color-secondary-gray, #444444); }\n.Type-2_Regular-Style {\n  font-family: SantanderText;\n  font-size: 24px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--color-secondary-gray, #444444); }\n.Type-3_Bold-Style {\n  font-family: SantanderText;\n  font-size: 22px;\n  font-weight: bold;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--color-secondary-gray, #444444); }\n.Type-3_Regular-Style {\n  font-family: SantanderText;\n  font-size: 22px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--color-secondary-gray, #444444); }\n.Type-4_Regular-Style {\n  font-family: SantanderText;\n  font-size: 18px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--color-secondary-gray, #444444); }\n.Type-5_Regular-Style {\n  font-family: SantanderText;\n  font-size: 14px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--color-secondary-gray, #444444); }\n.Type-5_Light-Style {\n  font-family: SantanderText;\n  font-size: 14px;\n  font-weight: 300;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: var(--color-secondary-gray, #444444); }\n* {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9zbi1jb21tb24tbGliL3N0eWxlcy9zdHlsZXMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS1wcmVidWlsdC5jc3MiLCIvVXNlcnMvaXZhbi5kaWV6LnNhbmNoZXovU2FudGFuZGVyL1N0YXJ0ZXJBcHAtQW5ndWxhci9ub2RlX21vZHVsZXMvc24tY29tbW9uLWxpYi9zdHlsZXMvc2V0dGluZ3MvX3NhbnRhbmRlcmhlYWRsaW5lLnNjc3MiLCIvVXNlcnMvaXZhbi5kaWV6LnNhbmNoZXovU2FudGFuZGVyL1N0YXJ0ZXJBcHAtQW5ndWxhci9ub2RlX21vZHVsZXMvc24tY29tbW9uLWxpYi9zdHlsZXMvc2V0dGluZ3MvX3NhbnRhbmRlcnRleHQuc2NzcyIsIi9Vc2Vycy9pdmFuLmRpZXouc2FuY2hlei9TYW50YW5kZXIvU3RhcnRlckFwcC1Bbmd1bGFyL25vZGVfbW9kdWxlcy9zbi1jb21tb24tbGliL3N0eWxlcy9zZXR0aW5ncy9fb3BlbnNhbnMuc2NzcyIsIi9Vc2Vycy9pdmFuLmRpZXouc2FuY2hlei9TYW50YW5kZXIvU3RhcnRlckFwcC1Bbmd1bGFyL25vZGVfbW9kdWxlcy9zbi1jb21tb24tbGliL3N0eWxlcy9zZXR0aW5ncy9fdHlwb2dyYXBoeS5zY3NzIiwiL1VzZXJzL2l2YW4uZGllei5zYW5jaGV6L1NhbnRhbmRlci9TdGFydGVyQXBwLUFuZ3VsYXIvbm9kZV9tb2R1bGVzL3NuLWNvbW1vbi1saWIvc3R5bGVzL3NldHRpbmdzL192YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9pdmFuLmRpZXouc2FuY2hlei9TYW50YW5kZXIvU3RhcnRlckFwcC1Bbmd1bGFyL25vZGVfbW9kdWxlcy9zbi1jb21tb24tbGliL3N0eWxlcy9zZXR0aW5ncy9fZnVuY3Rpb25zLnNjc3MiLCIvVXNlcnMvaXZhbi5kaWV6LnNhbmNoZXovU2FudGFuZGVyL1N0YXJ0ZXJBcHAtQW5ndWxhci9ub2RlX21vZHVsZXMvc24tY29tbW9uLWxpYi9zdHlsZXMvZ2VuZXJhbC9fcmVib290LnNjc3MiLCIvVXNlcnMvaXZhbi5kaWV6LnNhbmNoZXovU2FudGFuZGVyL1N0YXJ0ZXJBcHAtQW5ndWxhci9ub2RlX21vZHVsZXMvc24tY29tbW9uLWxpYi9zdHlsZXMvc2V0dGluZ3MvX2NvbG9ycy5zY3NzIiwiL1VzZXJzL2l2YW4uZGllei5zYW5jaGV6L1NhbnRhbmRlci9TdGFydGVyQXBwLUFuZ3VsYXIvbm9kZV9tb2R1bGVzL3NuLWNvbW1vbi1saWIvc3R5bGVzL2Jhc2UvX3R5cGUuc2NzcyIsIi9Vc2Vycy9pdmFuLmRpZXouc2FuY2hlei9TYW50YW5kZXIvU3RhcnRlckFwcC1Bbmd1bGFyL25vZGVfbW9kdWxlcy9zbi1jb21tb24tbGliL3N0eWxlcy9jb21wb25lbnRzL19tb2RhbC5zY3NzIiwiL1VzZXJzL2l2YW4uZGllei5zYW5jaGV6L1NhbnRhbmRlci9TdGFydGVyQXBwLUFuZ3VsYXIvbm9kZV9tb2R1bGVzL3NuLWNvbW1vbi1saWIvc3R5bGVzL2NvbXBvbmVudHMvX2FjdGlvbi1zaGVldC5zY3NzIiwiL1VzZXJzL2l2YW4uZGllei5zYW5jaGV6L1NhbnRhbmRlci9TdGFydGVyQXBwLUFuZ3VsYXIvbm9kZV9tb2R1bGVzL3NuLWNvbW1vbi1saWIvc3R5bGVzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtREFBbUQsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtBQUFDLHVCQUF1QixjQUFjLENBQUMsWUFBWTtBQUFDLDZCQUE2QixZQUFZO0FBQUMsNEJBQTRCLG1CQUFZLENBQVosWUFBWSxDQUFDLGlCQUFpQixDQUFDLFlBQVk7QUFBQyxrQkFBa0IsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLG1CQUFZLENBQVosWUFBWSxDQUFDLGNBQWMsQ0FBQyxlQUFlO0FBQUMsc0JBQXNCLGlCQUFpQixDQUFDLEtBQUss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QW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QiwyQ0o3RHdELEVBQUE7QUlnRTFEO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDJDSnhFd0QsRUFBQTtBSTJFMUQ7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMkNKbkZ3RCxFQUFBO0FJdUYxRDtFQUNFLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQixFQUFBIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9zbi1jb21tb24tbGliL3N0eWxlcy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBpbXBvcnQgdXJsKH5AYW5ndWxhci9jZGsvb3ZlcmxheS1wcmVidWlsdC5jc3MpO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FudGFuZGVySGVhZGxpbmUnO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LVJnLmVvdD8jaWVmaXhcIik7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtUmcuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksIHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LVJnLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1SZy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LVJnLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW50YW5kZXJIZWFkbGluZSc7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtSXRhbGljLmVvdD8jaWVmaXhcIik7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtSXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1JdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW50YW5kZXJIZWFkbGluZSc7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtQm9sZC5lb3Q/I2llZml4XCIpO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUJvbGQuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksIHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUJvbGQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FudGFuZGVySGVhZGxpbmUnO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUJvbGRJdC5lb3Q/I2llZml4XCIpO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUJvbGRJdC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtQm9sZEl0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1Cb2xkSXQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1Cb2xkSXQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRhbmRlclRleHQnO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtTGlnaHQuZW90PyNpZWZpeFwiKTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUxpZ2h0LmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW90XCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUxpZ2h0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUxpZ2h0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1MaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRhbmRlclRleHQnO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtTGlnaHRJdC5lb3Q/I2llZml4XCIpO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtTGlnaHRJdC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1MaWdodEl0LndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUxpZ2h0SXQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUxpZ2h0SXQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRhbmRlclRleHQnO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtUmVndWxhci5lb3Q/I2llZml4XCIpO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtUmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1SZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRhbmRlclRleHQnO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtSXRhbGljLmVvdD8jaWVmaXhcIik7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1JdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksIHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtSXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRhbmRlclRleHQnO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtQm9sZC5lb3Q/I2llZml4XCIpO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtQm9sZC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVvdFwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1Cb2xkLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUJvbGQud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUJvbGQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW50YW5kZXJUZXh0JztcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUJvbGRJdGFsaWMuZW90PyNpZWZpeFwiKTtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUJvbGRJdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlb3RcIiksIHVybChcIi9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtQm9sZEl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1Cb2xkSXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1Cb2xkSXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtQm9sZC50dGZcIik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ09wZW5TYW5zJztcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL29wZW4tc2Fucy9PcGVuU2Fucy1Cb2xkSXRhbGljLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtRXh0cmFCb2xkLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtSXRhbGljLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IGl0YWxpYzsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtTGlnaHQudHRmXCIpO1xuICBmb250LXdlaWdodDogbGlnaHRlcjsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtUmVndWxhci50dGZcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMnO1xuICBzcmM6IHVybChcIi9hc3NldHMvZm9udHMvb3Blbi1zYW5zL09wZW5TYW5zLVNlbWlCb2xkLnR0ZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtU2VtaUJvbGRJdGFsaWMudHRmXCIpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuLyogXG5PbmUgb2YgdGhlIGtleSBlbGVtZW50cyBpbiBvdXIgYnJhbmQgaXMgdGhlIHR5cGVmYWNlIHdlIHVzZSB0byBjb21tdW5pY2F0ZS4gQnkgdXNpbmcgdGhlIGNvcnJlY3QgdHlwZWZhY2UsIHdlIGNhbiB0aWUgYWxsIG9mIG91ciBjb21tdW5pY2F0aW9ucyB0b2dldGhlciBhbmQgY3JlYXRlIHZpc3VhbCBjb250aW51aXR5LlxuXG4gVHlwZWZhY2VcbiAgICBPdXIgdHlwZWZhY2UgaXMgU2FudGFuZGVyIEZvbnQsIGEgc2FucyBzZXJpZiBmb250IHdpdGggYSB3aWRlIHJhbmdlIG9mIHdlaWdodHMgdGhhdCB3aWxsIGFsbG93IHVzIHRvIGNyZWF0ZSBpbnRlcmZhY2VzIHdpdGggZ3JlYXQgbGVnaWJpbGl0eVxuICAgIGFuZCBoaWVyYXJjaGllcyBkYXRhIGluay4gVGhpcyB0eXBlZmFjZSBoYXMgdHdvIHZhcmlhdGlvbnM6XG4gU2FudGFuZGVyIEhlYWRsaW5lXG4gICAgU2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBvdXIgbmF2aWdhdGlvbiBiYXIsIGluIHRoZSBtb2RhbC12aWV34oCZcyBoZWFkbGluZXMgYW5kLCB0byBzdW0gdXAsIGF0IGV2ZXJ54oCmIGhlYWRsaW5lLlxuIFNhbnRhbmRlciBUZXh0XG4gICAgVG8gYmUgdXNlZCBpbiBib2R5Y29waWVzLCBjb2FjaG1hcmtzLCBsYWJlbHMgYW5kIGV2ZXJ5dGhpbmcgbm90IGNvbnNpZGVyZWQgYSBoZWFkbGluZS4gKi9cbi5kaXNwbGF5X2xldmVsXzEge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBsZXR0ZXItc3BhY2luZzogMDsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmRpc3BsYXlfbGV2ZWxfMSB7XG4gICAgICBmb250LXNpemU6IDMuNzVyZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuZGlzcGxheV9sZXZlbF8xIHtcbiAgICAgIGZvbnQtc2l6ZTogMy43NXJlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAuZGlzcGxheV9sZXZlbF8xIHtcbiAgICAgIGZvbnQtc2l6ZTogMi42MjVyZW07IH0gfVxuXG4uZGlzcGxheV9sZXZlbF8yIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5kaXNwbGF5X2xldmVsXzIge1xuICAgICAgZm9udC1zaXplOiAzLjM3NXJlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5kaXNwbGF5X2xldmVsXzIge1xuICAgICAgZm9udC1zaXplOiAzLjM3NXJlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAuZGlzcGxheV9sZXZlbF8yIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTsgfSB9XG5cbi5kaXNwbGF5X2xldmVsXzMge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBsZXR0ZXItc3BhY2luZzogMDsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmRpc3BsYXlfbGV2ZWxfMyB7XG4gICAgICBmb250LXNpemU6IDNyZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuZGlzcGxheV9sZXZlbF8zIHtcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAuZGlzcGxheV9sZXZlbF8zIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTsgfSB9XG5cbi5oZWFkaW5nX2xldmVsXzEsXG5oMSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAwOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuaGVhZGluZ19sZXZlbF8xLFxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMi42MjVyZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuaGVhZGluZ19sZXZlbF8xLFxuICAgIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMi42MjVyZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgLmhlYWRpbmdfbGV2ZWxfMSxcbiAgICBoMSB7XG4gICAgICBmb250LXNpemU6IDJyZW07IH0gfVxuXG4uaGVhZGluZ19sZXZlbF8yLFxuaDIge1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBsZXR0ZXItc3BhY2luZzogMDsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmhlYWRpbmdfbGV2ZWxfMixcbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDIuMjVyZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuaGVhZGluZ19sZXZlbF8yLFxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAuaGVhZGluZ19sZXZlbF8yLFxuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTsgfSB9XG5cbi5oZWFkaW5nX2xldmVsXzMsXG5oMyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAwOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuaGVhZGluZ19sZXZlbF8zLFxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5oZWFkaW5nX2xldmVsXzMsXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAycmVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgIC5oZWFkaW5nX2xldmVsXzMsXG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjc1cmVtOyB9IH1cblxuLmhlYWRpbmdfbGV2ZWxfNCxcbmg0IHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5oZWFkaW5nX2xldmVsXzQsXG4gICAgaDQge1xuICAgICAgZm9udC1zaXplOiAxLjc1cmVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmhlYWRpbmdfbGV2ZWxfNCxcbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IDEuNzVyZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgLmhlYWRpbmdfbGV2ZWxfNCxcbiAgICBoNCB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTsgfSB9XG5cbi5oZWFkaW5nX2xldmVsXzUsXG5oNSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAwOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuaGVhZGluZ19sZXZlbF81LFxuICAgIGg1IHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmhlYWRpbmdfbGV2ZWxfNSxcbiAgICBoNSB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAuaGVhZGluZ19sZXZlbF81LFxuICAgIGg1IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfSB9XG5cbi5oZWFkaW5nX2xldmVsXzYsXG5oNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiAwOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuaGVhZGluZ19sZXZlbF82LFxuICAgIGg2IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5oZWFkaW5nX2xldmVsXzYsXG4gICAgaDYge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgIC5oZWFkaW5nX2xldmVsXzYsXG4gICAgaDYge1xuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTsgfSB9XG5cbi5ib2R5X3RleHRfbGFyZ2Uge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogMDsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmJvZHlfdGV4dF9sYXJnZSB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmJvZHlfdGV4dF9sYXJnZSB7XG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgIC5ib2R5X3RleHRfbGFyZ2Uge1xuICAgICAgZm9udC1zaXplOiAxcmVtOyB9IH1cblxuLmJvZHlfdGV4dF9tZWRpdW0ge1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAwOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuYm9keV90ZXh0X21lZGl1bSB7XG4gICAgICBmb250LXNpemU6IDFyZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuYm9keV90ZXh0X21lZGl1bSB7XG4gICAgICBmb250LXNpemU6IDFyZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgLmJvZHlfdGV4dF9tZWRpdW0ge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTsgfSB9XG5cbi5ib2R5X3RleHRfc21hbGwge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogMDsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmJvZHlfdGV4dF9zbWFsbCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmJvZHlfdGV4dF9zbWFsbCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgIC5ib2R5X3RleHRfc21hbGwge1xuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTsgfSB9XG5cbi5ib2R5X3RleHRfeHNtYWxsIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5ib2R5X3RleHRfeHNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5ib2R5X3RleHRfeHNtYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgICAuYm9keV90ZXh0X3hzbWFsbCB7XG4gICAgICBmb250LXNpemU6IDAuODc1cmVtOyB9IH1cblxuOnJvb3Qge1xuICAtLWJvZHktYmc6ICRjb2xvci1wcmltYXJ5LXdoaXRlO1xuICAtLWJvZHktY29sb3I6ICRjb2xvci1zZWNvbmRhcnktZ3JheTsgfVxuXG4vKlxuICAgIFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlIHRoZSBmb250U2l6ZSBpbiBweCB0byBlbVxuKi9cbi8qXG5cdFRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlIHRoZSBlbSB2YWx1ZSBieSBwaXhlbFxuXHRleGFtcGxlOiAyNHB4ID0gMS45OGVtXG5cblx0V2hlbiBJIGNhbGN1bGF0ZSAyNXB4IG11bHRpcGxpZWQgYnkgMS45OGVtIGRpdmlkZWQgYnkgMjRweCBJIHdpbGwgY2F0Y2ggdGhlIHZhbHVlIG9mIDI1cHggaW4gZW1cblx0QWZ0ZXIgdGhpcyBpZiBJIHN1YnRyYWN0IHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IGNhbGN1bGF0aW9uIGJ5IHRoZSAxLjk4ZW0gIEkgd2lsbCByZWNlaXZlIHRoZSBlbSBwZXIgcHhcblxuKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgfVxuICAqOjotd2Via2l0LXNjcm9sbGJhci10cmFjayxcbiAgKjo6YmVmb3JlOjotd2Via2l0LXNjcm9sbGJhci10cmFjayxcbiAgKjo6YWZ0ZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7IH1cbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICo6OmJlZm9yZTo6LXdlYmtpdC1zY3JvbGxiYXIsXG4gICo6OmFmdGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7IH1cbiAgKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4gICo6OmJlZm9yZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXG4gICo6OmFmdGVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTsgfVxuXG5odG1sIHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1zZWNvbmRhcnktZ3JheSwgIzQ0NDQ0NCksIDApOyB9XG5cbmFydGljbGUsXG5hc2lkZSxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tYWluLFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnRhbmRlclRleHRcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWdyYXksICM0NDQ0NDQpO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlLCAjRkZGRkZGKTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7IH1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC1mYW1pbHk6IFwiU2FudGFuZGVySGVhZGxpbmVcIjtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XG5cbmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlNhbnRhbmRlclRleHRcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWdyYXksICM0NDQ0NDQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlLCAjRkZGRkZGKTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCU7XG4gIHVzZXItc2VsZWN0OiBub25lOyB9XG5cbi5wYWMtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDsgfVxuICAucGFjLWNvbnRhaW5lciAucGFjLWl0ZW0gLnBhYy1pdGVtLXF1ZXJ5IHtcbiAgICBsaW5lLWhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgIGZvbnQtZmFtaWx5OiBTYW50YW5kZXJUZXh0ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50OyB9XG4gICAgLnBhYy1jb250YWluZXIgLnBhYy1pdGVtIC5wYWMtaXRlbS1xdWVyeSAucGFjLW1hdGNoZWQge1xuICAgICAgZm9udC1mYW1pbHk6IFNhbnRhbmRlclRleHQgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50OyB9XG4gICAgLnBhYy1jb250YWluZXIgLnBhYy1pdGVtIC5wYWMtaXRlbS1xdWVyeSArIHNwYW4ge1xuICAgICAgZm9udC1mYW1pbHk6IFNhbnRhbmRlclRleHQgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICBsaW5lLWhlaWdodDogMXJlbSAhaW1wb3J0YW50OyB9XG4gIC5wYWMtY29udGFpbmVyOjphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICBmb250LWZhbWlseTogXCJTYW50YW5kZXJIZWFkbGluZVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yOyB9XG5cbmgxLCAuaDEge1xuICBmb250LXNpemU6IDQwcHg7IH1cblxuaDIsIC5oMiB7XG4gIGZvbnQtc2l6ZTogMzJweDsgfVxuXG5oMywgLmgzIHtcbiAgZm9udC1zaXplOiAyOHB4OyB9XG5cbmg0LCAuaDQge1xuICBmb250LXNpemU6IDI0cHg7IH1cblxuaDUsIC5oNSB7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG5oNiwgLmg2IHtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5zbi1tb2RhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktbW9kYWwtYmcsICMwMDAwMDA1Mik7IH1cbiAgLnNuLW1vZGFsID4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5zbi1wYW5lbC1hY3Rpb24tc2hlZXQge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwOyB9XG5cbi5UeXBlLTEtU3R5bGUge1xuICBmb250LWZhbWlseTogU2FudGFuZGVyVGV4dDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1ncmF5LCAjNDQ0NDQ0KTsgfVxuXG4uVHlwZS0yX0JvbGQtU3R5bGUge1xuICBmb250LWZhbWlseTogU2FudGFuZGVyVGV4dDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1ncmF5LCAjNDQ0NDQ0KTsgfVxuXG4uVHlwZS0yX1JlZ3VsYXItU3R5bGUge1xuICBmb250LWZhbWlseTogU2FudGFuZGVyVGV4dDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWdyYXksICM0NDQ0NDQpOyB9XG5cbi5UeXBlLTNfQm9sZC1TdHlsZSB7XG4gIGZvbnQtZmFtaWx5OiBTYW50YW5kZXJUZXh0O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWdyYXksICM0NDQ0NDQpOyB9XG5cbi5UeXBlLTNfUmVndWxhci1TdHlsZSB7XG4gIGZvbnQtZmFtaWx5OiBTYW50YW5kZXJUZXh0O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktZ3JheSwgIzQ0NDQ0NCk7IH1cblxuLlR5cGUtNF9SZWd1bGFyLVN0eWxlIHtcbiAgZm9udC1mYW1pbHk6IFNhbnRhbmRlclRleHQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1ncmF5LCAjNDQ0NDQ0KTsgfVxuXG4uVHlwZS01X1JlZ3VsYXItU3R5bGUge1xuICBmb250LWZhbWlseTogU2FudGFuZGVyVGV4dDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWdyYXksICM0NDQ0NDQpOyB9XG5cbi5UeXBlLTVfTGlnaHQtU3R5bGUge1xuICBmb250LWZhbWlseTogU2FudGFuZGVyVGV4dDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWdyYXksICM0NDQ0NDQpOyB9XG5cbioge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lOyB9XG4iLCIuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIsLmNkay1vdmVybGF5LWNvbnRhaW5lcntwb2ludGVyLWV2ZW50czpub25lO3RvcDowO2xlZnQ6MDtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlfS5jZGstb3ZlcmxheS1jb250YWluZXJ7cG9zaXRpb246Zml4ZWQ7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHl7ZGlzcGxheTpub25lfS5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcntkaXNwbGF5OmZsZXg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwfS5jZGstb3ZlcmxheS1wYW5le3Bvc2l0aW9uOmFic29sdXRlO3BvaW50ZXItZXZlbnRzOmF1dG87Ym94LXNpemluZzpib3JkZXItYm94O3otaW5kZXg6MTAwMDtkaXNwbGF5OmZsZXg7bWF4LXdpZHRoOjEwMCU7bWF4LWhlaWdodDoxMDAlfS5jZGstb3ZlcmxheS1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtib3R0b206MDtsZWZ0OjA7cmlnaHQ6MDt6LWluZGV4OjEwMDA7cG9pbnRlci1ldmVudHM6YXV0bzstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtvcGFjaXR5OjB9LmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmd7b3BhY2l0eToxfUBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5ne29wYWNpdHk6LjZ9fS5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9we2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMzIpfS5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZ3tvcGFjaXR5OjB9LmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3h7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47bWluLXdpZHRoOjFweDttaW4taGVpZ2h0OjFweH0uY2RrLWdsb2JhbC1zY3JvbGxibG9ja3twb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDAlO292ZXJmbG93LXk6c2Nyb2xsfSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRhbmRlckhlYWRsaW5lJztcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LVJnLmVvdD8jaWVmaXgnKTtcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LVJnLmVvdD8jaWVmaXgnKWZvcm1hdCgnZW90JyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtUmcud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtUmcud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LVJnLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FudGFuZGVySGVhZGxpbmUnO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtSXRhbGljLmVvdD8jaWVmaXgnKTtcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUl0YWxpYy5lb3Q/I2llZml4JykgZm9ybWF0KCdlb3QnKSwgdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtSXRhbGljLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRhbmRlckhlYWRsaW5lJztcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUJvbGQuZW90PyNpZWZpeCcpO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtQm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlb3QnKSwgdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUJvbGQud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FudGFuZGVySGVhZGxpbmUnO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtQm9sZEl0LmVvdD8jaWVmaXgnKTtcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlckhlYWRsaW5lVzA1LUJvbGRJdC5lb3Q/I2llZml4JykgZm9ybWF0KCdlb3QnKSwgdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1Cb2xkSXQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVySGVhZGxpbmVXMDUtQm9sZEl0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJIZWFkbGluZVcwNS1Cb2xkSXQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufSIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRhbmRlclRleHQnO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1MaWdodC5lb3Q/I2llZml4Jyk7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUxpZ2h0LmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VvdCcpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtTGlnaHQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1MaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW50YW5kZXJUZXh0JztcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtTGlnaHRJdC5lb3Q/I2llZml4Jyk7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUxpZ2h0SXQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW90JyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1MaWdodEl0LndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtTGlnaHRJdC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1MaWdodEl0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FudGFuZGVyVGV4dCc7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LVJlZ3VsYXIuZW90PyNpZWZpeCcpO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1SZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VvdCcpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1NhbnRhbmRlclRleHQnO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1JdGFsaWMuZW90PyNpZWZpeCcpO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1JdGFsaWMuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW90JyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1JdGFsaWMud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1JdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdTYW50YW5kZXJUZXh0JztcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtQm9sZC5lb3Q/I2llZml4Jyk7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW90JyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1Cb2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtQm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnU2FudGFuZGVyVGV4dCc7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUJvbGRJdGFsaWMuZW90PyNpZWZpeCcpO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9zYW50YW5kZXIvU2FudGFuZGVyVGV4dFcwNS1Cb2xkSXRhbGljLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VvdCcpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtQm9sZEl0YWxpYy53b2ZmMicpIGZvcm1hdCgnd29mZjInKSwgdXJsKCcvYXNzZXRzL2ZvbnRzL3NhbnRhbmRlci9TYW50YW5kZXJUZXh0VzA1LUJvbGRJdGFsaWMud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJy9hc3NldHMvZm9udHMvc2FudGFuZGVyL1NhbnRhbmRlclRleHRXMDUtQm9sZEl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59IiwiXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL29wZW4tc2Fucy9PcGVuU2Fucy1Cb2xkLnR0ZicpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMnO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtQm9sZEl0YWxpYy50dGYnKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMnO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtRXh0cmFCb2xkLnR0ZicpO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL29wZW4tc2Fucy9PcGVuU2Fucy1JdGFsaWMudHRmJyk7XG4gIGZvbnQtd2VpZ2h0OiBpdGFsaWM7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ09wZW5TYW5zJztcbiAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvb3Blbi1zYW5zL09wZW5TYW5zLUxpZ2h0LnR0ZicpO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMnO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtUmVndWxhci50dGYnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdPcGVuU2Fucyc7XG4gIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL29wZW4tc2Fucy9PcGVuU2Fucy1TZW1pQm9sZC50dGYnKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnT3BlblNhbnMnO1xuICBzcmM6IHVybCgnL2Fzc2V0cy9mb250cy9vcGVuLXNhbnMvT3BlblNhbnMtU2VtaUJvbGRJdGFsaWMudHRmJyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiIsIi8vIFNwYWNpbmdcbi8vXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXG4vLyBZb3UgY2FuIGFkZCBtb3JlIGVudHJpZXMgdG8gdGhlICRzcGFjZXJzIG1hcCwgc2hvdWxkIHlvdSBuZWVkIG1vcmUgdmFyaWF0aW9uLlxuXG4kc3BhY2VyOiAxcmVtICFkZWZhdWx0O1xuJHNwYWNlcnM6ICgpICFkZWZhdWx0O1xuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcblxuLyogXG5PbmUgb2YgdGhlIGtleSBlbGVtZW50cyBpbiBvdXIgYnJhbmQgaXMgdGhlIHR5cGVmYWNlIHdlIHVzZSB0byBjb21tdW5pY2F0ZS4gQnkgdXNpbmcgdGhlIGNvcnJlY3QgdHlwZWZhY2UsIHdlIGNhbiB0aWUgYWxsIG9mIG91ciBjb21tdW5pY2F0aW9ucyB0b2dldGhlciBhbmQgY3JlYXRlIHZpc3VhbCBjb250aW51aXR5LlxuXG4gVHlwZWZhY2VcbiAgICBPdXIgdHlwZWZhY2UgaXMgU2FudGFuZGVyIEZvbnQsIGEgc2FucyBzZXJpZiBmb250IHdpdGggYSB3aWRlIHJhbmdlIG9mIHdlaWdodHMgdGhhdCB3aWxsIGFsbG93IHVzIHRvIGNyZWF0ZSBpbnRlcmZhY2VzIHdpdGggZ3JlYXQgbGVnaWJpbGl0eVxuICAgIGFuZCBoaWVyYXJjaGllcyBkYXRhIGluay4gVGhpcyB0eXBlZmFjZSBoYXMgdHdvIHZhcmlhdGlvbnM6XG4gU2FudGFuZGVyIEhlYWRsaW5lXG4gICAgU2hvdWxkIG9ubHkgYmUgdXNlZCBpbiBvdXIgbmF2aWdhdGlvbiBiYXIsIGluIHRoZSBtb2RhbC12aWV34oCZcyBoZWFkbGluZXMgYW5kLCB0byBzdW0gdXAsIGF0IGV2ZXJ54oCmIGhlYWRsaW5lLlxuIFNhbnRhbmRlciBUZXh0XG4gICAgVG8gYmUgdXNlZCBpbiBib2R5Y29waWVzLCBjb2FjaG1hcmtzLCBsYWJlbHMgYW5kIGV2ZXJ5dGhpbmcgbm90IGNvbnNpZGVyZWQgYSBoZWFkbGluZS4gKi9cblxuXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBTRk1vbm8tUmVndWxhcixcbk1lbmxvLFxuTW9uYWNvLFxuQ29uc29sYXMsXG4nTGliZXJhdGlvbiBNb25vJyxcbidDb3VyaWVyIE5ldycsXG5tb25vc3BhY2UgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktYmFzZTogJ1NhbnRhbmRlclRleHQnICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1iYXNlOiAxNnB4ICFkZWZhdWx0O1xuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNSAhZGVmYXVsdDtcbiRmb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIC44NzUgIWRlZmF1bHQ7XG5cbiRmb250LXdlaWdodC1saWdodGVyOiBsaWdodGVyICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDAgIWRlZmF1bHQ7XG4kZm9udC13ZWlnaHQtYm9sZDogNzAwICFkZWZhdWx0O1xuJGZvbnQtd2VpZ2h0LWJvbGRlcjogYm9sZGVyICFkZWZhdWx0O1xuXG4kZm9udC13ZWlnaHQtYmFzZTogJGZvbnQtd2VpZ2h0LW5vcm1hbCAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjUgIWRlZmF1bHQ7XG5cblxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMi41ICFkZWZhdWx0O1xuJGgyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMiAhZGVmYXVsdDtcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzUgIWRlZmF1bHQ7XG4kaDQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjUgIWRlZmF1bHQ7XG4kaDUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1ICFkZWZhdWx0O1xuJGg2LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICFkZWZhdWx0O1xuXG4kaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTogJHNwYWNlciAvIDIgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6ICdTYW50YW5kZXJIZWFkbGluZScgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDUwMCAhZGVmYXVsdDtcbiRoZWFkaW5ncy1saW5lLWhlaWdodDogMS4yICFkZWZhdWx0O1xuJGhlYWRpbmdzLWNvbG9yOiBudWxsICFkZWZhdWx0O1xuXG4kZGlzcGxheS1saW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0ICFkZWZhdWx0O1xuXG5cbiRzbWFsbC1mb250LXNpemU6IDgwJSAhZGVmYXVsdDtcblxuJHRleHQtbXV0ZWQ6ICRjb2xvci1zZWNvbmRhcnktbWVkaXVtZ3JheSAhZGVmYXVsdDtcblxuXG5cblxuXG5AbWl4aW4gZm9udFNpemVCcmVha3BvaW50KCRzbWFsbCwgJG1lZGl1bSwgJGxhcmdlKSB7XG5cbiAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogJGxhcmdlO1xuICAgfVxuXG4gICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogJG1lZGl1bTtcbiAgIH1cblxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgZm9udC1zaXplOiAkc21hbGw7XG4gICB9XG5cbn1cblxuLmRpc3BsYXlfbGV2ZWxfMSB7XG4gICBAaW5jbHVkZSBmb250U2l6ZUJyZWFrcG9pbnQoMi42MjVyZW0sIDMuNzVyZW0gLCAzLjc1cmVtKTtcbiAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuXG4uZGlzcGxheV9sZXZlbF8yIHtcbiAgIEBpbmNsdWRlIGZvbnRTaXplQnJlYWtwb2ludCgyLjI1cmVtLCAzLjM3NXJlbSwgMy4zNzVyZW0pO1xuICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uZGlzcGxheV9sZXZlbF8zIHtcbiAgIEBpbmNsdWRlIGZvbnRTaXplQnJlYWtwb2ludCgycmVtLCAzcmVtLCAzcmVtKTtcbiAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmhlYWRpbmdfbGV2ZWxfMSxcbmgxIHtcbiAgIEBpbmNsdWRlIGZvbnRTaXplQnJlYWtwb2ludCgycmVtLCAyLjYyNXJlbSwgMi42MjVyZW0pO1xuICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uaGVhZGluZ19sZXZlbF8yLFxuaDIge1xuICAgQGluY2x1ZGUgZm9udFNpemVCcmVha3BvaW50KDJyZW0sIDIuMjVyZW0sIDIuMjVyZW0pO1xuICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uaGVhZGluZ19sZXZlbF8zLFxuaDMge1xuICAgQGluY2x1ZGUgZm9udFNpemVCcmVha3BvaW50KDEuNzVyZW0sIDJyZW0sIDJyZW0pO1xuICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uaGVhZGluZ19sZXZlbF80LFxuaDQge1xuICAgQGluY2x1ZGUgZm9udFNpemVCcmVha3BvaW50KDEuNXJlbSwgMS43NXJlbSwgMS43NXJlbSk7XG4gICBsaW5lLWhlaWdodDogMS4yO1xuICAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5oZWFkaW5nX2xldmVsXzUsXG5oNSB7XG4gICBAaW5jbHVkZSBmb250U2l6ZUJyZWFrcG9pbnQoMS4yNXJlbSwgMS41cmVtLCAxLjVyZW0pO1xuICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uaGVhZGluZ19sZXZlbF82LFxuaDYge1xuICAgQGluY2x1ZGUgZm9udFNpemVCcmVha3BvaW50KDEuMTI1cmVtLCAxLjI1cmVtLCAxLjI1cmVtKTtcbiAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuXG4uYm9keV90ZXh0X2xhcmdlIHtcbiAgIEBpbmNsdWRlIGZvbnRTaXplQnJlYWtwb2ludCgxcmVtLCAxLjEyNXJlbSwgMS4xMjVyZW0pO1xuICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uYm9keV90ZXh0X21lZGl1bSB7XG4gICBAaW5jbHVkZSBmb250U2l6ZUJyZWFrcG9pbnQoMC44NzVyZW0sIDFyZW0sIDFyZW0pO1xuICAgZm9udC1zaXplOiAxcmVtO1xuICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG5cbi5ib2R5X3RleHRfc21hbGwge1xuICAgQGluY2x1ZGUgZm9udFNpemVCcmVha3BvaW50KDAuODc1cmVtLCAwLjg3NXJlbSwgMC44NzVyZW0pO1xuICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgIGxldHRlci1zcGFjaW5nOiAwXG59XG5cbi5ib2R5X3RleHRfeHNtYWxsIHtcbiAgIEBpbmNsdWRlIGZvbnRTaXplQnJlYWtwb2ludCgwLjg3NXJlbSwgMC43NXJlbSwgMC43NXJlbSk7XG4gICBsaW5lLWhlaWdodDogMS41O1xuICAgbGV0dGVyLXNwYWNpbmc6IDA7XG59IiwiLy8gVmFyaWFibGVzXG5cbkBpbXBvcnQgJ2NvbG9ycyc7XG5AaW1wb3J0ICd0eXBvZ3JhcGh5JztcblxuXG46cm9vdCB7XG5cblxuICAvLyBwcmVzZXQgY29sb3JzIHZhcmlhYmxlc1xuICAtLWJvZHktYmc6ICRjb2xvci1wcmltYXJ5LXdoaXRlOyAvLyBib2R5IGNvbG9yXG4gIC0tYm9keS1jb2xvcjogJGNvbG9yLXNlY29uZGFyeS1ncmF5OyAvLyB0ZXh0IGNvbG9yXG59XG5cblxuXG4vLyBPcHRpb25zXG4vL1xuLy8gUXVpY2tseSBtb2RpZnkgZ2xvYmFsIHN0eWxpbmcgYnkgZW5hYmxpbmcgb3IgZGlzYWJsaW5nIG9wdGlvbmFsIGZlYXR1cmVzLlxuXG4kZW5hYmxlLWNhcmV0OiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1yb3VuZGVkOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtZ3JhZGllbnRzOiBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXByZWZlcnMtcmVkdWNlZC1tb3Rpb24tbWVkaWEtcXVlcnk6IHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiBmYWxzZSAhZGVmYXVsdDsgLy8gRGVwcmVjYXRlZCwgbm8gbG9uZ2VyIGFmZmVjdHMgYW55IGNvbXBpbGVkIENTU1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6IHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXBvaW50ZXItY3Vyc29yLWZvci1idXR0b25zOiB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1wcmludC1zdHlsZXM6IHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogZmFsc2UgIWRlZmF1bHQ7XG4kZW5hYmxlLXZhbGlkYXRpb24taWNvbnM6IHRydWUgIWRlZmF1bHQ7XG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiB0cnVlICFkZWZhdWx0O1xuXG5cbi8vIFNjcmVlbiBCcmVha3BvaW50c1xuJGJyZWFrcG9pbnQtczogMzc1cHg7XG4kYnJlYWtwb2ludC1tOiA3NjhweDtcbiRicmVha3BvaW50LWw6IDEwMjRweDtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogJGNvbG9yLXByaW1hcnktd2hpdGUgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogJGNvbG9yLXNlY29uZGFyeS1ncmF5ICFkZWZhdWx0O1xuXG5cbi8vIFBhcmFncmFwaHNcbi8vXG4vLyBTdHlsZSBwIGVsZW1lbnQuXG5cbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMXJlbSAhZGVmYXVsdDtcblxuLy8gQ29tcG9uZW50c1xuLy9cbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cblxuJGJvcmRlci13aWR0aDogMXB4ICFkZWZhdWx0O1xuJGJvcmRlci1yYWRpdXM6IC4yNXJlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLWxnOiAuM3JlbSAhZGVmYXVsdDtcbiRib3JkZXItcmFkaXVzLXNtOiAuMnJlbSAhZGVmYXVsdDtcblxuXG5cbi8vIENvZGVcblxuJGNvZGUtZm9udC1zaXplOiA4Ny41JSAhZGVmYXVsdDtcbiRjb2RlLWNvbG9yOiAkY29sb3ItcHJpbWFyeS1kYXJrc2t5ICFkZWZhdWx0O1xuXG4kcHJlLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LWdyYXkgIWRlZmF1bHQ7XG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogMzQwcHggIWRlZmF1bHQ7XG4kcHJlLWJnOiAkY29sb3Itc2Vjb25kYXJ5LWxpaHRncmF5ICFkZWZhdWx0O1xuXG5cbi8vQ29tcG9uZW50c1xuXG4vLyBUb2dnbGVcblxuJHRvZ2dsZS1sYWJlbC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeS1ncmF5ICFkZWZhdWx0O1xuJHRvZ2dsZS1idXR0b24tYmc6IHJnYmEoMTIwLCAxMjAsIDEyOCwgMC4zMikgIWRlZmF1bHQ7XG4kdG9nZ2xlLWZvY3VzLW9uLWJnOiAkY29sb3ItcHJpbWFyeS1zYW50YW5kZXIgIWRlZmF1bHQ7XG4kdG9nZ2xlLWZvY3VzLW9mZi1iZzogJGNvbG9yLXByaW1hcnktd2hpdGUgIWRlZmF1bHQ7XG4kdG9nZ2xlLWJ1dHRvbi1kaXNhYmxlZC1iZzogI2Y1ZjVmNSAhZGVmYXVsdDtcbiR0b2dnbGUtZGlzYWJsZWQtYmc6ICNjM2MzYzMgIWRlZmF1bHQ7XG5cbi8vIFByb2dyZXNzIEJhclxuJHByb2dyZXNzLWJhci1iZzogI2YwZjBmMCAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItY29sb3I6ICRjb2xvci1wcmltYXJ5LXNhbnRhbmRlciAhZGVmYXVsdDtcblxuLy8gQ2hlY2tib3hcbiRjaGVja2JveC1zaXplLXhzOiAxLjVlbTtcbiRjaGVja2JveC1zaXplLXM6IDJlbTtcbiRjaGVja2JveC1zaXplLW06IDIuNWVtOyIsIi8qXG4gICAgVGhpcyBmdW5jdGlvbiBjYWxjdWxhdGUgdGhlIGZvbnRTaXplIGluIHB4IHRvIGVtXG4qL1xuQGZ1bmN0aW9uIGZvbnRTaXplQ2FsYygkZm9udFNpemVQeCkge1xuXHQkcmVzdWx0OiAkZm9udFNpemVQeCAqIGVtUGVyUHgoMjRweCwgMS45OCk7XG5cdEByZXR1cm4gI3skcmVzdWx0fWVtOyBcbn1cblxuLypcblx0VGhpcyBmdW5jdGlvbiBjYWxjdWxhdGUgdGhlIGVtIHZhbHVlIGJ5IHBpeGVsXG5cdGV4YW1wbGU6IDI0cHggPSAxLjk4ZW1cblxuXHRXaGVuIEkgY2FsY3VsYXRlIDI1cHggbXVsdGlwbGllZCBieSAxLjk4ZW0gZGl2aWRlZCBieSAyNHB4IEkgd2lsbCBjYXRjaCB0aGUgdmFsdWUgb2YgMjVweCBpbiBlbVxuXHRBZnRlciB0aGlzIGlmIEkgc3VidHJhY3QgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QgY2FsY3VsYXRpb24gYnkgdGhlIDEuOThlbSAgSSB3aWxsIHJlY2VpdmUgdGhlIGVtIHBlciBweFxuXG4qL1xuQGZ1bmN0aW9uIGVtUGVyUHgoJHB4QmFzZVZhbHVlLCAkZW1CYXNlVmFsdWUpIHtcblx0QHJldHVybiAkZW1CYXNlVmFsdWUgLyAkcHhCYXNlVmFsdWU7XG59IiwiLy8gUmVib290XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgfVxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgfVxuICBcbn1cblxuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvLyAyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvLyAzXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLy8gNFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoJGNvbG9yLXNlY29uZGFyeS1ncmF5LCAwKTsgLy8gNVxufVxuXG4vLyBTaGltIGZvciAnbmV3JyBIVE1MNSBzdHJ1Y3R1cmFsIGVsZW1lbnRzIHRvIGRpc3BsYXkgY29ycmVjdGx5IChJRTEwLCBvbGRlciBicm93c2Vycylcbi8vIFRPRE86IHJlbW92ZSBpbiB2NVxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlbGVjdG9yLWxpc3QtY29tbWEtbmV3bGluZS1hZnRlclxuYXJ0aWNsZSxcbmFzaWRlLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1haW4sXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8vIEJvZHlcblxuYm9keSB7XG4gIG1hcmdpbjogMDsgLy8gMVxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LWJhc2U7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xuICBjb2xvcjogJGJvZHktY29sb3I7XG4gIHRleHQtYWxpZ246IGxlZnQ7IC8vIDNcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmc7IC8vIDJcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi8vXG4vLyBUeXBvZ3JhcGh5XG4vL1xuXG4vLyBSZW1vdmUgdG9wIG1hcmdpbnMgZnJvbSBoZWFkaW5nc1xuLy9cbi8vIEJ5IGRlZmF1bHQsIGA8aDE+YC1gPGg2PmAgYWxsIHJlY2VpdmUgdG9wIGFuZCBib3R0b20gbWFyZ2lucy4gV2UgbnVrZSB0aGUgdG9wXG4vLyBtYXJnaW4gZm9yIGVhc2llciBjb250cm9sIHdpdGhpbiB0eXBlIHNjYWxlcyBhcyBpdCBhdm9pZHMgbWFyZ2luIGNvbGxhcHNpbmcuXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2VsZWN0b3ItbGlzdC1jb21tYS1uZXdsaW5lLWFmdGVyXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LWZhbWlseTogJGhlYWRpbmdzLWZvbnQtZmFtaWx5O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAkaGVhZGluZ3MtbWFyZ2luLWJvdHRvbTtcbn1cblxuLy8gUmVzZXQgbWFyZ2lucyBvbiBwYXJhZ3JhcGhzXG4vL1xuLy8gU2ltaWxhcmx5LCB0aGUgdG9wIG1hcmdpbiBvbiBgPHA+YHMgZ2V0IHJlc2V0LiBIb3dldmVyLCB3ZSBhbHNvIHJlc2V0IHRoZVxuLy8gYm90dG9tIG1hcmdpbiB0byB1c2UgYHJlbWAgdW5pdHMgaW5zdGVhZCBvZiBgZW1gLlxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206ICRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1iYXNlO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XG4gIGNvbG9yOiAkYm9keS1jb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmc7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDAlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLy8gR29vZ2xlIE1hcHMgQXV0byBjb21wbGV0ZSBEcm9wZG93blxuLnBhYy1jb250YWluZXIge1xuICBmb250LWZhbWlseTogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAucGFjLWl0ZW0ge1xuICAgIC5wYWMtaXRlbS1xdWVyeSB7XG4gICAgICBsaW5lLWhlaWdodDogMXJlbSAhaW1wb3J0YW50O1xuICAgICAgLnBhYy1tYXRjaGVkIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFNhbnRhbmRlclRleHQgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIGZvbnQtZmFtaWx5OiBTYW50YW5kZXJUZXh0ICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAmICsgc3BhbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBTYW50YW5kZXJUZXh0ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICY6OmFmdGVyIHtcbiAgICAvLyByZW1vdmUgZ29vZ2xlIGxvZyBmcm9tIGF1dG8gY29tbGV0ZSBsaXN0XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbiIsIi8vIENvbG9yc1xuXG4vLyBDb2xvdXIgaXMgYSBrZXkgcmVzb3VyY2UgZm9yIFNhbnRhbmRlci4gUmVkIGlzIHVuZG91YnRlZGx5IG91ciBtYWluIGFzc2V0IGJ1dCBhcyBpdFxuLy8gaXMgc3VjaCBhIHBvd2VyZnVsIGFuZCBodWVkIGNvbG91ciwgd2UgbXVzdCBjb25zdHJhaW50IGl0cyB1c2FnZSB0byBoaWdobGlnaHRcbi8vIHNvbWUgZGF0YSBvciB0byBkZXBpY3QgYnJhbmQgZWxlbWVudHMuIEluIHRoaXMgd2F5LCBhcyBTYW50YW5kZXIgaXMgYVxuLy8gdHJhbnNwYXJlbnQsIHNpbXBsZSBhbmQgZmFpciBiYW5rLCBvdXIgYXBwcyBhcmUgYnJpZ2h0IGFuZCBjbGVhciwgd2l0aCBsb3RzIG9mXG4vLyB3aGl0ZSBzcGFjZXMuXG5cbi8vIFByaW1hcnkgY29sb3Vyc1xuJGNvbG9yLXByaW1hcnktc2FudGFuZGVyOiB2YXIoLS1jb2xvci1wcmltYXJ5LXNhbnRhbmRlciwjRUMwMDAwKTtcbiRjb2xvci1wcmltYXJ5LWJvc3RvbjogdmFyKC0tY29sb3ItcHJpbWFyeS1ib3N0b24sI0NDMDAwMCk7XG4kY29sb3ItcHJpbWFyeS1ydWJ5OiB2YXIoLS1jb2xvci1wcmltYXJ5LXJ1YnksIzk5MDAwMCk7XG4kY29sb3ItcHJpbWFyeS1za3k6IHZhcigtLWNvbG9yLXByaW1hcnktc2t5LCNERUVERjIpO1xuJGNvbG9yLXByaW1hcnktbWVkaXVtc2t5OiB2YXIoLS1jb2xvci1wcmltYXJ5LW1lZGl1bXNreSwjQ0VERUU3KTtcbiRjb2xvci1wcmltYXJ5LWRhcmtza3k6IHZhcigtLWNvbG9yLXByaW1hcnktZGFya3NreSwjOTkwMDAwKTtcbiRjb2xvci1wcmltYXJ5LXdoaXRlOnZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUsI0ZGRkZGRik7XG4kY29sb3Itc2Vjb25kYXJ5LWdyYXk6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1ncmF5LCM0NDQ0NDQpO1xuJGNvbG9yLXNlY29uZGFyeS1tZWRpdW1ncmF5OiB2YXIoLS1jb2xvci1zZWNvbmRhcnktbWVkaXVtZ3JheSwgIzc2NzY3Nik7XG4kY29sb3Itc2Vjb25kYXJ5LWxpaHRncmF5OiB2YXIoLS1jb2xvci1zZWNvbmRhcnktbGlodGdyYXksI0NDQ0NDQyk7XG5cbi8vIFNlY29uZGFyeSBjb2xvdXJzXG4kY29sb3Itc2Vjb25kYXJ5LXllbGxvdzogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LXllbGxvdywjRkZDQzMzKTtcbiRjb2xvci1zZWNvbmRhcnktbGltZWdyZWVuOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktbGltZWdyZWVuLCM2M0JBNjgpO1xuJGNvbG9yLXNlY29uZGFyeS10dXJxdW9pc2U6IHZhcigtLWNvbG9yLXNlY29uZGFyeS10dXJxdW9pc2UsIzFCQjNCQyk7XG4kY29sb3Itc2Vjb25kYXJ5LWJsdWU6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1ibHVlLCMzMzY2RkYpO1xuJGNvbG9yLXNlY29uZGFyeS1wdXJwbGU6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbGlua3Zpc2l0ZWQsIzlFMzY2Nyk7XG4kY29sb3Itc2Vjb25kYXJ5LWJnOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktcHVycGxlLCNGNUY5RkIpO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJreWVsbG93OiB2YXIoLS1jb2xvci1zZWNvbmRhcnktZGFya3llbGxvdywjOTQ2RjAwKTtcbiRjb2xvci1zZWNvbmRhcnktZ3JlZW46IHZhcigtLWNvbG9yLXNlY29uZGFyeS1ncmVlbiwjM0E4MzQwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFya3R1cnF1b2lzZTogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWRhcmt0dXJxdW9pc2UsIzEzN0U4NCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcmtibHVlOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktZGFya2JsdWUsIzAwMzJFNik7XG5cbi8vIEZ1bmN0aW9uYWwgY29sb3JzXG4vLyBUaGUgXCJGdW5jdGlvbmFsIENvbG9yc1wiIGdyb3VwIGNvdmVycyB0aGUgc3BlY2lmaWMgZGVzaWduIG5lZWQgb2YgYXBwbHlpbmcgZGlmZmVyZW50IGNvbG9ycyB0aGF0IFwiQnJhbmRcIiBpbiBvdXIgaW50ZXJmYWNlIGNvbXBvbmVudHM6IGxpbmtcbi8vIGNvbG9ycywgc29jaWFsIG5ldHdvcmtzIGNvbG9ycywgZXRjLiBcIkZ1bmN0aW9uYWwgQ29sb3JzXCIgaXMgZGl2aWRlZCBpbnRvIHNldmVyYWwgZ3JvdXBzOlxuXG5cbi8vLy8gTGluayBDb2xvcnNcbi8vIFRoZSBjb2xvciBkZWZpbml0aW9uIG9mIG91ciBsaW5rcyBhbmQgYWxsIHRoZWlyIHN0YXRlcyAoRGVmYXVsdCwgOmhvdmVyLCBBY3RpdmUsIFZpc2l0ZWQpXG5cbiRjb2xvci1mdW5jdGlvbmFsLWxpbmtkZWZhdWx0OiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWxpbmtkZWZhdWx0LCNFQzAwMDApO1xuJGNvbG9yLWZ1bmN0aW9uYWwtbGlua2hvdmVyOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWxpbmtob3ZlciwjOTkwMDAwKTtcbiRjb2xvci1mdW5jdGlvbmFsLWxpbmthY3RpdmU6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbGlua2FjdGl2ZSwjQ0MwMDAwKTtcbiRjb2xvci1mdW5jdGlvbmFsLWxpbmt2aXNpdGVkOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWxpbmt2aXNpdGVkLCM5RTM2NjcpO1xuXG4vLy8vIE5ldXRyYWxzXG4vLyBBIGdyYXlzY2FsZSBpbiBpbnRlcnZhbHMgb2YgMTAlIG9wYWNpdHkgZnJvbSBvdXIgYmFzZSBcIkRhcmsgR3JheVwiIGNvbG9yLlxuJGNvbG9yLWZ1bmN0aW9uYWwtbmV1dHJhbDkwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLW5ldXRyYWw5MCwjNTc1NzU3KTtcbiRjb2xvci1mdW5jdGlvbmFsLW5ldXRyYWw4MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1uZXV0cmFsODAsIzZBNkE2QSk7XG4kY29sb3ItZnVuY3Rpb25hbC1uZXV0cmFsNzA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbmV1dHJhbDcwLCM3QzdDN0MpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtbmV1dHJhbDYwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLW5ldXRyYWw2MCwjOEY4RjhGKTtcbiRjb2xvci1mdW5jdGlvbmFsLW5ldXRyYWw1MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1uZXV0cmFsNTAsI0EyQTJBMik7XG4kY29sb3ItZnVuY3Rpb25hbC1uZXV0cmFsNDA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbmV1dHJhbDQwLCNCNUI1QjUpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtbmV1dHJhbDMwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLW5ldXRyYWwzMCwjQzdDN0M3KTtcbiRjb2xvci1mdW5jdGlvbmFsLW5ldXRyYWwyMDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1uZXV0cmFsMjAsI0RBREFEQSk7XG4kY29sb3ItZnVuY3Rpb25hbC1uZXV0cmFsMTA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbmV1dHJhbDEwLCNFQ0VDRUMpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtbmV1dHJhbDA1OiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLW5ldXRyYWwwNSwjRjZGNkY2KTtcblxuLy8vLyBTb2NpYWxcbi8vIENvbGxlY3RzIHRoZSBjb2xvcnMgb2YgZGlmZmVyZW50IG5ldHdvcmtzIG9yIHNvY2lhbCBwbGF0Zm9ybXMuXG4kY29sb3ItZnVuY3Rpb25hbC1kcm9wYm94OiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWRyb3Bib3gsIzAwNjFGRik7XG4kY29sb3ItZnVuY3Rpb25hbC1mYWNlYm9vazogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1mYWNlYm9vaywjM0I1OTk4KTtcbiRjb2xvci1mdW5jdGlvbmFsLWdvb2dsZXBsdXM6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtZ29vZ2xlcGx1cywjRDM0ODM2KTtcbiRjb2xvci1mdW5jdGlvbmFsLWluc3RhZ3JhbTogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1pbnN0YWdyYW0sI0M3QzdDNyk7XG4kY29sb3ItZnVuY3Rpb25hbC1saW5rZWRpbjogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1saW5rZWRpbiwjMDA3N0I1KTtcbiRjb2xvci1mdW5jdGlvbmFsLXNreXBlOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXNreXBlLCMwMEFGRjApO1xuJGNvbG9yLWZ1bmN0aW9uYWwtc3BvdGlmeTogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1zcG90aWZ5LCMxRUQ3NjApO1xuJGNvbG9yLWZ1bmN0aW9uYWwtdHdpdHRlcjogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC10d2l0dGVyLCMwMEI2RjEpO1xuXG4vLy8vIFN1cHBvcnRcbi8vIEVycm9yLCBTdWNjZXNzLCBXYXJuaW5nLCBJbmZvIGNvbG9ycy5cblxuJGNvbG9yLWZ1bmN0aW9uYWwtZGFya2Vycm9yOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWRhcmtlcnJvciwjOTkwMDAwKTtcbiRjb2xvci1mdW5jdGlvbmFsLWVycm9yOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWVycm9yLCNDQzAwMDApO1xuJGNvbG9yLWZ1bmN0aW9uYWwtbGlnaHRlcmVycm9yOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWxpZ2h0ZXJlcnJvciwjRkVFNUU1KTtcbiRjb2xvci1mdW5jdGlvbmFsLWRhcmtzdWNjZXNzOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWRhcmtzdWNjZXNzLCMzQTgzNDApO1xuJGNvbG9yLWZ1bmN0aW9uYWwtc3VjY2VzczogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1zdWNjZXNzLCM2M0JBNjgpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtbGlnaHRlcnN1Y2Nlc3M6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbGlnaHRlcnN1Y2Nlc3MsI0YwRjhGMCk7XG4kY29sb3ItZnVuY3Rpb25hbC1kYXJrd2FybmluZzogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1saWdodGVyc3VjY2VzcywjOTQ2RjAwKTtcbiRjb2xvci1mdW5jdGlvbmFsLXdhcm5pbmc6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtd2FybmluZywjRkZDQzMzKTtcbiRjb2xvci1mdW5jdGlvbmFsLWxpZ2h0ZXJ3YXJuaW5nOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWxpZ2h0ZXJ3YXJuaW5nLCNGRkZBRUIpO1xuXG4vLy8vIFRpbnRcbi8vIFNvbWUgb2Ygb3VyIGNvbG9ycyBjYW4gaGF2ZSB0aW50cy4gV2hhdCBkb2VzIHRoaXMgbWVhbj8gVGhhdCB3ZSBjYW4gdXNlIHRoZSBzYW1lIGZpbGwgY29sb3VyIGluIGRpZmZlcmVudCBvcGFjaXR5XG4vLyBwZXJjZW50YWdlcywgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgZGVwdGggYW5kIHZvbHVtZSB0aHJvdWdoIGdsb3cgYW5kIHNoYWRvd3MuIEEga2V5IHVzYWdlIG9mIGRpZmZlcmVudCB0aW50cyBpc1xuLy8gd2l0aCBpY29uIGFuZCBpbGx1c3RyYXRpb24gY3JlYXRpb24uXG5cbi8vLy8vLyBibHVlXG4kY29sb3ItZnVuY3Rpb25hbC1ibHVlOTA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtYmx1ZTkwLCM0Nzc1RkYpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtYmx1ZTgwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWJsdWU4MCwjNUM4NUZGKTtcbiRjb2xvci1mdW5jdGlvbmFsLWJsdWU3MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1ibHVlNzAsIzcwOTRGRik7XG4kY29sb3ItZnVuY3Rpb25hbC1ibHVlNjA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtYmx1ZTYwLCM4NUE0RkYpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtYmx1ZTUwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWJsdWU1MCwjOTlCM0ZGKTtcbiRjb2xvci1mdW5jdGlvbmFsLWJsdWU0MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1ibHVlNDAsI0FFQzJGRik7XG4kY29sb3ItZnVuY3Rpb25hbC1ibHVlMzA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtYmx1ZTMwLCNDMkQxRkYpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtYmx1ZTIwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWJsdWUyMCwjRDdFMUZGKTtcbiRjb2xvci1mdW5jdGlvbmFsLWJsdWUxMDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1ibHVlMTAsI0VCRjBGRik7XG4kY29sb3ItZnVuY3Rpb25hbC1ibHVlMDU6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtYmx1ZTA1LCNGNUY4RkYpO1xuXG4vLy8vLy8gTGltZSBHcmVlblxuJGNvbG9yLWZ1bmN0aW9uYWwtbGltZWdyZWVuOTA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbGltZWdyZWVuOTAsIzczQzE3Nyk7XG4kY29sb3ItZnVuY3Rpb25hbC1saW1lZ3JlZW44MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1saW1lZ3JlZW44MCwjODNDODg3KTtcbiRjb2xvci1mdW5jdGlvbmFsLWxpbWVncmVlbjcwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWxpbWVncmVlbjcwLCM5MkNGOTYpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtbGltZWdyZWVuNjA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbGltZWdyZWVuNjAsI0EyRDZBNSk7XG4kY29sb3ItZnVuY3Rpb25hbC1saW1lZ3JlZW41MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1saW1lZ3JlZW41MCwjQjFEREI0KTtcbiRjb2xvci1mdW5jdGlvbmFsLWxpbWVncmVlbjQwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWxpbWVncmVlbjQwLCNDMUU0QzMpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtbGltZWdyZWVuMzA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbGltZWdyZWVuMzAsI0QwRUJEMik7XG4kY29sb3ItZnVuY3Rpb25hbC1saW1lZ3JlZW4yMDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1saW1lZ3JlZW4yMCwjRTBGMkUxKTtcbiRjb2xvci1mdW5jdGlvbmFsLWxpbWVncmVlbjEwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLWxpbWVncmVlbjEwLCNGMEY4RjApO1xuJGNvbG9yLWZ1bmN0aW9uYWwtbGltZWdyZWVuMDU6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtbGltZWdyZWVuMDUsI0Y4RkNGOCk7XG5cbi8vLy8vLyBQdXJwbGVcbiRjb2xvci1mdW5jdGlvbmFsLXB1cnBsZTkwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXB1cnBsZTkwLCM3M0MxNzcpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtcHVycGxlODA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtcHVycGxlODAsIzgzQzg4Nyk7XG4kY29sb3ItZnVuY3Rpb25hbC1wdXJwbGU3MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1wdXJwbGU3MCwjOTJDRjk2KTtcbiRjb2xvci1mdW5jdGlvbmFsLXB1cnBsZTYwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXB1cnBsZTYwLCNBMkQ2QTUpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtcHVycGxlNTA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtcHVycGxlNTAsI0IxRERCNCk7XG4kY29sb3ItZnVuY3Rpb25hbC1wdXJwbGU0MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1wdXJwbGU0MCwjQzFFNEMzKTtcbiRjb2xvci1mdW5jdGlvbmFsLXB1cnBsZTMwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXB1cnBsZTMwLCNEMEVCRDIpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtcHVycGxlMjA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtcHVycGxlMjAsI0UwRjJFMSk7XG4kY29sb3ItZnVuY3Rpb25hbC1wdXJwbGUxMDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1wdXJwbGUxMCwjRjBGOEYwKTtcbiRjb2xvci1mdW5jdGlvbmFsLXB1cnBsZTA1OiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXB1cnBsZTA1LCNGOEZDRjgpOyBcblxuLy8vLy8vIFNhbnRhbmRlclxuJGNvbG9yLWZ1bmN0aW9uYWwtc2FudGFuZGVyOTA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtc2FudGFuZGVyOTAsI0VFMTkxOSk7XG4kY29sb3ItZnVuY3Rpb25hbC1zYW50YW5kZXI4MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1zYW50YW5kZXI4MCwjRjAzMzMzKTtcbiRjb2xvci1mdW5jdGlvbmFsLXNhbnRhbmRlcjcwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXNhbnRhbmRlcjcwLCNGMjRDNEMpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtc2FudGFuZGVyNjA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtc2FudGFuZGVyNjAsI0Y0NjY2Nik7XG4kY29sb3ItZnVuY3Rpb25hbC1zYW50YW5kZXI1MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1zYW50YW5kZXI1MCwjRjY3RjdGKTtcbiRjb2xvci1mdW5jdGlvbmFsLXNhbnRhbmRlcjQwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXNhbnRhbmRlcjQwLCNGODk5OTkpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtc2FudGFuZGVyMzA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtc2FudGFuZGVyMzAsI0ZBQjJCMik7XG4kY29sb3ItZnVuY3Rpb25hbC1zYW50YW5kZXIyMDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1zYW50YW5kZXIyMCwjRkNDQ0NDKTtcbiRjb2xvci1mdW5jdGlvbmFsLXNhbnRhbmRlcjEwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXNhbnRhbmRlcjEwLCNGRUU1RTUpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtc2FudGFuZGVyMDU6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtc2FudGFuZGVyMDUsI0ZGRjJGMik7XG5cbi8vLy8vLyBTa3lcbiRjb2xvci1mdW5jdGlvbmFsLXNreTkwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXNreTkwLCNFMkVGRjQpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtc2t5ODA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtc2t5ODAsI0U1RjFGNSk7XG4kY29sb3ItZnVuY3Rpb25hbC1za3k3MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1za3k3MCwjRThGM0Y2KTtcbiRjb2xvci1mdW5jdGlvbmFsLXNreTYwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXNreTYwLCNFQ0Y1RjgpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtc2t5NTA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtc2t5NTAsI0VGRjZGOSk7XG4kY29sb3ItZnVuY3Rpb25hbC1za3k0MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1za3k0MCwjRjJGOEZBKTtcbiRjb2xvci1mdW5jdGlvbmFsLXNreTMwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXNreTMwLCNGNkZBRkMpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtc2t5MjA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtc2t5MjAsI0Y5RkNGRCk7XG4kY29sb3ItZnVuY3Rpb25hbC1za3kxMDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC1za3kxMCwjRkNGRUZFKTtcblxuLy8vLy8vIFR1cnF1b2lzZVxuJGNvbG9yLWZ1bmN0aW9uYWwtdHVycXVvaXNlcjkwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXR1cnF1b2lzZXI5MCwjMzJiYmMzKTtcbiRjb2xvci1mdW5jdGlvbmFsLXR1cnF1b2lzZTgwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXR1cnF1b2lzZTgwLCM0OUMzQ0EpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtdHVycXVvaXNlNzA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtdHVycXVvaXNlNzAsIzVGQ0FEMCk7XG4kY29sb3ItZnVuY3Rpb25hbC10dXJxdW9pc2U2MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC10dXJxdW9pc2U2MCwjNzdEMkQ3KTtcbiRjb2xvci1mdW5jdGlvbmFsLXR1cnF1b2lzZTUwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXR1cnF1b2lzZTUwLCM4REQ5REUpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtdHVycXVvaXNlNDA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwtdHVycXVvaXNlNDAsI0E0RTFFNSk7XG4kY29sb3ItZnVuY3Rpb25hbC10dXJxdW9pc2UzMDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC10dXJxdW9pc2UzMCwjQkJFOUVCKTtcbiRjb2xvci1mdW5jdGlvbmFsLXR1cnF1b2lzZTIwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXR1cnF1b2lzZTIwLCNEMkYwRjIpO1xuJGNvbG9yLWZ1bmN0aW9uYWwtdHVycXVvaXNlcjEwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXR1cnF1b2lzZXIxMCwjRThGOEY5KTtcbiRjb2xvci1mdW5jdGlvbmFsLXR1cnF1b2lzZXIwNTogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC10dXJxdW9pc2VyMDUsI0Y0RkNGQyk7XG5cbi8vLy8vLyBZZWxsb3dcbiRjb2xvci1mdW5jdGlvbmFsLXllbGxvdzkwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXllbGxvdzkwLCNGRkQxNDcpO1xuJGNvbG9yLWZ1bmN0aW9uYWwteWVsbG93ODA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwteWVsbG93ODAsI0ZGRDc1Qyk7XG4kY29sb3ItZnVuY3Rpb25hbC15ZWxsb3c3MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC15ZWxsb3c3MCwjRkZEQzcwKTtcbiRjb2xvci1mdW5jdGlvbmFsLXllbGxvdzYwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXllbGxvdzYwLCNGRkUxODUpO1xuJGNvbG9yLWZ1bmN0aW9uYWwteWVsbG93NTA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwteWVsbG93NTAsI0ZGRTY5OSk7XG4kY29sb3ItZnVuY3Rpb25hbC15ZWxsb3c0MDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC15ZWxsb3c0MCwjRkZFQkFFKTtcbiRjb2xvci1mdW5jdGlvbmFsLXllbGxvdzMwOiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXllbGxvdzMwLCNGRkYwQzIpO1xuJGNvbG9yLWZ1bmN0aW9uYWwteWVsbG93MjA6IHZhcigtLWNvbG9yLWZ1bmN0aW9uYWwteWVsbG93MjAsI0ZGRjVENyk7XG4kY29sb3ItZnVuY3Rpb25hbC15ZWxsb3cxMDogdmFyKC0tY29sb3ItZnVuY3Rpb25hbC15ZWxsb3cxMCwjRkZGQUVCKTtcbiRjb2xvci1mdW5jdGlvbmFsLXllbGxvdzA1OiB2YXIoLS1jb2xvci1mdW5jdGlvbmFsLXllbGxvdzA1LCNGRkZERjUpOyIsIlxuLy8gSGVhZGluZ3Ncbi8vXG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcbiAgbWFyZ2luLWJvdHRvbTogJGhlYWRpbmdzLW1hcmdpbi1ib3R0b207XG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZ3MtZm9udC1mYW1pbHk7XG4gIGZvbnQtd2VpZ2h0OiAkaGVhZGluZ3MtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVhZGluZ3MtbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG59XG5cbmgxLCAuaDEgeyBmb250LXNpemUgOiAkaDEtZm9udC1zaXplOyB9XG5oMiwgLmgyIHsgZm9udC1zaXplIDogJGgyLWZvbnQtc2l6ZTsgfVxuaDMsIC5oMyB7IGZvbnQtc2l6ZSA6ICRoMy1mb250LXNpemU7IH1cbmg0LCAuaDQgeyBmb250LXNpemUgOiAkaDQtZm9udC1zaXplOyB9XG5oNSwgLmg1IHsgZm9udC1zaXplIDogJGg1LWZvbnQtc2l6ZTsgfVxuaDYsIC5oNiB7IGZvbnQtc2l6ZSA6ICRoNi1mb250LXNpemU7IH1cblxuXG5cblxuXG4iLCIuc24tbW9kYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktbW9kYWwtYmcsICMwMDAwMDA1Mik7XG4gICAgJj57XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG59IiwiLnNuLXBhbmVsLWFjdGlvbi1zaGVldCB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbn1cbiIsIkBpbXBvcnQgJ3NldHRpbmdzL3NhbnRhbmRlcmhlYWRsaW5lJztcbkBpbXBvcnQgJ3NldHRpbmdzL3NhbnRhbmRlcnRleHQnO1xuQGltcG9ydCAnc2V0dGluZ3Mvb3BlbnNhbnMnO1xuQGltcG9ydCAnc2V0dGluZ3MvdmFyaWFibGVzJztcbkBpbXBvcnQgJ3NldHRpbmdzL2Z1bmN0aW9ucyc7XG5AaW1wb3J0ICdnZW5lcmFsL3JlYm9vdCc7XG5AaW1wb3J0ICdiYXNlL3R5cGUnO1xuQGltcG9ydCAnY29tcG9uZW50cy9tb2RhbCc7XG5AaW1wb3J0ICdjb21wb25lbnRzL2FjdGlvbi1zaGVldCc7XG5AaW1wb3J0ICd+QGFuZ3VsYXIvY2RrL292ZXJsYXktcHJlYnVpbHQuY3NzJztcblxuXG5cblxuLlR5cGUtMS1TdHlsZSB7XG4gIGZvbnQtZmFtaWx5OiBTYW50YW5kZXJUZXh0O1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeS1ncmF5O1xufVxuXG4uVHlwZS0yX0JvbGQtU3R5bGUge1xuICBmb250LWZhbWlseTogU2FudGFuZGVyVGV4dDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnktZ3JheTtcbn1cblxuLlR5cGUtMl9SZWd1bGFyLVN0eWxlIHtcbiAgZm9udC1mYW1pbHk6IFNhbnRhbmRlclRleHQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnktZ3JheTtcbn1cblxuLlR5cGUtM19Cb2xkLVN0eWxlIHtcbiAgZm9udC1mYW1pbHk6IFNhbnRhbmRlclRleHQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LWdyYXk7XG59XG5cbi5UeXBlLTNfUmVndWxhci1TdHlsZSB7XG4gIGZvbnQtZmFtaWx5OiBTYW50YW5kZXJUZXh0O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LWdyYXk7XG59XG5cbi5UeXBlLTRfUmVndWxhci1TdHlsZSB7XG4gIGZvbnQtZmFtaWx5OiBTYW50YW5kZXJUZXh0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LWdyYXk7XG59XG5cbi5UeXBlLTVfUmVndWxhci1TdHlsZSB7XG4gIGZvbnQtZmFtaWx5OiBTYW50YW5kZXJUZXh0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LWdyYXk7XG59XG5cbi5UeXBlLTVfTGlnaHQtU3R5bGUge1xuICBmb250LWZhbWlseTogU2FudGFuZGVyVGV4dDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeS1ncmF5O1xufVxuXG5cbioge1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/sn-common-lib/styles/styles.scss":
/*!*******************************************************!*\
  !*** ./node_modules/sn-common-lib/styles/styles.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../postcss-loader/src??embedded!../../sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/sn-common-lib/styles/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 3:
/*!*************************************************************!*\
  !*** multi ./node_modules/sn-common-lib/styles/styles.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ivan.diez.sanchez/Santander/StarterApp-Angular/node_modules/sn-common-lib/styles/styles.scss */"./node_modules/sn-common-lib/styles/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map