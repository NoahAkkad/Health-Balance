"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8f08d60e98b2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDZkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjhmMDhkNjBlOThiMlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const LINKS = [\n        {\n            href: \"/description/description-a\",\n            text: \"Description-a\"\n        },\n        {\n            href: \"/description/description-b\",\n            text: \"Description-b\"\n        },\n        {\n            href: \"/description/description-c\",\n            text: \"Description-c\"\n        }\n    ];\n    const toggleMenu = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-base-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"btn btn-ghost text-xl\",\n                        children: \"HEALTH BALANCE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"menu menu-horizontal px-1 overflow \".concat(isOpen ? \"menu-open\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                                open: isOpen,\n                                onClick: toggleMenu,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                        className: \"btn btn-ghost text-xl\",\n                                        \"aria-expanded\": isOpen,\n                                        \"aria-controls\": \"description-menu\",\n                                        children: \"DESCRIPTION\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"p-2 bg-base-100 rounded-t-none\",\n                                        id: \"description-menu\",\n                                        children: LINKS.map((param)=>{\n                                            let { href, text } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    href: href,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        className: \"btn-ghost rounded-lg font-bold block p-1 m-4\",\n                                                        onClick: ()=>setIsOpen(false),\n                                                        children: text\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                                        lineNumber: 36,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, href, false, {\n                                                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 19\n                                            }, undefined);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/description/contact\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"btn btn-ghost text-xl\",\n                                    children: \"CONTACT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUM2QjtBQUNXO0FBRXhDLE1BQU1HLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1JLFFBQVE7UUFDWjtZQUFFQyxNQUFNO1lBQThCQyxNQUFNO1FBQWdCO1FBQzVEO1lBQUVELE1BQU07WUFBOEJDLE1BQU07UUFBZ0I7UUFDNUQ7WUFBRUQsTUFBTTtZQUE4QkMsTUFBTTtRQUFnQjtLQUM3RDtJQUVELE1BQU1DLGFBQWE7UUFDakJKLFVBQVUsQ0FBQ0Q7SUFDYjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNYLGlEQUFJQTtvQkFBQ08sTUFBSzs4QkFDVCw0RUFBQ0s7d0JBQUVELFdBQVU7a0NBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUd6Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFHRixXQUFXLHNDQUFnRSxPQUExQlAsU0FBUyxjQUFjOztzQ0FDMUUsOERBQUNVO3NDQUNDLDRFQUFDQztnQ0FBUUMsTUFBTVo7Z0NBQVFhLFNBQVNSOztrREFDOUIsOERBQUNTO3dDQUFRUCxXQUFVO3dDQUF3QlEsaUJBQWVmO3dDQUFRZ0IsaUJBQWM7a0RBQW1COzs7Ozs7a0RBR25HLDhEQUFDUDt3Q0FBR0YsV0FBVTt3Q0FBaUNVLElBQUc7a0RBQy9DZixNQUFNZ0IsR0FBRyxDQUFDO2dEQUFDLEVBQUVmLElBQUksRUFBRUMsSUFBSSxFQUFFO2lFQUN4Qiw4REFBQ007MERBQ0MsNEVBQUNkLGlEQUFJQTtvREFBQ08sTUFBTUE7OERBQ1YsNEVBQUNLO3dEQUFFRCxXQUFVO3dEQUErQ00sU0FBUyxJQUFNWixVQUFVO2tFQUNsRkc7Ozs7Ozs7Ozs7OytDQUhFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FXakIsOERBQUNPO3NDQUNDLDRFQUFDZCxpREFBSUE7Z0NBQUNPLE1BQUs7MENBQ1QsNEVBQUNLO29DQUFFRCxXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25EO0dBakRNUjtLQUFBQTtBQW1ETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4PzlhNmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBMSU5LUyA9IFtcbiAgICB7IGhyZWY6IFwiL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLWFcIiwgdGV4dDogXCJEZXNjcmlwdGlvbi1hXCIgfSxcbiAgICB7IGhyZWY6IFwiL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLWJcIiwgdGV4dDogXCJEZXNjcmlwdGlvbi1iXCIgfSxcbiAgICB7IGhyZWY6IFwiL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLWNcIiwgdGV4dDogXCJEZXNjcmlwdGlvbi1jXCIgfSxcbiAgXTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4ge1xuICAgIHNldElzT3BlbighaXNPcGVuKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyIGJnLWJhc2UtMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC14bFwiPkhFQUxUSCBCQUxBTkNFPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0yXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e2BtZW51IG1lbnUtaG9yaXpvbnRhbCBweC0xIG92ZXJmbG93ICR7aXNPcGVuID8gJ21lbnUtb3BlbicgOiAnJ31gfT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8ZGV0YWlscyBvcGVuPXtpc09wZW59IG9uQ2xpY2s9e3RvZ2dsZU1lbnV9PlxuICAgICAgICAgICAgICA8c3VtbWFyeSBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IHRleHQteGxcIiBhcmlhLWV4cGFuZGVkPXtpc09wZW59IGFyaWEtY29udHJvbHM9XCJkZXNjcmlwdGlvbi1tZW51XCI+XG4gICAgICAgICAgICAgICAgREVTQ1JJUFRJT05cbiAgICAgICAgICAgICAgPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicC0yIGJnLWJhc2UtMTAwIHJvdW5kZWQtdC1ub25lXCIgaWQ9XCJkZXNjcmlwdGlvbi1tZW51XCI+XG4gICAgICAgICAgICAgICAge0xJTktTLm1hcCgoeyBocmVmLCB0ZXh0IH0pID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2hyZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfT5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4tZ2hvc3Qgcm91bmRlZC1sZyBmb250LWJvbGQgYmxvY2sgcC0xIG0tNFwiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kZXNjcmlwdGlvbi9jb250YWN0XCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC14bFwiPkNPTlRBQ1Q8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiTElOS1MiLCJocmVmIiwidGV4dCIsInRvZ2dsZU1lbnUiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwidWwiLCJsaSIsImRldGFpbHMiLCJvcGVuIiwib25DbGljayIsInN1bW1hcnkiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1jb250cm9scyIsImlkIiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.tsx\n"));

/***/ })

});