import * as firebase from 'firebase/app';

import 'firebase/storage';
import 'firebase/database';

import { Injectable, Inject } from '@angular/core';
import * as flamelink from 'flamelink';
import 'flamelink/content';
import 'flamelink/storage';
import { FirebaseApp } from '@angular/fire';
import { AppService } from './app.service';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  billboard1 = [];
  get flApp(): flamelink.app.App {
    return this.app;
  }
  set flApp(value: flamelink.app.App) {
    this.app = value;
  }

  constructor(
    @Inject(FirebaseApp)
    private _fb: firebase.app.App,
    public appservice: AppService
  ) {
    const config: flamelink.app.Config = {
      firebaseApp: this._fb,
      env: 'production',
      locale: 'en-US'
    };
    this.flApp = flamelink(config);
  }

  // GET|SET flApp
  public app: flamelink.app.App;
  getimgurl(id: string) {
    return this.app.storage.getURL({
      fileId: id
    });
  }
  getApp() {
    return this.app.content.get({
      schemaKey: 'billBoards'
    });
  }
  getApp1() {
    return this.app.content.get({
      schemaKey: 'billBoards'
    });
  }
}
// MUST include this next line for Flamelink SDK to work with SSR Universal
// import { AngularFireDatabase } from '@angular/fire/database';
