import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./custom-view.component";
function ViewCellComponent_custom_view_component_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "custom-view-component", 4);
} if (rf & 2) {
    var ctx_r232 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r232.cell);
} }
function ViewCellComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    var ctx_r233 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r233.cell.getValue(), i0.ɵɵsanitizeHtml);
} }
function ViewCellComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r234 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r234.cell.getValue());
} }
var ViewCellComponent = /** @class */ (function () {
    function ViewCellComponent() {
    }
    ViewCellComponent.ɵfac = function ViewCellComponent_Factory(t) { return new (t || ViewCellComponent)(); };
    ViewCellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ViewCellComponent, selectors: [["table-cell-view-mode"]], inputs: { cell: "cell" }, decls: 4, vars: 3, consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML"]], template: function ViewCellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1);
            i0.ɵɵtemplate(2, ViewCellComponent_div_2_Template, 1, 1, "div", 2);
            i0.ɵɵtemplate(3, ViewCellComponent_div_3_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.cell.getColumn().type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "custom");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "html");
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.CustomViewComponent], encapsulation: 2, changeDetection: 0 });
    return ViewCellComponent;
}());
export { ViewCellComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ViewCellComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-view-mode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "\n    <div [ngSwitch]=\"cell.getColumn().type\">\n        <custom-view-component *ngSwitchCase=\"'custom'\" [cell]=\"cell\"></custom-view-component>\n        <div *ngSwitchCase=\"'html'\" [innerHTML]=\"cell.getValue()\"></div>\n        <div *ngSwitchDefault>{{ cell.getValue() }}</div>\n    </div>\n    ",
            }]
    }], null, { cell: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0lBTzFDLDJDQUFzRjs7O0lBQXRDLG9DQUFhOzs7SUFDN0QseUJBQWdFOzs7SUFBcEMsdUVBQTZCOzs7SUFDekQsMkJBQXNCO0lBQUEsWUFBcUI7SUFBQSxpQkFBTTs7O0lBQTNCLGVBQXFCO0lBQXJCLDhDQUFxQjs7QUFQbkQ7SUFBQTtLQWNDO3NGQUhZLGlCQUFpQjswREFBakIsaUJBQWlCO1lBUDFCLDhCQUNJO1lBQUEsc0dBQThEO1lBQzlELGtFQUEwRDtZQUMxRCxrRUFBc0I7WUFDMUIsaUJBQU07O1lBSkQsb0RBQWtDO1lBQ1osZUFBd0I7WUFBeEIsdUNBQXdCO1lBQzFDLGVBQXNCO1lBQXRCLHFDQUFzQjs7NEJBVm5DO0NBa0JDLEFBZEQsSUFjQztTQUhZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBWDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLGlUQU1QO2FBQ0o7O2tCQUdFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWNlbGwtdmlldy1tb2RlJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdTd2l0Y2hdPVwiY2VsbC5nZXRDb2x1bW4oKS50eXBlXCI+XG4gICAgICAgIDxjdXN0b20tdmlldy1jb21wb25lbnQgKm5nU3dpdGNoQ2FzZT1cIidjdXN0b20nXCIgW2NlbGxdPVwiY2VsbFwiPjwvY3VzdG9tLXZpZXctY29tcG9uZW50PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInaHRtbCdcIiBbaW5uZXJIVE1MXT1cImNlbGwuZ2V0VmFsdWUoKVwiPjwvZGl2PlxuICAgICAgICA8ZGl2ICpuZ1N3aXRjaERlZmF1bHQ+e3sgY2VsbC5nZXRWYWx1ZSgpIH19PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVmlld0NlbGxDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIGNlbGw6IENlbGw7XG59XG4iXX0=