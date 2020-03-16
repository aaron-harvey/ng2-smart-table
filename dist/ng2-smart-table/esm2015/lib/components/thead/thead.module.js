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
const THEAD_COMPONENTS = [
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
export class THeadModule {
}
THeadModule.ɵmod = i0.ɵɵdefineNgModule({ type: THeadModule });
THeadModule.ɵinj = i0.ɵɵdefineInjector({ factory: function THeadModule_Factory(t) { return new (t || THeadModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            FilterModule,
            CellModule,
        ]] });
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
                declarations: [
                    ...THEAD_COMPONENTS,
                ],
                exports: [
                    ...THEAD_COMPONENTS,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGhlYWQvdGhlYWQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7QUFFNUUsTUFBTSxnQkFBZ0IsR0FBRztJQUN2QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QiwyQkFBMkI7Q0FDNUIsQ0FBQztBQWdCRixNQUFNLE9BQU8sV0FBVzs7K0NBQVgsV0FBVztxR0FBWCxXQUFXLGtCQWJiO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxZQUFZO1lBQ1osVUFBVTtTQUNYO3dGQVFVLFdBQVcsbUJBMUJ0QixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QiwyQkFBMkIsYUFLekIsWUFBWTtRQUNaLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVSxhQWpCWixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCx3QkFBd0I7UUFDeEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QiwyQkFBMkI7a0RBaUJoQixXQUFXO2NBZHZCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLFlBQVk7b0JBQ1osVUFBVTtpQkFDWDtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osR0FBRyxnQkFBZ0I7aUJBQ3BCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGdCQUFnQjtpQkFDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEZpbHRlck1vZHVsZSB9IGZyb20gJy4uL2ZpbHRlci9maWx0ZXIubW9kdWxlJztcbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuLi9jZWxsL2NlbGwubW9kdWxlJztcblxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZVRoZWFkQ29tcG9uZW50IH0gZnJvbSAnLi90aGVhZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uc0NvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvYWN0aW9ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWN0aW9uc1RpdGxlQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9hY3Rpb25zLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBZGRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2FkZC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94U2VsZWN0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jaGVja2JveC1zZWxlY3QtYWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb2x1bW5UaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvY29sdW1uLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvdGl0bGUvdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRoZWFkRml0bGVyc1Jvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93cy90aGVhZC1maWx0ZXJzLXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGhlYWRGb3JtUm93Q29tcG9uZW50IH0gZnJvbSAnLi9yb3dzL3RoZWFkLWZvcm0tcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUaGVhZFRpdGxlc1Jvd0NvbXBvbmVudCB9IGZyb20gJy4vcm93cy90aGVhZC10aXRsZXMtcm93LmNvbXBvbmVudCc7XG5cbmNvbnN0IFRIRUFEX0NPTVBPTkVOVFMgPSBbXG4gIEFjdGlvbnNDb21wb25lbnQsXG4gIEFjdGlvbnNUaXRsZUNvbXBvbmVudCxcbiAgQWRkQnV0dG9uQ29tcG9uZW50LFxuICBDaGVja2JveFNlbGVjdEFsbENvbXBvbmVudCxcbiAgQ29sdW1uVGl0bGVDb21wb25lbnQsXG4gIFRpdGxlQ29tcG9uZW50LFxuICBUaGVhZEZpdGxlcnNSb3dDb21wb25lbnQsXG4gIFRoZWFkRm9ybVJvd0NvbXBvbmVudCxcbiAgVGhlYWRUaXRsZXNSb3dDb21wb25lbnQsXG4gIE5nMlNtYXJ0VGFibGVUaGVhZENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgRmlsdGVyTW9kdWxlLFxuICAgIENlbGxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLlRIRUFEX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5USEVBRF9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUSGVhZE1vZHVsZSB7IH1cbiJdfQ==