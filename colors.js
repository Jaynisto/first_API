const colorTemplateText = document.querySelector('.myColorsTemplate');
const userColorsTemplate = Handlebars.compile(colorTemplateText.innerText);
const carsTemplateText = document.querySelector('.myCarsTemplate');
const userCarsTemplate = Handlebars.compile(carsTemplateText.innerText);
const colorElem = document.querySelector('.myColors');
const usersElem = document.querySelector('.getColors');
const coloButton = document.querySelector('.colorButton')



axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(result => {
            const posts = result.data;
            
            let list = userCarsTemplate({
                cars : posts  
            })
            usersElem.innerHTML = list
    })


axios 
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then( apiData => {
        const colors = apiData.data;
        let list = userColorsTemplate({
            colors : colors
        })
        colorElem.innerHTML = list;

    })

coloButton.addEventListener("click",()=>{
    const color = document.querySelector('#color')
    const ourColorValue = color.value;
    console.log(ourColorValue)


    axios 
    .get(`https://api-tutor.herokuapp.com/v1/cars/color/${ourColorValue}`)
    .then( apiData => {
        const colors = apiData.data;
        let list = userCarsTemplate({
            cars : colors
        })
        usersElem.innerHTML = list;

    })  
    
});
