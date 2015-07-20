

var introZ = ["You wake up in an abandoned mine. Its pitch dark but you see a light ahead. You start running towards the light!", "You are standing in the middle of what used to be a busy mall. It's too quite. You have to get out of here. So, you start searching for an exit.", "You can't breath your lungs are aching! You realize you are underwater. You desperatly start swimming towards the shore."];

function randomNumber (range) {
    return Math.round( Math.random() * range );
}

alert( introZ[ randomNumber(introZ.length - 1)]);

