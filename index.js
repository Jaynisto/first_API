
const brandTable = document.querySelector('.myBrandTemplate')
const usersBrandTable = Handlebars.compile(brandTable.innerText)
const colorTable = document.querySelector('.myColorsTemplate')
const usersColorTable = Handlebars.compile(colorTable.innerText)



const displayingBrand = document.querySelector('.getBrand')
const displayingColors = document.querySelector('.getColor')

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then(apiData => {
        const makes = apiData.data;
        
        let listOfMakes = usersBrandTable({
            cars : makes
        })
        displayingBrand.innerHTML = listOfMakes
    })


    axios 
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then( apiData => {
        const colors = apiData.data;
        let list = usersColorTable({
            colors : colors
        })
        displayingColors.innerHTML = list;

    })

