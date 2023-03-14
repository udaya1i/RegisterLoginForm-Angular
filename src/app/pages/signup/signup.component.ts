import { Component, OnInit, NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserServicesService } from 'src/app/services/user-services.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserServicesService, private snack:MatSnackBar) { }
  public user={
    username:'',
    password:'',
    email:'',
    phone:'',
    firstName:'',
    lastName:''   
  }
  // public usernamenotfound='';
  // public passwordnotfound='';
  // public firstnamenotfound='';
  // public lastnamenotfound='';
  ngOnInit(): void {
  }
  formsubmit(){
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null){
      this.snack.open("UserName is Required !!!!", "ok",{
        duration:5000 
        // verticalPosition:'top',
        // horizontalPosition:'right'
      });
      // console.log(this.user);
      // this.usernamenotfound="UserName Missing"
      return;
    }
     if(this.user.firstName==''||this.user.firstName==null){
      this.snack.open("FirstName is Required !!", "ok",{duration:5000})
      return; 
    }
    if(this.user.lastName==''|| this.user.firstName==null){
      this.snack.open("LastName is Required !!","ok", {duration:3000})
      return;
    }
    if(this.user.password=='' || this.user.password==null){
      this.snack.open("Password is required !!", "ok", {duration:3000})
    }
    // addUser
    this.userService.addUser(this.user).subscribe(
      (success:any)=>{
          console.log(success);
          Swal.fire('User Registered Successfulley','User Id is '+success.id, 'success')          

          // Swal.fire({
          //   position: 'top-end',
          //   icon: 'success',
          //   title: 'Registration Successfull',
          //   showConfirmButton: false,
          //   timer: 1500
          // })          
          
      },

      // if error occure
      (error)=>{
          console.log(error);
          Swal.fire('Something Went Wrong') 
        }
    )
  }
}