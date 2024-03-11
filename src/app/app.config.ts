import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"administrador-de-billetera","appId":"1:929531100032:web:e0a7a1063e6a8dd4b85f65","storageBucket":"administrador-de-billetera.appspot.com","apiKey":"AIzaSyCR3LNrll8PHSnl_7mkXppCI5V17PIvUiw","authDomain":"administrador-de-billetera.firebaseapp.com","messagingSenderId":"929531100032"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideFunctions(() => getFunctions())), importProvidersFrom(provideStorage(() => getStorage()))]
};
