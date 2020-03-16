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
const FILTER_COMPONENTS = [
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
export class FilterModule {
}
FilterModule.ɵmod = i0.ɵɵdefineNgModule({ type: FilterModule });
FilterModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FilterModule_Factory(t) { return new (t || FilterModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            Ng2CompleterModule,
        ]] });
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
                declarations: [
                    ...FILTER_COMPONENTS,
                ],
                exports: [
                    ...FILTER_COMPONENTS,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ZpbHRlci9maWx0ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOztBQUUvRSxNQUFNLGlCQUFpQixHQUFHO0lBQ3hCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN0QixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxZQUFZOztnREFBWixZQUFZO3VHQUFaLFlBQVksa0JBYmQ7WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLG1CQUFtQjtZQUNuQixrQkFBa0I7U0FDbkI7d0ZBUVUsWUFBWSxtQkF2QnZCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHFCQUFxQixhQUtuQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixrQkFBa0IsYUFkcEIsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIscUJBQXFCO2tEQWlCVixZQUFZO2NBZHhCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsa0JBQWtCO2lCQUNuQjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxpQkFBaUI7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGlCQUFpQjtpQkFDckI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZzJDb21wbGV0ZXJNb2R1bGUgfSBmcm9tICduZzItY29tcGxldGVyJztcblxuaW1wb3J0IHsgRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRGaWx0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9kZWZhdWx0LWZpbHRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEN1c3RvbUZpbHRlckNvbXBvbmVudCB9IGZyb20gXCIuL2N1c3RvbS1maWx0ZXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaGVja2JveEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL2NoZWNrYm94LWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGxldGVyRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvY29tcGxldGVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRGaWx0ZXJDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci10eXBlcy9pbnB1dC1maWx0ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEZpbHRlckNvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyLXR5cGVzL3NlbGVjdC1maWx0ZXIuY29tcG9uZW50JztcblxuY29uc3QgRklMVEVSX0NPTVBPTkVOVFMgPSBbXG4gIEZpbHRlckNvbXBvbmVudCxcbiAgRGVmYXVsdEZpbHRlckNvbXBvbmVudCxcbiAgQ3VzdG9tRmlsdGVyQ29tcG9uZW50LFxuICBDaGVja2JveEZpbHRlckNvbXBvbmVudCxcbiAgQ29tcGxldGVyRmlsdGVyQ29tcG9uZW50LFxuICBJbnB1dEZpbHRlckNvbXBvbmVudCxcbiAgU2VsZWN0RmlsdGVyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE5nMkNvbXBsZXRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uRklMVEVSX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5GSUxURVJfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTW9kdWxlIHsgfVxuIl19