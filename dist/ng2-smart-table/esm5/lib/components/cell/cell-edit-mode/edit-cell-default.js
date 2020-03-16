import { Output, EventEmitter, Input, Directive } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
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
    EditCellDefault.ɵdir = i0.ɵɵdefineDirective({ type: EditCellDefault, inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" } });
    return EditCellDefault;
}());
export { EditCellDefault };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditCellDefault, [{
        type: Directive
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], edited: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdC1tb2RlL2VkaXQtY2VsbC1kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUVsRDtJQUFBO1FBSVcsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQWU1QztJQWJDLGtDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELHVDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDdkMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsaUNBQU8sR0FBUCxVQUFRLEtBQVU7UUFDaEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7a0ZBbkJVLGVBQWU7d0RBQWYsZUFBZTswQkFMNUI7Q0F5QkMsQUFyQkQsSUFxQkM7U0FwQlksZUFBZTtrREFBZixlQUFlO2NBRDNCLFNBQVM7O2tCQUdQLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIEVkaXRDZWxsRGVmYXVsdCB7XG5cbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbiAgQElucHV0KCkgaW5wdXRDbGFzczogc3RyaW5nID0gJyc7XG5cbiAgQE91dHB1dCgpIGVkaXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIG9uRWRpdGVkKGV2ZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICB0aGlzLmVkaXRlZC5uZXh0KGV2ZW50KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvblN0b3BFZGl0aW5nKCk6IGJvb2xlYW4ge1xuICAgIHRoaXMuY2VsbC5nZXRSb3coKS5pc0luRWRpdGluZyA9IGZhbHNlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=