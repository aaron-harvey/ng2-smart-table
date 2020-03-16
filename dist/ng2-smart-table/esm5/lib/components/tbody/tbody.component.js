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
var _c0 = ["ng2-st-tbody", ""];
function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r294 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 6);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener() { i0.ɵɵrestoreView(_r294); var row_r285 = i0.ɵɵnextContext().$implicit; var ctx_r292 = i0.ɵɵnextContext(); return ctx_r292.multipleSelectRow.emit(row_r285); });
    i0.ɵɵelement(1, "input", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", row_r285.isSelected);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) { if (rf & 1) {
    var _r297 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r297); var ctx_r296 = i0.ɵɵnextContext(2); return ctx_r296.custom.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r297); var row_r285 = i0.ɵɵnextContext().$implicit; var ctx_r298 = i0.ɵɵnextContext(); return ctx_r298.edit.emit(row_r285); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r297); var row_r285 = i0.ɵɵnextContext().$implicit; var ctx_r300 = i0.ɵɵnextContext(); return ctx_r300.delete.emit(row_r285); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r297); var ctx_r302 = i0.ɵɵnextContext(2); return ctx_r302.editRowSelect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = i0.ɵɵnextContext().$implicit;
    var ctx_r287 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r287.grid)("row", row_r285)("source", ctx_r287.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r287.grid)("deleteConfirm", ctx_r287.deleteConfirm)("editConfirm", ctx_r287.editConfirm)("row", row_r285)("source", ctx_r287.source);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = i0.ɵɵnextContext().$implicit;
    var ctx_r288 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r288.grid)("row", row_r285)("editConfirm", ctx_r288.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "ng2-smart-table-cell", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r305 = ctx.$implicit;
    var row_r285 = i0.ɵɵnextContext().$implicit;
    var ctx_r289 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cell", cell_r305)("grid", ctx_r289.grid)("row", row_r285)("isNew", false)("mode", ctx_r289.mode)("editConfirm", ctx_r289.editConfirm)("inputClass", ctx_r289.editInputClass)("isInEditing", row_r285.isInEditing);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = i0.ɵɵnextContext().$implicit;
    var ctx_r290 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r290.grid)("row", row_r285)("editConfirm", ctx_r290.editConfirm);
} }
function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) { if (rf & 1) {
    var _r309 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 9);
    i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r309); var ctx_r308 = i0.ɵɵnextContext(2); return ctx_r308.custom.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 10);
    i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r309); var row_r285 = i0.ɵɵnextContext().$implicit; var ctx_r310 = i0.ɵɵnextContext(); return ctx_r310.edit.emit(row_r285); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r309); var row_r285 = i0.ɵɵnextContext().$implicit; var ctx_r312 = i0.ɵɵnextContext(); return ctx_r312.delete.emit(row_r285); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r309); var ctx_r314 = i0.ɵɵnextContext(2); return ctx_r314.editRowSelect.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = i0.ɵɵnextContext().$implicit;
    var ctx_r291 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r291.grid)("row", row_r285)("source", ctx_r291.source);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r291.grid)("deleteConfirm", ctx_r291.deleteConfirm)("editConfirm", ctx_r291.editConfirm)("row", row_r285)("source", ctx_r291.source);
} }
var _c1 = function (a0) { return { selected: a0 }; };
function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    var _r317 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 2);
    i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() { i0.ɵɵrestoreView(_r317); var row_r285 = ctx.$implicit; var ctx_r316 = i0.ɵɵnextContext(); return ctx_r316.userSelectRow.emit(row_r285); })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() { i0.ɵɵrestoreView(_r317); var row_r285 = ctx.$implicit; var ctx_r318 = i0.ɵɵnextContext(); return ctx_r318.rowHover.emit(row_r285); });
    i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);
    i0.ɵɵtemplate(2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);
    i0.ɵɵtemplate(3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 4);
    i0.ɵɵtemplate(4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 5);
    i0.ɵɵtemplate(5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 4);
    i0.ɵɵtemplate(6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r285 = ctx.$implicit;
    var ctx_r283 = i0.ɵɵnextContext();
    i0.ɵɵproperty("className", ctx_r283.rowClassFunction(row_r285))("ngClass", i0.ɵɵpureFunction1(8, _c1, row_r285.isSelected));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r283.isMultiSelectVisible);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r285.isInEditing && ctx_r283.showActionColumnLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r285.isInEditing && ctx_r283.showActionColumnLeft);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r285.cells);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r285.isInEditing && ctx_r283.showActionColumnRight);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r285.isInEditing && ctx_r283.showActionColumnRight);
} }
function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r284 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵattribute("colspan", ctx_r284.tableColumnsCount);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r284.noDataMessage, " ");
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
    Ng2SmartTableTbodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Ng2SmartTableTbodyComponent, selectors: [["", "ng2-st-tbody", ""]], inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 2, vars: 2, consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]], template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);
            i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.grid.getRows());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.grid.getRows().length == 0);
        } }, directives: [i1.NgForOf, i1.NgIf, i1.NgClass, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, i3.TbodyCustomComponent, i4.TbodyEditDeleteComponent, i5.TbodyCreateCancelComponent, i6.CellComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child, [_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child{margin-right:.25rem}"] });
    return Ng2SmartTableTbodyComponent;
}());
export { Ng2SmartTableTbodyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksR0FBRyxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7OztJQ0g3RCw2QkFDRTtJQUQwRix1TkFBUyx5Q0FBMkIsSUFBQztJQUMvSCwyQkFDRjtJQUFBLGlCQUFLOzs7SUFEeUMsZUFBMEI7SUFBMUIsNkNBQTBCOzs7O0lBRXhFLDZCQUNFO0lBQUEsOENBQXNIO0lBQW5GLG9NQUFVLDRCQUFtQixJQUFDO0lBQStCLGlCQUFzQjtJQUV0SCxvREFRMkI7SUFMRCwyT0FBUSw0QkFBYyxJQUFDLGtPQUNiLDhCQUFnQixJQURILDBNQUVOLG1DQUEwQixJQUZwQjtJQUtqRCxpQkFBMkI7SUFDN0IsaUJBQUs7Ozs7SUFYa0IsZUFBYTtJQUFiLG9DQUFhLGlCQUFBLDJCQUFBO0lBRVIsZUFBYTtJQUFiLG9DQUFhLHlDQUFBLHFDQUFBLGlCQUFBLDJCQUFBOzs7SUFVeEMsNkJBQ0M7SUFBQSxpREFBK0c7SUFDakgsaUJBQUs7Ozs7SUFEeUIsZUFBYTtJQUFiLG9DQUFhLGlCQUFBLHFDQUFBOzs7SUFFM0MsMEJBQ0U7SUFBQSwyQ0FRdUI7SUFDekIsaUJBQUs7Ozs7O0lBVG1CLGVBQWE7SUFBYixnQ0FBYSx1QkFBQSxpQkFBQSxnQkFBQSx1QkFBQSxxQ0FBQSx1Q0FBQSxxQ0FBQTs7O0lBV3JDLDZCQUNFO0lBQUEsaURBQStH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LElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0QsQ0FBQzswR0E1Q1UsMkJBQTJCO29FQUEzQiwyQkFBMkI7WUNaeEMsMkVBQ0U7WUFrREYsMEVBQ0U7O1lBcERFLDRDQUFrQztZQW1EbEMsZUFBa0M7WUFBbEMscURBQWtDOztzQ0RuRHRDO0NBeURDLEFBbERELElBa0RDO1NBN0NZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsV0FBVyxFQUFFLHdCQUF3QjthQUN0Qzs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zZXQvcm93JztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHtDb2x1bW59IGZyb20gXCIuLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZzItc3QtdGJvZHldJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGJvZHkuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rib2R5LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZVRib2R5Q29tcG9uZW50IHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIGRlbGV0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSBlZGl0Q29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIHJvd0NsYXNzRnVuY3Rpb246IEZ1bmN0aW9uO1xuXG4gIEBPdXRwdXQoKSBzYXZlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRlbGV0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHVzZXJTZWxlY3RSb3cgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGVkaXRSb3dTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG11bHRpcGxlU2VsZWN0Um93ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByb3dIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uTGVmdDogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xuICBtb2RlOiBzdHJpbmc7XG4gIGVkaXRJbnB1dENsYXNzOiBzdHJpbmc7XG4gIGlzQWN0aW9uQWRkOiBib29sZWFuO1xuICBpc0FjdGlvbkVkaXQ6IGJvb2xlYW47XG4gIGlzQWN0aW9uRGVsZXRlOiBib29sZWFuO1xuICBub0RhdGFNZXNzYWdlOiBib29sZWFuO1xuXG4gIGdldCB0YWJsZUNvbHVtbnNDb3VudCgpIHtcbiAgICBjb25zdCBhY3Rpb25Db2x1bW5zID0gdGhpcy5pc0FjdGlvbkFkZCB8fCB0aGlzLmlzQWN0aW9uRWRpdCB8fCB0aGlzLmlzQWN0aW9uRGVsZXRlID8gMSA6IDA7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZC5nZXRDb2x1bW5zKCkubGVuZ3RoICsgYWN0aW9uQ29sdW1ucztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdFZpc2libGUgPSB0aGlzLmdyaWQuaXNNdWx0aVNlbGVjdFZpc2libGUoKTtcbiAgICB0aGlzLnNob3dBY3Rpb25Db2x1bW5MZWZ0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ2xlZnQnKTtcbiAgICB0aGlzLm1vZGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpO1xuICAgIHRoaXMuZWRpdElucHV0Q2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZWRpdC5pbnB1dENsYXNzJyk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcbiAgICB0aGlzLmlzQWN0aW9uQWRkID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuYWRkJyk7XG4gICAgdGhpcy5pc0FjdGlvbkVkaXQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5lZGl0Jyk7XG4gICAgdGhpcy5pc0FjdGlvbkRlbGV0ZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmRlbGV0ZScpO1xuICAgIHRoaXMubm9EYXRhTWVzc2FnZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdub0RhdGFNZXNzYWdlJyk7XG4gIH1cbn1cbiIsIjx0ciAqbmdGb3I9XCJsZXQgcm93IG9mIGdyaWQuZ2V0Um93cygpXCIgKGNsaWNrKT1cInVzZXJTZWxlY3RSb3cuZW1pdChyb3cpXCIgKG1vdXNlb3Zlcik9XCJyb3dIb3Zlci5lbWl0KHJvdylcIiBjbGFzcz1cIm5nMi1zbWFydC1yb3dcIiBbY2xhc3NOYW1lXT1cInJvd0NsYXNzRnVuY3Rpb24ocm93KVwiIFtuZ0NsYXNzXT1cIntzZWxlY3RlZDogcm93LmlzU2VsZWN0ZWR9XCI+XG4gIDx0ZCAqbmdJZj1cImlzTXVsdGlTZWxlY3RWaXNpYmxlXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9ucyBuZzItc21hcnQtYWN0aW9uLW11bHRpcGxlLXNlbGVjdFwiIChjbGljayk9XCJtdWx0aXBsZVNlbGVjdFJvdy5lbWl0KHJvdylcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbbmdNb2RlbF09XCJyb3cuaXNTZWxlY3RlZFwiPlxuICA8L3RkPlxuICA8dGQgKm5nSWY9XCIhcm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxuICAgIDxuZzItc3QtdGJvZHktY3VzdG9tIFtncmlkXT1cImdyaWRcIiAoY3VzdG9tKT1cImN1c3RvbS5lbWl0KCRldmVudClcIiBbcm93XT1cInJvd1wiIFtzb3VyY2VdPVwic291cmNlXCI+PC9uZzItc3QtdGJvZHktY3VzdG9tPlxuXG4gICAgPG5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZSBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZWxldGVDb25maXJtXT1cImRlbGV0ZUNvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0KT1cImVkaXQuZW1pdChyb3cpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZWxldGUpPVwiZGVsZXRlLmVtaXQocm93KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZWRpdFJvd1NlbGVjdCk9XCJlZGl0Um93U2VsZWN0LmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93XT1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiPlxuICAgIDwvbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlPlxuICA8L3RkPlxuICAgPHRkICpuZ0lmPVwicm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5MZWZ0XCIgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbnNcIj5cbiAgICA8bmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWwgW2dyaWRdPVwiZ3JpZFwiIFtyb3ddPVwicm93XCIgW2VkaXRDb25maXJtXT1cImVkaXRDb25maXJtXCI+PC9uZzItc3QtdGJvZHktY3JlYXRlLWNhbmNlbD5cbiAgPC90ZD5cbiAgPHRkICpuZ0Zvcj1cImxldCBjZWxsIG9mIHJvdy5jZWxsc1wiPlxuICAgIDxuZzItc21hcnQtdGFibGUtY2VsbCBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtyb3ddPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzTmV3XT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW21vZGVdPVwibW9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImVkaXRJbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzSW5FZGl0aW5nXT1cInJvdy5pc0luRWRpdGluZ1wiPlxuICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWNlbGw+XG4gIDwvdGQ+XG5cbiAgPHRkICpuZ0lmPVwicm93LmlzSW5FZGl0aW5nICYmIHNob3dBY3Rpb25Db2x1bW5SaWdodFwiICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XG4gICAgPG5nMi1zdC10Ym9keS1jcmVhdGUtY2FuY2VsIFtncmlkXT1cImdyaWRcIiBbcm93XT1cInJvd1wiIFtlZGl0Q29uZmlybV09XCJlZGl0Q29uZmlybVwiPjwvbmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWw+XG4gIDwvdGQ+XG5cbiAgPHRkICpuZ0lmPVwiIXJvdy5pc0luRWRpdGluZyAmJiBzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XG4gICAgPG5nMi1zdC10Ym9keS1jdXN0b20gW2dyaWRdPVwiZ3JpZFwiIChjdXN0b20pPVwiY3VzdG9tLmVtaXQoJGV2ZW50KVwiIFtyb3ddPVwicm93XCIgW3NvdXJjZV09XCJzb3VyY2VcIj48L25nMi1zdC10Ym9keS1jdXN0b20+XG5cbiAgICA8bmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RlbGV0ZUNvbmZpcm1dPVwiZGVsZXRlQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZWRpdENvbmZpcm1dPVwiZWRpdENvbmZpcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvd109XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXQpPVwiZWRpdC5lbWl0KHJvdylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRlbGV0ZSk9XCJkZWxldGUuZW1pdChyb3cpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0Um93U2VsZWN0KT1cImVkaXRSb3dTZWxlY3QuZW1pdCgkZXZlbnQpXCI+XG4gICAgPC9uZzItc3QtdGJvZHktZWRpdC1kZWxldGU+XG4gIDwvdGQ+XG48L3RyPlxuXG48dHIgKm5nSWY9XCJncmlkLmdldFJvd3MoKS5sZW5ndGggPT0gMFwiPlxuICA8dGQgW2F0dHIuY29sc3Bhbl09XCJ0YWJsZUNvbHVtbnNDb3VudFwiPlxuICAgIHt7IG5vRGF0YU1lc3NhZ2UgfX1cbiAgPC90ZD5cbjwvdHI+XG4iXX0=