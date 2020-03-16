import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "./cells/custom.component";
import * as i4 from "./cells/edit-delete.component";
import * as i5 from "./cells/create-cancel.component";
import * as i6 from "../cell/cell.component";
const _c0 = ["ng2-st-tbody", ""];
function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r106); const row_r97 = i0.ɵɵnextContext().$implicit; const ctx_r104 = i0.ɵɵnextContext(); return ctx_r104.multipleSelectRow.emit(row_r97); });
    i0.ɵɵelement(1, "input", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r97 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", row_r97.isSelected);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r108 = i0.ɵɵnextContext(2); return ctx_r108.custom.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r109); const row_r97 = i0.ɵɵnextContext().$implicit; const ctx_r110 = i0.ɵɵnextContext(); return ctx_r110.edit.emit(row_r97); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r109); const row_r97 = i0.ɵɵnextContext().$implicit; const ctx_r112 = i0.ɵɵnextContext(); return ctx_r112.delete.emit(row_r97); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r114 = i0.ɵɵnextContext(2); return ctx_r114.editRowSelect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r97 = i0.ɵɵnextContext().$implicit;
    const ctx_r99 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r99.grid)("row", row_r97)("source", ctx_r99.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r99.grid)("deleteConfirm", ctx_r99.deleteConfirm)("editConfirm", ctx_r99.editConfirm)("row", row_r97)("source", ctx_r99.source);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r97 = i0.ɵɵnextContext().$implicit;
    const ctx_r100 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r100.grid)("row", row_r97)("editConfirm", ctx_r100.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "ng2-smart-table-cell", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r117 = ctx.$implicit;
    const row_r97 = i0.ɵɵnextContext().$implicit;
    const ctx_r101 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cell", cell_r117)("grid", ctx_r101.grid)("row", row_r97)("isNew", false)("mode", ctx_r101.mode)("editConfirm", ctx_r101.editConfirm)("inputClass", ctx_r101.editInputClass)("isInEditing", row_r97.isInEditing);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r97 = i0.ɵɵnextContext().$implicit;
    const ctx_r102 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r102.grid)("row", row_r97)("editConfirm", ctx_r102.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r121 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r121); const ctx_r120 = i0.ɵɵnextContext(2); return ctx_r120.custom.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r121); const row_r97 = i0.ɵɵnextContext().$implicit; const ctx_r122 = i0.ɵɵnextContext(); return ctx_r122.edit.emit(row_r97); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r121); const row_r97 = i0.ɵɵnextContext().$implicit; const ctx_r124 = i0.ɵɵnextContext(); return ctx_r124.delete.emit(row_r97); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r121); const ctx_r126 = i0.ɵɵnextContext(2); return ctx_r126.editRowSelect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r97 = i0.ɵɵnextContext().$implicit;
    const ctx_r103 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r103.grid)("row", row_r97)("source", ctx_r103.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r103.grid)("deleteConfirm", ctx_r103.deleteConfirm)("editConfirm", ctx_r103.editConfirm)("row", row_r97)("source", ctx_r103.source);
} }
const _c1 = function (a0) { return { selected: a0 }; };
function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r129 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 2);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r129); const row_r97 = ctx.$implicit; const ctx_r128 = i0.ɵɵnextContext(); return ctx_r128.userSelectRow.emit(row_r97); })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() { i0.ɵɵrestoreView(_r129); const row_r97 = ctx.$implicit; const ctx_r130 = i0.ɵɵnextContext(); return ctx_r130.rowHover.emit(row_r97); });
    i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);
    i0.ɵɵtemplate(2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);
    i0.ɵɵtemplate(3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 4);
    i0.ɵɵtemplate(4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 5);
    i0.ɵɵtemplate(5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 4);
    i0.ɵɵtemplate(6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r97 = ctx.$implicit;
    const ctx_r95 = i0.ɵɵnextContext();
    i0.ɵɵproperty("className", ctx_r95.rowClassFunction(row_r97))("ngClass", i0.ɵɵpureFunction1(8, _c1, row_r97.isSelected));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r95.isMultiSelectVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r97.isInEditing && ctx_r95.showActionColumnLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r97.isInEditing && ctx_r95.showActionColumnLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r97.cells);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r97.isInEditing && ctx_r95.showActionColumnRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r97.isInEditing && ctx_r95.showActionColumnRight);
} }
function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r96 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", ctx_r96.tableColumnsCount);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r96.noDataMessage, " ");
} }
export class Ng2SmartTableTbodyComponent {
    constructor() {
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
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
}
Ng2SmartTableTbodyComponent.ɵfac = function Ng2SmartTableTbodyComponent_Factory(t) { return new (t || Ng2SmartTableTbodyComponent)(); };
Ng2SmartTableTbodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Ng2SmartTableTbodyComponent, selectors: [["", "ng2-st-tbody", ""]], inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 2, vars: 2, consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]], template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);
        i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.grid.getRows());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.grid.getRows().length == 0);
    } }, directives: [i1.NgForOf, i1.NgIf, i1.NgClass, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.TbodyCustomComponent, i4.TbodyEditDeleteComponent, i5.TbodyCreateCancelComponent, i6.CellComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Ng2SmartTableTbodyComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBRyxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7OztJQ0g3RCw2QkFDRTtJQUQwRiwwTkFBUyx3Q0FBMkIsSUFBQztJQUMvSCwyQkFDRjtJQUFBLGlCQUFLOzs7SUFEeUMsZUFBMEI7SUFBMUIsNENBQTBCOzs7O0lBRXhFLDZCQUNFO0lBQUEsOENBQXNIO0lBQW5GLHNNQUFVLDRCQUFtQixJQUFDO0lBQStCLGlCQUFzQjtJQUV0SCxvREFRMkI7SUFMRCw4T0FBUSwyQkFBYyxJQUFDLHFPQUNiLDZCQUFnQixJQURILDRNQUVOLG1DQUEwQixJQUZwQjtJQUtqRCxpQkFBMkI7SUFDN0IsaUJBQUs7Ozs7SUFYa0IsZUFBYTtJQUFiLG1DQUFhLGdCQUFBLDBCQUFBO0lBRVIsZUFBYTtJQUFiLG1DQUFhLHdDQUFBLG9DQUFBLGdCQUFBLDBCQUFBOzs7SUFVeEMsNkJBQ0M7SUFBQSxpREFBK0c7SUFDakgsaUJBQUs7Ozs7SUFEeUIsZUFBYTtJQUFiLG9DQUFhLGdCQUFBLHFDQUFBOzs7SUFFM0MsMEJBQ0U7SUFBQSwyQ0FRdUI7SUFDekIsaUJBQUs7Ozs7O0lBVG1CLGVBQWE7SUFBYixnQ0FBYSx1QkFBQSxnQkFBQSxnQkFBQSx1QkFBQSxxQ0FBQSx1Q0FBQSxvQ0FBQTs7O0lBV3JDLDZCQUNFO0lBQUEsaURBQStH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SUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3RCxDQUFDOztzR0E1Q1UsMkJBQTJCO2dFQUEzQiwyQkFBMkI7UUNaeEMsMkVBQ0U7UUFrREYsMEVBQ0U7O1FBcERFLDRDQUFrQztRQW1EbEMsZUFBa0M7UUFBbEMscURBQWtDOztrRER2Q3pCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFdBQVcsRUFBRSx3QkFBd0I7YUFDdEM7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc2V0L3Jvdyc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7Q29sdW1ufSBmcm9tIFwiLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LXRib2R5XScsXG4gIHN0eWxlVXJsczogWycuL3Rib2R5LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi90Ym9keS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBkZWxldGVDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgQElucHV0KCkgZWRpdENvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSByb3dDbGFzc0Z1bmN0aW9uOiBGdW5jdGlvbjtcblxuICBAT3V0cHV0KCkgc2F2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2FuY2VsID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBkZWxldGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGN1c3RvbSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB1c2VyU2VsZWN0Um93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBtdWx0aXBsZVNlbGVjdFJvdyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBpc011bHRpU2VsZWN0VmlzaWJsZTogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtbkxlZnQ6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5SaWdodDogYm9vbGVhbjtcbiAgbW9kZTogc3RyaW5nO1xuICBlZGl0SW5wdXRDbGFzczogc3RyaW5nO1xuICBpc0FjdGlvbkFkZDogYm9vbGVhbjtcbiAgaXNBY3Rpb25FZGl0OiBib29sZWFuO1xuICBpc0FjdGlvbkRlbGV0ZTogYm9vbGVhbjtcbiAgbm9EYXRhTWVzc2FnZTogYm9vbGVhbjtcblxuICBnZXQgdGFibGVDb2x1bW5zQ291bnQoKSB7XG4gICAgY29uc3QgYWN0aW9uQ29sdW1ucyA9IHRoaXMuaXNBY3Rpb25BZGQgfHwgdGhpcy5pc0FjdGlvbkVkaXQgfHwgdGhpcy5pc0FjdGlvbkRlbGV0ZSA/IDEgOiAwO1xuICAgIHJldHVybiB0aGlzLmdyaWQuZ2V0Q29sdW1ucygpLmxlbmd0aCArIGFjdGlvbkNvbHVtbnM7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XG4gICAgdGhpcy5tb2RlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ21vZGUnKTtcbiAgICB0aGlzLmVkaXRJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2VkaXQuaW5wdXRDbGFzcycpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XG4gICAgdGhpcy5pc0FjdGlvbkFkZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmFkZCcpO1xuICAgIHRoaXMuaXNBY3Rpb25FZGl0ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuZWRpdCcpO1xuICAgIHRoaXMuaXNBY3Rpb25EZWxldGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5kZWxldGUnKTtcbiAgICB0aGlzLm5vRGF0YU1lc3NhZ2UgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnbm9EYXRhTWVzc2FnZScpO1xuICB9XG59XG4iLCI8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBncmlkLmdldFJvd3MoKVwiIChjbGljayk9XCJ1c2VyU2VsZWN0Um93LmVtaXQocm93KVwiIChtb3VzZW92ZXIpPVwicm93SG92ZXIuZW1pdChyb3cpXCIgY2xhc3M9XCJuZzItc21hcnQtcm93XCIgW2NsYXNzTmFtZV09XCJyb3dDbGFzc0Z1bmN0aW9uKHJvdylcIiBbbmdDbGFzc109XCJ7c2VsZWN0ZWQ6IHJvdy5pc1NlbGVjdGVkfVwiPlxuICA8dGQgKm5nSWY9XCJpc011bHRpU2VsZWN0VmlzaWJsZVwiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnMgbmcyLXNtYXJ0LWFjdGlvbi1tdWx0aXBsZS1zZWxlY3RcIiAoY2xpY2spPVwibXVsdGlwbGVTZWxlY3RSb3cuZW1pdChyb3cpXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgW25nTW9kZWxdPVwicm93LmlzU2VsZWN0ZWRcIj5cbiAgPC90ZD5cbiAgPHRkICpuZ0lmPVwiIXJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uTGVmdFwiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICA8bmcyLXN0LXRib2R5LWN1c3RvbSBbZ3JpZF09XCJncmlkXCIgKGN1c3RvbSk9XCJjdXN0b20uZW1pdCgkZXZlbnQpXCIgW3Jvd109XCJyb3dcIiBbc291cmNlXT1cInNvdXJjZVwiPjwvbmcyLXN0LXRib2R5LWN1c3RvbT5cblxuICAgIDxuZzItc3QtdGJvZHktZWRpdC1kZWxldGUgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGVsZXRlQ29uZmlybV09XCJkZWxldGVDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdCk9XCJlZGl0LmVtaXQocm93KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGVsZXRlKT1cImRlbGV0ZS5lbWl0KHJvdylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRSb3dTZWxlY3QpPVwiZWRpdFJvd1NlbGVjdC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd109XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIj5cbiAgICA8L25nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZT5cbiAgPC90ZD5cbiAgIDx0ZCAqbmdJZj1cInJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uTGVmdFwiICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XG4gICAgPG5nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsIFtncmlkXT1cImdyaWRcIiBbcm93XT1cInJvd1wiIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiPjwvbmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWw+XG4gIDwvdGQ+XG4gIDx0ZCAqbmdGb3I9XCJsZXQgY2VsbCBvZiByb3cuY2VsbHNcIj5cbiAgICA8bmcyLXNtYXJ0LXRhYmxlLWNlbGwgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpc05ld109XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFttb2RlXT1cIm1vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJlZGl0SW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpc0luRWRpdGluZ109XCJyb3cuaXNJbkVkaXRpbmdcIj5cbiAgICA8L25nMi1zbWFydC10YWJsZS1jZWxsPlxuICA8L3RkPlxuXG4gIDx0ZCAqbmdJZj1cInJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxuICAgIDxuZzItc3QtdGJvZHktY3JlYXRlLWNhbmNlbCBbZ3JpZF09XCJncmlkXCIgW3Jvd109XCJyb3dcIiBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIj48L25nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsPlxuICA8L3RkPlxuXG4gIDx0ZCAqbmdJZj1cIiFyb3cuaXNJbkVkaXRpbmcgJiYgc2hvd0FjdGlvbkNvbHVtblJpZ2h0XCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxuICAgIDxuZzItc3QtdGJvZHktY3VzdG9tIFtncmlkXT1cImdyaWRcIiAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIiBbcm93XT1cInJvd1wiIFtzb3VyY2VdPVwic291cmNlXCI+PC9uZzItc3QtdGJvZHktY3VzdG9tPlxuXG4gICAgPG5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZSBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZWxldGVDb25maXJtXT1cImRlbGV0ZUNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3ddPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdChyb3cpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWxldGUpPVwiZGVsZXRlLmVtaXQocm93KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdFJvd1NlbGVjdCk9XCJlZGl0Um93U2VsZWN0LmVtaXQoJGV2ZW50KVwiPlxuICAgIDwvbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlPlxuICA8L3RkPlxuPC90cj5cblxuPHRyICpuZ0lmPVwiZ3JpZC5nZXRSb3dzKCkubGVuZ3RoID09IDBcIj5cbiAgPHRkIFthdHRyLmNvbHNwYW5dPVwidGFibGVDb2x1bW5zQ291bnRcIj5cbiAgICB7eyBub0RhdGFNZXNzYWdlIH19XG4gIDwvdGQ+XG48L3RyPlxuIl19