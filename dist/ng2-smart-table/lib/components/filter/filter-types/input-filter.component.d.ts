import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DefaultFilter } from './default-filter';
import * as i0 from "@angular/core";
export declare class InputFilterComponent extends DefaultFilter implements OnInit, OnChanges {
    inputControl: FormControl;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<InputFilterComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InputFilterComponent, "input-filter", never, {}, {}, never>;
}
