export class typenullsfx {
    sfx_list;
    audioEles;
    constructor(sfx_list) {
        // console.log('nullsfx');
        this.sfx_list = sfx_list;
        this.audioEles = {};
        for (let [key, val] of Object.entries(this.sfx_list)) {
            let sfx = document.createElement("audio");
            sfx.src = val;
            sfx.setAttribute("preload", "auto");
            sfx.setAttribute("controls", "none");
            sfx.volume = 0;
            sfx.load();
            // sfx.play();
            this.audioEles[key] = sfx;
            // console.log('base sfx added ;', key);
            // TODO: fix remove sfx eventlistener not working
            sfx.addEventListener("ended", handleEnded);
            function handleEnded() {
                // Remove all event listeners after sound is fully played
                sfx.removeEventListener("ended", handleEnded);
                // Pause and remove the sfx audio element from memory
                sfx.pause();
                sfx.remove();
            }
        }
        this.init();
    }
    init() {
        const targets = document.querySelectorAll("[nsfx]");
        targets.forEach((ele) => {
            let attrVal = ele.getAttribute("nsfx").trim();
            // One element can have multiple event drive sfx
            attrVal.split(";").forEach((soundFx) => {
                let [eve, src] = soundFx.trim().split("?", 2), key, vol;
                [eve, key] = eve.trim().split("!", 2);
                [src, vol] = src.trim().split("%", 2);
                ele.addEventListener(eve, (e) => {
                    e.stopPropagation();
                    if (eve.substring(0, 3) === "key" && key && e.key !== key)
                        return;
                    this.play(src, vol ?? ele.getAttribute("nsfx-vol"), e);
                });
            });
        });
    }
    play(src, vol = null, e) {
        let sfx = this.audioEles[src].cloneNode();
        // console.log('sfx added');
        sfx.currentTime = 0;
        sfx.volume = parseFloat(vol ?? "1");
        sfx.volume = isNaN(sfx.volume) ? 1 : sfx.volume;
        sfx.play();
        sfx.addEventListener("ended", handleEnded);
        function handleEnded() {
            // Remove all event listeners
            sfx.removeEventListener("ended", handleEnded);
            // Pause and remove the sfx audio element from memory
            sfx.pause();
            sfx.remove();
        }
    }
}
// nullsfx.prototype.parseOptions = function(query="onclick?wasted&vol=0.6") {
//   // let eve, options, eo;
//   // eve = ((options = (eo = q.split('?', 1))[1].split('&')) && eo)[0];
// }
// document.querySelector('button').addEventListener('pointermove')
//# sourceMappingURL=typenullsfx.js.map