import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./rows/thead-titles-row.component";
import * as i3 from "./rows/thead-filters-row.component";
import * as i4 from "./rows/thead-form-row.component";
var _c0 = ["ng2-st-thead", ""];
function Ng2SmartTableTheadComponent_tr_0_Template(rf, ctx) { if (rf & 1) {
    var _r333 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 3);
    i0.ɵɵlistener("sort", function Ng2SmartTableTheadComponent_tr_0_Template_tr_sort_0_listener($event) { i0.ɵɵrestoreView(_r333); var ctx_r332 = i0.ɵɵnextContext(); return ctx_r332.sort.emit($event); })("selectAllRows", function Ng2SmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener($event) { i0.ɵɵrestoreView(_r333); var ctx_r334 = i0.ɵɵnextContext(); return ctx_r334.selectAllRows.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r329 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r329.grid)("isAllSelected", ctx_r329.isAllSelected)("source", ctx_r329.source);
} }
function Ng2SmartTableTheadComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    var _r336 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 4);
    i0.ɵɵlistener("create", function Ng2SmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) { i0.ɵɵrestoreView(_r336); var ctx_r335 = i0.ɵɵnextContext(); return ctx_r335.create.emit($event); })("filter", function Ng2SmartTableTheadComponent_tr_1_Template_tr_filter_0_listener($event) { i0.ɵɵrestoreView(_r336); var ctx_r337 = i0.ɵɵnextContext(); return ctx_r337.filter.emit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r330 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r330.grid)("source", ctx_r330.source);
} }
function Ng2SmartTableTheadComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 5);
} if (rf & 2) {
    var ctx_r331 = i0.ɵɵnextContext();
    i0.ɵɵproperty("grid", ctx_r331.grid)("createConfirm", ctx_r331.createConfirm);
} }
var Ng2SmartTableTheadComponent = /** @class */ (function () {
    function Ng2SmartTableTheadComponent() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    Ng2SmartTableTheadComponent.prototype.ngOnChanges = function () {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    };
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
    return Ng2SmartTableTheadComponent;
}());
export { Ng2SmartTableTheadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQuY29tcG9uZW50LnRzIiwibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7Ozs7Ozs7SUNIL0QsNkJBT0s7SUFGdUIseUtBQVEsMEJBQWlCLElBQUMsOEtBQ1QsbUNBQTBCLElBRGpCO0lBRXRELGlCQUFLOzs7SUFMdUIsb0NBQWEseUNBQUEsMkJBQUE7Ozs7SUFPekMsNkJBTUs7SUFGeUIsNktBQVUsNEJBQW1CLElBQUMsZ0tBQ3BCLDRCQUFtQixJQURDO0lBRTVELGlCQUFLOzs7SUFKeUIsb0NBQWEsMkJBQUE7OztJQU0zQyx3QkFHSzs7O0lBRnFCLG9DQUFhLHlDQUFBOztBRGJ2QztJQUFBO1FBV2MsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0Isa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBUzlDO0lBSkMsaURBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDOzBHQWxCUSwyQkFBMkI7b0VBQTNCLDJCQUEyQjtZQ1R4QywwRUFPQTtZQUVBLDBFQU1BO1lBRUEsMEVBR0E7O1lBcEI0Qix3Q0FBcUI7WUFTcEIsZUFBd0I7WUFBeEIsMkNBQXdCO1lBUTNCLGVBQTRCO1lBQTVCLCtDQUE0Qjs7c0NEakJ0RDtDQTRCQyxBQXZCRCxJQXVCQztTQW5CWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsV0FBVyxFQUFFLHdCQUF3QjthQUN4Qzs7a0JBR0ksS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBRUwsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdbbmcyLXN0LXRoZWFkXScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RoZWFkLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTmcyU21hcnRUYWJsZVRoZWFkQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gICAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICAgIEBJbnB1dCgpIGlzQWxsU2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgQElucHV0KCkgY3JlYXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG5cbiAgICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBzZWxlY3RBbGxSb3dzID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBmaWx0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGlzSGlkZUhlYWRlcjogYm9vbGVhbjtcbiAgICBpc0hpZGVTdWJIZWFkZXI6IGJvb2xlYW47XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICB0aGlzLmlzSGlkZUhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlSGVhZGVyJyk7XG4gICAgICB0aGlzLmlzSGlkZVN1YkhlYWRlciA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdoaWRlU3ViSGVhZGVyJyk7XG4gICAgfVxufVxuIiwiPHRyIG5nMi1zdC10aGVhZC10aXRsZXMtcm93ICpuZ0lmPVwiIWlzSGlkZUhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtdGl0bGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZ3JpZF09XCJncmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNBbGxTZWxlY3RlZF09XCJpc0FsbFNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNvcnQpPVwic29ydC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RBbGxSb3dzKT1cInNlbGVjdEFsbFJvd3MuZW1pdCgkZXZlbnQpXCI+XG48L3RyPlxuXG48dHIgbmcyLXN0LXRoZWFkLWZpbHRlcnMtcm93ICpuZ0lmPVwiIWlzSGlkZVN1YkhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm5nMi1zbWFydC1maWx0ZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtncmlkXT1cImdyaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNyZWF0ZSk9XCJjcmVhdGUuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwiZmlsdGVyLmVtaXQoJGV2ZW50KVwiPlxuPC90cj5cblxuPHRyIG5nMi1zdC10aGVhZC1mb3JtLXJvdyAqbmdJZj1cImdyaWQuY3JlYXRlRm9ybVNob3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2dyaWRdPVwiZ3JpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjcmVhdGVDb25maXJtXT1cImNyZWF0ZUNvbmZpcm1cIj5cbjwvdHI+XG4iXX0=