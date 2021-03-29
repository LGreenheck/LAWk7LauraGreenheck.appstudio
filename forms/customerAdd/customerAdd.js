let query = ""
let req = {}
let results = []
let pw = "VanderWielen1808*"
let netID = "LMG66722"

btnSubmit.onclick=function(){
    name = inptName.value
    address = inptAdd.value
    city = inptCity.value
    state = inptState.value
    zip = inptZip.value
    query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + address + "', '" + city + "', '" + state + "', '" + zip + "')"
    // look at how the query is rendered
    alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblA3.value = "You have successfully added the pet!"
        else
            lblA3.value = "There was a problem with adding the pet to the database."
    } else 
        // transit error
        lblA3.value = "Error: " + req.status
}
