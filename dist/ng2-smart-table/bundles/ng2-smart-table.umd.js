(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('lodash'), require('@angular/common'), require('@angular/forms'), require('ng2-completer'), require('rxjs/operators'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('ng2-smart-table', ['exports', '@angular/core', 'rxjs', 'lodash', '@angular/common', '@angular/forms', 'ng2-completer', 'rxjs/operators', '@angular/common/http'], factory) :
    (global = global || self, factory(global['ng2-smart-table'] = {}, global.ng.core, global.rxjs, global.lodash, global.ng.common, global.ng.forms, global.ng2Completer, global.rxjs.operators, global.ng.common.http));
}(this, (function (exports, core, rxjs, lodash, common, forms, ng2Completer, operators, http) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * Extending object that entered in first argument.
     *
     * Returns extended object or false if have no target object or incorrect type.
     *
     * If you wish to clone source object (without modify it), just use empty new
     * object as first argument, like this:
     *   deepExtend({}, yourObj_1, [yourObj_N]);
     */
    var deepExtend = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        if (arguments.length < 1 || typeof arguments[0] !== 'object') {
            return false;
        }
        if (arguments.length < 2) {
            return arguments[0];
        }
        var target = arguments[0];
        // convert arguments to array and cut off target object
        var args = Array.prototype.slice.call(arguments, 1);
        var val, src;
        args.forEach(function (obj) {
            // skip argument if it is array or isn't object
            if (typeof obj !== 'object' || Array.isArray(obj)) {
                return;
            }
            Object.keys(obj).forEach(function (key) {
                src = target[key]; // source value
                val = obj[key]; // new value
                // recursion prevention
                if (val === target) {
                    return;
                    /**
                     * if new value isn't object then just overwrite by new value
                     * instead of extending.
                     */
                }
                else if (typeof val !== 'object' || val === null) {
                    target[key] = val;
                    return;
                    // just clone arrays (and recursive clone objects inside)
                }
                else if (Array.isArray(val)) {
                    target[key] = lodash.cloneDeep(val);
                    return;
                    // overwrite by new value if source isn't object or array
                }
                else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                    target[key] = deepExtend({}, val);
                    return;
                    // source value and new value is objects both, extending...
                }
                else {
                    target[key] = deepExtend(src, val);
                    return;
                }
            });
        });
        return target;
    };
    var Deferred = /** @class */ (function () {
        function Deferred() {
            var _this = this;
            this.promise = new Promise(function (resolve, reject) {
                _this.resolve = resolve;
                _this.reject = reject;
            });
        }
        return Deferred;
    }());
    // getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
    function getDeepFromObject(object, name, defaultValue) {
        if (object === void 0) { object = {}; }
        var keys = name.split('.');
        // clone the object
        var level = deepExtend({}, object);
        keys.forEach(function (k) {
            if (level && typeof level[k] !== 'undefined') {
                level = level[k];
            }
        });
        return typeof level === 'undefined' ? defaultValue : level;
    }

    function prepareValue(value) { return value; }
    var Cell = /** @class */ (function () {
        function Cell(value, row, column, dataSet) {
            this.value = value;
            this.row = row;
            this.column = column;
            this.dataSet = dataSet;
            this.newValue = '';
            this.newValue = value;
        }
        Cell.prototype.getColumn = function () {
            return this.column;
        };
        Cell.prototype.getRow = function () {
            return this.row;
        };
        Cell.prototype.getValue = function () {
            var valid = this.column.getValuePrepareFunction() instanceof Function;
            var prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
            return prepare.call(null, this.value, this.row.getData(), this);
        };
        Cell.prototype.setValue = function (value) {
            this.newValue = value;
        };
        Cell.prototype.getId = function () {
            return this.getColumn().id;
        };
        Cell.prototype.getTitle = function () {
            return this.getColumn().title;
        };
        Cell.prototype.isEditable = function () {
            if (this.getRow().index === -1) {
                return this.getColumn().isAddable;
            }
            else {
                return this.getColumn().isEditable;
            }
        };
        Cell.PREPARE = prepareValue;
        return Cell;
    }());

    var Row = /** @class */ (function () {
        function Row(index, data, _dataSet) {
            this.index = index;
            this.data = data;
            this._dataSet = _dataSet;
            this.isSelected = false;
            this.isInEditing = false;
            this.cells = [];
            this.process();
        }
        Row.prototype.getCell = function (column) {
            return this.cells.find(function (el) { return el.getColumn() === column; });
        };
        Row.prototype.getCells = function () {
            return this.cells;
        };
        Row.prototype.getData = function () {
            return this.data;
        };
        Row.prototype.getIsSelected = function () {
            return this.isSelected;
        };
        Row.prototype.getNewData = function () {
            var values = Object.assign({}, this.data);
            this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
            return values;
        };
        Row.prototype.setData = function (data) {
            this.data = data;
            this.process();
        };
        Row.prototype.process = function () {
            var _this = this;
            this.cells = [];
            this._dataSet.getColumns().forEach(function (column) {
                var cell = _this.createCell(column);
                _this.cells.push(cell);
            });
        };
        Row.prototype.createCell = function (column) {
            var defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
            var value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
            return new Cell(value, this, column, this._dataSet);
        };
        return Row;
    }());

    var Column = /** @class */ (function () {
        function Column(id, settings, dataSet) {
            this.id = id;
            this.settings = settings;
            this.dataSet = dataSet;
            this.title = '';
            this.type = '';
            this.class = '';
            this.width = '';
            this.isSortable = false;
            this.isEditable = true;
            this.isAddable = true;
            this.isFilterable = false;
            this.sortDirection = '';
            this.defaultSortDirection = '';
            this.editor = { type: '', config: {}, component: null };
            this.filter = { type: '', config: {}, component: null };
            this.renderComponent = null;
            this.process();
        }
        Column.prototype.getOnComponentInitFunction = function () {
            return this.onComponentInitFunction;
        };
        Column.prototype.getCompareFunction = function () {
            return this.compareFunction;
        };
        Column.prototype.getValuePrepareFunction = function () {
            return this.valuePrepareFunction;
        };
        Column.prototype.getFilterFunction = function () {
            return this.filterFunction;
        };
        Column.prototype.getConfig = function () {
            return this.editor && this.editor.config;
        };
        Column.prototype.getFilterType = function () {
            return this.filter && this.filter.type;
        };
        Column.prototype.getFilterConfig = function () {
            return this.filter && this.filter.config;
        };
        Column.prototype.process = function () {
            this.title = this.settings['title'];
            this.class = this.settings['class'];
            this.width = this.settings['width'];
            this.type = this.prepareType();
            this.editor = this.settings['editor'];
            this.filter = this.settings['filter'];
            this.renderComponent = this.settings['renderComponent'];
            this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
            this.defaultSortDirection = ['asc', 'desc']
                .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
            this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
            this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
            this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
            this.sortDirection = this.prepareSortDirection();
            this.compareFunction = this.settings['compareFunction'];
            this.valuePrepareFunction = this.settings['valuePrepareFunction'];
            this.filterFunction = this.settings['filterFunction'];
            this.onComponentInitFunction = this.settings['onComponentInitFunction'];
        };
        Column.prototype.prepareType = function () {
            return this.settings['type'] || this.determineType();
        };
        Column.prototype.prepareSortDirection = function () {
            return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
        };
        Column.prototype.determineType = function () {
            // TODO: determine type by data
            return 'text';
        };
        return Column;
    }());

    var DataSet = /** @class */ (function () {
        function DataSet(data, columnSettings) {
            if (data === void 0) { data = []; }
            this.columnSettings = columnSettings;
            this.data = [];
            this.columns = [];
            this.rows = [];
            this.willSelect = 'first';
            this.createColumns(columnSettings);
            this.setData(data);
            this.createNewRow();
        }
        DataSet.prototype.setData = function (data) {
            this.data = data;
            this.createRows();
        };
        DataSet.prototype.getColumns = function () {
            return this.columns;
        };
        DataSet.prototype.getRows = function () {
            return this.rows;
        };
        DataSet.prototype.getFirstRow = function () {
            return this.rows[0];
        };
        DataSet.prototype.getLastRow = function () {
            return this.rows[this.rows.length - 1];
        };
        DataSet.prototype.findRowByData = function (data) {
            return this.rows.find(function (row) { return row.getData() === data; });
        };
        DataSet.prototype.deselectAll = function () {
            this.rows.forEach(function (row) {
                row.isSelected = false;
            });
        };
        DataSet.prototype.selectRow = function (row) {
            var previousIsSelected = row.isSelected;
            this.deselectAll();
            row.isSelected = !previousIsSelected;
            this.selectedRow = row;
            return this.selectedRow;
        };
        DataSet.prototype.multipleSelectRow = function (row) {
            row.isSelected = !row.isSelected;
            this.selectedRow = row;
            return this.selectedRow;
        };
        DataSet.prototype.selectPreviousRow = function () {
            if (this.rows.length > 0) {
                var index = this.selectedRow ? this.selectedRow.index : 0;
                if (index > this.rows.length - 1) {
                    index = this.rows.length - 1;
                }
                this.selectRow(this.rows[index]);
                return this.selectedRow;
            }
        };
        DataSet.prototype.selectFirstRow = function () {
            if (this.rows.length > 0) {
                this.selectRow(this.rows[0]);
                return this.selectedRow;
            }
        };
        DataSet.prototype.selectLastRow = function () {
            if (this.rows.length > 0) {
                this.selectRow(this.rows[this.rows.length - 1]);
                return this.selectedRow;
            }
        };
        DataSet.prototype.willSelectFirstRow = function () {
            this.willSelect = 'first';
        };
        DataSet.prototype.willSelectLastRow = function () {
            this.willSelect = 'last';
        };
        DataSet.prototype.select = function () {
            if (this.getRows().length === 0) {
                return;
            }
            if (this.willSelect) {
                if (this.willSelect === 'first') {
                    this.selectFirstRow();
                }
                if (this.willSelect === 'last') {
                    this.selectLastRow();
                }
                this.willSelect = '';
            }
            else {
                this.selectFirstRow();
            }
            return this.selectedRow;
        };
        DataSet.prototype.createNewRow = function () {
            this.newRow = new Row(-1, {}, this);
            this.newRow.isInEditing = true;
        };
        /**
         * Create columns by mapping from the settings
         * @param settings
         * @private
         */
        DataSet.prototype.createColumns = function (settings) {
            for (var id in settings) {
                if (settings.hasOwnProperty(id)) {
                    this.columns.push(new Column(id, settings[id], this));
                }
            }
        };
        /**
         * Create rows based on current data prepared in data source
         * @private
         */
        DataSet.prototype.createRows = function () {
            var _this = this;
            this.rows = [];
            this.data.forEach(function (el, index) {
                _this.rows.push(new Row(index, el, _this));
            });
        };
        return DataSet;
    }());

    var Grid = /** @class */ (function () {
        function Grid(source, settings) {
            this.createFormShown = false;
            this.onSelectRowSource = new rxjs.Subject();
            this.setSettings(settings);
            this.setSource(source);
        }
        Grid.prototype.showActionColumn = function (position) {
            return this.isCurrentActionsPosition(position) && this.isActionsVisible();
        };
        Grid.prototype.isCurrentActionsPosition = function (position) {
            return position == this.getSetting('actions.position');
        };
        Grid.prototype.isActionsVisible = function () {
            return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
        };
        Grid.prototype.isMultiSelectVisible = function () {
            return this.getSetting('selectMode') === 'multi';
        };
        Grid.prototype.getNewRow = function () {
            return this.dataSet.newRow;
        };
        Grid.prototype.setSettings = function (settings) {
            this.settings = settings;
            this.dataSet = new DataSet([], this.getSetting('columns'));
            if (this.source) {
                this.source.refresh();
            }
        };
        Grid.prototype.getDataSet = function () {
            return this.dataSet;
        };
        Grid.prototype.setSource = function (source) {
            var _this = this;
            this.source = this.prepareSource(source);
            this.source.onChanged().subscribe(function (changes) { return _this.processDataChange(changes); });
            this.source.onUpdated().subscribe(function (data) {
                var changedRow = _this.dataSet.findRowByData(data);
                changedRow.setData(data);
            });
        };
        Grid.prototype.getSetting = function (name, defaultValue) {
            return getDeepFromObject(this.settings, name, defaultValue);
        };
        Grid.prototype.getColumns = function () {
            return this.dataSet.getColumns();
        };
        Grid.prototype.getRows = function () {
            return this.dataSet.getRows();
        };
        Grid.prototype.selectRow = function (row) {
            this.dataSet.selectRow(row);
        };
        Grid.prototype.multipleSelectRow = function (row) {
            this.dataSet.multipleSelectRow(row);
        };
        Grid.prototype.onSelectRow = function () {
            return this.onSelectRowSource.asObservable();
        };
        Grid.prototype.edit = function (row) {
            row.isInEditing = true;
        };
        Grid.prototype.create = function (row, confirmEmitter) {
            var _this = this;
            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
                newData = newData ? newData : row.getNewData();
                if (deferred.resolve.skipAdd) {
                    _this.createFormShown = false;
                }
                else {
                    _this.source.prepend(newData).then(function () {
                        _this.createFormShown = false;
                        _this.dataSet.createNewRow();
                    });
                }
            }).catch(function (err) {
                // doing nothing
            });
            if (this.getSetting('add.confirmCreate')) {
                confirmEmitter.emit({
                    newData: row.getNewData(),
                    source: this.source,
                    confirm: deferred,
                });
            }
            else {
                deferred.resolve();
            }
        };
        Grid.prototype.save = function (row, confirmEmitter) {
            var _this = this;
            var deferred = new Deferred();
            deferred.promise.then(function (newData) {
                newData = newData ? newData : row.getNewData();
                if (deferred.resolve.skipEdit) {
                    row.isInEditing = false;
                }
                else {
                    _this.source.update(row.getData(), newData).then(function () {
                        row.isInEditing = false;
                    });
                }
            }).catch(function (err) {
                // doing nothing
            });
            if (this.getSetting('edit.confirmSave')) {
                confirmEmitter.emit({
                    data: row.getData(),
                    newData: row.getNewData(),
                    source: this.source,
                    confirm: deferred,
                });
            }
            else {
                deferred.resolve();
            }
        };
        Grid.prototype.delete = function (row, confirmEmitter) {
            var _this = this;
            var deferred = new Deferred();
            deferred.promise.then(function () {
                _this.source.remove(row.getData());
            }).catch(function (err) {
                // doing nothing
            });
            if (this.getSetting('delete.confirmDelete')) {
                confirmEmitter.emit({
                    data: row.getData(),
                    source: this.source,
                    confirm: deferred,
                });
            }
            else {
                deferred.resolve();
            }
        };
        Grid.prototype.processDataChange = function (changes) {
            if (this.shouldProcessChange(changes)) {
                this.dataSet.setData(changes['elements']);
                if (this.getSetting('selectMode') !== 'multi') {
                    var row = this.determineRowToSelect(changes);
                    if (row) {
                        this.onSelectRowSource.next(row);
                    }
                }
            }
        };
        Grid.prototype.shouldProcessChange = function (changes) {
            if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
                return true;
            }
            else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
                return true;
            }
            return false;
        };
        // TODO: move to selectable? Separate directive
        Grid.prototype.determineRowToSelect = function (changes) {
            if (['load', 'page', 'filter', 'sort', 'refresh'].indexOf(changes['action']) !== -1) {
                return this.dataSet.select();
            }
            if (changes['action'] === 'remove') {
                if (changes['elements'].length === 0) {
                    // we have to store which one to select as the data will be reloaded
                    this.dataSet.willSelectLastRow();
                }
                else {
                    return this.dataSet.selectPreviousRow();
                }
            }
            if (changes['action'] === 'append') {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectLastRow();
            }
            if (changes['action'] === 'add') {
                return this.dataSet.selectFirstRow();
            }
            if (changes['action'] === 'update') {
                return this.dataSet.selectFirstRow();
            }
            if (changes['action'] === 'prepend') {
                // we have to store which one to select as the data will be reloaded
                this.dataSet.willSelectFirstRow();
            }
            return null;
        };
        Grid.prototype.prepareSource = function (source) {
            var initialSource = this.getInitialSort();
            if (initialSource && initialSource['field'] && initialSource['direction']) {
                source.setSort([initialSource], false);
            }
            if (this.getSetting('pager.display') === true) {
                source.setPaging(1, this.getSetting('pager.perPage'), false);
            }
            source.refresh();
            return source;
        };
        Grid.prototype.getInitialSort = function () {
            var sortConf = {};
            this.getColumns().forEach(function (column) {
                if (column.isSortable && column.defaultSortDirection) {
                    sortConf['field'] = column.id;
                    sortConf['direction'] = column.defaultSortDirection;
                    sortConf['compare'] = column.getCompareFunction();
                }
            });
            return sortConf;
        };
        Grid.prototype.getSelectedRows = function () {
            return this.dataSet.getRows()
                .filter(function (r) { return r.isSelected; });
        };
        Grid.prototype.selectAllRows = function (status) {
            this.dataSet.getRows()
                .forEach(function (r) { return r.isSelected = status; });
        };
        Grid.prototype.getFirstRow = function () {
            return this.dataSet.getFirstRow();
        };
        Grid.prototype.getLastRow = function () {
            return this.dataSet.getLastRow();
        };
        return Grid;
    }());

    var DataSource = /** @class */ (function () {
        function DataSource() {
            this.onChangedSource = new rxjs.Subject();
            this.onAddedSource = new rxjs.Subject();
            this.onUpdatedSource = new rxjs.Subject();
            this.onRemovedSource = new rxjs.Subject();
        }
        DataSource.prototype.refresh = function () {
            this.emitOnChanged('refresh');
        };
        DataSource.prototype.load = function (data) {
            this.emitOnChanged('load');
            return Promise.resolve();
        };
        DataSource.prototype.onChanged = function () {
            return this.onChangedSource.asObservable();
        };
        DataSource.prototype.onAdded = function () {
            return this.onAddedSource.asObservable();
        };
        DataSource.prototype.onUpdated = function () {
            return this.onUpdatedSource.asObservable();
        };
        DataSource.prototype.onRemoved = function () {
            return this.onRemovedSource.asObservable();
        };
        DataSource.prototype.prepend = function (element) {
            this.emitOnAdded(element);
            this.emitOnChanged('prepend');
            return Promise.resolve();
        };
        DataSource.prototype.append = function (element) {
            this.emitOnAdded(element);
            this.emitOnChanged('append');
            return Promise.resolve();
        };
        DataSource.prototype.add = function (element) {
            this.emitOnAdded(element);
            this.emitOnChanged('add');
            return Promise.resolve();
        };
        DataSource.prototype.remove = function (element) {
            this.emitOnRemoved(element);
            this.emitOnChanged('remove');
            return Promise.resolve();
        };
        DataSource.prototype.update = function (element, values) {
            this.emitOnUpdated(element);
            this.emitOnChanged('update');
            return Promise.resolve();
        };
        DataSource.prototype.empty = function () {
            this.emitOnChanged('empty');
            return Promise.resolve();
        };
        DataSource.prototype.setSort = function (conf, doEmit) {
            if (doEmit) {
                this.emitOnChanged('sort');
            }
        };
        DataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
            if (doEmit) {
                this.emitOnChanged('filter');
            }
        };
        DataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
            if (doEmit) {
                this.emitOnChanged('filter');
            }
        };
        DataSource.prototype.setPaging = function (page, perPage, doEmit) {
            if (doEmit) {
                this.emitOnChanged('paging');
            }
        };
        DataSource.prototype.setPage = function (page, doEmit) {
            if (doEmit) {
                this.emitOnChanged('page');
            }
        };
        DataSource.prototype.emitOnRemoved = function (element) {
            this.onRemovedSource.next(element);
        };
        DataSource.prototype.emitOnUpdated = function (element) {
            this.onUpdatedSource.next(element);
        };
        DataSource.prototype.emitOnAdded = function (element) {
            this.onAddedSource.next(element);
        };
        DataSource.prototype.emitOnChanged = function (action) {
            var _this = this;
            this.getElements().then(function (elements) { return _this.onChangedSource.next({
                action: action,
                elements: elements,
                paging: _this.getPaging(),
                filter: _this.getFilter(),
                sort: _this.getSort(),
            }); });
        };
        return DataSource;
    }());

    function compareValues(direction, a, b) {
        if (a < b) {
            return -1 * direction;
        }
        if (a > b) {
            return direction;
        }
        return 0;
    }
    var LocalSorter = /** @class */ (function () {
        function LocalSorter() {
        }
        LocalSorter.sort = function (data, field, direction, customCompare) {
            var dir = (direction === 'asc') ? 1 : -1;
            var compare = customCompare ? customCompare : compareValues;
            return data.sort(function (a, b) {
                return compare.call(null, dir, a[field], b[field]);
            });
        };
        return LocalSorter;
    }());

    function filterValues(value, search) {
        return value.toString().toLowerCase().includes(search.toString().toLowerCase());
    }
    var LocalFilter = /** @class */ (function () {
        function LocalFilter() {
        }
        LocalFilter.filter = function (data, field, search, customFilter) {
            var filter = customFilter ? customFilter : filterValues;
            return data.filter(function (el) {
                var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
                return filter.call(null, value, search);
            });
        };
        return LocalFilter;
    }());

    var LocalPager = /** @class */ (function () {
        function LocalPager() {
        }
        LocalPager.paginate = function (data, page, perPage) {
            return data.slice(perPage * (page - 1), perPage * page);
        };
        return LocalPager;
    }());

    var LocalDataSource = /** @class */ (function (_super) {
        __extends(LocalDataSource, _super);
        function LocalDataSource(data) {
            if (data === void 0) { data = []; }
            var _this = _super.call(this) || this;
            _this.data = [];
            _this.filteredAndSorted = [];
            _this.sortConf = [];
            _this.filterConf = {
                filters: [],
                andOperator: true,
            };
            _this.pagingConf = {};
            _this.data = data;
            return _this;
        }
        LocalDataSource.prototype.load = function (data) {
            this.data = data;
            return _super.prototype.load.call(this, data);
        };
        LocalDataSource.prototype.prepend = function (element) {
            this.reset(true);
            this.data.unshift(element);
            return _super.prototype.prepend.call(this, element);
        };
        LocalDataSource.prototype.append = function (element) {
            this.reset(true);
            this.data.push(element);
            return _super.prototype.append.call(this, element);
        };
        LocalDataSource.prototype.add = function (element) {
            this.data.push(element);
            return _super.prototype.add.call(this, element);
        };
        LocalDataSource.prototype.remove = function (element) {
            this.data = this.data.filter(function (el) { return el !== element; });
            return _super.prototype.remove.call(this, element);
        };
        LocalDataSource.prototype.update = function (element, values) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.find(element).then(function (found) {
                    found = deepExtend(found, values);
                    _super.prototype.update.call(_this, found, values).then(resolve).catch(reject);
                }).catch(reject);
            });
        };
        LocalDataSource.prototype.find = function (element) {
            var found = this.data.find(function (el) { return el === element; });
            if (found) {
                return Promise.resolve(found);
            }
            return Promise.reject(new Error('Element was not found in the dataset'));
        };
        LocalDataSource.prototype.getElements = function () {
            var data = this.data.slice(0);
            return Promise.resolve(this.prepareData(data));
        };
        LocalDataSource.prototype.getFilteredAndSorted = function () {
            var data = this.data.slice(0);
            this.prepareData(data);
            return Promise.resolve(this.filteredAndSorted);
        };
        LocalDataSource.prototype.getAll = function () {
            var data = this.data.slice(0);
            return Promise.resolve(data);
        };
        LocalDataSource.prototype.reset = function (silent) {
            if (silent === void 0) { silent = false; }
            if (silent) {
                this.filterConf = {
                    filters: [],
                    andOperator: true,
                };
                this.sortConf = [];
                this.pagingConf['page'] = 1;
            }
            else {
                this.setFilter([], true, false);
                this.setSort([], false);
                this.setPage(1);
            }
        };
        LocalDataSource.prototype.empty = function () {
            this.data = [];
            return _super.prototype.empty.call(this);
        };
        LocalDataSource.prototype.count = function () {
            return this.filteredAndSorted.length;
        };
        /**
         *
         * Array of conf objects
         * [
         *  {field: string, direction: asc|desc|null, compare: Function|null},
         * ]
         * @param conf
         * @param doEmit
         * @returns {LocalDataSource}
         */
        LocalDataSource.prototype.setSort = function (conf, doEmit) {
            if (doEmit === void 0) { doEmit = true; }
            if (conf !== null) {
                conf.forEach(function (fieldConf) {
                    if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                        throw new Error('Sort configuration object is not valid');
                    }
                });
                this.sortConf = conf;
            }
            _super.prototype.setSort.call(this, conf, doEmit);
            return this;
        };
        /**
         *
         * Array of conf objects
         * [
         *  {field: string, search: string, filter: Function|null},
         * ]
         * @param conf
         * @param andOperator
         * @param doEmit
         * @returns {LocalDataSource}
         */
        LocalDataSource.prototype.setFilter = function (conf, andOperator, doEmit) {
            var _this = this;
            if (andOperator === void 0) { andOperator = true; }
            if (doEmit === void 0) { doEmit = true; }
            if (conf && conf.length > 0) {
                conf.forEach(function (fieldConf) {
                    _this.addFilter(fieldConf, andOperator, false);
                });
            }
            else {
                this.filterConf = {
                    filters: [],
                    andOperator: true,
                };
            }
            this.filterConf.andOperator = andOperator;
            this.pagingConf['page'] = 1;
            _super.prototype.setFilter.call(this, conf, andOperator, doEmit);
            return this;
        };
        LocalDataSource.prototype.addFilter = function (fieldConf, andOperator, doEmit) {
            var _this = this;
            if (andOperator === void 0) { andOperator = true; }
            if (doEmit === void 0) { doEmit = true; }
            if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
                throw new Error('Filter configuration object is not valid');
            }
            var found = false;
            this.filterConf.filters.forEach(function (currentFieldConf, index) {
                if (currentFieldConf['field'] === fieldConf['field']) {
                    _this.filterConf.filters[index] = fieldConf;
                    found = true;
                }
            });
            if (!found) {
                this.filterConf.filters.push(fieldConf);
            }
            this.filterConf.andOperator = andOperator;
            _super.prototype.addFilter.call(this, fieldConf, andOperator, doEmit);
            return this;
        };
        LocalDataSource.prototype.setPaging = function (page, perPage, doEmit) {
            if (doEmit === void 0) { doEmit = true; }
            this.pagingConf['page'] = page;
            this.pagingConf['perPage'] = perPage;
            _super.prototype.setPaging.call(this, page, perPage, doEmit);
            return this;
        };
        LocalDataSource.prototype.setPage = function (page, doEmit) {
            if (doEmit === void 0) { doEmit = true; }
            this.pagingConf['page'] = page;
            _super.prototype.setPage.call(this, page, doEmit);
            return this;
        };
        LocalDataSource.prototype.getSort = function () {
            return this.sortConf;
        };
        LocalDataSource.prototype.getFilter = function () {
            return this.filterConf;
        };
        LocalDataSource.prototype.getPaging = function () {
            return this.pagingConf;
        };
        LocalDataSource.prototype.prepareData = function (data) {
            data = this.filter(data);
            data = this.sort(data);
            this.filteredAndSorted = data.slice(0);
            return this.paginate(data);
        };
        LocalDataSource.prototype.sort = function (data) {
            if (this.sortConf) {
                this.sortConf.forEach(function (fieldConf) {
                    data = LocalSorter
                        .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
                });
            }
            return data;
        };
        // TODO: refactor?
        LocalDataSource.prototype.filter = function (data) {
            if (this.filterConf.filters) {
                if (this.filterConf.andOperator) {
                    this.filterConf.filters.forEach(function (fieldConf) {
                        if (fieldConf['search'].length > 0) {
                            data = LocalFilter
                                .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                        }
                    });
                }
                else {
                    var mergedData_1 = [];
                    this.filterConf.filters.forEach(function (fieldConf) {
                        if (fieldConf['search'].length > 0) {
                            mergedData_1 = mergedData_1.concat(LocalFilter
                                .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                        }
                    });
                    // remove non unique items
                    data = mergedData_1.filter(function (elem, pos, arr) {
                        return arr.indexOf(elem) === pos;
                    });
                }
            }
            return data;
        };
        LocalDataSource.prototype.paginate = function (data) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
                data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
            }
            return data;
        };
        return LocalDataSource;
    }(DataSource));

    function TbodyCustomComponent_a_0_Template(rf, ctx) { if (rf & 1) {
        var _r328 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 1);
        core["ɵɵlistener"]("click", function TbodyCustomComponent_a_0_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r328); var action_r326 = ctx.$implicit; var ctx_r327 = core["ɵɵnextContext"](); return ctx_r327.onCustom(action_r326, $event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var action_r326 = ctx.$implicit;
        core["ɵɵproperty"]("innerHTML", action_r326.title, core["ɵɵsanitizeHtml"]);
    } }
    var TbodyCustomComponent = /** @class */ (function () {
        function TbodyCustomComponent() {
            this.custom = new core.EventEmitter();
        }
        TbodyCustomComponent.prototype.onCustom = function (action, event) {
            event.preventDefault();
            event.stopPropagation();
            this.custom.emit({
                action: action.name,
                data: this.row.getData(),
                source: this.source
            });
        };
        TbodyCustomComponent.ɵfac = function TbodyCustomComponent_Factory(t) { return new (t || TbodyCustomComponent)(); };
        TbodyCustomComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TbodyCustomComponent, selectors: [["ng2-st-tbody-custom"]], inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-custom-custom", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-custom-custom", 3, "innerHTML", "click"]], template: function TbodyCustomComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, TbodyCustomComponent_a_0_Template, 1, 1, "a", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngForOf", ctx.grid.getSetting("actions.custom"));
            } }, directives: [common.NgForOf], encapsulation: 2, changeDetection: 0 });
        return TbodyCustomComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TbodyCustomComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-st-tbody-custom',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
                }]
        }], null, { grid: [{
                type: core.Input
            }], row: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], custom: [{
                type: core.Output
            }] }); })();

    function TbodyEditDeleteComponent_a_0_Template(rf, ctx) { if (rf & 1) {
        var _r322 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 2);
        core["ɵɵlistener"]("click", function TbodyEditDeleteComponent_a_0_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r322); var ctx_r321 = core["ɵɵnextContext"](); return ctx_r321.onEdit($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r319 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("innerHTML", ctx_r319.editRowButtonContent, core["ɵɵsanitizeHtml"]);
    } }
    function TbodyEditDeleteComponent_a_1_Template(rf, ctx) { if (rf & 1) {
        var _r324 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 3);
        core["ɵɵlistener"]("click", function TbodyEditDeleteComponent_a_1_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r324); var ctx_r323 = core["ɵɵnextContext"](); return ctx_r323.onDelete($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r320 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("innerHTML", ctx_r320.deleteRowButtonContent, core["ɵɵsanitizeHtml"]);
    } }
    var TbodyEditDeleteComponent = /** @class */ (function () {
        function TbodyEditDeleteComponent() {
            this.edit = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.editRowSelect = new core.EventEmitter();
        }
        TbodyEditDeleteComponent.prototype.onEdit = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.editRowSelect.emit(this.row);
            if (this.grid.getSetting('mode') === 'external') {
                this.edit.emit({
                    data: this.row.getData(),
                    source: this.source,
                });
            }
            else {
                this.grid.edit(this.row);
            }
        };
        TbodyEditDeleteComponent.prototype.onDelete = function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (this.grid.getSetting('mode') === 'external') {
                this.delete.emit({
                    data: this.row.getData(),
                    source: this.source,
                });
            }
            else {
                this.grid.delete(this.row, this.deleteConfirm);
            }
        };
        TbodyEditDeleteComponent.prototype.ngOnChanges = function () {
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
            this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
        };
        TbodyEditDeleteComponent.ɵfac = function TbodyEditDeleteComponent_Factory(t) { return new (t || TbodyEditDeleteComponent)(); };
        TbodyEditDeleteComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TbodyEditDeleteComponent, selectors: [["ng2-st-tbody-edit-delete"]], inputs: { grid: "grid", row: "row", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm" }, outputs: { edit: "edit", delete: "delete", editRowSelect: "editRowSelect" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-edit-edit", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", "class", "ng2-smart-action ng2-smart-action-delete-delete", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-edit", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-delete-delete", 3, "innerHTML", "click"]], template: function TbodyEditDeleteComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, TbodyEditDeleteComponent_a_0_Template, 1, 1, "a", 0);
                core["ɵɵtemplate"](1, TbodyEditDeleteComponent_a_1_Template, 1, 1, "a", 1);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.isActionEdit);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.isActionDelete);
            } }, directives: [common.NgIf], encapsulation: 2, changeDetection: 0 });
        return TbodyEditDeleteComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TbodyEditDeleteComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-st-tbody-edit-delete',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n  ",
                }]
        }], null, { grid: [{
                type: core.Input
            }], row: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], deleteConfirm: [{
                type: core.Input
            }], editConfirm: [{
                type: core.Input
            }], edit: [{
                type: core.Output
            }], delete: [{
                type: core.Output
            }], editRowSelect: [{
                type: core.Output
            }] }); })();

    var TbodyCreateCancelComponent = /** @class */ (function () {
        function TbodyCreateCancelComponent() {
        }
        TbodyCreateCancelComponent.prototype.onSave = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.grid.save(this.row, this.editConfirm);
        };
        TbodyCreateCancelComponent.prototype.onCancelEdit = function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.row.isInEditing = false;
        };
        TbodyCreateCancelComponent.prototype.ngOnChanges = function () {
            this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
            this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
        };
        TbodyCreateCancelComponent.ɵfac = function TbodyCreateCancelComponent_Factory(t) { return new (t || TbodyCreateCancelComponent)(); };
        TbodyCreateCancelComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TbodyCreateCancelComponent, selectors: [["ng2-st-tbody-create-cancel"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-save", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-cancel", 3, "innerHTML", "click"]], template: function TbodyCreateCancelComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "a", 0);
                core["ɵɵlistener"]("click", function TbodyCreateCancelComponent_Template_a_click_0_listener($event) { return ctx.onSave($event); });
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](1, "a", 1);
                core["ɵɵlistener"]("click", function TbodyCreateCancelComponent_Template_a_click_1_listener($event) { return ctx.onCancelEdit($event); });
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("innerHTML", ctx.saveButtonContent, core["ɵɵsanitizeHtml"]);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("innerHTML", ctx.cancelButtonContent, core["ɵɵsanitizeHtml"]);
            } }, encapsulation: 2 });
        return TbodyCreateCancelComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TbodyCreateCancelComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-st-tbody-create-cancel',
                    template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"cancelButtonContent\" (click)=\"onCancelEdit($event)\"></a>\n  ",
                }]
        }], null, { grid: [{
                type: core.Input
            }], row: [{
                type: core.Input
            }], editConfirm: [{
                type: core.Input
            }] }); })();

    var _c0 = ["dynamicTarget"];
    function CustomViewComponent_ng_template_0_Template(rf, ctx) { }
    var CustomViewComponent = /** @class */ (function () {
        function CustomViewComponent(resolver) {
            this.resolver = resolver;
        }
        CustomViewComponent.prototype.ngOnInit = function () {
            if (this.cell && !this.customComponent) {
                this.createCustomComponent();
                this.callOnComponentInit();
                this.patchInstance();
            }
        };
        CustomViewComponent.prototype.ngOnDestroy = function () {
            if (this.customComponent) {
                this.customComponent.destroy();
            }
        };
        CustomViewComponent.prototype.createCustomComponent = function () {
            var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
        };
        CustomViewComponent.prototype.callOnComponentInit = function () {
            var onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
            onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
        };
        CustomViewComponent.prototype.patchInstance = function () {
            Object.assign(this.customComponent.instance, this.getPatch());
        };
        CustomViewComponent.prototype.getPatch = function () {
            return {
                value: this.cell.getValue(),
                rowData: this.cell.getRow().getData()
            };
        };
        CustomViewComponent.ɵfac = function CustomViewComponent_Factory(t) { return new (t || CustomViewComponent)(core["ɵɵdirectiveInject"](core.ComponentFactoryResolver)); };
        CustomViewComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CustomViewComponent, selectors: [["custom-view-component"]], viewQuery: function CustomViewComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.dynamicTarget = _t.first);
            } }, inputs: { cell: "cell" }, decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomViewComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, core["ɵɵtemplateRefExtractor"]);
            } }, encapsulation: 2 });
        return CustomViewComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CustomViewComponent, [{
            type: core.Component,
            args: [{
                    selector: 'custom-view-component',
                    template: "\n    <ng-template #dynamicTarget></ng-template>\n  ",
                }]
        }], function () { return [{ type: core.ComponentFactoryResolver }]; }, { cell: [{
                type: core.Input
            }], dynamicTarget: [{
                type: core.ViewChild,
                args: ['dynamicTarget', { read: core.ViewContainerRef, static: true }]
            }] }); })();

    function ViewCellComponent_custom_view_component_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "custom-view-component", 4);
    } if (rf & 2) {
        var ctx_r232 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r232.cell);
    } }
    function ViewCellComponent_div_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "div", 5);
    } if (rf & 2) {
        var ctx_r233 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("innerHTML", ctx_r233.cell.getValue(), core["ɵɵsanitizeHtml"]);
    } }
    function ViewCellComponent_div_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div");
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r234 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r234.cell.getValue());
    } }
    var ViewCellComponent = /** @class */ (function () {
        function ViewCellComponent() {
        }
        ViewCellComponent.ɵfac = function ViewCellComponent_Factory(t) { return new (t || ViewCellComponent)(); };
        ViewCellComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ViewCellComponent, selectors: [["table-cell-view-mode"]], inputs: { cell: "cell" }, decls: 4, vars: 3, consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML"]], template: function ViewCellComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtemplate"](1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1);
                core["ɵɵtemplate"](2, ViewCellComponent_div_2_Template, 1, 1, "div", 2);
                core["ɵɵtemplate"](3, ViewCellComponent_div_3_Template, 2, 1, "div", 3);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngSwitch", ctx.cell.getColumn().type);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "custom");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "html");
            } }, directives: [common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, CustomViewComponent], encapsulation: 2, changeDetection: 0 });
        return ViewCellComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ViewCellComponent, [{
            type: core.Component,
            args: [{
                    selector: 'table-cell-view-mode',
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    ",
                }]
        }], null, { cell: [{
                type: core.Input
            }] }); })();

    var EditCellDefault = /** @class */ (function () {
        function EditCellDefault() {
            this.inputClass = '';
            this.edited = new core.EventEmitter();
        }
        EditCellDefault.prototype.onEdited = function (event) {
            this.edited.next(event);
            return false;
        };
        EditCellDefault.prototype.onStopEditing = function () {
            this.cell.getRow().isInEditing = false;
            return false;
        };
        EditCellDefault.prototype.onClick = function (event) {
            event.stopPropagation();
        };
        EditCellDefault.ɵfac = function EditCellDefault_Factory(t) { return new (t || EditCellDefault)(); };
        EditCellDefault.ɵdir = core["ɵɵdefineDirective"]({ type: EditCellDefault, inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" } });
        return EditCellDefault;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EditCellDefault, [{
            type: core.Directive
        }], null, { cell: [{
                type: core.Input
            }], inputClass: [{
                type: core.Input
            }], edited: [{
                type: core.Output
            }] }); })();

    var _c0$1 = ["dynamicTarget"];
    function CustomEditComponent_ng_template_0_Template(rf, ctx) { }
    var CustomEditComponent = /** @class */ (function (_super) {
        __extends(CustomEditComponent, _super);
        function CustomEditComponent(resolver) {
            var _this = _super.call(this) || this;
            _this.resolver = resolver;
            return _this;
        }
        CustomEditComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (this.cell && !this.customComponent) {
                var componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
                this.customComponent = this.dynamicTarget.createComponent(componentFactory);
                // set @Inputs and @Outputs of custom component
                this.customComponent.instance.cell = this.cell;
                this.customComponent.instance.inputClass = this.inputClass;
                this.customComponent.instance.onStopEditing.subscribe(function () { return _this.onStopEditing(); });
                this.customComponent.instance.onEdited.subscribe(function (event) { return _this.onEdited(event); });
                this.customComponent.instance.onClick.subscribe(function (event) { return _this.onClick(event); });
            }
        };
        CustomEditComponent.prototype.ngOnDestroy = function () {
            if (this.customComponent) {
                this.customComponent.destroy();
            }
        };
        CustomEditComponent.ɵfac = function CustomEditComponent_Factory(t) { return new (t || CustomEditComponent)(core["ɵɵdirectiveInject"](core.ComponentFactoryResolver)); };
        CustomEditComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CustomEditComponent, selectors: [["table-cell-custom-editor"]], viewQuery: function CustomEditComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$1, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.dynamicTarget = _t.first);
            } }, features: [core["ɵɵInheritDefinitionFeature"], core["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomEditComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, CustomEditComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, core["ɵɵtemplateRefExtractor"]);
            } }, encapsulation: 2 });
        return CustomEditComponent;
    }(EditCellDefault));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CustomEditComponent, [{
            type: core.Component,
            args: [{
                    selector: 'table-cell-custom-editor',
                    template: "\n    <ng-template #dynamicTarget></ng-template>\n  ",
                }]
        }], function () { return [{ type: core.ComponentFactoryResolver }]; }, { dynamicTarget: [{
                type: core.ViewChild,
                args: ['dynamicTarget', { read: core.ViewContainerRef, static: true }]
            }] }); })();

    var DefaultEditor = /** @class */ (function () {
        function DefaultEditor() {
            this.onStopEditing = new core.EventEmitter();
            this.onEdited = new core.EventEmitter();
            this.onClick = new core.EventEmitter();
        }
        DefaultEditor.ɵfac = function DefaultEditor_Factory(t) { return new (t || DefaultEditor)(); };
        DefaultEditor.ɵdir = core["ɵɵdefineDirective"]({ type: DefaultEditor, inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { onStopEditing: "onStopEditing", onEdited: "onEdited", onClick: "onClick" } });
        return DefaultEditor;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DefaultEditor, [{
            type: core.Directive
        }], null, { cell: [{
                type: core.Input
            }], inputClass: [{
                type: core.Input
            }], onStopEditing: [{
                type: core.Output
            }], onEdited: [{
                type: core.Output
            }], onClick: [{
                type: core.Output
            }] }); })();

    function SelectEditorComponent_option_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 2);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var option_r229 = ctx.$implicit;
        var ctx_r228 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("value", option_r229.value)("selected", option_r229.value === ctx_r228.cell.getValue());
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"]("", option_r229.title, " ");
    } }
    var SelectEditorComponent = /** @class */ (function (_super) {
        __extends(SelectEditorComponent, _super);
        function SelectEditorComponent() {
            return _super.call(this) || this;
        }
        SelectEditorComponent.ɵfac = function SelectEditorComponent_Factory(t) { return new (t || SelectEditorComponent)(); };
        SelectEditorComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SelectEditorComponent, selectors: [["select-editor"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectEditorComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "select", 0);
                core["ɵɵlistener"]("ngModelChange", function SelectEditorComponent_Template_select_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function SelectEditorComponent_Template_select_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
                core["ɵɵtemplate"](1, SelectEditorComponent_option_1_Template, 2, 3, "option", 1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                var tmp_4_0 = null;
                var currVal_4 = (tmp_4_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_4_0.list;
                core["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", currVal_4);
            } }, directives: [forms.SelectControlValueAccessor, common.NgClass, forms.NgControlStatus, forms.NgModel, common.NgForOf, forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"]], encapsulation: 2 });
        return SelectEditorComponent;
    }(DefaultEditor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SelectEditorComponent, [{
            type: core.Component,
            args: [{
                    selector: 'select-editor',
                    template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    ",
                }]
        }], function () { return []; }, null); })();

    var TextareaEditorComponent = /** @class */ (function (_super) {
        __extends(TextareaEditorComponent, _super);
        function TextareaEditorComponent() {
            return _super.call(this) || this;
        }
        TextareaEditorComponent.ɵfac = function TextareaEditorComponent_Factory(t) { return new (t || TextareaEditorComponent)(); };
        TextareaEditorComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TextareaEditorComponent, selectors: [["textarea-editor"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "placeholder", "ngModelChange", "click", "keydown.enter", "keydown.esc"]], template: function TextareaEditorComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "textarea", 0);
                core["ɵɵlistener"]("ngModelChange", function TextareaEditorComponent_Template_textarea_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function TextareaEditorComponent_Template_textarea_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function TextareaEditorComponent_Template_textarea_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function TextareaEditorComponent_Template_textarea_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
                core["ɵɵtext"](1, "    ");
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("placeholder", ctx.cell.getTitle());
            } }, directives: [forms.DefaultValueAccessor, common.NgClass, forms.NgControlStatus, forms.NgModel], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
        return TextareaEditorComponent;
    }(DefaultEditor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TextareaEditorComponent, [{
            type: core.Component,
            args: [{
                    selector: 'textarea-editor',
                    styleUrls: ['./editor.component.scss'],
                    template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
                }]
        }], function () { return []; }, null); })();

    var CheckboxEditorComponent = /** @class */ (function (_super) {
        __extends(CheckboxEditorComponent, _super);
        function CheckboxEditorComponent() {
            return _super.call(this) || this;
        }
        CheckboxEditorComponent.prototype.onChange = function (event) {
            var trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
            var falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
            this.cell.newValue = event.target.checked ? trueVal : falseVal;
        };
        CheckboxEditorComponent.ɵfac = function CheckboxEditorComponent_Factory(t) { return new (t || CheckboxEditorComponent)(); };
        CheckboxEditorComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CheckboxEditorComponent, selectors: [["checkbox-editor"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 4, consts: [["type", "checkbox", 1, "form-control", 3, "ngClass", "name", "disabled", "checked", "click", "change"]], template: function CheckboxEditorComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "input", 0);
                core["ɵɵlistener"]("click", function CheckboxEditorComponent_Template_input_click_0_listener($event) { return ctx.onClick.emit($event); })("change", function CheckboxEditorComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                var tmp_3_0 = null;
                var currVal_3 = ctx.cell.getValue() == (((tmp_3_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_3_0.true) || true);
                core["ɵɵproperty"]("ngClass", ctx.inputClass)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("checked", currVal_3);
            } }, directives: [common.NgClass], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
        return CheckboxEditorComponent;
    }(DefaultEditor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CheckboxEditorComponent, [{
            type: core.Component,
            args: [{
                    selector: 'checkbox-editor',
                    styleUrls: ['./editor.component.scss'],
                    template: "\n    <input [ngClass]=\"inputClass\"\n           type=\"checkbox\"\n           class=\"form-control\"\n           [name]=\"cell.getId()\"\n           [disabled]=\"!cell.isEditable()\"\n           [checked]=\"cell.getValue() == (cell.getColumn().getConfig()?.true || true)\"\n           (click)=\"onClick.emit($event)\"\n           (change)=\"onChange($event)\">\n    ",
                }]
        }], function () { return []; }, null); })();

    var CompleterEditorComponent = /** @class */ (function (_super) {
        __extends(CompleterEditorComponent, _super);
        function CompleterEditorComponent(completerService) {
            var _this = _super.call(this) || this;
            _this.completerService = completerService;
            _this.completerStr = '';
            return _this;
        }
        CompleterEditorComponent.prototype.ngOnInit = function () {
            if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
                var config = this.cell.getColumn().getConfig().completer;
                config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
                config.dataService.descriptionField(config.descriptionField);
            }
        };
        CompleterEditorComponent.prototype.onEditedCompleter = function (event) {
            this.cell.newValue = event.title;
            return false;
        };
        CompleterEditorComponent.ɵfac = function CompleterEditorComponent_Factory(t) { return new (t || CompleterEditorComponent)(core["ɵɵdirectiveInject"](ng2Completer.CompleterService)); };
        CompleterEditorComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CompleterEditorComponent, selectors: [["completer-editor"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterEditorComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "ng2-completer", 0);
                core["ɵɵlistener"]("ngModelChange", function CompleterEditorComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.completerStr = $event; })("selected", function CompleterEditorComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.onEditedCompleter($event); });
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngModel", ctx.completerStr)("dataService", ctx.cell.getColumn().getConfig().completer.dataService)("minSearchLength", ctx.cell.getColumn().getConfig().completer.minSearchLength || 0)("pause", ctx.cell.getColumn().getConfig().completer.pause || 0)("placeholder", ctx.cell.getColumn().getConfig().completer.placeholder || "Start typing...");
            } }, directives: [ng2Completer.CompleterCmp, forms.NgControlStatus, forms.NgModel], encapsulation: 2 });
        return CompleterEditorComponent;
    }(DefaultEditor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CompleterEditorComponent, [{
            type: core.Component,
            args: [{
                    selector: 'completer-editor',
                    template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    ",
                }]
        }], function () { return [{ type: ng2Completer.CompleterService }]; }, null); })();

    var InputEditorComponent = /** @class */ (function (_super) {
        __extends(InputEditorComponent, _super);
        function InputEditorComponent() {
            return _super.call(this) || this;
        }
        InputEditorComponent.ɵfac = function InputEditorComponent_Factory(t) { return new (t || InputEditorComponent)(); };
        InputEditorComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: InputEditorComponent, selectors: [["input-editor"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"]], template: function InputEditorComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "input", 0);
                core["ɵɵlistener"]("ngModelChange", function InputEditorComponent_Template_input_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function InputEditorComponent_Template_input_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function InputEditorComponent_Template_input_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function InputEditorComponent_Template_input_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("placeholder", ctx.cell.getTitle())("disabled", !ctx.cell.isEditable());
            } }, directives: [forms.DefaultValueAccessor, common.NgClass, forms.NgControlStatus, forms.NgModel], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
        return InputEditorComponent;
    }(DefaultEditor));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](InputEditorComponent, [{
            type: core.Component,
            args: [{
                    selector: 'input-editor',
                    styleUrls: ['./editor.component.scss'],
                    template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
                }]
        }], function () { return []; }, null); })();

    function DefaultEditComponent_select_editor_1_Template(rf, ctx) { if (rf & 1) {
        var _r209 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "select-editor", 5);
        core["ɵɵlistener"]("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) { core["ɵɵrestoreView"](_r209); var ctx_r208 = core["ɵɵnextContext"](); return ctx_r208.onClick($event); })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) { core["ɵɵrestoreView"](_r209); var ctx_r210 = core["ɵɵnextContext"](); return ctx_r210.onEdited($event); })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() { core["ɵɵrestoreView"](_r209); var ctx_r211 = core["ɵɵnextContext"](); return ctx_r211.onStopEditing(); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r203 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r203.cell)("inputClass", ctx_r203.inputClass);
    } }
    function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) { if (rf & 1) {
        var _r213 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "textarea-editor", 5);
        core["ɵɵlistener"]("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) { core["ɵɵrestoreView"](_r213); var ctx_r212 = core["ɵɵnextContext"](); return ctx_r212.onClick($event); })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) { core["ɵɵrestoreView"](_r213); var ctx_r214 = core["ɵɵnextContext"](); return ctx_r214.onEdited($event); })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() { core["ɵɵrestoreView"](_r213); var ctx_r215 = core["ɵɵnextContext"](); return ctx_r215.onStopEditing(); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r204 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r204.cell)("inputClass", ctx_r204.inputClass);
    } }
    function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) { if (rf & 1) {
        var _r217 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "checkbox-editor", 6);
        core["ɵɵlistener"]("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) { core["ɵɵrestoreView"](_r217); var ctx_r216 = core["ɵɵnextContext"](); return ctx_r216.onClick($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r205 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r205.cell)("inputClass", ctx_r205.inputClass);
    } }
    function DefaultEditComponent_completer_editor_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "completer-editor", 7);
    } if (rf & 2) {
        var ctx_r206 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r206.cell);
    } }
    function DefaultEditComponent_input_editor_5_Template(rf, ctx) { if (rf & 1) {
        var _r219 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "input-editor", 5);
        core["ɵɵlistener"]("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) { core["ɵɵrestoreView"](_r219); var ctx_r218 = core["ɵɵnextContext"](); return ctx_r218.onClick($event); })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) { core["ɵɵrestoreView"](_r219); var ctx_r220 = core["ɵɵnextContext"](); return ctx_r220.onEdited($event); })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() { core["ɵɵrestoreView"](_r219); var ctx_r221 = core["ɵɵnextContext"](); return ctx_r221.onStopEditing(); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r207 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r207.cell)("inputClass", ctx_r207.inputClass);
    } }
    var DefaultEditComponent = /** @class */ (function (_super) {
        __extends(DefaultEditComponent, _super);
        function DefaultEditComponent() {
            return _super.call(this) || this;
        }
        DefaultEditComponent.prototype.getEditorType = function () {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
        };
        DefaultEditComponent.ɵfac = function DefaultEditComponent_Factory(t) { return new (t || DefaultEditComponent)(); };
        DefaultEditComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: DefaultEditComponent, selectors: [["table-cell-default-editor"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 6, vars: 5, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing"], [3, "cell", "inputClass", "onClick"], [3, "cell"]], template: function DefaultEditComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtemplate"](1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1);
                core["ɵɵtemplate"](2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1);
                core["ɵɵtemplate"](3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2);
                core["ɵɵtemplate"](4, DefaultEditComponent_completer_editor_4_Template, 1, 1, "completer-editor", 3);
                core["ɵɵtemplate"](5, DefaultEditComponent_input_editor_5_Template, 1, 2, "input-editor", 4);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngSwitch", ctx.getEditorType());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "list");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "textarea");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "checkbox");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "completer");
            } }, directives: [common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, SelectEditorComponent, TextareaEditorComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent], encapsulation: 2 });
        return DefaultEditComponent;
    }(EditCellDefault));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DefaultEditComponent, [{
            type: core.Component,
            args: [{
                    selector: 'table-cell-default-editor',
                    templateUrl: './default-edit.component.html',
                }]
        }], function () { return []; }, null); })();

    function EditCellComponent_table_cell_custom_editor_1_Template(rf, ctx) { if (rf & 1) {
        var _r225 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "table-cell-custom-editor", 3);
        core["ɵɵlistener"]("edited", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_edited_0_listener($event) { core["ɵɵrestoreView"](_r225); var ctx_r224 = core["ɵɵnextContext"](); return ctx_r224.onEdited($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r222 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r222.cell)("inputClass", ctx_r222.inputClass);
    } }
    function EditCellComponent_table_cell_default_editor_2_Template(rf, ctx) { if (rf & 1) {
        var _r227 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "table-cell-default-editor", 3);
        core["ɵɵlistener"]("edited", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_edited_0_listener($event) { core["ɵɵrestoreView"](_r227); var ctx_r226 = core["ɵɵnextContext"](); return ctx_r226.onEdited($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r223 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r223.cell)("inputClass", ctx_r223.inputClass);
    } }
    var EditCellComponent = /** @class */ (function () {
        function EditCellComponent() {
            this.inputClass = '';
            this.edited = new core.EventEmitter();
        }
        EditCellComponent.prototype.onEdited = function (event) {
            this.edited.next(event);
            return false;
        };
        EditCellComponent.prototype.getEditorType = function () {
            return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
        };
        EditCellComponent.ɵfac = function EditCellComponent_Factory(t) { return new (t || EditCellComponent)(); };
        EditCellComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: EditCellComponent, selectors: [["table-cell-edit-mode"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "edited", 4, "ngSwitchCase"], [3, "cell", "inputClass", "edited", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "edited"]], template: function EditCellComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtemplate"](1, EditCellComponent_table_cell_custom_editor_1_Template, 1, 2, "table-cell-custom-editor", 1);
                core["ɵɵtemplate"](2, EditCellComponent_table_cell_default_editor_2_Template, 1, 2, "table-cell-default-editor", 2);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngSwitch", ctx.getEditorType());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "custom");
            } }, directives: [common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, CustomEditComponent, DefaultEditComponent], encapsulation: 2 });
        return EditCellComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](EditCellComponent, [{
            type: core.Component,
            args: [{
                    selector: 'table-cell-edit-mode',
                    template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    ",
                }]
        }], null, { cell: [{
                type: core.Input
            }], inputClass: [{
                type: core.Input
            }], edited: [{
                type: core.Output
            }] }); })();

    function CellComponent_table_cell_view_mode_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "table-cell-view-mode", 2);
    } if (rf & 2) {
        var ctx_r197 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r197.cell);
    } }
    function CellComponent_table_cell_edit_mode_1_Template(rf, ctx) { if (rf & 1) {
        var _r200 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "table-cell-edit-mode", 3);
        core["ɵɵlistener"]("edited", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_edited_0_listener($event) { core["ɵɵrestoreView"](_r200); var ctx_r199 = core["ɵɵnextContext"](); return ctx_r199.onEdited($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r198 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("cell", ctx_r198.cell)("inputClass", ctx_r198.inputClass);
    } }
    var CellComponent = /** @class */ (function () {
        function CellComponent() {
            this.inputClass = '';
            this.mode = 'inline';
            this.isInEditing = false;
            this.edited = new core.EventEmitter();
        }
        CellComponent.prototype.onEdited = function (event) {
            if (this.isNew) {
                this.grid.create(this.grid.getNewRow(), this.createConfirm);
            }
            else {
                this.grid.save(this.row, this.editConfirm);
            }
        };
        CellComponent.ɵfac = function CellComponent_Factory(t) { return new (t || CellComponent)(); };
        CellComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CellComponent, selectors: [["ng2-smart-table-cell"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", createConfirm: "createConfirm", isNew: "isNew", cell: "cell", inputClass: "inputClass", mode: "mode", isInEditing: "isInEditing" }, outputs: { edited: "edited" }, decls: 2, vars: 2, consts: [[3, "cell", 4, "ngIf"], [3, "cell", "inputClass", "edited", 4, "ngIf"], [3, "cell"], [3, "cell", "inputClass", "edited"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, CellComponent_table_cell_view_mode_0_Template, 1, 1, "table-cell-view-mode", 0);
                core["ɵɵtemplate"](1, CellComponent_table_cell_edit_mode_1_Template, 1, 2, "table-cell-edit-mode", 1);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", !ctx.isInEditing);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.isInEditing);
            } }, directives: [common.NgIf, ViewCellComponent, EditCellComponent], encapsulation: 2 });
        return CellComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CellComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-smart-table-cell',
                    template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  ",
                }]
        }], null, { grid: [{
                type: core.Input
            }], row: [{
                type: core.Input
            }], editConfirm: [{
                type: core.Input
            }], createConfirm: [{
                type: core.Input
            }], isNew: [{
                type: core.Input
            }], cell: [{
                type: core.Input
            }], inputClass: [{
                type: core.Input
            }], mode: [{
                type: core.Input
            }], isInEditing: [{
                type: core.Input
            }], edited: [{
                type: core.Output
            }] }); })();

    var _c0$2 = ["ng2-st-tbody", ""];
    function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
        var _r294 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 6);
        core["ɵɵlistener"]("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener() { core["ɵɵrestoreView"](_r294); var row_r285 = core["ɵɵnextContext"]().$implicit; var ctx_r292 = core["ɵɵnextContext"](); return ctx_r292.multipleSelectRow.emit(row_r285); });
        core["ɵɵelement"](1, "input", 7);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var row_r285 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngModel", row_r285.isSelected);
    } }
    function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
        var _r297 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 8);
        core["ɵɵelementStart"](1, "ng2-st-tbody-custom", 9);
        core["ɵɵlistener"]("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) { core["ɵɵrestoreView"](_r297); var ctx_r296 = core["ɵɵnextContext"](2); return ctx_r296.custom.emit($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](2, "ng2-st-tbody-edit-delete", 10);
        core["ɵɵlistener"]("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() { core["ɵɵrestoreView"](_r297); var row_r285 = core["ɵɵnextContext"]().$implicit; var ctx_r298 = core["ɵɵnextContext"](); return ctx_r298.edit.emit(row_r285); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() { core["ɵɵrestoreView"](_r297); var row_r285 = core["ɵɵnextContext"]().$implicit; var ctx_r300 = core["ɵɵnextContext"](); return ctx_r300.delete.emit(row_r285); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { core["ɵɵrestoreView"](_r297); var ctx_r302 = core["ɵɵnextContext"](2); return ctx_r302.editRowSelect.emit($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var row_r285 = core["ɵɵnextContext"]().$implicit;
        var ctx_r287 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("grid", ctx_r287.grid)("row", row_r285)("source", ctx_r287.source);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("grid", ctx_r287.grid)("deleteConfirm", ctx_r287.deleteConfirm)("editConfirm", ctx_r287.editConfirm)("row", row_r285)("source", ctx_r287.source);
    } }
    function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "td", 8);
        core["ɵɵelement"](1, "ng2-st-tbody-create-cancel", 11);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var row_r285 = core["ɵɵnextContext"]().$implicit;
        var ctx_r288 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("grid", ctx_r288.grid)("row", row_r285)("editConfirm", ctx_r288.editConfirm);
    } }
    function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "td");
        core["ɵɵelement"](1, "ng2-smart-table-cell", 12);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var cell_r305 = ctx.$implicit;
        var row_r285 = core["ɵɵnextContext"]().$implicit;
        var ctx_r289 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("cell", cell_r305)("grid", ctx_r289.grid)("row", row_r285)("isNew", false)("mode", ctx_r289.mode)("editConfirm", ctx_r289.editConfirm)("inputClass", ctx_r289.editInputClass)("isInEditing", row_r285.isInEditing);
    } }
    function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "td", 8);
        core["ɵɵelement"](1, "ng2-st-tbody-create-cancel", 11);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var row_r285 = core["ɵɵnextContext"]().$implicit;
        var ctx_r290 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("grid", ctx_r290.grid)("row", row_r285)("editConfirm", ctx_r290.editConfirm);
    } }
    function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
        var _r309 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 8);
        core["ɵɵelementStart"](1, "ng2-st-tbody-custom", 9);
        core["ɵɵlistener"]("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) { core["ɵɵrestoreView"](_r309); var ctx_r308 = core["ɵɵnextContext"](2); return ctx_r308.custom.emit($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](2, "ng2-st-tbody-edit-delete", 10);
        core["ɵɵlistener"]("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() { core["ɵɵrestoreView"](_r309); var row_r285 = core["ɵɵnextContext"]().$implicit; var ctx_r310 = core["ɵɵnextContext"](); return ctx_r310.edit.emit(row_r285); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() { core["ɵɵrestoreView"](_r309); var row_r285 = core["ɵɵnextContext"]().$implicit; var ctx_r312 = core["ɵɵnextContext"](); return ctx_r312.delete.emit(row_r285); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { core["ɵɵrestoreView"](_r309); var ctx_r314 = core["ɵɵnextContext"](2); return ctx_r314.editRowSelect.emit($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var row_r285 = core["ɵɵnextContext"]().$implicit;
        var ctx_r291 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("grid", ctx_r291.grid)("row", row_r285)("source", ctx_r291.source);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("grid", ctx_r291.grid)("deleteConfirm", ctx_r291.deleteConfirm)("editConfirm", ctx_r291.editConfirm)("row", row_r285)("source", ctx_r291.source);
    } }
    var _c1 = function (a0) { return { selected: a0 }; };
    function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
        var _r317 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "tr", 2);
        core["ɵɵlistener"]("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() { core["ɵɵrestoreView"](_r317); var row_r285 = ctx.$implicit; var ctx_r316 = core["ɵɵnextContext"](); return ctx_r316.userSelectRow.emit(row_r285); })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() { core["ɵɵrestoreView"](_r317); var row_r285 = ctx.$implicit; var ctx_r318 = core["ɵɵnextContext"](); return ctx_r318.rowHover.emit(row_r285); });
        core["ɵɵtemplate"](1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);
        core["ɵɵtemplate"](2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);
        core["ɵɵtemplate"](3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 4);
        core["ɵɵtemplate"](4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 5);
        core["ɵɵtemplate"](5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 4);
        core["ɵɵtemplate"](6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 4);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var row_r285 = ctx.$implicit;
        var ctx_r283 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("className", ctx_r283.rowClassFunction(row_r285))("ngClass", core["ɵɵpureFunction1"](8, _c1, row_r285.isSelected));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r283.isMultiSelectVisible);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !row_r285.isInEditing && ctx_r283.showActionColumnLeft);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", row_r285.isInEditing && ctx_r283.showActionColumnLeft);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", row_r285.cells);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", row_r285.isInEditing && ctx_r283.showActionColumnRight);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", !row_r285.isInEditing && ctx_r283.showActionColumnRight);
    } }
    function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "tr");
        core["ɵɵelementStart"](1, "td");
        core["ɵɵtext"](2);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r284 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵattribute"]("colspan", ctx_r284.tableColumnsCount);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", ctx_r284.noDataMessage, " ");
    } }
    var Ng2SmartTableTbodyComponent = /** @class */ (function () {
        function Ng2SmartTableTbodyComponent() {
            this.save = new core.EventEmitter();
            this.cancel = new core.EventEmitter();
            this.edit = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.custom = new core.EventEmitter();
            this.edited = new core.EventEmitter();
            this.userSelectRow = new core.EventEmitter();
            this.editRowSelect = new core.EventEmitter();
            this.multipleSelectRow = new core.EventEmitter();
            this.rowHover = new core.EventEmitter();
        }
        Object.defineProperty(Ng2SmartTableTbodyComponent.prototype, "tableColumnsCount", {
            get: function () {
                var actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
                return this.grid.getColumns().length + actionColumns;
            },
            enumerable: true,
            configurable: true
        });
        Ng2SmartTableTbodyComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.mode = this.grid.getSetting('mode');
            this.editInputClass = this.grid.getSetting('edit.inputClass');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.isActionEdit = this.grid.getSetting('actions.edit');
            this.isActionDelete = this.grid.getSetting('actions.delete');
            this.noDataMessage = this.grid.getSetting('noDataMessage');
        };
        Ng2SmartTableTbodyComponent.ɵfac = function Ng2SmartTableTbodyComponent_Factory(t) { return new (t || Ng2SmartTableTbodyComponent)(); };
        Ng2SmartTableTbodyComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: Ng2SmartTableTbodyComponent, selectors: [["", "ng2-st-tbody", ""]], inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, features: [core["ɵɵNgOnChangesFeature"]()], attrs: _c0$2, decls: 2, vars: 2, consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]], template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);
                core["ɵɵtemplate"](1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngForOf", ctx.grid.getRows());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.grid.getRows().length == 0);
            } }, directives: [common.NgForOf, common.NgIf, common.NgClass, forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel, TbodyCustomComponent, TbodyEditDeleteComponent, TbodyCreateCancelComponent, CellComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"] });
        return Ng2SmartTableTbodyComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](Ng2SmartTableTbodyComponent, [{
            type: core.Component,
            args: [{
                    selector: '[ng2-st-tbody]',
                    styleUrls: ['./tbody.component.scss'],
                    templateUrl: './tbody.component.html',
                }]
        }], null, { grid: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], deleteConfirm: [{
                type: core.Input
            }], editConfirm: [{
                type: core.Input
            }], rowClassFunction: [{
                type: core.Input
            }], save: [{
                type: core.Output
            }], cancel: [{
                type: core.Output
            }], edit: [{
                type: core.Output
            }], delete: [{
                type: core.Output
            }], custom: [{
                type: core.Output
            }], edited: [{
                type: core.Output
            }], userSelectRow: [{
                type: core.Output
            }], editRowSelect: [{
                type: core.Output
            }], multipleSelectRow: [{
                type: core.Output
            }], rowHover: [{
                type: core.Output
            }] }); })();

    var _c0$3 = ["ng2-st-checkbox-select-all", ""];
    var CheckboxSelectAllComponent = /** @class */ (function () {
        function CheckboxSelectAllComponent() {
        }
        CheckboxSelectAllComponent.ɵfac = function CheckboxSelectAllComponent_Factory(t) { return new (t || CheckboxSelectAllComponent)(); };
        CheckboxSelectAllComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CheckboxSelectAllComponent, selectors: [["", "ng2-st-checkbox-select-all", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected" }, attrs: _c0$3, decls: 1, vars: 1, consts: [["type", "checkbox", 3, "ngModel"]], template: function CheckboxSelectAllComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "input", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngModel", ctx.isAllSelected);
            } }, directives: [forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel], encapsulation: 2 });
        return CheckboxSelectAllComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CheckboxSelectAllComponent, [{
            type: core.Component,
            args: [{
                    selector: '[ng2-st-checkbox-select-all]',
                    template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  ",
                }]
        }], null, { grid: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], isAllSelected: [{
                type: core.Input
            }] }); })();

    var _c0$4 = ["ng2-st-actions-title", ""];
    var ActionsTitleComponent = /** @class */ (function () {
        function ActionsTitleComponent(ref) {
            this.ref = ref;
        }
        ActionsTitleComponent.prototype.ngAfterViewInit = function () {
            this.ref.nativeElement.classList.add('ng2-smart-actions');
        };
        ActionsTitleComponent.prototype.ngOnChanges = function () {
            this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
        };
        ActionsTitleComponent.ɵfac = function ActionsTitleComponent_Factory(t) { return new (t || ActionsTitleComponent)(core["ɵɵdirectiveInject"](core.ElementRef)); };
        ActionsTitleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ActionsTitleComponent, selectors: [["", "ng2-st-actions-title", ""]], inputs: { grid: "grid" }, features: [core["ɵɵNgOnChangesFeature"]()], attrs: _c0$4, decls: 2, vars: 1, consts: [[1, "ng2-smart-title"]], template: function ActionsTitleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵtext"](1);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate"](ctx.actionsColumnTitle);
            } }, encapsulation: 2 });
        return ActionsTitleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ActionsTitleComponent, [{
            type: core.Component,
            args: [{
                    selector: '[ng2-st-actions-title]',
                    template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  ",
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { grid: [{
                type: core.Input
            }] }); })();

    function TitleComponent_a_0_Template(rf, ctx) { if (rf & 1) {
        var _r344 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 2);
        core["ɵɵlistener"]("click", function TitleComponent_a_0_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r344); var ctx_r343 = core["ɵɵnextContext"](); return ctx_r343._sort($event); });
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r341 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngClass", ctx_r341.currentDirection);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", ctx_r341.column.title, " ");
    } }
    function TitleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "span", 3);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r342 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](ctx_r342.column.title);
    } }
    var TitleComponent = /** @class */ (function () {
        function TitleComponent() {
            this.currentDirection = '';
            this.sort = new core.EventEmitter();
        }
        TitleComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.source) {
                if (!changes.source.firstChange) {
                    this.dataChangedSub.unsubscribe();
                }
                this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                    var sortConf = _this.source.getSort();
                    if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                        _this.currentDirection = sortConf[0]['direction'];
                    }
                    else {
                        _this.currentDirection = '';
                    }
                    sortConf.forEach(function (fieldConf) {
                    });
                });
            }
        };
        TitleComponent.prototype._sort = function (event) {
            event.preventDefault();
            this.changeSortDirection();
            this.source.setSort([
                {
                    field: this.column.id,
                    direction: this.currentDirection,
                    compare: this.column.getCompareFunction(),
                },
            ]);
            this.sort.emit(null);
        };
        TitleComponent.prototype.changeSortDirection = function () {
            if (this.currentDirection) {
                var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
                this.currentDirection = newDirection;
            }
            else {
                this.currentDirection = this.column.sortDirection;
            }
            return this.currentDirection;
        };
        TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
        TitleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["ng2-smart-table-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, TitleComponent_a_0_Template, 2, 2, "a", 0);
                core["ɵɵtemplate"](1, TitleComponent_span_1_Template, 2, 1, "span", 1);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.column.isSortable);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", !ctx.column.isSortable);
            } }, directives: [common.NgIf, common.NgClass], styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]::after, a.sort.desc[_ngcontent-%COMP%]::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc[_ngcontent-%COMP%]::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"] });
        return TitleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TitleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-smart-table-title',
                    styleUrls: ['./title.component.scss'],
                    template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
                }]
        }], null, { column: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], sort: [{
                type: core.Output
            }] }); })();

    var ColumnTitleComponent = /** @class */ (function () {
        function ColumnTitleComponent() {
            this.sort = new core.EventEmitter();
        }
        ColumnTitleComponent.ɵfac = function ColumnTitleComponent_Factory(t) { return new (t || ColumnTitleComponent)(); };
        ColumnTitleComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ColumnTitleComponent, selectors: [["ng2-st-column-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, decls: 2, vars: 2, consts: [[1, "ng2-smart-title"], [3, "source", "column", "sort"]], template: function ColumnTitleComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵelementStart"](1, "ng2-smart-table-title", 1);
                core["ɵɵlistener"]("sort", function ColumnTitleComponent_Template_ng2_smart_table_title_sort_1_listener($event) { return ctx.sort.emit($event); });
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("source", ctx.source)("column", ctx.column);
            } }, directives: [TitleComponent], encapsulation: 2 });
        return ColumnTitleComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ColumnTitleComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-st-column-title',
                    template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  ",
                }]
        }], null, { column: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], sort: [{
                type: core.Output
            }] }); })();

    var _c0$5 = ["ng2-st-thead-titles-row", ""];
    function TheadTitlesRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
        var _r372 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "th", 3);
        core["ɵɵlistener"]("click", function TheadTitlesRowComponent_th_0_Template_th_click_0_listener($event) { core["ɵɵrestoreView"](_r372); var ctx_r371 = core["ɵɵnextContext"](); return ctx_r371.selectAllRows.emit($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r367 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("grid", ctx_r367.grid)("source", ctx_r367.source)("isAllSelected", ctx_r367.isAllSelected);
    } }
    function TheadTitlesRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "th", 4);
    } if (rf & 2) {
        var ctx_r368 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("grid", ctx_r368.grid);
    } }
    function TheadTitlesRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
        var _r375 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "th", 5);
        core["ɵɵelementStart"](1, "ng2-st-column-title", 6);
        core["ɵɵlistener"]("sort", function TheadTitlesRowComponent_th_2_Template_ng2_st_column_title_sort_1_listener($event) { core["ɵɵrestoreView"](_r375); var ctx_r374 = core["ɵɵnextContext"](); return ctx_r374.sort.emit($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var column_r373 = ctx.$implicit;
        var ctx_r369 = core["ɵɵnextContext"]();
        core["ɵɵclassMapInterpolate1"]("ng2-smart-th ", column_r373.id, "");
        core["ɵɵstyleProp"]("width", column_r373.width);
        core["ɵɵproperty"]("ngClass", column_r373.class);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("source", ctx_r369.source)("column", column_r373);
    } }
    function TheadTitlesRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "th", 4);
    } if (rf & 2) {
        var ctx_r370 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("grid", ctx_r370.grid);
    } }
    var TheadTitlesRowComponent = /** @class */ (function () {
        function TheadTitlesRowComponent() {
            this.sort = new core.EventEmitter();
            this.selectAllRows = new core.EventEmitter();
        }
        TheadTitlesRowComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
        };
        TheadTitlesRowComponent.ɵfac = function TheadTitlesRowComponent_Factory(t) { return new (t || TheadTitlesRowComponent)(); };
        TheadTitlesRowComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TheadTitlesRowComponent, selectors: [["", "ng2-st-thead-titles-row", ""]], inputs: { grid: "grid", isAllSelected: "isAllSelected", source: "source" }, outputs: { sort: "sort", selectAllRows: "selectAllRows" }, features: [core["ɵɵNgOnChangesFeature"]()], attrs: _c0$5, decls: 4, vars: 4, consts: [["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click", 4, "ngIf"], ["ng2-st-actions-title", "", 3, "grid", 4, "ngIf"], [3, "class", "ngClass", "width", 4, "ngFor", "ngForOf"], ["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click"], ["ng2-st-actions-title", "", 3, "grid"], [3, "ngClass"], [3, "source", "column", "sort"]], template: function TheadTitlesRowComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, TheadTitlesRowComponent_th_0_Template, 1, 3, "th", 0);
                core["ɵɵtemplate"](1, TheadTitlesRowComponent_th_1_Template, 1, 1, "th", 1);
                core["ɵɵtemplate"](2, TheadTitlesRowComponent_th_2_Template, 2, 8, "th", 2);
                core["ɵɵtemplate"](3, TheadTitlesRowComponent_th_3_Template, 1, 1, "th", 1);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.isMultiSelectVisible);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.showActionColumnLeft);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.grid.getColumns());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.showActionColumnRight);
            } }, directives: [common.NgIf, common.NgForOf, CheckboxSelectAllComponent, ActionsTitleComponent, common.NgClass, ColumnTitleComponent], encapsulation: 2 });
        return TheadTitlesRowComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TheadTitlesRowComponent, [{
            type: core.Component,
            args: [{
                    selector: '[ng2-st-thead-titles-row]',
                    template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  ",
                }]
        }], null, { grid: [{
                type: core.Input
            }], isAllSelected: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], sort: [{
                type: core.Output
            }], selectAllRows: [{
                type: core.Output
            }] }); })();

    var _c0$6 = ["ng2-st-add-button", ""];
    function AddButtonComponent_a_0_Template(rf, ctx) { if (rf & 1) {
        var _r340 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 1);
        core["ɵɵlistener"]("click", function AddButtonComponent_a_0_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r340); var ctx_r339 = core["ɵɵnextContext"](); return ctx_r339.onAdd($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r338 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("innerHTML", ctx_r338.addNewButtonContent, core["ɵɵsanitizeHtml"]);
    } }
    var AddButtonComponent = /** @class */ (function () {
        function AddButtonComponent(ref) {
            this.ref = ref;
            this.create = new core.EventEmitter();
        }
        AddButtonComponent.prototype.ngAfterViewInit = function () {
            this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
        };
        AddButtonComponent.prototype.ngOnChanges = function () {
            this.isActionAdd = this.grid.getSetting('actions.add');
            this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
        };
        AddButtonComponent.prototype.onAdd = function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (this.grid.getSetting('mode') === 'external') {
                this.create.emit({
                    source: this.source,
                });
            }
            else {
                this.grid.createFormShown = true;
            }
        };
        AddButtonComponent.ɵfac = function AddButtonComponent_Factory(t) { return new (t || AddButtonComponent)(core["ɵɵdirectiveInject"](core.ElementRef)); };
        AddButtonComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: AddButtonComponent, selectors: [["", "ng2-st-add-button", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create" }, features: [core["ɵɵNgOnChangesFeature"]()], attrs: _c0$6, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-add-add", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-add", 3, "innerHTML", "click"]], template: function AddButtonComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, AddButtonComponent_a_0_Template, 1, 1, "a", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.isActionAdd);
            } }, directives: [common.NgIf], encapsulation: 2 });
        return AddButtonComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](AddButtonComponent, [{
            type: core.Component,
            args: [{
                    selector: '[ng2-st-add-button]',
                    template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  ",
                }]
        }], function () { return [{ type: core.ElementRef }]; }, { grid: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], create: [{
                type: core.Output
            }] }); })();

    var FilterDefault = /** @class */ (function () {
        function FilterDefault() {
            this.inputClass = '';
            this.filter = new core.EventEmitter();
            this.query = '';
        }
        FilterDefault.prototype.onFilter = function (query) {
            this.source.addFilter({
                field: this.column.id,
                search: query,
                filter: this.column.getFilterFunction(),
            });
        };
        FilterDefault.ɵfac = function FilterDefault_Factory(t) { return new (t || FilterDefault)(); };
        FilterDefault.ɵdir = core["ɵɵdefineDirective"]({ type: FilterDefault, inputs: { column: "column", source: "source", inputClass: "inputClass" }, outputs: { filter: "filter" } });
        return FilterDefault;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FilterDefault, [{
            type: core.Directive
        }], null, { column: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], inputClass: [{
                type: core.Input
            }], filter: [{
                type: core.Output
            }] }); })();

    var _c0$7 = ["dynamicTarget"];
    function CustomFilterComponent_ng_template_0_Template(rf, ctx) { }
    var CustomFilterComponent = /** @class */ (function (_super) {
        __extends(CustomFilterComponent, _super);
        function CustomFilterComponent(resolver) {
            var _this = _super.call(this) || this;
            _this.resolver = resolver;
            return _this;
        }
        CustomFilterComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (this.column && !this.customComponent) {
                var componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
                this.customComponent = this.dynamicTarget.createComponent(componentFactory);
                // set @Inputs and @Outputs of custom component
                this.customComponent.instance.query = this.query;
                this.customComponent.instance.column = this.column;
                this.customComponent.instance.source = this.source;
                this.customComponent.instance.inputClass = this.inputClass;
                this.customComponent.instance.filter.subscribe(function (event) { return _this.onFilter(event); });
            }
            if (this.customComponent) {
                this.customComponent.instance.ngOnChanges(changes);
            }
        };
        CustomFilterComponent.prototype.ngOnDestroy = function () {
            if (this.customComponent) {
                this.customComponent.destroy();
            }
        };
        CustomFilterComponent.ɵfac = function CustomFilterComponent_Factory(t) { return new (t || CustomFilterComponent)(core["ɵɵdirectiveInject"](core.ComponentFactoryResolver)); };
        CustomFilterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CustomFilterComponent, selectors: [["custom-table-filter"]], viewQuery: function CustomFilterComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$7, true, core.ViewContainerRef);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.dynamicTarget = _t.first);
            } }, inputs: { query: "query" }, features: [core["ɵɵInheritDefinitionFeature"], core["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomFilterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, CustomFilterComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, core["ɵɵtemplateRefExtractor"]);
            } }, encapsulation: 2 });
        return CustomFilterComponent;
    }(FilterDefault));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CustomFilterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'custom-table-filter',
                    template: "<ng-template #dynamicTarget></ng-template>",
                }]
        }], function () { return [{ type: core.ComponentFactoryResolver }]; }, { query: [{
                type: core.Input
            }], dynamicTarget: [{
                type: core.ViewChild,
                args: ['dynamicTarget', { read: core.ViewContainerRef, static: true }]
            }] }); })();

    var DefaultFilter = /** @class */ (function () {
        function DefaultFilter() {
            this.delay = 300;
            this.filter = new core.EventEmitter();
        }
        DefaultFilter.prototype.ngOnDestroy = function () {
            if (this.changesSubscription) {
                this.changesSubscription.unsubscribe();
            }
        };
        DefaultFilter.prototype.setFilter = function () {
            this.filter.emit(this.query);
        };
        DefaultFilter.ɵfac = function DefaultFilter_Factory(t) { return new (t || DefaultFilter)(); };
        DefaultFilter.ɵdir = core["ɵɵdefineDirective"]({ type: DefaultFilter, inputs: { query: "query", inputClass: "inputClass", column: "column" }, outputs: { filter: "filter" } });
        return DefaultFilter;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DefaultFilter, [{
            type: core.Directive
        }], null, { query: [{
                type: core.Input
            }], inputClass: [{
                type: core.Input
            }], column: [{
                type: core.Input
            }], filter: [{
                type: core.Output
            }] }); })();

    var _c0$8 = ["inputControl"];
    function SelectFilterComponent_option_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 4);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var option_r261 = ctx.$implicit;
        core["ɵɵproperty"]("value", option_r261.value);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"](" ", option_r261.title, " ");
    } }
    var SelectFilterComponent = /** @class */ (function (_super) {
        __extends(SelectFilterComponent, _super);
        function SelectFilterComponent() {
            return _super.call(this) || this;
        }
        SelectFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.inputControl.valueChanges
                .pipe(operators.skip(1), operators.distinctUntilChanged(), operators.debounceTime(this.delay))
                .subscribe(function (value) { return _this.setFilter(); });
        };
        SelectFilterComponent.ɵfac = function SelectFilterComponent_Factory(t) { return new (t || SelectFilterComponent)(); };
        SelectFilterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: SelectFilterComponent, selectors: [["select-filter"]], viewQuery: function SelectFilterComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0$8, true, forms.NgControl);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.inputControl = _t.first);
            } }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 4, consts: [[1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["inputControl", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectFilterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "select", 0, 1);
                core["ɵɵlistener"]("ngModelChange", function SelectFilterComponent_Template_select_ngModelChange_0_listener($event) { return ctx.query = $event; });
                core["ɵɵelementStart"](2, "option", 2);
                core["ɵɵtext"](3);
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](4, SelectFilterComponent_option_4_Template, 2, 2, "option", 3);
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngClass", ctx.inputClass)("ngModel", ctx.query);
                core["ɵɵadvance"](3);
                core["ɵɵtextInterpolate"](ctx.column.getFilterConfig().selectText);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.column.getFilterConfig().list);
            } }, directives: [forms.SelectControlValueAccessor, common.NgClass, forms.NgControlStatus, forms.NgModel, forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"], common.NgForOf], encapsulation: 2 });
        return SelectFilterComponent;
    }(DefaultFilter));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](SelectFilterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'select-filter',
                    template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  ",
                }]
        }], function () { return []; }, { inputControl: [{
                type: core.ViewChild,
                args: ['inputControl', { read: forms.NgControl, static: true }]
            }] }); })();

    function CheckboxFilterComponent_a_1_Template(rf, ctx) { if (rf & 1) {
        var _r258 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 2);
        core["ɵɵlistener"]("click", function CheckboxFilterComponent_a_1_Template_a_click_0_listener($event) { core["ɵɵrestoreView"](_r258); var ctx_r257 = core["ɵɵnextContext"](); return ctx_r257.resetFilter($event); });
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r256 = core["ɵɵnextContext"]();
        var tmp_0_0 = null;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](((tmp_0_0 = ctx_r256.column.getFilterConfig()) == null ? null : tmp_0_0.resetText) || "reset");
    } }
    var CheckboxFilterComponent = /** @class */ (function (_super) {
        __extends(CheckboxFilterComponent, _super);
        function CheckboxFilterComponent() {
            var _this = _super.call(this) || this;
            _this.filterActive = false;
            _this.inputControl = new forms.FormControl();
            return _this;
        }
        CheckboxFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.changesSubscription = this.inputControl.valueChanges
                .pipe(operators.debounceTime(this.delay))
                .subscribe(function (checked) {
                _this.filterActive = true;
                var trueVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().true) || true;
                var falseVal = (_this.column.getFilterConfig() && _this.column.getFilterConfig().false) || false;
                _this.query = checked ? trueVal : falseVal;
                _this.setFilter();
            });
        };
        CheckboxFilterComponent.prototype.resetFilter = function (event) {
            event.preventDefault();
            this.query = '';
            this.inputControl.setValue(false, { emitEvent: false });
            this.filterActive = false;
            this.setFilter();
        };
        CheckboxFilterComponent.ɵfac = function CheckboxFilterComponent_Factory(t) { return new (t || CheckboxFilterComponent)(); };
        CheckboxFilterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CheckboxFilterComponent, selectors: [["checkbox-filter"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 3, consts: [["type", "checkbox", 1, "form-control", 3, "formControl", "ngClass"], ["href", "#", 3, "click", 4, "ngIf"], ["href", "#", 3, "click"]], template: function CheckboxFilterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "input", 0);
                core["ɵɵtemplate"](1, CheckboxFilterComponent_a_1_Template, 2, 1, "a", 1);
            } if (rf & 2) {
                core["ɵɵproperty"]("formControl", ctx.inputControl)("ngClass", ctx.inputClass);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.filterActive);
            } }, directives: [forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.FormControlDirective, common.NgClass, common.NgIf], encapsulation: 2 });
        return CheckboxFilterComponent;
    }(DefaultFilter));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CheckboxFilterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'checkbox-filter',
                    template: "\n    <input type=\"checkbox\" [formControl]=\"inputControl\" [ngClass]=\"inputClass\" class=\"form-control\">\n    <a href=\"#\" *ngIf=\"filterActive\"\n                (click)=\"resetFilter($event)\">{{column.getFilterConfig()?.resetText || 'reset'}}</a>\n  ",
                }]
        }], function () { return []; }, null); })();

    var CompleterFilterComponent = /** @class */ (function (_super) {
        __extends(CompleterFilterComponent, _super);
        function CompleterFilterComponent(completerService) {
            var _this = _super.call(this) || this;
            _this.completerService = completerService;
            _this.completerContent = new rxjs.Subject();
            return _this;
        }
        CompleterFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            var config = this.column.getFilterConfig().completer;
            config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
            config.dataService.descriptionField(config.descriptionField);
            this.changesSubscription = this.completerContent
                .pipe(operators.map(function (ev) { return (ev && ev.title) || ev || ''; }), operators.distinctUntilChanged(), operators.debounceTime(this.delay))
                .subscribe(function (search) {
                _this.query = search;
                _this.setFilter();
            });
        };
        CompleterFilterComponent.prototype.inputTextChanged = function (event) {
            // workaround to trigger the search event when the home/end buttons are clicked
            // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
            // so here it gets called manually
            if (event === '') {
                this.completerContent.next(event);
            }
        };
        CompleterFilterComponent.ɵfac = function CompleterFilterComponent_Factory(t) { return new (t || CompleterFilterComponent)(core["ɵɵdirectiveInject"](ng2Completer.CompleterService)); };
        CompleterFilterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: CompleterFilterComponent, selectors: [["completer-filter"]], features: [core["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterFilterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "ng2-completer", 0);
                core["ɵɵlistener"]("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.query = $event; })("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.inputTextChanged($event); })("selected", function CompleterFilterComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.completerContent.next($event); });
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngModel", ctx.query)("dataService", ctx.column.getFilterConfig().completer.dataService)("minSearchLength", ctx.column.getFilterConfig().completer.minSearchLength || 0)("pause", ctx.column.getFilterConfig().completer.pause || 0)("placeholder", ctx.column.getFilterConfig().completer.placeholder || "Start typing...");
            } }, directives: [ng2Completer.CompleterCmp, forms.NgControlStatus, forms.NgModel], encapsulation: 2 });
        return CompleterFilterComponent;
    }(DefaultFilter));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CompleterFilterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'completer-filter',
                    template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  ",
                }]
        }], function () { return [{ type: ng2Completer.CompleterService }]; }, null); })();

    var InputFilterComponent = /** @class */ (function (_super) {
        __extends(InputFilterComponent, _super);
        function InputFilterComponent() {
            var _this = _super.call(this) || this;
            _this.inputControl = new forms.FormControl();
            return _this;
        }
        InputFilterComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.query) {
                this.inputControl.setValue(this.query);
            }
            this.inputControl.valueChanges
                .pipe(operators.distinctUntilChanged(), operators.debounceTime(this.delay))
                .subscribe(function (value) {
                _this.query = _this.inputControl.value;
                _this.setFilter();
            });
        };
        InputFilterComponent.prototype.ngOnChanges = function (changes) {
            if (changes.query) {
                this.inputControl.setValue(this.query);
            }
        };
        InputFilterComponent.ɵfac = function InputFilterComponent_Factory(t) { return new (t || InputFilterComponent)(); };
        InputFilterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: InputFilterComponent, selectors: [["input-filter"]], features: [core["ɵɵInheritDefinitionFeature"], core["ɵɵNgOnChangesFeature"]()], decls: 1, vars: 3, consts: [["type", "text", 1, "form-control", 3, "ngClass", "formControl", "placeholder"]], template: function InputFilterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelement"](0, "input", 0);
            } if (rf & 2) {
                core["ɵɵpropertyInterpolate"]("placeholder", ctx.column.title);
                core["ɵɵproperty"]("ngClass", ctx.inputClass)("formControl", ctx.inputControl);
            } }, directives: [forms.DefaultValueAccessor, common.NgClass, forms.NgControlStatus, forms.FormControlDirective], encapsulation: 2 });
        return InputFilterComponent;
    }(DefaultFilter));
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](InputFilterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'input-filter',
                    template: "\n    <input\n      [ngClass]=\"inputClass\"\n      [formControl]=\"inputControl\"\n      class=\"form-control\"\n      type=\"text\"\n      placeholder=\"{{ column.title }}\"/>\n  ",
                }]
        }], function () { return []; }, null); })();

    function DefaultFilterComponent_select_filter_1_Template(rf, ctx) { if (rf & 1) {
        var _r247 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "select-filter", 3);
        core["ɵɵlistener"]("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) { core["ɵɵrestoreView"](_r247); var ctx_r246 = core["ɵɵnextContext"](); return ctx_r246.onFilter($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r242 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("query", ctx_r242.query)("ngClass", ctx_r242.inputClass)("column", ctx_r242.column);
    } }
    function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) { if (rf & 1) {
        var _r249 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "checkbox-filter", 3);
        core["ɵɵlistener"]("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) { core["ɵɵrestoreView"](_r249); var ctx_r248 = core["ɵɵnextContext"](); return ctx_r248.onFilter($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r243 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("query", ctx_r243.query)("ngClass", ctx_r243.inputClass)("column", ctx_r243.column);
    } }
    function DefaultFilterComponent_completer_filter_3_Template(rf, ctx) { if (rf & 1) {
        var _r251 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "completer-filter", 3);
        core["ɵɵlistener"]("filter", function DefaultFilterComponent_completer_filter_3_Template_completer_filter_filter_0_listener($event) { core["ɵɵrestoreView"](_r251); var ctx_r250 = core["ɵɵnextContext"](); return ctx_r250.onFilter($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r244 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("query", ctx_r244.query)("ngClass", ctx_r244.inputClass)("column", ctx_r244.column);
    } }
    function DefaultFilterComponent_input_filter_4_Template(rf, ctx) { if (rf & 1) {
        var _r253 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "input-filter", 3);
        core["ɵɵlistener"]("filter", function DefaultFilterComponent_input_filter_4_Template_input_filter_filter_0_listener($event) { core["ɵɵrestoreView"](_r253); var ctx_r252 = core["ɵɵnextContext"](); return ctx_r252.onFilter($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r245 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("query", ctx_r245.query)("ngClass", ctx_r245.inputClass)("column", ctx_r245.column);
    } }
    var DefaultFilterComponent = /** @class */ (function (_super) {
        __extends(DefaultFilterComponent, _super);
        function DefaultFilterComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DefaultFilterComponent.ɵfac = function DefaultFilterComponent_Factory(t) { return ɵDefaultFilterComponent_BaseFactory(t || DefaultFilterComponent); };
        DefaultFilterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: DefaultFilterComponent, selectors: [["default-table-filter"]], inputs: { query: "query" }, features: [core["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 4, consts: [[3, "ngSwitch"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchCase"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchDefault"], [3, "query", "ngClass", "column", "filter"]], template: function DefaultFilterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementContainerStart"](0, 0);
                core["ɵɵtemplate"](1, DefaultFilterComponent_select_filter_1_Template, 1, 3, "select-filter", 1);
                core["ɵɵtemplate"](2, DefaultFilterComponent_checkbox_filter_2_Template, 1, 3, "checkbox-filter", 1);
                core["ɵɵtemplate"](3, DefaultFilterComponent_completer_filter_3_Template, 1, 3, "completer-filter", 1);
                core["ɵɵtemplate"](4, DefaultFilterComponent_input_filter_4_Template, 1, 3, "input-filter", 2);
                core["ɵɵelementContainerEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("ngSwitch", ctx.column.getFilterType());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "list");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "checkbox");
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngSwitchCase", "completer");
            } }, directives: [common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, SelectFilterComponent, common.NgClass, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent], encapsulation: 2 });
        return DefaultFilterComponent;
    }(FilterDefault));
    var ɵDefaultFilterComponent_BaseFactory = core["ɵɵgetInheritedFactory"](DefaultFilterComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](DefaultFilterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'default-table-filter',
                    template: "\n    <ng-container [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </ng-container>\n  ",
                }]
        }], null, { query: [{
                type: core.Input
            }] }); })();

    function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) { if (rf & 1) {
        var _r239 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "custom-table-filter", 4);
        core["ɵɵlistener"]("filter", function FilterComponent_div_0_custom_table_filter_1_Template_custom_table_filter_filter_0_listener($event) { core["ɵɵrestoreView"](_r239); var ctx_r238 = core["ɵɵnextContext"](2); return ctx_r238.onFilter($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r236 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("query", ctx_r236.query)("column", ctx_r236.column)("source", ctx_r236.source)("inputClass", ctx_r236.inputClass);
    } }
    function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) { if (rf & 1) {
        var _r241 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "default-table-filter", 4);
        core["ɵɵlistener"]("filter", function FilterComponent_div_0_default_table_filter_2_Template_default_table_filter_filter_0_listener($event) { core["ɵɵrestoreView"](_r241); var ctx_r240 = core["ɵɵnextContext"](2); return ctx_r240.onFilter($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r237 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("query", ctx_r237.query)("column", ctx_r237.column)("source", ctx_r237.source)("inputClass", ctx_r237.inputClass);
    } }
    function FilterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "div", 1);
        core["ɵɵtemplate"](1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 4, "custom-table-filter", 2);
        core["ɵɵtemplate"](2, FilterComponent_div_0_default_table_filter_2_Template, 1, 4, "default-table-filter", 3);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r235 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("ngSwitch", ctx_r235.column.getFilterType());
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngSwitchCase", "custom");
    } }
    var FilterComponent = /** @class */ (function (_super) {
        __extends(FilterComponent, _super);
        function FilterComponent() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.query = '';
            return _this;
        }
        FilterComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.source) {
                if (!changes.source.firstChange) {
                    this.dataChangedSub.unsubscribe();
                }
                this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                    var filterConf = _this.source.getFilter();
                    if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                        _this.query = '';
                        // add a check for existing filters an set the query if one exists for this column
                        // this covers instances where the filter is set by user code while maintaining existing functionality
                    }
                    else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                        filterConf.filters.forEach(function (k, v) {
                            if (k.field == _this.column.id) {
                                _this.query = k.search;
                            }
                        });
                    }
                });
            }
        };
        FilterComponent.ɵfac = function FilterComponent_Factory(t) { return ɵFilterComponent_BaseFactory(t || FilterComponent); };
        FilterComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["ng2-smart-table-filter"]], features: [core["ɵɵInheritDefinitionFeature"], core["ɵɵNgOnChangesFeature"]()], decls: 1, vars: 1, consts: [["class", "ng2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "ng2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "filter"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, FilterComponent_div_0_Template, 3, 2, "div", 0);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.column.isFilterable);
            } }, directives: [common.NgIf, common.NgSwitch, common.NgSwitchCase, common.NgSwitchDefault, CustomFilterComponent, DefaultFilterComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     .completer-dropdown-holder{font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"] });
        return FilterComponent;
    }(FilterDefault));
    var ɵFilterComponent_BaseFactory = core["ɵɵgetInheritedFactory"](FilterComponent);
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FilterComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-smart-table-filter',
                    styleUrls: ['./filter.component.scss'],
                    template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
                }]
        }], null, null); })();

    var _c0$9 = ["ng2-st-thead-filters-row", ""];
    function TheadFitlersRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "th");
    } }
    function TheadFitlersRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
        var _r350 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "th", 4);
        core["ɵɵlistener"]("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) { core["ɵɵrestoreView"](_r350); var ctx_r349 = core["ɵɵnextContext"](); return ctx_r349.create.emit($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r346 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("grid", ctx_r346.grid);
    } }
    function TheadFitlersRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
        var _r353 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "th");
        core["ɵɵelementStart"](1, "ng2-smart-table-filter", 5);
        core["ɵɵlistener"]("filter", function TheadFitlersRowComponent_th_2_Template_ng2_smart_table_filter_filter_1_listener($event) { core["ɵɵrestoreView"](_r353); var ctx_r352 = core["ɵɵnextContext"](); return ctx_r352.filter.emit($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var column_r351 = ctx.$implicit;
        var ctx_r347 = core["ɵɵnextContext"]();
        core["ɵɵclassMapInterpolate1"]("ng2-smart-th ", column_r351.id, "");
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("source", ctx_r347.source)("column", column_r351)("inputClass", ctx_r347.filterInputClass);
    } }
    function TheadFitlersRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
        var _r355 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "th", 6);
        core["ɵɵlistener"]("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) { core["ɵɵrestoreView"](_r355); var ctx_r354 = core["ɵɵnextContext"](); return ctx_r354.create.emit($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r348 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("grid", ctx_r348.grid)("source", ctx_r348.source);
    } }
    var TheadFitlersRowComponent = /** @class */ (function () {
        function TheadFitlersRowComponent() {
            this.create = new core.EventEmitter();
            this.filter = new core.EventEmitter();
        }
        TheadFitlersRowComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.filterInputClass = this.grid.getSetting('filter.inputClass');
        };
        TheadFitlersRowComponent.ɵfac = function TheadFitlersRowComponent_Factory(t) { return new (t || TheadFitlersRowComponent)(); };
        TheadFitlersRowComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TheadFitlersRowComponent, selectors: [["", "ng2-st-thead-filters-row", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create", filter: "filter" }, features: [core["ɵɵNgOnChangesFeature"]()], attrs: _c0$9, decls: 4, vars: 4, consts: [[4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["ng2-st-add-button", "", 3, "grid", "source", "create", 4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create"], [3, "source", "column", "inputClass", "filter"], ["ng2-st-add-button", "", 3, "grid", "source", "create"]], template: function TheadFitlersRowComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, TheadFitlersRowComponent_th_0_Template, 1, 0, "th", 0);
                core["ɵɵtemplate"](1, TheadFitlersRowComponent_th_1_Template, 1, 1, "th", 1);
                core["ɵɵtemplate"](2, TheadFitlersRowComponent_th_2_Template, 2, 6, "th", 2);
                core["ɵɵtemplate"](3, TheadFitlersRowComponent_th_3_Template, 1, 2, "th", 3);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.isMultiSelectVisible);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.showActionColumnLeft);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.grid.getColumns());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.showActionColumnRight);
            } }, directives: [common.NgIf, common.NgForOf, AddButtonComponent, FilterComponent], encapsulation: 2 });
        return TheadFitlersRowComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TheadFitlersRowComponent, [{
            type: core.Component,
            args: [{
                    selector: '[ng2-st-thead-filters-row]',
                    template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  ",
                }]
        }], null, { grid: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], create: [{
                type: core.Output
            }], filter: [{
                type: core.Output
            }] }); })();

    var ActionsComponent = /** @class */ (function () {
        function ActionsComponent() {
            this.create = new core.EventEmitter();
        }
        ActionsComponent.prototype.ngOnChanges = function () {
            this.createButtonContent = this.grid.getSetting('add.createButtonContent');
            this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
        };
        ActionsComponent.ɵfac = function ActionsComponent_Factory(t) { return new (t || ActionsComponent)(); };
        ActionsComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ActionsComponent, selectors: [["ng2-st-actions"]], inputs: { grid: "grid" }, outputs: { create: "create" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-create", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-cancel", 3, "innerHTML", "click"]], template: function ActionsComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "a", 0);
                core["ɵɵlistener"]("click", function ActionsComponent_Template_a_click_0_listener($event) { $event.preventDefault(); return ctx.create.emit($event); });
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](1, "a", 1);
                core["ɵɵlistener"]("click", function ActionsComponent_Template_a_click_1_listener($event) { $event.preventDefault(); return ctx.grid.createFormShown = false; });
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵproperty"]("innerHTML", ctx.createButtonContent, core["ɵɵsanitizeHtml"]);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("innerHTML", ctx.cancelButtonContent, core["ɵɵsanitizeHtml"]);
            } }, encapsulation: 2 });
        return ActionsComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ActionsComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-st-actions',
                    template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  ",
                }]
        }], null, { grid: [{
                type: core.Input
            }], create: [{
                type: core.Output
            }] }); })();

    var _c0$a = ["ng2-st-thead-form-row", ""];
    function TheadFormRowComponent_td_0_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "td");
    } }
    function TheadFormRowComponent_td_1_Template(rf, ctx) { if (rf & 1) {
        var _r361 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 3);
        core["ɵɵelementStart"](1, "ng2-st-actions", 4);
        core["ɵɵlistener"]("create", function TheadFormRowComponent_td_1_Template_ng2_st_actions_create_1_listener($event) { core["ɵɵrestoreView"](_r361); var ctx_r360 = core["ɵɵnextContext"](); return ctx_r360.onCreate($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r357 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("grid", ctx_r357.grid);
    } }
    function TheadFormRowComponent_td_2_Template(rf, ctx) { if (rf & 1) {
        var _r364 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td");
        core["ɵɵelementStart"](1, "ng2-smart-table-cell", 5);
        core["ɵɵlistener"]("edited", function TheadFormRowComponent_td_2_Template_ng2_smart_table_cell_edited_1_listener($event) { core["ɵɵrestoreView"](_r364); var ctx_r363 = core["ɵɵnextContext"](); return ctx_r363.onCreate($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var cell_r362 = ctx.$implicit;
        var ctx_r358 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("cell", cell_r362)("grid", ctx_r358.grid)("isNew", true)("createConfirm", ctx_r358.createConfirm)("inputClass", ctx_r358.addInputClass)("isInEditing", ctx_r358.grid.getNewRow().isInEditing);
    } }
    function TheadFormRowComponent_td_3_Template(rf, ctx) { if (rf & 1) {
        var _r366 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "td", 3);
        core["ɵɵelementStart"](1, "ng2-st-actions", 4);
        core["ɵɵlistener"]("create", function TheadFormRowComponent_td_3_Template_ng2_st_actions_create_1_listener($event) { core["ɵɵrestoreView"](_r366); var ctx_r365 = core["ɵɵnextContext"](); return ctx_r365.onCreate($event); });
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r359 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("grid", ctx_r359.grid);
    } }
    var TheadFormRowComponent = /** @class */ (function () {
        function TheadFormRowComponent() {
            this.create = new core.EventEmitter();
        }
        TheadFormRowComponent.prototype.onCreate = function (event) {
            event.stopPropagation();
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        };
        TheadFormRowComponent.prototype.ngOnChanges = function () {
            this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
            this.showActionColumnLeft = this.grid.showActionColumn('left');
            this.showActionColumnRight = this.grid.showActionColumn('right');
            this.addInputClass = this.grid.getSetting('add.inputClass');
        };
        TheadFormRowComponent.ɵfac = function TheadFormRowComponent_Factory(t) { return new (t || TheadFormRowComponent)(); };
        TheadFormRowComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: TheadFormRowComponent, selectors: [["", "ng2-st-thead-form-row", ""]], inputs: { grid: "grid", row: "row", createConfirm: "createConfirm" }, outputs: { create: "create" }, features: [core["ɵɵNgOnChangesFeature"]()], attrs: _c0$a, decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions"], [3, "grid", "create"], [3, "cell", "grid", "isNew", "createConfirm", "inputClass", "isInEditing", "edited"]], template: function TheadFormRowComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, TheadFormRowComponent_td_0_Template, 1, 0, "td", 0);
                core["ɵɵtemplate"](1, TheadFormRowComponent_td_1_Template, 2, 1, "td", 1);
                core["ɵɵtemplate"](2, TheadFormRowComponent_td_2_Template, 2, 6, "td", 2);
                core["ɵɵtemplate"](3, TheadFormRowComponent_td_3_Template, 2, 1, "td", 1);
            } if (rf & 2) {
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.showActionColumnLeft);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngForOf", ctx.grid.getNewRow().getCells());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.showActionColumnRight);
            } }, directives: [common.NgIf, common.NgForOf, ActionsComponent, CellComponent], encapsulation: 2 });
        return TheadFormRowComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TheadFormRowComponent, [{
            type: core.Component,
            args: [{
                    selector: '[ng2-st-thead-form-row]',
                    template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  ",
                }]
        }], null, { grid: [{
                type: core.Input
            }], row: [{
                type: core.Input
            }], createConfirm: [{
                type: core.Input
            }], create: [{
                type: core.Output
            }] }); })();

    var _c0$b = ["ng2-st-thead", ""];
    function Ng2SmartTableTheadComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
        var _r333 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "tr", 3);
        core["ɵɵlistener"]("sort", function Ng2SmartTableTheadComponent_tr_0_Template_tr_sort_0_listener($event) { core["ɵɵrestoreView"](_r333); var ctx_r332 = core["ɵɵnextContext"](); return ctx_r332.sort.emit($event); })("selectAllRows", function Ng2SmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener($event) { core["ɵɵrestoreView"](_r333); var ctx_r334 = core["ɵɵnextContext"](); return ctx_r334.selectAllRows.emit($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r329 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("grid", ctx_r329.grid)("isAllSelected", ctx_r329.isAllSelected)("source", ctx_r329.source);
    } }
    function Ng2SmartTableTheadComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
        var _r336 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "tr", 4);
        core["ɵɵlistener"]("create", function Ng2SmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) { core["ɵɵrestoreView"](_r336); var ctx_r335 = core["ɵɵnextContext"](); return ctx_r335.create.emit($event); })("filter", function Ng2SmartTableTheadComponent_tr_1_Template_tr_filter_0_listener($event) { core["ɵɵrestoreView"](_r336); var ctx_r337 = core["ɵɵnextContext"](); return ctx_r337.filter.emit($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r330 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("grid", ctx_r330.grid)("source", ctx_r330.source);
    } }
    function Ng2SmartTableTheadComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelement"](0, "tr", 5);
    } if (rf & 2) {
        var ctx_r331 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("grid", ctx_r331.grid)("createConfirm", ctx_r331.createConfirm);
    } }
    var Ng2SmartTableTheadComponent = /** @class */ (function () {
        function Ng2SmartTableTheadComponent() {
            this.sort = new core.EventEmitter();
            this.selectAllRows = new core.EventEmitter();
            this.create = new core.EventEmitter();
            this.filter = new core.EventEmitter();
        }
        Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
            this.isHideHeader = this.grid.getSetting('hideHeader');
            this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        };
        Ng2SmartTableTheadComponent.ɵfac = function Ng2SmartTableTheadComponent_Factory(t) { return new (t || Ng2SmartTableTheadComponent)(); };
        Ng2SmartTableTheadComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: Ng2SmartTableTheadComponent, selectors: [["", "ng2-st-thead", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected", createConfirm: "createConfirm" }, outputs: { sort: "sort", selectAllRows: "selectAllRows", create: "create", filter: "filter" }, features: [core["ɵɵNgOnChangesFeature"]()], attrs: _c0$b, decls: 3, vars: 3, consts: [["ng2-st-thead-titles-row", "", "class", "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows", 4, "ngIf"], ["ng2-st-thead-filters-row", "", "class", "ng2-smart-filters", 3, "grid", "source", "create", "filter", 4, "ngIf"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm", 4, "ngIf"], ["ng2-st-thead-titles-row", "", 1, "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows"], ["ng2-st-thead-filters-row", "", 1, "ng2-smart-filters", 3, "grid", "source", "create", "filter"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm"]], template: function Ng2SmartTableTheadComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, Ng2SmartTableTheadComponent_tr_0_Template, 1, 3, "tr", 0);
                core["ɵɵtemplate"](1, Ng2SmartTableTheadComponent_tr_1_Template, 1, 2, "tr", 1);
                core["ɵɵtemplate"](2, Ng2SmartTableTheadComponent_tr_2_Template, 1, 2, "tr", 2);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", !ctx.isHideHeader);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", !ctx.isHideSubHeader);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.grid.createFormShown);
            } }, directives: [common.NgIf, TheadTitlesRowComponent, TheadFitlersRowComponent, TheadFormRowComponent], encapsulation: 2 });
        return Ng2SmartTableTheadComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](Ng2SmartTableTheadComponent, [{
            type: core.Component,
            args: [{
                    selector: '[ng2-st-thead]',
                    templateUrl: './thead.component.html',
                }]
        }], null, { grid: [{
                type: core.Input
            }], source: [{
                type: core.Input
            }], isAllSelected: [{
                type: core.Input
            }], createConfirm: [{
                type: core.Input
            }], sort: [{
                type: core.Output
            }], selectAllRows: [{
                type: core.Output
            }], create: [{
                type: core.Output
            }], filter: [{
                type: core.Output
            }] }); })();

    function PagerComponent_nav_0_li_14_span_1_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "span", 14);
        core["ɵɵtext"](1);
        core["ɵɵelementStart"](2, "span", 7);
        core["ɵɵtext"](3, "(current)");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var page_r265 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate1"]("", page_r265, " ");
    } }
    function PagerComponent_nav_0_li_14_a_2_Template(rf, ctx) { if (rf & 1) {
        var _r271 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "a", 15);
        core["ɵɵlistener"]("click", function PagerComponent_nav_0_li_14_a_2_Template_a_click_0_listener() { core["ɵɵrestoreView"](_r271); var page_r265 = core["ɵɵnextContext"]().$implicit; var ctx_r269 = core["ɵɵnextContext"](2); return ctx_r269.paginate(page_r265); });
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var page_r265 = core["ɵɵnextContext"]().$implicit;
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](page_r265);
    } }
    var _c0$c = function (a0) { return { active: a0 }; };
    function PagerComponent_nav_0_li_14_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "li", 4);
        core["ɵɵtemplate"](1, PagerComponent_nav_0_li_14_span_1_Template, 4, 1, "span", 12);
        core["ɵɵtemplate"](2, PagerComponent_nav_0_li_14_a_2_Template, 2, 1, "a", 13);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var page_r265 = ctx.$implicit;
        var ctx_r264 = core["ɵɵnextContext"](2);
        core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](3, _c0$c, ctx_r264.getPage() == page_r265));
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r264.getPage() == page_r265);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngIf", ctx_r264.getPage() != page_r265);
    } }
    var _c1$1 = function (a0) { return { disabled: a0 }; };
    function PagerComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
        var _r274 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "nav", 2);
        core["ɵɵelementStart"](1, "ul", 3);
        core["ɵɵelementStart"](2, "li", 4);
        core["ɵɵelementStart"](3, "a", 5);
        core["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_3_listener() { core["ɵɵrestoreView"](_r274); var ctx_r273 = core["ɵɵnextContext"](); return ctx_r273.getPage() == 1 ? false : ctx_r273.paginate(1); });
        core["ɵɵelementStart"](4, "span", 6);
        core["ɵɵtext"](5, "\u00AB");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](6, "span", 7);
        core["ɵɵtext"](7, "First");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](8, "li", 4);
        core["ɵɵelementStart"](9, "a", 8);
        core["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_9_listener() { core["ɵɵrestoreView"](_r274); var ctx_r275 = core["ɵɵnextContext"](); return ctx_r275.getPage() == 1 ? false : ctx_r275.prev(); });
        core["ɵɵelementStart"](10, "span", 6);
        core["ɵɵtext"](11, "<");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](12, "span", 7);
        core["ɵɵtext"](13, "Prev");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵtemplate"](14, PagerComponent_nav_0_li_14_Template, 3, 5, "li", 9);
        core["ɵɵelementStart"](15, "li", 4);
        core["ɵɵelementStart"](16, "a", 10);
        core["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_16_listener() { core["ɵɵrestoreView"](_r274); var ctx_r276 = core["ɵɵnextContext"](); return ctx_r276.getPage() == ctx_r276.getLast() ? false : ctx_r276.next(); });
        core["ɵɵelementStart"](17, "span", 6);
        core["ɵɵtext"](18, ">");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](19, "span", 7);
        core["ɵɵtext"](20, "Next");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](21, "li", 4);
        core["ɵɵelementStart"](22, "a", 11);
        core["ɵɵlistener"]("click", function PagerComponent_nav_0_Template_a_click_22_listener() { core["ɵɵrestoreView"](_r274); var ctx_r277 = core["ɵɵnextContext"](); return ctx_r277.getPage() == ctx_r277.getLast() ? false : ctx_r277.paginate(ctx_r277.getLast()); });
        core["ɵɵelementStart"](23, "span", 6);
        core["ɵɵtext"](24, "\u00BB");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](25, "span", 7);
        core["ɵɵtext"](26, "Last");
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r262 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](2);
        core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](5, _c1$1, ctx_r262.getPage() == 1));
        core["ɵɵadvance"](6);
        core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](7, _c1$1, ctx_r262.getPage() == 1));
        core["ɵɵadvance"](6);
        core["ɵɵproperty"]("ngForOf", ctx_r262.getPages());
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](9, _c1$1, ctx_r262.getPage() == ctx_r262.getLast()));
        core["ɵɵadvance"](6);
        core["ɵɵproperty"]("ngClass", core["ɵɵpureFunction1"](11, _c1$1, ctx_r262.getPage() == ctx_r262.getLast()));
    } }
    function PagerComponent_nav_1_option_4_Template(rf, ctx) { if (rf & 1) {
        core["ɵɵelementStart"](0, "option", 20);
        core["ɵɵtext"](1);
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var item_r279 = ctx.$implicit;
        core["ɵɵproperty"]("value", item_r279);
        core["ɵɵadvance"](1);
        core["ɵɵtextInterpolate"](item_r279);
    } }
    function PagerComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
        var _r281 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "nav", 16);
        core["ɵɵelementStart"](1, "label", 17);
        core["ɵɵtext"](2, " Per Page: ");
        core["ɵɵelementEnd"]();
        core["ɵɵelementStart"](3, "select", 18);
        core["ɵɵlistener"]("change", function PagerComponent_nav_1_Template_select_change_3_listener($event) { core["ɵɵrestoreView"](_r281); var ctx_r280 = core["ɵɵnextContext"](); return ctx_r280.onChangePerPage($event); })("ngModelChange", function PagerComponent_nav_1_Template_select_ngModelChange_3_listener($event) { core["ɵɵrestoreView"](_r281); var ctx_r282 = core["ɵɵnextContext"](); return ctx_r282.currentPerPage = $event; });
        core["ɵɵtemplate"](4, PagerComponent_nav_1_option_4_Template, 2, 2, "option", 19);
        core["ɵɵelementEnd"]();
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r263 = core["ɵɵnextContext"]();
        core["ɵɵadvance"](3);
        core["ɵɵproperty"]("ngModel", ctx_r263.currentPerPage);
        core["ɵɵadvance"](1);
        core["ɵɵproperty"]("ngForOf", ctx_r263.perPageSelect);
    } }
    var PagerComponent = /** @class */ (function () {
        function PagerComponent() {
            this.perPageSelect = [];
            this.changePage = new core.EventEmitter();
            this.count = 0;
        }
        PagerComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.source) {
                if (!changes.source.firstChange) {
                    this.dataChangedSub.unsubscribe();
                }
                this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                    _this.page = _this.source.getPaging().page;
                    _this.perPage = _this.source.getPaging().perPage;
                    _this.currentPerPage = _this.perPage;
                    _this.count = _this.source.count();
                    if (_this.isPageOutOfBounce()) {
                        _this.source.setPage(--_this.page);
                    }
                    _this.processPageChange(dataChanges);
                    _this.initPages();
                });
            }
        };
        /**
         * We change the page here depending on the action performed against data source
         * if a new element was added to the end of the table - then change the page to the last
         * if a new element was added to the beginning of the table - then to the first page
         * @param changes
         */
        PagerComponent.prototype.processPageChange = function (changes) {
            if (changes['action'] === 'prepend') {
                this.source.setPage(1);
            }
            if (changes['action'] === 'append') {
                this.source.setPage(this.getLast());
            }
        };
        PagerComponent.prototype.shouldShow = function () {
            return this.source.count() > this.perPage;
        };
        PagerComponent.prototype.paginate = function (page) {
            this.source.setPage(page);
            this.page = page;
            this.changePage.emit({ page: page });
            return false;
        };
        PagerComponent.prototype.next = function () {
            return this.paginate(this.getPage() + 1);
        };
        PagerComponent.prototype.prev = function () {
            return this.paginate(this.getPage() - 1);
        };
        PagerComponent.prototype.getPage = function () {
            return this.page;
        };
        PagerComponent.prototype.getPages = function () {
            return this.pages;
        };
        PagerComponent.prototype.getLast = function () {
            return Math.ceil(this.count / this.perPage);
        };
        PagerComponent.prototype.isPageOutOfBounce = function () {
            return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
        };
        PagerComponent.prototype.initPages = function () {
            var pagesCount = this.getLast();
            var showPagesCount = 4;
            showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
            this.pages = [];
            if (this.shouldShow()) {
                var middleOne = Math.ceil(showPagesCount / 2);
                middleOne = this.page >= middleOne ? this.page : middleOne;
                var lastOne = middleOne + Math.floor(showPagesCount / 2);
                lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
                var firstOne = lastOne - showPagesCount + 1;
                for (var i = firstOne; i <= lastOne; i++) {
                    this.pages.push(i);
                }
            }
        };
        PagerComponent.prototype.onChangePerPage = function (event) {
            if (this.currentPerPage) {
                if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                    this.source.getPaging().perPage = null;
                }
                else {
                    this.source.getPaging().perPage = this.currentPerPage * 1;
                    this.source.refresh();
                }
                this.initPages();
            }
        };
        PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(); };
        PagerComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["ng2-smart-table-pager"]], inputs: { source: "source", perPageSelect: "perPageSelect" }, outputs: { changePage: "changePage" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 2, vars: 2, consts: [["class", "ng2-smart-pagination-nav", 4, "ngIf"], ["class", "ng2-smart-pagination-per-page", 4, "ngIf"], [1, "ng2-smart-pagination-nav"], [1, "ng2-smart-pagination", "pagination"], [1, "ng2-smart-page-item", "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Prev", 1, "ng2-smart-page-link", "page-link", "page-link-prev", 3, "click"], ["class", "ng2-smart-page-item page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next", 1, "ng2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["href", "#", "aria-label", "Last", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["class", "ng2-smart-page-link page-link", 4, "ngIf"], ["class", "ng2-smart-page-link page-link", "href", "#", 3, "click", 4, "ngIf"], [1, "ng2-smart-page-link", "page-link"], ["href", "#", 1, "ng2-smart-page-link", "page-link", 3, "click"], [1, "ng2-smart-pagination-per-page"], ["for", "per-page"], ["id", "per-page", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵtemplate"](0, PagerComponent_nav_0_Template, 27, 13, "nav", 0);
                core["ɵɵtemplate"](1, PagerComponent_nav_1_Template, 5, 2, "nav", 1);
            } if (rf & 2) {
                core["ɵɵproperty"]("ngIf", ctx.shouldShow());
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.perPageSelect && ctx.perPageSelect.length > 0);
            } }, directives: [common.NgIf, common.NgClass, common.NgForOf, forms.SelectControlValueAccessor, forms.NgControlStatus, forms.NgModel, forms.NgSelectOption, forms["ɵangular_packages_forms_forms_x"]], styles: [".ng2-smart-pagination[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .ng2-smart-page-item[_ngcontent-%COMP%]{display:inline}.ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-next[_ngcontent-%COMP%], .ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-prev[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem;line-height:2.5rem}"] });
        return PagerComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PagerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-smart-table-pager',
                    styleUrls: ['./pager.component.scss'],
                    template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
                }]
        }], null, { source: [{
                type: core.Input
            }], perPageSelect: [{
                type: core.Input
            }], changePage: [{
                type: core.Output
            }] }); })();

    function Ng2SmartTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
        var _r191 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "thead", 4);
        core["ɵɵlistener"]("create", function Ng2SmartTableComponent_thead_1_Template_thead_create_0_listener($event) { core["ɵɵrestoreView"](_r191); var ctx_r190 = core["ɵɵnextContext"](); return ctx_r190.create.emit($event); })("selectAllRows", function Ng2SmartTableComponent_thead_1_Template_thead_selectAllRows_0_listener($event) { core["ɵɵrestoreView"](_r191); var ctx_r192 = core["ɵɵnextContext"](); return ctx_r192.onSelectAllRows($event); })("sort", function Ng2SmartTableComponent_thead_1_Template_thead_sort_0_listener($event) { core["ɵɵrestoreView"](_r191); var ctx_r193 = core["ɵɵnextContext"](); return ctx_r193.sort($event); })("filter", function Ng2SmartTableComponent_thead_1_Template_thead_filter_0_listener($event) { core["ɵɵrestoreView"](_r191); var ctx_r194 = core["ɵɵnextContext"](); return ctx_r194.filter($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r188 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("grid", ctx_r188.grid)("isAllSelected", ctx_r188.isAllSelected)("source", ctx_r188.source)("createConfirm", ctx_r188.createConfirm);
    } }
    function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template(rf, ctx) { if (rf & 1) {
        var _r196 = core["ɵɵgetCurrentView"]();
        core["ɵɵelementStart"](0, "ng2-smart-table-pager", 5);
        core["ɵɵlistener"]("changePage", function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template_ng2_smart_table_pager_changePage_0_listener($event) { core["ɵɵrestoreView"](_r196); var ctx_r195 = core["ɵɵnextContext"](); return ctx_r195.changePage($event); });
        core["ɵɵelementEnd"]();
    } if (rf & 2) {
        var ctx_r189 = core["ɵɵnextContext"]();
        core["ɵɵproperty"]("source", ctx_r189.source)("perPageSelect", ctx_r189.perPageSelect);
    } }
    var Ng2SmartTableComponent = /** @class */ (function () {
        function Ng2SmartTableComponent() {
            this.settings = {};
            this.rowSelect = new core.EventEmitter();
            this.userRowSelect = new core.EventEmitter();
            this.delete = new core.EventEmitter();
            this.edit = new core.EventEmitter();
            this.create = new core.EventEmitter();
            this.custom = new core.EventEmitter();
            this.deleteConfirm = new core.EventEmitter();
            this.editConfirm = new core.EventEmitter();
            this.createConfirm = new core.EventEmitter();
            this.rowHover = new core.EventEmitter();
            this.defaultSettings = {
                mode: 'inline',
                selectMode: 'single',
                hideHeader: false,
                hideSubHeader: false,
                actions: {
                    columnTitle: 'Actions',
                    add: true,
                    edit: true,
                    delete: true,
                    custom: [],
                    position: 'left',
                },
                filter: {
                    inputClass: '',
                },
                edit: {
                    inputClass: '',
                    editButtonContent: 'Edit',
                    saveButtonContent: 'Update',
                    cancelButtonContent: 'Cancel',
                    confirmSave: false,
                },
                add: {
                    inputClass: '',
                    addButtonContent: 'Add New',
                    createButtonContent: 'Create',
                    cancelButtonContent: 'Cancel',
                    confirmCreate: false,
                },
                delete: {
                    deleteButtonContent: 'Delete',
                    confirmDelete: false,
                },
                attr: {
                    id: '',
                    class: '',
                },
                noDataMessage: 'No data found',
                columns: {},
                pager: {
                    display: true,
                    perPage: 10,
                },
                rowClassFunction: function () { return ""; }
            };
            this.isAllSelected = false;
        }
        Ng2SmartTableComponent.prototype.ngOnChanges = function (changes) {
            if (this.grid) {
                if (changes['settings']) {
                    this.grid.setSettings(this.prepareSettings());
                }
                if (changes['source']) {
                    this.source = this.prepareSource();
                    this.grid.setSource(this.source);
                }
            }
            else {
                this.initGrid();
            }
            this.tableId = this.grid.getSetting('attr.id');
            this.tableClass = this.grid.getSetting('attr.class');
            this.isHideHeader = this.grid.getSetting('hideHeader');
            this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
            this.isPagerDisplay = this.grid.getSetting('pager.display');
            this.isPagerDisplay = this.grid.getSetting('pager.display');
            this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
            this.rowClassFunction = this.grid.getSetting('rowClassFunction');
        };
        Ng2SmartTableComponent.prototype.editRowSelect = function (row) {
            if (this.grid.getSetting('selectMode') === 'multi') {
                this.onMultipleSelectRow(row);
            }
            else {
                this.onSelectRow(row);
            }
        };
        Ng2SmartTableComponent.prototype.onUserSelectRow = function (row) {
            if (this.grid.getSetting('selectMode') !== 'multi') {
                this.grid.selectRow(row);
                this.emitUserSelectRow(row);
                this.emitSelectRow(row);
            }
        };
        Ng2SmartTableComponent.prototype.onRowHover = function (row) {
            this.rowHover.emit(row);
        };
        Ng2SmartTableComponent.prototype.multipleSelectRow = function (row) {
            this.grid.multipleSelectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        };
        Ng2SmartTableComponent.prototype.onSelectAllRows = function ($event) {
            this.isAllSelected = !this.isAllSelected;
            this.grid.selectAllRows(this.isAllSelected);
            this.emitUserSelectRow(null);
            this.emitSelectRow(null);
        };
        Ng2SmartTableComponent.prototype.onSelectRow = function (row) {
            this.grid.selectRow(row);
            this.emitSelectRow(row);
        };
        Ng2SmartTableComponent.prototype.onMultipleSelectRow = function (row) {
            this.emitSelectRow(row);
        };
        Ng2SmartTableComponent.prototype.initGrid = function () {
            var _this = this;
            this.source = this.prepareSource();
            this.grid = new Grid(this.source, this.prepareSettings());
            this.grid.onSelectRow().subscribe(function (row) { return _this.emitSelectRow(row); });
        };
        Ng2SmartTableComponent.prototype.prepareSource = function () {
            if (this.source instanceof DataSource) {
                return this.source;
            }
            else if (this.source instanceof Array) {
                return new LocalDataSource(this.source);
            }
            return new LocalDataSource();
        };
        Ng2SmartTableComponent.prototype.prepareSettings = function () {
            return deepExtend({}, this.defaultSettings, this.settings);
        };
        Ng2SmartTableComponent.prototype.changePage = function ($event) {
            this.resetAllSelector();
        };
        Ng2SmartTableComponent.prototype.sort = function ($event) {
            this.resetAllSelector();
        };
        Ng2SmartTableComponent.prototype.filter = function ($event) {
            this.resetAllSelector();
        };
        Ng2SmartTableComponent.prototype.resetAllSelector = function () {
            this.isAllSelected = false;
        };
        Ng2SmartTableComponent.prototype.emitUserSelectRow = function (row) {
            var selectedRows = this.grid.getSelectedRows();
            this.userRowSelect.emit({
                data: row ? row.getData() : null,
                isSelected: row ? row.getIsSelected() : null,
                source: this.source,
                selected: selectedRows && selectedRows.length ? selectedRows.map(function (r) { return r.getData(); }) : [],
            });
        };
        Ng2SmartTableComponent.prototype.emitSelectRow = function (row) {
            this.rowSelect.emit({
                data: row ? row.getData() : null,
                isSelected: row ? row.getIsSelected() : null,
                source: this.source,
            });
        };
        Ng2SmartTableComponent.ɵfac = function Ng2SmartTableComponent_Factory(t) { return new (t || Ng2SmartTableComponent)(); };
        Ng2SmartTableComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: Ng2SmartTableComponent, selectors: [["ng2-smart-table"]], inputs: { source: "source", settings: "settings" }, outputs: { rowSelect: "rowSelect", userRowSelect: "userRowSelect", delete: "delete", edit: "edit", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 4, vars: 9, consts: [[3, "id", "ngClass"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter", 4, "ngIf"], ["ng2-st-tbody", "", 3, "grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction", "edit", "delete", "custom", "userSelectRow", "editRowSelect", "multipleSelectRow", "rowHover"], [3, "source", "perPageSelect", "changePage", 4, "ngIf"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter"], [3, "source", "perPageSelect", "changePage"]], template: function Ng2SmartTableComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "table", 0);
                core["ɵɵtemplate"](1, Ng2SmartTableComponent_thead_1_Template, 1, 4, "thead", 1);
                core["ɵɵelementStart"](2, "tbody", 2);
                core["ɵɵlistener"]("edit", function Ng2SmartTableComponent_Template_tbody_edit_2_listener($event) { return ctx.edit.emit($event); })("delete", function Ng2SmartTableComponent_Template_tbody_delete_2_listener($event) { return ctx.delete.emit($event); })("custom", function Ng2SmartTableComponent_Template_tbody_custom_2_listener($event) { return ctx.custom.emit($event); })("userSelectRow", function Ng2SmartTableComponent_Template_tbody_userSelectRow_2_listener($event) { return ctx.onUserSelectRow($event); })("editRowSelect", function Ng2SmartTableComponent_Template_tbody_editRowSelect_2_listener($event) { return ctx.editRowSelect($event); })("multipleSelectRow", function Ng2SmartTableComponent_Template_tbody_multipleSelectRow_2_listener($event) { return ctx.multipleSelectRow($event); })("rowHover", function Ng2SmartTableComponent_Template_tbody_rowHover_2_listener($event) { return ctx.onRowHover($event); });
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
                core["ɵɵtemplate"](3, Ng2SmartTableComponent_ng2_smart_table_pager_3_Template, 1, 2, "ng2-smart-table-pager", 3);
            } if (rf & 2) {
                core["ɵɵproperty"]("id", ctx.tableId)("ngClass", ctx.tableClass);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", !ctx.isHideHeader || !ctx.isHideSubHeader);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("grid", ctx.grid)("source", ctx.source)("deleteConfirm", ctx.deleteConfirm)("editConfirm", ctx.editConfirm)("rowClassFunction", ctx.rowClassFunction);
                core["ɵɵadvance"](1);
                core["ɵɵproperty"]("ngIf", ctx.isPagerDisplay);
            } }, directives: [common.NgClass, common.NgIf, Ng2SmartTableTbodyComponent, Ng2SmartTableTheadComponent, PagerComponent], styles: ["[_nghost-%COMP%]{font-size:1rem}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     button, [_nghost-%COMP%]     input, [_nghost-%COMP%]     optgroup, [_nghost-%COMP%]     select, [_nghost-%COMP%]     textarea{color:inherit;font:inherit;margin:0}[_nghost-%COMP%]     table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}[_nghost-%COMP%]     table tr th{font-weight:700}[_nghost-%COMP%]     table tr section{font-size:.75em;font-weight:700}[_nghost-%COMP%]     table tr td, [_nghost-%COMP%]     table tr th{font-size:.875em;margin:0;padding:.5em 1em}[_nghost-%COMP%]     a{color:#1e6bb8;text-decoration:none}[_nghost-%COMP%]     a:hover{text-decoration:underline}"] });
        return Ng2SmartTableComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](Ng2SmartTableComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ng2-smart-table',
                    styleUrls: ['./ng2-smart-table.component.scss'],
                    templateUrl: './ng2-smart-table.component.html',
                }]
        }], null, { source: [{
                type: core.Input
            }], settings: [{
                type: core.Input
            }], rowSelect: [{
                type: core.Output
            }], userRowSelect: [{
                type: core.Output
            }], delete: [{
                type: core.Output
            }], edit: [{
                type: core.Output
            }], create: [{
                type: core.Output
            }], custom: [{
                type: core.Output
            }], deleteConfirm: [{
                type: core.Output
            }], editConfirm: [{
                type: core.Output
            }], createConfirm: [{
                type: core.Output
            }], rowHover: [{
                type: core.Output
            }] }); })();

    var CELL_COMPONENTS = [
        CellComponent,
        CustomEditComponent,
        DefaultEditComponent,
        EditCellComponent,
        CheckboxEditorComponent,
        CompleterEditorComponent,
        InputEditorComponent,
        SelectEditorComponent,
        TextareaEditorComponent,
        CustomViewComponent,
        ViewCellComponent,
    ];
    var CellModule = /** @class */ (function () {
        function CellModule() {
        }
        CellModule.ɵmod = core["ɵɵdefineNgModule"]({ type: CellModule });
        CellModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function CellModule_Factory(t) { return new (t || CellModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    ng2Completer.Ng2CompleterModule,
                ]] });
        return CellModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](CellModule, { declarations: [CellComponent,
            CustomEditComponent,
            DefaultEditComponent,
            EditCellComponent,
            CheckboxEditorComponent,
            CompleterEditorComponent,
            InputEditorComponent,
            SelectEditorComponent,
            TextareaEditorComponent,
            CustomViewComponent,
            ViewCellComponent], imports: [common.CommonModule,
            forms.FormsModule,
            ng2Completer.Ng2CompleterModule], exports: [CellComponent,
            CustomEditComponent,
            DefaultEditComponent,
            EditCellComponent,
            CheckboxEditorComponent,
            CompleterEditorComponent,
            InputEditorComponent,
            SelectEditorComponent,
            TextareaEditorComponent,
            CustomViewComponent,
            ViewCellComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](CellModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        ng2Completer.Ng2CompleterModule,
                    ],
                    declarations: __spread(CELL_COMPONENTS),
                    exports: __spread(CELL_COMPONENTS),
                }]
        }], null, null); })();

    var FILTER_COMPONENTS = [
        FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent,
    ];
    var FilterModule = /** @class */ (function () {
        function FilterModule() {
        }
        FilterModule.ɵmod = core["ɵɵdefineNgModule"]({ type: FilterModule });
        FilterModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function FilterModule_Factory(t) { return new (t || FilterModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    ng2Completer.Ng2CompleterModule,
                ]] });
        return FilterModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](FilterModule, { declarations: [FilterComponent,
            DefaultFilterComponent,
            CustomFilterComponent,
            CheckboxFilterComponent,
            CompleterFilterComponent,
            InputFilterComponent,
            SelectFilterComponent], imports: [common.CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            ng2Completer.Ng2CompleterModule], exports: [FilterComponent,
            DefaultFilterComponent,
            CustomFilterComponent,
            CheckboxFilterComponent,
            CompleterFilterComponent,
            InputFilterComponent,
            SelectFilterComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](FilterModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        ng2Completer.Ng2CompleterModule,
                    ],
                    declarations: __spread(FILTER_COMPONENTS),
                    exports: __spread(FILTER_COMPONENTS),
                }]
        }], null, null); })();

    var PagerModule = /** @class */ (function () {
        function PagerModule() {
        }
        PagerModule.ɵmod = core["ɵɵdefineNgModule"]({ type: PagerModule });
        PagerModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function PagerModule_Factory(t) { return new (t || PagerModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                ]] });
        return PagerModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](PagerModule, { declarations: [PagerComponent], imports: [common.CommonModule,
            forms.FormsModule], exports: [PagerComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](PagerModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                    ],
                    declarations: [
                        PagerComponent,
                    ],
                    exports: [
                        PagerComponent,
                    ],
                }]
        }], null, null); })();

    var TBODY_COMPONENTS = [
        TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent
    ];
    var TBodyModule = /** @class */ (function () {
        function TBodyModule() {
        }
        TBodyModule.ɵmod = core["ɵɵdefineNgModule"]({ type: TBodyModule });
        TBodyModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function TBodyModule_Factory(t) { return new (t || TBodyModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    CellModule,
                ]] });
        return TBodyModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](TBodyModule, { declarations: [TbodyCreateCancelComponent,
            TbodyEditDeleteComponent,
            TbodyCustomComponent,
            Ng2SmartTableTbodyComponent], imports: [common.CommonModule,
            forms.FormsModule,
            CellModule], exports: [TbodyCreateCancelComponent,
            TbodyEditDeleteComponent,
            TbodyCustomComponent,
            Ng2SmartTableTbodyComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](TBodyModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        CellModule,
                    ],
                    declarations: __spread(TBODY_COMPONENTS),
                    exports: __spread(TBODY_COMPONENTS),
                }]
        }], null, null); })();

    var THEAD_COMPONENTS = [
        ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent,
    ];
    var THeadModule = /** @class */ (function () {
        function THeadModule() {
        }
        THeadModule.ɵmod = core["ɵɵdefineNgModule"]({ type: THeadModule });
        THeadModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function THeadModule_Factory(t) { return new (t || THeadModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    FilterModule,
                    CellModule,
                ]] });
        return THeadModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](THeadModule, { declarations: [ActionsComponent,
            ActionsTitleComponent,
            AddButtonComponent,
            CheckboxSelectAllComponent,
            ColumnTitleComponent,
            TitleComponent,
            TheadFitlersRowComponent,
            TheadFormRowComponent,
            TheadTitlesRowComponent,
            Ng2SmartTableTheadComponent], imports: [common.CommonModule,
            forms.FormsModule,
            FilterModule,
            CellModule], exports: [ActionsComponent,
            ActionsTitleComponent,
            AddButtonComponent,
            CheckboxSelectAllComponent,
            ColumnTitleComponent,
            TitleComponent,
            TheadFitlersRowComponent,
            TheadFormRowComponent,
            TheadTitlesRowComponent,
            Ng2SmartTableTheadComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](THeadModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        FilterModule,
                        CellModule,
                    ],
                    declarations: __spread(THEAD_COMPONENTS),
                    exports: __spread(THEAD_COMPONENTS),
                }]
        }], null, null); })();

    var Ng2SmartTableModule = /** @class */ (function () {
        function Ng2SmartTableModule() {
        }
        Ng2SmartTableModule.ɵmod = core["ɵɵdefineNgModule"]({ type: Ng2SmartTableModule });
        Ng2SmartTableModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function Ng2SmartTableModule_Factory(t) { return new (t || Ng2SmartTableModule)(); }, imports: [[
                    common.CommonModule,
                    forms.FormsModule,
                    forms.ReactiveFormsModule,
                    CellModule,
                    FilterModule,
                    PagerModule,
                    TBodyModule,
                    THeadModule,
                ]] });
        return Ng2SmartTableModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](Ng2SmartTableModule, { declarations: [Ng2SmartTableComponent], imports: [common.CommonModule,
            forms.FormsModule,
            forms.ReactiveFormsModule,
            CellModule,
            FilterModule,
            PagerModule,
            TBodyModule,
            THeadModule], exports: [Ng2SmartTableComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](Ng2SmartTableModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        forms.ReactiveFormsModule,
                        CellModule,
                        FilterModule,
                        PagerModule,
                        TBodyModule,
                        THeadModule,
                    ],
                    declarations: [
                        Ng2SmartTableComponent,
                    ],
                    exports: [
                        Ng2SmartTableComponent,
                    ],
                }]
        }], null, null); })();

    var ServerSourceConf = /** @class */ (function () {
        function ServerSourceConf(_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.endPoint, endPoint = _c === void 0 ? '' : _c, _d = _b.sortFieldKey, sortFieldKey = _d === void 0 ? '' : _d, _e = _b.sortDirKey, sortDirKey = _e === void 0 ? '' : _e, _f = _b.pagerPageKey, pagerPageKey = _f === void 0 ? '' : _f, _g = _b.pagerLimitKey, pagerLimitKey = _g === void 0 ? '' : _g, _h = _b.filterFieldKey, filterFieldKey = _h === void 0 ? '' : _h, _j = _b.totalKey, totalKey = _j === void 0 ? '' : _j, _k = _b.dataKey, dataKey = _k === void 0 ? '' : _k;
            this.endPoint = endPoint ? endPoint : '';
            this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
            this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
            this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
            this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
            this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
            this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
            this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
        }
        ServerSourceConf.SORT_FIELD_KEY = '_sort';
        ServerSourceConf.SORT_DIR_KEY = '_order';
        ServerSourceConf.PAGER_PAGE_KEY = '_page';
        ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
        ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
        ServerSourceConf.TOTAL_KEY = 'x-total-count';
        ServerSourceConf.DATA_KEY = '';
        return ServerSourceConf;
    }());

    var ServerDataSource = /** @class */ (function (_super) {
        __extends(ServerDataSource, _super);
        function ServerDataSource(http, conf) {
            if (conf === void 0) { conf = {}; }
            var _this = _super.call(this) || this;
            _this.http = http;
            _this.lastRequestCount = 0;
            _this.conf = new ServerSourceConf(conf);
            if (!_this.conf.endPoint) {
                throw new Error('At least endPoint must be specified as a configuration of the server data source.');
            }
            return _this;
        }
        ServerDataSource.prototype.count = function () {
            return this.lastRequestCount;
        };
        ServerDataSource.prototype.getElements = function () {
            var _this = this;
            return this.requestElements()
                .pipe(operators.map(function (res) {
                _this.lastRequestCount = _this.extractTotalFromResponse(res);
                _this.data = _this.extractDataFromResponse(res);
                return _this.data;
            })).toPromise();
        };
        /**
         * Extracts array of data from server response
         * @param res
         * @returns {any}
         */
        ServerDataSource.prototype.extractDataFromResponse = function (res) {
            var rawData = res.body;
            var data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
            if (data instanceof Array) {
                return data;
            }
            throw new Error("Data must be an array.\n    Please check that data extracted from the server response by the key '" + this.conf.dataKey + "' exists and is array.");
        };
        /**
         * Extracts total rows count from the server response
         * Looks for the count in the heders first, then in the response body
         * @param res
         * @returns {any}
         */
        ServerDataSource.prototype.extractTotalFromResponse = function (res) {
            if (res.headers.has(this.conf.totalKey)) {
                return +res.headers.get(this.conf.totalKey);
            }
            else {
                var rawData = res.body;
                return getDeepFromObject(rawData, this.conf.totalKey, 0);
            }
        };
        ServerDataSource.prototype.requestElements = function () {
            var httpParams = this.createRequesParams();
            return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
        };
        ServerDataSource.prototype.createRequesParams = function () {
            var httpParams = new http.HttpParams();
            httpParams = this.addSortRequestParams(httpParams);
            httpParams = this.addFilterRequestParams(httpParams);
            return this.addPagerRequestParams(httpParams);
        };
        ServerDataSource.prototype.addSortRequestParams = function (httpParams) {
            var _this = this;
            if (this.sortConf) {
                this.sortConf.forEach(function (fieldConf) {
                    httpParams = httpParams.set(_this.conf.sortFieldKey, fieldConf.field);
                    httpParams = httpParams.set(_this.conf.sortDirKey, fieldConf.direction.toUpperCase());
                });
            }
            return httpParams;
        };
        ServerDataSource.prototype.addFilterRequestParams = function (httpParams) {
            var _this = this;
            if (this.filterConf.filters) {
                this.filterConf.filters.forEach(function (fieldConf) {
                    if (fieldConf['search']) {
                        httpParams = httpParams.set(_this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                    }
                });
            }
            return httpParams;
        };
        ServerDataSource.prototype.addPagerRequestParams = function (httpParams) {
            if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
                httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
                httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
            }
            return httpParams;
        };
        return ServerDataSource;
    }(LocalDataSource));

    exports.Cell = Cell;
    exports.DefaultEditor = DefaultEditor;
    exports.DefaultFilter = DefaultFilter;
    exports.LocalDataSource = LocalDataSource;
    exports.Ng2SmartTableComponent = Ng2SmartTableComponent;
    exports.Ng2SmartTableModule = Ng2SmartTableModule;
    exports.ServerDataSource = ServerDataSource;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-smart-table.umd.js.map
