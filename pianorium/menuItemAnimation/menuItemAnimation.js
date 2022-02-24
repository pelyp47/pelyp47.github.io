let menuItems = document.querySelectorAll(".menu__link");

// spanning all the elements in menuItems
for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];
    let innerText = menuItem.innerHTML;
    let newInnerText = [];
    for ( let j = 0; j < innerText.length; j++) {
        let letter = innerText[j];
        let newSpan = document.createElement("span");
        if (j%2===0) {
            newSpan.classList.add('menu__letter_odd')
        }
        else {
            newSpan.classList.add('menu__letter_even');
        }
        newSpan.innerHTML = letter;
        newInnerText.push(newSpan);
    }
    menuItem.innerHTML = "";
    for ( let j = 0; j < newInnerText.length; j++) {
        menuItem.appendChild(newInnerText[j]);
    }
}



