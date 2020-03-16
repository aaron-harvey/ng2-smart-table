import { EventEmitter } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
export declare class DefaultEditor implements Editor {
    cell: Cell;
    inputClass: string;
    onStopEditing: EventEmitter<any>;
    onEdited: EventEmitter<any>;
    onClick: EventEmitter<any>;
    static ɵfac: i0.ɵɵFactoryDef<DefaultEditor>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<DefaultEditor, never, never, { "cell": "cell"; "inputClass": "inputClass"; }, { "onStopEditing": "onStopEditing"; "onEdited": "onEdited"; "onClick": "onClick"; }, never>;
}
export interface Editor {
    cell: Cell;
    inputClass: string;
    onStopEditing: EventEmitter<any>;
    onEdited: EventEmitter<any>;
    onClick: EventEmitter<any>;
}
