function validate(){
  var Krestnijmeno = document.getElementById("Krestnijmeno").value;
  var Prijmeni = document.getElementById("Prijmeni").value;
  var telefon = document.getElementById("telefon").value;
  var email = document.getElementById("email").value;
  var rodne = document.getElementById("rodne").value;
  var Zprava = document.getElementById("Zprava").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if (Krestnijmeno.length < 2 || Krestnijmeno.charAt(0) !== Krestnijmeno.charAt(0).toUpperCase()) { // Spojení dvou podmínek//
    text = "Prosím zadejte správně křestní jméno s prvním velkým písmenem.";
    error_message.innerHTML = text;
    return false;
}
  if (Prijmeni.length < 2 || Prijmeni.charAt(0) !== Prijmeni.charAt(0).toUpperCase()) { // Spojení dvou podmínek//
    text = "Prosím zadejte správně příjmení s prvním velkým písmenem.";
    error_message.innerHTML = text;
    return false;
}
  if(isNaN(telefon) || telefon.length != 9){ //isNaN to je fuknce která vlastně kontroluje zdali uživatel vložil číslo či ne
    text = "Prosím zadejte vaše telefonní číslo";
    error_message.innerHTML = text;
    return false;
  }
  if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email) || email.length <= 6) { // Spojení dvou podmínek//
    text = "Zadejte platný email";
    error_message.innerHTML = text;
    return false;
  }
  if (rodne !== "" && (!/^\d{6}\/\d{4}$/.test(rodne) || rodne.length <= 10)) { // Spojení dvou podmínek//
    text = "Zadejte platné rodné číslo ve tvaru: YYMMDD/****"; //rok,měsíc,den / unikátní číslo //
    error_message.innerHTML = text;
    return false;
  }
  if(Zprava.length <= 50){
    text = "Prosím zadejte zprávu která bude delší jak 50 znaků";
    error_message.innerHTML = text;
    return false;
  }
  alert("Formulář byl úspěšně odeslán! Budeme vás kontaktovat co nejdříve to půjde.");
  return true;
}