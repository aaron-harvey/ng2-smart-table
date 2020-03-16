import { Component, Input } from '@angular/core';
import { FilterDefault } from "./filter-default";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./filter-types/select-filter.component";
import * as i3 from "./filter-types/checkbox-filter.component";
import * as i4 from "./filter-types/completer-filter.component";
import * as i5 from "./filter-types/input-filter.component";
function DefaultFilterComponent_select_filter_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(); return ctx_r58.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r54 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r54.query)("ngClass", ctx_r54.inputClass)("column", ctx_r54.column);
} }
function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "checkbox-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r61); const ctx_r60 = i0.ɵɵnextContext(); return ctx_r60.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r55.query)("ngClass", ctx_r55.inputClass)("column", ctx_r55.column);
} }
function DefaultFilterComponent_completer_filter_3_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "completer-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_completer_filter_3_Template_completer_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r62 = i0.ɵɵnextContext(); return ctx_r62.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r56 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r56.query)("ngClass", ctx_r56.inputClass)("column", ctx_r56.column);
} }
function DefaultFilterComponent_input_filter_4_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input-filter", 3);
    i0.ɵɵlistener("filter", function DefaultFilterComponent_input_filter_4_Template_input_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r64 = i0.ɵɵnextContext(); return ctx_r64.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext();
    i0.ɵɵproperty("query", ctx_r57.query)("ngClass", ctx_r57.inputClass)("column", ctx_r57.column);
} }
export class DefaultFilterComponent extends FilterDefault {
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
const ɵDefaultFilterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DefaultFilterComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultFilterComponent, [{
        type: Component,
        args: [{
                selector: 'default-table-filter',
                template: `
    <ng-container [ngSwitch]="column.getFilterType()">
      <select-filter *ngSwitchCase="'list'"
                     [query]="query"
                     [ngClass]="inputClass"
                     [column]="column"
                     (filter)="onFilter($event)">
      </select-filter>
      <checkbox-filter *ngSwitchCase="'checkbox'"
                       [query]="query"
                       [ngClass]="inputClass"
                       [column]="column"
                       (filter)="onFilter($event)">
      </checkbox-filter>
      <completer-filter *ngSwitchCase="'completer'"
                        [query]="query"
                        [ngClass]="inputClass"
                        [column]="column"
                        (filter)="onFilter($event)">
      </completer-filter>
      <input-filter *ngSwitchDefault
                    [query]="query"
                    [ngClass]="inputClass"
                    [column]="column"
                    (filter)="onFilter($event)">
      </input-filter>
    </ng-container>
  `,
            }]
    }], null, { query: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvZmlsdGVyL2RlZmF1bHQtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7OztJQU16Qyx3Q0FLZ0I7SUFERCwwTkFBMkI7SUFDMUMsaUJBQWdCOzs7SUFKRCxxQ0FBZSwrQkFBQSwwQkFBQTs7OztJQUs5QiwwQ0FLa0I7SUFERCw4TkFBMkI7SUFDNUMsaUJBQWtCOzs7SUFKRCxxQ0FBZSwrQkFBQSwwQkFBQTs7OztJQUtoQywyQ0FLbUI7SUFERCxnT0FBMkI7SUFDN0MsaUJBQW1COzs7SUFKRCxxQ0FBZSwrQkFBQSwwQkFBQTs7OztJQUtqQyx1Q0FLZTtJQURELHdOQUEyQjtJQUN6QyxpQkFBZTs7O0lBSkQscUNBQWUsK0JBQUEsMEJBQUE7O0FBUW5DLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxhQUFhOzsySEFBNUMsc0JBQXNCOzJEQUF0QixzQkFBc0I7UUE1Qi9CLGdDQUNFO1FBQUEsMkZBS0E7UUFDQSwrRkFLQTtRQUNBLGlHQUtBO1FBQ0EseUZBS0E7UUFDRiwwQkFBZTs7UUF6QkQscURBQW1DO1FBQ2hDLGVBQXNCO1FBQXRCLHFDQUFzQjtRQU1wQixlQUEwQjtRQUExQix5Q0FBMEI7UUFNekIsZUFBMkI7UUFBM0IsMENBQTJCOztxRUFldEMsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0EvQmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCVDthQUNGOztrQkFFRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtGaWx0ZXJEZWZhdWx0fSBmcm9tIFwiLi9maWx0ZXItZGVmYXVsdFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkZWZhdWx0LXRhYmxlLWZpbHRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiY29sdW1uLmdldEZpbHRlclR5cGUoKVwiPlxuICAgICAgPHNlbGVjdC1maWx0ZXIgKm5nU3dpdGNoQ2FzZT1cIidsaXN0J1wiXG4gICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICAgIDwvc2VsZWN0LWZpbHRlcj5cbiAgICAgIDxjaGVja2JveC1maWx0ZXIgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIlxuICAgICAgICAgICAgICAgICAgICAgICBbcXVlcnldPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cIm9uRmlsdGVyKCRldmVudClcIj5cbiAgICAgIDwvY2hlY2tib3gtZmlsdGVyPlxuICAgICAgPGNvbXBsZXRlci1maWx0ZXIgKm5nU3dpdGNoQ2FzZT1cIidjb21wbGV0ZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgPC9jb21wbGV0ZXItZmlsdGVyPlxuICAgICAgPGlucHV0LWZpbHRlciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgPC9pbnB1dC1maWx0ZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBGaWx0ZXJEZWZhdWx0IHtcbiAgQElucHV0KCkgcXVlcnk6IHN0cmluZztcbn1cbiJdfQ==