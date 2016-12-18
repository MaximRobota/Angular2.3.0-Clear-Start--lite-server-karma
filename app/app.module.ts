import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




import { AppComponent } from './app.component';

// in-mem-web-api and its test-data service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]), // <-- for future routing features
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
