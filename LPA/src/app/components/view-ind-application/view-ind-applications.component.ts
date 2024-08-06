import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  NgModel,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
@Component({
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  selector: "app-view-applications",
  templateUrl: "./view-ind-applications.component.html",
  styleUrl: "./view-ind-applications.component.scss",
})
export class ViewSingleApplicationComponent implements OnInit {
  userId: number | any;
  applicationStatus: string | any;
  score: number | any;
  declineReason: string | any;
  user: User | any;

  formData = new FormGroup<any>({
    firstName: new FormControl("this.user.firstName"),
    middleName: new FormControl(""),
    lastName: new FormControl(""),
    dateOfBirth: new FormControl(""),
    maritalStatus: new FormControl(""),
    ssnNumber: new FormControl(""),
    loanAmount: new FormControl(""),
    loanPurpose: new FormControl(""),
    description: new FormControl(""),
    addressLine1: new FormControl(""),
    addressLine2: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    postalCode: new FormControl(""),
    homePhone: new FormControl(""),
    officePhone: new FormControl(""),
    mobile: new FormControl(""),
    email: new FormControl(""),
    employerName: new FormControl(""),
    annualSalary: new FormControl(""),
    workExperienceYears: new FormControl(""),
    workExperienceMonths: new FormControl(""),
    designation: new FormControl(""),
    employerAddress: new FormControl(""),
    score: new FormControl(""),
    submittedDate: new FormControl(""),
    declineReason: new FormControl(""),
    applicationStatus: new FormControl(""),
  });

  /*********/
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService // public formData: FormGroup,
  ) {}

  /************/
  ngOnInit(): void {
    this.applicationStatus = "";
    this.declineReason = "";
    this.activatedRoute.paramMap.subscribe((params) => {
      this.userId = params.get("id");
    });

    /*********/
    this.userService.getSingleApplication(this.userId).subscribe(
      (response) => {
        console.log("response-method", response);
        this.user = response;
        console.log("user1", this.user); // this is getting printed properly ✅
        if (this.user != null) {
          this.applicationStatus = this.user.applicationStatus;
          this.declineReason = this.user.declineReason;
          this.score = this.user.score;

          this.formData.patchValue(this.user);
          this.formData.disable();
        } else {
          alert("No such user exists");
          // this.router.navigate(["/"]);
        }
      },
      (error) => {
        console.log(error);
        alert("Fetching User Data failed");
      }
    );
    /*************/

    console.log("user-out", this.user); // this doesn't gets printed properly 😢
  }

  populateForm(): void {
    this.formData = new FormGroup({
      firstName: new FormControl(this.user.firstName),
      middleName: new FormControl(this.user.middleName),
      lastName: new FormControl(this.user.lastName),
      dateOfBirth: new FormControl(this.user.dateOfBirth),
      maritalStatus: new FormControl(this.user.maritalStatus),
      ssnNumber: new FormControl(this.user.ssnNumber),
      loanAmount: new FormControl(this.user.loanAmount),
      loanPurpose: new FormControl(this.user.loanPurpose),
      description: new FormControl(this.user.description),
      addressLine1: new FormControl(this.user.addressLine1),
      addressLine2: new FormControl(this.user.addressLine2),
      city: new FormControl(this.user.city),
      state: new FormControl(this.user.state),
      postalCode: new FormControl(this.user.postalCode),
      homePhone: new FormControl(this.user.homePhone),
      officePhone: new FormControl(this.user.officePhone),
      mobile: new FormControl(this.user.mobile),
      email: new FormControl(this.user.email),
      employerName: new FormControl(this.user.employerName),
      annualSalary: new FormControl(this.user.annualSalary),
      workExperienceYears: new FormControl(this.user.workExperienceYears),
      workExperienceMonths: new FormControl(this.user.workExperienceMonths),
      designation: new FormControl(this.user.designation),
      employerAddress: new FormControl(this.user.employerAddress),
      employerCity: new FormControl(this.user.employerCity),
      employerState: new FormControl(this.user.employerState),
      employerPostalCode: new FormControl(this.user.employerPostalCode),

      // middleName: [{ value: this.user.middleName, disabled: true }],
      // lastName: [{ value: this.user.lastName, disabled: true }],
      // dateOfBirth: [{ value: this.user.dateOfBirth, disabled: true }],
      // maritalStatus: [{ value: this.user.maritalStatus, disabled: true }],
      // ssnNumber: [{ value: this.user.ssnNumber, disabled: true }],
      // loanAmount: [{ value: this.user.loanAmount, disabled: true }],
      // loanPurpose: [{ value: this.user.loanPurpose, disabled: true }],
      // description: [{ value: this.user.description, disabled: true }],
      // addressLine1: [{ value: this.user.addressLine1, disabled: true }],
      // addressLine2: [{ value: this.user.addressLine2, disabled: true }],
      // city: [{ value: this.user.city, disabled: true }],
      // state: [{ value: this.user.state, disabled: true }],
      // postalCode: [{ value: this.user.postalCode, disabled: true }],
      // homePhone: [{ value: this.user.homePhone, disabled: true }],
      // officePhone: [{ value: this.user.officePhone, disabled: true }],
      // mobile: [{ value: this.user.mobile, disabled: true }],
      // email: [{ value: this.user.email, disabled: true }],
      // employerName: [{ value: this.user.employerName, disabled: true }],
      // annualSalary: [{ value: this.user.annualSalary, disabled: true }],
      // workExperienceYears: [{ value: this.user.workExperienceYears, disabled: true }],
      // workExperienceMonths: [{ value: this.user.workExperienceMonths, disabled: true }],
      // designation: [{ value: this.user.designation, disabled: true }],
      // employerAddress: [{ value: this.user.employerAddress, disabled: true }],
      // employerCity: [{ value: this.user.employerCity, disabled: true }],
      // employerState: [{ value: this.user.employerState, disabled: true }],
      // employerPostalCode: [{ value: this.user.employerPostalCode, disabled: true }],
    });
  }

  // userToFormData(user: User): any {
  //   return {
  //     firstName: user.firstName,
  //     middleName: user.middleName,
  //     lastName: user.lastName,
  //     dateOfBirth: user.dateOfBirth,
  //     maritalStatus: user.maritalStatus,
  //     ssnNumber: user.ssnNumber,
  //     loanAmount: user.loanAmount,
  //     loanPurpose: user.loanPurpose,
  //     description: user.description,
  //     addressLine1: user.addressLine1,
  //     addressLine2: user.addressLine2,
  //     city: user.city,
  //     state: user.state,
  //     postalCode: user.postalCode,
  //     homePhone: user.homePhone,
  //     officePhone: user.officePhone,
  //     mobile: user.mobile,
  //     email: user.email,
  //     employerName: user.employerName,
  //     annualSalary: user.annualSalary,
  //     workExperienceYears: user.workExperienceYears,
  //     workExperienceMonths: user.workExperienceMonths,
  //     designation: user.designation,
  //     employerAddress: user.employerAddress,
  //     employerCity: user.employerCity,
  //     employerState: user.employerState,
  //     employerPostalCode: user.employerPostalCode,
  // }
  // }
}

/*
        this.formData = new FormGroup({
          firstName: new FormControl(response.firstName, ),
          middleName: new FormControl(response.middleName,),
          lastName: new FormControl(response.lastName, ),
          dateOfBirth: new FormControl(response.dateOfBirth, ),
          maritalStatus: new FormControl(response.maritalStatus, ),
          ssnNumber: new FormControl(response.ssnNumber,),
          loanAmount: new FormControl(response.loanAmount, ),
          loanPurpose: new FormControl(response.loanPurpose, ),
          description: new FormControl(response.description,),
          addressLine1: new FormControl(response.addressLine1, ),
          addressLine2: new FormControl(response.addressLine2,),
          city: new FormControl(response.city, ),
          state: new FormControl(response.state, ),
          postalCode: new FormControl(response.postalCode, ),
          homePhone: new FormControl(response.homePhone, ),
          officePhone: new FormControl(response.officePhone, ),
          mobile: new FormControl(response.mobile, ),
          email: new FormControl(response.email,),
          employerName: new FormControl(response.employerName, ),
          annualSalary: new FormControl(response.annualSalary, ),
          workExperienceYears: new FormControl(response.workExperienceYears, ),
          workExperienceMonths: new FormControl(response.workExperienceMonths, ),
          designation: new FormControl(response.designation, ),
          employerAddress: new FormControl(response.employerAddress),
          submittedDate: new FormControl(response.submittedDate),
          // score: response.score,
          // declineReason: response.declineReason,
        });
        */
