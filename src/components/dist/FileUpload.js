"use strict";
exports.__esModule = true;
exports.FileUpload = void 0;
var react_1 = require("react");
exports.FileUpload = function (_a) {
    var handleFile = _a.handleFile;
    var hiddenFileInput = react_1.useRef(null);
    var handleClick = function (event) {
        hiddenFileInput.current.click();
    };
    var handleChange = function (event) {
        var fileUploaded = event.target.files[0];
        handleFile(fileUploaded);
    };
    return (React.createElement("div", null,
        React.createElement("button", { className: "button-upload", onClick: handleClick }, "Upload a file"),
        React.createElement("input", { type: "file", onChange: handleChange, ref: hiddenFileInput, style: { display: 'none' } })));
};
exports["default"] = exports.FileUpload;
