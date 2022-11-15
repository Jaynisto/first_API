const carsTemplateText = document.querySelector('.myCarsTemplate');
const userCarsTemplate = Handlebars.compile(carsTemplateText.innerText);
const carMakesTemplateText = document.querySelector('.carMakes');
const userCarMakeTemplate = Handlebars.compile(carMakesTemplateText.innerText);
const filtButton = document.querySelector('.filButton')


const usersElem = document.querySelector('.users');

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
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(apiData => {
        const makes = apiData.data;
        
        let listOfMakes = userCarMakeTemplate({
            cars : makes
        })
        carsElem.innerHTML = listOfMakes
    })


    filtButton.addEventListener("click",()=>{
        const make = document.querySelector('#cars')
        const ourValue = make.value;
    
        axios
        .get(`https://api-tutor.herokuapp.com/v1/cars/make/${ourValue}`)
            .then(result => {
                const posts = result.data;            
                let list = userCarsTemplate({
                    cars : posts  
                })
                usersElem.innerHTML = list
        })    
        
        
    });
