import { Input, Output, EventEmitter, Directive } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
import * as i0 from "@angular/core";
var DefaultFilter = /** @class */ (function () {
    function DefaultFilter() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    DefaultFilter.prototype.ngOnDestroy = function () {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    };
    DefaultFilter.prototype.setFilter = function () {
        this.filter.emit(this.query);
    };
    DefaultFilter.ɵfac = function DefaultFilter_Factory(t) { return new (t || DefaultFilter)(); };
    DefaultFilter.ɵdir = i0.ɵɵdefineDirective({ type: DefaultFilter, inputs: { query: "query", inputClass: "inputClass", column: "column" }, outputs: { filter: "filter" } });
    return DefaultFilter;
}());
export { DefaultFilter };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultFilter, [{
        type: Directive
    }], null, { query: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], column: [{
            type: Input
        }], filter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1maWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLXR5cGVzL2RlZmF1bHQtZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbEYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUV0RDtJQUFBO1FBR0UsVUFBSyxHQUFXLEdBQUcsQ0FBQztRQUtWLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0tBVy9DO0lBVEMsbUNBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxpQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7OEVBakJVLGFBQWE7c0RBQWIsYUFBYTt3QkFOMUI7Q0F3QkMsQUFuQkQsSUFtQkM7U0FsQlksYUFBYTtrREFBYixhQUFhO2NBRHpCLFNBQVM7O2tCQUtQLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIERlZmF1bHRGaWx0ZXIgaW1wbGVtZW50cyBGaWx0ZXIsIE9uRGVzdHJveSB7XG5cbiAgZGVsYXk6IG51bWJlciA9IDMwMDtcbiAgY2hhbmdlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBASW5wdXQoKSBxdWVyeTogc3RyaW5nO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uO1xuICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlc1N1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5jaGFuZ2VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyKCkge1xuICAgIHRoaXMuZmlsdGVyLmVtaXQodGhpcy5xdWVyeSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXIge1xuXG4gIGRlbGF5PzogbnVtYmVyO1xuICBjaGFuZ2VzU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuICBxdWVyeTogc3RyaW5nO1xuICBpbnB1dENsYXNzOiBzdHJpbmc7XG4gIGNvbHVtbjogQ29sdW1uO1xuICBmaWx0ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+O1xufVxuIl19