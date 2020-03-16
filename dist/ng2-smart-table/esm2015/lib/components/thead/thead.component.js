import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./rows/thead-titles-row.component";
import * as i3 from "./rows/thead-filters-row.component";
import * as i4 from "./rows/thead-form-row.component";
const _c0 = ["ng2-st-thead", ""];
function Ng2SmartTableTheadComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 3);
    i0.ɵɵlistener("sort", function Ng2SmartTableTheadComponent_tr_0_Template_tr_sort_0_listener($event) { i0.ɵɵrestoreView(_r145); const ctx_r144 = i0.ɵɵnextContext(); return ctx_r144.sort.emit($event); })("selectAllRows", function Ng2SmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener($event) { i0.ɵɵrestoreView(_r145); const ctx_r146 = i0.ɵɵnextContext(); return ctx_r146.selectAllRows.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r141 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r141.grid)("isAllSelected", ctx_r141.isAllSelected)("source", ctx_r141.source);
} }
function Ng2SmartTableTheadComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r148 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 4);
    i0.ɵɵlistener("create", function Ng2SmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) { i0.ɵɵrestoreView(_r148); const ctx_r147 = i0.ɵɵnextContext(); return ctx_r147.create.emit($event); })("filter", function Ng2SmartTableTheadComponent_tr_1_Template_tr_filter_0_listener($event) { i0.ɵɵrestoreView(_r148); const ctx_r149 = i0.ɵɵnextContext(); return ctx_r149.filter.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r142 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r142.grid)("source", ctx_r142.source);
} }
function Ng2SmartTableTheadComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 5);
} if (rf & 2) {
    const ctx_r143 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r143.grid)("createConfirm", ctx_r143.createConfirm);
} }
export class Ng2SmartTableTheadComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    }
}
Ng2SmartTableTheadComponent.ɵfac = function Ng2SmartTableTheadComponent_Factory(t) { return new (t || Ng2SmartTableTheadComponent)(); };
Ng2SmartTableTheadComponent.ɵcmp = i0.ɵɵdefineComponent({ type: Ng2SmartTableTheadComponent, selectors: [["", "ng2-st-thead", ""]], inputs: { grid: "grid", source: "source", isAllSelected: "isAllSelected", createConfirm: "createConfirm" }, outputs: { sort: "sort", selectAllRows: "selectAllRows", create: "create", filter: "filter" }, features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 3, vars: 3, consts: [["ng2-st-thead-titles-row", "", "class", "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows", 4, "ngIf"], ["ng2-st-thead-filters-row", "", "class", "ng2-smart-filters", 3, "grid", "source", "create", "filter", 4, "ngIf"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm", 4, "ngIf"], ["ng2-st-thead-titles-row", "", 1, "ng2-smart-titles", 3, "grid", "isAllSelected", "source", "sort", "selectAllRows"], ["ng2-st-thead-filters-row", "", 1, "ng2-smart-filters", 3, "grid", "source", "create", "filter"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm"]], template: function Ng2SmartTableTheadComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, Ng2SmartTableTheadComponent_tr_0_Template, 1, 3, "tr", 0);
        i0.ɵɵtemplate(1, Ng2SmartTableTheadComponent_tr_1_Template, 1, 2, "tr", 1);
        i0.ɵɵtemplate(2, Ng2SmartTableTheadComponent_tr_2_Template, 1, 2, "tr", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isHideHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isHideSubHeader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.grid.createFormShown);
    } }, directives: [i1.NgIf, i2.TheadTitlesRowComponent, i3.TheadFitlersRowComponent, i4.TheadFormRowComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Ng2SmartTableTheadComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-thead]',
                templateUrl: './thead.component.html',
            }]
    }], null, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], isAllSelected: [{
            type: Input
        }], createConfirm: [{
            type: Input
        }], sort: [{
            type: Output
        }], selectAllRows: [{
            type: Output
        }], create: [{
            type: Output
        }], filter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7SUNIL0QsNkJBT0s7SUFGdUIsMktBQVEsMEJBQWlCLElBQUMsZ0xBQ1QsbUNBQTBCLElBRGpCO0lBRXRELGlCQUFLOzs7SUFMdUIsb0NBQWEseUNBQUEsMkJBQUE7Ozs7SUFPekMsNkJBTUs7SUFGeUIsK0tBQVUsNEJBQW1CLElBQUMsa0tBQ3BCLDRCQUFtQixJQURDO0lBRTVELGlCQUFLOzs7SUFKeUIsb0NBQWEsMkJBQUE7OztJQU0zQyx3QkFHSzs7O0lBRnFCLG9DQUFhLHlDQUFBOztBRFR2QyxNQUFNLE9BQU8sMkJBQTJCO0lBSnhDO1FBV2MsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBUzlDO0lBSkMsV0FBVztRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDOztzR0FsQlEsMkJBQTJCO2dFQUEzQiwyQkFBMkI7UUNUeEMsMEVBT0E7UUFFQSwwRUFNQTtRQUVBLDBFQUdBOztRQXBCNEIsd0NBQXFCO1FBU3BCLGVBQXdCO1FBQXhCLDJDQUF3QjtRQVEzQixlQUE0QjtRQUE1QiwrQ0FBNEI7O2tERFJ6QywyQkFBMkI7Y0FKdkMsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSx3QkFBd0I7YUFDeEM7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vbGliL2dyaWQnO1xuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW25nMi1zdC10aGVhZF0nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi90aGVhZC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5nMlNtYXJ0VGFibGVUaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICAgIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgICBASW5wdXQoKSBpc0FsbFNlbGVjdGVkOiBib29sZWFuO1xuICAgIEBJbnB1dCgpIGNyZWF0ZUNvbmZpcm06IEV2ZW50RW1pdHRlcjxhbnk+O1xuXG4gICAgQE91dHB1dCgpIHNvcnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgc2VsZWN0QWxsUm93cyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBjcmVhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBpc0hpZGVIZWFkZXI6IGJvb2xlYW47XG4gICAgaXNIaWRlU3ViSGVhZGVyOiBib29sZWFuO1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgICAgdGhpcy5pc0hpZGVIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZUhlYWRlcicpO1xuICAgICAgdGhpcy5pc0hpZGVTdWJIZWFkZXIgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnaGlkZVN1YkhlYWRlcicpO1xuICAgIH1cbn1cbiIsIjx0ciBuZzItc3QtdGhlYWQtdGl0bGVzLXJvdyAqbmdJZj1cIiFpc0hpZGVIZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LXRpdGxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzQWxsU2VsZWN0ZWRdPVwiaXNBbGxTZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzb3J0KT1cInNvcnQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0QWxsUm93cyk9XCJzZWxlY3RBbGxSb3dzLmVtaXQoJGV2ZW50KVwiPlxuPC90cj5cblxuPHRyIG5nMi1zdC10aGVhZC1maWx0ZXJzLXJvdyAqbmdJZj1cIiFpc0hpZGVTdWJIZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtZmlsdGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcmVhdGUpPVwiY3JlYXRlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlsdGVyKT1cImZpbHRlci5lbWl0KCRldmVudClcIj5cbjwvdHI+XG5cbjx0ciBuZzItc3QtdGhlYWQtZm9ybS1yb3cgKm5nSWY9XCJncmlkLmNyZWF0ZUZvcm1TaG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY3JlYXRlQ29uZmlybV09XCJjcmVhdGVDb25maXJtXCI+XG48L3RyPlxuIl19