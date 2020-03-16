import { __extends } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
var _c0 = ["inputControl"];
function SelectFilterComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r261 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r261.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r261.title, " ");
} }
var SelectFilterComponent = /** @class */ (function (_super) {
    __extends(SelectFilterComponent, _super);
    function SelectFilterComponent() {
        return _super.call(this) || this;
    }
    SelectFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (value) { return _this.setFilter(); });
    };
    SelectFilterComponent.ɵfac = function SelectFilterComponent_Factory(t) { return new (t || SelectFilterComponent)(); };
    SelectFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectFilterComponent, selectors: [["select-filter"]], viewQuery: function SelectFilterComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(_c0, true, NgControl);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputControl = _t.first);
        } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["inputControl", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "select", 0, 1);
            i0.ɵɵlistener("ngModelChange", function SelectFilterComponent_Template_select_ngModelChange_0_listener($event) { return ctx.query = $event; });
            i0.ɵɵelementStart(2, "option", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, SelectFilterComponent_option_4_Template, 2, 2, "option", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.query);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.column.getFilterConfig().selectText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.column.getFilterConfig().list);
        } }, directives: [i1.SelectControlValueAccessor, i2.NgClass, i1.NgControlStatus, i1.NgModel, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i2.NgForOf], encapsulation: 2 });
    return SelectFilterComponent;
}(DefaultFilter));
export { SelectFilterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectFilterComponent, [{
        type: Component,
        args: [{
                selector: 'select-filter',
                template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            #inputControl\n            [(ngModel)]=\"query\">\n\n        <option value=\"\">{{ column.getFilterConfig().selectText }}</option>\n        <option *ngFor=\"let option of column.getFilterConfig().list\" [value]=\"option.value\">\n          {{ option.title }}\n        </option>\n    </select>\n  ",
            }]
    }], function () { return []; }, { inputControl: [{
            type: ViewChild,
            args: ['inputControl', { read: NgControl, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztJQVd6QyxpQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRm9ELHlDQUFzQjtJQUNqRixlQUNGO0lBREUsa0RBQ0Y7O0FBWFI7SUFlMkMseUNBQWE7SUFJdEQ7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDM0IsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxVQUFDLEtBQWEsSUFBSyxPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OEZBaEJVLHFCQUFxQjs4REFBckIscUJBQXFCOzRDQUVHLFNBQVM7Ozs7O1lBZDFDLG9DQUtJO1lBRkksOElBQW1CO1lBRXZCLGlDQUFpQjtZQUFBLFlBQXlDO1lBQUEsaUJBQVM7WUFDbkUsNEVBQ0U7WUFFTixpQkFBUzs7WUFURCx3Q0FBc0Isc0JBQUE7WUFLVCxlQUF5QztZQUF6Qyw2REFBeUM7WUFDbEQsZUFBb0Q7WUFBcEQsMkRBQW9EOztnQ0FmcEU7Q0FzQ0MsQUFoQ0QsQ0FlMkMsYUFBYSxHQWlCdkQ7U0FqQlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FmakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsa1lBV1Q7YUFDRjs7a0JBR0UsU0FBUzttQkFBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZGVib3VuY2VUaW1lLCBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1maWx0ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWxlY3QgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAjaW5wdXRDb250cm9sXG4gICAgICAgICAgICBbKG5nTW9kZWwpXT1cInF1ZXJ5XCI+XG5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPnt7IGNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5zZWxlY3RUZXh0IH19PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkubGlzdFwiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIj5cbiAgICAgICAgICB7eyBvcHRpb24udGl0bGUgfX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEZpbHRlckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRGaWx0ZXIgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0Q29udHJvbCcsIHsgcmVhZDogTmdDb250cm9sLCBzdGF0aWM6IHRydWUgfSkgaW5wdXRDb250cm9sOiBOZ0NvbnRyb2w7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIHNraXAoMSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlbGF5KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IHN0cmluZykgPT4gdGhpcy5zZXRGaWx0ZXIoKSk7XG4gIH1cbn1cbiJdfQ==