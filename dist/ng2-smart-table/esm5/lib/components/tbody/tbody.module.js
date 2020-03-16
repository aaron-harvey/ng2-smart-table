import { __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CellModule } from '../cell/cell.module';
import { Ng2SmartTableTbodyComponent } from './tbody.component';
import { TbodyCreateCancelComponent } from './cells/create-cancel.component';
import { TbodyEditDeleteComponent } from './cells/edit-delete.component';
import { TbodyCustomComponent } from './cells/custom.component';
import * as i0 from "@angular/core";
var TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
var TBodyModule = /** @class */ (function () {
    function TBodyModule() {
    }
    TBodyModule.ɵmod = i0.ɵɵdefineNgModule({ type: TBodyModule });
    TBodyModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TBodyModule_Factory(t) { return new (t || TBodyModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                CellModule,
            ]] });
    return TBodyModule;
}());
export { TBodyModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TBodyModule, { declarations: [TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent], imports: [CommonModule,
        FormsModule,
        CellModule], exports: [TbodyCreateCancelComponent,
        TbodyEditDeleteComponent,
        TbodyCustomComponent,
        Ng2SmartTableTbodyComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TBodyModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    CellModule,
                ],
                declarations: __spread(TBODY_COMPONENTS),
                exports: __spread(TBODY_COMPONENTS),
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvdGJvZHkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVoRSxJQUFNLGdCQUFnQixHQUFHO0lBQ3ZCLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLDJCQUEyQjtDQUM1QixDQUFDO0FBRUY7SUFBQTtLQWE0QjttREFBZixXQUFXO3lHQUFYLFdBQVcsa0JBWmI7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLFVBQVU7YUFDWDtzQkF2Qkg7Q0ErQjRCLEFBYjVCLElBYTRCO1NBQWYsV0FBVzt3RkFBWCxXQUFXLG1CQW5CdEIsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsMkJBQTJCLGFBS3pCLFlBQVk7UUFDWixXQUFXO1FBQ1gsVUFBVSxhQVZaLDBCQUEwQjtRQUMxQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLDJCQUEyQjtrREFnQmhCLFdBQVc7Y0FidkIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsVUFBVTtpQkFDWDtnQkFDRCxZQUFZLFdBQ1AsZ0JBQWdCLENBQ3BCO2dCQUNELE9BQU8sV0FDRixnQkFBZ0IsQ0FDcEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IENlbGxNb2R1bGUgfSBmcm9tICcuLi9jZWxsL2NlbGwubW9kdWxlJztcblxuaW1wb3J0IHsgTmcyU21hcnRUYWJsZVRib2R5Q29tcG9uZW50IH0gZnJvbSAnLi90Ym9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzL2NyZWF0ZS1jYW5jZWwuY29tcG9uZW50JztcbmltcG9ydCB7IFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMvZWRpdC1kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRib2R5Q3VzdG9tQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy9jdXN0b20uY29tcG9uZW50JztcblxuY29uc3QgVEJPRFlfQ09NUE9ORU5UUyA9IFtcbiAgVGJvZHlDcmVhdGVDYW5jZWxDb21wb25lbnQsXG4gIFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCxcbiAgVGJvZHlDdXN0b21Db21wb25lbnQsXG4gIE5nMlNtYXJ0VGFibGVUYm9keUNvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBDZWxsTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICAuLi5UQk9EWV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uVEJPRFlfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVEJvZHlNb2R1bGUgeyB9XG4iXX0=