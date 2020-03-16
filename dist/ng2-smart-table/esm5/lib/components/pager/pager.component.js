import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataSource } from '../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function PagerComponent_nav_0_li_14_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 7);
    i0.ɵɵtext(3, "(current)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r265 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", page_r265, " ");
} }
function PagerComponent_nav_0_li_14_a_2_Template(rf, ctx) { if (rf & 1) {
    var _r271 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵlistener("click", function PagerComponent_nav_0_li_14_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r271); var page_r265 = i0.ɵɵnextContext().$implicit; var ctx_r269 = i0.ɵɵnextContext(2); return ctx_r269.paginate(page_r265); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r265 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(page_r265);
} }
var _c0 = function (a0) { return { active: a0 }; };
function PagerComponent_nav_0_li_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 4);
    i0.ɵɵtemplate(1, PagerComponent_nav_0_li_14_span_1_Template, 4, 1, "span", 12);
    i0.ɵɵtemplate(2, PagerComponent_nav_0_li_14_a_2_Template, 2, 1, "a", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var page_r265 = ctx.$implicit;
    var ctx_r264 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, ctx_r264.getPage() == page_r265));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r264.getPage() == page_r265);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r264.getPage() != page_r265);
} }
var _c1 = function (a0) { return { disabled: a0 }; };
function PagerComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    var _r274 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 2);
    i0.ɵɵelementStart(1, "ul", 3);
    i0.ɵɵelementStart(2, "li", 4);
    i0.ɵɵelementStart(3, "a", 5);
    i0.ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r274); var ctx_r273 = i0.ɵɵnextContext(); return ctx_r273.getPage() == 1 ? false : ctx_r273.paginate(1); });
    i0.ɵɵelementStart(4, "span", 6);
    i0.ɵɵtext(5, "\u00AB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 7);
    i0.ɵɵtext(7, "First");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "li", 4);
    i0.ɵɵelementStart(9, "a", 8);
    i0.ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r274); var ctx_r275 = i0.ɵɵnextContext(); return ctx_r275.getPage() == 1 ? false : ctx_r275.prev(); });
    i0.ɵɵelementStart(10, "span", 6);
    i0.ɵɵtext(11, "<");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 7);
    i0.ɵɵtext(13, "Prev");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, PagerComponent_nav_0_li_14_Template, 3, 5, "li", 9);
    i0.ɵɵelementStart(15, "li", 4);
    i0.ɵɵelementStart(16, "a", 10);
    i0.ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_16_listener() { i0.ɵɵrestoreView(_r274); var ctx_r276 = i0.ɵɵnextContext(); return ctx_r276.getPage() == ctx_r276.getLast() ? false : ctx_r276.next(); });
    i0.ɵɵelementStart(17, "span", 6);
    i0.ɵɵtext(18, ">");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span", 7);
    i0.ɵɵtext(20, "Next");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "li", 4);
    i0.ɵɵelementStart(22, "a", 11);
    i0.ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_22_listener() { i0.ɵɵrestoreView(_r274); var ctx_r277 = i0.ɵɵnextContext(); return ctx_r277.getPage() == ctx_r277.getLast() ? false : ctx_r277.paginate(ctx_r277.getLast()); });
    i0.ɵɵelementStart(23, "span", 6);
    i0.ɵɵtext(24, "\u00BB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "span", 7);
    i0.ɵɵtext(26, "Last");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r262 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r262.getPage() == 1));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1, ctx_r262.getPage() == 1));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r262.getPages());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1, ctx_r262.getPage() == ctx_r262.getLast()));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c1, ctx_r262.getPage() == ctx_r262.getLast()));
} }
function PagerComponent_nav_1_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r279 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r279);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r279);
} }
function PagerComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    var _r281 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2, " Per Page: ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 18);
    i0.ɵɵlistener("change", function PagerComponent_nav_1_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r281); var ctx_r280 = i0.ɵɵnextContext(); return ctx_r280.onChangePerPage($event); })("ngModelChange", function PagerComponent_nav_1_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r281); var ctx_r282 = i0.ɵɵnextContext(); return ctx_r282.currentPerPage = $event; });
    i0.ɵɵtemplate(4, PagerComponent_nav_1_option_4_Template, 2, 2, "option", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r263 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r263.currentPerPage);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r263.perPageSelect);
} }
var PagerComponent = /** @class */ (function () {
    function PagerComponent() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
    }
    PagerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe(function (dataChanges) {
                _this.page = _this.source.getPaging().page;
                _this.perPage = _this.source.getPaging().perPage;
                _this.currentPerPage = _this.perPage;
                _this.count = _this.source.count();
                if (_this.isPageOutOfBounce()) {
                    _this.source.setPage(--_this.page);
                }
                _this.processPageChange(dataChanges);
                _this.initPages();
            });
        }
    };
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    PagerComponent.prototype.processPageChange = function (changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    };
    PagerComponent.prototype.shouldShow = function () {
        return this.source.count() > this.perPage;
    };
    PagerComponent.prototype.paginate = function (page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page: page });
        return false;
    };
    PagerComponent.prototype.next = function () {
        return this.paginate(this.getPage() + 1);
    };
    PagerComponent.prototype.prev = function () {
        return this.paginate(this.getPage() - 1);
    };
    PagerComponent.prototype.getPage = function () {
        return this.page;
    };
    PagerComponent.prototype.getPages = function () {
        return this.pages;
    };
    PagerComponent.prototype.getLast = function () {
        return Math.ceil(this.count / this.perPage);
    };
    PagerComponent.prototype.isPageOutOfBounce = function () {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    };
    PagerComponent.prototype.initPages = function () {
        var pagesCount = this.getLast();
        var showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            var middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            var lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            var firstOne = lastOne - showPagesCount + 1;
            for (var i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    };
    PagerComponent.prototype.onChangePerPage = function (event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    };
    PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(); };
    PagerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PagerComponent, selectors: [["ng2-smart-table-pager"]], inputs: { source: "source", perPageSelect: "perPageSelect" }, outputs: { changePage: "changePage" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["class", "ng2-smart-pagination-nav", 4, "ngIf"], ["class", "ng2-smart-pagination-per-page", 4, "ngIf"], [1, "ng2-smart-pagination-nav"], [1, "ng2-smart-pagination", "pagination"], [1, "ng2-smart-page-item", "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Prev", 1, "ng2-smart-page-link", "page-link", "page-link-prev", 3, "click"], ["class", "ng2-smart-page-item page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next", 1, "ng2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["href", "#", "aria-label", "Last", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["class", "ng2-smart-page-link page-link", 4, "ngIf"], ["class", "ng2-smart-page-link page-link", "href", "#", 3, "click", 4, "ngIf"], [1, "ng2-smart-page-link", "page-link"], ["href", "#", 1, "ng2-smart-page-link", "page-link", 3, "click"], [1, "ng2-smart-pagination-per-page"], ["for", "per-page"], ["id", "per-page", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, PagerComponent_nav_0_Template, 27, 13, "nav", 0);
            i0.ɵɵtemplate(1, PagerComponent_nav_1_Template, 5, 2, "nav", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldShow());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.perPageSelect && ctx.perPageSelect.length > 0);
        } }, directives: [i1.NgIf, i1.NgClass, i1.NgForOf, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], styles: [".ng2-smart-pagination[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .ng2-smart-page-item[_ngcontent-%COMP%]{display:inline}.ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-next[_ngcontent-%COMP%], .ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-prev[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem;line-height:2.5rem}"] });
    return PagerComponent;
}());
export { PagerComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PagerComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-smart-table-pager',
                styleUrls: ['./pager.component.scss'],
                template: "\n    <nav *ngIf=\"shouldShow()\" class=\"ng2-smart-pagination-nav\">\n      <ul class=\"ng2-smart-pagination pagination\">\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == 1 ? false : paginate(1)\" aria-label=\"First\">\n            <span aria-hidden=\"true\">&laquo;</span>\n            <span class=\"sr-only\">First</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\" [ngClass]=\"{disabled: getPage() == 1}\">\n          <a class=\"ng2-smart-page-link page-link page-link-prev\" href=\"#\"\n             (click)=\"getPage() == 1 ? false : prev()\" aria-label=\"Prev\">\n            <span aria-hidden=\"true\">&lt;</span>\n            <span class=\"sr-only\">Prev</span>\n          </a>\n        </li>\n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{active: getPage() == page}\" *ngFor=\"let page of getPages()\">\n          <span class=\"ng2-smart-page-link page-link\"\n          *ngIf=\"getPage() == page\">{{ page }} <span class=\"sr-only\">(current)</span></span>\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"paginate(page)\" *ngIf=\"getPage() != page\">{{ page }}</a>\n        </li>\n\n        <li class=\"ng2-smart-page-item page-item\"\n            [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link page-link-next\" href=\"#\"\n             (click)=\"getPage() == getLast() ? false : next()\" aria-label=\"Next\">\n            <span aria-hidden=\"true\">&gt;</span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </li>\n        \n        <li class=\"ng2-smart-page-item page-item\"\n        [ngClass]=\"{disabled: getPage() == getLast()}\">\n          <a class=\"ng2-smart-page-link page-link\" href=\"#\"\n          (click)=\"getPage() == getLast() ? false : paginate(getLast())\" aria-label=\"Last\">\n            <span aria-hidden=\"true\">&raquo;</span>\n            <span class=\"sr-only\">Last</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    \n    <nav *ngIf=\"perPageSelect && perPageSelect.length > 0\" class=\"ng2-smart-pagination-per-page\">\n      <label for=\"per-page\">\n        Per Page:\n      </label>\n      <select (change)=\"onChangePerPage($event)\" [(ngModel)]=\"currentPerPage\" id=\"per-page\">\n        <option *ngFor=\"let item of perPageSelect\" [value]=\"item\">{{ item }}</option>\n      </select>\n    </nav>\n  ",
            }]
    }], null, { source: [{
            type: Input
        }], perPageSelect: [{
            type: Input
        }], changePage: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGFnZXIvcGFnZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7SUF3QnJELGdDQUMwQjtJQUFBLFlBQVc7SUFBQSwrQkFBc0I7SUFBQSx5QkFBUztJQUFBLGlCQUFPO0lBQUEsaUJBQU87OztJQUF4RCxlQUFXO0lBQVgseUNBQVc7Ozs7SUFDckMsNkJBQ21EO0lBQW5ELGlQQUF3QjtJQUEyQixZQUFVO0lBQUEsaUJBQUk7OztJQUFkLGVBQVU7SUFBViwrQkFBVTs7OztJQUwvRCw2QkFFRTtJQUFBLDhFQUMwQjtJQUMxQix3RUFDbUQ7SUFDckQsaUJBQUs7Ozs7SUFMTCxxRkFBdUM7SUFFckMsZUFBeUI7SUFBekIsc0RBQXlCO0lBRUEsZUFBeUI7SUFBekIsc0RBQXlCOzs7OztJQXJCeEQsOEJBQ0U7SUFBQSw2QkFDRTtJQUFBLDZCQUNFO0lBQUEsNEJBRUU7SUFERiw4S0FBc0IsQ0FBRSxHQUFFLEtBQU0scUJBQVcsQ0FBQyxLQUFFO0lBQzVDLCtCQUF5QjtJQUFBLHNCQUFPO0lBQUEsaUJBQU87SUFDdkMsK0JBQXNCO0lBQUEscUJBQUs7SUFBQSxpQkFBTztJQUNwQyxpQkFBSTtJQUNOLGlCQUFLO0lBQ0wsNkJBQ0U7SUFBQSw0QkFFRTtJQURDLDhLQUFzQixDQUFFLEdBQUUsS0FBTSxzQkFBUztJQUMxQyxnQ0FBeUI7SUFBQSxrQkFBSTtJQUFBLGlCQUFPO0lBQ3BDLGdDQUFzQjtJQUFBLHFCQUFJO0lBQUEsaUJBQU87SUFDbkMsaUJBQUk7SUFDTixpQkFBSztJQUNMLHFFQUVF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SUFBSSxDQUFDO2FBQ3hDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztnRkF2SFUsY0FBYzt1REFBZCxjQUFjO1lBdER2QixpRUFDRTtZQTJDRiwrREFDRTs7WUE3Q0csdUNBQW9CO1lBNENwQixlQUFpRDtZQUFqRCx3RUFBaUQ7O3lCQXJEMUQ7Q0F3TEMsQUFuTEQsSUFtTEM7U0F6SFksY0FBYztrREFBZCxjQUFjO2NBMUQxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3JDLFFBQVEsRUFBRSw2aUZBcURUO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgRGF0YVNvdXJjZSB9IGZyb20gJy4uLy4uL2xpYi9kYXRhLXNvdXJjZS9kYXRhLXNvdXJjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nMi1zbWFydC10YWJsZS1wYWdlcicsXG4gIHN0eWxlVXJsczogWycuL3BhZ2VyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5hdiAqbmdJZj1cInNob3VsZFNob3coKVwiIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24tbmF2XCI+XG4gICAgICA8dWwgY2xhc3M9XCJuZzItc21hcnQtcGFnaW5hdGlvbiBwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gMX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCIgaHJlZj1cIiNcIlxuICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gMSA/IGZhbHNlIDogcGFnaW5hdGUoMSlcIiBhcmlhLWxhYmVsPVwiRmlyc3RcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsYXF1bzs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5GaXJzdDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCIgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBnZXRQYWdlKCkgPT0gMX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rIHBhZ2UtbGluay1wcmV2XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gMSA/IGZhbHNlIDogcHJldigpXCIgYXJpYS1sYWJlbD1cIlByZXZcIj5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsdDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIlxuICAgICAgICBbbmdDbGFzc109XCJ7YWN0aXZlOiBnZXRQYWdlKCkgPT0gcGFnZX1cIiAqbmdGb3I9XCJsZXQgcGFnZSBvZiBnZXRQYWdlcygpXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiXG4gICAgICAgICAgKm5nSWY9XCJnZXRQYWdlKCkgPT0gcGFnZVwiPnt7IHBhZ2UgfX0gPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+KGN1cnJlbnQpPC9zcGFuPjwvc3Bhbj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rXCIgaHJlZj1cIiNcIlxuICAgICAgICAgIChjbGljayk9XCJwYWdpbmF0ZShwYWdlKVwiICpuZ0lmPVwiZ2V0UGFnZSgpICE9IHBhZ2VcIj57eyBwYWdlIH19PC9hPlxuICAgICAgICA8L2xpPlxuXG4gICAgICAgIDxsaSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWl0ZW0gcGFnZS1pdGVtXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZ2V0UGFnZSgpID09IGdldExhc3QoKX1cIj5cbiAgICAgICAgICA8YSBjbGFzcz1cIm5nMi1zbWFydC1wYWdlLWxpbmsgcGFnZS1saW5rIHBhZ2UtbGluay1uZXh0XCIgaHJlZj1cIiNcIlxuICAgICAgICAgICAgIChjbGljayk9XCJnZXRQYWdlKCkgPT0gZ2V0TGFzdCgpID8gZmFsc2UgOiBuZXh0KClcIiBhcmlhLWxhYmVsPVwiTmV4dFwiPlxuICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+Jmd0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICBcbiAgICAgICAgPGxpIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2UtaXRlbSBwYWdlLWl0ZW1cIlxuICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGdldFBhZ2UoKSA9PSBnZXRMYXN0KCl9XCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuZzItc21hcnQtcGFnZS1saW5rIHBhZ2UtbGlua1wiIGhyZWY9XCIjXCJcbiAgICAgICAgICAoY2xpY2spPVwiZ2V0UGFnZSgpID09IGdldExhc3QoKSA/IGZhbHNlIDogcGFnaW5hdGUoZ2V0TGFzdCgpKVwiIGFyaWEtbGFiZWw9XCJMYXN0XCI+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mcmFxdW87PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TGFzdDwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIFxuICAgIDxuYXYgKm5nSWY9XCJwZXJQYWdlU2VsZWN0ICYmIHBlclBhZ2VTZWxlY3QubGVuZ3RoID4gMFwiIGNsYXNzPVwibmcyLXNtYXJ0LXBhZ2luYXRpb24tcGVyLXBhZ2VcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJwZXItcGFnZVwiPlxuICAgICAgICBQZXIgUGFnZTpcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8c2VsZWN0IChjaGFuZ2UpPVwib25DaGFuZ2VQZXJQYWdlKCRldmVudClcIiBbKG5nTW9kZWwpXT1cImN1cnJlbnRQZXJQYWdlXCIgaWQ9XCJwZXItcGFnZVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHBlclBhZ2VTZWxlY3RcIiBbdmFsdWVdPVwiaXRlbVwiPnt7IGl0ZW0gfX08L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvbmF2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBQYWdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgc291cmNlOiBEYXRhU291cmNlO1xuICBASW5wdXQoKSBwZXJQYWdlU2VsZWN0OiBhbnlbXSA9IFtdO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2VQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY3VycmVudFBlclBhZ2U6IGFueTtcblxuICBwcm90ZWN0ZWQgcGFnZXM6IEFycmF5PGFueT47XG4gIHByb3RlY3RlZCBwYWdlOiBudW1iZXI7XG4gIHByb3RlY3RlZCBjb3VudDogbnVtYmVyID0gMDtcbiAgcHJvdGVjdGVkIHBlclBhZ2U6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgZGF0YUNoYW5nZWRTdWI6IFN1YnNjcmlwdGlvbjtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuc291cmNlKSB7XG4gICAgICBpZiAoIWNoYW5nZXMuc291cmNlLmZpcnN0Q2hhbmdlKSB7XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGF0YUNoYW5nZWRTdWIgPSB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGRhdGFDaGFuZ2VzKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2U7XG4gICAgICAgIHRoaXMucGVyUGFnZSA9IHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2U7XG4gICAgICAgIHRoaXMuY3VycmVudFBlclBhZ2UgPSB0aGlzLnBlclBhZ2U7XG4gICAgICAgIHRoaXMuY291bnQgPSB0aGlzLnNvdXJjZS5jb3VudCgpO1xuICAgICAgICBpZiAodGhpcy5pc1BhZ2VPdXRPZkJvdW5jZSgpKSB7XG4gICAgICAgICAgdGhpcy5zb3VyY2Uuc2V0UGFnZSgtLXRoaXMucGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2Nlc3NQYWdlQ2hhbmdlKGRhdGFDaGFuZ2VzKTtcbiAgICAgICAgdGhpcy5pbml0UGFnZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXZSBjaGFuZ2UgdGhlIHBhZ2UgaGVyZSBkZXBlbmRpbmcgb24gdGhlIGFjdGlvbiBwZXJmb3JtZWQgYWdhaW5zdCBkYXRhIHNvdXJjZVxuICAgKiBpZiBhIG5ldyBlbGVtZW50IHdhcyBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSB0YWJsZSAtIHRoZW4gY2hhbmdlIHRoZSBwYWdlIHRvIHRoZSBsYXN0XG4gICAqIGlmIGEgbmV3IGVsZW1lbnQgd2FzIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIHRhYmxlIC0gdGhlbiB0byB0aGUgZmlyc3QgcGFnZVxuICAgKiBAcGFyYW0gY2hhbmdlc1xuICAgKi9cbiAgcHJvY2Vzc1BhZ2VDaGFuZ2UoY2hhbmdlczogYW55KSB7XG4gICAgaWYgKGNoYW5nZXNbJ2FjdGlvbiddID09PSAncHJlcGVuZCcpIHtcbiAgICAgIHRoaXMuc291cmNlLnNldFBhZ2UoMSk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzWydhY3Rpb24nXSA9PT0gJ2FwcGVuZCcpIHtcbiAgICAgIHRoaXMuc291cmNlLnNldFBhZ2UodGhpcy5nZXRMYXN0KCkpO1xuICAgIH1cbiAgfVxuXG4gIHNob3VsZFNob3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlLmNvdW50KCkgPiB0aGlzLnBlclBhZ2U7XG4gIH1cblxuICBwYWdpbmF0ZShwYWdlOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICB0aGlzLnNvdXJjZS5zZXRQYWdlKHBhZ2UpO1xuICAgIHRoaXMucGFnZSA9IHBhZ2U7XG4gICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQoeyBwYWdlIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG5leHQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUodGhpcy5nZXRQYWdlKCkgKyAxKTtcbiAgfVxuXG4gIHByZXYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFnaW5hdGUodGhpcy5nZXRQYWdlKCkgLSAxKTtcbiAgfVxuXG4gIGdldFBhZ2UoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYWdlO1xuICB9XG5cbiAgZ2V0UGFnZXMoKTogQXJyYXk8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMucGFnZXM7XG4gIH1cblxuICBnZXRMYXN0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLmNvdW50IC8gdGhpcy5wZXJQYWdlKTtcbiAgfVxuXG4gIGlzUGFnZU91dE9mQm91bmNlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5wYWdlICogdGhpcy5wZXJQYWdlKSA+PSAodGhpcy5jb3VudCArIHRoaXMucGVyUGFnZSkgJiYgdGhpcy5wYWdlID4gMTtcbiAgfVxuXG4gIGluaXRQYWdlcygpIHtcbiAgICBjb25zdCBwYWdlc0NvdW50ID0gdGhpcy5nZXRMYXN0KCk7XG4gICAgbGV0IHNob3dQYWdlc0NvdW50ID0gNDtcbiAgICBzaG93UGFnZXNDb3VudCA9IHBhZ2VzQ291bnQgPCBzaG93UGFnZXNDb3VudCA/IHBhZ2VzQ291bnQgOiBzaG93UGFnZXNDb3VudDtcbiAgICB0aGlzLnBhZ2VzID0gW107XG5cbiAgICBpZiAodGhpcy5zaG91bGRTaG93KCkpIHtcblxuICAgICAgbGV0IG1pZGRsZU9uZSA9IE1hdGguY2VpbChzaG93UGFnZXNDb3VudCAvIDIpO1xuICAgICAgbWlkZGxlT25lID0gdGhpcy5wYWdlID49IG1pZGRsZU9uZSA/IHRoaXMucGFnZSA6IG1pZGRsZU9uZTtcblxuICAgICAgbGV0IGxhc3RPbmUgPSBtaWRkbGVPbmUgKyBNYXRoLmZsb29yKHNob3dQYWdlc0NvdW50IC8gMik7XG4gICAgICBsYXN0T25lID0gbGFzdE9uZSA+PSBwYWdlc0NvdW50ID8gcGFnZXNDb3VudCA6IGxhc3RPbmU7XG5cbiAgICAgIGNvbnN0IGZpcnN0T25lID0gbGFzdE9uZSAtIHNob3dQYWdlc0NvdW50ICsgMTtcblxuICAgICAgZm9yIChsZXQgaSA9IGZpcnN0T25lOyBpIDw9IGxhc3RPbmU7IGkrKykge1xuICAgICAgICB0aGlzLnBhZ2VzLnB1c2goaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2VQZXJQYWdlKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50UGVyUGFnZSkge1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuY3VycmVudFBlclBhZ2UgPT09ICdzdHJpbmcnICYmIHRoaXMuY3VycmVudFBlclBhZ2UudG9Mb3dlckNhc2UoKSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlID0gdGhpcy5jdXJyZW50UGVyUGFnZSAqIDE7XG4gICAgICAgIHRoaXMuc291cmNlLnJlZnJlc2goKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5pdFBhZ2VzKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==