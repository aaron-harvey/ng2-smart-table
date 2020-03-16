import { OnChanges, SimpleChanges } from '@angular/core';
import { FilterDefault } from './filter-default';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
export declare class FilterComponent extends FilterDefault implements OnChanges {
    query: string;
    protected dataChangedSub: Subscription;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<FilterComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FilterComponent, "ng2-smart-table-filter", never, {}, {}, never>;
}
