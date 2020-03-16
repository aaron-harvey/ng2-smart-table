import { Component, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = ["inputControl"];
function SelectFilterComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r73 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r73.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r73.title, " ");
} }
export class SelectFilterComponent extends DefaultFilter {
    constructor() {
        super();
    }
    ngOnInit() {
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => this.setFilter());
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectFilterComponent, [{
        type: Component,
        args: [{
                selector: 'select-filter',
                template: `
    <select [ngClass]="inputClass"
            class="form-control"
            #inputControl
            [(ngModel)]="query">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `,
            }]
    }], function () { return []; }, { inputControl: [{
            type: ViewChild,
            args: ['inputControl', { read: NgControl, static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7O0lBV3pDLGlDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFTOzs7SUFGb0Qsd0NBQXNCO0lBQ2pGLGVBQ0Y7SUFERSxpREFDRjs7QUFJUixNQUFNLE9BQU8scUJBQXNCLFNBQVEsYUFBYTtJQUl0RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7YUFDM0IsSUFBSSxDQUNILElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7MEZBaEJVLHFCQUFxQjswREFBckIscUJBQXFCO3dDQUVHLFNBQVM7Ozs7O1FBZDFDLG9DQUtJO1FBRkksOElBQW1CO1FBRXZCLGlDQUFpQjtRQUFBLFlBQXlDO1FBQUEsaUJBQVM7UUFDbkUsNEVBQ0U7UUFFTixpQkFBUzs7UUFURCx3Q0FBc0Isc0JBQUE7UUFLVCxlQUF5QztRQUF6Qyw2REFBeUM7UUFDbEQsZUFBb0Q7UUFBcEQsMkRBQW9EOztrREFNdkQscUJBQXFCO2NBZmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2FBQ0Y7O2tCQUdFLFNBQVM7bUJBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGRlYm91bmNlVGltZSwgc2tpcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRGVmYXVsdEZpbHRlciB9IGZyb20gJy4vZGVmYXVsdC1maWx0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZmlsdGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VsZWN0IFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgI2lucHV0Q29udHJvbFxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJxdWVyeVwiPlxuXG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj57eyBjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuc2VsZWN0VGV4dCB9fTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmxpc3RcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCI+XG4gICAgICAgICAge3sgb3B0aW9uLnRpdGxlIH19XG4gICAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBAVmlld0NoaWxkKCdpbnB1dENvbnRyb2wnLCB7IHJlYWQ6IE5nQ29udHJvbCwgc3RhdGljOiB0cnVlIH0pIGlucHV0Q29udHJvbDogTmdDb250cm9sO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlucHV0Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBza2lwKDEpLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgICBkZWJvdW5jZVRpbWUodGhpcy5kZWxheSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBzdHJpbmcpID0+IHRoaXMuc2V0RmlsdGVyKCkpO1xuICB9XG59XG4iXX0=