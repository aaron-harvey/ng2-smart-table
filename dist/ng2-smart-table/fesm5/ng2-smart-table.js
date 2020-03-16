import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵproperty, ɵɵsanitizeHtml, EventEmitter, ɵɵdefineComponent, ɵɵtemplate, ɵsetClassMetadata, Component, ChangeDetectionStrategy, Input, Output, ɵɵNgOnChangesFeature, ɵɵadvance, ɵɵdirectiveInject, ComponentFactoryResolver, ɵɵstaticViewQuery, ViewContainerRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplateRefExtractor, ViewChild, ɵɵelement, ɵɵtext, ɵɵtextInterpolate, ɵɵdefineDirective, Directive, ɵɵInheritDefinitionFeature, ɵɵtextInterpolate1, ɵɵpureFunction1, ɵɵattribute, ElementRef, ɵɵclassMapInterpolate1, ɵɵstyleProp, ɵɵpropertyInterpolate, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵgetInheritedFactory, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import { cloneDeep } from 'lodash';
import { __extends, __spread } from 'tslib';
import { NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, CommonModule } from '@angular/common';
import { SelectControlValueAccessor, NgControlStatus, NgModel, NgSelectOption, ɵangular_packages_forms_forms_x, DefaultValueAccessor, CheckboxControlValueAccessor, NgControl, FormControl, FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompleterService, CompleterCmp, Ng2CompleterModule } from 'ng2-completer';
import { skip, distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

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
                target[key] = cloneDeep(val);
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
        this.onSelectRowSource = new Subject();
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
        this.onChangedSource = new Subject();
        this.onAddedSource = new Subject();
        this.onUpdatedSource = new Subject();
        this.onRemovedSource = new Subject();
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
    var _r328 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 1);
    ɵɵlistener("click", function TbodyCustomComponent_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r328); var action_r326 = ctx.$implicit; var ctx_r327 = ɵɵnextContext(); return ctx_r327.onCustom(action_r326, $event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var action_r326 = ctx.$implicit;
    ɵɵproperty("innerHTML", action_r326.title, ɵɵsanitizeHtml);
} }
var TbodyCustomComponent = /** @class */ (function () {
    function TbodyCustomComponent() {
        this.custom = new EventEmitter();
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
    TbodyCustomComponent.ɵcmp = ɵɵdefineComponent({ type: TbodyCustomComponent, selectors: [["ng2-st-tbody-custom"]], inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-custom-custom", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-custom-custom", 3, "innerHTML", "click"]], template: function TbodyCustomComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, TbodyCustomComponent_a_0_Template, 1, 1, "a", 0);
        } if (rf & 2) {
            ɵɵproperty("ngForOf", ctx.grid.getSetting("actions.custom"));
        } }, directives: [NgForOf], encapsulation: 2, changeDetection: 0 });
    return TbodyCustomComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TbodyCustomComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-tbody-custom',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n      <a *ngFor=\"let action of grid.getSetting('actions.custom')\" href=\"#\"\n         class=\"ng2-smart-action ng2-smart-action-custom-custom\" \n         [innerHTML]=\"action.title\"\n         (click)=\"onCustom(action, $event)\"></a>\n        "
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], source: [{
            type: Input
        }], custom: [{
            type: Output
        }] }); })();

function TbodyEditDeleteComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r322 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 2);
    ɵɵlistener("click", function TbodyEditDeleteComponent_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r322); var ctx_r321 = ɵɵnextContext(); return ctx_r321.onEdit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r319 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r319.editRowButtonContent, ɵɵsanitizeHtml);
} }
function TbodyEditDeleteComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r324 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 3);
    ɵɵlistener("click", function TbodyEditDeleteComponent_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r324); var ctx_r323 = ɵɵnextContext(); return ctx_r323.onDelete($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r320 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r320.deleteRowButtonContent, ɵɵsanitizeHtml);
} }
var TbodyEditDeleteComponent = /** @class */ (function () {
    function TbodyEditDeleteComponent() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
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
    TbodyEditDeleteComponent.ɵcmp = ɵɵdefineComponent({ type: TbodyEditDeleteComponent, selectors: [["ng2-st-tbody-edit-delete"]], inputs: { grid: "grid", row: "row", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm" }, outputs: { edit: "edit", delete: "delete", editRowSelect: "editRowSelect" }, features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-edit-edit", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", "class", "ng2-smart-action ng2-smart-action-delete-delete", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-edit", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-delete-delete", 3, "innerHTML", "click"]], template: function TbodyEditDeleteComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, TbodyEditDeleteComponent_a_0_Template, 1, 1, "a", 0);
            ɵɵtemplate(1, TbodyEditDeleteComponent_a_1_Template, 1, 1, "a", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.isActionEdit);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.isActionDelete);
        } }, directives: [NgIf], encapsulation: 2, changeDetection: 0 });
    return TbodyEditDeleteComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TbodyEditDeleteComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-tbody-edit-delete',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\" class=\"ng2-smart-action ng2-smart-action-edit-edit\"\n        [innerHTML]=\"editRowButtonContent\" (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\" class=\"ng2-smart-action ng2-smart-action-delete-delete\"\n        [innerHTML]=\"deleteRowButtonContent\" (click)=\"onDelete($event)\"></a>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], source: [{
            type: Input
        }], deleteConfirm: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], editRowSelect: [{
            type: Output
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
    TbodyCreateCancelComponent.ɵcmp = ɵɵdefineComponent({ type: TbodyCreateCancelComponent, selectors: [["ng2-st-tbody-create-cancel"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm" }, features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-save", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-cancel", 3, "innerHTML", "click"]], template: function TbodyCreateCancelComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "a", 0);
            ɵɵlistener("click", function TbodyCreateCancelComponent_Template_a_click_0_listener($event) { return ctx.onSave($event); });
            ɵɵelementEnd();
            ɵɵelementStart(1, "a", 1);
            ɵɵlistener("click", function TbodyCreateCancelComponent_Template_a_click_1_listener($event) { return ctx.onCancelEdit($event); });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("innerHTML", ctx.saveButtonContent, ɵɵsanitizeHtml);
            ɵɵadvance(1);
            ɵɵproperty("innerHTML", ctx.cancelButtonContent, ɵɵsanitizeHtml);
        } }, encapsulation: 2 });
    return TbodyCreateCancelComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TbodyCreateCancelComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-tbody-create-cancel',
                template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-save\"\n        [innerHTML]=\"saveButtonContent\" (click)=\"onSave($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-edit-cancel\"\n        [innerHTML]=\"cancelButtonContent\" (click)=\"onCancelEdit($event)\"></a>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], editConfirm: [{
            type: Input
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
    CustomViewComponent.ɵfac = function CustomViewComponent_Factory(t) { return new (t || CustomViewComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
    CustomViewComponent.ɵcmp = ɵɵdefineComponent({ type: CustomViewComponent, selectors: [["custom-view-component"]], viewQuery: function CustomViewComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
        } }, inputs: { cell: "cell" }, decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomViewComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return CustomViewComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomViewComponent, [{
        type: Component,
        args: [{
                selector: 'custom-view-component',
                template: "\n    <ng-template #dynamicTarget></ng-template>\n  ",
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { cell: [{
            type: Input
        }], dynamicTarget: [{
            type: ViewChild,
            args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
        }] }); })();

function ViewCellComponent_custom_view_component_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "custom-view-component", 4);
} if (rf & 2) {
    var ctx_r232 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r232.cell);
} }
function ViewCellComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 5);
} if (rf & 2) {
    var ctx_r233 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r233.cell.getValue(), ɵɵsanitizeHtml);
} }
function ViewCellComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r234 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r234.cell.getValue());
} }
var ViewCellComponent = /** @class */ (function () {
    function ViewCellComponent() {
    }
    ViewCellComponent.ɵfac = function ViewCellComponent_Factory(t) { return new (t || ViewCellComponent)(); };
    ViewCellComponent.ɵcmp = ɵɵdefineComponent({ type: ViewCellComponent, selectors: [["table-cell-view-mode"]], inputs: { cell: "cell" }, decls: 4, vars: 3, consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML"]], template: function ViewCellComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1);
            ɵɵtemplate(2, ViewCellComponent_div_2_Template, 1, 1, "div", 2);
            ɵɵtemplate(3, ViewCellComponent_div_3_Template, 2, 1, "div", 3);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngSwitch", ctx.cell.getColumn().type);
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "custom");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "html");
        } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, CustomViewComponent], encapsulation: 2, changeDetection: 0 });
    return ViewCellComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ViewCellComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-view-mode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    ",
            }]
    }], null, { cell: [{
            type: Input
        }] }); })();

var EditCellDefault = /** @class */ (function () {
    function EditCellDefault() {
        this.inputClass = '';
        this.edited = new EventEmitter();
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
    EditCellDefault.ɵdir = ɵɵdefineDirective({ type: EditCellDefault, inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" } });
    return EditCellDefault;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditCellDefault, [{
        type: Directive
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], edited: [{
            type: Output
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
    CustomEditComponent.ɵfac = function CustomEditComponent_Factory(t) { return new (t || CustomEditComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
    CustomEditComponent.ɵcmp = ɵɵdefineComponent({ type: CustomEditComponent, selectors: [["table-cell-custom-editor"]], viewQuery: function CustomEditComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0$1, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
        } }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomEditComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, CustomEditComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return CustomEditComponent;
}(EditCellDefault));
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomEditComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-custom-editor',
                template: "\n    <ng-template #dynamicTarget></ng-template>\n  ",
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { dynamicTarget: [{
            type: ViewChild,
            args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
        }] }); })();

var DefaultEditor = /** @class */ (function () {
    function DefaultEditor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    DefaultEditor.ɵfac = function DefaultEditor_Factory(t) { return new (t || DefaultEditor)(); };
    DefaultEditor.ɵdir = ɵɵdefineDirective({ type: DefaultEditor, inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { onStopEditing: "onStopEditing", onEdited: "onEdited", onClick: "onClick" } });
    return DefaultEditor;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultEditor, [{
        type: Directive
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], onStopEditing: [{
            type: Output
        }], onEdited: [{
            type: Output
        }], onClick: [{
            type: Output
        }] }); })();

function SelectEditorComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r229 = ctx.$implicit;
    var ctx_r228 = ɵɵnextContext();
    ɵɵproperty("value", option_r229.value)("selected", option_r229.value === ctx_r228.cell.getValue());
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", option_r229.title, " ");
} }
var SelectEditorComponent = /** @class */ (function (_super) {
    __extends(SelectEditorComponent, _super);
    function SelectEditorComponent() {
        return _super.call(this) || this;
    }
    SelectEditorComponent.ɵfac = function SelectEditorComponent_Factory(t) { return new (t || SelectEditorComponent)(); };
    SelectEditorComponent.ɵcmp = ɵɵdefineComponent({ type: SelectEditorComponent, selectors: [["select-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectEditorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "select", 0);
            ɵɵlistener("ngModelChange", function SelectEditorComponent_Template_select_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function SelectEditorComponent_Template_select_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
            ɵɵtemplate(1, SelectEditorComponent_option_1_Template, 2, 3, "option", 1);
            ɵɵelementEnd();
        } if (rf & 2) {
            var tmp_4_0 = null;
            var currVal_4 = (tmp_4_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_4_0.list;
            ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", currVal_4);
        } }, directives: [SelectControlValueAccessor, NgClass, NgControlStatus, NgModel, NgForOf, NgSelectOption, ɵangular_packages_forms_forms_x], encapsulation: 2 });
    return SelectEditorComponent;
}(DefaultEditor));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectEditorComponent, [{
        type: Component,
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
    TextareaEditorComponent.ɵcmp = ɵɵdefineComponent({ type: TextareaEditorComponent, selectors: [["textarea-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "placeholder", "ngModelChange", "click", "keydown.enter", "keydown.esc"]], template: function TextareaEditorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "textarea", 0);
            ɵɵlistener("ngModelChange", function TextareaEditorComponent_Template_textarea_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function TextareaEditorComponent_Template_textarea_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function TextareaEditorComponent_Template_textarea_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function TextareaEditorComponent_Template_textarea_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
            ɵɵtext(1, "    ");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("placeholder", ctx.cell.getTitle());
        } }, directives: [DefaultValueAccessor, NgClass, NgControlStatus, NgModel], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
    return TextareaEditorComponent;
}(DefaultEditor));
/*@__PURE__*/ (function () { ɵsetClassMetadata(TextareaEditorComponent, [{
        type: Component,
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
    CheckboxEditorComponent.ɵcmp = ɵɵdefineComponent({ type: CheckboxEditorComponent, selectors: [["checkbox-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 4, consts: [["type", "checkbox", 1, "form-control", 3, "ngClass", "name", "disabled", "checked", "click", "change"]], template: function CheckboxEditorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "input", 0);
            ɵɵlistener("click", function CheckboxEditorComponent_Template_input_click_0_listener($event) { return ctx.onClick.emit($event); })("change", function CheckboxEditorComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
            ɵɵelementEnd();
        } if (rf & 2) {
            var tmp_3_0 = null;
            var currVal_3 = ctx.cell.getValue() == (((tmp_3_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_3_0.true) || true);
            ɵɵproperty("ngClass", ctx.inputClass)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("checked", currVal_3);
        } }, directives: [NgClass], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
    return CheckboxEditorComponent;
}(DefaultEditor));
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxEditorComponent, [{
        type: Component,
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
    CompleterEditorComponent.ɵfac = function CompleterEditorComponent_Factory(t) { return new (t || CompleterEditorComponent)(ɵɵdirectiveInject(CompleterService)); };
    CompleterEditorComponent.ɵcmp = ɵɵdefineComponent({ type: CompleterEditorComponent, selectors: [["completer-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterEditorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "ng2-completer", 0);
            ɵɵlistener("ngModelChange", function CompleterEditorComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.completerStr = $event; })("selected", function CompleterEditorComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.onEditedCompleter($event); });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngModel", ctx.completerStr)("dataService", ctx.cell.getColumn().getConfig().completer.dataService)("minSearchLength", ctx.cell.getColumn().getConfig().completer.minSearchLength || 0)("pause", ctx.cell.getColumn().getConfig().completer.pause || 0)("placeholder", ctx.cell.getColumn().getConfig().completer.placeholder || "Start typing...");
        } }, directives: [CompleterCmp, NgControlStatus, NgModel], encapsulation: 2 });
    return CompleterEditorComponent;
}(DefaultEditor));
/*@__PURE__*/ (function () { ɵsetClassMetadata(CompleterEditorComponent, [{
        type: Component,
        args: [{
                selector: 'completer-editor',
                template: "\n    <ng2-completer [(ngModel)]=\"completerStr\"\n                   [dataService]=\"cell.getColumn().getConfig().completer.dataService\"\n                   [minSearchLength]=\"cell.getColumn().getConfig().completer.minSearchLength || 0\"\n                   [pause]=\"cell.getColumn().getConfig().completer.pause || 0\"\n                   [placeholder]=\"cell.getColumn().getConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"onEditedCompleter($event)\">\n    </ng2-completer>\n    ",
            }]
    }], function () { return [{ type: CompleterService }]; }, null); })();

var InputEditorComponent = /** @class */ (function (_super) {
    __extends(InputEditorComponent, _super);
    function InputEditorComponent() {
        return _super.call(this) || this;
    }
    InputEditorComponent.ɵfac = function InputEditorComponent_Factory(t) { return new (t || InputEditorComponent)(); };
    InputEditorComponent.ɵcmp = ɵɵdefineComponent({ type: InputEditorComponent, selectors: [["input-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"]], template: function InputEditorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "input", 0);
            ɵɵlistener("ngModelChange", function InputEditorComponent_Template_input_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function InputEditorComponent_Template_input_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function InputEditorComponent_Template_input_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function InputEditorComponent_Template_input_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("placeholder", ctx.cell.getTitle())("disabled", !ctx.cell.isEditable());
        } }, directives: [DefaultValueAccessor, NgClass, NgControlStatus, NgModel], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
    return InputEditorComponent;
}(DefaultEditor));
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputEditorComponent, [{
        type: Component,
        args: [{
                selector: 'input-editor',
                styleUrls: ['./editor.component.scss'],
                template: "\n    <input [ngClass]=\"inputClass\"\n           class=\"form-control\"\n           [(ngModel)]=\"cell.newValue\"\n           [name]=\"cell.getId()\"\n           [placeholder]=\"cell.getTitle()\"\n           [disabled]=\"!cell.isEditable()\"\n           (click)=\"onClick.emit($event)\"\n           (keydown.enter)=\"onEdited.emit($event)\"\n           (keydown.esc)=\"onStopEditing.emit()\">\n    ",
            }]
    }], function () { return []; }, null); })();

function DefaultEditComponent_select_editor_1_Template(rf, ctx) { if (rf & 1) {
    var _r209 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select-editor", 5);
    ɵɵlistener("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) { ɵɵrestoreView(_r209); var ctx_r208 = ɵɵnextContext(); return ctx_r208.onClick($event); })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) { ɵɵrestoreView(_r209); var ctx_r210 = ɵɵnextContext(); return ctx_r210.onEdited($event); })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() { ɵɵrestoreView(_r209); var ctx_r211 = ɵɵnextContext(); return ctx_r211.onStopEditing(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r203 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r203.cell)("inputClass", ctx_r203.inputClass);
} }
function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) { if (rf & 1) {
    var _r213 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea-editor", 5);
    ɵɵlistener("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) { ɵɵrestoreView(_r213); var ctx_r212 = ɵɵnextContext(); return ctx_r212.onClick($event); })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) { ɵɵrestoreView(_r213); var ctx_r214 = ɵɵnextContext(); return ctx_r214.onEdited($event); })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() { ɵɵrestoreView(_r213); var ctx_r215 = ɵɵnextContext(); return ctx_r215.onStopEditing(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r204 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r204.cell)("inputClass", ctx_r204.inputClass);
} }
function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) { if (rf & 1) {
    var _r217 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "checkbox-editor", 6);
    ɵɵlistener("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) { ɵɵrestoreView(_r217); var ctx_r216 = ɵɵnextContext(); return ctx_r216.onClick($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r205 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r205.cell)("inputClass", ctx_r205.inputClass);
} }
function DefaultEditComponent_completer_editor_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "completer-editor", 7);
} if (rf & 2) {
    var ctx_r206 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r206.cell);
} }
function DefaultEditComponent_input_editor_5_Template(rf, ctx) { if (rf & 1) {
    var _r219 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input-editor", 5);
    ɵɵlistener("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) { ɵɵrestoreView(_r219); var ctx_r218 = ɵɵnextContext(); return ctx_r218.onClick($event); })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) { ɵɵrestoreView(_r219); var ctx_r220 = ɵɵnextContext(); return ctx_r220.onEdited($event); })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() { ɵɵrestoreView(_r219); var ctx_r221 = ɵɵnextContext(); return ctx_r221.onStopEditing(); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r207 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r207.cell)("inputClass", ctx_r207.inputClass);
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
    DefaultEditComponent.ɵcmp = ɵɵdefineComponent({ type: DefaultEditComponent, selectors: [["table-cell-default-editor"]], features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 5, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing"], [3, "cell", "inputClass", "onClick"], [3, "cell"]], template: function DefaultEditComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1);
            ɵɵtemplate(2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1);
            ɵɵtemplate(3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2);
            ɵɵtemplate(4, DefaultEditComponent_completer_editor_4_Template, 1, 1, "completer-editor", 3);
            ɵɵtemplate(5, DefaultEditComponent_input_editor_5_Template, 1, 2, "input-editor", 4);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngSwitch", ctx.getEditorType());
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "list");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "textarea");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "checkbox");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "completer");
        } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, SelectEditorComponent, TextareaEditorComponent, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent], encapsulation: 2 });
    return DefaultEditComponent;
}(EditCellDefault));
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultEditComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-default-editor',
                templateUrl: './default-edit.component.html',
            }]
    }], function () { return []; }, null); })();

function EditCellComponent_table_cell_custom_editor_1_Template(rf, ctx) { if (rf & 1) {
    var _r225 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table-cell-custom-editor", 3);
    ɵɵlistener("edited", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_edited_0_listener($event) { ɵɵrestoreView(_r225); var ctx_r224 = ɵɵnextContext(); return ctx_r224.onEdited($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r222 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r222.cell)("inputClass", ctx_r222.inputClass);
} }
function EditCellComponent_table_cell_default_editor_2_Template(rf, ctx) { if (rf & 1) {
    var _r227 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table-cell-default-editor", 3);
    ɵɵlistener("edited", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_edited_0_listener($event) { ɵɵrestoreView(_r227); var ctx_r226 = ɵɵnextContext(); return ctx_r226.onEdited($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r223 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r223.cell)("inputClass", ctx_r223.inputClass);
} }
var EditCellComponent = /** @class */ (function () {
    function EditCellComponent() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    EditCellComponent.prototype.onEdited = function (event) {
        this.edited.next(event);
        return false;
    };
    EditCellComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    EditCellComponent.ɵfac = function EditCellComponent_Factory(t) { return new (t || EditCellComponent)(); };
    EditCellComponent.ɵcmp = ɵɵdefineComponent({ type: EditCellComponent, selectors: [["table-cell-edit-mode"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "edited", 4, "ngSwitchCase"], [3, "cell", "inputClass", "edited", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "edited"]], template: function EditCellComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtemplate(1, EditCellComponent_table_cell_custom_editor_1_Template, 1, 2, "table-cell-custom-editor", 1);
            ɵɵtemplate(2, EditCellComponent_table_cell_default_editor_2_Template, 1, 2, "table-cell-default-editor", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngSwitch", ctx.getEditorType());
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "custom");
        } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, CustomEditComponent, DefaultEditComponent], encapsulation: 2 });
    return EditCellComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditCellComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-edit-mode',
                template: "\n      <div [ngSwitch]=\"getEditorType()\">\n        <table-cell-custom-editor *ngSwitchCase=\"'custom'\"\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-custom-editor>\n        <table-cell-default-editor *ngSwitchDefault\n                                  [cell]=\"cell\"\n                                  [inputClass]=\"inputClass\"\n                                  (edited)=\"onEdited($event)\">\n        </table-cell-default-editor>\n      </div>\n    ",
            }]
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], edited: [{
            type: Output
        }] }); })();

function CellComponent_table_cell_view_mode_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "table-cell-view-mode", 2);
} if (rf & 2) {
    var ctx_r197 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r197.cell);
} }
function CellComponent_table_cell_edit_mode_1_Template(rf, ctx) { if (rf & 1) {
    var _r200 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "table-cell-edit-mode", 3);
    ɵɵlistener("edited", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_edited_0_listener($event) { ɵɵrestoreView(_r200); var ctx_r199 = ɵɵnextContext(); return ctx_r199.onEdited($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r198 = ɵɵnextContext();
    ɵɵproperty("cell", ctx_r198.cell)("inputClass", ctx_r198.inputClass);
} }
var CellComponent = /** @class */ (function () {
    function CellComponent() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
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
    CellComponent.ɵcmp = ɵɵdefineComponent({ type: CellComponent, selectors: [["ng2-smart-table-cell"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", createConfirm: "createConfirm", isNew: "isNew", cell: "cell", inputClass: "inputClass", mode: "mode", isInEditing: "isInEditing" }, outputs: { edited: "edited" }, decls: 2, vars: 2, consts: [[3, "cell", 4, "ngIf"], [3, "cell", "inputClass", "edited", 4, "ngIf"], [3, "cell"], [3, "cell", "inputClass", "edited"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, CellComponent_table_cell_view_mode_0_Template, 1, 1, "table-cell-view-mode", 0);
            ɵɵtemplate(1, CellComponent_table_cell_edit_mode_1_Template, 1, 2, "table-cell-edit-mode", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", !ctx.isInEditing);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.isInEditing);
        } }, directives: [NgIf, ViewCellComponent, EditCellComponent], encapsulation: 2 });
    return CellComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CellComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-cell',
                template: "\n    <table-cell-view-mode *ngIf=\"!isInEditing\" [cell]=\"cell\"></table-cell-view-mode>\n    <table-cell-edit-mode *ngIf=\"isInEditing\" [cell]=\"cell\"\n                          [inputClass]=\"inputClass\"\n                          (edited)=\"onEdited($event)\">\n    </table-cell-edit-mode>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], isNew: [{
            type: Input
        }], cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], mode: [{
            type: Input
        }], isInEditing: [{
            type: Input
        }], edited: [{
            type: Output
        }] }); })();

var _c0$2 = ["ng2-st-tbody", ""];
function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r294 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 6);
    ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener() { ɵɵrestoreView(_r294); var row_r285 = ɵɵnextContext().$implicit; var ctx_r292 = ɵɵnextContext(); return ctx_r292.multipleSelectRow.emit(row_r285); });
    ɵɵelement(1, "input", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngModel", row_r285.isSelected);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
    var _r297 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 8);
    ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) { ɵɵrestoreView(_r297); var ctx_r296 = ɵɵnextContext(2); return ctx_r296.custom.emit($event); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() { ɵɵrestoreView(_r297); var row_r285 = ɵɵnextContext().$implicit; var ctx_r298 = ɵɵnextContext(); return ctx_r298.edit.emit(row_r285); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() { ɵɵrestoreView(_r297); var row_r285 = ɵɵnextContext().$implicit; var ctx_r300 = ɵɵnextContext(); return ctx_r300.delete.emit(row_r285); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { ɵɵrestoreView(_r297); var ctx_r302 = ɵɵnextContext(2); return ctx_r302.editRowSelect.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = ɵɵnextContext().$implicit;
    var ctx_r287 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r287.grid)("row", row_r285)("source", ctx_r287.source);
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r287.grid)("deleteConfirm", ctx_r287.deleteConfirm)("editConfirm", ctx_r287.editConfirm)("row", row_r285)("source", ctx_r287.source);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 8);
    ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = ɵɵnextContext().$implicit;
    var ctx_r288 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r288.grid)("row", row_r285)("editConfirm", ctx_r288.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵelement(1, "ng2-smart-table-cell", 12);
    ɵɵelementEnd();
} if (rf & 2) {
    var cell_r305 = ctx.$implicit;
    var row_r285 = ɵɵnextContext().$implicit;
    var ctx_r289 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cell", cell_r305)("grid", ctx_r289.grid)("row", row_r285)("isNew", false)("mode", ctx_r289.mode)("editConfirm", ctx_r289.editConfirm)("inputClass", ctx_r289.editInputClass)("isInEditing", row_r285.isInEditing);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 8);
    ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = ɵɵnextContext().$implicit;
    var ctx_r290 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r290.grid)("row", row_r285)("editConfirm", ctx_r290.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    var _r309 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 8);
    ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) { ɵɵrestoreView(_r309); var ctx_r308 = ɵɵnextContext(2); return ctx_r308.custom.emit($event); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() { ɵɵrestoreView(_r309); var row_r285 = ɵɵnextContext().$implicit; var ctx_r310 = ɵɵnextContext(); return ctx_r310.edit.emit(row_r285); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() { ɵɵrestoreView(_r309); var row_r285 = ɵɵnextContext().$implicit; var ctx_r312 = ɵɵnextContext(); return ctx_r312.delete.emit(row_r285); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { ɵɵrestoreView(_r309); var ctx_r314 = ɵɵnextContext(2); return ctx_r314.editRowSelect.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = ɵɵnextContext().$implicit;
    var ctx_r291 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r291.grid)("row", row_r285)("source", ctx_r291.source);
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r291.grid)("deleteConfirm", ctx_r291.deleteConfirm)("editConfirm", ctx_r291.editConfirm)("row", row_r285)("source", ctx_r291.source);
} }
var _c1 = function (a0) { return { selected: a0 }; };
function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    var _r317 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 2);
    ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() { ɵɵrestoreView(_r317); var row_r285 = ctx.$implicit; var ctx_r316 = ɵɵnextContext(); return ctx_r316.userSelectRow.emit(row_r285); })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() { ɵɵrestoreView(_r317); var row_r285 = ctx.$implicit; var ctx_r318 = ɵɵnextContext(); return ctx_r318.rowHover.emit(row_r285); });
    ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);
    ɵɵtemplate(2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);
    ɵɵtemplate(3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 4);
    ɵɵtemplate(4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 5);
    ɵɵtemplate(5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 4);
    ɵɵtemplate(6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 4);
    ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = ctx.$implicit;
    var ctx_r283 = ɵɵnextContext();
    ɵɵproperty("className", ctx_r283.rowClassFunction(row_r285))("ngClass", ɵɵpureFunction1(8, _c1, row_r285.isSelected));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r283.isMultiSelectVisible);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !row_r285.isInEditing && ctx_r283.showActionColumnLeft);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r285.isInEditing && ctx_r283.showActionColumnLeft);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", row_r285.cells);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", row_r285.isInEditing && ctx_r283.showActionColumnRight);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !row_r285.isInEditing && ctx_r283.showActionColumnRight);
} }
function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵelementStart(1, "td");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r284 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵattribute("colspan", ctx_r284.tableColumnsCount);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r284.noDataMessage, " ");
} }
var Ng2SmartTableTbodyComponent = /** @class */ (function () {
    function Ng2SmartTableTbodyComponent() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
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
    Ng2SmartTableTbodyComponent.ɵcmp = ɵɵdefineComponent({ type: Ng2SmartTableTbodyComponent, selectors: [["", "ng2-st-tbody", ""]], inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, features: [ɵɵNgOnChangesFeature()], attrs: _c0$2, decls: 2, vars: 2, consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]], template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);
            ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
        } if (rf & 2) {
            ɵɵproperty("ngForOf", ctx.grid.getRows());
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.grid.getRows().length == 0);
        } }, directives: [NgForOf, NgIf, NgClass, CheckboxControlValueAccessor, NgControlStatus, NgModel, TbodyCustomComponent, TbodyEditDeleteComponent, TbodyCreateCancelComponent, CellComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"] });
    return Ng2SmartTableTbodyComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng2SmartTableTbodyComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-tbody]',
                styleUrls: ['./tbody.component.scss'],
                templateUrl: './tbody.component.html',
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], deleteConfirm: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }], rowClassFunction: [{
            type: Input
        }], save: [{
            type: Output
        }], cancel: [{
            type: Output
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], custom: [{
            type: Output
        }], edited: [{
            type: Output
        }], userSelectRow: [{
            type: Output
        }], editRowSelect: [{
            type: Output
        }], multipleSelectRow: [{
            type: Output
        }], rowHover: [{
            type: Output
        }] }); })();

var _c0$3 = ["ng2-st-checkbox-select-all", ""];
var CheckboxSelectAllComponent = /** @class */ (function () {
    function CheckboxSelectAllComponent() {
    }
    CheckboxSelectAllComponent.ɵfac = function CheckboxSelectAllComponent_Factory(t) { return new (t || CheckboxSelectAllComponent)(); };
    CheckboxSelectAllComponent.ɵcmp = ɵɵdefineComponent({ type: CheckboxSelectAllComponent, selectors: [["", "ng2-st-checkbox-select-all", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected" }, attrs: _c0$3, decls: 1, vars: 1, consts: [["type", "checkbox", 3, "ngModel"]], template: function CheckboxSelectAllComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "input", 0);
        } if (rf & 2) {
            ɵɵproperty("ngModel", ctx.isAllSelected);
        } }, directives: [CheckboxControlValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
    return CheckboxSelectAllComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxSelectAllComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-checkbox-select-all]',
                template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], isAllSelected: [{
            type: Input
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
    ActionsTitleComponent.ɵfac = function ActionsTitleComponent_Factory(t) { return new (t || ActionsTitleComponent)(ɵɵdirectiveInject(ElementRef)); };
    ActionsTitleComponent.ɵcmp = ɵɵdefineComponent({ type: ActionsTitleComponent, selectors: [["", "ng2-st-actions-title", ""]], inputs: { grid: "grid" }, features: [ɵɵNgOnChangesFeature()], attrs: _c0$4, decls: 2, vars: 1, consts: [[1, "ng2-smart-title"]], template: function ActionsTitleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate(ctx.actionsColumnTitle);
        } }, encapsulation: 2 });
    return ActionsTitleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ActionsTitleComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-actions-title]',
                template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  ",
            }]
    }], function () { return [{ type: ElementRef }]; }, { grid: [{
            type: Input
        }] }); })();

function TitleComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r344 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 2);
    ɵɵlistener("click", function TitleComponent_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r344); var ctx_r343 = ɵɵnextContext(); return ctx_r343._sort($event); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r341 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r341.currentDirection);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r341.column.title, " ");
} }
function TitleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r342 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r342.column.title);
} }
var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
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
    TitleComponent.ɵcmp = ɵɵdefineComponent({ type: TitleComponent, selectors: [["ng2-smart-table-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, TitleComponent_a_0_Template, 2, 2, "a", 0);
            ɵɵtemplate(1, TitleComponent_span_1_Template, 2, 1, "span", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.column.isSortable);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.column.isSortable);
        } }, directives: [NgIf, NgClass], styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]::after, a.sort.desc[_ngcontent-%COMP%]::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc[_ngcontent-%COMP%]::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"] });
    return TitleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TitleComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-title',
                styleUrls: ['./title.component.scss'],
                template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();

var ColumnTitleComponent = /** @class */ (function () {
    function ColumnTitleComponent() {
        this.sort = new EventEmitter();
    }
    ColumnTitleComponent.ɵfac = function ColumnTitleComponent_Factory(t) { return new (t || ColumnTitleComponent)(); };
    ColumnTitleComponent.ɵcmp = ɵɵdefineComponent({ type: ColumnTitleComponent, selectors: [["ng2-st-column-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, decls: 2, vars: 2, consts: [[1, "ng2-smart-title"], [3, "source", "column", "sort"]], template: function ColumnTitleComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "ng2-smart-table-title", 1);
            ɵɵlistener("sort", function ColumnTitleComponent_Template_ng2_smart_table_title_sort_1_listener($event) { return ctx.sort.emit($event); });
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("source", ctx.source)("column", ctx.column);
        } }, directives: [TitleComponent], encapsulation: 2 });
    return ColumnTitleComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ColumnTitleComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-column-title',
                template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  ",
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();

var _c0$5 = ["ng2-st-thead-titles-row", ""];
function TheadTitlesRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    var _r372 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 3);
    ɵɵlistener("click", function TheadTitlesRowComponent_th_0_Template_th_click_0_listener($event) { ɵɵrestoreView(_r372); var ctx_r371 = ɵɵnextContext(); return ctx_r371.selectAllRows.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r367 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r367.grid)("source", ctx_r367.source)("isAllSelected", ctx_r367.isAllSelected);
} }
function TheadTitlesRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th", 4);
} if (rf & 2) {
    var ctx_r368 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r368.grid);
} }
function TheadTitlesRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    var _r375 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 5);
    ɵɵelementStart(1, "ng2-st-column-title", 6);
    ɵɵlistener("sort", function TheadTitlesRowComponent_th_2_Template_ng2_st_column_title_sort_1_listener($event) { ɵɵrestoreView(_r375); var ctx_r374 = ɵɵnextContext(); return ctx_r374.sort.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var column_r373 = ctx.$implicit;
    var ctx_r369 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ng2-smart-th ", column_r373.id, "");
    ɵɵstyleProp("width", column_r373.width);
    ɵɵproperty("ngClass", column_r373.class);
    ɵɵadvance(1);
    ɵɵproperty("source", ctx_r369.source)("column", column_r373);
} }
function TheadTitlesRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th", 4);
} if (rf & 2) {
    var ctx_r370 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r370.grid);
} }
var TheadTitlesRowComponent = /** @class */ (function () {
    function TheadTitlesRowComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    TheadTitlesRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    };
    TheadTitlesRowComponent.ɵfac = function TheadTitlesRowComponent_Factory(t) { return new (t || TheadTitlesRowComponent)(); };
    TheadTitlesRowComponent.ɵcmp = ɵɵdefineComponent({ type: TheadTitlesRowComponent, selectors: [["", "ng2-st-thead-titles-row", ""]], inputs: { grid: "grid", isAllSelected: "isAllSelected", source: "source" }, outputs: { sort: "sort", selectAllRows: "selectAllRows" }, features: [ɵɵNgOnChangesFeature()], attrs: _c0$5, decls: 4, vars: 4, consts: [["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click", 4, "ngIf"], ["ng2-st-actions-title", "", 3, "grid", 4, "ngIf"], [3, "class", "ngClass", "width", 4, "ngFor", "ngForOf"], ["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click"], ["ng2-st-actions-title", "", 3, "grid"], [3, "ngClass"], [3, "source", "column", "sort"]], template: function TheadTitlesRowComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, TheadTitlesRowComponent_th_0_Template, 1, 3, "th", 0);
            ɵɵtemplate(1, TheadTitlesRowComponent_th_1_Template, 1, 1, "th", 1);
            ɵɵtemplate(2, TheadTitlesRowComponent_th_2_Template, 2, 8, "th", 2);
            ɵɵtemplate(3, TheadTitlesRowComponent_th_3_Template, 1, 1, "th", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showActionColumnLeft);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.grid.getColumns());
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showActionColumnRight);
        } }, directives: [NgIf, NgForOf, CheckboxSelectAllComponent, ActionsTitleComponent, NgClass, ColumnTitleComponent], encapsulation: 2 });
    return TheadTitlesRowComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TheadTitlesRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-titles-row]',
                template: "\n    <th ng2-st-checkbox-select-all *ngIf=\"isMultiSelectVisible\"\n                                   [grid]=\"grid\"\n                                   [source]=\"source\"\n                                   [isAllSelected]=\"isAllSelected\"\n                                   (click)=\"selectAllRows.emit($event)\">\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnLeft\" [grid]=\"grid\"></th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\" [ngClass]=\"column.class\"\n      [style.width]=\"column.width\" >\n      <ng2-st-column-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-st-column-title>\n    </th>\n    <th ng2-st-actions-title *ngIf=\"showActionColumnRight\" [grid]=\"grid\"></th>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }], selectAllRows: [{
            type: Output
        }] }); })();

var _c0$6 = ["ng2-st-add-button", ""];
function AddButtonComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r340 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 1);
    ɵɵlistener("click", function AddButtonComponent_a_0_Template_a_click_0_listener($event) { ɵɵrestoreView(_r340); var ctx_r339 = ɵɵnextContext(); return ctx_r339.onAdd($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r338 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r338.addNewButtonContent, ɵɵsanitizeHtml);
} }
var AddButtonComponent = /** @class */ (function () {
    function AddButtonComponent(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
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
    AddButtonComponent.ɵfac = function AddButtonComponent_Factory(t) { return new (t || AddButtonComponent)(ɵɵdirectiveInject(ElementRef)); };
    AddButtonComponent.ɵcmp = ɵɵdefineComponent({ type: AddButtonComponent, selectors: [["", "ng2-st-add-button", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create" }, features: [ɵɵNgOnChangesFeature()], attrs: _c0$6, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-add-add", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-add", 3, "innerHTML", "click"]], template: function AddButtonComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, AddButtonComponent_a_0_Template, 1, 1, "a", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.isActionAdd);
        } }, directives: [NgIf], encapsulation: 2 });
    return AddButtonComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(AddButtonComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-add-button]',
                template: "\n    <a *ngIf=\"isActionAdd\" href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-add\"\n        [innerHTML]=\"addNewButtonContent\" (click)=\"onAdd($event)\"></a>\n  ",
            }]
    }], function () { return [{ type: ElementRef }]; }, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();

var FilterDefault = /** @class */ (function () {
    function FilterDefault() {
        this.inputClass = '';
        this.filter = new EventEmitter();
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
    FilterDefault.ɵdir = ɵɵdefineDirective({ type: FilterDefault, inputs: { column: "column", source: "source", inputClass: "inputClass" }, outputs: { filter: "filter" } });
    return FilterDefault;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterDefault, [{
        type: Directive
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], filter: [{
            type: Output
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
    CustomFilterComponent.ɵfac = function CustomFilterComponent_Factory(t) { return new (t || CustomFilterComponent)(ɵɵdirectiveInject(ComponentFactoryResolver)); };
    CustomFilterComponent.ɵcmp = ɵɵdefineComponent({ type: CustomFilterComponent, selectors: [["custom-table-filter"]], viewQuery: function CustomFilterComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0$7, true, ViewContainerRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
        } }, inputs: { query: "query" }, features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomFilterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, CustomFilterComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        } }, encapsulation: 2 });
    return CustomFilterComponent;
}(FilterDefault));
/*@__PURE__*/ (function () { ɵsetClassMetadata(CustomFilterComponent, [{
        type: Component,
        args: [{
                selector: 'custom-table-filter',
                template: "<ng-template #dynamicTarget></ng-template>",
            }]
    }], function () { return [{ type: ComponentFactoryResolver }]; }, { query: [{
            type: Input
        }], dynamicTarget: [{
            type: ViewChild,
            args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
        }] }); })();

var DefaultFilter = /** @class */ (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new EventEmitter();
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
    DefaultFilter.ɵdir = ɵɵdefineDirective({ type: DefaultFilter, inputs: { query: "query", inputClass: "inputClass", column: "column" }, outputs: { filter: "filter" } });
    return DefaultFilter;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultFilter, [{
        type: Directive
    }], null, { query: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], column: [{
            type: Input
        }], filter: [{
            type: Output
        }] }); })();

var _c0$8 = ["inputControl"];
function SelectFilterComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var option_r261 = ctx.$implicit;
    ɵɵproperty("value", option_r261.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", option_r261.title, " ");
} }
var SelectFilterComponent = /** @class */ (function (_super) {
    __extends(SelectFilterComponent, _super);
    function SelectFilterComponent() {
        return _super.call(this) || this;
    }
    SelectFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (value) { return _this.setFilter(); });
    };
    SelectFilterComponent.ɵfac = function SelectFilterComponent_Factory(t) { return new (t || SelectFilterComponent)(); };
    SelectFilterComponent.ɵcmp = ɵɵdefineComponent({ type: SelectFilterComponent, selectors: [["select-filter"]], viewQuery: function SelectFilterComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵstaticViewQuery(_c0$8, true, NgControl);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputControl = _t.first);
        } }, features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["inputControl", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectFilterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "select", 0, 1);
            ɵɵlistener("ngModelChange", function SelectFilterComponent_Template_select_ngModelChange_0_listener($event) { return ctx.query = $event; });
            ɵɵelementStart(2, "option", 2);
            ɵɵtext(3);
            ɵɵelementEnd();
            ɵɵtemplate(4, SelectFilterComponent_option_4_Template, 2, 2, "option", 3);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.query);
            ɵɵadvance(3);
            ɵɵtextInterpolate(ctx.column.getFilterConfig().selectText);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.column.getFilterConfig().list);
        } }, directives: [SelectControlValueAccessor, NgClass, NgControlStatus, NgModel, NgSelectOption, ɵangular_packages_forms_forms_x, NgForOf], encapsulation: 2 });
    return SelectFilterComponent;
}(DefaultFilter));
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectFilterComponent, [{
        type: Component,
        args: [{
                selector: 'select-filter',
                template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  ",
            }]
    }], function () { return []; }, { inputControl: [{
            type: ViewChild,
            args: ['inputControl', { read: NgControl, static: true }]
        }] }); })();

function CheckboxFilterComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r258 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 2);
    ɵɵlistener("click", function CheckboxFilterComponent_a_1_Template_a_click_0_listener($event) { ɵɵrestoreView(_r258); var ctx_r257 = ɵɵnextContext(); return ctx_r257.resetFilter($event); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r256 = ɵɵnextContext();
    var tmp_0_0 = null;
    ɵɵadvance(1);
    ɵɵtextInterpolate(((tmp_0_0 = ctx_r256.column.getFilterConfig()) == null ? null : tmp_0_0.resetText) || "reset");
} }
var CheckboxFilterComponent = /** @class */ (function (_super) {
    __extends(CheckboxFilterComponent, _super);
    function CheckboxFilterComponent() {
        var _this = _super.call(this) || this;
        _this.filterActive = false;
        _this.inputControl = new FormControl();
        return _this;
    }
    CheckboxFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
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
    CheckboxFilterComponent.ɵcmp = ɵɵdefineComponent({ type: CheckboxFilterComponent, selectors: [["checkbox-filter"]], features: [ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["type", "checkbox", 1, "form-control", 3, "formControl", "ngClass"], ["href", "#", 3, "click", 4, "ngIf"], ["href", "#", 3, "click"]], template: function CheckboxFilterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "input", 0);
            ɵɵtemplate(1, CheckboxFilterComponent_a_1_Template, 2, 1, "a", 1);
        } if (rf & 2) {
            ɵɵproperty("formControl", ctx.inputControl)("ngClass", ctx.inputClass);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.filterActive);
        } }, directives: [CheckboxControlValueAccessor, NgControlStatus, FormControlDirective, NgClass, NgIf], encapsulation: 2 });
    return CheckboxFilterComponent;
}(DefaultFilter));
/*@__PURE__*/ (function () { ɵsetClassMetadata(CheckboxFilterComponent, [{
        type: Component,
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
        _this.completerContent = new Subject();
        return _this;
    }
    CompleterFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(map(function (ev) { return (ev && ev.title) || ev || ''; }), distinctUntilChanged(), debounceTime(this.delay))
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
    CompleterFilterComponent.ɵfac = function CompleterFilterComponent_Factory(t) { return new (t || CompleterFilterComponent)(ɵɵdirectiveInject(CompleterService)); };
    CompleterFilterComponent.ɵcmp = ɵɵdefineComponent({ type: CompleterFilterComponent, selectors: [["completer-filter"]], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterFilterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "ng2-completer", 0);
            ɵɵlistener("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.query = $event; })("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.inputTextChanged($event); })("selected", function CompleterFilterComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.completerContent.next($event); });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("ngModel", ctx.query)("dataService", ctx.column.getFilterConfig().completer.dataService)("minSearchLength", ctx.column.getFilterConfig().completer.minSearchLength || 0)("pause", ctx.column.getFilterConfig().completer.pause || 0)("placeholder", ctx.column.getFilterConfig().completer.placeholder || "Start typing...");
        } }, directives: [CompleterCmp, NgControlStatus, NgModel], encapsulation: 2 });
    return CompleterFilterComponent;
}(DefaultFilter));
/*@__PURE__*/ (function () { ɵsetClassMetadata(CompleterFilterComponent, [{
        type: Component,
        args: [{
                selector: 'completer-filter',
                template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  ",
            }]
    }], function () { return [{ type: CompleterService }]; }, null); })();

var InputFilterComponent = /** @class */ (function (_super) {
    __extends(InputFilterComponent, _super);
    function InputFilterComponent() {
        var _this = _super.call(this) || this;
        _this.inputControl = new FormControl();
        return _this;
    }
    InputFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(distinctUntilChanged(), debounceTime(this.delay))
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
    InputFilterComponent.ɵcmp = ɵɵdefineComponent({ type: InputFilterComponent, selectors: [["input-filter"]], features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 1, vars: 3, consts: [["type", "text", 1, "form-control", 3, "ngClass", "formControl", "placeholder"]], template: function InputFilterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "input", 0);
        } if (rf & 2) {
            ɵɵpropertyInterpolate("placeholder", ctx.column.title);
            ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.inputControl);
        } }, directives: [DefaultValueAccessor, NgClass, NgControlStatus, FormControlDirective], encapsulation: 2 });
    return InputFilterComponent;
}(DefaultFilter));
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputFilterComponent, [{
        type: Component,
        args: [{
                selector: 'input-filter',
                template: "\n    <input\n      [ngClass]=\"inputClass\"\n      [formControl]=\"inputControl\"\n      class=\"form-control\"\n      type=\"text\"\n      placeholder=\"{{ column.title }}\"/>\n  ",
            }]
    }], function () { return []; }, null); })();

function DefaultFilterComponent_select_filter_1_Template(rf, ctx) { if (rf & 1) {
    var _r247 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "select-filter", 3);
    ɵɵlistener("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) { ɵɵrestoreView(_r247); var ctx_r246 = ɵɵnextContext(); return ctx_r246.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r242 = ɵɵnextContext();
    ɵɵproperty("query", ctx_r242.query)("ngClass", ctx_r242.inputClass)("column", ctx_r242.column);
} }
function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) { if (rf & 1) {
    var _r249 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "checkbox-filter", 3);
    ɵɵlistener("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) { ɵɵrestoreView(_r249); var ctx_r248 = ɵɵnextContext(); return ctx_r248.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r243 = ɵɵnextContext();
    ɵɵproperty("query", ctx_r243.query)("ngClass", ctx_r243.inputClass)("column", ctx_r243.column);
} }
function DefaultFilterComponent_completer_filter_3_Template(rf, ctx) { if (rf & 1) {
    var _r251 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "completer-filter", 3);
    ɵɵlistener("filter", function DefaultFilterComponent_completer_filter_3_Template_completer_filter_filter_0_listener($event) { ɵɵrestoreView(_r251); var ctx_r250 = ɵɵnextContext(); return ctx_r250.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r244 = ɵɵnextContext();
    ɵɵproperty("query", ctx_r244.query)("ngClass", ctx_r244.inputClass)("column", ctx_r244.column);
} }
function DefaultFilterComponent_input_filter_4_Template(rf, ctx) { if (rf & 1) {
    var _r253 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input-filter", 3);
    ɵɵlistener("filter", function DefaultFilterComponent_input_filter_4_Template_input_filter_filter_0_listener($event) { ɵɵrestoreView(_r253); var ctx_r252 = ɵɵnextContext(); return ctx_r252.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r245 = ɵɵnextContext();
    ɵɵproperty("query", ctx_r245.query)("ngClass", ctx_r245.inputClass)("column", ctx_r245.column);
} }
var DefaultFilterComponent = /** @class */ (function (_super) {
    __extends(DefaultFilterComponent, _super);
    function DefaultFilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultFilterComponent.ɵfac = function DefaultFilterComponent_Factory(t) { return ɵDefaultFilterComponent_BaseFactory(t || DefaultFilterComponent); };
    DefaultFilterComponent.ɵcmp = ɵɵdefineComponent({ type: DefaultFilterComponent, selectors: [["default-table-filter"]], inputs: { query: "query" }, features: [ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[3, "ngSwitch"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchCase"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchDefault"], [3, "query", "ngClass", "column", "filter"]], template: function DefaultFilterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementContainerStart(0, 0);
            ɵɵtemplate(1, DefaultFilterComponent_select_filter_1_Template, 1, 3, "select-filter", 1);
            ɵɵtemplate(2, DefaultFilterComponent_checkbox_filter_2_Template, 1, 3, "checkbox-filter", 1);
            ɵɵtemplate(3, DefaultFilterComponent_completer_filter_3_Template, 1, 3, "completer-filter", 1);
            ɵɵtemplate(4, DefaultFilterComponent_input_filter_4_Template, 1, 3, "input-filter", 2);
            ɵɵelementContainerEnd();
        } if (rf & 2) {
            ɵɵproperty("ngSwitch", ctx.column.getFilterType());
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "list");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "checkbox");
            ɵɵadvance(1);
            ɵɵproperty("ngSwitchCase", "completer");
        } }, directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, SelectFilterComponent, NgClass, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent], encapsulation: 2 });
    return DefaultFilterComponent;
}(FilterDefault));
var ɵDefaultFilterComponent_BaseFactory = ɵɵgetInheritedFactory(DefaultFilterComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(DefaultFilterComponent, [{
        type: Component,
        args: [{
                selector: 'default-table-filter',
                template: "\n    <ng-container [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </ng-container>\n  ",
            }]
    }], null, { query: [{
            type: Input
        }] }); })();

function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) { if (rf & 1) {
    var _r239 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "custom-table-filter", 4);
    ɵɵlistener("filter", function FilterComponent_div_0_custom_table_filter_1_Template_custom_table_filter_filter_0_listener($event) { ɵɵrestoreView(_r239); var ctx_r238 = ɵɵnextContext(2); return ctx_r238.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r236 = ɵɵnextContext(2);
    ɵɵproperty("query", ctx_r236.query)("column", ctx_r236.column)("source", ctx_r236.source)("inputClass", ctx_r236.inputClass);
} }
function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) { if (rf & 1) {
    var _r241 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "default-table-filter", 4);
    ɵɵlistener("filter", function FilterComponent_div_0_default_table_filter_2_Template_default_table_filter_filter_0_listener($event) { ɵɵrestoreView(_r241); var ctx_r240 = ɵɵnextContext(2); return ctx_r240.onFilter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r237 = ɵɵnextContext(2);
    ɵɵproperty("query", ctx_r237.query)("column", ctx_r237.column)("source", ctx_r237.source)("inputClass", ctx_r237.inputClass);
} }
function FilterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 4, "custom-table-filter", 2);
    ɵɵtemplate(2, FilterComponent_div_0_default_table_filter_2_Template, 1, 4, "default-table-filter", 3);
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r235 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r235.column.getFilterType());
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "custom");
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
    FilterComponent.ɵcmp = ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng2-smart-table-filter"]], features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [["class", "ng2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "ng2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "filter"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, FilterComponent_div_0_Template, 3, 2, "div", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.column.isFilterable);
        } }, directives: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, CustomFilterComponent, DefaultFilterComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     .completer-dropdown-holder{font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"] });
    return FilterComponent;
}(FilterDefault));
var ɵFilterComponent_BaseFactory = ɵɵgetInheritedFactory(FilterComponent);
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-filter',
                styleUrls: ['./filter.component.scss'],
                template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
            }]
    }], null, null); })();

var _c0$9 = ["ng2-st-thead-filters-row", ""];
function TheadFitlersRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "th");
} }
function TheadFitlersRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    var _r350 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 4);
    ɵɵlistener("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) { ɵɵrestoreView(_r350); var ctx_r349 = ɵɵnextContext(); return ctx_r349.create.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r346 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r346.grid);
} }
function TheadFitlersRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    var _r353 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th");
    ɵɵelementStart(1, "ng2-smart-table-filter", 5);
    ɵɵlistener("filter", function TheadFitlersRowComponent_th_2_Template_ng2_smart_table_filter_filter_1_listener($event) { ɵɵrestoreView(_r353); var ctx_r352 = ɵɵnextContext(); return ctx_r352.filter.emit($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var column_r351 = ctx.$implicit;
    var ctx_r347 = ɵɵnextContext();
    ɵɵclassMapInterpolate1("ng2-smart-th ", column_r351.id, "");
    ɵɵadvance(1);
    ɵɵproperty("source", ctx_r347.source)("column", column_r351)("inputClass", ctx_r347.filterInputClass);
} }
function TheadFitlersRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    var _r355 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "th", 6);
    ɵɵlistener("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) { ɵɵrestoreView(_r355); var ctx_r354 = ɵɵnextContext(); return ctx_r354.create.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r348 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r348.grid)("source", ctx_r348.source);
} }
var TheadFitlersRowComponent = /** @class */ (function () {
    function TheadFitlersRowComponent() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    TheadFitlersRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    };
    TheadFitlersRowComponent.ɵfac = function TheadFitlersRowComponent_Factory(t) { return new (t || TheadFitlersRowComponent)(); };
    TheadFitlersRowComponent.ɵcmp = ɵɵdefineComponent({ type: TheadFitlersRowComponent, selectors: [["", "ng2-st-thead-filters-row", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create", filter: "filter" }, features: [ɵɵNgOnChangesFeature()], attrs: _c0$9, decls: 4, vars: 4, consts: [[4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["ng2-st-add-button", "", 3, "grid", "source", "create", 4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create"], [3, "source", "column", "inputClass", "filter"], ["ng2-st-add-button", "", 3, "grid", "source", "create"]], template: function TheadFitlersRowComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, TheadFitlersRowComponent_th_0_Template, 1, 0, "th", 0);
            ɵɵtemplate(1, TheadFitlersRowComponent_th_1_Template, 1, 1, "th", 1);
            ɵɵtemplate(2, TheadFitlersRowComponent_th_2_Template, 2, 6, "th", 2);
            ɵɵtemplate(3, TheadFitlersRowComponent_th_3_Template, 1, 2, "th", 3);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showActionColumnLeft);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.grid.getColumns());
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showActionColumnRight);
        } }, directives: [NgIf, NgForOf, AddButtonComponent, FilterComponent], encapsulation: 2 });
    return TheadFitlersRowComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TheadFitlersRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-filters-row]',
                template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], create: [{
            type: Output
        }], filter: [{
            type: Output
        }] }); })();

var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.create = new EventEmitter();
    }
    ActionsComponent.prototype.ngOnChanges = function () {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    };
    ActionsComponent.ɵfac = function ActionsComponent_Factory(t) { return new (t || ActionsComponent)(); };
    ActionsComponent.ɵcmp = ɵɵdefineComponent({ type: ActionsComponent, selectors: [["ng2-st-actions"]], inputs: { grid: "grid" }, outputs: { create: "create" }, features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-create", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-cancel", 3, "innerHTML", "click"]], template: function ActionsComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "a", 0);
            ɵɵlistener("click", function ActionsComponent_Template_a_click_0_listener($event) { $event.preventDefault(); return ctx.create.emit($event); });
            ɵɵelementEnd();
            ɵɵelementStart(1, "a", 1);
            ɵɵlistener("click", function ActionsComponent_Template_a_click_1_listener($event) { $event.preventDefault(); return ctx.grid.createFormShown = false; });
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵproperty("innerHTML", ctx.createButtonContent, ɵɵsanitizeHtml);
            ɵɵadvance(1);
            ɵɵproperty("innerHTML", ctx.cancelButtonContent, ɵɵsanitizeHtml);
        } }, encapsulation: 2 });
    return ActionsComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ActionsComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-actions',
                template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();

var _c0$a = ["ng2-st-thead-form-row", ""];
function TheadFormRowComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "td");
} }
function TheadFormRowComponent_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r361 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 3);
    ɵɵelementStart(1, "ng2-st-actions", 4);
    ɵɵlistener("create", function TheadFormRowComponent_td_1_Template_ng2_st_actions_create_1_listener($event) { ɵɵrestoreView(_r361); var ctx_r360 = ɵɵnextContext(); return ctx_r360.onCreate($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r357 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r357.grid);
} }
function TheadFormRowComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    var _r364 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td");
    ɵɵelementStart(1, "ng2-smart-table-cell", 5);
    ɵɵlistener("edited", function TheadFormRowComponent_td_2_Template_ng2_smart_table_cell_edited_1_listener($event) { ɵɵrestoreView(_r364); var ctx_r363 = ɵɵnextContext(); return ctx_r363.onCreate($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var cell_r362 = ctx.$implicit;
    var ctx_r358 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("cell", cell_r362)("grid", ctx_r358.grid)("isNew", true)("createConfirm", ctx_r358.createConfirm)("inputClass", ctx_r358.addInputClass)("isInEditing", ctx_r358.grid.getNewRow().isInEditing);
} }
function TheadFormRowComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    var _r366 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td", 3);
    ɵɵelementStart(1, "ng2-st-actions", 4);
    ɵɵlistener("create", function TheadFormRowComponent_td_3_Template_ng2_st_actions_create_1_listener($event) { ɵɵrestoreView(_r366); var ctx_r365 = ɵɵnextContext(); return ctx_r365.onCreate($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r359 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("grid", ctx_r359.grid);
} }
var TheadFormRowComponent = /** @class */ (function () {
    function TheadFormRowComponent() {
        this.create = new EventEmitter();
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
    TheadFormRowComponent.ɵcmp = ɵɵdefineComponent({ type: TheadFormRowComponent, selectors: [["", "ng2-st-thead-form-row", ""]], inputs: { grid: "grid", row: "row", createConfirm: "createConfirm" }, outputs: { create: "create" }, features: [ɵɵNgOnChangesFeature()], attrs: _c0$a, decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions"], [3, "grid", "create"], [3, "cell", "grid", "isNew", "createConfirm", "inputClass", "isInEditing", "edited"]], template: function TheadFormRowComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, TheadFormRowComponent_td_0_Template, 1, 0, "td", 0);
            ɵɵtemplate(1, TheadFormRowComponent_td_1_Template, 2, 1, "td", 1);
            ɵɵtemplate(2, TheadFormRowComponent_td_2_Template, 2, 6, "td", 2);
            ɵɵtemplate(3, TheadFormRowComponent_td_3_Template, 2, 1, "td", 1);
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showActionColumnLeft);
            ɵɵadvance(1);
            ɵɵproperty("ngForOf", ctx.grid.getNewRow().getCells());
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.showActionColumnRight);
        } }, directives: [NgIf, NgForOf, ActionsComponent, CellComponent], encapsulation: 2 });
    return TheadFormRowComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(TheadFormRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-form-row]',
                template: "\n      <td *ngIf=\"\"></td>\n      <td  *ngIf=\"showActionColumnLeft\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n      <td *ngFor=\"let cell of grid.getNewRow().getCells()\">\n        <ng2-smart-table-cell [cell]=\"cell\"\n                              [grid]=\"grid\"\n                              [isNew]=\"true\"\n                              [createConfirm]=\"createConfirm\"\n                              [inputClass]=\"addInputClass\"\n                              [isInEditing]=\"grid.getNewRow().isInEditing\"\n                              (edited)=\"onCreate($event)\">\n        </ng2-smart-table-cell>\n      </td>\n      <td  *ngIf=\"showActionColumnRight\"  class=\"ng2-smart-actions\">\n        <ng2-st-actions [grid]=\"grid\" (create)=\"onCreate($event)\"></ng2-st-actions>\n      </td>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();

var _c0$b = ["ng2-st-thead", ""];
function Ng2SmartTableTheadComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    var _r333 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 3);
    ɵɵlistener("sort", function Ng2SmartTableTheadComponent_tr_0_Template_tr_sort_0_listener($event) { ɵɵrestoreView(_r333); var ctx_r332 = ɵɵnextContext(); return ctx_r332.sort.emit($event); })("selectAllRows", function Ng2SmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener($event) { ɵɵrestoreView(_r333); var ctx_r334 = ɵɵnextContext(); return ctx_r334.selectAllRows.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r329 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r329.grid)("isAllSelected", ctx_r329.isAllSelected)("source", ctx_r329.source);
} }
function Ng2SmartTableTheadComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    var _r336 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tr", 4);
    ɵɵlistener("create", function Ng2SmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) { ɵɵrestoreView(_r336); var ctx_r335 = ɵɵnextContext(); return ctx_r335.create.emit($event); })("filter", function Ng2SmartTableTheadComponent_tr_1_Template_tr_filter_0_listener($event) { ɵɵrestoreView(_r336); var ctx_r337 = ɵɵnextContext(); return ctx_r337.filter.emit($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r330 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r330.grid)("source", ctx_r330.source);
} }
function Ng2SmartTableTheadComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 5);
} if (rf & 2) {
    var ctx_r331 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r331.grid)("createConfirm", ctx_r331.createConfirm);
} }
var Ng2SmartTableTheadComponent = /** @class */ (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    };
    Ng2SmartTableTheadComponent.ɵfac = function Ng2SmartTableTheadComponent_Factory(t) { return new (t || Ng2SmartTableTheadComponent)(); };
    Ng2SmartTableTheadComponent.ɵcmp = ɵɵdefineComponent({ type: Ng2SmartTableTheadComponent, selectors: [["", "ng2-st-thead", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected", createConfirm: "createConfirm" }, outputs: { sort: "sort", selectAllRows: "selectAllRows", create: "create", filter: "filter" }, features: [ɵɵNgOnChangesFeature()], attrs: _c0$b, decls: 3, vars: 3, consts: [["ng2-st-thead-titles-row", "", "class", "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows", 4, "ngIf"], ["ng2-st-thead-filters-row", "", "class", "ng2-smart-filters", 3, "grid", "source", "create", "filter", 4, "ngIf"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm", 4, "ngIf"], ["ng2-st-thead-titles-row", "", 1, "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows"], ["ng2-st-thead-filters-row", "", 1, "ng2-smart-filters", 3, "grid", "source", "create", "filter"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm"]], template: function Ng2SmartTableTheadComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, Ng2SmartTableTheadComponent_tr_0_Template, 1, 3, "tr", 0);
            ɵɵtemplate(1, Ng2SmartTableTheadComponent_tr_1_Template, 1, 2, "tr", 1);
            ɵɵtemplate(2, Ng2SmartTableTheadComponent_tr_2_Template, 1, 2, "tr", 2);
        } if (rf & 2) {
            ɵɵproperty("ngIf", !ctx.isHideHeader);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.isHideSubHeader);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.grid.createFormShown);
        } }, directives: [NgIf, TheadTitlesRowComponent, TheadFitlersRowComponent, TheadFormRowComponent], encapsulation: 2 });
    return Ng2SmartTableTheadComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng2SmartTableTheadComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead]',
                templateUrl: './thead.component.html',
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], sort: [{
            type: Output
        }], selectAllRows: [{
            type: Output
        }], create: [{
            type: Output
        }], filter: [{
            type: Output
        }] }); })();

function PagerComponent_nav_0_li_14_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtext(1);
    ɵɵelementStart(2, "span", 7);
    ɵɵtext(3, "(current)");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var page_r265 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", page_r265, " ");
} }
function PagerComponent_nav_0_li_14_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r271 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 15);
    ɵɵlistener("click", function PagerComponent_nav_0_li_14_a_2_Template_a_click_0_listener() { ɵɵrestoreView(_r271); var page_r265 = ɵɵnextContext().$implicit; var ctx_r269 = ɵɵnextContext(2); return ctx_r269.paginate(page_r265); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var page_r265 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(page_r265);
} }
var _c0$c = function (a0) { return { active: a0 }; };
function PagerComponent_nav_0_li_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "li", 4);
    ɵɵtemplate(1, PagerComponent_nav_0_li_14_span_1_Template, 4, 1, "span", 12);
    ɵɵtemplate(2, PagerComponent_nav_0_li_14_a_2_Template, 2, 1, "a", 13);
    ɵɵelementEnd();
} if (rf & 2) {
    var page_r265 = ctx.$implicit;
    var ctx_r264 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c0$c, ctx_r264.getPage() == page_r265));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r264.getPage() == page_r265);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r264.getPage() != page_r265);
} }
var _c1$1 = function (a0) { return { disabled: a0 }; };
function PagerComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    var _r274 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nav", 2);
    ɵɵelementStart(1, "ul", 3);
    ɵɵelementStart(2, "li", 4);
    ɵɵelementStart(3, "a", 5);
    ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_3_listener() { ɵɵrestoreView(_r274); var ctx_r273 = ɵɵnextContext(); return ctx_r273.getPage() == 1 ? false : ctx_r273.paginate(1); });
    ɵɵelementStart(4, "span", 6);
    ɵɵtext(5, "\u00AB");
    ɵɵelementEnd();
    ɵɵelementStart(6, "span", 7);
    ɵɵtext(7, "First");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "li", 4);
    ɵɵelementStart(9, "a", 8);
    ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_9_listener() { ɵɵrestoreView(_r274); var ctx_r275 = ɵɵnextContext(); return ctx_r275.getPage() == 1 ? false : ctx_r275.prev(); });
    ɵɵelementStart(10, "span", 6);
    ɵɵtext(11, "<");
    ɵɵelementEnd();
    ɵɵelementStart(12, "span", 7);
    ɵɵtext(13, "Prev");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(14, PagerComponent_nav_0_li_14_Template, 3, 5, "li", 9);
    ɵɵelementStart(15, "li", 4);
    ɵɵelementStart(16, "a", 10);
    ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_16_listener() { ɵɵrestoreView(_r274); var ctx_r276 = ɵɵnextContext(); return ctx_r276.getPage() == ctx_r276.getLast() ? false : ctx_r276.next(); });
    ɵɵelementStart(17, "span", 6);
    ɵɵtext(18, ">");
    ɵɵelementEnd();
    ɵɵelementStart(19, "span", 7);
    ɵɵtext(20, "Next");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(21, "li", 4);
    ɵɵelementStart(22, "a", 11);
    ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_22_listener() { ɵɵrestoreView(_r274); var ctx_r277 = ɵɵnextContext(); return ctx_r277.getPage() == ctx_r277.getLast() ? false : ctx_r277.paginate(ctx_r277.getLast()); });
    ɵɵelementStart(23, "span", 6);
    ɵɵtext(24, "\u00BB");
    ɵɵelementEnd();
    ɵɵelementStart(25, "span", 7);
    ɵɵtext(26, "Last");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r262 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(5, _c1$1, ctx_r262.getPage() == 1));
    ɵɵadvance(6);
    ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c1$1, ctx_r262.getPage() == 1));
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r262.getPages());
    ɵɵadvance(1);
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c1$1, ctx_r262.getPage() == ctx_r262.getLast()));
    ɵɵadvance(6);
    ɵɵproperty("ngClass", ɵɵpureFunction1(11, _c1$1, ctx_r262.getPage() == ctx_r262.getLast()));
} }
function PagerComponent_nav_1_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var item_r279 = ctx.$implicit;
    ɵɵproperty("value", item_r279);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r279);
} }
function PagerComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    var _r281 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nav", 16);
    ɵɵelementStart(1, "label", 17);
    ɵɵtext(2, " Per Page: ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "select", 18);
    ɵɵlistener("change", function PagerComponent_nav_1_Template_select_change_3_listener($event) { ɵɵrestoreView(_r281); var ctx_r280 = ɵɵnextContext(); return ctx_r280.onChangePerPage($event); })("ngModelChange", function PagerComponent_nav_1_Template_select_ngModelChange_3_listener($event) { ɵɵrestoreView(_r281); var ctx_r282 = ɵɵnextContext(); return ctx_r282.currentPerPage = $event; });
    ɵɵtemplate(4, PagerComponent_nav_1_option_4_Template, 2, 2, "option", 19);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r263 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r263.currentPerPage);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r263.perPageSelect);
} }
var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
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
    PagerComponent.ɵcmp = ɵɵdefineComponent({ type: PagerComponent, selectors: [["ng2-smart-table-pager"]], inputs: { source: "source", perPageSelect: "perPageSelect" }, outputs: { changePage: "changePage" }, features: [ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["class", "ng2-smart-pagination-nav", 4, "ngIf"], ["class", "ng2-smart-pagination-per-page", 4, "ngIf"], [1, "ng2-smart-pagination-nav"], [1, "ng2-smart-pagination", "pagination"], [1, "ng2-smart-page-item", "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Prev", 1, "ng2-smart-page-link", "page-link", "page-link-prev", 3, "click"], ["class", "ng2-smart-page-item page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next", 1, "ng2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["href", "#", "aria-label", "Last", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["class", "ng2-smart-page-link page-link", 4, "ngIf"], ["class", "ng2-smart-page-link page-link", "href", "#", 3, "click", 4, "ngIf"], [1, "ng2-smart-page-link", "page-link"], ["href", "#", 1, "ng2-smart-page-link", "page-link", 3, "click"], [1, "ng2-smart-pagination-per-page"], ["for", "per-page"], ["id", "per-page", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, PagerComponent_nav_0_Template, 27, 13, "nav", 0);
            ɵɵtemplate(1, PagerComponent_nav_1_Template, 5, 2, "nav", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.shouldShow());
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.perPageSelect && ctx.perPageSelect.length > 0);
        } }, directives: [NgIf, NgClass, NgForOf, SelectControlValueAccessor, NgControlStatus, NgModel, NgSelectOption, ɵangular_packages_forms_forms_x], styles: [".ng2-smart-pagination[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .ng2-smart-page-item[_ngcontent-%COMP%]{display:inline}.ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-next[_ngcontent-%COMP%], .ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-prev[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem;line-height:2.5rem}"] });
    return PagerComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(PagerComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-pager',
                styleUrls: ['./pager.component.scss'],
                template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
            }]
    }], null, { source: [{
            type: Input
        }], perPageSelect: [{
            type: Input
        }], changePage: [{
            type: Output
        }] }); })();

function Ng2SmartTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    var _r191 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "thead", 4);
    ɵɵlistener("create", function Ng2SmartTableComponent_thead_1_Template_thead_create_0_listener($event) { ɵɵrestoreView(_r191); var ctx_r190 = ɵɵnextContext(); return ctx_r190.create.emit($event); })("selectAllRows", function Ng2SmartTableComponent_thead_1_Template_thead_selectAllRows_0_listener($event) { ɵɵrestoreView(_r191); var ctx_r192 = ɵɵnextContext(); return ctx_r192.onSelectAllRows($event); })("sort", function Ng2SmartTableComponent_thead_1_Template_thead_sort_0_listener($event) { ɵɵrestoreView(_r191); var ctx_r193 = ɵɵnextContext(); return ctx_r193.sort($event); })("filter", function Ng2SmartTableComponent_thead_1_Template_thead_filter_0_listener($event) { ɵɵrestoreView(_r191); var ctx_r194 = ɵɵnextContext(); return ctx_r194.filter($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r188 = ɵɵnextContext();
    ɵɵproperty("grid", ctx_r188.grid)("isAllSelected", ctx_r188.isAllSelected)("source", ctx_r188.source)("createConfirm", ctx_r188.createConfirm);
} }
function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template(rf, ctx) { if (rf & 1) {
    var _r196 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ng2-smart-table-pager", 5);
    ɵɵlistener("changePage", function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template_ng2_smart_table_pager_changePage_0_listener($event) { ɵɵrestoreView(_r196); var ctx_r195 = ɵɵnextContext(); return ctx_r195.changePage($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r189 = ɵɵnextContext();
    ɵɵproperty("source", ctx_r189.source)("perPageSelect", ctx_r189.perPageSelect);
} }
var Ng2SmartTableComponent = /** @class */ (function () {
    function Ng2SmartTableComponent() {
        this.settings = {};
        this.rowSelect = new EventEmitter();
        this.userRowSelect = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
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
    Ng2SmartTableComponent.ɵcmp = ɵɵdefineComponent({ type: Ng2SmartTableComponent, selectors: [["ng2-smart-table"]], inputs: { source: "source", settings: "settings" }, outputs: { rowSelect: "rowSelect", userRowSelect: "userRowSelect", delete: "delete", edit: "edit", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, features: [ɵɵNgOnChangesFeature()], decls: 4, vars: 9, consts: [[3, "id", "ngClass"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter", 4, "ngIf"], ["ng2-st-tbody", "", 3, "grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction", "edit", "delete", "custom", "userSelectRow", "editRowSelect", "multipleSelectRow", "rowHover"], [3, "source", "perPageSelect", "changePage", 4, "ngIf"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter"], [3, "source", "perPageSelect", "changePage"]], template: function Ng2SmartTableComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "table", 0);
            ɵɵtemplate(1, Ng2SmartTableComponent_thead_1_Template, 1, 4, "thead", 1);
            ɵɵelementStart(2, "tbody", 2);
            ɵɵlistener("edit", function Ng2SmartTableComponent_Template_tbody_edit_2_listener($event) { return ctx.edit.emit($event); })("delete", function Ng2SmartTableComponent_Template_tbody_delete_2_listener($event) { return ctx.delete.emit($event); })("custom", function Ng2SmartTableComponent_Template_tbody_custom_2_listener($event) { return ctx.custom.emit($event); })("userSelectRow", function Ng2SmartTableComponent_Template_tbody_userSelectRow_2_listener($event) { return ctx.onUserSelectRow($event); })("editRowSelect", function Ng2SmartTableComponent_Template_tbody_editRowSelect_2_listener($event) { return ctx.editRowSelect($event); })("multipleSelectRow", function Ng2SmartTableComponent_Template_tbody_multipleSelectRow_2_listener($event) { return ctx.multipleSelectRow($event); })("rowHover", function Ng2SmartTableComponent_Template_tbody_rowHover_2_listener($event) { return ctx.onRowHover($event); });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(3, Ng2SmartTableComponent_ng2_smart_table_pager_3_Template, 1, 2, "ng2-smart-table-pager", 3);
        } if (rf & 2) {
            ɵɵproperty("id", ctx.tableId)("ngClass", ctx.tableClass);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.isHideHeader || !ctx.isHideSubHeader);
            ɵɵadvance(1);
            ɵɵproperty("grid", ctx.grid)("source", ctx.source)("deleteConfirm", ctx.deleteConfirm)("editConfirm", ctx.editConfirm)("rowClassFunction", ctx.rowClassFunction);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.isPagerDisplay);
        } }, directives: [NgClass, NgIf, Ng2SmartTableTbodyComponent, Ng2SmartTableTheadComponent, PagerComponent], styles: ["[_nghost-%COMP%]{font-size:1rem}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     button, [_nghost-%COMP%]     input, [_nghost-%COMP%]     optgroup, [_nghost-%COMP%]     select, [_nghost-%COMP%]     textarea{color:inherit;font:inherit;margin:0}[_nghost-%COMP%]     table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}[_nghost-%COMP%]     table tr th{font-weight:700}[_nghost-%COMP%]     table tr section{font-size:.75em;font-weight:700}[_nghost-%COMP%]     table tr td, [_nghost-%COMP%]     table tr th{font-size:.875em;margin:0;padding:.5em 1em}[_nghost-%COMP%]     a{color:#1e6bb8;text-decoration:none}[_nghost-%COMP%]     a:hover{text-decoration:underline}"] });
    return Ng2SmartTableComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng2SmartTableComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table',
                styleUrls: ['./ng2-smart-table.component.scss'],
                templateUrl: './ng2-smart-table.component.html',
            }]
    }], null, { source: [{
            type: Input
        }], settings: [{
            type: Input
        }], rowSelect: [{
            type: Output
        }], userRowSelect: [{
            type: Output
        }], delete: [{
            type: Output
        }], edit: [{
            type: Output
        }], create: [{
            type: Output
        }], custom: [{
            type: Output
        }], deleteConfirm: [{
            type: Output
        }], editConfirm: [{
            type: Output
        }], createConfirm: [{
            type: Output
        }], rowHover: [{
            type: Output
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
    CellModule.ɵmod = ɵɵdefineNgModule({ type: CellModule });
    CellModule.ɵinj = ɵɵdefineInjector({ factory: function CellModule_Factory(t) { return new (t || CellModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                Ng2CompleterModule,
            ]] });
    return CellModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CellModule, { declarations: [CellComponent,
        CustomEditComponent,
        DefaultEditComponent,
        EditCellComponent,
        CheckboxEditorComponent,
        CompleterEditorComponent,
        InputEditorComponent,
        SelectEditorComponent,
        TextareaEditorComponent,
        CustomViewComponent,
        ViewCellComponent], imports: [CommonModule,
        FormsModule,
        Ng2CompleterModule], exports: [CellComponent,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(CellModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    Ng2CompleterModule,
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
    FilterModule.ɵmod = ɵɵdefineNgModule({ type: FilterModule });
    FilterModule.ɵinj = ɵɵdefineInjector({ factory: function FilterModule_Factory(t) { return new (t || FilterModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                Ng2CompleterModule,
            ]] });
    return FilterModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(FilterModule, { declarations: [FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2CompleterModule], exports: [FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(FilterModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    Ng2CompleterModule,
                ],
                declarations: __spread(FILTER_COMPONENTS),
                exports: __spread(FILTER_COMPONENTS),
            }]
    }], null, null); })();

var PagerModule = /** @class */ (function () {
    function PagerModule() {
    }
    PagerModule.ɵmod = ɵɵdefineNgModule({ type: PagerModule });
    PagerModule.ɵinj = ɵɵdefineInjector({ factory: function PagerModule_Factory(t) { return new (t || PagerModule)(); }, imports: [[
                CommonModule,
                FormsModule,
            ]] });
    return PagerModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PagerModule, { declarations: [PagerComponent], imports: [CommonModule,
        FormsModule], exports: [PagerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PagerModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
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
    TBodyModule.ɵmod = ɵɵdefineNgModule({ type: TBodyModule });
    TBodyModule.ɵinj = ɵɵdefineInjector({ factory: function TBodyModule_Factory(t) { return new (t || TBodyModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                CellModule,
            ]] });
    return TBodyModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(TBodyModule, { declarations: [TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent], imports: [CommonModule,
        FormsModule,
        CellModule], exports: [TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(TBodyModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
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
    THeadModule.ɵmod = ɵɵdefineNgModule({ type: THeadModule });
    THeadModule.ɵinj = ɵɵdefineInjector({ factory: function THeadModule_Factory(t) { return new (t || THeadModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                FilterModule,
                CellModule,
            ]] });
    return THeadModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(THeadModule, { declarations: [ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent], imports: [CommonModule,
        FormsModule,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(THeadModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
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
    Ng2SmartTableModule.ɵmod = ɵɵdefineNgModule({ type: Ng2SmartTableModule });
    Ng2SmartTableModule.ɵinj = ɵɵdefineInjector({ factory: function Ng2SmartTableModule_Factory(t) { return new (t || Ng2SmartTableModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                CellModule,
                FilterModule,
                PagerModule,
                TBodyModule,
                THeadModule,
            ]] });
    return Ng2SmartTableModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(Ng2SmartTableModule, { declarations: [Ng2SmartTableComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CellModule,
        FilterModule,
        PagerModule,
        TBodyModule,
        THeadModule], exports: [Ng2SmartTableComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(Ng2SmartTableModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
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
            .pipe(map(function (res) {
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
        var httpParams = new HttpParams();
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

/**
 * Generated bundle index. Do not edit.
 */

export { Cell, DefaultEditor, DefaultFilter, LocalDataSource, Ng2SmartTableComponent, Ng2SmartTableModule, ServerDataSource };
//# sourceMappingURL=ng2-smart-table.js.map
