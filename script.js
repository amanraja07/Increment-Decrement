const countValue = document.querySelector('#counter');

const increment = ()=> {
    //get value from UI.
    let value = parseInt(countValue.innerText);
    //Update value .
    value += 1;
    //SET VALUE TO THE UI.
    countValue.innerText = value;
}

const decrement = ()=> {
    //get value from UI.
    let value = parseInt(countValue.innerText);
    //Update value .
    value -= 1;
    //SET VALUE ONTO THE UI.
    countValue.innerText = value;
}
