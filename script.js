const celsius= document.getElementById("celsius");
const fahrenheit= document.getElementById("fahrenheit");
const kelvin= document.getElementById("kelvin");

function computeTemp(event){
    console.log("Hellooo");
    const elvalue= +event.target.value;
    switch(event.target.name){
        case "celsius":
        kelvin.value= (elvalue+273.32).toFixed(2);
        fahrenheit.value= (elvalue*1.8+32).toFixed(2);
            break;
            case "fahrenheit":
                kelvin.value= ((elvalue-32)/1.8+273.15).toFixed(2);
                celsius.value= ((elvalue-32)/1.8).toFixed(2);
                break;
            case "kelvin":
                fahrenheit.value=((elvalue-273.32)*1.8+32).toFixed(2);
                celsius.value=(elvalue-273.32).toFixed(2);
                break;

        default:
            break;


    }


}