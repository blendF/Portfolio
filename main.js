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
        alert("Ju lutem pergjigjuni me \"po\" ose jo!")
        abonohu();
    }
}

function getter() {
    var output = "Faleminderit per interesimin! <br /> Email-i juaj nuk do te keqperdoret.";
document.getElementById("getter").innerHTML = output;
}