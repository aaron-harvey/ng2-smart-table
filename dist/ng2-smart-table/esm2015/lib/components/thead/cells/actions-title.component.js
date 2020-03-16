import { Component, Input, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import * as i0 from "@angular/core";
const _c0 = ["ng2-st-actions-title", ""];
export class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
}
ActionsTitleComponent.ɵfac = function ActionsTitleComponent_Factory(t) { return new (t || ActionsTitleComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ActionsTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ActionsTitleComponent, selectors: [["", "ng2-st-actions-title", ""]], inputs: { grid: "grid" }, features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 2, vars: 1, consts: [[1, "ng2-smart-title"]], template: function ActionsTitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.actionsColumnTitle);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ActionsTitleComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-actions-title]',
                template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { grid: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy10aXRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hY3Rpb25zLXRpdGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBaUIsVUFBVSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXJGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBUXpDLE1BQU0sT0FBTyxxQkFBcUI7SUFNaEMsWUFBb0IsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7SUFDbkMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUN4RSxDQUFDOzswRkFmVSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQUg5Qiw4QkFBNkI7UUFBQSxZQUF3QjtRQUFBLGlCQUFNOztRQUE5QixlQUF3QjtRQUF4Qiw0Q0FBd0I7O2tEQUc1QyxxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7R0FFVDthQUNGOztrQkFHRSxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmcyLXN0LWFjdGlvbnMtdGl0bGVdJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibmcyLXNtYXJ0LXRpdGxlXCI+e3sgYWN0aW9uc0NvbHVtblRpdGxlIH19PC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGlvbnNUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcblxuICBhY3Rpb25zQ29sdW1uVGl0bGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmcyLXNtYXJ0LWFjdGlvbnMnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuYWN0aW9uc0NvbHVtblRpdGxlID0gdGhpcy5ncmlkLmdldFNldHRpbmcoJ2FjdGlvbnMuY29sdW1uVGl0bGUnKTtcbiAgfVxufVxuIl19