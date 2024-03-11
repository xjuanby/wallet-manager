import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../../src/environments/environments';
import { AppComponent } from './app.component';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
  ]
})
export class AppModule { }
