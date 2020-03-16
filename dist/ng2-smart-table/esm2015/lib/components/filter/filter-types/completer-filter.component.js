import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CompleterService } from 'ng2-completer';
import { DefaultFilter } from './default-filter';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng2-completer";
import * as i2 from "@angular/forms";
export class CompleterFilterComponent extends DefaultFilter {
    constructor(completerService) {
        super();
        this.completerService = completerService;
        this.completerContent = new Subject();
    }
    ngOnInit() {
        const config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(map((ev) => (ev && ev.title) || ev || ''), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((search) => {
            this.query = search;
            this.setFilter();
        });
    }
    inputTextChanged(event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    }
}
CompleterFilterComponent.ɵfac = function CompleterFilterComponent_Factory(t) { return new (t || CompleterFilterComponent)(i0.ɵɵdirectiveInject(i1.CompleterService)); };
CompleterFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CompleterFilterComponent, selectors: [["completer-filter"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterFilterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ng2-completer", 0);
        i0.ɵɵlistener("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.query = $event; })("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.inputTextChanged($event); })("selected", function CompleterFilterComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.completerContent.next($event); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngModel", ctx.query)("dataService", ctx.column.getFilterConfig().completer.dataService)("minSearchLength", ctx.column.getFilterConfig().completer.minSearchLength || 0)("pause", ctx.column.getFilterConfig().completer.pause || 0)("placeholder", ctx.column.getFilterConfig().completer.placeholder || "Start typing...");
    } }, directives: [i1.CompleterCmp, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CompleterFilterComponent, [{
        type: Component,
        args: [{
                selector: 'completer-filter',
                template: `
    <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ng2-completer>
  `,
            }]
    }], function () { return [{ type: i1.CompleterService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2NvbXBsZXRlci1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFlekUsTUFBTSxPQUFPLHdCQUF5QixTQUFRLGFBQWE7SUFJekQsWUFBb0IsZ0JBQWtDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBRFUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUZ0RCxxQkFBZ0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO0lBSXRDLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDdkQsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdEcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU3RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQjthQUM3QyxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUM5QyxvQkFBb0IsRUFBRSxFQUN0QixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxDQUFDLE1BQWMsRUFBRSxFQUFFO1lBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzVCLCtFQUErRTtRQUMvRSxpR0FBaUc7UUFDakcsa0NBQWtDO1FBQ2xDLElBQUksS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Z0dBaENVLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FBVmpDLHdDQU9nQjtRQVBELHdKQUFtQixxSEFDRiw0QkFBd0IsSUFEdEIsMkdBTVAsaUNBQTZCLElBTnRCO1FBT2xDLGlCQUFnQjs7UUFQRCxtQ0FBbUIsbUVBQUEsZ0ZBQUEsNERBQUEsd0ZBQUE7O2tEQVV6Qix3QkFBd0I7Y0FicEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wbGV0ZXJTZXJ2aWNlIH0gZnJvbSAnbmcyLWNvbXBsZXRlcic7XG5cbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2RlZmF1bHQtZmlsdGVyJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBkZWJvdW5jZVRpbWUsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcGxldGVyLWZpbHRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nMi1jb21wbGV0ZXIgWyhuZ01vZGVsKV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiaW5wdXRUZXh0Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICBbZGF0YVNlcnZpY2VdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5kYXRhU2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgW21pblNlYXJjaExlbmd0aF09XCJjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyLm1pblNlYXJjaExlbmd0aCB8fCAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGF1c2VdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5wYXVzZSB8fCAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5wbGFjZWhvbGRlciB8fCAnU3RhcnQgdHlwaW5nLi4uJ1wiXG4gICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkKT1cImNvbXBsZXRlckNvbnRlbnQubmV4dCgkZXZlbnQpXCI+XG4gICAgPC9uZzItY29tcGxldGVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wbGV0ZXJGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb21wbGV0ZXJDb250ZW50ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGxldGVyU2VydmljZTogQ29tcGxldGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5jb21wbGV0ZXI7XG4gICAgY29uZmlnLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLmxvY2FsKGNvbmZpZy5kYXRhLCBjb25maWcuc2VhcmNoRmllbGRzLCBjb25maWcudGl0bGVGaWVsZCk7XG4gICAgY29uZmlnLmRhdGFTZXJ2aWNlLmRlc2NyaXB0aW9uRmllbGQoY29uZmlnLmRlc2NyaXB0aW9uRmllbGQpO1xuXG4gICAgdGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5jb21wbGV0ZXJDb250ZW50XG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChldjogYW55KSA9PiAoZXYgJiYgZXYudGl0bGUpIHx8IGV2IHx8ICcnKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVsYXkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChzZWFyY2g6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gc2VhcmNoO1xuICAgICAgICB0aGlzLnNldEZpbHRlcigpO1xuICAgICAgfSk7XG4gIH1cblxuICBpbnB1dFRleHRDaGFuZ2VkKGV2ZW50OiBzdHJpbmcpIHtcbiAgICAvLyB3b3JrYXJvdW5kIHRvIHRyaWdnZXIgdGhlIHNlYXJjaCBldmVudCB3aGVuIHRoZSBob21lL2VuZCBidXR0b25zIGFyZSBjbGlja2VkXG4gICAgLy8gd2hlbiB0aGlzIGhhcHBlbnMgdGhlIFsobmdNb2RlbCldPVwicXVlcnlcIiBpcyBzZXQgdG8gXCJcIiBidXQgdGhlIChzZWxlY3RlZCkgbWV0aG9kIGlzIG5vdCBjYWxsZWRcbiAgICAvLyBzbyBoZXJlIGl0IGdldHMgY2FsbGVkIG1hbnVhbGx5XG4gICAgaWYgKGV2ZW50ID09PSAnJykge1xuICAgICAgdGhpcy5jb21wbGV0ZXJDb250ZW50Lm5leHQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19