import { __extends } from "tslib";
import { Component, Input } from '@angular/core';
import { FilterDefault } from "./filter-default";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./filter-types/select-filter.component";
import * as i3 from "./filter-types/checkbox-filter.component";
import * as i4 from "./filter-types/completer-filter.component";
import * as i5 from "./filter-types/input-filter.component";
function DefaultFilterComponent_select_filter_1_Template(rf, ctx) { if (rf & 1) {
    var _r247 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r247); var ctx_r246 = i0.ɵɵnextContext(); return ctx_r246.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r242 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r242.query)("ngClass", ctx_r242.inputClass)("column", ctx_r242.column);
} }
function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) { if (rf & 1) {
    var _r249 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "checkbox-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r249); var ctx_r248 = i0.ɵɵnextContext(); return ctx_r248.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r243 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r243.query)("ngClass", ctx_r243.inputClass)("column", ctx_r243.column);
} }
function DefaultFilterComponent_completer_filter_3_Template(rf, ctx) { if (rf & 1) {
    var _r251 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "completer-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_completer_filter_3_Template_completer_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r251); var ctx_r250 = i0.ɵɵnextContext(); return ctx_r250.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r244 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r244.query)("ngClass", ctx_r244.inputClass)("column", ctx_r244.column);
} }
function DefaultFilterComponent_input_filter_4_Template(rf, ctx) { if (rf & 1) {
    var _r253 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_input_filter_4_Template_input_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r253); var ctx_r252 = i0.ɵɵnextContext(); return ctx_r252.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r245 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r245.query)("ngClass", ctx_r245.inputClass)("column", ctx_r245.column);
} }
var DefaultFilterComponent = /** @class */ (function (_super) {
    __extends(DefaultFilterComponent, _super);
    function DefaultFilterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultFilterComponent.ɵfac = function DefaultFilterComponent_Factory(t) { return ɵDefaultFilterComponent_BaseFactory(t || DefaultFilterComponent); };
    DefaultFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultFilterComponent, selectors: [["default-table-filter"]], inputs: { query: "query" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[3, "ngSwitch"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchCase"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchDefault"], [3, "query", "ngClass", "column", "filter"]], template: function DefaultFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, DefaultFilterComponent_select_filter_1_Template, 1, 3, "select-filter", 1);
            i0.ɵɵtemplate(2, DefaultFilterComponent_checkbox_filter_2_Template, 1, 3, "checkbox-filter", 1);
            i0.ɵɵtemplate(3, DefaultFilterComponent_completer_filter_3_Template, 1, 3, "completer-filter", 1);
            i0.ɵɵtemplate(4, DefaultFilterComponent_input_filter_4_Template, 1, 3, "input-filter", 2);
            i0.ɵɵelementContainerEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.column.getFilterType());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "list");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "checkbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "completer");
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.SelectFilterComponent, i1.NgClass, i3.CheckboxFilterComponent, i4.CompleterFilterComponent, i5.InputFilterComponent], encapsulation: 2 });
    return DefaultFilterComponent;
}(FilterDefault));
export { DefaultFilterComponent };
var ɵDefaultFilterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DefaultFilterComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultFilterComponent, [{
        type: Component,
        args: [{
                selector: 'default-table-filter',
                template: "\n    <ng-container [ngSwitch]=\"column.getFilterType()\">\n      <select-filter *ngSwitchCase=\"'list'\"\n                     [query]=\"query\"\n                     [ngClass]=\"inputClass\"\n                     [column]=\"column\"\n                     (filter)=\"onFilter($event)\">\n      </select-filter>\n      <checkbox-filter *ngSwitchCase=\"'checkbox'\"\n                       [query]=\"query\"\n                       [ngClass]=\"inputClass\"\n                       [column]=\"column\"\n                       (filter)=\"onFilter($event)\">\n      </checkbox-filter>\n      <completer-filter *ngSwitchCase=\"'completer'\"\n                        [query]=\"query\"\n                        [ngClass]=\"inputClass\"\n                        [column]=\"column\"\n                        (filter)=\"onFilter($event)\">\n      </completer-filter>\n      <input-filter *ngSwitchDefault\n                    [query]=\"query\"\n                    [ngClass]=\"inputClass\"\n                    [column]=\"column\"\n                    (filter)=\"onFilter($event)\">\n      </input-filter>\n    </ng-container>\n  ",
            }]
    }], null, { query: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsdGVyL2RlZmF1bHQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFL0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7SUFNekMsd0NBS2dCO0lBREQsMk5BQTJCO0lBQzFDLGlCQUFnQjs7O0lBSkQsc0NBQWUsZ0NBQUEsMkJBQUE7Ozs7SUFLOUIsMENBS2tCO0lBREQsK05BQTJCO0lBQzVDLGlCQUFrQjs7O0lBSkQsc0NBQWUsZ0NBQUEsMkJBQUE7Ozs7SUFLaEMsMkNBS21CO0lBREQsaU9BQTJCO0lBQzdDLGlCQUFtQjs7O0lBSkQsc0NBQWUsZ0NBQUEsMkJBQUE7Ozs7SUFLakMsdUNBS2U7SUFERCx5TkFBMkI7SUFDekMsaUJBQWU7OztJQUpELHNDQUFlLGdDQUFBLDJCQUFBOztBQXZCbkM7SUErQjRDLDBDQUFhO0lBL0J6RDs7S0FpQ0M7K0hBRlksc0JBQXNCOytEQUF0QixzQkFBc0I7WUE1Qi9CLGdDQUNFO1lBQUEsMkZBS0E7WUFDQSwrRkFLQTtZQUNBLGlHQUtBO1lBQ0EseUZBS0E7WUFDRiwwQkFBZTs7WUF6QkQscURBQW1DO1lBQ2hDLGVBQXNCO1lBQXRCLHFDQUFzQjtZQU1wQixlQUEwQjtZQUExQix5Q0FBMEI7WUFNekIsZUFBMkI7WUFBM0IsMENBQTJCOztpQ0FwQm5EO0NBcUNDLEFBakNELENBK0I0QyxhQUFhLEdBRXhEO1NBRlksc0JBQXNCO21FQUF0QixzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQS9CbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRSxrbUNBMkJUO2FBQ0Y7O2tCQUVFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0ZpbHRlckRlZmF1bHR9IGZyb20gXCIuL2ZpbHRlci1kZWZhdWx0XCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlZmF1bHQtdGFibGUtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJjb2x1bW4uZ2V0RmlsdGVyVHlwZSgpXCI+XG4gICAgICA8c2VsZWN0LWZpbHRlciAqbmdTd2l0Y2hDYXNlPVwiJ2xpc3QnXCJcbiAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgPC9zZWxlY3QtZmlsdGVyPlxuICAgICAgPGNoZWNrYm94LWZpbHRlciAqbmdTd2l0Y2hDYXNlPVwiJ2NoZWNrYm94J1wiXG4gICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgPC9jaGVja2JveC1maWx0ZXI+XG4gICAgICA8Y29tcGxldGVyLWZpbHRlciAqbmdTd2l0Y2hDYXNlPVwiJ2NvbXBsZXRlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICA8L2NvbXBsZXRlci1maWx0ZXI+XG4gICAgICA8aW5wdXQtZmlsdGVyICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgW3F1ZXJ5XT1cInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICA8L2lucHV0LWZpbHRlcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpbHRlckNvbXBvbmVudCBleHRlbmRzIEZpbHRlckRlZmF1bHQge1xuICBASW5wdXQoKSBxdWVyeTogc3RyaW5nO1xufVxuIl19