import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TitleComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    var _r344 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵlistener("click", function TitleComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r344); var ctx_r343 = i0.ɵɵnextContext(); return ctx_r343._sort($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r341 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r341.currentDirection);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r341.column.title, " ");
} }
function TitleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r342 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r342.column.title);
} }
var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    TitleComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                var sortConf = _this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === _this.column.id) {
                    _this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    _this.currentDirection = '';
                }
                sortConf.forEach(function (fieldConf) {
                });
            });
        }
    };
    TitleComponent.prototype._sort = function (event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    };
    TitleComponent.prototype.changeSortDirection = function () {
        if (this.currentDirection) {
            var newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    };
    TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
    TitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TitleComponent, selectors: [["ng2-smart-table-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TitleComponent_a_0_Template, 2, 2, "a", 0);
            i0.ɵɵtemplate(1, TitleComponent_span_1_Template, 2, 1, "span", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.column.isSortable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.column.isSortable);
        } }, directives: [i1.NgIf, i1.NgClass], styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]::after, a.sort.desc[_ngcontent-%COMP%]::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc[_ngcontent-%COMP%]::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"] });
    return TitleComponent;
}());
export { TitleComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TitleComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-title',
                styleUrls: ['./title.component.scss'],
                template: "\n    <a href=\"#\" *ngIf=\"column.isSortable\"\n                (click)=\"_sort($event)\"\n                class=\"ng2-smart-sort-link sort\"\n                [ngClass]=\"currentDirection\">\n      {{ column.title }}\n    </a>\n    <span class=\"ng2-smart-sort\" *ngIf=\"!column.isSortable\">{{ column.title }}</span>\n  ",
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0lBTXJELDRCQUlFO0lBSFUsc0xBQXVCO0lBR2pDLFlBQ0Y7SUFBQSxpQkFBSTs7O0lBRlEsbURBQTRCO0lBQ3RDLGVBQ0Y7SUFERSxzREFDRjs7O0lBQ0EsK0JBQXdEO0lBQUEsWUFBa0I7SUFBQSxpQkFBTzs7O0lBQXpCLGVBQWtCO0lBQWxCLDJDQUFrQjs7QUFWOUU7SUFBQTtRQWVFLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUdaLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBK0MxQztJQTNDQyxvQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBbUJDO1FBbEJDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUMsV0FBVztnQkFDbEUsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQ2xFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2xEO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7aUJBQzVCO2dCQUVELFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFjO2dCQUVoQyxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTCxVQUFNLEtBQVU7UUFDZCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbEI7Z0JBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ2hDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO2FBQzFDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVELDRDQUFtQixHQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7Z0ZBbkRVLGNBQWM7dURBQWQsY0FBYztZQVR2QiwyREFJRTtZQUVGLGlFQUF3RDs7WUFONUMsNENBQXlCO1lBTVIsZUFBMEI7WUFBMUIsNkNBQTBCOzt5QkFoQjNEO0NBdUVDLEFBakVELElBaUVDO1NBcERZLGNBQWM7a0RBQWQsY0FBYztjQWIxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFFBQVEsRUFBRSxvVUFRVDthQUNGOztrQkFJRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2RhdGEtc2V0L2NvbHVtbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS10aXRsZScsXG4gIHN0eWxlVXJsczogWycuL3RpdGxlLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGEgaHJlZj1cIiNcIiAqbmdJZj1cImNvbHVtbi5pc1NvcnRhYmxlXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiX3NvcnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJuZzItc21hcnQtc29ydC1saW5rIHNvcnRcIlxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImN1cnJlbnREaXJlY3Rpb25cIj5cbiAgICAgIHt7IGNvbHVtbi50aXRsZSB9fVxuICAgIDwvYT5cbiAgICA8c3BhbiBjbGFzcz1cIm5nMi1zbWFydC1zb3J0XCIgKm5nSWY9XCIhY29sdW1uLmlzU29ydGFibGVcIj57eyBjb2x1bW4udGl0bGUgfX08L3NwYW4+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRpdGxlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBjdXJyZW50RGlyZWN0aW9uID0gJyc7XG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uO1xuICBASW5wdXQoKSBzb3VyY2U6IERhdGFTb3VyY2U7XG4gIEBPdXRwdXQoKSBzb3J0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJvdGVjdGVkIGRhdGFDaGFuZ2VkU3ViOiBTdWJzY3JpcHRpb247XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLnNvdXJjZSkge1xuICAgICAgaWYgKCFjaGFuZ2VzLnNvdXJjZS5maXJzdENoYW5nZSkge1xuICAgICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGFDaGFuZ2VkU3ViID0gdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChkYXRhQ2hhbmdlcykgPT4ge1xuICAgICAgICBjb25zdCBzb3J0Q29uZiA9IHRoaXMuc291cmNlLmdldFNvcnQoKTtcblxuICAgICAgICBpZiAoc29ydENvbmYubGVuZ3RoID4gMCAmJiBzb3J0Q29uZlswXVsnZmllbGQnXSA9PT0gdGhpcy5jb2x1bW4uaWQpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBzb3J0Q29uZlswXVsnZGlyZWN0aW9uJ107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBzb3J0Q29uZi5mb3JFYWNoKChmaWVsZENvbmY6IGFueSkgPT4ge1xuXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3NvcnQoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jaGFuZ2VTb3J0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy5zb3VyY2Uuc2V0U29ydChbXG4gICAgICB7XG4gICAgICAgIGZpZWxkOiB0aGlzLmNvbHVtbi5pZCxcbiAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmN1cnJlbnREaXJlY3Rpb24sXG4gICAgICAgIGNvbXBhcmU6IHRoaXMuY29sdW1uLmdldENvbXBhcmVGdW5jdGlvbigpLFxuICAgICAgfSxcbiAgICBdKTtcbiAgICB0aGlzLnNvcnQuZW1pdChudWxsKTtcbiAgfVxuXG4gIGNoYW5nZVNvcnREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5jdXJyZW50RGlyZWN0aW9uKSB7XG4gICAgICBjb25zdCBuZXdEaXJlY3Rpb24gPSB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSBuZXdEaXJlY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9IHRoaXMuY29sdW1uLnNvcnREaXJlY3Rpb247XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnREaXJlY3Rpb247XG4gIH1cbn1cbiJdfQ==