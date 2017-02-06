import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing }       from './pages.routing';

import { DemoComponent } from './demo';
import { DocumentationComponent } from './documentation';
import { HomeComponent } from './home';
import { Ng2SmartTableModule } from '../../../../src/ng2-smart-table.module';
import { ScrollPositionDirective } from '../theme/directives/scrollPosition.directive';

import { BasicExampleComponent } from './demo/components/basic-example.component';
import { BasicExampleDataComponent } from './demo/components/basic-example-data.component';
import { BasicExampleSourceComponent } from './demo/components/basic-example-source.component';
import { BasicExampleLoadComponent } from './demo/components/basic-example-load.component';
import { BasicExampleMultiSelectComponent } from './demo/components/basic-example-multi-select.component';
import { AdvancedExampleConfirmComponent } from './demo/components/advanced-example-confirm.component';
import { AdvancedExampleServerComponent } from './demo/components/advanced-example-server.component';
import { AdvancedExamplesTypesComponent } from './demo/components/advanced-example-types.component';
import { CustomColumnComponent } from './demo/components/custom-column.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    routing,
  ],
  entryComponents: [CustomColumnComponent],
  declarations: [
    DemoComponent,
    DocumentationComponent,
    HomeComponent,
    BasicExampleComponent,
    BasicExampleDataComponent,
    BasicExampleSourceComponent,
    BasicExampleLoadComponent,
    BasicExampleMultiSelectComponent,
    AdvancedExampleConfirmComponent,
    AdvancedExampleServerComponent,
    AdvancedExamplesTypesComponent,
    ScrollPositionDirective,
    CustomColumnComponent,
  ],
})
export class PagesModule {
}
