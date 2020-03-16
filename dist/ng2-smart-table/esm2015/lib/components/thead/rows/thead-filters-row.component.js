import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/add-button.component";
import * as i3 from "../../filter/filter.component";
const _c0 = ["ng2-st-thead-filters-row", ""];
function TheadFitlersRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function TheadFitlersRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 4);
    i0.ɵɵlistener("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) { i0.ɵɵrestoreView(_r162); const ctx_r161 = i0.ɵɵnextContext(); return ctx_r161.create.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r158 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r158.grid);
} }
function TheadFitlersRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r165 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵelementStart(1, "ng2-smart-table-filter", 5);
    i0.ɵɵlistener("filter", function TheadFitlersRowComponent_th_2_Template_ng2_smart_table_filter_filter_1_listener($event) { i0.ɵɵrestoreView(_r165); const ctx_r164 = i0.ɵɵnextContext(); return ctx_r164.filter.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r163 = ctx.$implicit;
    const ctx_r159 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ng2-smart-th ", column_r163.id, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("source", ctx_r159.source)("column", column_r163)("inputClass", ctx_r159.filterInputClass);
} }
function TheadFitlersRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    const _r167 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 6);
    i0.ɵɵlistener("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) { i0.ɵɵrestoreView(_r167); const ctx_r166 = i0.ɵɵnextContext(); return ctx_r166.create.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r160 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r160.grid)("source", ctx_r160.source);
} }
export class TheadFitlersRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    }
}
TheadFitlersRowComponent.ɵfac = function TheadFitlersRowComponent_Factory(t) { return new (t || TheadFitlersRowComponent)(); };
TheadFitlersRowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TheadFitlersRowComponent, selectors: [["", "ng2-st-thead-filters-row", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create", filter: "filter" }, features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 4, vars: 4, consts: [[4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["ng2-st-add-button", "", 3, "grid", "source", "create", 4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create"], [3, "source", "column", "inputClass", "filter"], ["ng2-st-add-button", "", 3, "grid", "source", "create"]], template: function TheadFitlersRowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TheadFitlersRowComponent_th_0_Template, 1, 0, "th", 0);
        i0.ɵɵtemplate(1, TheadFitlersRowComponent_th_1_Template, 1, 1, "th", 1);
        i0.ɵɵtemplate(2, TheadFitlersRowComponent_th_2_Template, 2, 6, "th", 2);
        i0.ɵɵtemplate(3, TheadFitlersRowComponent_th_3_Template, 1, 2, "th", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showActionColumnLeft);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.grid.getColumns());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showActionColumnRight);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.AddButtonComponent, i3.FilterComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TheadFitlersRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-filters-row]',
                template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th ng2-st-add-button *ngIf="showActionColumnLeft"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter [source]="source"
                              [column]="column"
                              [inputClass]="filterInputClass"
                              (filter)="filter.emit($event)">
      </ng2-smart-table-filter>
    </th>
    <th ng2-st-add-button *ngIf="showActionColumnRight"
                          [grid]="grid"
                          [source]="source"
                          (create)="create.emit($event)">
    </th>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], create: [{
            type: Output
        }], filter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZmlsdGVycy1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7O0lBTTlELHFCQUFzQzs7OztJQUN0Qyw2QkFHSztJQURpQiw0S0FBVSw0QkFBbUIsSUFBQztJQUNwRCxpQkFBSzs7O0lBRmlCLG9DQUFhOzs7O0lBR25DLDBCQUNFO0lBQUEsaURBSXlCO0lBREQsZ01BQVUsNEJBQW1CLElBQUM7SUFDdEQsaUJBQXlCO0lBQzNCLGlCQUFLOzs7O0lBTndDLDhEQUFvQztJQUN2RCxlQUFpQjtJQUFqQix3Q0FBaUIsdUJBQUEseUNBQUE7Ozs7SUFNM0MsNkJBSUs7SUFEaUIsNEtBQVUsNEJBQW1CLElBQUM7SUFDcEQsaUJBQUs7OztJQUhpQixvQ0FBYSwyQkFBQTs7QUFNdkMsTUFBTSxPQUFPLHdCQUF3QjtJQXRCckM7UUEyQlksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FhNUM7SUFOQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRSxDQUFDOztnR0FsQlUsd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUFuQmpDLHVFQUFpQztRQUNqQyx1RUFHQTtRQUNBLHVFQUNFO1FBTUYsdUVBSUE7O1FBaEJJLCtDQUE0QjtRQUNWLGVBQTRCO1FBQTVCLCtDQUE0QjtRQUk5QyxlQUF3QztRQUF4QywrQ0FBd0M7UUFPdEIsZUFBNkI7UUFBN0IsZ0RBQTZCOztrREFPMUMsd0JBQXdCO2NBdEJwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FrQlQ7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZzItc3QtdGhlYWQtZmlsdGVycy1yb3ddJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGggKm5nSWY9XCJpc011bHRpU2VsZWN0VmlzaWJsZVwiPjwvdGg+XG4gICAgPHRoIG5nMi1zdC1hZGQtYnV0dG9uICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtbkxlZnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNyZWF0ZSk9XCJjcmVhdGUuZW1pdCgkZXZlbnQpXCI+XG4gICAgPC90aD5cbiAgICA8dGggKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBncmlkLmdldENvbHVtbnMoKVwiIGNsYXNzPVwibmcyLXNtYXJ0LXRoIHt7IGNvbHVtbi5pZCB9fVwiPlxuICAgICAgPG5nMi1zbWFydC10YWJsZS1maWx0ZXIgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbHVtbl09XCJjb2x1bW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lucHV0Q2xhc3NdPVwiZmlsdGVySW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cImZpbHRlci5lbWl0KCRldmVudClcIj5cbiAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlLWZpbHRlcj5cbiAgICA8L3RoPlxuICAgIDx0aCBuZzItc3QtYWRkLWJ1dHRvbiAqbmdJZj1cInNob3dBY3Rpb25Db2x1bW5SaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjcmVhdGUpPVwiY3JlYXRlLmVtaXQoJGV2ZW50KVwiPlxuICAgIDwvdGg+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuXG4gIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGZpbHRlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uTGVmdDogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xuICBmaWx0ZXJJbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtbkxlZnQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbignbGVmdCcpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XG4gICAgdGhpcy5maWx0ZXJJbnB1dENsYXNzID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2ZpbHRlci5pbnB1dENsYXNzJyk7XG4gIH1cbn1cbiJdfQ==