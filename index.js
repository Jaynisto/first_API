const userTemplateText = document.querySelector('.myTemplate');
const userTemplate = Handlebars.compile(userTemplateText.innerText);

const usersElem = document.querySelector('.users');
const colorElem = document.querySelector('.colors');


axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
        .then(result => {
            const posts = result.data;
            
            let list = userTemplate({
                cars : posts  
            })
            usersElem.innerHTML = list
    })

axios 
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then( apiData => {
        const colors = apiData.data;
        let list = userTemplate({
            color : colors
        })
        colorElem.innerHTML = list;

    }

    )


