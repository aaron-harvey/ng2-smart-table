import { Output, EventEmitter, Input, Directive } from '@angular/core';
import { Cell } from '../../../lib/data-set/cell';
import * as i0 from "@angular/core";
var DefaultEditor = /** @class */ (function () {
    function DefaultEditor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
    DefaultEditor.ɵfac = function DefaultEditor_Factory(t) { return new (t || DefaultEditor)(); };
    DefaultEditor.ɵdir = i0.ɵɵdefineDirective({ type: DefaultEditor, inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { onStopEditing: "onStopEditing", onEdited: "onEdited", onClick: "onClick" } });
    return DefaultEditor;
}());
export { DefaultEditor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEditor, [{
        type: Directive
    }], null, { cell: [{
            type: Input
        }], inputClass: [{
            type: Input
        }], onStopEditing: [{
            type: Output
        }], onEdited: [{
            type: Output
        }], onClick: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lZGl0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItc21hcnQtdGFibGUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jZWxsL2NlbGwtZWRpdG9ycy9kZWZhdWx0LWVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWEsTUFBTSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFFbEQ7SUFBQTtRQUtZLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN4QyxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUM3Qzs4RUFQWSxhQUFhO3NEQUFiLGFBQWE7d0JBTDFCO0NBWUMsQUFSRCxJQVFDO1NBUFksYUFBYTtrREFBYixhQUFhO2NBRHpCLFNBQVM7O2tCQUVQLEtBQUs7O2tCQUNMLEtBQUs7O2tCQUVMLE1BQU07O2tCQUNOLE1BQU07O2tCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENlbGwgfSBmcm9tICcuLi8uLi8uLi9saWIvZGF0YS1zZXQvY2VsbCc7XG5cbkBEaXJlY3RpdmUoKVxuZXhwb3J0IGNsYXNzIERlZmF1bHRFZGl0b3IgaW1wbGVtZW50cyBFZGl0b3Ige1xuICBASW5wdXQoKSBjZWxsOiBDZWxsO1xuICBASW5wdXQoKSBpbnB1dENsYXNzOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpIG9uU3RvcEVkaXRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uRWRpdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRWRpdG9yIHtcbiAgY2VsbDogQ2VsbDtcbiAgaW5wdXRDbGFzczogc3RyaW5nO1xuICBvblN0b3BFZGl0aW5nOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgb25FZGl0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICBvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55Pjtcbn1cbiJdfQ==