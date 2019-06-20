// ==UserScript==
// @name         BuzzIn.live Custom Sound Player
// @version      1.1.0
// @namespace    https://buzzinlive-custom-soundbuzzer.glitch.me
// @description  Custom sounds on BuzzIn.live!
// @updateURL    https://github.com/WilsontheWolf/BuzzIn.live-Custom-Sound-Player-Userscript/raw/master/sound.user.js
// @downloadURL  https://github.com/WilsontheWolf/BuzzIn.live-Custom-Sound-Player-Userscript/raw/master/sound.user.js
// @icon         https://raw.githubusercontent.com/WilsontheWolf/BuzzIn.live-Custom-Sound-Player-Userscript/master/image.png
// @author       WilsontheWolf
// @match        *buzzin.live/play
// @match        *buzzin.live/host
// @grant        none
// ==/UserScript==
var opttxt = ['Deafult',
              'Custom',
              'Deja Vu',
              'Dear Sister',
              'Fus Ro Dah',
              'GameCube Logo',
              'Sexy Sax',
              'Leeroy Jenkins',
              'That was easy!',
              'Flower Garden',
              'Seinfeld Theme',
              'Shooting Stars'
             ]
var optval = ['buzz.mp3',
              'custom',
              'https://www.myinstants.com//media/sounds/deja-vu.mp3',
              'https://www.myinstants.com/media/sounds/SNL_Digital_Short_-_Dear_Sister_1.mp3',
              'https://www.myinstants.com/media/sounds/fus-ro-dah.mp3',
              'https://www.myinstants.com/media/sounds/gamecube_intro.mp3',
              'https://www.myinstants.com/media/sounds/george-micael-wham-careless-whisper-1.mp3',
              'https://www.myinstants.com/media/sounds/leroy.swf.mp3',
              'https://www.myinstants.com/media/sounds/that_was_easy.mp3',
              'https://www.myinstants.com/media/sounds/flower-garden-alert.mp3',
              'https://www.myinstants.com/media/sounds/seinfeld-theme_1.mp3',
              'https://www.myinstants.com/media/sounds/untitled-1_qPskhfn.mp3',
              'https://www.myinstants.com',
              'https://www.myinstants.com',
              'https://www.myinstants.com',
             ]
let i
var input = document.createElement("input");
var button = document.createElement("input");
var options = document.createElement("select")
for (i = 0; i < opttxt.length; i++) {
    let opt = document.createElement("option");
    opt.value = optval[i];
    opt.text = opttxt[i];
    options.add(opt, null);
}
options.setAttribute("style", "font-size:18px;position:absolute;top:5px;right:40px;");
options.onchange = change
document.body.appendChild(options);
input.type = "text";
input.value = "https://www.myinstants.com//media/sounds/deja-vu.mp3";
input.setAttribute("style", "font-size:18px;position:absolute;top:30px;right:107px;");
input.disabled = true
document.body.appendChild(input);
button.type = "button";
button.value = "Apply";
button.setAttribute("style", "font-size:18px;position:absolute;top:30px;right:40px;");
button.disabled = true
document.body.appendChild(button);
button.onclick = customSound
function changeSound(sound) {
    buzzSound = new Howl({
        src: [sound],
        rate: 1.1
    })
    if(document.getElementById("mute")) document.getElementById("mute").checked = true
    else {playSound = true
         let icon = document.getElementById("hostSoundIcon")
         icon.classList.add("fa-check");
        icon.classList.remove("fa-times");}
}

function customSound() {
    let sound = input.value
    changeSound(sound)
    console.log(`BuzzIn.live Custom Sound Player changed the buzzer to a custom sound (${sound})`)
}

function change() {
    let value = optval[options.selectedIndex]
    if (value == 'custom') {
        input.disabled = false
        button.disabled = false
    } else {
        input.disabled = true
        button.disabled = true
    }
    if (value != 'custom') {
        changeSound(value)
        console.log(`BuzzIn.live Custom Sound Player changed the buzzer to ${opttxt[options.selectedIndex]} (${value})`)
    }

}
