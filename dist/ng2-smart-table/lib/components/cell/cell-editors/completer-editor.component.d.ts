import { OnInit } from '@angular/core';
import { CompleterService } from 'ng2-completer';
import { DefaultEditor } from './default-editor';
import * as i0 from "@angular/core";
export declare class CompleterEditorComponent extends DefaultEditor implements OnInit {
    private completerService;
    completerStr: string;
    constructor(completerService: CompleterService);
    ngOnInit(): void;
    onEditedCompleter(event: {
        title: '';
    }): boolean;
    static ɵfac: i0.ɵɵFactoryDef<CompleterEditorComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CompleterEditorComponent, "completer-editor", never, {}, {}, never>;
}
