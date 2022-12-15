/* ### Celsius em fahrenheit

    Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de 
    uma unidade para outra.

    C = (F - 32) * 5/9
    F = C * 9/5 + 32

    celcius ebulição 100 °c
    fahrenheit ebulição 212 °F
    C ponto de congelamento 0°C
    F ponto de congelamento 32 °F
    
    (50 - 32) x 5 / 9 = 0
      18 x 5 / 9

    30 x 9 : 5 + 32 =  86

*/
    // Degrees for



//valores = document.getElementById('unit1').options
//valores1 = document.getElementById('unit2').value

//console.log(valores,valores1)


// Inicio da função das escolhas de metrica de temperature
function changeTemp1() {
    unit1 = document.getElementById('unit1').value
    unit2 = document.getElementById('unit2').value
    temp1 = window.document.querySelector("#deg1").value
    temp2 = window.document.querySelector("#deg2").value
    
 // If logical Celsius for
 let celC = unit1 == "Celsius" && unit2 == "Celsius"
 let celF = unit1 == "Celsius" && unit2 == "Fahrenheit"
 let celK = unit1 == "Celsius" && unit2 == "Kelvin"

 // If Logical Fahrenheit for 
 let  fahF = unit1 == "Fahrenheit" && unit2 == "Fahrenheit"
 let  fahC = unit1 == "Fahrenheit" && unit2 == "Celsius"
 let  fahK = unit1 == "Fahrenheit" && unit2 == "Kelvin"

// If logical Kevin for
let kelK = unit1 == "Kelvin" && unit2 == "Kelvin"
let kelF = unit1 == "Kelvin" && unit2 == "Fahrenheit"
let kelC = unit1 == "Kelvin" && unit2 == "Celsius"


// onchange setting
  if (celC) {
        document.getElementById('unit2').value = "Fahrenheit"
        const F = temp1 * 1.8 + 32
        window.document.querySelector("#deg2").value = F 
        document.querySelector('.formC').innerHTML = `(${temp1}°C × 1.8) + 32 = ${F} °F`
  } else if (celF){
        const F = temp1 * 1.8 + 32
        window.document.querySelector("#deg2").value = F 
        document.querySelector('.formC').innerHTML = `(${temp1}°C × 1.8) + 32 = ${F} °F`
  }else if (celK) { 
        kf = parseFloat(temp1)
        const K = kf + 273.15
        window.document.querySelector("#deg2").value = K
        document.querySelector('.formC').innerHTML = `${kf}°C + 273,15  = ${K}°K`
  }else if(fahF) {
        document.getElementById('unit2').value = "Celsius"
        let FF = parseFloat(temp1)
        const C = (FF - 32) * 5 / 9  
        const T = C.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `(${FF}°F − 32) × 5/9 = -${T}°C `
        
  }else if(fahC) {
        FF = parseFloat(temp1)
        const C = (FF - 32) * 5 / 9  
        const T = C.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `(${FF}°F − 32) × 5/9 = ${T}°C `
  } else if(fahK) {
        FF = parseFloat(temp1)
        const K = (FF - 32) * 5/9 + 273.15
        const T = K.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `(${FF} - 32) * 5/9 + 273.15 = ${T}°K`


  } else if(kelK) {
        document.getElementById('unit2').value = "Celsius"
        let KF = parseFloat(temp1)
        const C = KF - 273.15
        const T = C.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `${KF}K - 273.15 = ${T}°C `
        
        
  } else if(kelC) {
        let KF = parseFloat(temp1)
        const C = KF - 273.15
        const T = C.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `${KF}K - 273.15 = ${T}°C `
  }else if(kelF) {
        let KF = parseFloat(temp1)
        const F = (KF - 273.15) * 1.8 + 32
        const T = F.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `(${KF}K - 273.15) * 1.8 + 32 = ${T}°F`
        
  }
  // Termino do If
  
}

let deg1 = document.getElementById('deg1')
let deg2 = document.getElementById('deg2')
deg1.addEventListener("keyup", changeNTemp)




// Inicio da função do primeiro input
function changeNTemp() {
    unit1 = document.getElementById('unit1').value
    unit2 = document.getElementById('unit2').value
    temp1 = window.document.querySelector("#deg1").value
    temp2 = window.document.querySelector("#deg2").value


    // If logical Celsius for
    let celF = unit1 == "Celsius" && unit2 == "Fahrenheit"
    let celK = unit1 == "Celsius" && unit2 == "Kelvin"

    //If logical farenheit
    let  fahC = unit1 == "Fahrenheit" && unit2 == "Celsius"
    let  fahK = unit1 == "Fahrenheit" && unit2 == "Kelvin"

    //If logical kevin for 
    let kelF = unit1 == "Kelvin" && unit2 == "Fahrenheit"
    let kelC = unit1 == "Kelvin" && unit2 == "Celsius"


    if (celF) {
        let CF = parseFloat(temp1)
        const F = CF * 1.8 + 32
        const T = F.toFixed(1)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `(${CF}°C × 1.8) + 32 = ${F} °F`   
    } else if(celK) {
        let CF = parseFloat(temp1)
        const K = CF + 273.15
        window.document.querySelector("#deg2").value = K
        document.querySelector('.formC').innerHTML = `${CF}°C + 273,15  = ${K}°K`

    } else if(fahC) {
        FF = parseFloat(temp1)
        const C = (FF - 32) * 5 / 9  
        const T = C.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `(${FF}°F − 32) × 5/9 = ${T}°C `

    } else if(fahK) {

        FF = parseFloat(temp1)
        const K = (FF - 32) * 5/9 + 273.15
        const T = K.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `(${FF} - 32) * 5/9 + 273.15 = ${T}°K`

    } else if(kelC) {
        let KF = parseFloat(temp1)
        const C = KF - 273.15
        const T = C.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `${KF}K - 273.15 = ${T}°C `

    } else if(kelF) {
        let KF = parseFloat(temp1)
        const F = (KF - 273.15) * 1.8 + 32
        const T = F.toFixed(2)
        window.document.querySelector("#deg2").value = T
        document.querySelector('.formC').innerHTML = `(${KF}K - 273.15) * 1.8 + 32 = ${T}°F`
    }

}

  
    // fim do laço teste first input 

    // Inicio da função do segundo input

    deg2.addEventListener("keyup", changeNTempS)

    function changeNTempS() {
        unit1 = document.getElementById('unit1').value
        unit2 = document.getElementById('unit2').value
        temp1 = window.document.querySelector("#deg1").value
        temp2 = window.document.querySelector("#deg2").value

     // If logical Celsius for
    let celF = unit2 == "Celsius" && unit1 == "Fahrenheit"
    let celK = unit2 == "Celsius" && unit1 == "Kelvin"

    //If logical farenheit
    let  fahC = unit2 == "Fahrenheit" && unit1 == "Celsius"
    let  fahK = unit2 == "Fahrenheit" && unit1 == "Kelvin"

    //If logical kevin for 
    let kelF = unit2 == "Kelvin" && unit1 == "Fahrenheit"
    let kelC = unit2 == "Kelvin" && unit1 == "Celsius"

    if (celF) {
        let CF = parseFloat(temp2)
        const F = CF * 1.8 + 32
        const T = F.toFixed(1)
        window.document.querySelector("#deg1").value = T

        tempN1 = window.document.querySelector("#deg1").value
        tempN2 = window.document.querySelector("#deg2").value
        document.querySelector('.formC').innerHTML = `(${tempN1}°F − 32) × 5/9 = ${tempN2}°C `
    } else if(celK) {
        let CF = parseFloat(temp2)
        const K = CF + 273.15
        const T = K.toFixed(2)
        window.document.querySelector("#deg1").value = T

        tempN1 = window.document.querySelector("#deg1").value
        tempN2 = window.document.querySelector("#deg2").value
        document.querySelector('.formC').innerHTML = `${tempN1}K - 273.15 = ${tempN2}°C `
       // document.querySelector('.formC').innerHTML = `${kf}°C + 273,15  = ${K}°K`

    } else if(fahC) {
        FF = parseFloat(temp2)
        const C = (FF - 32) * 5 / 9  
        const T = C.toFixed(0)
        window.document.querySelector("#deg1").value = T
        tempN1 = window.document.querySelector("#deg1").value
        tempN2 = window.document.querySelector("#deg2").value

        document.querySelector('.formC').innerHTML = `(${tempN1}°C × 1.8) + 32 = ${tempN2} °F`
    } else if(fahK) {

        FF = parseFloat(temp2)
        const K = (FF - 32) * 5/9 + 273.15
        const T = K.toFixed(2)
        window.document.querySelector("#deg1").value = T

        tempN1 = window.document.querySelector("#deg1").value
        tempN2 = window.document.querySelector("#deg2").value
        document.querySelector('.formC').innerHTML = `(${tempN1}K - 273.15) * 1.8 + 32 = ${temp2}°F`
    } else if(kelC) {
        let KF = parseFloat(temp2)
        const C = KF - 273.15
        const T = C.toFixed(2)
        window.document.querySelector("#deg1").value = T

        tempN1 = window.document.querySelector("#deg1").value
        tempN2 = window.document.querySelector("#deg2").value
        document.querySelector('.formC').innerHTML = `${tempN1}°C + 273,15  = ${tempN2}°K`

    } else if(kelF) {
        let KF = parseFloat(temp2)
        const F = (KF - 273.15) * 1.8 + 32
        const T = F.toFixed(2)
        window.document.querySelector("#deg1").value = T

        tempN1 = window.document.querySelector("#deg1").value
        tempN2 = window.document.querySelector("#deg2").value
        document.querySelector('.formC').innerHTML = `(${tempN1} - 32) * 5/9 + 273.15 = ${tempN2}°K`
    }


    }




