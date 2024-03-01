// Code your solutions in this file

function writeCards(names, event) {
    const thankyouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankyouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankyouMessages;
}

function countDown(startingnumber) {    
    while (startingnumber >= 0) {
        console.log(startingnumber);
        startingnumber--;
    }
}
