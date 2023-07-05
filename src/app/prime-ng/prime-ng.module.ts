import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from "primeng/card";
import { FieldsetModule } from "primeng/fieldset";
import { PanelModule } from "primeng/panel";
import { RippleModule } from 'primeng/ripple';

@NgModule({
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    RippleModule
  ]
})
export class PrimeNGModule { }
