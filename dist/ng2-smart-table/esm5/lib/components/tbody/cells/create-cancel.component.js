import { Component, Input, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import * as i0 from "@angular/core";
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
    TbodyCreateCancelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TbodyCreateCancelComponent, selectors: [["ng2-st-tbody-create-cancel"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-save", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-cancel", 3, "innerHTML", "click"]], template: function TbodyCreateCancelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵlistener("click", function TbodyCreateCancelComponent_Template_a_click_0_listener($event) { return ctx.onSave($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function TbodyCreateCancelComponent_Template_a_click_1_listener($event) { return ctx.onCancelEdit($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("innerHTML", ctx.saveButtonContent, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", ctx.cancelButtonContent, i0.ɵɵsanitizeHtml);
        } }, encapsulation: 2 });
    return TbodyCreateCancelComponent;
}());
export { TbodyCreateCancelComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbodyCreateCancelComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhbmNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90Ym9keS9jZWxscy9jcmVhdGUtY2FuY2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFaEQ7SUFBQTtLQW9DQztJQWxCQywyQ0FBTSxHQUFOLFVBQU8sS0FBVTtRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGlEQUFZLEdBQVosVUFBYSxLQUFVO1FBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxnREFBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUE7SUFDN0UsQ0FBQzt3R0ExQlUsMEJBQTBCO21FQUExQiwwQkFBMEI7WUFObkMsNEJBQ2lFO1lBQTdCLHdHQUFTLGtCQUFjLElBQUM7WUFBQyxpQkFBSTtZQUNqRSw0QkFDeUU7WUFBbkMsd0dBQVMsd0JBQW9CLElBQUM7WUFBQyxpQkFBSTs7WUFGckUsb0VBQStCO1lBRS9CLGVBQWlDO1lBQWpDLHNFQUFpQzs7cUNBWHpDO0NBeUNDLEFBcENELElBb0NDO1NBM0JZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBVHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUUsd1RBS1Q7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXN0LXRib2R5LWNyZWF0ZS1jYW5jZWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tZWRpdC1zYXZlXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJzYXZlQnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvblNhdmUoJGV2ZW50KVwiPjwvYT5cbiAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWVkaXQtY2FuY2VsXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJjYW5jZWxCdXR0b25Db250ZW50XCIgKGNsaWNrKT1cIm9uQ2FuY2VsRWRpdCgkZXZlbnQpXCI+PC9hPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUYm9keUNyZWF0ZUNhbmNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBjYW5jZWxCdXR0b25Db250ZW50OiBzdHJpbmc7XG4gIHNhdmVCdXR0b25Db250ZW50OiBzdHJpbmc7XG5cbiAgb25TYXZlKGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5ncmlkLnNhdmUodGhpcy5yb3csIHRoaXMuZWRpdENvbmZpcm0pO1xuICB9XG5cbiAgb25DYW5jZWxFZGl0KGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy5yb3cuaXNJbkVkaXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc2F2ZUJ1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZWRpdC5zYXZlQnV0dG9uQ29udGVudCcpO1xuICAgIHRoaXMuY2FuY2VsQnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdlZGl0LmNhbmNlbEJ1dHRvbkNvbnRlbnQnKVxuICB9XG59XG4iXX0=