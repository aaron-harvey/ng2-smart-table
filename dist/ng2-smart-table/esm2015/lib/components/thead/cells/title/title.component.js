import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../../../lib/data-source/data-source';
import { Column } from '../../../../lib/data-set/column';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TitleComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r156 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵlistener("click", function TitleComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r156); const ctx_r155 = i0.ɵɵnextContext(); return ctx_r155._sort($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r153 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r153.currentDirection);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r153.column.title, " ");
} }
function TitleComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r154 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r154.column.title);
} }
export class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
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
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TitleComponent, selectors: [["ng2-smart-table-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]], template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TitleComponent_a_0_Template, 2, 2, "a", 0);
        i0.ɵɵtemplate(1, TitleComponent_span_1_Template, 2, 1, "span", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.column.isSortable);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.column.isSortable);
    } }, directives: [i1.NgIf, i1.NgClass], styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]::after, a.sort.desc[_ngcontent-%COMP%]::after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc[_ngcontent-%COMP%]::after{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);margin-bottom:-2px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TitleComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-title',
                styleUrls: ['./title.component.scss'],
                template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `,
            }]
    }], null, { column: [{
            type: Input
        }], source: [{
            type: Input
        }], sort: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNyRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUNBQWlDLENBQUM7Ozs7O0lBTXJELDRCQUlFO0lBSFUsd0xBQXVCO0lBR2pDLFlBQ0Y7SUFBQSxpQkFBSTs7O0lBRlEsbURBQTRCO0lBQ3RDLGVBQ0Y7SUFERSxzREFDRjs7O0lBQ0EsK0JBQXdEO0lBQUEsWUFBa0I7SUFBQSxpQkFBTzs7O0lBQXpCLGVBQWtCO0lBQWxCLDJDQUFrQjs7QUFHOUUsTUFBTSxPQUFPLGNBQWM7SUFiM0I7UUFlRSxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFHWixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQStDMUM7SUEzQ0MsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDbkM7WUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQ3RFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRXZDLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO29CQUNsRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO2lCQUM1QjtnQkFFRCxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBYyxFQUFFLEVBQUU7Z0JBRXBDLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVTtRQUNkLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNsQjtnQkFDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDaEMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUU7YUFDMUM7U0FDRixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUM7U0FDdEM7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNuRDtRQUNELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7OzRFQW5EVSxjQUFjO21EQUFkLGNBQWM7UUFUdkIsMkRBSUU7UUFFRixpRUFBd0Q7O1FBTjVDLDRDQUF5QjtRQU1SLGVBQTBCO1FBQTFCLDZDQUEwQjs7a0RBRzlDLGNBQWM7Y0FiMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7YUFDRjs7a0JBSUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBEYXRhU291cmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2RhdGEtc291cmNlL2RhdGEtc291cmNlJztcbmltcG9ydCB7IENvbHVtbiB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jb2x1bW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc21hcnQtdGFibGUtdGl0bGUnLFxuICBzdHlsZVVybHM6IFsnLi90aXRsZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxhIGhyZWY9XCIjXCIgKm5nSWY9XCJjb2x1bW4uaXNTb3J0YWJsZVwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIl9zb3J0KCRldmVudClcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibmcyLXNtYXJ0LXNvcnQtbGluayBzb3J0XCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJjdXJyZW50RGlyZWN0aW9uXCI+XG4gICAgICB7eyBjb2x1bW4udGl0bGUgfX1cbiAgICA8L2E+XG4gICAgPHNwYW4gY2xhc3M9XCJuZzItc21hcnQtc29ydFwiICpuZ0lmPVwiIWNvbHVtbi5pc1NvcnRhYmxlXCI+e3sgY29sdW1uLnRpdGxlIH19PC9zcGFuPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUaXRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgY3VycmVudERpcmVjdGlvbiA9ICcnO1xuICBASW5wdXQoKSBjb2x1bW46IENvbHVtbjtcbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBAT3V0cHV0KCkgc29ydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByb3RlY3RlZCBkYXRhQ2hhbmdlZFN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5zb3VyY2UpIHtcbiAgICAgIGlmICghY2hhbmdlcy5zb3VyY2UuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kYXRhQ2hhbmdlZFN1YiA9IHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZGF0YUNoYW5nZXMpID0+IHtcbiAgICAgICAgY29uc3Qgc29ydENvbmYgPSB0aGlzLnNvdXJjZS5nZXRTb3J0KCk7XG5cbiAgICAgICAgaWYgKHNvcnRDb25mLmxlbmd0aCA+IDAgJiYgc29ydENvbmZbMF1bJ2ZpZWxkJ10gPT09IHRoaXMuY29sdW1uLmlkKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gc29ydENvbmZbMF1bJ2RpcmVjdGlvbiddO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VycmVudERpcmVjdGlvbiA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgc29ydENvbmYuZm9yRWFjaCgoZmllbGRDb25mOiBhbnkpID0+IHtcblxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zb3J0KGV2ZW50OiBhbnkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2hhbmdlU29ydERpcmVjdGlvbigpO1xuICAgIHRoaXMuc291cmNlLnNldFNvcnQoW1xuICAgICAge1xuICAgICAgICBmaWVsZDogdGhpcy5jb2x1bW4uaWQsXG4gICAgICAgIGRpcmVjdGlvbjogdGhpcy5jdXJyZW50RGlyZWN0aW9uLFxuICAgICAgICBjb21wYXJlOiB0aGlzLmNvbHVtbi5nZXRDb21wYXJlRnVuY3Rpb24oKSxcbiAgICAgIH0sXG4gICAgXSk7XG4gICAgdGhpcy5zb3J0LmVtaXQobnVsbCk7XG4gIH1cblxuICBjaGFuZ2VTb3J0RGlyZWN0aW9uKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuY3VycmVudERpcmVjdGlvbikge1xuICAgICAgY29uc3QgbmV3RGlyZWN0aW9uID0gdGhpcy5jdXJyZW50RGlyZWN0aW9uID09PSAnYXNjJyA/ICdkZXNjJyA6ICdhc2MnO1xuICAgICAgdGhpcy5jdXJyZW50RGlyZWN0aW9uID0gbmV3RGlyZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnREaXJlY3Rpb24gPSB0aGlzLmNvbHVtbi5zb3J0RGlyZWN0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50RGlyZWN0aW9uO1xuICB9XG59XG4iXX0=