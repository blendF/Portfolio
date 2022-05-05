function abonohu() {
    var sub = window.prompt("A deshironi te abonoheni si klienit i radhes: po/jo ? ")

    if (sub == "po" || sub == "Po" ||  sub == "PO" || sub == "pO") {

        alert("Mbushni te dhenat ne vazhdim! ")
        var emri = window.prompt("Emri: ");
        var mbiemri = window.prompt("Mbiemri: ");

        var yourdata = emri + " " + mbiemri;

        alert("Pershendetje, " + yourdata + " Ju keni abonuar me sukses! " )
    }
    else if(sub == "jo" || sub == "Jo" ||  sub == "JO" || sub == "jO" )
    {
        alert("Ju keni zgjedhur qe te mos abonoheni! shihemi heren tjeter.")
      
    }
    else
    {
        alert("Ju lutem pergjigjuni me \"po\" ose \"jo\"!")
        abonohu();
    }
}

function getter() {
    var output = "Faleminderit per interesimin! <br /> Email-i juaj nuk do te keqperdoret.";
document.getElementById("getter").innerHTML = output;
}

function hireme() {

    
    var userquest;
    var programeri = "Blendi Ferizi";
    userquest = window.prompt("HIREME:AUTOAGENT | Puneso: " + programeri + " | po/jo");
    if (userquest == "po" || userquest == "Po" ||  userquest == "PO" || userquest == "pO") {
            alert("Mbush te dhenat ne vazhdim !");
        paydata1 = window.prompt("Emri dhe mbiemri: ");
        paydata2 = window.prompt("Pagesa me :\n\n1. Debit \n\n2. Paypal \n\n3. CreditCard \n\n4. Crytpocurrency \n\n5.Cash/Bruto. \n")

        if (paydata2 == "1") 
        {
            var pay1 = "Debit";
            alert(paydata1 + " ju keni zgjedur te paguani me: " + pay1);
           
        }
        else if (paydata2 == "2") {
            var pay2 = "Paypal"
            alert(paydata1 + " ju keni zgjedur te paguani me: " + pay2);
        }
        else if (paydata2 == "3") {
            var pay3 = "CreditCard";
            alert(paydata1 + " ju keni zgjedur te paguani me: " + pay3);           
        }
        else if (paydata2 == "4") {
            var pay4 = "Cryptocurrency";
            alert(paydata1 + " ju keni zgjedur te paguani me: " + pay4);
            
            
        }
        else if (paydata2 == "5") {
            var pay5 = "Cash";
            alert(paydata1 + " ju keni zgjedur te paguani me: " + pay5);

            //kujdes ne kete statement
            var checkfor = window.prompt("A jane keto te dhenat tuaja:\nPuneso: " + programeri + " = "+ userquest + "\nPagesa me: " + pay5 );
            if (checkfor == "po") {
                alert("Ju keni aplikuar me sukses!");
            }
            else {
                alert("Ju lutem rimbushni aplikacionin!");
                hireme();
        }
            //warning end !!!.
            
           
        }
        else {
            alert("Ju lutem pergjigjuni duke perdorur numrat nga 1 deri ne 5, faleminderit!.");
            hireme();
        }
       

    }
   else if (userquest == "jo" || userquest == "Jo" || userquest == "JO" || userquest == "jO" )
    {
       alert("Shpresojme qe t'ju shohim ndonjehere tjeter! \nOk / Cancel")

   }
   else  
   {
       alert("Ju lutem pergjigjuni me \"po\" \"jo\" ");
       hireme();
   }
}

function checkuserdata() {


    personaldata == "sdawda"
    var datacheck = window.prompt = ("A jane keto te dhenat tuaja: po/jo: \nPer punsim: " + programeri +"\nEmri dhe mbiemri: " + paydata1 + "\nForma e pageses: " + paydata2 + "\nEmail: " + personaldata);
    
}

