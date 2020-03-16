import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
export class TextareaEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextareaEditorComponent, [{
        type: Component,
        args: [{
                selector: 'textarea-editor',
                styleUrls: ['./editor.component.scss'],
                template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `,
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0b3JzL3RleHRhcmVhLWVkaXRvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFrQmpELE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxhQUFhO0lBRXhEO1FBQ0UsS0FBSyxFQUFFLENBQUM7SUFDVixDQUFDOzs4RkFKVSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQVpoQyxtQ0FTQTtRQVBVLDBKQUEyQiwrRkFJbEIsd0JBQW9CLElBSkYsK0dBS1YseUJBQXFCLElBTFgscUdBTVosd0JBQW9CLElBTlI7UUFPckMsb0JBQUE7UUFBQSxpQkFBVzs7UUFURCx3Q0FBc0IsOEJBQUEsMEJBQUEsb0NBQUEsb0NBQUE7O2tEQVl2Qix1QkFBdUI7Y0FoQm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7OztLQVdQO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYS1lZGl0b3InLFxuICBzdHlsZVVybHM6IFsnLi9lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dGV4dGFyZWEgW25nQ2xhc3NdPVwiaW5wdXRDbGFzc1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICAgICAgICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldFRpdGxlKClcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIj5cbiAgICA8L3RleHRhcmVhPlxuICAgIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRleHRhcmVhRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19