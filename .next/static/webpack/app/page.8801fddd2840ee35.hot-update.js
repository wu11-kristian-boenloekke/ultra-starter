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

/***/ "(app-client)/./app/components/Loader/animations.js":
/*!*********************************************!*\
  !*** ./app/components/Loader/animations.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   collapseWords: function() { return /* binding */ collapseWords; },\n/* harmony export */   introAnimation: function() { return /* binding */ introAnimation; },\n/* harmony export */   progressAnimation: function() { return /* binding */ progressAnimation; }\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"(app-client)/./node_modules/gsap/index.js\");\n\nconst introAnimation = (wordGroupsRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\n    tl.to(wordGroupsRef.current, {\n        yPercent: -80,\n        duration: 5,\n        ease: \"power3.inOut\"\n    });\n    return tl;\n};\nconst progressAnimation = (progressRef, progressNumberRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\n    tl.to(progressRef.current, {\n        scaleX: 1,\n        duration: 5,\n        ease: \"power3.inOut\"\n    }).to(progressNumberRef.current, {\n        x: \"100vw\",\n        duration: 5,\n        ease: \"power3.inOut\"\n    }, \"<\");\n    return tl;\n};\nconst collapseWords = (loaderRef)=>{\n    const tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();\n    tl.to(loaderRef.current, {\n        \"clip-path\": \"polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)\",\n        duration: 3,\n        ease: \"expo.inOut\"\n    });\n    return tl;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvTG9hZGVyL2FuaW1hdGlvbnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQjtBQUVwQixNQUFNQyxpQkFBaUIsQ0FBQ0M7SUFFM0IsTUFBTUMsS0FBS0gsc0NBQUlBLENBQUNJO0lBRWhCRCxHQUFHRSxHQUFHSCxjQUFjSSxTQUFTO1FBQ3pCQyxVQUFVLENBQUM7UUFDWEMsVUFBVTtRQUNWQyxNQUFNO0lBQ1Y7SUFHQSxPQUFPTjtBQUdYLEVBQUM7QUFFTSxNQUFNTyxvQkFBb0IsQ0FBQ0MsYUFBYUM7SUFFM0MsTUFBTVQsS0FBS0gsc0NBQUlBLENBQUNJO0lBRWhCRCxHQUFHRSxHQUFHTSxZQUFZTCxTQUFTO1FBQ3ZCTyxRQUFRO1FBQ1JMLFVBQVU7UUFDVkMsTUFBTTtJQUVWLEdBQUdKLEdBQUdPLGtCQUFrQk4sU0FBUztRQUM3QlEsR0FBRztRQUNITixVQUFVO1FBQ1ZDLE1BQU07SUFDVixHQUNJO0lBR0osT0FBT047QUFDWCxFQUFDO0FBRU0sTUFBTVksZ0JBQWdCLENBQUNDO0lBQzFCLE1BQU1iLEtBQUtILHNDQUFJQSxDQUFDSTtJQUVoQkQsR0FBR0UsR0FBR1csVUFBVVYsU0FBUztRQUVyQixhQUFhO1FBQ2JFLFVBQVU7UUFDVkMsTUFBTTtJQUVWO0lBRUEsT0FBT047QUFDWCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0xvYWRlci9hbmltYXRpb25zLmpzP2RkZTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCJcblxuZXhwb3J0IGNvbnN0IGludHJvQW5pbWF0aW9uID0gKHdvcmRHcm91cHNSZWYpID0+IHtcblxuICAgIGNvbnN0IHRsID0gZ3NhcC50aW1lbGluZSgpXG5cbiAgICB0bC50byh3b3JkR3JvdXBzUmVmLmN1cnJlbnQsIHtcbiAgICAgICAgeVBlcmNlbnQ6IC04MCxcbiAgICAgICAgZHVyYXRpb246IDUsXG4gICAgICAgIGVhc2U6IFwicG93ZXIzLmluT3V0XCIsXG4gICAgfSlcblxuXG4gICAgcmV0dXJuIHRsXG5cblxufVxuXG5leHBvcnQgY29uc3QgcHJvZ3Jlc3NBbmltYXRpb24gPSAocHJvZ3Jlc3NSZWYsIHByb2dyZXNzTnVtYmVyUmVmKSA9PiB7XG5cbiAgICBjb25zdCB0bCA9IGdzYXAudGltZWxpbmUoKVxuXG4gICAgdGwudG8ocHJvZ3Jlc3NSZWYuY3VycmVudCwge1xuICAgICAgICBzY2FsZVg6IDEsXG4gICAgICAgIGR1cmF0aW9uOiA1LFxuICAgICAgICBlYXNlOiBcInBvd2VyMy5pbk91dFwiLFxuXG4gICAgfSkudG8ocHJvZ3Jlc3NOdW1iZXJSZWYuY3VycmVudCwge1xuICAgICAgICB4OiBcIjEwMHZ3XCIsXG4gICAgICAgIGR1cmF0aW9uOiA1LFxuICAgICAgICBlYXNlOiBcInBvd2VyMy5pbk91dFwiXG4gICAgfSxcbiAgICAgICAgXCI8XCJcbiAgICApXG5cbiAgICByZXR1cm4gdGxcbn1cblxuZXhwb3J0IGNvbnN0IGNvbGxhcHNlV29yZHMgPSAobG9hZGVyUmVmKSA9PiB7XG4gICAgY29uc3QgdGwgPSBnc2FwLnRpbWVsaW5lKClcblxuICAgIHRsLnRvKGxvYWRlclJlZi5jdXJyZW50LCB7XG5cbiAgICAgICAgXCJjbGlwLXBhdGhcIjogXCJwb2x5Z29uKDAlIDUwJSwgMTAwJSA1MCUsIDEwMCUgNTAlLCAwJSA1MCUpXCIsXG4gICAgICAgIGR1cmF0aW9uOiAzLFxuICAgICAgICBlYXNlOiBcImV4cG8uaW5PdXRcIlxuXG4gICAgfSlcblxuICAgIHJldHVybiB0bFxufVxuXG4iXSwibmFtZXMiOlsiZ3NhcCIsImludHJvQW5pbWF0aW9uIiwid29yZEdyb3Vwc1JlZiIsInRsIiwidGltZWxpbmUiLCJ0byIsImN1cnJlbnQiLCJ5UGVyY2VudCIsImR1cmF0aW9uIiwiZWFzZSIsInByb2dyZXNzQW5pbWF0aW9uIiwicHJvZ3Jlc3NSZWYiLCJwcm9ncmVzc051bWJlclJlZiIsInNjYWxlWCIsIngiLCJjb2xsYXBzZVdvcmRzIiwibG9hZGVyUmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/components/Loader/animations.js\n"));

/***/ })

});