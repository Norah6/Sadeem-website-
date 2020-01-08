InputFunc();

function InputFunc() {
    
//    alert("Hi");
    
//   var f = document.getElementByTagName("form");
//	
// var i;
// var text ="";
//for (i = 0; i < f.length; i++) { 
//if (f.elements[i].value != undefined)
//  text += f.elements[i].value + "\n";
//}
//    alert(text);
    
    var link = "mailto:email@example.com?subject=Message";
    var email = document.forms["RegMue"]["email"];
    var phone = document.forms["RegMue"]["phoneNo"];
    var fName = document.forms["RegMue"]["firstName"];
    var lName = document.forms["RegMue"]["lastName"];
    var NoVis = document.forms["RegMue"]["NoVis"];
    var appointments = document.forms["RegMue"]["appointments"];
    var accept = document.forms["RegMue"]["accept"];
    
    if (email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
//        return false; 
    } 
   
//    if (email.value.indexOf(".", 0) < 0)                 
//    { 
//        window.alert("Please enter a valid e-mail address."); 
//        email.focus(); 
//        return false; 
//    } 

     if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
//        return false; 
    } 
    
    if (fName.value == "")                                  
    { 
        window.alert("Please enter your first name."); 
        fName.focus(); 
//        return false; 
    } 
    
    if (lName.value == "")                                  
    { 
        window.alert("Please enter your last name."); 
        lName.focus(); 
//        return false; 
    } 
    
    if (NoVis.value == 0 || NoVis.value < 0 || NoVis.value == "")                                  
    { 
        window.alert("Please enter number of visitors."); 
        NoVis.focus(); 
//        return false; 
    } 
    
    if (appointments.selectedIndex < 1)                  
    { 
        alert("Please choose a date."); 
        appointments.focus(); 
//        return false; 
    } 
    
    if ( accept.checked == false )
    {
        alert ( "Please check the Terms & Conditions box." );
        accept.focus();
//        valid = false;
    }

    window.location.href = link;
//    document.forms[0].submit()
}