const charactersArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","ñ","z","x","c","v","b","n","m", "|", "°", "¬", "!","#","$","%","&", "/", "(", ")", "=", "?", "¿", "¡", "+", "*", "~", "{", "}", "[", "]", "^", "@", "<", ">", "-", "_", "Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0"]
const passwordBtnEl = document.getElementById("password-btn")
let sliderValueEl = document.getElementById("range-value")
const sliderEl = document.getElementById("input-range")
const passwordBox1El = document.getElementById("password-box1")
const passwordBox2El = document.getElementById("password-box2")
const passwordBox3El = document.getElementById("password-box3")
const passwordBox4El = document.getElementById("password-box4")


sliderValueEl.innerHTML = sliderEl.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
sliderEl.oninput = function(){
    sliderValueEl.innerHTML = this.value;
}

function generatePassword(){
    
    let passwordString = ""
    for(let i=0; i<sliderEl.value; i++){
        const randomChar = Math.floor(Math.random()*charactersArray.length)
        passwordString += charactersArray[randomChar]
    }

    return passwordString
}

function renderBoxes(){
    passwordBox1El.textContent = generatePassword()
    passwordBox2El.textContent = generatePassword()
    passwordBox3El.textContent = generatePassword()
    passwordBox4El.textContent = generatePassword()
}

function copyPassword(id){
    const copyText = document.getElementById(`${id}`).innerText
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard")
    })
    console.log(copyText)
}

passwordBtnEl.addEventListener("click", renderBoxes)
passwordBox1El.addEventListener("click", () => copyPassword("password-box1"))
passwordBox2El.addEventListener("click", () => copyPassword("password-box2"))
passwordBox3El.addEventListener("click", () => copyPassword("password-box3"))
passwordBox4El.addEventListener("click", () => copyPassword("password-box4"))