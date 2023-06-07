function displayType(character) {
    var characterType = character.getAttribute("data-disneyPrincess");
    alert(characterType + " is the Disney princess from the " + character.innerHTML + " movie!");
}