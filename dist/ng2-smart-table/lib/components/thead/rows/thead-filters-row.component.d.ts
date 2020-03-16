import { EventEmitter, OnChanges } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import * as i0 from "@angular/core";
export declare class TheadFitlersRowComponent implements OnChanges {
    grid: Grid;
    source: DataSource;
    create: EventEmitter<any>;
    filter: EventEmitter<any>;
    isMultiSelectVisible: boolean;
    showActionColumnLeft: boolean;
    showActionColumnRight: boolean;
    filterInputClass: string;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDef<TheadFitlersRowComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TheadFitlersRowComponent, "[ng2-st-thead-filters-row]", never, { "grid": "grid"; "source": "source"; }, { "create": "create"; "filter": "filter"; }, never>;
}
