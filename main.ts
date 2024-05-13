import typenullsfx from "./typenullsfx.js";
let yo:{[key:string]:string} = {
    bomb: "./sfx/Bomb.wav",
    epic: "./sfx/Epic.wav",
    wasted: "./sfx/Wasted.wav",
    iphone: "./sfx/iPhone_(+Reverb).wav",
    nani: "./sfx/Metal_Gear_Alert__Sound_Effect(MP3_160K)_1.mp3",
    splat: "./sfx/Splat_-_Gaming_Sound_Effect_(HD)(MP3_128K)_1.mp3",
    teleport: "./sfx/Teleport_Sound_Effect(MP3_320K).mp3",
    click: "./sfx/Mouse_Click_-_Sound_Effect_(HD)(MP3_160K)_1.mp3",
    magic: "./sfx/Magic.wav",
    kwak: "./sfx/Duck_Quack_-_Sound_Effect_(HD)(MP3_160K)_1.mp3",
    dbz: "./sfx/Dragon_Ball.wav",
    censor: "./sfx/Censorship.wav",
    bed: "./sfx/Bed_Squeak.mp3",
    angel: "./sfx/Angelic_Voice.wav",
    amongus: "./sfx/Among_Us.mp3",
    audience: "./sfx/Audience.wav",
    tititik: "./sfx/Tik_Tik_Sound_Effect_By_Techno.mp3"
};

let mysfxer = new typenullsfx(yo);

document.getElementById("custom")!.addEventListener("click", (e) => {
  mysfxer.play("audience", 0.6);
});
