function getData(){
    let request = new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/bharat")
    request.send()

    request.addEventListener("load",()=>{
        var [data] = JSON.parse(request.responseText)
        document.getElementById("name").innerHTML =  data.name.official
        document.getElementById("capital").innerHTML =  data.capital[0]
        document.getElementById("flags").src =  data.flags.svg
        document.getElementById("population").innerHTML =  data.population
        document.getElementById("area").innerHTML =  data.area
        document.getElementById("region").innerHTML =  data.region
        document.getElementById("subregion").innerHTML =  data.subregion
        document.getElementById("borders").innerHTML =  data.borders
        document.getElementById("timezones").innerHTML =  data.timezones
        document.getElementById("landlocked").innerHTML =  data.landlocked
        document.getElementById("unMember").innerHTML =  data.unMember
        document.getElementById("independent").innerHTML =  data.independent
        document.getElementById("maps").href =  data.maps.googleMaps
        document.getElementById("startOfWeek").innerHTML =  data.startOfWeek
    })

}
getData()

function searchCountry(){
    var name = document.getElementById("country").value
    let request = new XMLHttpRequest()
    request.open("get","https://restcountries.com/v3.1/name/"+name)
    request.send()

    request.addEventListener("load",()=>{
        var [data] = JSON.parse(request.responseText)
        document.getElementById("name").innerHTML =  data.name.official
        document.getElementById("capital").innerHTML =  data.capital[0]
        document.getElementById("flags").src =  data.flags.svg
        document.getElementById("population").innerHTML =  data.population
        document.getElementById("area").innerHTML =  data.area
        document.getElementById("region").innerHTML =  data.region
        document.getElementById("subregion").innerHTML =  data.subregion
        document.getElementById("borders").innerHTML =  data.borders
        document.getElementById("timezones").innerHTML =  data.timezones
        document.getElementById("landlocked").innerHTML =  data.landlocked
        document.getElementById("unMember").innerHTML =  data.unMember
        document.getElementById("independent").innerHTML =  data.independent
        document.getElementById("maps").href =  data.maps.googleMaps
        document.getElementById("startOfWeek").innerHTML =  data.startOfWeek
    })

}