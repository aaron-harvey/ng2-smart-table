import { EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
export declare class EditCellDefault {
    cell: Cell;
    inputClass: string;
    edited: EventEmitter<any>;
    onEdited(event: any): boolean;
    onStopEditing(): boolean;
    onClick(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<EditCellDefault>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<EditCellDefault, never, never, { "cell": "cell"; "inputClass": "inputClass"; }, { "edited": "edited"; }, never>;
}
