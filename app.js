//selectors
const cookieModal = document.querySelector('.cookie-box');
const customizeBox = document.querySelector('.customize-box');
const categoryList = document.querySelector('.category-list');
const toggle = document.querySelector('.toggle');
const confirgureButton = document.querySelector(".custom-btn");

//added for dark theme
const cookieTitle = document.querySelector(".cookie-box-title")
const cookieCross = document.querySelector('.cookie-cross');
const configureCross = document.querySelector(".configure-cross");
const cookieMessage = document.querySelector('.message');
const secondRowCustomoModal = document.getElementsByClassName('second-row')
const titleCustomModal = document.getElementsByClassName('custom-first-row')


//listeners
confirgureButton.onclick =  () => {
    cookieModal.style.visibility = 'hidden';
    // addCategory();
    customizeBox.style.visibility = 'visible';
}

document.querySelector(".back").onclick = () => {
    customizeBox.style.visibility = "hidden"
    cookieModal.style.visibility = 'visible';
}

cookieCross.onclick = () => {
    cookieModal.style.visibility = "hidden";
}

configureCross.onclick = () => {
    customizeBox.style.visibility = "hidden";
}

document.querySelector('.category-list').addEventListener("click", switchButton);

// functions

// Dynamically Add new cookie category
const addCategory = () => {

    // Create the DOM elements
    const newCategory = document.createElement('div');
    const mainContent = document.createElement('div');
    const firstRow = document.createElement('div');
    const categoryType = document.createElement('span');
    const categoryDesc = document.createElement('p');
    const buttonContainer = document.createElement('div');
    const toggleButton = document.createElement('div');
    const detailsButton = document.createElement('button');
    const categoryIcon = document.createElement('i');
    
    //svg icon
    const svgIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon__StyledIcon-sc-1emr5ew-0 arrow-animate"><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M5.52843 4.47145C5.26808 4.2111 5.26808 3.78899 5.52843 3.52864C5.78878 3.26829 6.21089 3.26829 6.47124 3.52864L10.4712 7.52864C10.7236 7.78102 10.7325 8.18741 10.4913 8.45052L6.82461 12.4505C6.57581 12.7219 6.1541 12.7403 5.88269 12.4915C5.61127 12.2427 5.59294 11.821 5.84173 11.5496L9.07708 8.02009L5.52843 4.47145Z"></path></svg>`
    
    // Add classes 
    newCategory.classList.add('category');
    mainContent.classList.add('content'); //main-content
    firstRow.classList.add('custom-first-row');
    categoryType.classList.add('title'); //category-type
    categoryIcon.classList.add('icon', 'fa-solid', 'fa-bullhorn'); //change to dynamic
    buttonContainer.classList.add('toggle', 'active'); //essential cookie category
    toggleButton.classList.add('toggle-button');
    detailsButton.classList.add('more-details-btn', 'btn-animate')

    // Place the text content
    categoryType.innerText = "Category title";
    categoryDesc.innerText = "This category is added dynamically" 
    detailsButton.innerHTML = "More Details" + svgIcon;

    // Put together the DOM nodes
    buttonContainer.appendChild(toggleButton);
    firstRow.append(categoryType, buttonContainer);
    mainContent.append(firstRow, categoryDesc, detailsButton)
    newCategory.append(categoryIcon, mainContent);
    categoryList.appendChild(newCategory);

    return newCategory;

}

// Optin/Optout Cookies (Configure Modal)
function switchButton(event){
    const item = event.target
    if(item.classList[0] === 'toggle-button' && !item.parentElement.classList.contains('essential-cookie')){
        item.parentElement.classList.toggle("active");
    }
}

function changeToDarkTheme(theme){
    if(theme == true){
        cookieModal.classList.add('container-dark-theme')
        customizeBox.classList.add('container-dark-theme')
        cookieTitle.classList.add('dark-theme')
        cookieCross.classList.add('dark-theme')
        cookieMessage.classList.add('dark-theme')
        confirgureButton.classList.add('dark-theme')
        configureCross.classList.add('dark-theme')

        for(let item of secondRowCustomoModal){
            item.classList.add('second-row-dark-theme')
        }
        for(let item of titleCustomModal){
            item.classList.add('dark-theme')
        }
    }
    else {
        //apply default css styles
    }   
}

//change theme to dark
changeToDarkTheme();


