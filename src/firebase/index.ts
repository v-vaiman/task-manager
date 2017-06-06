import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


const firebaseConfig = {
  apiKey: 'AIzaSyCbe9t5yDEi-2JaPh4Kxlx3-mudEz1oFoM',
  authDomain: 'taskmanager-b31b7.firebaseapp.com',
  databaseURL: 'https://taskmanager-b31b7.firebaseio.com/',
  storageBucket: 'taskmanager-b31b7.appspot.com'
};


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig, 'taskmanager-b31b7')
  ]
})
export class FirebaseModule {}
