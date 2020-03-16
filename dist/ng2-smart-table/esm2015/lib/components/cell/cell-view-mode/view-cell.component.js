import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./custom-view.component";
function ViewCellComponent_custom_view_component_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "custom-view-component", 4);
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r44.cell);
} }
function ViewCellComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 5);
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r45.cell.getValue(), i0.ɵɵsanitizeHtml);
} }
function ViewCellComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r46.cell.getValue());
} }
export class ViewCellComponent {
}
ViewCellComponent.ɵfac = function ViewCellComponent_Factory(t) { return new (t || ViewCellComponent)(); };
ViewCellComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ViewCellComponent, selectors: [["table-cell-view-mode"]], inputs: { cell: "cell" }, decls: 4, vars: 3, consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML"]], template: function ViewCellComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1);
        i0.ɵɵtemplate(2, ViewCellComponent_div_2_Template, 1, 1, "div", 2);
        i0.ɵɵtemplate(3, ViewCellComponent_div_3_Template, 2, 1, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", ctx.cell.getColumn().type);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "custom");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "html");
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.CustomViewComponent], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ViewCellComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-view-mode',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `,
            }]
    }], null, { cell: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7O0lBTzFDLDJDQUFzRjs7O0lBQXRDLG1DQUFhOzs7SUFDN0QseUJBQWdFOzs7SUFBcEMsc0VBQTZCOzs7SUFDekQsMkJBQXNCO0lBQUEsWUFBcUI7SUFBQSxpQkFBTTs7O0lBQTNCLGVBQXFCO0lBQXJCLDZDQUFxQjs7QUFJbkQsTUFBTSxPQUFPLGlCQUFpQjs7a0ZBQWpCLGlCQUFpQjtzREFBakIsaUJBQWlCO1FBUDFCLDhCQUNJO1FBQUEsc0dBQThEO1FBQzlELGtFQUEwRDtRQUMxRCxrRUFBc0I7UUFDMUIsaUJBQU07O1FBSkQsb0RBQWtDO1FBQ1osZUFBd0I7UUFBeEIsdUNBQXdCO1FBQzFDLGVBQXNCO1FBQXRCLHFDQUFzQjs7a0RBS3RCLGlCQUFpQjtjQVg3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7O0tBTVA7YUFDSjs7a0JBR0UsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC12aWV3LW1vZGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ1N3aXRjaF09XCJjZWxsLmdldENvbHVtbigpLnR5cGVcIj5cbiAgICAgICAgPGN1c3RvbS12aWV3LWNvbXBvbmVudCAqbmdTd2l0Y2hDYXNlPVwiJ2N1c3RvbSdcIiBbY2VsbF09XCJjZWxsXCI+PC9jdXN0b20tdmlldy1jb21wb25lbnQ+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidodG1sJ1wiIFtpbm5lckhUTUxdPVwiY2VsbC5nZXRWYWx1ZSgpXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgKm5nU3dpdGNoRGVmYXVsdD57eyBjZWxsLmdldFZhbHVlKCkgfX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBWaWV3Q2VsbENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY2VsbDogQ2VsbDtcbn1cbiJdfQ==