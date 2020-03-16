import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../../lib/grid';
import * as i0 from "@angular/core";
var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.create = new EventEmitter();
    }
    ActionsComponent.prototype.ngOnChanges = function () {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    };
    ActionsComponent.ɵfac = function ActionsComponent_Factory(t) { return new (t || ActionsComponent)(); };
    ActionsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ActionsComponent, selectors: [["ng2-st-actions"]], inputs: { grid: "grid" }, outputs: { create: "create" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-create", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-cancel", 3, "innerHTML", "click"]], template: function ActionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵlistener("click", function ActionsComponent_Template_a_click_0_listener($event) { $event.preventDefault(); return ctx.create.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function ActionsComponent_Template_a_click_1_listener($event) { $event.preventDefault(); return ctx.grid.createFormShown = false; });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("innerHTML", ctx.createButtonContent, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", ctx.cancelButtonContent, i0.ɵɵsanitizeHtml);
        } }, encapsulation: 2 });
    return ActionsComponent;
}());
export { ActionsComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActionsComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-actions',
                template: "\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-create\"\n        [innerHTML]=\"createButtonContent\"\n        (click)=\"$event.preventDefault();create.emit($event)\"></a>\n    <a href=\"#\" class=\"ng2-smart-action ng2-smart-action-add-cancel\"\n        [innerHTML]=\"cancelButtonContent\"\n        (click)=\"$event.preventDefault();grid.createFormShown = false;\"></a>\n  ",
            }]
    }], null, { grid: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFekM7SUFBQTtRQWNZLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBUzVDO0lBSkMsc0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdFLENBQUM7b0ZBWFUsZ0JBQWdCO3lEQUFoQixnQkFBZ0I7WUFSekIsNEJBRThEO1lBQTFELHVGQUFTLHVCQUF1QixTQUFDLHVCQUFtQixJQUFDO1lBQUMsaUJBQUk7WUFDOUQsNEJBRXdFO1lBQXBFLHVGQUFTLHVCQUF1QixvQ0FBd0IsS0FBSyxJQUFFO1lBQUMsaUJBQUk7O1lBSnBFLHNFQUFpQztZQUdqQyxlQUFpQztZQUFqQyxzRUFBaUM7OzJCQVh6QztDQTJCQyxBQXZCRCxJQXVCQztTQVpZLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBWDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsMFlBT1Q7YUFDRjs7a0JBR0UsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc3QtYWN0aW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1hZGQtY3JlYXRlXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJjcmVhdGVCdXR0b25Db250ZW50XCJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO2NyZWF0ZS5lbWl0KCRldmVudClcIj48L2E+XG4gICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1hZGQtY2FuY2VsXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJjYW5jZWxCdXR0b25Db250ZW50XCJcbiAgICAgICAgKGNsaWNrKT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpO2dyaWQuY3JlYXRlRm9ybVNob3duID0gZmFsc2U7XCI+PC9hPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuICBAT3V0cHV0KCkgY3JlYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY3JlYXRlQnV0dG9uQ29udGVudDogc3RyaW5nO1xuICBjYW5jZWxCdXR0b25Db250ZW50OiBzdHJpbmc7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5jcmVhdGVCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5jcmVhdGVCdXR0b25Db250ZW50Jyk7XG4gICAgdGhpcy5jYW5jZWxCdXR0b25Db250ZW50ID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FkZC5jYW5jZWxCdXR0b25Db250ZW50Jyk7XG4gIH1cbn1cbiJdfQ==