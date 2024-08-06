import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { SubmitLoanComponent } from "./submit-loan/submit-loan.component";
import { SuccessPageComponent } from "./components/success-page/success-page.component";
import { ViewAllApplicationsComponent } from "./components/view-applications/view-applications.component";
import { HomeComponent } from "./components/home/home.component";
import { ViewSingleApplicationComponent } from "./components/view-ind-application/view-ind-applications.component";
import { SubmitLoanComponent } from "./components/submit-loan/submit-loan.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  {
    path: "submit-loan",
    component: SubmitLoanComponent,
  },
  {
    path: "view-all-applications",
    component: ViewAllApplicationsComponent,
  },
  {
    path: "success-page",
    component: SuccessPageComponent,
  },
  {
    path: "view-ind-application/:id",
    component: ViewSingleApplicationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
