import { __read, __spread } from "tslib";
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
var CELL_COMPONENTS = [
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
var CellModule = /** @class */ (function () {
    function CellModule() {
    }
    CellModule.ɵmod = i0.ɵɵdefineNgModule({ type: CellModule });
    CellModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CellModule_Factory(t) { return new (t || CellModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                Ng2CompleterModule,
            ]] });
    return CellModule;
}());
export { CellModule };
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
                declarations: __spread(CELL_COMPONENTS),
                exports: __spread(CELL_COMPONENTS),
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFekUsSUFBTSxlQUFlLEdBQUc7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtDQUNsQixDQUFDO0FBRUY7SUFBQTtLQWEyQjtrREFBZCxVQUFVO3VHQUFWLFVBQVUsa0JBWlo7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGtCQUFrQjthQUNuQjtxQkFwQ0g7Q0E0QzJCLEFBYjNCLElBYTJCO1NBQWQsVUFBVTt3RkFBVixVQUFVLG1CQTFCckIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGlCQUFpQixhQUtmLFlBQVk7UUFDWixXQUFXO1FBQ1gsa0JBQWtCLGFBakJwQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsaUJBQWlCO2tEQWdCTixVQUFVO2NBYnRCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsWUFBWSxXQUNQLGVBQWUsQ0FDbkI7Z0JBQ0QsT0FBTyxXQUNGLGVBQWUsQ0FDbkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZzJDb21wbGV0ZXJNb2R1bGUgfSBmcm9tICduZzItY29tcGxldGVyJztcblxuaW1wb3J0IHsgQ2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tRWRpdENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0LW1vZGUvY3VzdG9tLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IERlZmF1bHRFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9kZWZhdWx0LWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IEVkaXRDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXQtbW9kZS9lZGl0LWNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IENoZWNrYm94RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvY2hlY2tib3gtZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21wbGV0ZXJFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy9jb21wbGV0ZXItZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dEVkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vY2VsbC1lZGl0b3JzL2lucHV0LWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2VsZWN0RWRpdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxsLWVkaXRvcnMvc2VsZWN0LWVkaXRvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dGFyZWFFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtZWRpdG9ycy90ZXh0YXJlYS1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbVZpZXdDb21wb25lbnQgfSBmcm9tICcuL2NlbGwtdmlldy1tb2RlL2N1c3RvbS12aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWaWV3Q2VsbENvbXBvbmVudCB9IGZyb20gJy4vY2VsbC12aWV3LW1vZGUvdmlldy1jZWxsLmNvbXBvbmVudCc7XG5cbmNvbnN0IENFTExfQ09NUE9ORU5UUyA9IFtcbiAgQ2VsbENvbXBvbmVudCxcbiAgQ3VzdG9tRWRpdENvbXBvbmVudCxcbiAgRGVmYXVsdEVkaXRDb21wb25lbnQsXG4gIEVkaXRDZWxsQ29tcG9uZW50LFxuICBDaGVja2JveEVkaXRvckNvbXBvbmVudCxcbiAgQ29tcGxldGVyRWRpdG9yQ29tcG9uZW50LFxuICBJbnB1dEVkaXRvckNvbXBvbmVudCxcbiAgU2VsZWN0RWRpdG9yQ29tcG9uZW50LFxuICBUZXh0YXJlYUVkaXRvckNvbXBvbmVudCxcbiAgQ3VzdG9tVmlld0NvbXBvbmVudCxcbiAgVmlld0NlbGxDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE5nMkNvbXBsZXRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uQ0VMTF9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uQ0VMTF9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDZWxsTW9kdWxlIHsgfVxuIl19