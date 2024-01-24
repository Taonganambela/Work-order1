"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var FileUploadOutlined_1 = require("@mui/icons-material/FileUploadOutlined");
var Multiple_1 = require("../components/Multiple");
var material_1 = require("@mui/material");
var DatePicker_1 = require("./DatePicker");
// #2bb359-green
// #9333ea-purple
var WorkOrder = function () {
    var _a = react_1["default"].useState([]), myArray = _a[0], setMyArray = _a[1];
    var _b = react_1["default"].useState(""), elements = _b[0], setElements = _b[1];
    var _c = react_2.useState(null), selectedFile = _c[0], setSelectedFile = _c[1];
    var _d = react_2.useState("No File"), fileName = _d[0], setFileName = _d[1];
    var handleFileChange = function (event) {
        var file = event.target.files[0];
        setSelectedFile(file);
    };
    react_1["default"].useEffect(function () {
        console.log(selectedFile);
        setFileName(selectedFile ? selectedFile.name : "  No File Selected");
    }, [selectedFile]);
    var _e = react_2.useState({
        elements: "",
        level: "",
        duration: "",
        nature: "",
        date: "",
        time: "",
        section: "",
        test: "",
        manager: "",
        uploadDoc: ""
    }), formData = _e[0], setFormData = _e[1];
    react_1["default"].useEffect(function () {
        console.log(myArray);
    }, [myArray]);
    if (elements) {
        if (!myArray.includes(elements)) {
            setMyArray(__spreadArrays(myArray, [elements]));
        }
    }
    react_1.useEffect(function () {
        console.log(formData);
    }, [formData]);
    return (react_1["default"].createElement("div", { className: "p-4" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "border-2 border-[#9333ea] mt-4 p-2 rounded-lg w-64" },
                react_1["default"].createElement("h4", { className: "text-center" }, "Work Order Request")),
            react_1["default"].createElement("div", { className: "border-2 border-[#2bb359]  w-full mt-4 rounded-lg p-3" },
                react_1["default"].createElement("div", { className: "" },
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement(Multiple_1["default"], null),
                        " "),
                    react_1["default"].createElement("div", { className: "w-75% flex mt-4" },
                        react_1["default"].createElement("div", { className: "inline-block mr-16 " },
                            react_1["default"].createElement(material_1.InputLabel, null, "Impact Level"),
                            react_1["default"].createElement(material_1.Select, { className: "w-48", name: "level", value: formData.level, onChange: function (e) {
                                    var newObj = __assign(__assign({}, formData), { level: e.target.value });
                                    setFormData(newObj);
                                } },
                                react_1["default"].createElement(material_1.MenuItem, { value: "low" }, "Low"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "Medium" }, "Medium"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "high" }, "High"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "critical" }, "Critical"))),
                        react_1["default"].createElement("div", { className: "inline-block mr-16" },
                            react_1["default"].createElement(material_1.InputLabel, null, "Impact Duration"),
                            react_1["default"].createElement(material_1.Select, { className: " w-48", name: "duration", value: formData.duration, onChange: function (e) {
                                    var newObj = __assign(__assign({}, formData), { duration: e.target.value });
                                    setFormData(newObj);
                                } },
                                react_1["default"].createElement(material_1.MenuItem, { value: "2 Hrs" }, "2 Hr(s)"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "4 Hrs" }, "4 Hr(s)"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "6 Hrs" }, "6 Hr(s)"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "8 Hrs" }, "8 Hr(s)"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "10 Hrs" }, "10 Hr(s)"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "12 Hrs" }, "12 Hr(s)"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "14 Hrs" }, "14 Hr(s)"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "20 Hrs" }, "20 Hr(s)"))),
                        react_1["default"].createElement("div", { className: "inline-block mr-16" },
                            react_1["default"].createElement(material_1.InputLabel, null, "Nature of work"),
                            react_1["default"].createElement(material_1.TextField, { type: "Text", name: "nature", className: "w-48", value: formData.nature, onChange: function (e) {
                                    var newObj = __assign(__assign({}, formData), { nature: e.target.value });
                                    setFormData(newObj);
                                } })),
                        react_1["default"].createElement("div", { className: "inline-block" },
                            react_1["default"].createElement(material_1.InputLabel, null, "Execution Date"),
                            react_1["default"].createElement(DatePicker_1["default"], { title: "", dateType: "" }))),
                    react_1["default"].createElement("div", { className: "w-full flex mt-3" },
                        react_1["default"].createElement("div", { className: "inline-block  mr-14" },
                            react_1["default"].createElement(material_1.InputLabel, null, "Execution time"),
                            react_1["default"].createElement(material_1.TextField, { type: "time", className: "border-2 rounded-lg border-black w-48 ", value: formData.time, onChange: function (e) {
                                    var newObj = __assign(__assign({}, formData), { time: e.target.value });
                                    setFormData(newObj);
                                } })),
                        react_1["default"].createElement("div", { className: "inline-block " },
                            react_1["default"].createElement(material_1.InputLabel, null, "Execution section"),
                            react_1["default"].createElement(material_1.Select, { className: "w-80 ", name: "section", value: formData.section, onChange: function (e) {
                                    var newObj = __assign(__assign({}, formData), { section: e.target.value });
                                    setFormData(newObj);
                                } },
                                react_1["default"].createElement(material_1.MenuItem, { value: "low" }, "Low"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "Medium" }, "Medium"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "high" }, "High"),
                                react_1["default"].createElement(material_1.MenuItem, { value: "critical" }, "Critical")))),
                    react_1["default"].createElement("div", { className: "mt-4" },
                        react_1["default"].createElement(material_1.InputLabel, null, "Test"),
                        react_1["default"].createElement(material_1.TextField, { type: "text", name: "test", className: " w-full", 
                            // sx={{hieght:"10"}}
                            value: formData.test, onChange: function (e) {
                                var newObj = __assign(__assign({}, formData), { test: e.target.value });
                                setFormData(newObj);
                            } })),
                    react_1["default"].createElement("div", { className: "mt-4" },
                        react_1["default"].createElement(material_1.InputLabel, null, "Select Manager"),
                        react_1["default"].createElement(material_1.Select, { className: " w-full ", name: "manager", value: formData.manager, onChange: function (e) {
                                var newObj = __assign(__assign({}, formData), { manager: e.target.value });
                                setFormData(newObj);
                            } },
                            react_1["default"].createElement(material_1.MenuItem, { value: "Micheal" }, "Micheal"),
                            react_1["default"].createElement(material_1.MenuItem, { value: "wilson" }, "Wilson"),
                            react_1["default"].createElement(material_1.MenuItem, { value: "philip" }, "Philip"),
                            react_1["default"].createElement(material_1.MenuItem, { value: "mango" }, "Mango"))),
                    react_1["default"].createElement("div", { className: "mt-3" },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement("label", { className: "inline-block py-[.32rem] px-4 bg-[#9333ea] hover:bg-[#9333ba] rounded ", htmlFor: "file_input" },
                                react_1["default"].createElement("p", { className: "text-white" },
                                    react_1["default"].createElement(FileUploadOutlined_1["default"], { className: "inline-block" }),
                                    " Upload File")),
                            react_1["default"].createElement("label", { className: "p-4 font-bold" }, fileName),
                            react_1["default"].createElement("input", { id: "file_input", className: "hidden", type: "file", onChange: handleFileChange }))))),
            react_1["default"].createElement("div", { className: "text-right" },
                react_1["default"].createElement("button", { className: " mt-2 border-2 bg-[#9333ea] text-white rounded-lg w-28 h-10 ", type: "submit", value: formData.submit, onChange: function (e) {
                        var newObj = __assign(__assign({}, formData), { submit: e.target.value });
                        setFormData(newObj);
                    } }, "Submit")))));
};
exports["default"] = WorkOrder;
