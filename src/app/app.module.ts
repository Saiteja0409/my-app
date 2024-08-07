import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { WishGradeComponent } from './wish-grade/wish-grade.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { EmployeesDataComponent } from './employees-data/employees-data.component';
import { EventRegComponent } from './event-reg/event-reg.component';
import { CartComponent } from './cart/cart.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmployeesDbComponent } from './employees-db/employees-db.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { MyntraComponent } from './myntra/myntra.component';
import { MailsComponent } from './mails/mails.component';
import { MemeComponent } from './meme/meme.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountsComponent } from './create-accounts/create-accounts.component';
import { StudentCardsComponent } from './student-cards/student-cards.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { CreateStudentDetailsComponent } from './create-student-details/create-student-details.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { CapitalDirective } from './capital.directive';
import { PricePipe } from './price.pipe';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';
import { OperationsComponent } from './operations/operations.component';
import { RatingComponent } from './rating/rating.component';
import { AboutUsModule } from './about-us/about-us.module';
import { SiblingCommunicationComponent } from './sibling-communication/sibling-communication.component';
import { SiblingItemsComponent } from './sibling-items/sibling-items.component';
import { SiblingNavComponent } from './sibling-nav/sibling-nav.component';
import { SiblingCartComponent } from './sibling-cart/sibling-cart.component';
import { SiblingDiscountComponent } from './sibling-discount/sibling-discount.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    WishGradeComponent,
    DirectivesComponent,
    PipesComponent,
    EmployeesDataComponent,
    EventRegComponent,
    CartComponent,
    FlipkartComponent,
    EmployeesDbComponent,
    VehicleComponent,
    BankAccountsComponent,
    MyntraComponent,
    MailsComponent,
    MemeComponent,
    CreateVehicleComponent,
    CreateAccountsComponent,
    StudentCardsComponent,
    VehicleDetailsComponent,
    CreateStudentDetailsComponent,
    StudentDetailsComponent,
    BankDetailsComponent,
    CreateFormComponent,
    CapitalDirective,
    PricePipe,
    CreateCompanyComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    NewCalculatorComponent,
    OperationsComponent,
    RatingComponent,
    SiblingCommunicationComponent,
    SiblingItemsComponent,
    SiblingNavComponent,
    SiblingCartComponent,
    SiblingDiscountComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
