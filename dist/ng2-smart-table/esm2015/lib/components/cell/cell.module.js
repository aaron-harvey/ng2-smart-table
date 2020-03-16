import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2CompleterModule } from 'ng2-completer';
import { CellComponent } from './cell.component';
import { CustomEditComponent } from './cell-edit-mode/custom-edit.component';
import { DefaultEditComponent } from './cell-edit-mode/default-edit.component';
import { EditCellComponent } from './cell-edit-mode/edit-cell.component';
import { CheckboxEditorComponent } from './cell-editors/checkbox-editor.component';
import { CompleterEditorComponent } from './cell-editors/completer-editor.component';
import { InputEditorComponent } from './cell-editors/input-editor.component';
import { SelectEditorComponent } from './cell-editors/select-editor.component';
import { TextareaEditorComponent } from './cell-editors/textarea-editor.component';
import { CustomViewComponent } from './cell-view-mode/custom-view.component';
import { ViewCellComponent } from './cell-view-mode/view-cell.component';
import * as i0 from "@angular/core";
const CELL_COMPONENTS = [
    CellComponent,
    CustomEditComponent,
    DefaultEditComponent,
    EditCellComponent,
    CheckboxEditorComponent,
    CompleterEditorComponent,
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
export class CellModule {
}
CellModule.ɵmod = i0.ɵɵdefineNgModule({ type: CellModule });
CellModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CellModule_Factory(t) { return new (t || CellModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            Ng2CompleterModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CellModule, { declarations: [CellComponent,
        CustomEditComponent,
        DefaultEditComponent,
        EditCellComponent,
        CheckboxEditorComponent,
        CompleterEditorComponent,
        InputEditorComponent,
        SelectEditorComponent,
        TextareaEditorComponent,
        CustomViewComponent,
        ViewCellComponent], imports: [CommonModule,
        FormsModule,
        Ng2CompleterModule], exports: [CellComponent,
        CustomEditComponent,
        DefaultEditComponent,
        EditCellComponent,
        CheckboxEditorComponent,
        CompleterEditorComponent,
        InputEditorComponent,
        SelectEditorComponent,
        TextareaEditorComponent,
        CustomViewComponent,
        ViewCellComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CellModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    Ng2CompleterModule,
                ],
                declarations: [
                    ...CELL_COMPONENTS,
                ],
                exports: [
                    ...CELL_COMPONENTS,
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUV6RSxNQUFNLGVBQWUsR0FBRztJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0NBQ2xCLENBQUM7QUFlRixNQUFNLE9BQU8sVUFBVTs7OENBQVYsVUFBVTttR0FBVixVQUFVLGtCQVpaO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxrQkFBa0I7U0FDbkI7d0ZBUVUsVUFBVSxtQkExQnJCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQix1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixpQkFBaUIsYUFLZixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQixhQWpCcEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGlCQUFpQjtrREFnQk4sVUFBVTtjQWJ0QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxrQkFBa0I7aUJBQ25CO2dCQUNELFlBQVksRUFBRTtvQkFDWixHQUFHLGVBQWU7aUJBQ25CO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxHQUFHLGVBQWU7aUJBQ25CO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmcyQ29tcGxldGVyTW9kdWxlIH0gZnJvbSAnbmcyLWNvbXBsZXRlcic7XG5cbmltcG9ydCB7IENlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdC1tb2RlL2N1c3RvbS1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0RWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvZWRpdC1jZWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGVja2JveEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL2NoZWNrYm94LWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcGxldGVyRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvY29tcGxldGVyLWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW5wdXRFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9pbnB1dC1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL3NlbGVjdC1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IFRleHRhcmVhRWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvdGV4dGFyZWEtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDdXN0b21WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLXZpZXctbW9kZS9jdXN0b20tdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmlld0NlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtdmlldy1tb2RlL3ZpZXctY2VsbC5jb21wb25lbnQnO1xuXG5jb25zdCBDRUxMX0NPTVBPTkVOVFMgPSBbXG4gIENlbGxDb21wb25lbnQsXG4gIEN1c3RvbUVkaXRDb21wb25lbnQsXG4gIERlZmF1bHRFZGl0Q29tcG9uZW50LFxuICBFZGl0Q2VsbENvbXBvbmVudCxcbiAgQ2hlY2tib3hFZGl0b3JDb21wb25lbnQsXG4gIENvbXBsZXRlckVkaXRvckNvbXBvbmVudCxcbiAgSW5wdXRFZGl0b3JDb21wb25lbnQsXG4gIFNlbGVjdEVkaXRvckNvbXBvbmVudCxcbiAgVGV4dGFyZWFFZGl0b3JDb21wb25lbnQsXG4gIEN1c3RvbVZpZXdDb21wb25lbnQsXG4gIFZpZXdDZWxsQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOZzJDb21wbGV0ZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLkNFTExfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIC4uLkNFTExfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2VsbE1vZHVsZSB7IH1cbiJdfQ==