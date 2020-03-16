import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { Cell } from '../../lib/data-set/cell';
import { Row } from '../../lib/data-set/row';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./cell-view-mode/view-cell.component";
import * as i3 from "./cell-edit-mode/edit-cell.component";
function CellComponent_table_cell_view_mode_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "table-cell-view-mode", 2);
} if (rf & 2) {
    var ctx_r197 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r197.cell);
} }
function CellComponent_table_cell_edit_mode_1_Template(rf, ctx) { if (rf & 1) {
    var _r200 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table-cell-edit-mode", 3);
    i0.ɵɵlistener("edited", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_edited_0_listener($event) { i0.ɵɵrestoreView(_r200); var ctx_r199 = i0.ɵɵnextContext(); return ctx_r199.onEdited($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r198 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r198.cell)("inputClass", ctx_r198.inputClass);
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
    CellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CellComponent, selectors: [["ng2-smart-table-cell"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", createConfirm: "createConfirm", isNew: "isNew", cell: "cell", inputClass: "inputClass", mode: "mode", isInEditing: "isInEditing" }, outputs: { edited: "edited" }, decls: 2, vars: 2, consts: [[3, "cell", 4, "ngIf"], [3, "cell", "inputClass", "edited", 4, "ngIf"], [3, "cell"], [3, "cell", "inputClass", "edited"]], template: function CellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CellComponent_table_cell_view_mode_0_Template, 1, 1, "table-cell-view-mode", 0);
            i0.ɵɵtemplate(1, CellComponent_table_cell_edit_mode_1_Template, 1, 2, "table-cell-edit-mode", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isInEditing);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isInEditing);
        } }, directives: [i1.NgIf, i2.ViewCellComponent, i3.EditCellComponent], encapsulation: 2 });
    return CellComponent;
}());
export { CellComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CellComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztJQUt6QywwQ0FBZ0Y7OztJQUFyQyxvQ0FBYTs7OztJQUN4RCwrQ0FHdUI7SUFERCxnT0FBMkI7SUFDakQsaUJBQXVCOzs7SUFIbUIsb0NBQWEsbUNBQUE7O0FBSjNEO0lBQUE7UUFrQlcsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixTQUFJLEdBQVcsUUFBUSxDQUFDO1FBQ3hCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBRTVCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBUzVDO0lBUEMsZ0NBQVEsR0FBUixVQUFTLEtBQVU7UUFDakIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDN0Q7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQzs4RUFwQlUsYUFBYTtzREFBYixhQUFhO1lBUHRCLGdHQUF5RDtZQUN6RCxnR0FHQTs7WUFKc0IsdUNBQW9CO1lBQ3BCLGVBQW1CO1lBQW5CLHNDQUFtQjs7d0JBVjdDO0NBcUNDLEFBL0JELElBK0JDO1NBckJZLGFBQWE7a0RBQWIsYUFBYTtjQVZ6QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLCtTQU1UO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtY2VsbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRhYmxlLWNlbGwtdmlldy1tb2RlICpuZ0lmPVwiIWlzSW5FZGl0aW5nXCIgW2NlbGxdPVwiY2VsbFwiPjwvdGFibGUtY2VsbC12aWV3LW1vZGU+XG4gICAgPHRhYmxlLWNlbGwtZWRpdC1tb2RlICpuZ0lmPVwiaXNJbkVkaXRpbmdcIiBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChlZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiPlxuICAgIDwvdGFibGUtY2VsbC1lZGl0LW1vZGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENlbGxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHJvdzogUm93O1xuICBASW5wdXQoKSBlZGl0Q29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGNyZWF0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBASW5wdXQoKSBpc05ldzogYm9vbGVhbjtcbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdpbmxpbmUnO1xuICBASW5wdXQoKSBpc0luRWRpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBlZGl0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBvbkVkaXRlZChldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMuaXNOZXcpIHtcbiAgICAgIHRoaXMuZ3JpZC5jcmVhdGUodGhpcy5ncmlkLmdldE5ld1JvdygpLCB0aGlzLmNyZWF0ZUNvbmZpcm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWQuc2F2ZSh0aGlzLnJvdywgdGhpcy5lZGl0Q29uZmlybSk7XG4gICAgfVxuICB9XG59XG4iXX0=