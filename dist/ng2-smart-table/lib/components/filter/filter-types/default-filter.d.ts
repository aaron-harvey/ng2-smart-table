import { EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Column } from '../../../lib/data-set/column';
import * as i0 from "@angular/core";
export declare class DefaultFilter implements Filter, OnDestroy {
    delay: number;
    changesSubscription: Subscription;
    query: string;
    inputClass: string;
    column: Column;
    filter: EventEmitter<string>;
    ngOnDestroy(): void;
    setFilter(): void;
    static ɵfac: i0.ɵɵFactoryDef<DefaultFilter>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<DefaultFilter, never, never, { "query": "query"; "inputClass": "inputClass"; "column": "column"; }, { "filter": "filter"; }, never>;
}
export interface Filter {
    delay?: number;
    changesSubscription?: Subscription;
    query: string;
    inputClass: string;
    column: Column;
    filter: EventEmitter<string>;
}
