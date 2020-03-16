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
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "thead", 4);
    i0.ɵɵlistener("create", function Ng2SmartTableComponent_thead_1_Template_thead_create_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.create.emit($event); })("selectAllRows", function Ng2SmartTableComponent_thead_1_Template_thead_selectAllRows_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onSelectAllRows($event); })("sort", function Ng2SmartTableComponent_thead_1_Template_thead_sort_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.sort($event); })("filter", function Ng2SmartTableComponent_thead_1_Template_thead_filter_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.filter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r0.grid)("isAllSelected", ctx_r0.isAllSelected)("source", ctx_r0.source)("createConfirm", ctx_r0.createConfirm);
} }
function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng2-smart-table-pager", 5);
    i0.ɵɵlistener("changePage", function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template_ng2_smart_table_pager_changePage_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.changePage($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("source", ctx_r1.source)("perPageSelect", ctx_r1.perPageSelect);
} }
export class Ng2SmartTableComponent {
    constructor() {
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
            rowClassFunction: () => ""
        };
        this.isAllSelected = false;
    }
    ngOnChanges(changes) {
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
    }
    editRowSelect(row) {
        if (this.grid.getSetting('selectMode') === 'multi') {
            this.onMultipleSelectRow(row);
        }
        else {
            this.onSelectRow(row);
        }
    }
    onUserSelectRow(row) {
        if (this.grid.getSetting('selectMode') !== 'multi') {
            this.grid.selectRow(row);
            this.emitUserSelectRow(row);
            this.emitSelectRow(row);
        }
    }
    onRowHover(row) {
        this.rowHover.emit(row);
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
        this.emitSelectRow(row);
    }
    onSelectAllRows($event) {
        this.isAllSelected = !this.isAllSelected;
        this.grid.selectAllRows(this.isAllSelected);
        this.emitUserSelectRow(null);
        this.emitSelectRow(null);
    }
    onSelectRow(row) {
        this.grid.selectRow(row);
        this.emitSelectRow(row);
    }
    onMultipleSelectRow(row) {
        this.emitSelectRow(row);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
        this.grid.onSelectRow().subscribe((row) => this.emitSelectRow(row));
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        else if (this.source instanceof Array) {
            return new LocalDataSource(this.source);
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    changePage($event) {
        this.resetAllSelector();
    }
    sort($event) {
        this.resetAllSelector();
    }
    filter($event) {
        this.resetAllSelector();
    }
    resetAllSelector() {
        this.isAllSelected = false;
    }
    emitUserSelectRow(row) {
        const selectedRows = this.grid.getSelectedRows();
        this.userRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: selectedRows && selectedRows.length ? selectedRows.map((r) => r.getData()) : [],
        });
    }
    emitSelectRow(row) {
        this.rowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
        });
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9uZzItc21hcnQtdGFibGUuY29tcG9uZW50LnRzIiwibGliL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWdCLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7Ozs7Ozs7SUNKMUUsZ0NBU1E7SUFKWSw0S0FBVSwwQkFBbUIsSUFBQywrTUFBQSxrTEFBQSx3TEFBQTtJQUlsRCxpQkFBUTs7O0lBUlksa0NBQWEsdUNBQUEseUJBQUEsdUNBQUE7Ozs7SUEwQm5DLGdEQUl3QjtJQURBLGlQQUFpQztJQUN6RCxpQkFBd0I7OztJQUhBLHNDQUFpQix1Q0FBQTs7QURqQnpDLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFRVyxhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXJCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMvQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFHLElBQUksWUFBWSxF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aEMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQzVDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDLENBQUM7SUFDTCxDQUFDOzs0RkFqTVUsc0JBQXNCOzJEQUF0QixzQkFBc0I7UUNibkMsZ0NBRUU7UUFBQSwyRUFTQTtRQUVBLGdDQVlRO1FBUFksc0dBQVEscUJBQWlCLElBQUMsNkZBQ2hCLHVCQUFtQixJQURILDZGQUVoQix1QkFBbUIsSUFGSCwyR0FHVCwyQkFBdUIsSUFIZCwyR0FJVCx5QkFBcUIsSUFKWixtSEFLTCw2QkFBeUIsSUFMcEIsaUdBTWQsc0JBQWtCLElBTko7UUFPOUMsaUJBQVE7UUFFVixpQkFBUTtRQUVSLDJHQUlBOztRQWpDTyxnQ0FBYywyQkFBQTtRQUVDLGVBQXlDO1FBQXpDLGdFQUF5QztRQVd6QyxlQUFhO1FBQWIsK0JBQWEsc0JBQUEsb0NBQUEsZ0NBQUEsMENBQUE7UUFnQlosZUFBc0I7UUFBdEIseUNBQXNCOztrRERoQmhDLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7Z0JBQy9DLFdBQVcsRUFBRSxrQ0FBa0M7YUFDaEQ7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZSwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4vbGliL2RhdGEtc2V0L3Jvdyc7XG5pbXBvcnQgeyBkZWVwRXh0ZW5kIH0gZnJvbSAnLi9saWIvaGVscGVycyc7XG5pbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICcuL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZScsXG4gIHN0eWxlVXJsczogWycuL25nMi1zbWFydC10YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmcyLXNtYXJ0LXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc291cmNlOiBhbnk7XG4gIEBJbnB1dCgpIHNldHRpbmdzOiBPYmplY3QgPSB7fTtcblxuICBAT3V0cHV0KCkgcm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB1c2VyUm93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGVDb25maXJtID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Q29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3JlYXRlQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93SG92ZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgdGFibGVDbGFzczogc3RyaW5nO1xuICB0YWJsZUlkOiBzdHJpbmc7XG4gIHBlclBhZ2VTZWxlY3Q6IGFueTtcbiAgaXNIaWRlSGVhZGVyOiBib29sZWFuO1xuICBpc0hpZGVTdWJIZWFkZXI6IGJvb2xlYW47XG4gIGlzUGFnZXJEaXNwbGF5OiBib29sZWFuO1xuICByb3dDbGFzc0Z1bmN0aW9uOiBGdW5jdGlvbjtcblxuXG4gIGdyaWQ6IEdyaWQ7XG4gIGRlZmF1bHRTZXR0aW5nczogT2JqZWN0ID0ge1xuICAgIG1vZGU6ICdpbmxpbmUnLCAvLyBpbmxpbmV8ZXh0ZXJuYWx8Y2xpY2stdG8tZWRpdFxuICAgIHNlbGVjdE1vZGU6ICdzaW5nbGUnLCAvLyBzaW5nbGV8bXVsdGlcbiAgICBoaWRlSGVhZGVyOiBmYWxzZSxcbiAgICBoaWRlU3ViSGVhZGVyOiBmYWxzZSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICBjb2x1bW5UaXRsZTogJ0FjdGlvbnMnLFxuICAgICAgYWRkOiB0cnVlLFxuICAgICAgZWRpdDogdHJ1ZSxcbiAgICAgIGRlbGV0ZTogdHJ1ZSxcbiAgICAgIGN1c3RvbTogW10sXG4gICAgICBwb3NpdGlvbjogJ2xlZnQnLCAvLyBsZWZ0fHJpZ2h0XG4gICAgfSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxuICAgIH0sXG4gICAgZWRpdDoge1xuICAgICAgaW5wdXRDbGFzczogJycsXG4gICAgICBlZGl0QnV0dG9uQ29udGVudDogJ0VkaXQnLFxuICAgICAgc2F2ZUJ1dHRvbkNvbnRlbnQ6ICdVcGRhdGUnLFxuICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJ0NhbmNlbCcsXG4gICAgICBjb25maXJtU2F2ZTogZmFsc2UsXG4gICAgfSxcbiAgICBhZGQ6IHtcbiAgICAgIGlucHV0Q2xhc3M6ICcnLFxuICAgICAgYWRkQnV0dG9uQ29udGVudDogJ0FkZCBOZXcnLFxuICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJ0NyZWF0ZScsXG4gICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnQ2FuY2VsJyxcbiAgICAgIGNvbmZpcm1DcmVhdGU6IGZhbHNlLFxuICAgIH0sXG4gICAgZGVsZXRlOiB7XG4gICAgICBkZWxldGVCdXR0b25Db250ZW50OiAnRGVsZXRlJyxcbiAgICAgIGNvbmZpcm1EZWxldGU6IGZhbHNlLFxuICAgIH0sXG4gICAgYXR0cjoge1xuICAgICAgaWQ6ICcnLFxuICAgICAgY2xhc3M6ICcnLFxuICAgIH0sXG4gICAgbm9EYXRhTWVzc2FnZTogJ05vIGRhdGEgZm91bmQnLFxuICAgIGNvbHVtbnM6IHt9LFxuICAgIHBhZ2VyOiB7XG4gICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgcGVyUGFnZTogMTAsXG4gICAgfSxcbiAgICByb3dDbGFzc0Z1bmN0aW9uOiAoKSA9PiBcIlwiXG4gIH07XG5cbiAgaXNBbGxTZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICBpZiAodGhpcy5ncmlkKSB7XG4gICAgICBpZiAoY2hhbmdlc1snc2V0dGluZ3MnXSkge1xuICAgICAgICB0aGlzLmdyaWQuc2V0U2V0dGluZ3ModGhpcy5wcmVwYXJlU2V0dGluZ3MoKSk7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbmdlc1snc291cmNlJ10pIHtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLnByZXBhcmVTb3VyY2UoKTtcbiAgICAgICAgdGhpcy5ncmlkLnNldFNvdXJjZSh0aGlzLnNvdXJjZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5pdEdyaWQoKTtcbiAgICB9XG4gICAgdGhpcy50YWJsZUlkID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2F0dHIuaWQnKTtcbiAgICB0aGlzLnRhYmxlQ2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYXR0ci5jbGFzcycpO1xuICAgIHRoaXMuaXNIaWRlSGVhZGVyID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2hpZGVIZWFkZXInKTtcbiAgICB0aGlzLmlzSGlkZVN1YkhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlU3ViSGVhZGVyJyk7XG4gICAgdGhpcy5pc1BhZ2VyRGlzcGxheSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5Jyk7XG4gICAgdGhpcy5pc1BhZ2VyRGlzcGxheSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdwYWdlci5kaXNwbGF5Jyk7XG4gICAgdGhpcy5wZXJQYWdlU2VsZWN0ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ3BhZ2VyLnBlclBhZ2VTZWxlY3QnKTtcbiAgICB0aGlzLnJvd0NsYXNzRnVuY3Rpb24gPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygncm93Q2xhc3NGdW5jdGlvbicpO1xuICB9XG5cbiAgZWRpdFJvd1NlbGVjdChyb3c6IFJvdykge1xuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpID09PSAnbXVsdGknKSB7XG4gICAgICB0aGlzLm9uTXVsdGlwbGVTZWxlY3RSb3cocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vblNlbGVjdFJvdyhyb3cpO1xuICAgIH1cbiAgfVxuXG4gIG9uVXNlclNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnc2VsZWN0TW9kZScpICE9PSAnbXVsdGknKSB7XG4gICAgICB0aGlzLmdyaWQuc2VsZWN0Um93KHJvdyk7XG4gICAgICB0aGlzLmVtaXRVc2VyU2VsZWN0Um93KHJvdyk7XG4gICAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcbiAgICB9XG4gIH1cblxuICBvblJvd0hvdmVyKHJvdzogUm93KSB7XG4gICAgdGhpcy5yb3dIb3Zlci5lbWl0KHJvdyk7XG4gIH1cblxuICBtdWx0aXBsZVNlbGVjdFJvdyhyb3c6IFJvdykge1xuICAgIHRoaXMuZ3JpZC5tdWx0aXBsZVNlbGVjdFJvdyhyb3cpO1xuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cocm93KTtcbiAgICB0aGlzLmVtaXRTZWxlY3RSb3cocm93KTtcbiAgfVxuXG4gIG9uU2VsZWN0QWxsUm93cygkZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCA9ICF0aGlzLmlzQWxsU2VsZWN0ZWQ7XG4gICAgdGhpcy5ncmlkLnNlbGVjdEFsbFJvd3ModGhpcy5pc0FsbFNlbGVjdGVkKTtcblxuICAgIHRoaXMuZW1pdFVzZXJTZWxlY3RSb3cobnVsbCk7XG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KG51bGwpO1xuICB9XG5cbiAgb25TZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICB0aGlzLmdyaWQuc2VsZWN0Um93KHJvdyk7XG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XG4gIH1cblxuICBvbk11bHRpcGxlU2VsZWN0Um93KHJvdzogUm93KSB7XG4gICAgdGhpcy5lbWl0U2VsZWN0Um93KHJvdyk7XG4gIH1cblxuICBpbml0R3JpZCgpIHtcbiAgICB0aGlzLnNvdXJjZSA9IHRoaXMucHJlcGFyZVNvdXJjZSgpO1xuICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRoaXMuc291cmNlLCB0aGlzLnByZXBhcmVTZXR0aW5ncygpKTtcbiAgICB0aGlzLmdyaWQub25TZWxlY3RSb3coKS5zdWJzY3JpYmUoKHJvdykgPT4gdGhpcy5lbWl0U2VsZWN0Um93KHJvdykpO1xuICB9XG5cbiAgcHJlcGFyZVNvdXJjZSgpOiBEYXRhU291cmNlIHtcbiAgICBpZiAodGhpcy5zb3VyY2UgaW5zdGFuY2VvZiBEYXRhU291cmNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNvdXJjZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICByZXR1cm4gbmV3IExvY2FsRGF0YVNvdXJjZSh0aGlzLnNvdXJjZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBMb2NhbERhdGFTb3VyY2UoKTtcbiAgfVxuXG4gIHByZXBhcmVTZXR0aW5ncygpOiBPYmplY3Qge1xuICAgIHJldHVybiBkZWVwRXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRTZXR0aW5ncywgdGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBjaGFuZ2VQYWdlKCRldmVudDogYW55KSB7XG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XG4gIH1cblxuICBzb3J0KCRldmVudDogYW55KSB7XG4gICAgdGhpcy5yZXNldEFsbFNlbGVjdG9yKCk7XG4gIH1cblxuICBmaWx0ZXIoJGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnJlc2V0QWxsU2VsZWN0b3IoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRBbGxTZWxlY3RvcigpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgZW1pdFVzZXJTZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICBjb25zdCBzZWxlY3RlZFJvd3MgPSB0aGlzLmdyaWQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cbiAgICB0aGlzLnVzZXJSb3dTZWxlY3QuZW1pdCh7XG4gICAgICBkYXRhOiByb3cgPyByb3cuZ2V0RGF0YSgpIDogbnVsbCxcbiAgICAgIGlzU2VsZWN0ZWQ6IHJvdyA/IHJvdy5nZXRJc1NlbGVjdGVkKCkgOiBudWxsLFxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZFJvd3MgJiYgc2VsZWN0ZWRSb3dzLmxlbmd0aCA/IHNlbGVjdGVkUm93cy5tYXAoKHI6IFJvdykgPT4gci5nZXREYXRhKCkpIDogW10sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRTZWxlY3RSb3cocm93OiBSb3cpIHtcbiAgICB0aGlzLnJvd1NlbGVjdC5lbWl0KHtcbiAgICAgIGRhdGE6IHJvdyA/IHJvdy5nZXREYXRhKCkgOiBudWxsLFxuICAgICAgaXNTZWxlY3RlZDogcm93ID8gcm93LmdldElzU2VsZWN0ZWQoKSA6IG51bGwsXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgIH0pO1xuICB9XG5cbn1cbiIsIjx0YWJsZSBbaWRdPVwidGFibGVJZFwiIFtuZ0NsYXNzXT1cInRhYmxlQ2xhc3NcIj5cblxuICA8dGhlYWQgbmcyLXN0LXRoZWFkICpuZ0lmPVwiIWlzSGlkZUhlYWRlciB8fCAhaXNIaWRlU3ViSGVhZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbaXNBbGxTZWxlY3RlZF09XCJpc0FsbFNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NyZWF0ZUNvbmZpcm1dPVwiY3JlYXRlQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNyZWF0ZSk9XCJjcmVhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0QWxsUm93cyk9XCJvblNlbGVjdEFsbFJvd3MoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKHNvcnQpPVwic29ydCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cImZpbHRlcigkZXZlbnQpXCI+XG4gIDwvdGhlYWQ+XG5cbiAgPHRib2R5IG5nMi1zdC10Ym9keSBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2RlbGV0ZUNvbmZpcm1dPVwiZGVsZXRlQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcm93Q2xhc3NGdW5jdGlvbl09XCJyb3dDbGFzc0Z1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAoZWRpdCk9XCJlZGl0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGRlbGV0ZSk9XCJkZWxldGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICh1c2VyU2VsZWN0Um93KT1cIm9uVXNlclNlbGVjdFJvdygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAoZWRpdFJvd1NlbGVjdCk9XCJlZGl0Um93U2VsZWN0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgIChtdWx0aXBsZVNlbGVjdFJvdyk9XCJtdWx0aXBsZVNlbGVjdFJvdygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAocm93SG92ZXIpPVwib25Sb3dIb3ZlcigkZXZlbnQpXCI+XG4gIDwvdGJvZHk+XG5cbjwvdGFibGU+XG5cbjxuZzItc21hcnQtdGFibGUtcGFnZXIgKm5nSWY9XCJpc1BhZ2VyRGlzcGxheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGVyUGFnZVNlbGVjdF09XCJwZXJQYWdlU2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2VQYWdlKT1cImNoYW5nZVBhZ2UoJGV2ZW50KVwiPlxuPC9uZzItc21hcnQtdGFibGUtcGFnZXI+XG4iXX0=