import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxStripeModule } from 'ngx-stripe';
import { AppComponent } from './app.component';
import { StripeComponent } from './stripe/stripe.component';
import { ReactiveFormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    StripeComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxStripeModule.forRoot("***your-stripe-publishable key***"),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
