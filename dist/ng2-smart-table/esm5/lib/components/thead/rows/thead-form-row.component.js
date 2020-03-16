import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/actions.component";
import * as i3 from "../../cell/cell.component";
var _c0 = ["ng2-st-thead-form-row", ""];
function TheadFormRowComponent_td_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td");
} }
function TheadFormRowComponent_td_1_Template(rf, ctx) { if (rf & 1) {
    var _r361 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 3);
    i0.ɵɵelementStart(1, "ng2-st-actions", 4);
    i0.ɵɵlistener("create", function TheadFormRowComponent_td_1_Template_ng2_st_actions_create_1_listener($event) { i0.ɵɵrestoreView(_r361); var ctx_r360 = i0.ɵɵnextContext(); return ctx_r360.onCreate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r357 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r357.grid);
} }
function TheadFormRowComponent_td_2_Template(rf, ctx) { if (rf & 1) {
    var _r364 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "ng2-smart-table-cell", 5);
    i0.ɵɵlistener("edited", function TheadFormRowComponent_td_2_Template_ng2_smart_table_cell_edited_1_listener($event) { i0.ɵɵrestoreView(_r364); var ctx_r363 = i0.ɵɵnextContext(); return ctx_r363.onCreate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var cell_r362 = ctx.$implicit;
    var ctx_r358 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cell", cell_r362)("grid", ctx_r358.grid)("isNew", true)("createConfirm", ctx_r358.createConfirm)("inputClass", ctx_r358.addInputClass)("isInEditing", ctx_r358.grid.getNewRow().isInEditing);
} }
function TheadFormRowComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    var _r366 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 3);
    i0.ɵɵelementStart(1, "ng2-st-actions", 4);
    i0.ɵɵlistener("create", function TheadFormRowComponent_td_3_Template_ng2_st_actions_create_1_listener($event) { i0.ɵɵrestoreView(_r366); var ctx_r365 = i0.ɵɵnextContext(); return ctx_r365.onCreate($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r359 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("grid", ctx_r359.grid);
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
    TheadFormRowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TheadFormRowComponent, selectors: [["", "ng2-st-thead-form-row", ""]], inputs: { grid: "grid", row: "row", createConfirm: "createConfirm" }, outputs: { create: "create" }, features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions"], [3, "grid", "create"], [3, "cell", "grid", "isNew", "createConfirm", "inputClass", "isInEditing", "edited"]], template: function TheadFormRowComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TheadFormRowComponent_td_0_Template, 1, 0, "td", 0);
            i0.ɵɵtemplate(1, TheadFormRowComponent_td_1_Template, 2, 1, "td", 1);
            i0.ɵɵtemplate(2, TheadFormRowComponent_td_2_Template, 2, 6, "td", 2);
            i0.ɵɵtemplate(3, TheadFormRowComponent_td_3_Template, 2, 1, "td", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnLeft);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.grid.getNewRow().getCells());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnRight);
        } }, directives: [i1.NgIf, i1.NgForOf, i2.ActionsComponent, i3.CellComponent], encapsulation: 2 });
    return TheadFormRowComponent;
}());
export { TheadFormRowComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TheadFormRowComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZm9ybS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1mb3JtLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUVsRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0lBSzFDLHFCQUFrQjs7OztJQUNsQiw2QkFDRTtJQUFBLHlDQUEyRTtJQUE3QyxnTkFBMkI7SUFBQyxpQkFBaUI7SUFDN0UsaUJBQUs7OztJQURhLGVBQWE7SUFBYixvQ0FBYTs7OztJQUUvQiwwQkFDRTtJQUFBLCtDQU91QjtJQURELHNOQUEyQjtJQUNqRCxpQkFBdUI7SUFDekIsaUJBQUs7Ozs7SUFSbUIsZUFBYTtJQUFiLGdDQUFhLHVCQUFBLGVBQUEseUNBQUEsc0NBQUEsc0RBQUE7Ozs7SUFTckMsNkJBQ0U7SUFBQSx5Q0FBMkU7SUFBN0MsZ05BQTJCO0lBQUMsaUJBQWlCO0lBQzdFLGlCQUFLOzs7SUFEYSxlQUFhO0lBQWIsb0NBQWE7O0FBbEJyQztJQUFBO1FBNEJZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBbUI1QztJQVpDLHdDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7OEZBeEJVLHFCQUFxQjs4REFBckIscUJBQXFCO1lBbkI1QixvRUFBYTtZQUNiLG9FQUNFO1lBRUYsb0VBQ0U7WUFTRixvRUFDRTs7WUFkRyxlQUE0QjtZQUE1QiwrQ0FBNEI7WUFHN0IsZUFBZ0Q7WUFBaEQseURBQWdEO1lBVS9DLGVBQTZCO1lBQTdCLGdEQUE2Qjs7Z0NBdEJ4QztDQW9EQyxBQS9DRCxJQStDQztTQXpCWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQXRCakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFFBQVEsRUFBRSx1NEJBa0JUO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZC1mb3JtLXJvd10nLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPHRkICpuZ0lmPVwiXCI+PC90ZD5cbiAgICAgIDx0ZCAgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uTGVmdFwiICBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb25zXCI+XG4gICAgICAgIDxuZzItc3QtYWN0aW9ucyBbZ3JpZF09XCJncmlkXCIgKGNyZWF0ZSk9XCJvbkNyZWF0ZSgkZXZlbnQpXCI+PC9uZzItc3QtYWN0aW9ucz5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGNlbGwgb2YgZ3JpZC5nZXROZXdSb3coKS5nZXRDZWxscygpXCI+XG4gICAgICAgIDxuZzItc21hcnQtdGFibGUtY2VsbCBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzTmV3XT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NyZWF0ZUNvbmZpcm1dPVwiY3JlYXRlQ29uZmlybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJhZGRJbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpc0luRWRpdGluZ109XCJncmlkLmdldE5ld1JvdygpLmlzSW5FZGl0aW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25DcmVhdGUoJGV2ZW50KVwiPlxuICAgICAgICA8L25nMi1zbWFydC10YWJsZS1jZWxsPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZCAgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiAgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uc1wiPlxuICAgICAgICA8bmcyLXN0LWFjdGlvbnMgW2dyaWRdPVwiZ3JpZFwiIChjcmVhdGUpPVwib25DcmVhdGUoJGV2ZW50KVwiPjwvbmcyLXN0LWFjdGlvbnM+XG4gICAgICA8L3RkPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUaGVhZEZvcm1Sb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHJvdzogUm93O1xuICBASW5wdXQoKSBjcmVhdGVDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uUmlnaHQ6IGJvb2xlYW47XG4gIGFkZElucHV0Q2xhc3M6IHN0cmluZztcblxuICBvbkNyZWF0ZShldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICB0aGlzLmdyaWQuY3JlYXRlKHRoaXMuZ3JpZC5nZXROZXdSb3coKSwgdGhpcy5jcmVhdGVDb25maXJtKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCl7XG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtbkxlZnQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbignbGVmdCcpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XG4gICAgdGhpcy5hZGRJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5pbnB1dENsYXNzJyk7XG4gIH1cbn1cbiJdfQ==