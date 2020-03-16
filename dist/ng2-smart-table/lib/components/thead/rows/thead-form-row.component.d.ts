import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import * as i0 from "@angular/core";
export declare class TheadFormRowComponent implements OnChanges {
    grid: Grid;
    row: Row;
    createConfirm: EventEmitter<any>;
    create: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    addInputClass: string;
    onCreate(event: any): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDef<TheadFormRowComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TheadFormRowComponent, "[ng2-st-thead-form-row]", never, { "grid": "grid"; "row": "row"; "createConfirm": "createConfirm"; }, { "create": "create"; }, never>;
}
