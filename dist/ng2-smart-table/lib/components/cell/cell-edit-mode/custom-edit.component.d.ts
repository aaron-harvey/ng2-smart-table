import { ComponentFactoryResolver, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { EditCellDefault } from './edit-cell-default';
import * as i0 from "@angular/core";
export declare class CustomEditComponent extends EditCellDefault implements OnChanges, OnDestroy {
    private resolver;
    customComponent: any;
    dynamicTarget: any;
    constructor(resolver: ComponentFactoryResolver);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CustomEditComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CustomEditComponent, "table-cell-custom-editor", never, {}, {}, never>;
}
