// Create a calculator




document.getElementById("btn").addEventListener("click", calcError);
document.getElementById("percentYield").addEventListener("click" , showYieldDisplay);
document.getElementById("percentError").addEventListener("click" , showErrorDisplay);


function showErrorDisplay(){
    document.getElementById("topSubscript").innerHTML = `|V<sub>Experimental</sub> - V<sub>Theoretical</sub>|`
    document.getElementById("h1").innerHTML =  `Percent Error Calculator`;
    document.getElementById("h3").innerHTML = `Percent Error=`;
    document.getElementById("resultContd").innerHTML = "";
    document.getElementById("experimentalInput").value = "";
    document.getElementById("theoreticalInput").value = "";
   


    document.getElementById("btn").addEventListener("click" , calcErrorFunc);


    function calcErrorFunc(){
        let expIn = +document.getElementById("experimentalInput").value;
        let theorIn = +document.getElementById("theoreticalInput").value;


        if (expIn && theorIn > 0){
            let numeratorSimplified =  Math.abs(expIn-theorIn);
            let error = (numeratorSimplified / theorIn) * 100;
            let revisedError = error.toFixed(4);
            document.getElementById("resultContd").innerHTML = `<br><table id="formula" cellpadding = "0" cellspacing = "0"><tr><td></td><td id = "spacing">|${expIn} - ${theorIn}|</td><td></td><td id = "spacing">|${numeratorSimplified}|</td><td></td></tr><tr><td id = "spacing">=</td><td id = "spacing"><hr></td><td id = "spacing">=</td><td id = "spacing"><hr></td><td id = "spacing">=</td><td id = "spacing"> ${revisedError} %</tr><tr><td></td><td>${theorIn}</td><td></td><td>${theorIn}</td></tr>`;
        } else if (expIn <= 0 || theorIn <= 0 ) {
        document.getElementById("resultContd").innerHTML = `Please enter a value if one is missing, ensure they are real values above 0.`;
        }
    }
}


function showYieldDisplay(){
     document.getElementById("topSubscript").innerHTML = `V<sub>Experimental</sub>`;
     document.getElementById("h1").innerHTML = `Percent Yield Calculator`;
     document.getElementById("h3").innerHTML = `Percent Yield=`;
     document.getElementById("resultContd").innerHTML = "";
     document.getElementById("experimentalInput").value = "";
    document.getElementById("theoreticalInput").value = "";


     document.getElementById("btn").addEventListener("click" , calcYieldFunc);


     function calcYieldFunc (){
        let expIn = +document.getElementById("experimentalInput").value;
        let theorIn = +document.getElementById("theoreticalInput").value;
       
        if (expIn && theorIn > 0){
            let ans = (expIn / theorIn) * 100;
            let revisedAns = ans.toFixed(4);


            document.getElementById("resultContd").innerHTML = `<br><table id="formula" cellspacing = "0" cellpadding = "0"><tr><td></td><td id="spacing">${expIn}</td><td></td><td></td></tr><tr><td id="spacing">=</td><td id="spacing"><hr></td><td id = "spacing">X 100</td><td id="spacing">=</td><td id="spacing">${revisedAns}%</td><td></td></tr><tr><td></td><td id="spacing">${theorIn}</td><td></td></tr></table>`;
        } else if (expIn <= 0 || theorIn <= 0 ) {
            document.getElementById("resultContd").innerHTML = `Please enter a value if one is missing, ensure they are real values above 0.`;
        }
    }
}




function calcError(){
    let expIn = document.getElementById("experimentalInput").value;
    let theorIn = document.getElementById("theoreticalInput").value;


    if (expIn && theorIn > 0){
        let numeratorSimplified =  Math.abs(expIn-theorIn);
        let error = (numeratorSimplified / theorIn) * 100;
        let revisedError = error.toFixed(4);
        document.getElementById("resultContd").innerHTML = `<br><table id="formula" cellpadding = "0" cellspacing = "0"><tr><td></td><td id = "spacing">|${expIn} - ${theorIn}|</td><td></td><td></td><td id = "spacing">|${numeratorSimplified}|</td><td></td></tr><tr><td id = "spacing">=</td><td id = "spacing"><hr></td><td id = "spacing">X 100</td><td id = "spacing">=</td><td id = "spacing"><hr></td><td id = "spacing">X 100</td><td id = "spacing">=</td><td id = "spacing"> ${revisedError} %</tr><tr><td></td><td>${theorIn}</td><td></td><td></td><td>${theorIn}</td></tr>`;
   
    // } else if (expIn.valueOf.length == "" || theorIn.valueOf.length == "") {
    //     console.log(theorIn);
    //     console.log(expIn);
    //     document.getElementById("resultContd").innerHTML = `Please enter both values.`;
    } else if (expIn <= 0 || theorIn <= 0 ) {
        document.getElementById("resultContd").innerHTML = `Please enter a value if one is missing, ensure they are real values above 0.`;
    }
}






