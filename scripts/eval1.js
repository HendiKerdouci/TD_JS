function erreur() {

    var marque = document.getElementById('marque').value;
    var modele = document.getElementById('modele').value;
    var type = document.getElementById('type').value;
    var origine = document.getElementById('origine').value;
    var nbreKilometre = document.getElementById('nbreKilometre').value;
    var valeur = document.getElementById('valeur').value;
    var travaux = document.getElementById('travaux').value;


    if (marque == '') {
        document.getElementById('erreurMarque').innerHTML = "(* Vous devez saisir une marque)";
        document.getElementById('erreurMarque').classList.add('error');
    }
    else{
        document.getElementById('erreurMarque').innerHTML = '';
    }

    if (modele == '') {
        document.getElementById('erreurModele').innerHTML = "(* Vous devez saisir un modèle)";
        document.getElementById('erreurModele').classList.add('error');
    }
    else{
        document.getElementById('erreurModele').innerHTML = '';
    }

    if (type == 'null') {
        document.getElementById('erreurType').innerHTML = "(* Vous devez saisir un type de carburant)";
        document.getElementById('erreurType').classList.add('error');
    }
    else{
        document.getElementById('erreurType').innerHTML = '';
    }

    if (origine == 'null') {
        document.getElementById('erreurOrigine').innerHTML = "(* Vous devez saisir un pays d'origine)";
        document.getElementById('erreurOrigine').classList.add('error');
    }
    else{
        document.getElementById('erreurOrigine').innerHTML = '';
    }

    if (nbreKilometre == '') {
        document.getElementById('erreurNbreKilometre').innerHTML = "(* Vous devez saisir un nombre de kilomètres)";
        document.getElementById('erreurNbreKilometre').classList.add('error');
    }
    else{
        document.getElementById('erreurNbreKilometre').innerHTML = '';
    }

    if (valeur == '') {
        document.getElementById('erreurValeur').innerHTML = "(* Vous devez saisir une valeur)";
        document.getElementById('erreurValeur').classList.add('error');
    }
    else{
        document.getElementById('erreurValeur').innerHTML = '';
    }

    if (travaux == 'null') {
        document.getElementById('erreurTravaux').innerHTML = "(* Vous devez spécifier si il y a eu des travaux)";
        document.getElementById('erreurTravaux').classList.add('error');
    }
    else{
        document.getElementById('erreurTravaux').innerHTML = '';
    }

    if ((marque != '') && (modele != '') && (type != 'null') && (origine != 'null') && (nbreKilometre != '') && (valeur != '') && (travaux != 'null')){
        if (nbreKilometre > 50000){
            document.getElementById('erreurBtn').innerHTML = "Le véhicule à trop de kilomètres !"
            document.getElementById('erreurBtn').classList.add('errorBtn');
            document.getElementById('btn').style.display = "none"
        }
        else{
            document.getElementById('btn').style.display = "block"
            document.getElementById('erreurBtn').innerHTML = ""
        }
    }
}


function resultat(){

    var marque = document.getElementById('marque').value;
    var modele = document.getElementById('modele').value;
    var type = document.getElementById('type').value;
    var origine = document.getElementById('origine').value;
    var nbreKilometre = document.getElementById('nbreKilometre').value;
    var valeur = document.getElementById('valeur').value;
    var travaux = document.getElementById('travaux').value;
    var prix;

    if (origine == 'france'){
        if (type == 'essence'){
            if (travaux == 'oui'){
                prix = (valeur - (nbreKilometre*0.10));
            }
            else{
                prix = (valeur - (nbreKilometre*0.09));
            }
        }
        else{
            if (travaux == 'oui'){
                prix = (valeur - (nbreKilometre*0.11));
            }
            else{
                prix = (valeur - (nbreKilometre*0.10));
            }
        }
    }
    else if (origine == 'allemagne'){
        if (type == 'essence'){
            if (travaux == 'oui'){
                prix = (valeur - (nbreKilometre*0.06));
            }
            else{
                prix = (valeur - (nbreKilometre*0.08));
            }
        }
        else{
            if (travaux == 'oui'){
                prix = (valeur - (nbreKilometre*0.10));
            }
            else{
                prix = (valeur - (nbreKilometre*0.09));
            }
        }
    }
    else{
        if (type == 'essence'){
            if (travaux == 'oui'){
                prix = (valeur - (nbreKilometre*0.05));
            }
            else{
                prix = (valeur - (nbreKilometre*0.07));
            }
        }
        else{
            if (travaux == 'oui'){
                prix = (valeur - (nbreKilometre*0.09));
            }
            else{
                prix = (valeur - (nbreKilometre*0.08));
            }
        }
    }

    document.getElementById('formulaire').style.display = "none";
    document.getElementById('resultat').style.display = "block";
    document.getElementById('resultMarque').innerHTML =  marque;
    document.getElementById('resultModele').innerHTML =  modele;
    document.getElementById('resultType').innerHTML =  type;
    document.getElementById('resultOrigine').innerHTML =  origine;
    document.getElementById('resultKm').innerHTML =  nbreKilometre + " Km";
    document.getElementById('resultTravaux').innerHTML =  travaux;
    document.getElementById('resultPrix').innerHTML =  prix + " €";
    if (prix >= 0){
        document.getElementById('resultPrix').style.color =  "green";
        document.getElementById('resultPrix').style.fontWeight =  "bold";
        document.getElementById('resultPrix').style.fontSize =  "2.5em";

    }
    else{
        document.getElementById('resultPrix').style.color =  "red";
    }


    
}
