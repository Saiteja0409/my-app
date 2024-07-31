import { Component, createComponent, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
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
import { StudentCardsService } from './student-cards.service';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { AuthenticationGuard } from './authentication.guard';
import { CreateFormComponent } from './create-form/create-form.component';
import { NotifyGuard } from './notify.guard';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ParentComponent } from './parent/parent.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';
import { RatingComponent } from './rating/rating.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard',canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
    {path:'welcome', component:WelcomeComponent},
    {path:'home', component:HomeComponent},
    {path:'data-binding', component:DataBindingComponent},
    {path:'calculator', component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle', component:CircleComponent},
    {path:'bmi', component:BmiComponent},
    {path:'wish-grade', component:WishGradeComponent},
    {path:'directives', component:DirectivesComponent},
    {path:'pipes',component:PipesComponent},
    {path:'employees-data', component:EmployeesDataComponent},
    {path:'event-reg', component:EventRegComponent},
    {path:'cart', component:CartComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'employees-db', component:EmployeesDbComponent},
    {path:'vehicle', component:VehicleComponent},
    {path:'bank_accounts', component:BankAccountsComponent},
    {path:'myntra', component:MyntraComponent},
    {path:'mails', component:MailsComponent},
    {path:'meme', component:MemeComponent},
    {path:'create-vehicle', component:CreateVehicleComponent},
    {path:'create-accounts', component:CreateAccountsComponent},
    {path:'student-cards', component:StudentCardsComponent},
    {path:'vehicle-details/:id', component:VehicleDetailsComponent},
    {path:'edit-vehicle/:id', component:CreateVehicleComponent},
    {path:'create_student_details', component:CreateStudentDetailsComponent},
    {path:'student_details/:id', component:StudentDetailsComponent},
    {path:'edit-student/:id', component:CreateStudentDetailsComponent},
    {path:'bank-details/:id', component:BankDetailsComponent},
    {path:'create_form', canDeactivate:[NotifyGuard], component:CreateFormComponent},
    {path:'create-company', canDeactivate:[NotifyGuard], component:CreateCompanyComponent},
    {path:'parent', component:ParentComponent},
    {path:'new-calculator', component:NewCalculatorComponent},
    {path:'rating', component:RatingComponent},
    {path:'about-company', component:AboutCompanyComponent},
    
    {
      path: 'payments',
      loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule)
    }
    
  ]},
  {path:'', component:LoginComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
