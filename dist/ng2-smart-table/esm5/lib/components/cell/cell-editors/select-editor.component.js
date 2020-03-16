import { __extends } from "tslib";
import { Component } from '@angular/core';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function SelectEditorComponent_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var option_r229 = ctx.$implicit;
    var ctx_r228 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r229.value)("selected", option_r229.value === ctx_r228.cell.getValue());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", option_r229.title, " ");
} }
var SelectEditorComponent = /** @class */ (function (_super) {
    __extends(SelectEditorComponent, _super);
    function SelectEditorComponent() {
        return _super.call(this) || this;
    }
    SelectEditorComponent.ɵfac = function SelectEditorComponent_Factory(t) { return new (t || SelectEditorComponent)(); };
    SelectEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SelectEditorComponent, selectors: [["select-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "select", 0);
            i0.ɵɵlistener("ngModelChange", function SelectEditorComponent_Template_select_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function SelectEditorComponent_Template_select_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
            i0.ɵɵtemplate(1, SelectEditorComponent_option_1_Template, 2, 3, "option", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var tmp_4_0 = null;
            var currVal_4 = (tmp_4_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_4_0.list;
            i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", currVal_4);
        } }, directives: [i1.SelectControlValueAccessor, i2.NgClass, i1.NgControlStatus, i1.NgModel, i2.NgForOf, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x], encapsulation: 2 });
    return SelectEditorComponent;
}(DefaultEditor));
export { SelectEditorComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectEditorComponent, [{
        type: Component,
        args: [{
                selector: 'select-editor',
                template: "\n    <select [ngClass]=\"inputClass\"\n            class=\"form-control\"\n            [(ngModel)]=\"cell.newValue\"\n            [name]=\"cell.getId()\"\n            [disabled]=\"!cell.isEditable()\"\n            (click)=\"onClick.emit($event)\"\n            (keydown.enter)=\"onEdited.emit($event)\"\n            (keydown.esc)=\"onStopEditing.emit()\">\n\n        <option *ngFor=\"let option of cell.getColumn().getConfig()?.list\" [value]=\"option.value\"\n                [selected]=\"option.value === cell.getValue()\">{{ option.title }}\n        </option>\n    </select>\n    ",
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9zZWxlY3QtZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0lBY3pDLGlDQUNzRDtJQUFBLFlBQ3REO0lBQUEsaUJBQVM7Ozs7SUFGeUQseUNBQXNCLDREQUFBO0lBQ2xDLGVBQ3REO0lBRHNELGlEQUN0RDs7QUFkUjtJQWtCMkMseUNBQWE7SUFFdEQ7ZUFDRSxpQkFBTztJQUNULENBQUM7OEZBSlUscUJBQXFCOzhEQUFyQixxQkFBcUI7WUFmOUIsaUNBU0k7WUFQSSxzSkFBMkIsMkZBR2xCLHdCQUFvQixJQUhGLDJHQUlWLHlCQUFxQixJQUpYLGlHQUtaLHdCQUFvQixJQUxSO1lBTy9CLDRFQUNzRDtZQUUxRCxpQkFBUzs7OztZQVpELHdDQUFzQiw4QkFBQSwwQkFBQSxvQ0FBQTtZQVNsQixlQUF5RDtZQUF6RCxtQ0FBeUQ7O2dDQWhCekU7Q0EyQkMsQUF2QkQsQ0FrQjJDLGFBQWEsR0FLdkQ7U0FMWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQWxCakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUseWtCQWNQO2FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gJy4vZGVmYXVsdC1lZGl0b3InO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZWRpdG9yJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VsZWN0IFtuZ0NsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICAgICAgICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCI+XG5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNlbGwuZ2V0Q29sdW1uKCkuZ2V0Q29uZmlnKCk/Lmxpc3RcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwib3B0aW9uLnZhbHVlID09PSBjZWxsLmdldFZhbHVlKClcIj57eyBvcHRpb24udGl0bGUgfX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gICAgYCxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgRGVmYXVsdEVkaXRvciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxufVxuIl19