import { __extends } from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
var InputFilterComponent = /** @class */ (function (_super) {
    __extends(InputFilterComponent, _super);
    function InputFilterComponent() {
        var _this = _super.call(this) || this;
        _this.inputControl = new FormControl();
        return _this;
    }
    InputFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (value) {
            _this.query = _this.inputControl.value;
            _this.setFilter();
        });
    };
    InputFilterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.query) {
            this.inputControl.setValue(this.query);
        }
    };
    InputFilterComponent.ɵfac = function InputFilterComponent_Factory(t) { return new (t || InputFilterComponent)(); };
    InputFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InputFilterComponent, selectors: [["input-filter"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 3, consts: [["type", "text", 1, "form-control", 3, "ngClass", "formControl", "placeholder"]], template: function InputFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "input", 0);
        } if (rf & 2) {
            i0.ɵɵpropertyInterpolate("placeholder", ctx.column.title);
            i0.ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.inputControl);
        } }, directives: [i1.DefaultValueAccessor, i2.NgClass, i1.NgControlStatus, i1.FormControlDirective], encapsulation: 2 });
    return InputFilterComponent;
}(DefaultFilter));
export { InputFilterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFilterComponent, [{
        type: Component,
        args: [{
                selector: 'input-filter',
                template: "\n    <input\n      [ngClass]=\"inputClass\"\n      [formControl]=\"inputControl\"\n      class=\"form-control\"\n      type=\"text\"\n      placeholder=\"{{ column.title }}\"/>\n  ",
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvaW5wdXQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQVEsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFFakQ7SUFXMEMsd0NBQWE7SUFJckQ7UUFBQSxZQUNFLGlCQUFPLFNBQ1I7UUFKRCxrQkFBWSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7O0lBSWpDLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDM0IsSUFBSSxDQUNILG9CQUFvQixFQUFFLEVBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxDQUFDLFVBQUMsS0FBYTtZQUN2QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7NEZBM0JVLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lBUjdCLDJCQU1GOztZQURJLHlEQUFnQztZQUpoQyx3Q0FBc0IsaUNBQUE7OytCQVY1QjtDQTZDQyxBQXZDRCxDQVcwQyxhQUFhLEdBNEJ0RDtTQTVCWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQVhoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSx1TEFPVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyIH0gZnJvbSAnLi9kZWZhdWx0LWZpbHRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWZpbHRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGlucHV0XG4gICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgIFtmb3JtQ29udHJvbF09XCJpbnB1dENvbnRyb2xcIlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJ7eyBjb2x1bW4udGl0bGUgfX1cIi8+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEZpbHRlciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBpbnB1dENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucXVlcnkpIHtcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKHRoaXMucXVlcnkpO1xuICAgIH1cbiAgICB0aGlzLmlucHV0Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWxheSksXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMucXVlcnkgPSB0aGlzLmlucHV0Q29udHJvbC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRGaWx0ZXIoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnF1ZXJ5KSB7XG4gICAgICB0aGlzLmlucHV0Q29udHJvbC5zZXRWYWx1ZSh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==