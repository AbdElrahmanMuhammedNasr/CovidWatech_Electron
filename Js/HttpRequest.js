document.addEventListener("DOMContentLoaded", function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {    
        if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(xhttp.responseText)
        document.getElementById("takenAt").innerHTML = result['world_total']['statistic_taken_at'] 
        document.getElementById("totalCase").innerHTML = result['world_total']['total_cases'] 
        document.getElementById("totalDeth").innerHTML = result['world_total']['total_deaths'] 
        document.getElementById("newCase").innerHTML = result['world_total']['new_cases'] 
        document.getElementById("newDeth").innerHTML = result['world_total']['new_deaths'] 
        document.getElementById("totalRecovered").innerHTML = result['world_total']['total_recovered'] 
        document.getElementById("ActiveCase").innerHTML = result['world_total']['active_cases'] 

        }
    };
    xhttp.open("GET", "https://corona-virus-world-and-india-data.p.rapidapi.com/api", true);
    xhttp.setRequestHeader("x-rapidapi-host","corona-virus-world-and-india-data.p.rapidapi.com")
    xhttp.setRequestHeader("x-rapidapi-key","1729cf9aafmshf367a549de72d3fp15224cjsnecde86e8a0bc")
    xhttp.setRequestHeader("content-type","application/json")
    xhttp.send();
});




document.getElementById("myBtn").addEventListener("click", function() {

   getDataUsingCountry(document.getElementById("search").value.trim());
   
});

function getDataUsingCountry(countryName){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {    
        if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(xhttp.responseText)
        var coun = result['countries_stat'].find(e => e.country_name.toLowerCase() === countryName.toLowerCase() )
        document.getElementById("country").innerHTML = coun['country_name'] 
        document.getElementById("totalCase").innerHTML = coun['cases'] 
        document.getElementById("totalDeth").innerHTML = coun['deaths'] 
        document.getElementById("newCase").innerHTML = coun['new_cases'] 
        document.getElementById("newDeth").innerHTML = coun['new_deaths'] 
        document.getElementById("totalRecovered").innerHTML = coun['total_recovered'] 
        document.getElementById("ActiveCase").innerHTML = coun['active_cases'] 
        document.getElementById("totalTests").innerHTML = coun['total_tests'] 

        }
    };
    xhttp.open("GET", "https://corona-virus-world-and-india-data.p.rapidapi.com/api", true);
    xhttp.setRequestHeader("x-rapidapi-host","corona-virus-world-and-india-data.p.rapidapi.com")
    xhttp.setRequestHeader("x-rapidapi-key","1729cf9aafmshf367a549de72d3fp15224cjsnecde86e8a0bc")
    xhttp.setRequestHeader("content-type","application/json")
    xhttp.send();
}

