import { __extends } from "tslib";
import { Component } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../cell-editors/select-editor.component";
import * as i3 from "../cell-editors/textarea-editor.component";
import * as i4 from "../cell-editors/checkbox-editor.component";
import * as i5 from "../cell-editors/completer-editor.component";
import * as i6 from "../cell-editors/input-editor.component";
function DefaultEditComponent_select_editor_1_Template(rf, ctx) { if (rf & 1) {
    var _r209 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r209); var ctx_r208 = i0.ɵɵnextContext(); return ctx_r208.onClick($event); })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r209); var ctx_r210 = i0.ɵɵnextContext(); return ctx_r210.onEdited($event); })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r209); var ctx_r211 = i0.ɵɵnextContext(); return ctx_r211.onStopEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r203 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r203.cell)("inputClass", ctx_r203.inputClass);
} }
function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) { if (rf & 1) {
    var _r213 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r213); var ctx_r212 = i0.ɵɵnextContext(); return ctx_r212.onClick($event); })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r213); var ctx_r214 = i0.ɵɵnextContext(); return ctx_r214.onEdited($event); })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r213); var ctx_r215 = i0.ɵɵnextContext(); return ctx_r215.onStopEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r204 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r204.cell)("inputClass", ctx_r204.inputClass);
} }
function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) { if (rf & 1) {
    var _r217 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "checkbox-editor", 6);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r217); var ctx_r216 = i0.ɵɵnextContext(); return ctx_r216.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r205 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r205.cell)("inputClass", ctx_r205.inputClass);
} }
function DefaultEditComponent_completer_editor_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "completer-editor", 7);
} if (rf & 2) {
    var ctx_r206 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r206.cell);
} }
function DefaultEditComponent_input_editor_5_Template(rf, ctx) { if (rf & 1) {
    var _r219 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r219); var ctx_r218 = i0.ɵɵnextContext(); return ctx_r218.onClick($event); })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r219); var ctx_r220 = i0.ɵɵnextContext(); return ctx_r220.onEdited($event); })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r219); var ctx_r221 = i0.ɵɵnextContext(); return ctx_r221.onStopEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r207 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r207.cell)("inputClass", ctx_r207.inputClass);
} }
var DefaultEditComponent = /** @class */ (function (_super) {
    __extends(DefaultEditComponent, _super);
    function DefaultEditComponent() {
        return _super.call(this) || this;
    }
    DefaultEditComponent.prototype.getEditorType = function () {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    };
    DefaultEditComponent.ɵfac = function DefaultEditComponent_Factory(t) { return new (t || DefaultEditComponent)(); };
    DefaultEditComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultEditComponent, selectors: [["table-cell-default-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 5, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing"], [3, "cell", "inputClass", "onClick"], [3, "cell"]], template: function DefaultEditComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1);
            i0.ɵɵtemplate(2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1);
            i0.ɵɵtemplate(3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2);
            i0.ɵɵtemplate(4, DefaultEditComponent_completer_editor_4_Template, 1, 1, "completer-editor", 3);
            i0.ɵɵtemplate(5, DefaultEditComponent_input_editor_5_Template, 1, 2, "input-editor", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.getEditorType());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "list");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "textarea");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "checkbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "completer");
        } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.SelectEditorComponent, i3.TextareaEditorComponent, i4.CheckboxEditorComponent, i5.CompleterEditorComponent, i6.InputEditorComponent], encapsulation: 2 });
    return DefaultEditComponent;
}(EditCellDefault));
export { DefaultEditComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEditComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-default-editor',
                templateUrl: './default-edit.component.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Ozs7OztJQ0RsRCx3Q0FNZ0I7SUFIRCwwTkFBMkIsZ05BQUEsbU5BQUE7SUFHMUMsaUJBQWdCOzs7SUFMRCxvQ0FBYSxtQ0FBQTs7OztJQU81QiwwQ0FNa0I7SUFIRCw4TkFBMkIsb05BQUEsdU5BQUE7SUFHNUMsaUJBQWtCOzs7SUFMRCxvQ0FBYSxtQ0FBQTs7OztJQU85QiwwQ0FJa0I7SUFERCw4TkFBMkI7SUFDNUMsaUJBQWtCOzs7SUFIRCxvQ0FBYSxtQ0FBQTs7O0lBSzlCLHNDQUVtQjs7O0lBREQsb0NBQWE7Ozs7SUFHL0IsdUNBTWU7SUFIRCx3TkFBMkIsOE1BQUEsaU5BQUE7SUFHekMsaUJBQWU7OztJQUxELG9DQUFhLG1DQUFBOztBRHZCL0I7SUFJMEMsd0NBQWU7SUFFdkQ7ZUFDRSxpQkFBTztJQUNULENBQUM7SUFFRCw0Q0FBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDM0UsQ0FBQzs0RkFSVSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQ1RqQyw4QkFDSTtZQUFBLHlGQU1BO1lBRUEsNkZBTUE7WUFFQSw2RkFJQTtZQUVBLCtGQUVBO1lBRUEsdUZBTUE7WUFDSixpQkFBTTs7WUFsQ0QsOENBQTRCO1lBQ2QsZUFBc0I7WUFBdEIscUNBQXNCO1lBUXBCLGVBQTBCO1lBQTFCLHlDQUEwQjtZQVExQixlQUEwQjtZQUExQix5Q0FBMEI7WUFNekIsZUFBMkI7WUFBM0IsMENBQTJCOzsrQkR2QmpEO0NBa0JDLEFBYkQsQ0FJMEMsZUFBZSxHQVN4RDtTQVRZLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsK0JBQStCO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVkaXRDZWxsRGVmYXVsdCB9IGZyb20gJy4vZWRpdC1jZWxsLWRlZmF1bHQnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC1kZWZhdWx0LWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWZhdWx0LWVkaXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RWRpdENvbXBvbmVudCBleHRlbmRzIEVkaXRDZWxsRGVmYXVsdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldEVkaXRvclR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvciAmJiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yLnR5cGU7XG4gIH1cbn1cbiIsIjxkaXYgW25nU3dpdGNoXT1cImdldEVkaXRvclR5cGUoKVwiPlxuICAgIDxzZWxlY3QtZWRpdG9yICpuZ1N3aXRjaENhc2U9XCInbGlzdCdcIlxuICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgKG9uRWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIChvblN0b3BFZGl0aW5nKT1cIm9uU3RvcEVkaXRpbmcoKVwiPlxuICAgIDwvc2VsZWN0LWVkaXRvcj5cblxuICAgIDx0ZXh0YXJlYS1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIlxuICAgICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAob25FZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAob25TdG9wRWRpdGluZyk9XCJvblN0b3BFZGl0aW5nKClcIj5cbiAgICA8L3RleHRhcmVhLWVkaXRvcj5cblxuICAgIDxjaGVja2JveC1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIlxuICAgICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgIDwvY2hlY2tib3gtZWRpdG9yPlxuXG4gICAgPGNvbXBsZXRlci1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIidjb21wbGV0ZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCI+XG4gICAgPC9jb21wbGV0ZXItZWRpdG9yPlxuXG4gICAgPGlucHV0LWVkaXRvciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgKG9uQ2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChvbkVkaXRlZCk9XCJvbkVkaXRlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChvblN0b3BFZGl0aW5nKT1cIm9uU3RvcEVkaXRpbmcoKVwiPlxuICAgIDwvaW5wdXQtZWRpdG9yPlxuPC9kaXY+Il19