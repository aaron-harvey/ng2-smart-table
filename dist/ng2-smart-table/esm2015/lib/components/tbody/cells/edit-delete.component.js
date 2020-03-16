import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function TbodyEditDeleteComponent_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵlistener("click", function TbodyEditDeleteComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r134); const ctx_r133 = i0.ɵɵnextContext(); return ctx_r133.onEdit($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r131 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r131.editRowButtonContent, i0.ɵɵsanitizeHtml);
} }
function TbodyEditDeleteComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r136 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵlistener("click", function TbodyEditDeleteComponent_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r136); const ctx_r135 = i0.ɵɵnextContext(); return ctx_r135.onDelete($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r132 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r132.deleteRowButtonContent, i0.ɵɵsanitizeHtml);
} }
export class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    onEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    }
    onDelete(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    }
}
TbodyEditDeleteComponent.ɵfac = function TbodyEditDeleteComponent_Factory(t) { return new (t || TbodyEditDeleteComponent)(); };
TbodyEditDeleteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TbodyEditDeleteComponent, selectors: [["ng2-st-tbody-edit-delete"]], inputs: { grid: "grid", row: "row", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm" }, outputs: { edit: "edit", delete: "delete", editRowSelect: "editRowSelect" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-edit-edit", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", "class", "ng2-smart-action ng2-smart-action-delete-delete", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-edit", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-delete-delete", 3, "innerHTML", "click"]], template: function TbodyEditDeleteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, TbodyEditDeleteComponent_a_0_Template, 1, 1, "a", 0);
        i0.ɵɵtemplate(1, TbodyEditDeleteComponent_a_1_Template, 1, 1, "a", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isActionEdit);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isActionDelete);
    } }, directives: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TbodyEditDeleteComponent, [{
        type: Component,
        args: [{
                selector: 'ng2-st-tbody-edit-delete',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <a href="#" *ngIf="isActionEdit" class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="isActionDelete" class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent" (click)="onDelete($event)"></a>
  `,
            }]
    }], null, { grid: [{
            type: Input
        }], row: [{
            type: Input
        }], source: [{
            type: Input
        }], deleteConfirm: [{
            type: Input
        }], editConfirm: [{
            type: Input
        }], edit: [{
            type: Output
        }], delete: [{
            type: Output
        }], editRowSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1kZWxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvdGJvZHkvY2VsbHMvZWRpdC1kZWxldGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQWEsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0lBTTlELDRCQUNvRTtJQUE3QixtTUFBd0I7SUFBQyxpQkFBSTs7O0lBQWhFLDRFQUFrQzs7OztJQUN0Qyw0QkFDd0U7SUFBL0IscU1BQTBCO0lBQUMsaUJBQUk7OztJQUFwRSw4RUFBb0M7O0FBRzVDLE1BQU0sT0FBTyx3QkFBd0I7SUFWckM7UUFrQlksU0FBSSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDL0IsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDakMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0tBMkNuRDtJQXBDQyxNQUFNLENBQUMsS0FBVTtRQUNmLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWxDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNiLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtnQkFDeEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3BCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFVBQVUsRUFBRTtZQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUNwQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDaEQ7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O2dHQXBEVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQU5qQyxxRUFDZ0U7UUFDaEUscUVBQ29FOztRQUh4RCx1Q0FBb0I7UUFFcEIsZUFBc0I7UUFBdEIseUNBQXNCOztrREFJekIsd0JBQXdCO2NBVnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFOzs7OztHQUtUO2FBQ0Y7O2tCQUdFLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuLi8uLi8uLi9saWIvZ3JpZCc7XG5pbXBvcnQgeyBSb3cgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvcm93JztcbmltcG9ydCB7IERhdGFTb3VyY2UgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zb3VyY2UvZGF0YS1zb3VyY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItc3QtdGJvZHktZWRpdC1kZWxldGUnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiaXNBY3Rpb25FZGl0XCIgY2xhc3M9XCJuZzItc21hcnQtYWN0aW9uIG5nMi1zbWFydC1hY3Rpb24tZWRpdC1lZGl0XCJcbiAgICAgICAgW2lubmVySFRNTF09XCJlZGl0Um93QnV0dG9uQ29udGVudFwiIChjbGljayk9XCJvbkVkaXQoJGV2ZW50KVwiPjwvYT5cbiAgICA8YSBocmVmPVwiI1wiICpuZ0lmPVwiaXNBY3Rpb25EZWxldGVcIiBjbGFzcz1cIm5nMi1zbWFydC1hY3Rpb24gbmcyLXNtYXJ0LWFjdGlvbi1kZWxldGUtZGVsZXRlXCJcbiAgICAgICAgW2lubmVySFRNTF09XCJkZWxldGVSb3dCdXR0b25Db250ZW50XCIgKGNsaWNrKT1cIm9uRGVsZXRlKCRldmVudClcIj48L2E+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRib2R5RWRpdERlbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZ3JpZDogR3JpZDtcbiAgQElucHV0KCkgcm93OiBSb3c7XG4gIEBJbnB1dCgpIHNvdXJjZTogRGF0YVNvdXJjZTtcbiAgQElucHV0KCkgZGVsZXRlQ29uZmlybTogRXZlbnRFbWl0dGVyPGFueT47XG4gIEBJbnB1dCgpIGVkaXRDb25maXJtOiBFdmVudEVtaXR0ZXI8YW55PjtcblxuICBAT3V0cHV0KCkgZWRpdCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGVsZXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBlZGl0Um93U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgaXNBY3Rpb25FZGl0OiBib29sZWFuO1xuICBpc0FjdGlvbkRlbGV0ZTogYm9vbGVhbjtcbiAgZWRpdFJvd0J1dHRvbkNvbnRlbnQ6IHN0cmluZztcbiAgZGVsZXRlUm93QnV0dG9uQ29udGVudDogc3RyaW5nO1xuXG4gIG9uRWRpdChldmVudDogYW55KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIHRoaXMuZWRpdFJvd1NlbGVjdC5lbWl0KHRoaXMucm93KTtcblxuICAgIGlmICh0aGlzLmdyaWQuZ2V0U2V0dGluZygnbW9kZScpID09PSAnZXh0ZXJuYWwnKSB7XG4gICAgICB0aGlzLmVkaXQuZW1pdCh7XG4gICAgICAgIGRhdGE6IHRoaXMucm93LmdldERhdGEoKSxcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWQuZWRpdCh0aGlzLnJvdyk7XG4gICAgfVxuICB9XG5cbiAgb25EZWxldGUoZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBpZiAodGhpcy5ncmlkLmdldFNldHRpbmcoJ21vZGUnKSA9PT0gJ2V4dGVybmFsJykge1xuICAgICAgdGhpcy5kZWxldGUuZW1pdCh7XG4gICAgICAgIGRhdGE6IHRoaXMucm93LmdldERhdGEoKSxcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdyaWQuZGVsZXRlKHRoaXMucm93LCB0aGlzLmRlbGV0ZUNvbmZpcm0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCl7XG4gICAgdGhpcy5pc0FjdGlvbkVkaXQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnYWN0aW9ucy5lZGl0Jyk7XG4gICAgdGhpcy5pc0FjdGlvbkRlbGV0ZSA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdhY3Rpb25zLmRlbGV0ZScpO1xuICAgIHRoaXMuZWRpdFJvd0J1dHRvbkNvbnRlbnQgPSB0aGlzLmdyaWQuZ2V0U2V0dGluZygnZWRpdC5lZGl0QnV0dG9uQ29udGVudCcpO1xuICAgIHRoaXMuZGVsZXRlUm93QnV0dG9uQ29udGVudCA9IHRoaXMuZ3JpZC5nZXRTZXR0aW5nKCdkZWxldGUuZGVsZXRlQnV0dG9uQ29udGVudCcpO1xuICB9XG59XG4iXX0=