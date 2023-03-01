












let submit = document.getElementById("submit-btn")
submit.addEventListener("click",
(e)=>{e.preventDefault();
    validate();
})
let flag = 1;
function validate() {
    let firstname= document.querySelector("#fName").value;
    let fnameRegex = /^[a-zA-Z0-9]$/;
   if (firstname=="") {
     document.getElementById("fName-p").innerHTML = "First Name is empty";
    flag = 0;
   }
     else if(firstname.trim().match(fnameRegex)){
     flag = 1;
     }
     else{
        document.getElementById("fName-p").innerHTML = "Enter valid firstname";
        flag = 0;
     }
     let lastname = document.getElementById("lName").value;
     let lnameRegex = /^[a-zA-Z0-9]$/;
     if(lastname==""){
        document.getElementById("lName-p").innerHTML = "Last name is empty"
        flag=0;
     }
     else if(lastname.trim().match(lnameRegex)){
        flag = 1;
     }
     else{
        document.getElementById("lName-p").innerHTML = "Enter valid lastname"
        flag = 0;
     }
      let phoneNo = document.getElementById("phone-num").value;
      let phoneRegex = /^[6-9][0-9]{9}$/;
      if(phoneNo==""){
        document.getElementById("phone-p").innerHTML = "Phone no. is empty"
        flag  = 0;
      }
      else if(phoneNo.match(phoneRegex)){
        flag = 1;
      }
      else{
        document.getElementById("phone-p").innerHTML = " Enter valid Phone no."
        flag = 0;
      }
      let email = document.getElementById("mail").value;
      let mailRegex = /^([a-zA-Z\_.\0-9]+)@([a-zA-Z0-9]+).([a-z]{2,20})$/;
      if(email==""){
         document.getElementById("mail-p").innerHTML = "Email is required"
         flag= 0;
      }
      else if(email.match(mailRegex)){
         flag = 1;
      }
      else{
         document.getElementById("mail-p").innerHTML = "Enter valid email id"
         flag = 0;
      }
      let email1 = document.getElementById("mail1").value;
      let email1Regex = /^([a-zA-Z\_.\0-9]+)@([a-zA-Z0-9]+).([a-z]{2,20})$/;
      if(email1==""){
         document.getElementById("mail1-p").innerHTML = "Email is required"
         flag= 0;
      }
      else if(email1.match(email1Regex)){
         flag=1;
      }
      else{
         document.getElementById("mail1-p").innerHTML = "Enter valid email id"
         flag = 0;
      }
      // let salary=  document.getElementById("salary");

      let passWord = document.getElementById("passWord").value;
      let passWordRegex = /^([a-zA-Z0-9])([^A-Za-z0-9]){8,16}$/
      if(passWord=""){
         document.getElementById("password-p").innerHTML = "Password is empty"
         flag = 0;
      }
      else if(passWord.match(passWordRegex)){
         flag = 1;
      }
      else{
         let oneUppercase = /^[A-Z]$/;
         let oneLowercase = /^[a-z]$/;
         let oneSpecialChar = /^[^a-zA-Z0-9]$/;
         let oneNumeric = /^[0-9]$/;
         let length = /^{8,16}$/;
         if(oneLowercase.test(passWord)){
            flag =1;
         }
         else{
            document.getElementById("password-p").innerHTML = "Password must contain atleast one lowercase letter"
            flag = 0;
         }
         if(oneUppercase.test(passWord)){
            flag =1;
         }
         else{
            document.getElementById("password-p").innerHTML = "Password must contain atleast one uppercase letter"
            flag =0;
         }
         if(oneSpecialChar.test(passWord)){
            flag = 1;
         }
         else{
            document.getElementById("password-p").innerHTML = "Password must contain atleast one special character"
            flag =0;
         }
         if(oneNumeric.test(passWord)){
            flag =1;
         }
         else{
            document.getElementById("password-p").innerHTML = "Password must contain atleast one numeric value"
            flag =0;
         }
         if(length.test(passWord)){
            flag =1;
         }
         else{
            document.getElementById("password-p").innerHTML = "Password length should be minimum 8 characters"
            flag =0;
         }
      }











     if(flag){
        return true;
     }
     else{
        return false;
     }

    
    
    
    


     
}
