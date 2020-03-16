import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["ng2-st-add-button", ""];
function AddButtonComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r152 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 1);
    i0.ɵɵlistener("click", function AddButtonComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r152); const ctx_r151 = i0.ɵɵnextContext(); return ctx_r151.onAdd($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r150 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r150.addNewButtonContent, i0.ɵɵsanitizeHtml);
} }
export class AddButtonComponent {
    constructor(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    }
    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    }
    onAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    }
}
AddButtonComponent.ɵfac = function AddButtonComponent_Factory(t) { return new (t || AddButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AddButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AddButtonComponent, selectors: [["", "ng2-st-add-button", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create" }, features: [i0.ɵɵNgOnChangesFeature()], attrs: _c0, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-add-add", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-add", 3, "innerHTML", "click"]], template: function AddButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, AddButtonComponent_a_0_Template, 1, 1, "a", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isActionAdd);
    } }, directives: [i1.NgIf], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddButtonComponent, [{
        type: Component,
        args: [{
                selector: '[ng2-st-add-button]',
                template: `
    <a *ngIf="isActionAdd" href="#" class="ng2-smart-action ng2-smart-action-add-add"
        [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
  `,
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { grid: [{
            type: Input
        }], source: [{
            type: Input
        }], create: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90aGVhZC9jZWxscy9hZGQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFpQixVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7O0lBSzlELDRCQUNrRTtJQUE1Qiw0TEFBdUI7SUFBQyxpQkFBSTs7O0lBQTlELDJFQUFpQzs7QUFHekMsTUFBTSxPQUFPLGtCQUFrQjtJQVM3QixZQUFvQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUx6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQU0zQyxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ2QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07YUFDcEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUNsQztJQUNILENBQUM7O29GQS9CVSxrQkFBa0I7dURBQWxCLGtCQUFrQjtRQUozQiwrREFDOEQ7O1FBRDNELHNDQUFtQjs7a0RBSWIsa0JBQWtCO2NBUDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7OztHQUdUO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW25nMi1zdC1hZGQtYnV0dG9uXScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgKm5nSWY9XCJpc0FjdGlvbkFkZFwiIGhyZWY9XCIjXCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tYWRkLWFkZFwiXG4gICAgICAgIFtpbm5lckhUTUxdPVwiYWRkTmV3QnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvbkFkZCgkZXZlbnQpXCI+PC9hPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGdyaWQ6IEdyaWQ7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGlzQWN0aW9uQWRkOiBib29sZWFuO1xuICBhZGROZXdCdXR0b25Db250ZW50OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlJywgJ25nMi1zbWFydC1hY3Rpb25zLXRpdGxlLWFkZCcpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5pc0FjdGlvbkFkZCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmFkZCcpO1xuICAgIHRoaXMuYWRkTmV3QnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhZGQuYWRkQnV0dG9uQ29udGVudCcpO1xuICB9XG5cbiAgb25BZGQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdtb2RlJykgPT09ICdleHRlcm5hbCcpIHtcbiAgICAgIHRoaXMuY3JlYXRlLmVtaXQoe1xuICAgICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZ3JpZC5jcmVhdGVGb3JtU2hvd24gPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl19