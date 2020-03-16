import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from './lib/grid';
import { DataSource } from './lib/data-source/data-source';
import { deepExtend } from './lib/helpers';
import { LocalDataSource } from './lib/data-source/local/local.data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./components/tbody/tbody.component";
import * as i3 from "./components/thead/thead.component";
import * as i4 from "./components/pager/pager.component";
function Ng2SmartTableComponent_thead_1_Template(rf, ctx) { if (rf & 1) {
    var _r191 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "thead", 4);
    i0.ɵɵlistener("create", function Ng2SmartTableComponent_thead_1_Template_thead_create_0_listener($event) { i0.ɵɵrestoreView(_r191); var ctx_r190 = i0.ɵɵnextContext(); return ctx_r190.create.emit($event); })("selectAllRows", function Ng2SmartTableComponent_thead_1_Template_thead_selectAllRows_0_listener($event) { i0.ɵɵrestoreView(_r191); var ctx_r192 = i0.ɵɵnextContext(); return ctx_r192.onSelectAllRows($event); })("sort", function Ng2SmartTableComponent_thead_1_Template_thead_sort_0_listener($event) { i0.ɵɵrestoreView(_r191); var ctx_r193 = i0.ɵɵnextContext(); return ctx_r193.sort($event); })("filter", function Ng2SmartTableComponent_thead_1_Template_thead_filter_0_listener($event) { i0.ɵɵrestoreView(_r191); var ctx_r194 = i0.ɵɵnextContext(); return ctx_r194.filter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r188 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r188.grid)("isAllSelected", ctx_r188.isAllSelected)("source", ctx_r188.source)("createConfirm", ctx_r188.createConfirm);
} }
function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template(rf, ctx) { if (rf & 1) {
    var _r196 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng2-smart-table-pager", 5);
    i0.ɵɵlistener("changePage", function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template_ng2_smart_table_pager_changePage_0_listener($event) { i0.ɵɵrestoreView(_r196); var ctx_r195 = i0.ɵɵnextContext(); return ctx_r195.changePage($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r189 = i0.ɵɵnextContext();
    i0.ɵɵproperty("source", ctx_r189.source)("perPageSelect", ctx_r189.perPageSelect);
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
    Ng2SmartTableComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Ng2SmartTableComponent, selectors: [["ng2-smart-table"]], inputs: { source: "source", settings: "settings" }, outputs: { rowSelect: "rowSelect", userRowSelect: "userRowSelect", delete: "delete", edit: "edit", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 4, vars: 9, consts: [[3, "id", "ngClass"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter", 4, "ngIf"], ["ng2-st-tbody", "", 3, "grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction", "edit", "delete", "custom", "userSelectRow", "editRowSelect", "multipleSelectRow", "rowHover"], [3, "source", "perPageSelect", "changePage", 4, "ngIf"], ["ng2-st-thead", "", 3, "grid", "isAllSelected", "source", "createConfirm", "create", "selectAllRows", "sort", "filter"], [3, "source", "perPageSelect", "changePage"]], template: function Ng2SmartTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, Ng2SmartTableComponent_thead_1_Template, 1, 4, "thead", 1);
            i0.ɵɵelementStart(2, "tbody", 2);
            i0.ɵɵlistener("edit", function Ng2SmartTableComponent_Template_tbody_edit_2_listener($event) { return ctx.edit.emit($event); })("delete", function Ng2SmartTableComponent_Template_tbody_delete_2_listener($event) { return ctx.delete.emit($event); })("custom", function Ng2SmartTableComponent_Template_tbody_custom_2_listener($event) { return ctx.custom.emit($event); })("userSelectRow", function Ng2SmartTableComponent_Template_tbody_userSelectRow_2_listener($event) { return ctx.onUserSelectRow($event); })("editRowSelect", function Ng2SmartTableComponent_Template_tbody_editRowSelect_2_listener($event) { return ctx.editRowSelect($event); })("multipleSelectRow", function Ng2SmartTableComponent_Template_tbody_multipleSelectRow_2_listener($event) { return ctx.multipleSelectRow($event); })("rowHover", function Ng2SmartTableComponent_Template_tbody_rowHover_2_listener($event) { return ctx.onRowHover($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, Ng2SmartTableComponent_ng2_smart_table_pager_3_Template, 1, 2, "ng2-smart-table-pager", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("id", ctx.tableId)("ngClass", ctx.tableClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isHideHeader || !ctx.isHideSubHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("grid", ctx.grid)("source", ctx.source)("deleteConfirm", ctx.deleteConfirm)("editConfirm", ctx.editConfirm)("rowClassFunction", ctx.rowClassFunction);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isPagerDisplay);
        } }, directives: [i1.NgClass, i1.NgIf, i2.Ng2SmartTableTbodyComponent, i3.Ng2SmartTableTheadComponent, i4.PagerComponent], styles: ["[_nghost-%COMP%]{font-size:1rem}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     button, [_nghost-%COMP%]     input, [_nghost-%COMP%]     optgroup, [_nghost-%COMP%]     select, [_nghost-%COMP%]     textarea{color:inherit;font:inherit;margin:0}[_nghost-%COMP%]     table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}[_nghost-%COMP%]     table tr th{font-weight:700}[_nghost-%COMP%]     table tr section{font-size:.75em;font-weight:700}[_nghost-%COMP%]     table tr td, [_nghost-%COMP%]     table tr th{font-size:.875em;margin:0;padding:.5em 1em}[_nghost-%COMP%]     a{color:#1e6bb8;text-decoration:none}[_nghost-%COMP%]     a:hover{text-decoration:underline}"] });
    return Ng2SmartTableComponent;
}());
export { Ng2SmartTableComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Ng2SmartTableComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnRzIiwibGliL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7SUNKMUUsZ0NBU1E7SUFKWSw4S0FBVSw0QkFBbUIsSUFBQyxtTkFBQSxzTEFBQSw0TEFBQTtJQUlsRCxpQkFBUTs7O0lBUlksb0NBQWEseUNBQUEsMkJBQUEseUNBQUE7Ozs7SUEwQm5DLGdEQUl3QjtJQURBLHFQQUFpQztJQUN6RCxpQkFBd0I7OztJQUhBLHdDQUFpQix5Q0FBQTs7QUR0QnpDO0lBQUE7UUFRVyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDeEMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFZaEUsb0JBQWUsR0FBVztZQUN4QixJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLE9BQU8sRUFBRTtnQkFDUCxXQUFXLEVBQUUsU0FBUztnQkFDdEIsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsTUFBTSxFQUFFLElBQUk7Z0JBQ1osTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLE1BQU07YUFDakI7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sVUFBVSxFQUFFLEVBQUU7YUFDZjtZQUNELElBQUksRUFBRTtnQkFDSixVQUFVLEVBQUUsRUFBRTtnQkFDZCxpQkFBaUIsRUFBRSxNQUFNO2dCQUN6QixpQkFBaUIsRUFBRSxRQUFRO2dCQUMzQixtQkFBbUIsRUFBRSxRQUFRO2dCQUM3QixXQUFXLEVBQUUsS0FBSzthQUNuQjtZQUNELEdBQUcsRUFBRTtnQkFDSCxVQUFVLEVBQUUsRUFBRTtnQkFDZCxnQkFBZ0IsRUFBRSxTQUFTO2dCQUMzQixtQkFBbUIsRUFBRSxRQUFRO2dCQUM3QixtQkFBbUIsRUFBRSxRQUFRO2dCQUM3QixhQUFhLEVBQUUsS0FBSzthQUNyQjtZQUNELE1BQU0sRUFBRTtnQkFDTixtQkFBbUIsRUFBRSxRQUFRO2dCQUM3QixhQUFhLEVBQUUsS0FBSzthQUNyQjtZQUNELElBQUksRUFBRTtnQkFDSixFQUFFLEVBQUUsRUFBRTtnQkFDTixLQUFLLEVBQUUsRUFBRTthQUNWO1lBQ0QsYUFBYSxFQUFFLGVBQWU7WUFDOUIsT0FBTyxFQUFFLEVBQUU7WUFDWCxLQUFLLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNELGdCQUFnQixFQUFFLGNBQU0sT0FBQSxFQUFFLEVBQUYsQ0FBRTtTQUMzQixDQUFDO1FBRUYsa0JBQWEsR0FBWSxLQUFLLENBQUM7S0EwSGhDO0lBeEhDLDRDQUFXLEdBQVgsVUFBWSxPQUFpRDtRQUMzRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7YUFDL0M7WUFDRCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDhDQUFhLEdBQWIsVUFBYyxHQUFRO1FBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEtBQUssT0FBTyxFQUFFO1lBQ2xELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7SUFFRCxnREFBZSxHQUFmLFVBQWdCLEdBQVE7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxPQUFPLEVBQUU7WUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsMkNBQVUsR0FBVixVQUFXLEdBQVE7UUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGtEQUFpQixHQUFqQixVQUFrQixHQUFRO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGdEQUFlLEdBQWYsVUFBZ0IsTUFBVztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELDRDQUFXLEdBQVgsVUFBWSxHQUFRO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELG9EQUFtQixHQUFuQixVQUFvQixHQUFRO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHlDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsOENBQWEsR0FBYjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sWUFBWSxVQUFVLEVBQUU7WUFDckMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxZQUFZLEtBQUssRUFBRTtZQUN2QyxPQUFPLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxlQUFlLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUNFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsMkNBQVUsR0FBVixVQUFXLE1BQVc7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFJLEdBQUosVUFBSyxNQUFXO1FBQ2QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHVDQUFNLEdBQU4sVUFBTyxNQUFXO1FBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFTyxpREFBZ0IsR0FBeEI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU8sa0RBQWlCLEdBQXpCLFVBQTBCLEdBQVE7UUFDaEMsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDaEMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzVDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFNLElBQUssT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDL0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLDhDQUFhLEdBQXJCLFVBQXNCLEdBQVE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDbEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2hDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtZQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztnR0FqTVUsc0JBQXNCOytEQUF0QixzQkFBc0I7WUNibkMsZ0NBRUU7WUFBQSwyRUFTQTtZQUVBLGdDQVlRO1lBUFksc0dBQVEscUJBQWlCLElBQUMsNkZBQ2hCLHVCQUFtQixJQURILDZGQUVoQix1QkFBbUIsSUFGSCwyR0FHVCwyQkFBdUIsSUFIZCwyR0FJVCx5QkFBcUIsSUFKWixtSEFLTCw2QkFBeUIsSUFMcEIsaUdBTWQsc0JBQWtCLElBTko7WUFPOUMsaUJBQVE7WUFFVixpQkFBUTtZQUVSLDJHQUlBOztZQWpDTyxnQ0FBYywyQkFBQTtZQUVDLGVBQXlDO1lBQXpDLGdFQUF5QztZQVd6QyxlQUFhO1lBQWIsK0JBQWEsc0JBQUEsb0NBQUEsZ0NBQUEsMENBQUE7WUFnQlosZUFBc0I7WUFBdEIseUNBQXNCOztpQ0Q3QjdDO0NBZ05DLEFBeE1ELElBd01DO1NBbk1ZLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDL0MsV0FBVyxFQUFFLGtDQUFrQzthQUNoRDs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlLCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi9saWIvZGF0YS1zZXQvcm93JztcbmltcG9ydCB7IGRlZXBFeHRlbmQgfSBmcm9tICcuL2xpYi9oZWxwZXJzJztcbmltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSB9IGZyb20gJy4vbGliL2RhdGEtc291cmNlL2xvY2FsL2xvY2FsLmRhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXNtYXJ0LXRhYmxlJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZzJTbWFydFRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBzb3VyY2U6IGFueTtcbiAgQElucHV0KCkgc2V0dGluZ3M6IE9iamVjdCA9IHt9O1xuXG4gIEBPdXRwdXQoKSByb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHVzZXJSb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjdXN0b20gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZUNvbmZpcm0gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXRDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjcmVhdGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByb3dIb3ZlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICB0YWJsZUNsYXNzOiBzdHJpbmc7XG4gIHRhYmxlSWQ6IHN0cmluZztcbiAgcGVyUGFnZVNlbGVjdDogYW55O1xuICBpc0hpZGVIZWFkZXI6IGJvb2xlYW47XG4gIGlzSGlkZVN1YkhlYWRlcjogYm9vbGVhbjtcbiAgaXNQYWdlckRpc3BsYXk6IGJvb2xlYW47XG4gIHJvd0NsYXNzRnVuY3Rpb246IEZ1bmN0aW9uO1xuXG5cbiAgZ3JpZDogR3JpZDtcbiAgZGVmYXVsdFNldHRpbmdzOiBPYmplY3QgPSB7XG4gICAgbW9kZTogJ2lubGluZScsIC8vIGlubGluZXxleHRlcm5hbHxjbGljay10by1lZGl0XG4gICAgc2VsZWN0TW9kZTogJ3NpbmdsZScsIC8vIHNpbmdsZXxtdWx0aVxuICAgIGhpZGVIZWFkZXI6IGZhbHNlLFxuICAgIGhpZGVTdWJIZWFkZXI6IGZhbHNlLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgIGNvbHVtblRpdGxlOiAnQWN0aW9ucycsXG4gICAgICBhZGQ6IHRydWUsXG4gICAgICBlZGl0OiB0cnVlLFxuICAgICAgZGVsZXRlOiB0cnVlLFxuICAgICAgY3VzdG9tOiBbXSxcbiAgICAgIHBvc2l0aW9uOiAnbGVmdCcsIC8vIGxlZnR8cmlnaHRcbiAgICB9LFxuICAgIGZpbHRlcjoge1xuICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgfSxcbiAgICBlZGl0OiB7XG4gICAgICBpbnB1dENsYXNzOiAnJyxcbiAgICAgIGVkaXRCdXR0b25Db250ZW50OiAnRWRpdCcsXG4gICAgICBzYXZlQnV0dG9uQ29udGVudDogJ1VwZGF0ZScsXG4gICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnQ2FuY2VsJyxcbiAgICAgIGNvbmZpcm1TYXZlOiBmYWxzZSxcbiAgICB9LFxuICAgIGFkZDoge1xuICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICBhZGRCdXR0b25Db250ZW50OiAnQWRkIE5ldycsXG4gICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnQ3JlYXRlJyxcbiAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICdDYW5jZWwnLFxuICAgICAgY29uZmlybUNyZWF0ZTogZmFsc2UsXG4gICAgfSxcbiAgICBkZWxldGU6IHtcbiAgICAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6ICdEZWxldGUnLFxuICAgICAgY29uZmlybURlbGV0ZTogZmFsc2UsXG4gICAgfSxcbiAgICBhdHRyOiB7XG4gICAgICBpZDogJycsXG4gICAgICBjbGFzczogJycsXG4gICAgfSxcbiAgICBub0RhdGFNZXNzYWdlOiAnTm8gZGF0YSBmb3VuZCcsXG4gICAgY29sdW1uczoge30sXG4gICAgcGFnZXI6IHtcbiAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICBwZXJQYWdlOiAxMCxcbiAgICB9LFxuICAgIHJvd0NsYXNzRnVuY3Rpb246ICgpID0+IFwiXCJcbiAgfTtcblxuICBpc0FsbFNlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIGlmIChjaGFuZ2VzWydzZXR0aW5ncyddKSB7XG4gICAgICAgIHRoaXMuZ3JpZC5zZXRTZXR0aW5ncyh0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzWydzb3VyY2UnXSkge1xuICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJlcGFyZVNvdXJjZSgpO1xuICAgICAgICB0aGlzLmdyaWQuc2V0U291cmNlKHRoaXMuc291cmNlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pbml0R3JpZCgpO1xuICAgIH1cbiAgICB0aGlzLnRhYmxlSWQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYXR0ci5pZCcpO1xuICAgIHRoaXMudGFibGVDbGFzcyA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhdHRyLmNsYXNzJyk7XG4gICAgdGhpcy5pc0hpZGVIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZUhlYWRlcicpO1xuICAgIHRoaXMuaXNIaWRlU3ViSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVTdWJIZWFkZXInKTtcbiAgICB0aGlzLmlzUGFnZXJEaXNwbGF5ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLmRpc3BsYXknKTtcbiAgICB0aGlzLmlzUGFnZXJEaXNwbGF5ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLmRpc3BsYXknKTtcbiAgICB0aGlzLnBlclBhZ2VTZWxlY3QgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncGFnZXIucGVyUGFnZVNlbGVjdCcpO1xuICAgIHRoaXMucm93Q2xhc3NGdW5jdGlvbiA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdyb3dDbGFzc0Z1bmN0aW9uJyk7XG4gIH1cblxuICBlZGl0Um93U2VsZWN0KHJvdzogUm93KSB7XG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdzZWxlY3RNb2RlJykgPT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMub25NdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uU2VsZWN0Um93KHJvdyk7XG4gICAgfVxuICB9XG5cbiAgb25Vc2VyU2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdzZWxlY3RNb2RlJykgIT09ICdtdWx0aScpIHtcbiAgICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93KTtcbiAgICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcbiAgICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIG9uUm93SG92ZXIocm93OiBSb3cpIHtcbiAgICB0aGlzLnJvd0hvdmVyLmVtaXQocm93KTtcbiAgfVxuXG4gIG11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgdGhpcy5ncmlkLm11bHRpcGxlU2VsZWN0Um93KHJvdyk7XG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhyb3cpO1xuICAgIHRoaXMuZW1pdFNlbGVjdFJvdyhyb3cpO1xuICB9XG5cbiAgb25TZWxlY3RBbGxSb3dzKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkID0gIXRoaXMuaXNBbGxTZWxlY3RlZDtcbiAgICB0aGlzLmdyaWQuc2VsZWN0QWxsUm93cyh0aGlzLmlzQWxsU2VsZWN0ZWQpO1xuXG4gICAgdGhpcy5lbWl0VXNlclNlbGVjdFJvdyhudWxsKTtcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cobnVsbCk7XG4gIH1cblxuICBvblNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIHRoaXMuZ3JpZC5zZWxlY3RSb3cocm93KTtcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcbiAgfVxuXG4gIG9uTXVsdGlwbGVTZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5wcmVwYXJlU291cmNlKCk7XG4gICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGhpcy5zb3VyY2UsIHRoaXMucHJlcGFyZVNldHRpbmdzKCkpO1xuICAgIHRoaXMuZ3JpZC5vblNlbGVjdFJvdygpLnN1YnNjcmliZSgocm93KSA9PiB0aGlzLmVtaXRTZWxlY3RSb3cocm93KSk7XG4gIH1cblxuICBwcmVwYXJlU291cmNlKCk6IERhdGFTb3VyY2Uge1xuICAgIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIERhdGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc291cmNlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHJldHVybiBuZXcgTG9jYWxEYXRhU291cmNlKHRoaXMuc291cmNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IExvY2FsRGF0YVNvdXJjZSgpO1xuICB9XG5cbiAgcHJlcGFyZVNldHRpbmdzKCk6IE9iamVjdCB7XG4gICAgcmV0dXJuIGRlZXBFeHRlbmQoe30sIHRoaXMuZGVmYXVsdFNldHRpbmdzLCB0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIGNoYW5nZVBhZ2UoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcbiAgfVxuXG4gIHNvcnQoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcbiAgfVxuXG4gIGZpbHRlcigkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMucmVzZXRBbGxTZWxlY3RvcigpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEFsbFNlbGVjdG9yKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0VXNlclNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIGNvbnN0IHNlbGVjdGVkUm93cyA9IHRoaXMuZ3JpZC5nZXRTZWxlY3RlZFJvd3MoKTtcblxuICAgIHRoaXMudXNlclJvd1NlbGVjdC5lbWl0KHtcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IG51bGwsXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkUm93cyAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoID8gc2VsZWN0ZWRSb3dzLm1hcCgocjogUm93KSA9PiByLmdldERhdGEoKSkgOiBbXSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIHRoaXMucm93U2VsZWN0LmVtaXQoe1xuICAgICAgZGF0YTogcm93ID8gcm93LmdldERhdGEoKSA6IG51bGwsXG4gICAgICBpc1NlbGVjdGVkOiByb3cgPyByb3cuZ2V0SXNTZWxlY3RlZCgpIDogbnVsbCxcbiAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgfSk7XG4gIH1cblxufVxuIiwiPHRhYmxlIFtpZF09XCJ0YWJsZUlkXCIgW25nQ2xhc3NdPVwidGFibGVDbGFzc1wiPlxuXG4gIDx0aGVhZCBuZzItc3QtdGhlYWQgKm5nSWY9XCIhaXNIaWRlSGVhZGVyIHx8ICFpc0hpZGVTdWJIZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtpc0FsbFNlbGVjdGVkXT1cImlzQWxsU2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RBbGxSb3dzKT1cIm9uU2VsZWN0QWxsUm93cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoc29ydCk9XCJzb3J0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwiZmlsdGVyKCRldmVudClcIj5cbiAgPC90aGVhZD5cblxuICA8dGJvZHkgbmcyLXN0LXRib2R5IFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGVsZXRlQ29uZmlybV09XCJkZWxldGVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgIFtyb3dDbGFzc0Z1bmN0aW9uXT1cInJvd0NsYXNzRnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoZGVsZXRlKT1cImRlbGV0ZS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChjdXN0b20pPVwiY3VzdG9tLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKHVzZXJTZWxlY3RSb3cpPVwib25Vc2VyU2VsZWN0Um93KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChlZGl0Um93U2VsZWN0KT1cImVkaXRSb3dTZWxlY3QoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKG11bHRpcGxlU2VsZWN0Um93KT1cIm11bHRpcGxlU2VsZWN0Um93KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChyb3dIb3Zlcik9XCJvblJvd0hvdmVyKCRldmVudClcIj5cbiAgPC90Ym9keT5cblxuPC90YWJsZT5cblxuPG5nMi1zbWFydC10YWJsZS1wYWdlciAqbmdJZj1cImlzUGFnZXJEaXNwbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwZXJQYWdlU2VsZWN0XT1cInBlclBhZ2VTZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZVBhZ2UpPVwiY2hhbmdlUGFnZSgkZXZlbnQpXCI+XG48L25nMi1zbWFydC10YWJsZS1wYWdlcj5cbiJdfQ==