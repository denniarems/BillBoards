import { GetDataService } from './Service/get-data.service';
import { AppService } from './Service/app.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FindBoardsComponent } from './Components/find-boards/find-boards.component';
import { AboutComponent } from './Components/about/about.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './Components/home/details/details.component';
import { MaterialModule } from './Modules/angularMaterial';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AgmCoreModule } from '@agm/core';
import { FilterPipeModule } from 'ngx-filter-pipe';
@NgModule({
  // entryComponents: [HomeComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    FindBoardsComponent,
    AboutComponent,
    MainNavComponent,
    DetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FilterPipeModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCg1gey4ttLF2Z7KF13_D10B_cOnpcbm-c'
    })
  ],
  providers: [GetDataService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
