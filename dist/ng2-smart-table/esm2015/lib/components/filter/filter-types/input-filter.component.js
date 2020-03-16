import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class InputFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.inputControl = new FormControl();
    }
    ngOnInit() {
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => {
            this.query = this.inputControl.value;
            this.setFilter();
        });
    }
    ngOnChanges(changes) {
        if (changes.query) {
            this.inputControl.setValue(this.query);
        }
    }
}
InputFilterComponent.ɵfac = function InputFilterComponent_Factory(t) { return new (t || InputFilterComponent)(); };
InputFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InputFilterComponent, selectors: [["input-filter"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 3, consts: [["type", "text", 1, "form-control", 3, "ngClass", "formControl", "placeholder"]], template: function InputFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "input", 0);
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("placeholder", ctx.column.title);
        i0.ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.inputControl);
    } }, directives: [i1.DefaultValueAccessor, i2.NgClass, i1.NgControlStatus, i1.FormControlDirective], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFilterComponent, [{
        type: Component,
        args: [{
                selector: 'input-filter',
                template: `
    <input
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column.title }}"/>
  `,
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXItdHlwZXMvaW5wdXQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBUSxNQUFNLGdCQUFnQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQWFqRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsYUFBYTtJQUlyRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBSFYsaUJBQVksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBSWpDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZO2FBQzNCLElBQUksQ0FDSCxvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7d0ZBM0JVLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FBUjdCLDJCQU1GOztRQURJLHlEQUFnQztRQUpoQyx3Q0FBc0IsaUNBQUE7O2tEQU9mLG9CQUFvQjtjQVhoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7OztHQU9UO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2RlZmF1bHQtZmlsdGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXRcbiAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImlucHV0Q29udHJvbFwiXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICBwbGFjZWhvbGRlcj1cInt7IGNvbHVtbi50aXRsZSB9fVwiLz5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIGlucHV0Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgdGhpcy5pbnB1dENvbnRyb2wuc2V0VmFsdWUodGhpcy5xdWVyeSk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIGRlYm91bmNlVGltZSh0aGlzLmRlbGF5KSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHRoaXMuaW5wdXRDb250cm9sLnZhbHVlO1xuICAgICAgICB0aGlzLnNldEZpbHRlcigpO1xuICAgICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMucXVlcnkpIHtcbiAgICAgIHRoaXMuaW5wdXRDb250cm9sLnNldFZhbHVlKHRoaXMucXVlcnkpO1xuICAgIH1cbiAgfVxufVxuIl19