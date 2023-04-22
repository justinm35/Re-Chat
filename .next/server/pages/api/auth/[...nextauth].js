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

/***/ "(api)/./app/helpers/redis.ts":
/*!******************************!*\
  !*** ./app/helpers/redis.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchRedis\": () => (/* binding */ fetchRedis)\n/* harmony export */ });\nconst upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;\nconst authToken = process.env.UPSTASH_REDIS_REST_TOKEN;\n//Use this function to make any requests to the UpStash Redis db\nasync function fetchRedis(command, ...args) {\n    const commandUrl = `${upstashRedisRestUrl}/${command}/${args.join(\"/\")}`;\n    const response = await fetch(commandUrl, {\n        headers: {\n            Authorization: `Bearer ${authToken}`\n        },\n        cache: \"no-store\"\n    });\n    if (!response.ok) {\n        throw new Error(`Error executing Redis command: ${response.statusText}`);\n    }\n    const data = await response.json();\n    return data.result;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvaGVscGVycy9yZWRpcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsc0JBQXNCQyxRQUFRQyxHQUFHLENBQUNDLHNCQUFzQjtBQUM5RCxNQUFNQyxZQUFZSCxRQUFRQyxHQUFHLENBQUNHLHdCQUF3QjtBQUt0RCxnRUFBZ0U7QUFDekQsZUFBZUMsV0FBV0MsT0FBZ0IsRUFBRSxHQUFHQyxJQUEwQixFQUFFO0lBQzlFLE1BQU1DLGFBQWEsQ0FBQyxFQUFFVCxvQkFBb0IsQ0FBQyxFQUFFTyxRQUFRLENBQUMsRUFBRUMsS0FBS0UsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN4RSxNQUFNQyxXQUFXLE1BQU1DLE1BQU1ILFlBQVk7UUFDckNJLFNBQVM7WUFDTEMsZUFBZSxDQUFDLE9BQU8sRUFBRVYsVUFBVSxDQUFDO1FBQ3hDO1FBQ0FXLE9BQU87SUFDWDtJQUNBLElBQUcsQ0FBQ0osU0FBU0ssRUFBRSxFQUFDO1FBQ1osTUFBTSxJQUFJQyxNQUFNLENBQUMsK0JBQStCLEVBQUVOLFNBQVNPLFVBQVUsQ0FBQyxDQUFDLEVBQUM7SUFDNUUsQ0FBQztJQUVELE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtJQUNoQyxPQUFPRCxLQUFLRSxNQUFNO0FBQ3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZS1jaGF0LXByb2plY3QvLi9hcHAvaGVscGVycy9yZWRpcy50cz9mODFjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHVwc3Rhc2hSZWRpc1Jlc3RVcmwgPSBwcm9jZXNzLmVudi5VUFNUQVNIX1JFRElTX1JFU1RfVVJMXG5jb25zdCBhdXRoVG9rZW4gPSBwcm9jZXNzLmVudi5VUFNUQVNIX1JFRElTX1JFU1RfVE9LRU5cblxudHlwZSBDb21tYW5kID0gJ3pyYW5nZScgfCAnc2lzbWVtYmVyJyB8ICdnZXQnIHwgJ3NtZW1iZXJzJ1xuXG5cbi8vVXNlIHRoaXMgZnVuY3Rpb24gdG8gbWFrZSBhbnkgcmVxdWVzdHMgdG8gdGhlIFVwU3Rhc2ggUmVkaXMgZGJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFJlZGlzKGNvbW1hbmQ6IENvbW1hbmQsIC4uLmFyZ3M6ICAoc3RyaW5nIHwgbnVtYmVyKVtdKSB7XG4gICAgY29uc3QgY29tbWFuZFVybCA9IGAke3Vwc3Rhc2hSZWRpc1Jlc3RVcmx9LyR7Y29tbWFuZH0vJHthcmdzLmpvaW4oJy8nKX1gXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb21tYW5kVXJsICx7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRoVG9rZW59YFxuICAgICAgICB9LFxuICAgICAgICBjYWNoZTogJ25vLXN0b3JlJyxcbiAgICB9KVxuICAgIGlmKCFyZXNwb25zZS5vayl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3IgZXhlY3V0aW5nIFJlZGlzIGNvbW1hbmQ6ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKVxuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4gZGF0YS5yZXN1bHRcbn0iXSwibmFtZXMiOlsidXBzdGFzaFJlZGlzUmVzdFVybCIsInByb2Nlc3MiLCJlbnYiLCJVUFNUQVNIX1JFRElTX1JFU1RfVVJMIiwiYXV0aFRva2VuIiwiVVBTVEFTSF9SRURJU19SRVNUX1RPS0VOIiwiZmV0Y2hSZWRpcyIsImNvbW1hbmQiLCJhcmdzIiwiY29tbWFuZFVybCIsImpvaW4iLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjYWNoZSIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiZGF0YSIsImpzb24iLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./app/helpers/redis.ts\n");

/***/ }),

/***/ "(api)/./app/lib/auth.ts":
/*!*************************!*\
  !*** ./app/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/upstash-redis-adapter */ \"@next-auth/upstash-redis-adapter\");\n/* harmony import */ var _next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./db */ \"(api)/./app/lib/db.ts\");\n/* harmony import */ var _helpers_redis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/redis */ \"(api)/./app/helpers/redis.ts\");\n\n\n\n\nfunction getGoogleCredentials() {\n    const clientId = process.env.GOOGLE_CLIENT_ID;\n    const clientSecret = process.env.GOOGLE_CLIENT_SECRET;\n    if (!clientId || clientId.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_ID\");\n    }\n    if (!clientSecret || clientSecret.length === 0) {\n        throw new Error(\"Missing GOOGLE_CLIENT_SECRET\");\n    }\n    return {\n        clientId,\n        clientSecret\n    };\n}\nconst authOptions = {\n    adapter: (0,_next_auth_upstash_redis_adapter__WEBPACK_IMPORTED_MODULE_1__.UpstashRedisAdapter)(_db__WEBPACK_IMPORTED_MODULE_2__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default()({\n            clientId: getGoogleCredentials().clientId,\n            clientSecret: getGoogleCredentials().clientSecret\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , user  }) {\n            const dbUserResult = await (0,_helpers_redis__WEBPACK_IMPORTED_MODULE_3__.fetchRedis)(\"get\", `user:${token.id}`);\n            if (!dbUserResult) {\n                token.id = user.id;\n                return token;\n            }\n            const dbUser = JSON.parse(dbUserResult);\n            return {\n                id: dbUser.id,\n                name: dbUser.name,\n                email: dbUser.email,\n                picture: dbUser.image\n            };\n        },\n        async session ({ session , token  }) {\n            if (token) {\n                session.user.id = token.id, session.user.name = token.name, session.user.email = token.email, session.user.image = token.picture;\n            }\n            return session;\n        },\n        redirect () {\n            return \"/dashboard\";\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvbGliL2F1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN1RDtBQUNnQjtBQUM3QztBQUNvQjtBQUU5QyxTQUFTSSx1QkFBdUI7SUFDNUIsTUFBTUMsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7SUFDN0MsTUFBTUMsZUFBZUgsUUFBUUMsR0FBRyxDQUFDRyxvQkFBb0I7SUFFckQsSUFBRyxDQUFDTCxZQUFZQSxTQUFTTSxNQUFNLEtBQUssR0FBRTtRQUNsQyxNQUFNLElBQUlDLE1BQU0sNEJBQTJCO0lBQy9DLENBQUM7SUFDRCxJQUFHLENBQUNILGdCQUFnQkEsYUFBYUUsTUFBTSxLQUFLLEdBQUU7UUFDMUMsTUFBTSxJQUFJQyxNQUFNLGdDQUErQjtJQUNuRCxDQUFDO0lBQ0QsT0FBTztRQUFDUDtRQUFVSTtJQUFZO0FBQ2xDO0FBR08sTUFBTUksY0FBK0I7SUFDeENDLFNBQVNiLHFGQUFtQkEsQ0FBQ0MsbUNBQUVBO0lBQy9CYSxTQUFTO1FBQ0xDLFVBQVU7SUFDZDtJQUNBQyxPQUFPO1FBQ0hDLFFBQVE7SUFDWjtJQUNBQyxXQUFXO1FBQ1BuQixpRUFBY0EsQ0FBQztZQUNYSyxVQUFVRCx1QkFBdUJDLFFBQVE7WUFDekNJLGNBQWNMLHVCQUF1QkssWUFBWTtRQUNyRDtLQUNIO0lBQ0RXLFdBQVc7UUFDUCxNQUFNQyxLQUFJLEVBQUNDLE1BQUssRUFBRUMsS0FBSSxFQUFDLEVBQUU7WUFDckIsTUFBTUMsZUFBZ0IsTUFBTXJCLDBEQUFVQSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUVtQixNQUFNRyxFQUFFLENBQUMsQ0FBQztZQUVoRSxJQUFHLENBQUNELGNBQWM7Z0JBQ2RGLE1BQU1HLEVBQUUsR0FBR0YsS0FBTUUsRUFBRTtnQkFDbkIsT0FBT0g7WUFDWCxDQUFDO1lBRUQsTUFBTUksU0FBU0MsS0FBS0MsS0FBSyxDQUFDSjtZQUUxQixPQUFPO2dCQUNIQyxJQUFJQyxPQUFPRCxFQUFFO2dCQUNiSSxNQUFNSCxPQUFPRyxJQUFJO2dCQUNqQkMsT0FBT0osT0FBT0ksS0FBSztnQkFDbkJDLFNBQVNMLE9BQU9NLEtBQUs7WUFDekI7UUFDSjtRQUNBLE1BQU1qQixTQUFRLEVBQUNBLFFBQU8sRUFBRU8sTUFBSyxFQUFDLEVBQUU7WUFDNUIsSUFBR0EsT0FBTztnQkFDTlAsUUFBUVEsSUFBSSxDQUFDRSxFQUFFLEdBQUdILE1BQU1HLEVBQUUsRUFDMUJWLFFBQVFRLElBQUksQ0FBQ00sSUFBSSxHQUFHUCxNQUFNTyxJQUFJLEVBQzlCZCxRQUFRUSxJQUFJLENBQUNPLEtBQUssR0FBR1IsTUFBTVEsS0FBSyxFQUNoQ2YsUUFBUVEsSUFBSSxDQUFDUyxLQUFLLEdBQUdWLE1BQU1TLE9BQU87WUFDdEMsQ0FBQztZQUNELE9BQU9oQjtRQUNYO1FBQ0FrQixZQUFXO1lBQ1AsT0FBTztRQUNYO0lBQ0o7QUFFSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmUtY2hhdC1wcm9qZWN0Ly4vYXBwL2xpYi9hdXRoLnRzPzZiZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuaW1wb3J0IHsgVXBzdGFzaFJlZGlzQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3Vwc3Rhc2gtcmVkaXMtYWRhcHRlclwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgZmV0Y2hSZWRpcyB9IGZyb20gXCIuLi9oZWxwZXJzL3JlZGlzXCI7XG5cbmZ1bmN0aW9uIGdldEdvb2dsZUNyZWRlbnRpYWxzKCkgeyAvL0Vuc3VyZSBHb29nbGUgY3JlZGVudGlhbHMgYXJlIGdyYWJiZWQgYmVmb3JlIHVzaW5nIChnb29kIHByYWN0aWNlKVxuICAgIGNvbnN0IGNsaWVudElkID0gcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRFxuICAgIGNvbnN0IGNsaWVudFNlY3JldCA9IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUXG5cbiAgICBpZighY2xpZW50SWQgfHwgY2xpZW50SWQubGVuZ3RoID09PSAwKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIEdPT0dMRV9DTElFTlRfSUQnKVxuICAgIH1cbiAgICBpZighY2xpZW50U2VjcmV0IHx8IGNsaWVudFNlY3JldC5sZW5ndGggPT09IDApe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgR09PR0xFX0NMSUVOVF9TRUNSRVQnKVxuICAgIH1cbiAgICByZXR1cm4ge2NsaWVudElkLCBjbGllbnRTZWNyZXR9XG59XG5cblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gICAgYWRhcHRlcjogVXBzdGFzaFJlZGlzQWRhcHRlcihkYiksXG4gICAgc2Vzc2lvbjoge1xuICAgICAgICBzdHJhdGVneTogJ2p3dCdcbiAgICB9LFxuICAgIHBhZ2VzOiB7XG4gICAgICAgIHNpZ25JbjogJy9sb2dpbidcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogZ2V0R29vZ2xlQ3JlZGVudGlhbHMoKS5jbGllbnRJZCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogZ2V0R29vZ2xlQ3JlZGVudGlhbHMoKS5jbGllbnRTZWNyZXRcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgYXN5bmMgand0KHt0b2tlbiwgdXNlcn0pIHsgLy9yZXRyZWl2ZXMgdXNlciBpbmZvIGZyb20gand0XG4gICAgICAgICAgICBjb25zdCBkYlVzZXJSZXN1bHQgPSAoYXdhaXQgZmV0Y2hSZWRpcygnZ2V0JywgYHVzZXI6JHt0b2tlbi5pZH1gKSkgYXMgc3RyaW5nIHwgbnVsbFxuXG4gICAgICAgICAgICBpZighZGJVc2VyUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdG9rZW4uaWQgPSB1c2VyIS5pZFxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYlVzZXIgPSBKU09OLnBhcnNlKGRiVXNlclJlc3VsdCkgYXMgVXNlclxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBkYlVzZXIuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogZGJVc2VyLm5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IGRiVXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiBkYlVzZXIuaW1hZ2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb24sIHRva2VufSkgeyAvL0NoZWNrcyBmb3IgdG9rZW4gYW5kIGFzc2lnbnMgdG8gc2Vlc2lvbiBpbmZvcm1hdGlvblxuICAgICAgICAgICAgaWYodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZCxcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWUsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmVtYWlsID0gdG9rZW4uZW1haWwsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmltYWdlID0gdG9rZW4ucGljdHVyZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0KCkge1xuICAgICAgICAgICAgcmV0dXJuICcvZGFzaGJvYXJkJ1xuICAgICAgICB9XG4gICAgfVxuXG59Il0sIm5hbWVzIjpbIkdvb2dsZVByb3ZpZGVyIiwiVXBzdGFzaFJlZGlzQWRhcHRlciIsImRiIiwiZmV0Y2hSZWRpcyIsImdldEdvb2dsZUNyZWRlbnRpYWxzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwibGVuZ3RoIiwiRXJyb3IiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsInByb3ZpZGVycyIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImRiVXNlclJlc3VsdCIsImlkIiwiZGJVc2VyIiwiSlNPTiIsInBhcnNlIiwibmFtZSIsImVtYWlsIiwicGljdHVyZSIsImltYWdlIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./app/lib/auth.ts\n");

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