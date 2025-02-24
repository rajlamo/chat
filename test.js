console.log("external js file from git 0278346");

function setAccountNumber(retries = 3) 
{     
    const searchParams = new URLSearchParams(window.parent.location.search);     
    var accNumber = searchParams.get('acc');         

    if (!accNumber) {
        console.log("No Account number found in URL parameters."); 
        return;
    }

    function trySettingValue(attempt = 0) 
    {
        const inputElement = document.getElementById("form-fields-accountpartyid|input");
        
        if (inputElement) {
            inputElement.value = accNumber;    
            console.log("Account number set successfully: " + accNumber);
        } else if (attempt < retries) {
            console.log(`Retrying to set account number... Attempt ${attempt + 1}`);
            setTimeout(() => trySettingValue(attempt + 1), 1000);
        } else {
            console.log("Failed to set account number after multiple attempts.");
        }
    }

    trySettingValue();
}   

setTimeout(setAccountNumber, 3000);
