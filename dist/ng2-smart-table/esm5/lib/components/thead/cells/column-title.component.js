import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "./title/title.component";
var ColumnTitleComponent = /** @class */ (function () {
    function ColumnTitleComponent() {
        this.sort = new EventEmitter();
    }
    ColumnTitleComponent.ɵfac = function ColumnTitleComponent_Factory(t) { return new (t || ColumnTitleComponent)(); };
    ColumnTitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ColumnTitleComponent, selectors: [["ng2-st-column-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, decls: 2, vars: 2, consts: [[1, "ng2-smart-title"], [3, "source", "column", "sort"]], template: function ColumnTitleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "ng2-smart-table-title", 1);
            i0.ɵɵlistener("sort", function ColumnTitleComponent_Template_ng2_smart_table_title_sort_1_listener($event) { return ctx.sort.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("source", ctx.source)("column", ctx.column);
        } }, directives: [i1.TitleComponent], encapsulation: 2 });
    return ColumnTitleComponent;
}());
export { ColumnTitleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ColumnTitleComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-column-title',
                template: "\n    <div class=\"ng2-smart-title\">\n      <ng2-smart-table-title [source]=\"source\" [column]=\"column\" (sort)=\"sort.emit($event)\"></ng2-smart-table-title>\n    </div>\n  ",
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXRpdGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3RoZWFkL2NlbGxzL2NvbHVtbi10aXRsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7QUFFbEU7SUFBQTtRQWFZLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBRTFDOzRGQVBZLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lBTDdCLDhCQUNFO1lBQUEsZ0RBQThHO1lBQW5ELG9IQUFRLHFCQUFpQixJQUFDO1lBQUMsaUJBQXdCO1lBQ2hILGlCQUFNOztZQURtQixlQUFpQjtZQUFqQixtQ0FBaUIsc0JBQUE7OytCQVQ5QztDQW9CQyxBQWZELElBZUM7U0FQWSxvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQVJoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1MQUlUO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc3QtY29sdW1uLXRpdGxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwibmcyLXNtYXJ0LXRpdGxlXCI+XG4gICAgICA8bmcyLXNtYXJ0LXRhYmxlLXRpdGxlIFtzb3VyY2VdPVwic291cmNlXCIgW2NvbHVtbl09XCJjb2x1bW5cIiAoc29ydCk9XCJzb3J0LmVtaXQoJGV2ZW50KVwiPjwvbmcyLXNtYXJ0LXRhYmxlLXRpdGxlPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5UaXRsZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgY29sdW1uOiBDb2x1bW47XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcblxuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG59XG4iXX0=