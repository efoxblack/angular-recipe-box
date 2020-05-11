import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './components/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FootersComponent } from './components/footers/footers.component';
import { CardsComponent } from './components/cards/cards.component';
<<<<<<< HEAD
import { DemoComponent } from './demo/demo.component';
=======
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { PopUpService } from './components/services/pop-up.service';
import { HelloWorldComponent } from './hello-world/hello-world.component';
>>>>>>> 406df1e67f4846e074ddc36b0e5d338c3847b5b7

@NgModule({
  declarations: [
    AppComponent,
    FootersComponent,
    CardsComponent,
<<<<<<< HEAD
    DemoComponent
=======
    CardDetailsComponent,
    HelloWorldComponent
>>>>>>> 406df1e67f4846e074ddc36b0e5d338c3847b5b7
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [PopUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
