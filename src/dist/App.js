"use strict";
exports.__esModule = true;
require("./App.css");
var WorkOrder_1 = require("./components/WorkOrder");
function App() {
    return (React.createElement("div", null,
        React.createElement("div", { className: "w-25% text-left" }),
        React.createElement("div", { className: "w-3/4 " },
            React.createElement(WorkOrder_1["default"], null))));
}
exports["default"] = App;
