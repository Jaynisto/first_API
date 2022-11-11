const carsTemplateText = document.querySelector('.myCarsTemplate');
const userCarsTemplate = Handlebars.compile(carsTemplateText.innerText);
const colorTemplateText = document.querySelector('.myColorsTemplate');
const userColorsTemplate = Handlebars.compile(colorTemplateText.innerText);
const carMakesTemplateText = document.querySelector('.carMakes');
const userCarMakeTemplate = Handlebars.compile(carMakesTemplateText.innerText);


const usersElem = document.querySelector('.users');
const colorElem = document.querySelector('.colors');
const carsElem = document.querySelector('.carModels');



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
            color : colors
        })
        colorElem.innerHTML = list;

    })

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(apiData => {
        const makes = apiData.data;
        console.log(makes)
        let listOfMakes = userCarMakeTemplate({
            cars : makes
        })
        carsElem.innerHTML = listOfMakes
    })


