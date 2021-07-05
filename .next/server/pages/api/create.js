/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/create";
exports.ids = ["pages/api/create"];
exports.modules = {

/***/ "./pages/api/create.js":
/*!*****************************!*\
  !*** ./pages/api/create.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nconst exec = __webpack_require__(/*! child-process-promise */ \"child-process-promise\").exec;\n\nconst create_vm = (os, name) => {\n  // const cmd = 'ls'\n  let original = os === 'windows' ? 'guest-windows' : 'guest-linux';\n  const cmd = `virt-clone --original=${original} --name=${name} --auto-clone`;\n  return exec(cmd);\n};\n\nconst update_vm = (name, ip, ram, cpu) => {\n  const cmd = `virsh setvcpus ${name} ${cpu} --config &&` + ` virsh setmem ${name} ${ram} --config`;\n  return exec(cmd);\n};\n\nconst validateInputs = () => {\n  return true;\n};\n\nasync function handler(req, res) {\n  const request = req.body;\n  console.log(request);\n  console.log('criando');\n\n  try {\n    await create_vm(request.os, request.name);\n    await update_vm(request.name, 'ip', request.ram, request.cpu);\n    res.status(200).json({\n      success: true\n    });\n  } catch (error) {\n    res.status(400).json({\n      error: error\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdm0vLi9wYWdlcy9hcGkvY3JlYXRlLmpzPzE1OWEiXSwibmFtZXMiOlsiZXhlYyIsInJlcXVpcmUiLCJjcmVhdGVfdm0iLCJvcyIsIm5hbWUiLCJvcmlnaW5hbCIsImNtZCIsInVwZGF0ZV92bSIsImlwIiwicmFtIiwiY3B1IiwidmFsaWRhdGVJbnB1dHMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVxdWVzdCIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUEsTUFBTUEsSUFBSSxHQUFHQyw4RUFBYjs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQ0MsRUFBRCxFQUFLQyxJQUFMLEtBQWM7QUFDOUI7QUFDQSxNQUFJQyxRQUFRLEdBQUdGLEVBQUUsS0FBSyxTQUFQLEdBQW1CLGVBQW5CLEdBQXFDLGFBQXBEO0FBQ0EsUUFBTUcsR0FBRyxHQUFJLHlCQUF3QkQsUUFBUyxXQUFVRCxJQUFLLGVBQTdEO0FBQ0EsU0FBT0osSUFBSSxDQUFDTSxHQUFELENBQVg7QUFDRCxDQUxEOztBQU9BLE1BQU1DLFNBQVMsR0FBRyxDQUFDSCxJQUFELEVBQU9JLEVBQVAsRUFBV0MsR0FBWCxFQUFnQkMsR0FBaEIsS0FBd0I7QUFDeEMsUUFBTUosR0FBRyxHQUNOLGtCQUFpQkYsSUFBSyxJQUFHTSxHQUFJLGNBQTlCLEdBQ0MsaUJBQWdCTixJQUFLLElBQUdLLEdBQUksV0FGL0I7QUFHQSxTQUFPVCxJQUFJLENBQUNNLEdBQUQsQ0FBWDtBQUNELENBTEQ7O0FBT0EsTUFBTUssY0FBYyxHQUFHLE1BQU07QUFDM0IsU0FBTyxJQUFQO0FBQ0QsQ0FGRDs7QUFJZSxlQUFlQyxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDOUMsUUFBTUMsT0FBTyxHQUFHRixHQUFHLENBQUNHLElBQXBCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7O0FBQ0EsTUFBSTtBQUNGLFVBQU1oQixTQUFTLENBQUNhLE9BQU8sQ0FBQ1osRUFBVCxFQUFhWSxPQUFPLENBQUNYLElBQXJCLENBQWY7QUFDQSxVQUFNRyxTQUFTLENBQUNRLE9BQU8sQ0FBQ1gsSUFBVCxFQUFlLElBQWYsRUFBcUJXLE9BQU8sQ0FBQ04sR0FBN0IsRUFBa0NNLE9BQU8sQ0FBQ0wsR0FBMUMsQ0FBZjtBQUVBSSxPQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNELEdBTEQsQ0FLRSxPQUFPQyxLQUFQLEVBQWM7QUFDZFIsT0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUUsV0FBSyxFQUFFQTtBQUFULEtBQXJCO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jcmVhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuXG5jb25zdCBleGVjID0gcmVxdWlyZSgnY2hpbGQtcHJvY2Vzcy1wcm9taXNlJykuZXhlY1xuY29uc3QgY3JlYXRlX3ZtID0gKG9zLCBuYW1lKSA9PiB7XG4gIC8vIGNvbnN0IGNtZCA9ICdscydcbiAgbGV0IG9yaWdpbmFsID0gb3MgPT09ICd3aW5kb3dzJyA/ICdndWVzdC13aW5kb3dzJyA6ICdndWVzdC1saW51eCdcbiAgY29uc3QgY21kID0gYHZpcnQtY2xvbmUgLS1vcmlnaW5hbD0ke29yaWdpbmFsfSAtLW5hbWU9JHtuYW1lfSAtLWF1dG8tY2xvbmVgXG4gIHJldHVybiBleGVjKGNtZClcbn1cblxuY29uc3QgdXBkYXRlX3ZtID0gKG5hbWUsIGlwLCByYW0sIGNwdSkgPT4ge1xuICBjb25zdCBjbWQgPVxuICAgIGB2aXJzaCBzZXR2Y3B1cyAke25hbWV9ICR7Y3B1fSAtLWNvbmZpZyAmJmAgK1xuICAgIGAgdmlyc2ggc2V0bWVtICR7bmFtZX0gJHtyYW19IC0tY29uZmlnYFxuICByZXR1cm4gZXhlYyhjbWQpXG59XG5cbmNvbnN0IHZhbGlkYXRlSW5wdXRzID0gKCkgPT4ge1xuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSByZXEuYm9keVxuICBjb25zb2xlLmxvZyhyZXF1ZXN0KVxuICBjb25zb2xlLmxvZygnY3JpYW5kbycpXG4gIHRyeSB7XG4gICAgYXdhaXQgY3JlYXRlX3ZtKHJlcXVlc3Qub3MsIHJlcXVlc3QubmFtZSlcbiAgICBhd2FpdCB1cGRhdGVfdm0ocmVxdWVzdC5uYW1lLCAnaXAnLCByZXF1ZXN0LnJhbSwgcmVxdWVzdC5jcHUpXG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBlcnJvciB9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/create.js\n");

/***/ }),

/***/ "child-process-promise":
/*!****************************************!*\
  !*** external "child-process-promise" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("child-process-promise");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/create.js"));
module.exports = __webpack_exports__;

})();