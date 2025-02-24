console.log("external js file from git");
function setAccountNumber()
  {     
  const searchParams = new URLSearchParams(window.parent.location.search);     
    var accNumber = searchParams.get('acc');         
    if (accNumber) 
    {
        document.getElementById("form-fields-accountpartyid|input").value = accNumber;    
     console.log("Account number from the code: " + accNumber);    
    } else {         console.log("No Account number from  the code found in URL parameters.");     } 
  }   

setAccountNumber();

console.log("external js file from git");
