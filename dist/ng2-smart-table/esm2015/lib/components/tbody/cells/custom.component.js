import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Row } from '../../../lib/data-set/row';
import { Grid } from '../../../lib/grid';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TbodyCustomComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 1);
    i0.ɵɵlistener("click", function TbodyCustomComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r140); const action_r138 = ctx.$implicit; const ctx_r139 = i0.ɵɵnextContext(); return ctx_r139.onCustom(action_r138, $event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r138 = ctx.$implicit;
    i0.ɵɵproperty("innerHTML", action_r138.title, i0.ɵɵsanitizeHtml);
} }
export class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
}
TbodyCustomComponent.ɵfac = function TbodyCustomComponent_Factory(t) { return new (t || TbodyCustomComponent)(); };
TbodyCustomComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TbodyCustomComponent, selectors: [["ng2-st-tbody-custom"]], inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-custom-custom", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-custom-custom", 3, "innerHTML", "click"]], template: function TbodyCustomComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TbodyCustomComponent_a_0_Template, 1, 1, "a", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", ctx.grid.getSetting("actions.custom"));
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbodyCustomComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-tbody-custom',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], source: [{
            type: Input
        }], custom: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rib2R5L2NlbGxzL2N1c3RvbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoRyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7OztJQU1uQyw0QkFHMEM7SUFBdkMsaVBBQWtDO0lBQUMsaUJBQUk7OztJQUR2QyxnRUFBMEI7O0FBSW5DLE1BQU0sT0FBTyxvQkFBb0I7SUFWakM7UUFlYyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQWE5QztJQVhHLFFBQVEsQ0FBQyxNQUFXLEVBQUUsS0FBVTtRQUM1QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7d0ZBaEJRLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FBTjNCLGlFQUdzQzs7UUFIbkMsK0RBQXdEOztrREFNcEQsb0JBQW9CO2NBVmhDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7OztTQUtMO2FBQ1I7O2tCQUdJLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdyB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9yb3cnO1xuXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL2dyaWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nMi1zdC10Ym9keS1jdXN0b20nLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8YSAqbmdGb3I9XCJsZXQgYWN0aW9uIG9mIGdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5jdXN0b20nKVwiIGhyZWY9XCIjXCJcbiAgICAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LWFjdGlvbiBuZzItc21hcnQtYWN0aW9uLWN1c3RvbS1jdXN0b21cIiBcbiAgICAgICAgIFtpbm5lckhUTUxdPVwiYWN0aW9uLnRpdGxlXCJcbiAgICAgICAgIChjbGljayk9XCJvbkN1c3RvbShhY3Rpb24sICRldmVudClcIj48L2E+XG4gICAgICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgVGJvZHlDdXN0b21Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgICBASW5wdXQoKSByb3c6IFJvdztcbiAgICBASW5wdXQoKSBzb3VyY2U6IGFueTtcbiAgICBAT3V0cHV0KCkgY3VzdG9tID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBvbkN1c3RvbShhY3Rpb246IGFueSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICB0aGlzLmN1c3RvbS5lbWl0KHtcbiAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLm5hbWUsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnJvdy5nZXREYXRhKCksXG4gICAgICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlXG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19