function setAccountNumber(retries = 3) {     
    const searchParams = new URLSearchParams(window.parent.location.search);     
    var accNumber = searchParams.get('acc');         

    if (!accNumber) {
        console.log("No Account number found in URL parameters."); 
        return;
    }

    function trySettingValue(attempt = 0) {
        const iframe = document.querySelector("iframe.es-iframe"); // Select the correct iframe
        
        if (iframe && iframe.contentWindow && iframe.contentDocument) {
            const inputElement = iframe.contentDocument.getElementById("form-fields-accountpartyid|input");
            
            if (inputElement) {
                inputElement.value = accNumber;    
                console.log("Account number set successfully inside iframe: " + accNumber);
            } else if (attempt < retries) {
                console.log(`Retrying to set account number inside iframe... Attempt ${attempt + 1}`);
                setTimeout(() => trySettingValue(attempt + 1), 1000);
            } else {
                console.log("Failed to set account number after multiple attempts.");
            }
        } else if (attempt < retries) {
            console.log(`Target iframe not loaded yet. Retrying... Attempt ${attempt + 1}`);
            setTimeout(() => trySettingValue(attempt + 1), 1000);
        } else {
            console.log("Failed to access the target iframe after multiple attempts.");
        }
    }

    trySettingValue();
}   

setTimeout(setAccountNumber, 3000);
