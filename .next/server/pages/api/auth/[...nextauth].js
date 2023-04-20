"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/upstash-redis-adapter":
/*!***************************************************!*\
  !*** external "@next-auth/upstash-redis-adapter" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@next-auth/upstash-redis-adapter");

/***/ }),

/***/ "@upstash/redis":
/*!*********************************!*\
  !*** external "@upstash/redis" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@upstash/redis");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/upstash-redis-adapter */ \"@next-auth/upstash-redis-adapter\");\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"(api)/./app/lib/db.ts\");\n\n\n\nfunction getGoogleCredentials() {\n    const clientId = process.env.GOOGLE_CLIENT_ID;\n    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;\n    if (!clientId || clientId.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_ID\");\n    }\n    if (!clientSecret || clientSecret.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_SECRET\");\n    }\n    return {\n        clientId,\n        clientSecret\n    };\n}\nconst authOptions = {\n    adapter: (0,_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_1__.UpstashRedisAdapter)(_db__WEBPACK_IMPORTED_MODULE_2__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default()({\n            clientId: getGoogleCredentials().clientId,\n            clientSecret: getGoogleCredentials().clientSecret\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            const dbUser = await _db__WEBPACK_IMPORTED_MODULE_2__.db.get(`user:${token.id}`);\n            if (!dbUser) {\n                token.id = user.id;\n                return token;\n            }\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        },\n        async session ({ session , token  }) {\n            if (token) {\n                session.user.id = token.id, session.user.name = token.name, session.user.email = token.email, session.user.image = token.picture;\n            }\n            return session;\n        },\n        redirect () {\n            return \"/dashboard\";\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvbGliL2F1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3VEO0FBQ2dCO0FBQzdDO0FBRTFCLFNBQVNHLHVCQUF1QjtJQUM1QixNQUFNQyxXQUFXQyxRQUFRQyxHQUFHLENBQUNDLGdCQUFnQjtJQUM3QyxNQUFNQyxlQUFlSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtJQUVyRCxJQUFHLENBQUNMLFlBQVlBLFNBQVNNLE1BQU0sS0FBSyxHQUFFO1FBQ2xDLE1BQU0sSUFBSUMsTUFBTSw0QkFBMkI7SUFDL0MsQ0FBQztJQUNELElBQUcsQ0FBQ0gsZ0JBQWdCQSxhQUFhRSxNQUFNLEtBQUssR0FBRTtRQUMxQyxNQUFNLElBQUlDLE1BQU0sZ0NBQStCO0lBQ25ELENBQUM7SUFDRCxPQUFPO1FBQUNQO1FBQVVJO0lBQVk7QUFDbEM7QUFHTyxNQUFNSSxjQUErQjtJQUN4Q0MsU0FBU1oscUZBQW1CQSxDQUFDQyxtQ0FBRUE7SUFDL0JZLFNBQVM7UUFDTEMsVUFBVTtJQUNkO0lBQ0FDLE9BQU87UUFDSEMsUUFBUTtJQUNaO0lBQ0FDLFdBQVc7UUFDUGxCLGlFQUFjQSxDQUFDO1lBQ1hJLFVBQVVELHVCQUF1QkMsUUFBUTtZQUN6Q0ksY0FBY0wsdUJBQXVCSyxZQUFZO1FBQ3JEO0tBQ0g7SUFDRFcsV0FBVztRQUNQLE1BQU1DLEtBQUksRUFBQ0MsTUFBSyxFQUFFQyxLQUFJLEVBQUMsRUFBRTtZQUNyQixNQUFNQyxTQUFVLE1BQU1yQix1Q0FBTSxDQUFDLENBQUMsS0FBSyxFQUFFbUIsTUFBTUksRUFBRSxDQUFDLENBQUM7WUFFL0MsSUFBRyxDQUFDRixRQUFRO2dCQUNSRixNQUFNSSxFQUFFLEdBQUdILEtBQU1HLEVBQUU7Z0JBQ25CLE9BQU9KO1lBQ1gsQ0FBQztZQUVELE9BQU87Z0JBQ0hJLElBQUlGLE9BQU9FLEVBQUU7Z0JBQ2JDLE1BQU1ILE9BQU9HLElBQUk7Z0JBQ2pCQyxPQUFPSixPQUFPSSxLQUFLO2dCQUNuQkMsU0FBU0wsT0FBT00sS0FBSztZQUN6QjtRQUNKO1FBQ0EsTUFBTWYsU0FBUSxFQUFDQSxRQUFPLEVBQUVPLE1BQUssRUFBQyxFQUFFO1lBQzVCLElBQUdBLE9BQU87Z0JBQ05QLFFBQVFRLElBQUksQ0FBQ0csRUFBRSxHQUFHSixNQUFNSSxFQUFFLEVBQzFCWCxRQUFRUSxJQUFJLENBQUNJLElBQUksR0FBR0wsTUFBTUssSUFBSSxFQUM5QlosUUFBUVEsSUFBSSxDQUFDSyxLQUFLLEdBQUdOLE1BQU1NLEtBQUssRUFDaENiLFFBQVFRLElBQUksQ0FBQ08sS0FBSyxHQUFHUixNQUFNTyxPQUFPO1lBQ3RDLENBQUM7WUFDRCxPQUFPZDtRQUNYO1FBQ0FnQixZQUFXO1lBQ1AsT0FBTztRQUNYO0lBQ0o7QUFFSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmUtY2hhdC1wcm9qZWN0Ly4vYXBwL2xpYi9hdXRoLnRzPzZiZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuaW1wb3J0IHsgVXBzdGFzaFJlZGlzQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3Vwc3Rhc2gtcmVkaXMtYWRhcHRlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuXG5mdW5jdGlvbiBnZXRHb29nbGVDcmVkZW50aWFscygpIHsgLy9FbnN1cmUgR29vZ2xlIGNyZWRlbnRpYWxzIGFyZSBncmFiYmVkIGJlZm9yZSB1c2luZyAoZ29vZCBwcmFjdGljZSlcbiAgICBjb25zdCBjbGllbnRJZCA9IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSURcbiAgICBjb25zdCBjbGllbnRTZWNyZXQgPSBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxuXG4gICAgaWYoIWNsaWVudElkIHx8IGNsaWVudElkLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBHT09HTEVfQ0xJRU5UX0lEJylcbiAgICB9XG4gICAgaWYoIWNsaWVudFNlY3JldCB8fCBjbGllbnRTZWNyZXQubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIEdPT0dMRV9DTElFTlRfU0VDUkVUJylcbiAgICB9XG4gICAgcmV0dXJuIHtjbGllbnRJZCwgY2xpZW50U2VjcmV0fVxufVxuXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICAgIGFkYXB0ZXI6IFVwc3Rhc2hSZWRpc0FkYXB0ZXIoZGIpLFxuICAgIHNlc3Npb246IHtcbiAgICAgICAgc3RyYXRlZ3k6ICdqd3QnXG4gICAgfSxcbiAgICBwYWdlczoge1xuICAgICAgICBzaWduSW46ICcvbG9naW4nXG4gICAgfSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IGdldEdvb2dsZUNyZWRlbnRpYWxzKCkuY2xpZW50SWQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IGdldEdvb2dsZUNyZWRlbnRpYWxzKCkuY2xpZW50U2VjcmV0XG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIGp3dCh7dG9rZW4sIHVzZXJ9KSB7IC8vcmV0cmVpdmVzIHVzZXIgaW5mbyBmcm9tIGp3dFxuICAgICAgICAgICAgY29uc3QgZGJVc2VyID0gKGF3YWl0IGRiLmdldChgdXNlcjoke3Rva2VuLmlkfWApKSBhcyBVc2VyIHwgbnVsbFxuXG4gICAgICAgICAgICBpZighZGJVc2VyKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4uaWQgPSB1c2VyIS5pZFxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBkYlVzZXIuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogZGJVc2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGRiVXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiBkYlVzZXIuaW1hZ2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb24sIHRva2VufSkgeyAvL0NoZWNrcyBmb3IgdG9rZW4gYW5kIGFzc2lnbnMgdG8gc2Vlc2lvbiBpbmZvcm1hdGlvblxuICAgICAgICAgICAgaWYodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZCxcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWUsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmVtYWlsID0gdG9rZW4uZW1haWwsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmltYWdlID0gdG9rZW4ucGljdHVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0KCkge1xuICAgICAgICAgICAgcmV0dXJuICcvZGFzaGJvYXJkJ1xuICAgICAgICB9XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIkdvb2dsZVByb3ZpZGVyIiwiVXBzdGFzaFJlZGlzQWRhcHRlciIsImRiIiwiZ2V0R29vZ2xlQ3JlZGVudGlhbHMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJsZW5ndGgiLCJFcnJvciIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwicHJvdmlkZXJzIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ1c2VyIiwiZGJVc2VyIiwiZ2V0IiwiaWQiLCJuYW1lIiwiZW1haWwiLCJwaWN0dXJlIiwiaW1hZ2UiLCJyZWRpcmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./app/lib/auth.ts\n");

/***/ }),

/***/ "(api)/./app/lib/db.ts":
/*!***********************!*\
  !*** ./app/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @upstash/redis */ \"@upstash/redis\");\n/* harmony import */ var _upstash_redis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_upstash_redis__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new _upstash_redis__WEBPACK_IMPORTED_MODULE_0__.Redis({\n    url: process.env.UPSTASH_REDIS_REST_URL,\n    token: process.env.UPSTASH_REDIS_REST_TOKEN\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvbGliL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUc3QixNQUFNQyxLQUFLLElBQUlELGlEQUFLQSxDQUFDO0lBQ3hCRSxLQUFLQyxRQUFRQyxHQUFHLENBQUNDLHNCQUFzQjtJQUN2Q0MsT0FBT0gsUUFBUUMsR0FBRyxDQUFDRyx3QkFBd0I7QUFDL0MsR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3JlLWNoYXQtcHJvamVjdC8uL2FwcC9saWIvZGIudHM/NThmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlZGlzfSBmcm9tIFwiQHVwc3Rhc2gvcmVkaXNcIlxuXG5cbmV4cG9ydCBjb25zdCBkYiA9IG5ldyBSZWRpcyh7XG4gICAgdXJsOiBwcm9jZXNzLmVudi5VUFNUQVNIX1JFRElTX1JFU1RfVVJMLFxuICAgIHRva2VuOiBwcm9jZXNzLmVudi5VUFNUQVNIX1JFRElTX1JFU1RfVE9LRU5cbn0pIl0sIm5hbWVzIjpbIlJlZGlzIiwiZGIiLCJ1cmwiLCJwcm9jZXNzIiwiZW52IiwiVVBTVEFTSF9SRURJU19SRVNUX1VSTCIsInRva2VuIiwiVVBTVEFTSF9SRURJU19SRVNUX1RPS0VOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./app/lib/db.ts\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _app_lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/auth */ \"(api)/./app/lib/auth.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_1___default()(_app_lib_auth__WEBPACK_IMPORTED_MODULE_0__.authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNEM7QUFDUDtBQUVyQyxpRUFBZUMscURBQVFBLENBQUNELHNEQUFXQSxDQUFDQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmUtY2hhdC1wcm9qZWN0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9hcHAvbGliL2F1dGgnXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoL25leHQnXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKSJdLCJuYW1lcyI6WyJhdXRoT3B0aW9ucyIsIk5leHRBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();