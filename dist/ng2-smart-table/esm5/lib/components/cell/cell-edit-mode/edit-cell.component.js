import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./custom-edit.component";
import * as i3 from "./default-edit.component";
function EditCellComponent_table_cell_custom_editor_1_Template(rf, ctx) { if (rf & 1) {
    var _r225 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table-cell-custom-editor", 3);
    i0.ɵɵlistener("edited", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_edited_0_listener($event) { i0.ɵɵrestoreView(_r225); var ctx_r224 = i0.ɵɵnextContext(); return ctx_r224.onEdited($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r222 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r222.cell)("inputClass", ctx_r222.inputClass);
} }
function EditCellComponent_table_cell_default_editor_2_Template(rf, ctx) { if (rf & 1) {
    var _r227 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table-cell-default-editor", 3);
    i0.ɵɵlistener("edited", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_edited_0_listener($event) { i0.ɵɵrestoreView(_r227); var ctx_r226 = i0.ɵɵnextContext(); return ctx_r226.onEdited($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r223 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r223.cell)("inputClass", ctx_r223.inputClass);
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
    EditCellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditCellComponent, selectors: [["table-cell-edit-mode"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "edited", 4, "ngSwitchCase"], [3, "cell", "inputClass", "edited", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "edited"]], template: function EditCellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, EditCellComponent_table_cell_custom_editor_1_Template, 1, 2, "table-cell-custom-editor", 1);
            i0.ɵɵtemplate(2, EditCellComponent_table_cell_default_editor_2_Template, 1, 2, "table-cell-default-editor", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.getEditorType());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "custom");
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.CustomEditComponent, i3.DefaultEditComponent], encapsulation: 2 });
    return EditCellComponent;
}());
export { EditCellComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditCellComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7OztJQU0xQyxtREFJMkI7SUFERCw0T0FBMkI7SUFDckQsaUJBQTJCOzs7SUFIRCxvQ0FBYSxtQ0FBQTs7OztJQUl2QyxvREFJNEI7SUFERiw4T0FBMkI7SUFDckQsaUJBQTRCOzs7SUFIRixvQ0FBYSxtQ0FBQTs7QUFWL0M7SUFBQTtRQW9CVyxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBVTVDO0lBUkMsb0NBQVEsR0FBUixVQUFTLEtBQVU7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQseUNBQWEsR0FBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzNFLENBQUM7c0ZBZFUsaUJBQWlCOzBEQUFqQixpQkFBaUI7WUFkeEIsOEJBQ0U7WUFBQSw0R0FJQTtZQUNBLDhHQUlBO1lBQ0YsaUJBQU07O1lBWEQsOENBQTRCO1lBQ0wsZUFBd0I7WUFBeEIsdUNBQXdCOzs0QkFSMUQ7Q0FvQ0MsQUFoQ0QsSUFnQ0M7U0FmWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQWpCN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSx3bUJBYVA7YUFDSjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtZWRpdC1tb2RlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXYgW25nU3dpdGNoXT1cImdldEVkaXRvclR5cGUoKVwiPlxuICAgICAgICA8dGFibGUtY2VsbC1jdXN0b20tZWRpdG9yICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRlZCk9XCJvbkVkaXRlZCgkZXZlbnQpXCI+XG4gICAgICAgIDwvdGFibGUtY2VsbC1jdXN0b20tZWRpdG9yPlxuICAgICAgICA8dGFibGUtY2VsbC1kZWZhdWx0LWVkaXRvciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVkaXRlZCk9XCJvbkVkaXRlZCgkZXZlbnQpXCI+XG4gICAgICAgIDwvdGFibGUtY2VsbC1kZWZhdWx0LWVkaXRvcj5cbiAgICAgIDwvZGl2PlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRDZWxsQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBAT3V0cHV0KCkgZWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgb25FZGl0ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHRoaXMuZWRpdGVkLm5leHQoZXZlbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGdldEVkaXRvclR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvciAmJiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yLnR5cGU7XG4gIH1cbn1cbiJdfQ==