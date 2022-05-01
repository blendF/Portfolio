function abonohu() {
    var sub = window.prompt("A deshironi te abonoheni si klienit i radhes: po/jo ? ")

    if (sub == "po") {

        alert("Mbushni te dhenat ne vazhdim! ")
        var emri = window.prompt("Emri: ");
        var mbiemri = window.prompt("Mbiemri: ");

        var yourdata = emri + " " + mbiemri;

        alert("Pershendetje, " + yourdata + " Ju keni abonuar me sukses! " )
    }
    else if(sub == "jo")
    {
        alert("Ju keni zgjedhur qe te mos abonoheni! shihemi heren tjeter.")
      
    }
    else
    {
        alert("Ju lutem pergjigjuni me \"po\" ose jo!")
        abonohu();
    }
}