import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
 // bootstrap: [AppComponent]
 bootstrap: [],
 entryComponents: [ AppComponent,
  ProductViewComponent]
})
export class AppModule {
constructor(private injector: Injector) {

}

ngDoBootstrap(): void {
  const { injector } = this;

  // create custom elements from angular components
  const ngCustomElement = createCustomElement(ProductViewComponent, { injector });

  // define in browser registry
  customElements.define('ng-el', ngCustomElement);

}

 }
