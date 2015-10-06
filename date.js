function verifDate(date){
    var date_pas_sure = date;
    var format = /^(\d{1,2}\/){2}\d{4}$/;
    if(!format.test(date_pas_sure)){
        return false;
    } else {
        var date_temp = date_pas_sure.split('/');
        date_temp[1] -=1;        // On rectifie le mois !!!   
         
        var ma_date = new Date();
        ma_date.setFullYear(date_temp[2]);
        ma_date.setMonth(date_temp[1]);
        ma_date.setMonth(date_temp[1]);
        ma_date.setDate(date_temp[0]);
        if(ma_date.getFullYear()==date_temp[2] && ma_date.getMonth()==date_temp[1] && ma_date.getDate()==date_temp[0]){
            return true;
        } else {
            return false;
        }
    }
}

function compareDate(dateDeb,dateFin) {
    
    var tabDateDeb = dateDeb.split('/');
    var dateDebFinal = new Date(tabDateDeb[2],tabDateDeb[1],tabDateDeb[0]);
    
    var tabDateFin = dateFin.split('/');
    var dateFinFinal = new Date(tabDateFin[2],tabDateFin[1],tabDateFin[0]);
    
    if(dateDebFinal > dateFinFinal) {
        return false;
    } else {
        return true;
    } 
    
}
