import { Output, EventEmitter, Input, Directive } from '@angular/core';
import { Column } from '../../lib/data-set/column';
import { DataSource } from '../../lib/data-source/data-source';
import * as i0 from "@angular/core";
var FilterDefault = /** @class */ (function () {
    function FilterDefault() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    FilterDefault.prototype.onFilter = function (query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    };
    FilterDefault.ɵfac = function FilterDefault_Factory(t) { return new (t || FilterDefault)(); };
    FilterDefault.ɵdir = i0.ɵɵdefineDirective({ type: FilterDefault, inputs: { column: "column", source: "source", inputClass: "inputClass" }, outputs: { filter: "filter" } });
    return FilterDefault;
}());
export { FilterDefault };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterDefault, [{
        type: Directive
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], filter: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWRlZmF1bHQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLWRlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUUvRDtJQUFBO1FBS1csZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUUzQyxVQUFLLEdBQVcsRUFBRSxDQUFDO0tBU3BCO0lBUEMsZ0NBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDcEIsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQixNQUFNLEVBQUUsS0FBSztZQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1NBQ3hDLENBQUMsQ0FBQztJQUNMLENBQUM7OEVBaEJVLGFBQWE7c0RBQWIsYUFBYTt3QkFOMUI7Q0F1QkMsQUFsQkQsSUFrQkM7U0FqQlksYUFBYTtrREFBYixhQUFhO2NBRHpCLFNBQVM7O2tCQUdQLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zZXQvY29sdW1uJztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJEZWZhdWx0IHtcblxuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmcgPSAnJztcblxuICBAT3V0cHV0KCkgZmlsdGVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcXVlcnk6IHN0cmluZyA9ICcnO1xuXG4gIG9uRmlsdGVyKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICB0aGlzLnNvdXJjZS5hZGRGaWx0ZXIoe1xuICAgICAgZmllbGQ6IHRoaXMuY29sdW1uLmlkLFxuICAgICAgc2VhcmNoOiBxdWVyeSxcbiAgICAgIGZpbHRlcjogdGhpcy5jb2x1bW4uZ2V0RmlsdGVyRnVuY3Rpb24oKSxcbiAgICB9KTtcbiAgfVxufVxuIl19