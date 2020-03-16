import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cells/checkbox-select-all.component";
import * as i3 from "../cells/actions-title.component";
import * as i4 from "../cells/column-title.component";
const _c0 = ["ng2-st-thead-titles-row", ""];
function TheadTitlesRowComponent_th_0_Template(rf, ctx) { if (rf & 1) {
    const _r184 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 3);
    i0.ɵɵlistener("click", function TheadTitlesRowComponent_th_0_Template_th_click_0_listener($event) { i0.ɵɵrestoreView(_r184); const ctx_r183 = i0.ɵɵnextContext(); return ctx_r183.selectAllRows.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r179 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r179.grid)("source", ctx_r179.source)("isAllSelected", ctx_r179.isAllSelected);
} }
function TheadTitlesRowComponent_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 4);
} if (rf & 2) {
    const ctx_r180 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r180.grid);
} }
function TheadTitlesRowComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r187 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 5);
    i0.ɵɵelementStart(1, "ng2-st-column-title", 6);
    i0.ɵɵlistener("sort", function TheadTitlesRowComponent_th_2_Template_ng2_st_column_title_sort_1_listener($event) { i0.ɵɵrestoreView(_r187); const ctx_r186 = i0.ɵɵnextContext(); return ctx_r186.sort.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r185 = ctx.$implicit;
    const ctx_r181 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("ng2-smart-th ", column_r185.id, "");
    i0.ɵɵstyleProp("width", column_r185.width);
    i0.ɵɵproperty("ngClass", column_r185.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("source", ctx_r181.source)("column", column_r185);
} }
function TheadTitlesRowComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 4);
} if (rf & 2) {
    const ctx_r182 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r182.grid);
} }
export class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
}
TheadTitlesRowComponent.ɵfac = function TheadTitlesRowComponent_Factory(t) { return new (t || TheadTitlesRowComponent)(); };
TheadTitlesRowComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TheadTitlesRowComponent, selectors: [["", "ng2-st-thead-titles-row", ""]], inputs: { grid: "grid", isAllSelected: "isAllSelected", source: "source" }, outputs: { sort: "sort", selectAllRows: "selectAllRows" }, features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 4, vars: 4, consts: [["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click", 4, "ngIf"], ["ng2-st-actions-title", "", 3, "grid", 4, "ngIf"], [3, "class", "ngClass", "width", 4, "ngFor", "ngForOf"], ["ng2-st-checkbox-select-all", "", 3, "grid", "source", "isAllSelected", "click"], ["ng2-st-actions-title", "", 3, "grid"], [3, "ngClass"], [3, "source", "column", "sort"]], template: function TheadTitlesRowComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TheadTitlesRowComponent_th_0_Template, 1, 3, "th", 0);
        i0.ɵɵtemplate(1, TheadTitlesRowComponent_th_1_Template, 1, 1, "th", 1);
        i0.ɵɵtemplate(2, TheadTitlesRowComponent_th_2_Template, 2, 8, "th", 2);
        i0.ɵɵtemplate(3, TheadTitlesRowComponent_th_3_Template, 1, 1, "th", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showActionColumnLeft);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.grid.getColumns());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showActionColumnRight);
    } }, directives: [i1.NgIf, i1.NgForOf, i2.CheckboxSelectAllComponent, i3.ActionsTitleComponent, i1.NgClass, i4.ColumnTitleComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TheadTitlesRowComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead-titles-row]',
                template: `
    <th ng2-st-checkbox-select-all *ngIf="isMultiSelectVisible"
                                   [grid]="grid"
                                   [source]="source"
                                   [isAllSelected]="isAllSelected"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th *ngFor="let column of grid.getColumns()" class="ng2-smart-th {{ column.id }}" [ngClass]="column.class"
      [style.width]="column.width" >
      <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }], selectAllRows: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQtdGl0bGVzLXJvdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFaEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7Ozs7O0lBTTlELDZCQUtLO0lBRDBCLHlLQUFTLG1DQUEwQixJQUFDO0lBQ25FLGlCQUFLOzs7SUFKMEIsb0NBQWEsMkJBQUEseUNBQUE7OztJQUs1Qyx3QkFBeUU7OztJQUFuQixvQ0FBYTs7OztJQUNuRSw2QkFFRTtJQUFBLDhDQUEwRztJQUFqRCx3TEFBUSwwQkFBaUIsSUFBQztJQUFDLGlCQUFzQjtJQUM1RyxpQkFBSzs7OztJQUh3Qyw4REFBb0M7SUFDL0UsMENBQTRCO0lBRG9ELDJDQUF3QjtJQUVuRixlQUFpQjtJQUFqQix3Q0FBaUIsdUJBQUE7OztJQUV4Qyx3QkFBMEU7OztJQUFuQixvQ0FBYTs7QUFHeEUsTUFBTSxPQUFPLHVCQUF1QjtJQWpCcEM7UUF1QlksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBYW5EO0lBTkMsV0FBVztRQUNULElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7OEZBbEJVLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FBZGhDLHNFQUtBO1FBQ0Esc0VBQW9FO1FBQ3BFLHNFQUVFO1FBRUYsc0VBQXFFOztRQVh0QywrQ0FBNEI7UUFNbEMsZUFBNEI7UUFBNUIsK0NBQTRCO1FBQ2pELGVBQXdDO1FBQXhDLCtDQUF3QztRQUluQixlQUE2QjtRQUE3QixnREFBNkI7O2tEQUc3Qyx1QkFBdUI7Y0FqQm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7R0FhVDthQUNGOztrQkFHRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFFTCxNQUFNOztrQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9ncmlkJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW5cIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZC10aXRsZXMtcm93XScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRoIG5nMi1zdC1jaGVja2JveC1zZWxlY3QtYWxsICpuZ0lmPVwiaXNNdWx0aVNlbGVjdFZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNBbGxTZWxlY3RlZF09XCJpc0FsbFNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdEFsbFJvd3MuZW1pdCgkZXZlbnQpXCI+XG4gICAgPC90aD5cbiAgICA8dGggbmcyLXN0LWFjdGlvbnMtdGl0bGUgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uTGVmdFwiIFtncmlkXT1cImdyaWRcIj48L3RoPlxuICAgIDx0aCAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGdyaWQuZ2V0Q29sdW1ucygpXCIgY2xhc3M9XCJuZzItc21hcnQtdGgge3sgY29sdW1uLmlkIH19XCIgW25nQ2xhc3NdPVwiY29sdW1uLmNsYXNzXCJcbiAgICAgIFtzdHlsZS53aWR0aF09XCJjb2x1bW4ud2lkdGhcIiA+XG4gICAgICA8bmcyLXN0LWNvbHVtbi10aXRsZSBbc291cmNlXT1cInNvdXJjZVwiIFtjb2x1bW5dPVwiY29sdW1uXCIgKHNvcnQpPVwic29ydC5lbWl0KCRldmVudClcIj48L25nMi1zdC1jb2x1bW4tdGl0bGU+XG4gICAgPC90aD5cbiAgICA8dGggbmcyLXN0LWFjdGlvbnMtdGl0bGUgKm5nSWY9XCJzaG93QWN0aW9uQ29sdW1uUmlnaHRcIiBbZ3JpZF09XCJncmlkXCI+PC90aD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGhlYWRUaXRsZXNSb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIGlzQWxsU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcblxuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0QWxsUm93cyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzTXVsdGlTZWxlY3RWaXNpYmxlOiBib29sZWFuO1xuICBzaG93QWN0aW9uQ29sdW1uTGVmdDogYm9vbGVhbjtcbiAgc2hvd0FjdGlvbkNvbHVtblJpZ2h0OiBib29sZWFuO1xuXG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc011bHRpU2VsZWN0VmlzaWJsZSA9IHRoaXMuZ3JpZC5pc011bHRpU2VsZWN0VmlzaWJsZSgpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtbkxlZnQgPSB0aGlzLmdyaWQuc2hvd0FjdGlvbkNvbHVtbignbGVmdCcpO1xuICAgIHRoaXMuc2hvd0FjdGlvbkNvbHVtblJpZ2h0ID0gdGhpcy5ncmlkLnNob3dBY3Rpb25Db2x1bW4oJ3JpZ2h0Jyk7XG4gIH1cblxufVxuIl19