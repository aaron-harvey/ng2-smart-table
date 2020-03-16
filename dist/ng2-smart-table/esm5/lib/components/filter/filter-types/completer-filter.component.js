import { __extends } from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { CompleterService } from 'ng2-completer';
import { DefaultFilter } from './default-filter';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng2-completer";
import * as i2 from "@angular/forms";
var CompleterFilterComponent = /** @class */ (function (_super) {
    __extends(CompleterFilterComponent, _super);
    function CompleterFilterComponent(completerService) {
        var _this = _super.call(this) || this;
        _this.completerService = completerService;
        _this.completerContent = new Subject();
        return _this;
    }
    CompleterFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.column.getFilterConfig().completer;
        config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        config.dataService.descriptionField(config.descriptionField);
        this.changesSubscription = this.completerContent
            .pipe(map(function (ev) { return (ev && ev.title) || ev || ''; }), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe(function (search) {
            _this.query = search;
            _this.setFilter();
        });
    };
    CompleterFilterComponent.prototype.inputTextChanged = function (event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    };
    CompleterFilterComponent.ɵfac = function CompleterFilterComponent_Factory(t) { return new (t || CompleterFilterComponent)(i0.ɵɵdirectiveInject(i1.CompleterService)); };
    CompleterFilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CompleterFilterComponent, selectors: [["completer-filter"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[3, "ngModel", "dataService", "minSearchLength", "pause", "placeholder", "ngModelChange", "selected"]], template: function CompleterFilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ng2-completer", 0);
            i0.ɵɵlistener("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.query = $event; })("ngModelChange", function CompleterFilterComponent_Template_ng2_completer_ngModelChange_0_listener($event) { return ctx.inputTextChanged($event); })("selected", function CompleterFilterComponent_Template_ng2_completer_selected_0_listener($event) { return ctx.completerContent.next($event); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.query)("dataService", ctx.column.getFilterConfig().completer.dataService)("minSearchLength", ctx.column.getFilterConfig().completer.minSearchLength || 0)("pause", ctx.column.getFilterConfig().completer.pause || 0)("placeholder", ctx.column.getFilterConfig().completer.placeholder || "Start typing...");
        } }, directives: [i1.CompleterCmp, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
    return CompleterFilterComponent;
}(DefaultFilter));
export { CompleterFilterComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CompleterFilterComponent, [{
        type: Component,
        args: [{
                selector: 'completer-filter',
                template: "\n    <ng2-completer [(ngModel)]=\"query\"\n                   (ngModelChange)=\"inputTextChanged($event)\"\n                   [dataService]=\"column.getFilterConfig().completer.dataService\"\n                   [minSearchLength]=\"column.getFilterConfig().completer.minSearchLength || 0\"\n                   [pause]=\"column.getFilterConfig().completer.pause || 0\"\n                   [placeholder]=\"column.getFilterConfig().completer.placeholder || 'Start typing...'\"\n                   (selected)=\"completerContent.next($event)\">\n    </ng2-completer>\n  ",
            }]
    }], function () { return [{ type: i1.CompleterService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2NvbXBsZXRlci1maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXpFO0lBYThDLDRDQUFhO0lBSXpELGtDQUFvQixnQkFBa0M7UUFBdEQsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFGdEQsc0JBQWdCLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQzs7SUFJdEMsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFBQSxpQkFlQztRQWRDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3RHLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFN0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxnQkFBZ0I7YUFDN0MsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEVBQU8sSUFBSyxPQUFBLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUE1QixDQUE0QixDQUFDLEVBQzlDLG9CQUFvQixFQUFFLEVBQ3RCLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxDQUFDLFVBQUMsTUFBYztZQUN4QixLQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztZQUNwQixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbURBQWdCLEdBQWhCLFVBQWlCLEtBQWE7UUFDNUIsK0VBQStFO1FBQy9FLGlHQUFpRztRQUNqRyxrQ0FBa0M7UUFDbEMsSUFBSSxLQUFLLEtBQUssRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO29HQWhDVSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQVZqQyx3Q0FPZ0I7WUFQRCx3SkFBbUIscUhBQ0YsNEJBQXdCLElBRHRCLDJHQU1QLGlDQUE2QixJQU50QjtZQU9sQyxpQkFBZ0I7O1lBUEQsbUNBQW1CLG1FQUFBLGdGQUFBLDREQUFBLHdGQUFBOzttQ0FWdEM7Q0FxREMsQUE5Q0QsQ0FhOEMsYUFBYSxHQWlDMUQ7U0FqQ1ksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FicEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSx3akJBU1Q7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb21wbGV0ZXJTZXJ2aWNlIH0gZnJvbSAnbmcyLWNvbXBsZXRlcic7XG5cbmltcG9ydCB7IERlZmF1bHRGaWx0ZXIgfSBmcm9tICcuL2RlZmF1bHQtZmlsdGVyJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBkZWJvdW5jZVRpbWUsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tcGxldGVyLWZpbHRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nMi1jb21wbGV0ZXIgWyhuZ01vZGVsKV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiaW5wdXRUZXh0Q2hhbmdlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICBbZGF0YVNlcnZpY2VdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5kYXRhU2VydmljZVwiXG4gICAgICAgICAgICAgICAgICAgW21pblNlYXJjaExlbmd0aF09XCJjb2x1bW4uZ2V0RmlsdGVyQ29uZmlnKCkuY29tcGxldGVyLm1pblNlYXJjaExlbmd0aCB8fCAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGF1c2VdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5wYXVzZSB8fCAwXCJcbiAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29sdW1uLmdldEZpbHRlckNvbmZpZygpLmNvbXBsZXRlci5wbGFjZWhvbGRlciB8fCAnU3RhcnQgdHlwaW5nLi4uJ1wiXG4gICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkKT1cImNvbXBsZXRlckNvbnRlbnQubmV4dCgkZXZlbnQpXCI+XG4gICAgPC9uZzItY29tcGxldGVyPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb21wbGV0ZXJGaWx0ZXJDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RmlsdGVyIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb21wbGV0ZXJDb250ZW50ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcGxldGVyU2VydmljZTogQ29tcGxldGVyU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBjb25maWcgPSB0aGlzLmNvbHVtbi5nZXRGaWx0ZXJDb25maWcoKS5jb21wbGV0ZXI7XG4gICAgY29uZmlnLmRhdGFTZXJ2aWNlID0gdGhpcy5jb21wbGV0ZXJTZXJ2aWNlLmxvY2FsKGNvbmZpZy5kYXRhLCBjb25maWcuc2VhcmNoRmllbGRzLCBjb25maWcudGl0bGVGaWVsZCk7XG4gICAgY29uZmlnLmRhdGFTZXJ2aWNlLmRlc2NyaXB0aW9uRmllbGQoY29uZmlnLmRlc2NyaXB0aW9uRmllbGQpO1xuXG4gICAgdGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uID0gdGhpcy5jb21wbGV0ZXJDb250ZW50XG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChldjogYW55KSA9PiAoZXYgJiYgZXYudGl0bGUpIHx8IGV2IHx8ICcnKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVsYXkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChzZWFyY2g6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gc2VhcmNoO1xuICAgICAgICB0aGlzLnNldEZpbHRlcigpO1xuICAgICAgfSk7XG4gIH1cblxuICBpbnB1dFRleHRDaGFuZ2VkKGV2ZW50OiBzdHJpbmcpIHtcbiAgICAvLyB3b3JrYXJvdW5kIHRvIHRyaWdnZXIgdGhlIHNlYXJjaCBldmVudCB3aGVuIHRoZSBob21lL2VuZCBidXR0b25zIGFyZSBjbGlja2VkXG4gICAgLy8gd2hlbiB0aGlzIGhhcHBlbnMgdGhlIFsobmdNb2RlbCldPVwicXVlcnlcIiBpcyBzZXQgdG8gXCJcIiBidXQgdGhlIChzZWxlY3RlZCkgbWV0aG9kIGlzIG5vdCBjYWxsZWRcbiAgICAvLyBzbyBoZXJlIGl0IGdldHMgY2FsbGVkIG1hbnVhbGx5XG4gICAgaWYgKGV2ZW50ID09PSAnJykge1xuICAgICAgdGhpcy5jb21wbGV0ZXJDb250ZW50Lm5leHQoZXZlbnQpO1xuICAgIH1cbiAgfVxufVxuIl19