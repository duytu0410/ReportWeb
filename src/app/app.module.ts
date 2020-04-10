import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormatpipePipe } from './pipe/formatpipe.pipe';
import { FilterpipePipe } from './pipe/filterpipe.pipe';
import {LoggingService} from './service/logging.service';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { Variable } from './model/Variable.class';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './components/combo-chart';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {DataService} from './service/data.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportSaleComponent } from './components/report-sale/report-sale.component';


// const appRoutes:Routes=[
//   {
//     path:'/movie',
//     component:Movie
//   },
//   {
//     path:'/movielist',

//     component:MovieListComponent,
   
//   },
//   {
//     path:'/movieadd',
//     component:MovieAddComponent
//   },
// ];
@NgModule({
  declarations: [
    AppComponent,
    FormatpipePipe,
    FilterpipePipe,
    ReportSaleComponent,
    ComboChartComponent, ComboSeriesVerticalComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ChartsModule,
    NgxChartsModule,
    BrowserAnimationsModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LoggingService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
