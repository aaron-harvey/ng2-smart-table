import { Output, EventEmitter, Input, Directive } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
export class EditCellDefault {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    onStopEditing() {
        this.cell.getRow().isInEditing = false;
        return false;
    }
    onClick(event) {
        event.stopPropagation();
    }
}
EditCellDefault.ɵfac = function EditCellDefault_Factory(t) { return new (t || EditCellDefault)(); };
EditCellDefault.ɵdir = i0.ɵɵdefineDirective({ type: EditCellDefault, inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(EditCellDefault, [{
        type: Directive
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], edited: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1jZWxsLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdC1tb2RlL2VkaXQtY2VsbC1kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxNQUFNLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQUdsRCxNQUFNLE9BQU8sZUFBZTtJQUQ1QjtRQUlXLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFFdkIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FlNUM7SUFiQyxRQUFRLENBQUMsS0FBVTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3ZDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs4RUFuQlUsZUFBZTtvREFBZixlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsU0FBUzs7a0JBR1AsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIElucHV0LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcblxuQERpcmVjdGl2ZSgpXG5leHBvcnQgY2xhc3MgRWRpdENlbGxEZWZhdWx0IHtcblxuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBAT3V0cHV0KCkgZWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgb25FZGl0ZWQoZXZlbnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHRoaXMuZWRpdGVkLm5leHQoZXZlbnQpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG9uU3RvcEVkaXRpbmcoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5jZWxsLmdldFJvdygpLmlzSW5FZGl0aW5nID0gZmFsc2U7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb25DbGljayhldmVudDogYW55KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cbiJdfQ==