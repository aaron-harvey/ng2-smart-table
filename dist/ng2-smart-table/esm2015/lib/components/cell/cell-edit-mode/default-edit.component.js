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
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onClick($event); })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.onEdited($event); })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onStopEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r15.cell)("inputClass", ctx_r15.inputClass);
} }
function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.onClick($event); })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onEdited($event); })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.onStopEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r16.cell)("inputClass", ctx_r16.inputClass);
} }
function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "checkbox-editor", 6);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onClick($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r17.cell)("inputClass", ctx_r17.inputClass);
} }
function DefaultEditComponent_completer_editor_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "completer-editor", 7);
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r18.cell);
} }
function DefaultEditComponent_input_editor_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input-editor", 5);
    i0.ɵɵlistener("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.onClick($event); })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.onEdited($event); })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r33 = i0.ɵɵnextContext(); return ctx_r33.onStopEditing(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext();
    i0.ɵɵproperty("cell", ctx_r19.cell)("inputClass", ctx_r19.inputClass);
} }
export class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEditComponent, [{
        type: Component,
        args: [{
                selector: 'table-cell-default-editor',
                templateUrl: './default-edit.component.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL2NlbGwvY2VsbC1lZGl0LW1vZGUvZGVmYXVsdC1lZGl0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7O0lDRGxELHdDQU1nQjtJQUhELHlOQUEyQiwrTUFBQSxrTkFBQTtJQUcxQyxpQkFBZ0I7OztJQUxELG1DQUFhLGtDQUFBOzs7O0lBTzVCLDBDQU1rQjtJQUhELDZOQUEyQixtTkFBQSxzTkFBQTtJQUc1QyxpQkFBa0I7OztJQUxELG1DQUFhLGtDQUFBOzs7O0lBTzlCLDBDQUlrQjtJQURELDZOQUEyQjtJQUM1QyxpQkFBa0I7OztJQUhELG1DQUFhLGtDQUFBOzs7SUFLOUIsc0NBRW1COzs7SUFERCxtQ0FBYTs7OztJQUcvQix1Q0FNZTtJQUhELHVOQUEyQiw2TUFBQSxnTkFBQTtJQUd6QyxpQkFBZTs7O0lBTEQsbUNBQWEsa0NBQUE7O0FEbkIvQixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTtJQUV2RDtRQUNFLEtBQUssRUFBRSxDQUFDO0lBQ1YsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzRSxDQUFDOzt3RkFSVSxvQkFBb0I7eURBQXBCLG9CQUFvQjtRQ1RqQyw4QkFDSTtRQUFBLHlGQU1BO1FBRUEsNkZBTUE7UUFFQSw2RkFJQTtRQUVBLCtGQUVBO1FBRUEsdUZBTUE7UUFDSixpQkFBTTs7UUFsQ0QsOENBQTRCO1FBQ2QsZUFBc0I7UUFBdEIscUNBQXNCO1FBUXBCLGVBQTBCO1FBQTFCLHlDQUEwQjtRQVExQixlQUEwQjtRQUExQix5Q0FBMEI7UUFNekIsZUFBMkI7UUFBM0IsMENBQTJCOztrRERkcEMsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsK0JBQStCO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVkaXRDZWxsRGVmYXVsdCB9IGZyb20gJy4vZWRpdC1jZWxsLWRlZmF1bHQnO1xuaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhLXNldC9jZWxsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtY2VsbC1kZWZhdWx0LWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZWZhdWx0LWVkaXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RWRpdENvbXBvbmVudCBleHRlbmRzIEVkaXRDZWxsRGVmYXVsdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldEVkaXRvclR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jZWxsLmdldENvbHVtbigpLmVkaXRvciAmJiB0aGlzLmNlbGwuZ2V0Q29sdW1uKCkuZWRpdG9yLnR5cGU7XG4gIH1cbn1cbiIsIjxkaXYgW25nU3dpdGNoXT1cImdldEVkaXRvclR5cGUoKVwiPlxuICAgIDxzZWxlY3QtZWRpdG9yICpuZ1N3aXRjaENhc2U9XCInbGlzdCdcIlxuICAgICAgICAgICAgICAgICAgIFtjZWxsXT1cImNlbGxcIlxuICAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgKG9uRWRpdGVkKT1cIm9uRWRpdGVkKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIChvblN0b3BFZGl0aW5nKT1cIm9uU3RvcEVkaXRpbmcoKVwiPlxuICAgIDwvc2VsZWN0LWVkaXRvcj5cblxuICAgIDx0ZXh0YXJlYS1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0YXJlYSdcIlxuICAgICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAob25FZGl0ZWQpPVwib25FZGl0ZWQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAob25TdG9wRWRpdGluZyk9XCJvblN0b3BFZGl0aW5nKClcIj5cbiAgICA8L3RleHRhcmVhLWVkaXRvcj5cblxuICAgIDxjaGVja2JveC1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIidjaGVja2JveCdcIlxuICAgICAgICAgICAgICAgICAgICAgW2NlbGxdPVwiY2VsbFwiXG4gICAgICAgICAgICAgICAgICAgICBbaW5wdXRDbGFzc109XCJpbnB1dENsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiPlxuICAgIDwvY2hlY2tib3gtZWRpdG9yPlxuXG4gICAgPGNvbXBsZXRlci1lZGl0b3IgKm5nU3dpdGNoQ2FzZT1cIidjb21wbGV0ZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCI+XG4gICAgPC9jb21wbGV0ZXItZWRpdG9yPlxuXG4gICAgPGlucHV0LWVkaXRvciAqbmdTd2l0Y2hEZWZhdWx0XG4gICAgICAgICAgICAgICAgICBbY2VsbF09XCJjZWxsXCJcbiAgICAgICAgICAgICAgICAgIFtpbnB1dENsYXNzXT1cImlucHV0Q2xhc3NcIlxuICAgICAgICAgICAgICAgICAgKG9uQ2xpY2spPVwib25DbGljaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChvbkVkaXRlZCk9XCJvbkVkaXRlZCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChvblN0b3BFZGl0aW5nKT1cIm9uU3RvcEVkaXRpbmcoKVwiPlxuICAgIDwvaW5wdXQtZWRpdG9yPlxuPC9kaXY+Il19