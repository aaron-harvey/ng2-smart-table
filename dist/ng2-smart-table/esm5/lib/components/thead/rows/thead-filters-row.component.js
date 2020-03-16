import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/add-button.component";
import * as i3 from "../../filter/filter.component";
var _c0 = ["ng2-st-thead-filters-row", ""];
function TheadFitlersRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function TheadFitlersRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    var _r350 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 4);
    i0.ɵɵlistener("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) { i0.ɵɵrestoreView(_r350); var ctx_r349 = i0.ɵɵnextContext(); return ctx_r349.create.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r346 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r346.grid);
} }
function TheadFitlersRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    var _r353 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵelementStart(1, "ng2-smart-table-filter", 5);
    i0.ɵɵlistener("filter", function TheadFitlersRowComponent_th_2_Template_ng2_smart_table_filter_filter_1_listener($event) { i0.ɵɵrestoreView(_r353); var ctx_r352 = i0.ɵɵnextContext(); return ctx_r352.filter.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r351 = ctx.$implicit;
    var ctx_r347 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ng2-smart-th ", column_r351.id, "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("source", ctx_r347.source)("column", column_r351)("inputClass", ctx_r347.filterInputClass);
} }
function TheadFitlersRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    var _r355 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 6);
    i0.ɵɵlistener("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) { i0.ɵɵrestoreView(_r355); var ctx_r354 = i0.ɵɵnextContext(); return ctx_r354.create.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r348 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r348.grid)("source", ctx_r348.source);
} }
var TheadFitlersRowComponent = /** @class */ (function () {
    function TheadFitlersRowComponent() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    TheadFitlersRowComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    };
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
    return TheadFitlersRowComponent;
}());
export { TheadFitlersRowComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TheadFitlersRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-filters-row]',
                template: "\n    <th *ngIf=\"isMultiSelectVisible\"></th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnLeft\"\n                          [grid]=\"grid\"\n                          (create)=\"create.emit($event)\">\n    </th>\n    <th *ngFor=\"let column of grid.getColumns()\" class=\"ng2-smart-th {{ column.id }}\">\n      <ng2-smart-table-filter [source]=\"source\"\n                              [column]=\"column\"\n                              [inputClass]=\"filterInputClass\"\n                              (filter)=\"filter.emit($event)\">\n      </ng2-smart-table-filter>\n    </th>\n    <th ng2-st-add-button *ngIf=\"showActionColumnRight\"\n                          [grid]=\"grid\"\n                          [source]=\"source\"\n                          (create)=\"create.emit($event)\">\n    </th>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtZmlsdGVycy1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDekMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7O0lBTTlELHFCQUFzQzs7OztJQUN0Qyw2QkFHSztJQURpQiwwS0FBVSw0QkFBbUIsSUFBQztJQUNwRCxpQkFBSzs7O0lBRmlCLG9DQUFhOzs7O0lBR25DLDBCQUNFO0lBQUEsaURBSXlCO0lBREQsOExBQVUsNEJBQW1CLElBQUM7SUFDdEQsaUJBQXlCO0lBQzNCLGlCQUFLOzs7O0lBTndDLDhEQUFvQztJQUN2RCxlQUFpQjtJQUFqQix3Q0FBaUIsdUJBQUEseUNBQUE7Ozs7SUFNM0MsNkJBSUs7SUFEaUIsMEtBQVUsNEJBQW1CLElBQUM7SUFDcEQsaUJBQUs7OztJQUhpQixvQ0FBYSwyQkFBQTs7QUFoQnZDO0lBQUE7UUEyQlksV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7S0FhNUM7SUFOQyw4Q0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM3RCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRSxDQUFDO29HQWxCVSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQW5CakMsdUVBQWlDO1lBQ2pDLHVFQUdBO1lBQ0EsdUVBQ0U7WUFNRix1RUFJQTs7WUFoQkksK0NBQTRCO1lBQ1YsZUFBNEI7WUFBNUIsK0NBQTRCO1lBSTlDLGVBQXdDO1lBQXhDLCtDQUF3QztZQU90QixlQUE2QjtZQUE3QixnREFBNkI7O21DQXJCdkQ7Q0ErQ0MsQUF6Q0QsSUF5Q0M7U0FuQlksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0F0QnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUUsOHlCQWtCVDthQUNGOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW5cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZC1maWx0ZXJzLXJvd10nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDx0aCAqbmdJZj1cImlzTXVsdGlTZWxlY3RWaXNpYmxlXCI+PC90aD5cbiAgICA8dGggbmcyLXN0LWFkZC1idXR0b24gKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uTGVmdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY3JlYXRlKT1cImNyZWF0ZS5lbWl0KCRldmVudClcIj5cbiAgICA8L3RoPlxuICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGdyaWQuZ2V0Q29sdW1ucygpXCIgY2xhc3M9XCJuZzItc21hcnQtdGgge3sgY29sdW1uLmlkIH19XCI+XG4gICAgICA8bmcyLXNtYXJ0LXRhYmxlLWZpbHRlciBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJmaWx0ZXJJbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwiZmlsdGVyLmVtaXQoJGV2ZW50KVwiPlxuICAgICAgPC9uZzItc21hcnQtdGFibGUtZmlsdGVyPlxuICAgIDwvdGg+XG4gICAgPHRoIG5nMi1zdC1hZGQtYnV0dG9uICpuZ0lmPVwic2hvd0FjdGlvbkNvbHVtblJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNyZWF0ZSk9XCJjcmVhdGUuZW1pdCgkZXZlbnQpXCI+XG4gICAgPC90aD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGhlYWRGaXRsZXJzUm93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG5cbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNNdWx0aVNlbGVjdFZpc2libGU6IGJvb2xlYW47XG4gIHNob3dBY3Rpb25Db2x1bW5MZWZ0OiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uUmlnaHQ6IGJvb2xlYW47XG4gIGZpbHRlcklucHV0Q2xhc3M6IHN0cmluZztcblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmlzTXVsdGlTZWxlY3RWaXNpYmxlID0gdGhpcy5ncmlkLmlzTXVsdGlTZWxlY3RWaXNpYmxlKCk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uTGVmdCA9IHRoaXMuZ3JpZC5zaG93QWN0aW9uQ29sdW1uKCdsZWZ0Jyk7XG4gICAgdGhpcy5zaG93QWN0aW9uQ29sdW1uUmlnaHQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbigncmlnaHQnKTtcbiAgICB0aGlzLmZpbHRlcklucHV0Q2xhc3MgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZmlsdGVyLmlucHV0Q2xhc3MnKTtcbiAgfVxufVxuIl19