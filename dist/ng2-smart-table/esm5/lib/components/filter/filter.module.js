import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { FilterComponent } from './filter.component';
import { DefaultFilterComponent } from "./default-filter.component";
import { CustomFilterComponent } from "./custom-filter.component";
import { CheckboxFilterComponent } from './filter-types/checkbox-filter.component';
import { CompleterFilterComponent } from './filter-types/completer-filter.component';
import { InputFilterComponent } from './filter-types/input-filter.component';
import { SelectFilterComponent } from './filter-types/select-filter.component';
import * as i0 from "@angular/core";
var FILTER_COMPONENTS = [
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
var FilterModule = /** @class */ (function () {
    function FilterModule() {
    }
    FilterModule.ɵmod = i0.ɵɵdefineNgModule({ type: FilterModule });
    FilterModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FilterModule_Factory(t) { return new (t || FilterModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                Ng2CompleterModule,
            ]] });
    return FilterModule;
}());
export { FilterModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilterModule, { declarations: [FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2CompleterModule], exports: [FilterComponent,
        DefaultFilterComponent,
        CustomFilterComponent,
        CheckboxFilterComponent,
        CompleterFilterComponent,
        InputFilterComponent,
        SelectFilterComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FilterModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    Ng2CompleterModule,
                ],
                declarations: __spread(FILTER_COMPONENTS),
                exports: __spread(FILTER_COMPONENTS),
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7QUFFL0UsSUFBTSxpQkFBaUIsR0FBRztJQUN4QixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDdEIsQ0FBQztBQUVGO0lBQUE7S0FjNkI7b0RBQWhCLFlBQVk7MkdBQVosWUFBWSxrQkFiZDtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsbUJBQW1CO2dCQUNuQixrQkFBa0I7YUFDbkI7dUJBN0JIO0NBcUM2QixBQWQ3QixJQWM2QjtTQUFoQixZQUFZO3dGQUFaLFlBQVksbUJBdkJ2QixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixxQkFBcUIsYUFLbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsa0JBQWtCLGFBZHBCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtrREFpQlYsWUFBWTtjQWR4QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsWUFBWSxXQUNQLGlCQUFpQixDQUNyQjtnQkFDRCxPQUFPLFdBQ0YsaUJBQWlCLENBQ3JCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmcyQ29tcGxldGVyTW9kdWxlIH0gZnJvbSAnbmcyLWNvbXBsZXRlcic7XG5cbmltcG9ydCB7IEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vZGVmYXVsdC1maWx0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDdXN0b21GaWx0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jdXN0b20tZmlsdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9jaGVja2JveC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBsZXRlckZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL2NvbXBsZXRlci1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IElucHV0RmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvaW5wdXQtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWxlY3RGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IEZJTFRFUl9DT01QT05FTlRTID0gW1xuICBGaWx0ZXJDb21wb25lbnQsXG4gIERlZmF1bHRGaWx0ZXJDb21wb25lbnQsXG4gIEN1c3RvbUZpbHRlckNvbXBvbmVudCxcbiAgQ2hlY2tib3hGaWx0ZXJDb21wb25lbnQsXG4gIENvbXBsZXRlckZpbHRlckNvbXBvbmVudCxcbiAgSW5wdXRGaWx0ZXJDb21wb25lbnQsXG4gIFNlbGVjdEZpbHRlckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBOZzJDb21wbGV0ZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkZJTFRFUl9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uRklMVEVSX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1vZHVsZSB7IH1cbiJdfQ==