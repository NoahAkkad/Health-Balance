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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"53abbff472d2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ZDZkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjUzYWJiZmY0NzJkMlwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const LINKS = [\n        {\n            href: \"/description/description-a\",\n            text: \"Description-a\"\n        },\n        {\n            href: \"/description/description-b\",\n            text: \"Description-b\"\n        },\n        {\n            href: \"/description/description-c\",\n            text: \"Description-c\"\n        }\n    ];\n    const toggleMenu = ()=>{\n        setIsOpen(!isOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar bg-base-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"btn btn-ghost text-xl cursor-pointer\",\n                        children: \"HEALTH BALANCE\"\n                    }, void 0, false, {\n                        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"menu menu-horizontal px-1 overflow \".concat(isOpen ? \"menu-open\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"details\", {\n                                open: isOpen,\n                                onClick: toggleMenu,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"summary\", {\n                                        className: \"btn btn-ghost text-xl\",\n                                        \"aria-expanded\": isOpen,\n                                        \"aria-controls\": \"description-menu\",\n                                        children: \"DESCRIPTION\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                        className: \"p-2 bg-base-100 rounded-t-none\",\n                                        id: \"description-menu\",\n                                        children: LINKS.map((param)=>{\n                                            let { href, text } = param;\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                                    href: href,\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"btn-ghost rounded-lg font-bold block p-1 m-4 cursor-pointer\",\n                                                        onClick: ()=>setIsOpen(false),\n                                                        children: text\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                                        lineNumber: 37,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            }, href, false, {\n                                                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, undefined);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                href: \"/description/contact\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"btn btn-ghost text-xl cursor-pointer\",\n                                    children: \"CONTACT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/noahakkad/Projects/Health-Balance/src/components/Navbar.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUU2QjtBQUNXO0FBRXhDLE1BQU1HLFNBQVM7O0lBQ2IsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBRXJDLE1BQU1JLFFBQVE7UUFDWjtZQUFFQyxNQUFNO1lBQThCQyxNQUFNO1FBQWdCO1FBQzVEO1lBQUVELE1BQU07WUFBOEJDLE1BQU07UUFBZ0I7UUFDNUQ7WUFBRUQsTUFBTTtZQUE4QkMsTUFBTTtRQUFnQjtLQUM3RDtJQUVELE1BQU1DLGFBQWE7UUFDakJKLFVBQVUsQ0FBQ0Q7SUFDYjtJQUVBLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNYLGlEQUFJQTtvQkFBQ08sTUFBSzs4QkFDVCw0RUFBQ0s7d0JBQUtELFdBQVU7a0NBQXVDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUczRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFHRixXQUFXLHNDQUFnRSxPQUExQlAsU0FBUyxjQUFjOztzQ0FDMUUsOERBQUNVO3NDQUNDLDRFQUFDQztnQ0FBUUMsTUFBTVo7Z0NBQVFhLFNBQVNSOztrREFDOUIsOERBQUNTO3dDQUFRUCxXQUFVO3dDQUF3QlEsaUJBQWVmO3dDQUFRZ0IsaUJBQWM7a0RBQW1COzs7Ozs7a0RBR25HLDhEQUFDUDt3Q0FBR0YsV0FBVTt3Q0FBaUNVLElBQUc7a0RBQy9DZixNQUFNZ0IsR0FBRyxDQUFDO2dEQUFDLEVBQUVmLElBQUksRUFBRUMsSUFBSSxFQUFFO2lFQUN4Qiw4REFBQ007MERBQ0MsNEVBQUNkLGlEQUFJQTtvREFBQ08sTUFBTUE7OERBQ1YsNEVBQUNLO3dEQUFLRCxXQUFVO3dEQUE4RE0sU0FBUyxJQUFNWixVQUFVO2tFQUNwR0c7Ozs7Ozs7Ozs7OytDQUhFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FXakIsOERBQUNPO3NDQUNDLDRFQUFDZCxpREFBSUE7Z0NBQUNPLE1BQUs7MENBQ1QsNEVBQUNLO29DQUFLRCxXQUFVOzhDQUF1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JFO0dBakRNUjtLQUFBQTtBQW1ETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4PzlhNmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IExJTktTID0gW1xuICAgIHsgaHJlZjogXCIvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24tYVwiLCB0ZXh0OiBcIkRlc2NyaXB0aW9uLWFcIiB9LFxuICAgIHsgaHJlZjogXCIvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24tYlwiLCB0ZXh0OiBcIkRlc2NyaXB0aW9uLWJcIiB9LFxuICAgIHsgaHJlZjogXCIvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24tY1wiLCB0ZXh0OiBcIkRlc2NyaXB0aW9uLWNcIiB9LFxuICBdO1xuXG4gIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKCFpc09wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgYmctYmFzZS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXCI+SEVBTFRIIEJBTEFOQ0U8L3NwYW4+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTJcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17YG1lbnUgbWVudS1ob3Jpem9udGFsIHB4LTEgb3ZlcmZsb3cgJHtpc09wZW4gPyAnbWVudS1vcGVuJyA6ICcnfWB9PlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxkZXRhaWxzIG9wZW49e2lzT3Blbn0gb25DbGljaz17dG9nZ2xlTWVudX0+XG4gICAgICAgICAgICAgIDxzdW1tYXJ5IGNsYXNzTmFtZT1cImJ0biBidG4tZ2hvc3QgdGV4dC14bFwiIGFyaWEtZXhwYW5kZWQ9e2lzT3Blbn0gYXJpYS1jb250cm9scz1cImRlc2NyaXB0aW9uLW1lbnVcIj5cbiAgICAgICAgICAgICAgICBERVNDUklQVElPTlxuICAgICAgICAgICAgICA8L3N1bW1hcnk+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwLTIgYmctYmFzZS0xMDAgcm91bmRlZC10LW5vbmVcIiBpZD1cImRlc2NyaXB0aW9uLW1lbnVcIj5cbiAgICAgICAgICAgICAgICB7TElOS1MubWFwKCh7IGhyZWYsIHRleHQgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aHJlZn0+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi1naG9zdCByb3VuZGVkLWxnIGZvbnQtYm9sZCBibG9jayBwLTEgbS00IGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rlc2NyaXB0aW9uL2NvbnRhY3RcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXCI+Q09OVEFDVDwvc3Bhbj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJOYXZiYXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJMSU5LUyIsImhyZWYiLCJ0ZXh0IiwidG9nZ2xlTWVudSIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJ1bCIsImxpIiwiZGV0YWlscyIsIm9wZW4iLCJvbkNsaWNrIiwic3VtbWFyeSIsImFyaWEtZXhwYW5kZWQiLCJhcmlhLWNvbnRyb2xzIiwiaWQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Navbar.tsx\n"));

/***/ })

});