
const toggleSwitch = document.querySelector('input[type=checkbox]')
const basicPrice = document.querySelector('.basic')
const professionalPrice = document.querySelector('.professional')
const masterPrice = document.querySelector('.master')


function switchPlan(e) {
    if(e.target.checked) {
        basicPrice.textContent = '19.99'
        professionalPrice.textContent = '24.99'
        masterPrice.textContent = '39.99'
    } else {
        basicPrice.textContent = '199.99'
        professionalPrice.textContent = '249.99'
        masterPrice.textContent = '399.99'
    }
}

toggleSwitch.addEventListener('change', switchPlan)