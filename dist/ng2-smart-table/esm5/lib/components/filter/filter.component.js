import { __extends } from "tslib";
import { Component } from '@angular/core';
import { FilterDefault } from './filter-default';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./custom-filter.component";
import * as i3 from "./default-filter.component";
function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) { if (rf & 1) {
    var _r239 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "custom-table-filter", 4);
    i0.ɵɵlistener("filter", function FilterComponent_div_0_custom_table_filter_1_Template_custom_table_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r239); var ctx_r238 = i0.ɵɵnextContext(2); return ctx_r238.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r236 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("query", ctx_r236.query)("column", ctx_r236.column)("source", ctx_r236.source)("inputClass", ctx_r236.inputClass);
} }
function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) { if (rf & 1) {
    var _r241 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "default-table-filter", 4);
    i0.ɵɵlistener("filter", function FilterComponent_div_0_default_table_filter_2_Template_default_table_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r241); var ctx_r240 = i0.ɵɵnextContext(2); return ctx_r240.onFilter($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r237 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("query", ctx_r237.query)("column", ctx_r237.column)("source", ctx_r237.source)("inputClass", ctx_r237.inputClass);
} }
function FilterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 4, "custom-table-filter", 2);
    i0.ɵɵtemplate(2, FilterComponent_div_0_default_table_filter_2_Template, 1, 4, "default-table-filter", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r235 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r235.column.getFilterType());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "custom");
} }
var FilterComponent = /** @class */ (function (_super) {
    __extends(FilterComponent, _super);
    function FilterComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.query = '';
        return _this;
    }
    FilterComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var filterConf = _this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    _this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach(function (k, v) {
                        if (k.field == _this.column.id) {
                            _this.query = k.search;
                        }
                    });
                }
            });
        }
    };
    FilterComponent.ɵfac = function FilterComponent_Factory(t) { return ɵFilterComponent_BaseFactory(t || FilterComponent); };
    FilterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng2-smart-table-filter"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature()], decls: 1, vars: 1, consts: [["class", "ng2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "ng2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "filter"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, FilterComponent_div_0_Template, 3, 2, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.column.isFilterable);
        } }, directives: [i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.CustomFilterComponent, i3.DefaultFilterComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     .completer-dropdown-holder{font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"] });
    return FilterComponent;
}(FilterDefault));
export { FilterComponent };
var ɵFilterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(FilterComponent);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-filter',
                styleUrls: ['./filter.component.scss'],
                template: "\n      <div class=\"ng2-smart-filter\" *ngIf=\"column.isFilterable\" [ngSwitch]=\"column.getFilterType()\">\n        <custom-table-filter *ngSwitchCase=\"'custom'\"\n                             [query]=\"query\"\n                             [column]=\"column\"\n                             [source]=\"source\"\n                             [inputClass]=\"inputClass\"\n                             (filter)=\"onFilter($event)\">\n        </custom-table-filter>\n        <default-table-filter *ngSwitchDefault\n                              [query]=\"query\"\n                              [column]=\"column\"\n                              [source]=\"source\"\n                              [inputClass]=\"inputClass\"\n                              (filter)=\"onFilter($event)\">\n        </default-table-filter>\n      </div>\n    ",
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7SUFRekMsOENBTXNCO0lBREQsdU9BQTJCO0lBQ2hELGlCQUFzQjs7O0lBTEQsc0NBQWUsMkJBQUEsMkJBQUEsbUNBQUE7Ozs7SUFNcEMsK0NBTXVCO0lBREQseU9BQTJCO0lBQ2pELGlCQUF1Qjs7O0lBTEQsc0NBQWUsMkJBQUEsMkJBQUEsbUNBQUE7OztJQVR2Qyw4QkFDRTtJQUFBLHNHQU1BO0lBQ0Esd0dBTUE7SUFDRixpQkFBTTs7O0lBZm9ELDBEQUFtQztJQUN0RSxlQUF3QjtJQUF4Qix1Q0FBd0I7O0FBTHJEO0lBc0JxQyxtQ0FBYTtJQXRCbEQ7UUFBQSxxRUFnREM7UUF6QkMsV0FBSyxHQUFXLEVBQUUsQ0FBQzs7S0F5QnBCO0lBdEJDLHFDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUFsQyxpQkFxQkM7UUFwQkMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQztZQUNELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxXQUFXO2dCQUNsRSxJQUFNLFVBQVUsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDdkUsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBRWhCLGtGQUFrRjtvQkFDbEYsc0dBQXNHO2lCQUN2RztxQkFBTSxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDNUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBTTt3QkFDeEMsSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFOzRCQUM3QixLQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUM7eUJBQ3ZCO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7MEdBekJVLGVBQWU7d0RBQWYsZUFBZTtZQWxCdEIsZ0VBQ0U7O1lBRDRCLDhDQUEyQjs7MEJBUi9EO0NBb0RDLEFBaERELENBc0JxQyxhQUFhLEdBMEJqRDtTQTFCWSxlQUFlOzREQUFmLGVBQWU7a0RBQWYsZUFBZTtjQXRCM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN0QyxRQUFRLEVBQUUsdTBCQWlCUDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlckRlZmF1bHQgfSBmcm9tICcuL2ZpbHRlci1kZWZhdWx0JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtZmlsdGVyJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsdGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8ZGl2IGNsYXNzPVwibmcyLXNtYXJ0LWZpbHRlclwiICpuZ0lmPVwiY29sdW1uLmlzRmlsdGVyYWJsZVwiIFtuZ1N3aXRjaF09XCJjb2x1bW4uZ2V0RmlsdGVyVHlwZSgpXCI+XG4gICAgICAgIDxjdXN0b20tdGFibGUtZmlsdGVyICpuZ1N3aXRjaENhc2U9XCInY3VzdG9tJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb2x1bW5dPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZpbHRlcik9XCJvbkZpbHRlcigkZXZlbnQpXCI+XG4gICAgICAgIDwvY3VzdG9tLXRhYmxlLWZpbHRlcj5cbiAgICAgICAgPGRlZmF1bHQtdGFibGUtZmlsdGVyICpuZ1N3aXRjaERlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtxdWVyeV09XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29sdW1uXT1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmaWx0ZXIpPVwib25GaWx0ZXIoJGV2ZW50KVwiPlxuICAgICAgICA8L2RlZmF1bHQtdGFibGUtZmlsdGVyPlxuICAgICAgPC9kaXY+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyQ29tcG9uZW50IGV4dGVuZHMgRmlsdGVyRGVmYXVsdCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHF1ZXJ5OiBzdHJpbmcgPSAnJztcbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuICAgICAgaWYgKCFjaGFuZ2VzLnNvdXJjZS5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChkYXRhQ2hhbmdlcykgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJDb25mID0gdGhpcy5zb3VyY2UuZ2V0RmlsdGVyKCk7XG4gICAgICAgIGlmIChmaWx0ZXJDb25mICYmIGZpbHRlckNvbmYuZmlsdGVycyAmJiBmaWx0ZXJDb25mLmZpbHRlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5xdWVyeSA9ICcnO1xuXG4gICAgICAgICAgLy8gYWRkIGEgY2hlY2sgZm9yIGV4aXN0aW5nIGZpbHRlcnMgYW4gc2V0IHRoZSBxdWVyeSBpZiBvbmUgZXhpc3RzIGZvciB0aGlzIGNvbHVtblxuICAgICAgICAgIC8vIHRoaXMgY292ZXJzIGluc3RhbmNlcyB3aGVyZSB0aGUgZmlsdGVyIGlzIHNldCBieSB1c2VyIGNvZGUgd2hpbGUgbWFpbnRhaW5pbmcgZXhpc3RpbmcgZnVuY3Rpb25hbGl0eVxuICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckNvbmYgJiYgZmlsdGVyQ29uZi5maWx0ZXJzICYmIGZpbHRlckNvbmYuZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZmlsdGVyQ29uZi5maWx0ZXJzLmZvckVhY2goKGs6IGFueSwgdjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoay5maWVsZCA9PSB0aGlzLmNvbHVtbi5pZCkge1xuICAgICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gay5zZWFyY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19