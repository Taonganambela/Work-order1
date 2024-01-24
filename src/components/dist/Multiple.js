"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var React = require("react");
var HighlightOffOutlined_1 = require("@mui/icons-material/HighlightOffOutlined");
var IconButton_1 = require("@mui/material/IconButton");
var material_1 = require("@mui/material");
function Multiple() {
    var _a = React.useState([]), myArray = _a[0], setMyArray = _a[1];
    var _b = React.useState(""), element = _b[0], setElement = _b[1];
    React.useEffect(function () {
        console.log(myArray);
    }, [myArray]);
    var handleChange = function (event) {
        if (!myArray.includes(event.target.value)) {
            setMyArray(__spreadArrays(myArray, [event.target.value]));
        }
    };
    if (element) {
        if (!myArray.includes(element)) {
            setMyArray(__spreadArrays(myArray, [element]));
        }
    }
    var handleDelete = function (value) {
        var updatedArray = myArray.filter(function (item) { return item !== value; });
        setMyArray(updatedArray);
    };
    return (React.createElement("div", { className: 'flex space-x-10 ' },
        React.createElement("div", null,
            React.createElement("div", { className: "" },
                React.createElement(material_1.InputLabel, null, "Impacted Network Elements"),
                React.createElement(material_1.Select
                // labelId="ine"
                , { 
                    // labelId="ine"
                    id: "demo-simple-select", onChange: handleChange, className: " w-80" },
                    React.createElement(material_1.MenuItem, { value: 'MCO1' }, "MCO1"),
                    React.createElement(material_1.MenuItem, { value: 'MCO2' }, "MCO2"),
                    React.createElement(material_1.MenuItem, { value: 'MCO3' }, "MCO3"),
                    React.createElement(material_1.MenuItem, { value: 'MCO4' }, "MCO4")))),
        React.createElement("div", { className: "flex  relative" }, myArray.length > 0 &&
            myArray.map(function (element) { return (React.createElement("div", { className: "bg-purple-700 border-2  rounded-lg text-xs flex justify-center items-center text-white h-8 mt-8 w-28 ml-4" },
                React.createElement(IconButton_1["default"], { onClick: function () { return handleDelete(element); } },
                    React.createElement(HighlightOffOutlined_1["default"], { className: "w-2 text-white t" })),
                element)); }))));
}
exports["default"] = Multiple;
