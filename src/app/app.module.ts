import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { FormsModule } from '@angular/forms';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ChartComponent } from './components/chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundsComponent } from './components/transfer-funds/transfer-funds.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    ContactDetailsComponent,
    ContactEditComponent,
    ContactFilterComponent,
    StatisticsComponent,
    ChartComponent,
    SignupComponent,
    TransferFundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
