"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/Hero/animations.js":
/*!*******************************************!*\
  !*** ./app/components/Hero/animations.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   animateTitle: function() { return /* binding */ animateTitle; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nconst animateTitle = ()=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n        defaults: {\n            ease: \"expo.out\",\n            duration: 2\n        }\n    });\n    // [] targets css selectors\n    tl.to(\"[data-hero-line]\", {\n        scaleX: 1\n    }).fromTo(\"[data-title-first]\", {\n        //from, moving title 100px to the right\n        x: 100,\n        autoAlpha: 0\n    }, {\n        //to\n        x: 0,\n        autoAlpha: 1\n    }, //position parameter, when to start the animation relative to the first\n    \"<15%\").fromTo(\"[data-title-last]\", {\n        x: -100,\n        autoAlpha: 0\n    }, {\n        x: 0,\n        autoAlpha: 1\n    }, // position par, start the same time as the last one / the one before\n    \"<\");\n    return tl;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvSGVyby9hbmltYXRpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJCO0FBRXBCLE1BQU1DLGVBQWU7SUFDeEIsTUFBTUMsS0FBS0Ysc0NBQUlBLENBQUNHLFNBQVM7UUFDckJDLFVBQVU7WUFDTkMsTUFBTTtZQUNOQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBLDJCQUEyQjtJQUMzQkosR0FBR0ssR0FBRyxvQkFBb0I7UUFDdEJDLFFBQVE7SUFDWixHQUFHQyxPQUFPLHNCQUFzQjtRQUM1Qix1Q0FBdUM7UUFDdkNDLEdBQUc7UUFDSEMsV0FBVztJQUNmLEdBQUc7UUFDQyxJQUFJO1FBQ0pELEdBQUc7UUFDSEMsV0FBVztJQUVmLEdBQ0EsdUVBQXVFO0lBQ3ZFLFFBRUVGLE9BQU8scUJBQXFCO1FBQzFCQyxHQUFHLENBQUM7UUFDSkMsV0FBVztJQUNmLEdBQ0E7UUFDSUQsR0FBRztRQUNIQyxXQUFXO0lBQ2YsR0FDQSxxRUFBcUU7SUFDckU7SUFJQSxPQUFPVDtBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvSGVyby9hbmltYXRpb25zLmpzPzllZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnXG5cbmV4cG9ydCBjb25zdCBhbmltYXRlVGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgZGVmYXVsdHM6IHtcbiAgICAgICAgICAgIGVhc2U6IFwiZXhwby5vdXRcIixcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gW10gdGFyZ2V0cyBjc3Mgc2VsZWN0b3JzXG4gICAgdGwudG8oJ1tkYXRhLWhlcm8tbGluZV0nLCB7XG4gICAgICAgIHNjYWxlWDogMVxuICAgIH0pLmZyb21UbygnW2RhdGEtdGl0bGUtZmlyc3RdJywge1xuICAgICAgICAvL2Zyb20sIG1vdmluZyB0aXRsZSAxMDBweCB0byB0aGUgcmlnaHRcbiAgICAgICAgeDogMTAwLFxuICAgICAgICBhdXRvQWxwaGE6IDBcbiAgICB9LCB7XG4gICAgICAgIC8vdG9cbiAgICAgICAgeDogMCxcbiAgICAgICAgYXV0b0FscGhhOiAxXG5cbiAgICB9LCBcbiAgICAvL3Bvc2l0aW9uIHBhcmFtZXRlciwgd2hlbiB0byBzdGFydCB0aGUgYW5pbWF0aW9uIHJlbGF0aXZlIHRvIHRoZSBmaXJzdFxuICAgICc8MTUlJ1xuXG4gICAgKS5mcm9tVG8oJ1tkYXRhLXRpdGxlLWxhc3RdJywge1xuICAgICAgICB4OiAtMTAwLFxuICAgICAgICBhdXRvQWxwaGE6IDAgXG4gICAgfSwgXG4gICAge1xuICAgICAgICB4OiAwLFxuICAgICAgICBhdXRvQWxwaGE6IDFcbiAgICB9LFxuICAgIC8vIHBvc2l0aW9uIHBhciwgc3RhcnQgdGhlIHNhbWUgdGltZSBhcyB0aGUgbGFzdCBvbmUgLyB0aGUgb25lIGJlZm9yZVxuICAgICc8J1xuICAgIClcblxuXG4gICAgcmV0dXJuIHRsXG59Il0sIm5hbWVzIjpbImdzYXAiLCJhbmltYXRlVGl0bGUiLCJ0bCIsInRpbWVsaW5lIiwiZGVmYXVsdHMiLCJlYXNlIiwiZHVyYXRpb24iLCJ0byIsInNjYWxlWCIsImZyb21UbyIsIngiLCJhdXRvQWxwaGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Hero/animations.js\n"));

/***/ })

});