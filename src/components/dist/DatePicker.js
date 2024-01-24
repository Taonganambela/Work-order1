"use strict";
exports.__esModule = true;
var react_1 = require("react");
var date_fns_1 = require("date-fns");
var lucide_react_1 = require("lucide-react");
var utils_1 = require("@/lib/utils");
var button_1 = require("@/components/ui/button");
var calendar_1 = require("@/components/ui/calendar");
var popover_1 = require("@/components/ui/popover");
function DatePicker(_a) {
    var dateType = _a.dateType, title = _a.title;
    var _b = react_1.useState(), date = _b[0], setDate = _b[1];
    return (react_1["default"].createElement("div", { className: '' },
        react_1["default"].createElement("h1", { className: 'font-bold' }, title),
        react_1["default"].createElement(popover_1.Popover, null,
            react_1["default"].createElement(popover_1.PopoverTrigger, { asChild: true },
                react_1["default"].createElement(button_1.Button, { variant: "outline", className: utils_1.cn("justify-start text-left font-normal p-[28px] w-60", !date && "text-muted-foreground") },
                    react_1["default"].createElement(lucide_react_1.Calendar, { className: "mr-2 h-4 w-4" }),
                    date ? date_fns_1.format(date, "PPP") : react_1["default"].createElement("span", null))),
            react_1["default"].createElement(popover_1.PopoverContent, { className: "w-auto p-0" },
                react_1["default"].createElement(calendar_1.Calendar, { mode: "single", selected: date, onSelect: setDate, initialFocus: true })))));
}
exports["default"] = DatePicker;
