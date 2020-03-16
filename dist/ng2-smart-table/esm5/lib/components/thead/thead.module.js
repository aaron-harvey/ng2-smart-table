import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterModule } from '../filter/filter.module';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTheadComponent } from './thead.component';
import { ActionsComponent } from './cells/actions.component';
import { ActionsTitleComponent } from './cells/actions-title.component';
import { AddButtonComponent } from './cells/add-button.component';
import { CheckboxSelectAllComponent } from './cells/checkbox-select-all.component';
import { ColumnTitleComponent } from './cells/column-title.component';
import { TitleComponent } from './cells/title/title.component';
import { TheadFitlersRowComponent } from './rows/thead-filters-row.component';
import { TheadFormRowComponent } from './rows/thead-form-row.component';
import { TheadTitlesRowComponent } from './rows/thead-titles-row.component';
import * as i0 from "@angular/core";
var THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
var THeadModule = /** @class */ (function () {
    function THeadModule() {
    }
    THeadModule.ɵmod = i0.ɵɵdefineNgModule({ type: THeadModule });
    THeadModule.ɵinj = i0.ɵɵdefineInjector({ factory: function THeadModule_Factory(t) { return new (t || THeadModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                FilterModule,
                CellModule,
            ]] });
    return THeadModule;
}());
export { THeadModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(THeadModule, { declarations: [ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent], imports: [CommonModule,
        FormsModule,
        FilterModule,
        CellModule], exports: [ActionsComponent,
        ActionsTitleComponent,
        AddButtonComponent,
        CheckboxSelectAllComponent,
        ColumnTitleComponent,
        TitleComponent,
        TheadFitlersRowComponent,
        TheadFormRowComponent,
        TheadTitlesRowComponent,
        Ng2SmartTableTheadComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(THeadModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    FilterModule,
                    CellModule,
                ],
                declarations: __spread(THEAD_COMPONENTS),
                exports: __spread(THEAD_COMPONENTS),
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNuRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBRTVFLElBQU0sZ0JBQWdCLEdBQUc7SUFDdkIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsMkJBQTJCO0NBQzVCLENBQUM7QUFFRjtJQUFBO0tBYzRCO21EQUFmLFdBQVc7eUdBQVgsV0FBVyxrQkFiYjtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsWUFBWTtnQkFDWixVQUFVO2FBQ1g7c0JBckNIO0NBNkM0QixBQWQ1QixJQWM0QjtTQUFmLFdBQVc7d0ZBQVgsV0FBVyxtQkExQnRCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLDJCQUEyQixhQUt6QixZQUFZO1FBQ1osV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVLGFBakJaLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLDJCQUEyQjtrREFpQmhCLFdBQVc7Y0FkdkIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixVQUFVO2lCQUNYO2dCQUNELFlBQVksV0FDUCxnQkFBZ0IsQ0FDcEI7Z0JBQ0QsT0FBTyxXQUNGLGdCQUFnQixDQUNwQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmlsdGVyTW9kdWxlIH0gZnJvbSAnLi4vZmlsdGVyL2ZpbHRlci5tb2R1bGUnO1xuaW1wb3J0IHsgQ2VsbE1vZHVsZSB9IGZyb20gJy4uL2NlbGwvY2VsbC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlVGhlYWRDb21wb25lbnQgfSBmcm9tICcuL3RoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9hY3Rpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3Rpb25zVGl0bGVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2FjdGlvbnMtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvYWRkLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hlY2tib3hTZWxlY3RBbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NoZWNrYm94LXNlbGVjdC1hbGwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jb2x1bW4tdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy90aXRsZS90aXRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlYWRGaXRsZXJzUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLWZpbHRlcnMtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVhZEZvcm1Sb3dDb21wb25lbnQgfSBmcm9tICcuL3Jvd3MvdGhlYWQtZm9ybS1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZWFkVGl0bGVzUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLXRpdGxlcy1yb3cuY29tcG9uZW50JztcblxuY29uc3QgVEhFQURfQ09NUE9ORU5UUyA9IFtcbiAgQWN0aW9uc0NvbXBvbmVudCxcbiAgQWN0aW9uc1RpdGxlQ29tcG9uZW50LFxuICBBZGRCdXR0b25Db21wb25lbnQsXG4gIENoZWNrYm94U2VsZWN0QWxsQ29tcG9uZW50LFxuICBDb2x1bW5UaXRsZUNvbXBvbmVudCxcbiAgVGl0bGVDb21wb25lbnQsXG4gIFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCxcbiAgVGhlYWRGb3JtUm93Q29tcG9uZW50LFxuICBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCxcbiAgTmcyU21hcnRUYWJsZVRoZWFkQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBGaWx0ZXJNb2R1bGUsXG4gICAgQ2VsbE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uVEhFQURfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLlRIRUFEX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRIZWFkTW9kdWxlIHsgfVxuIl19