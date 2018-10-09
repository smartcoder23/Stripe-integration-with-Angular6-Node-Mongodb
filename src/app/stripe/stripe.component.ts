import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import{HttpClient} from '@angular/common/http'
import { StripeService, StripeCardComponent,  Elements, Element as StripeElement,ElementOptions, ElementsOptions } from "ngx-stripe";

@Component({
  selector: 'app-stripe',
  templateUrl: 'stripe.component.html'
})
  
export class StripeComponent implements OnInit {
  uri = 'http://localhost:3000/api';
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
 
  
   cardOptions: ElementOptions = {

      style: {
      
     
      base: {
        
        color: '#303238',
        fontSize: '16px',
        fontFamily: '"Open Sans", sans-serif',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: '#CFD7DF',
        },
      },
      invalid: {
        color: '#e5424d',
        ':focus': {
          color: '#303238',
        },
      },
    }
   };
  
   elementsOptions: ElementsOptions = {
     locale: 'es'
   };
  
   stripeTest: FormGroup;
  
  
   constructor(
     private fb: FormBuilder,
     private stripeService: StripeService,private http:HttpClient) {}
  
   ngOnInit() {
     this.stripeTest = this.fb.group({
       name: ['', [Validators.required]]
     });
   }
  
   buy() {
     const name = this.stripeTest.get('name').value;
   
     
     this.stripeService
       .createToken(this.card.getCard(), { name })
       .subscribe(result => {
         if (result.token) {
           // Use the token to create a charge or a customer
           // https://stripe.com/docs/charges
           console.log(result.token.id);
            console.log(result.token.client_ip);
          //  console.log(result.token.card.address_zip);
           console.log(result);
                   this.http.post(`${this.uri}/stripepay`,{result}).subscribe(resp=>{
            console.log(resp);
          })
        
         } else if (result.error) {
           // Error creating the token
           console.log(result.error.message);
         }
       });
   }
 }
 