import { Component, Input, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import * as i0 from "@angular/core";
var _c0 = ["ng2-st-actions-title", ""];
var ActionsTitleComponent = /** @class */ (function () {
    function ActionsTitleComponent(ref) {
        this.ref = ref;
    }
    ActionsTitleComponent.prototype.ngAfterViewInit = function () {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    };
    ActionsTitleComponent.prototype.ngOnChanges = function () {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    };
    ActionsTitleComponent.ɵfac = function ActionsTitleComponent_Factory(t) { return new (t || ActionsTitleComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ActionsTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ActionsTitleComponent, selectors: [["", "ng2-st-actions-title", ""]], inputs: { grid: "grid" }, features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 2, vars: 1, consts: [[1, "ng2-smart-title"]], template: function ActionsTitleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.actionsColumnTitle);
        } }, encapsulation: 2 });
    return ActionsTitleComponent;
}());
export { ActionsTitleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActionsTitleComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-actions-title]',
                template: "\n    <div class=\"ng2-smart-title\">{{ actionsColumnTitle }}</div>\n  ",
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { grid: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXJGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBRXpDO0lBWUUsK0JBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQ25DLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEUsQ0FBQzs4RkFmVSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQUg5Qiw4QkFBNkI7WUFBQSxZQUF3QjtZQUFBLGlCQUFNOztZQUE5QixlQUF3QjtZQUF4Qiw0Q0FBd0I7O2dDQVB6RDtDQTBCQyxBQXRCRCxJQXNCQztTQWhCWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQU5qQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFLHlFQUVUO2FBQ0Y7O2tCQUdFLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE9uQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZzItc3QtYWN0aW9ucy10aXRsZV0nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuZzItc21hcnQtdGl0bGVcIj57eyBhY3Rpb25zQ29sdW1uVGl0bGUgfX08L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aW9uc1RpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBncmlkOiBHcmlkO1xuXG4gIGFjdGlvbnNDb2x1bW5UaXRsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5yZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCduZzItc21hcnQtYWN0aW9ucycpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5hY3Rpb25zQ29sdW1uVGl0bGUgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5jb2x1bW5UaXRsZScpO1xuICB9XG59XG4iXX0=