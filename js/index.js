document.getElementById("mainTitle").innerText = "Point and Click adventure";
const offsetCharacter = 16;
const sec = 1000;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.

        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);
        switch (e.target.id) {
            case "door1":
                showMessage("This door is closed, try to rob from a different house bitch!!!");
                break;
            case "statue":
                showMessage("This piece of art is amazing because its me!");
                break;
            default:
                hideMessage();
                break;
        }
    }
}

function showMessage(message) {
    mainCharacterSpeech.innerHTML = message;
    mainCharacterSpeech.style.opacity = 1;
    setTimeout(hideMessage, 4 * sec);
}

function hideMessage() {
    mainCharacterSpeech.innerHTML = "...";
    mainCharacterSpeech.style.opacity = 0;
}