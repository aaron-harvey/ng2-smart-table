import { Component, Input } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
var _c0 = ["ng2-st-checkbox-select-all", ""];
var CheckboxSelectAllComponent = /** @class */ (function () {
    function CheckboxSelectAllComponent() {
    }
    CheckboxSelectAllComponent.ɵfac = function CheckboxSelectAllComponent_Factory(t) { return new (t || CheckboxSelectAllComponent)(); };
    CheckboxSelectAllComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CheckboxSelectAllComponent, selectors: [["", "ng2-st-checkbox-select-all", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected" }, attrs: _c0, decls: 1, vars: 1, consts: [["type", "checkbox", 3, "ngModel"]], template: function CheckboxSelectAllComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "input", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.isAllSelected);
        } }, directives: [i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2 });
    return CheckboxSelectAllComponent;
}());
export { CheckboxSelectAllComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CheckboxSelectAllComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-checkbox-select-all]',
                template: "\n    <input type=\"checkbox\" [ngModel]=\"isAllSelected\">\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtc2VsZWN0LWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9jaGVja2JveC1zZWxlY3QtYWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBRWxFO0lBQUE7S0FXQzt3R0FMWSwwQkFBMEI7bUVBQTFCLDBCQUEwQjtZQUhuQywyQkFDRjs7WUFEeUIsMkNBQXlCOztxQ0FScEQ7Q0FnQkMsQUFYRCxJQVdDO1NBTFksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FOdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFFBQVEsRUFBRSxpRUFFVDthQUNGOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZzItc3QtY2hlY2tib3gtc2VsZWN0LWFsbF0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbbmdNb2RlbF09XCJpc0FsbFNlbGVjdGVkXCI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94U2VsZWN0QWxsQ29tcG9uZW50IHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG4gIEBJbnB1dCgpIGlzQWxsU2VsZWN0ZWQ6IGJvb2xlYW47XG59XG4iXX0=