import { __extends } from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
var TextareaEditorComponent = /** @class */ (function (_super) {
    __extends(TextareaEditorComponent, _super);
    function TextareaEditorComponent() {
        return _super.call(this) || this;
    }
    TextareaEditorComponent.ɵfac = function TextareaEditorComponent_Factory(t) { return new (t || TextareaEditorComponent)(); };
    TextareaEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TextareaEditorComponent, selectors: [["textarea-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "placeholder", "ngModelChange", "click", "keydown.enter", "keydown.esc"]], template: function TextareaEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "textarea", 0);
            i0.ɵɵlistener("ngModelChange", function TextareaEditorComponent_Template_textarea_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function TextareaEditorComponent_Template_textarea_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function TextareaEditorComponent_Template_textarea_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function TextareaEditorComponent_Template_textarea_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
            i0.ɵɵtext(1, "    ");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("placeholder", ctx.cell.getTitle());
        } }, directives: [i1.DefaultValueAccessor, i2.NgClass, i1.NgControlStatus, i1.NgModel], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
    return TextareaEditorComponent;
}(DefaultEditor));
export { TextareaEditorComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextareaEditorComponent, [{
        type: Component,
        args: [{
                selector: 'textarea-editor',
                styleUrls: ['./editor.component.scss'],
                template: "\n    <textarea [ngClass]=\"inputClass\"\n              class=\"form-control\"\n              [(ngModel)]=\"cell.newValue\"\n              [name]=\"cell.getId()\"\n              [disabled]=\"!cell.isEditable()\"\n              [placeholder]=\"cell.getTitle()\"\n              (click)=\"onClick.emit($event)\"\n              (keydown.enter)=\"onEdited.emit($event)\"\n              (keydown.esc)=\"onStopEditing.emit()\">\n    </textarea>\n    ",
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL3RleHRhcmVhLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRWpEO0lBZ0I2QywyQ0FBYTtJQUV4RDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQztrR0FKVSx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtZQVpoQyxtQ0FTQTtZQVBVLDBKQUEyQiwrRkFJbEIsd0JBQW9CLElBSkYsK0dBS1YseUJBQXFCLElBTFgscUdBTVosd0JBQW9CLElBTlI7WUFPckMsb0JBQUE7WUFBQSxpQkFBVzs7WUFURCx3Q0FBc0IsOEJBQUEsMEJBQUEsb0NBQUEsb0NBQUE7O2tDQVJwQztDQXlCQyxBQXJCRCxDQWdCNkMsYUFBYSxHQUt6RDtTQUxZLHVCQUF1QjtrREFBdkIsdUJBQXVCO2NBaEJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLFFBQVEsRUFBRSw2YkFXUDthQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tICcuL2RlZmF1bHQtZWRpdG9yJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dGFyZWEtZWRpdG9yJyxcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHRleHRhcmVhIFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgICAgICAgICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRUaXRsZSgpXCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCI+XG4gICAgPC90ZXh0YXJlYT5cbiAgICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUVkaXRvckNvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiJdfQ==