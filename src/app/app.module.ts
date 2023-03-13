import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GeometriComponent } from './geometri/geometri.component';
import { KvadratComponent } from './kvadrat/kvadrat.component';

@NgModule({
  declarations: [
    AppComponent,
    GeometriComponent,
    KvadratComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
