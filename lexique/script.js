const WORDS = [
    ["dystopia", "dystopie"],
    ["utopia", "utopie"],
    ["travelling app", "application de voyage"],
    ["headset", "casque"],
    ["data", "données"],
    ["trend", "tendance"],
    ["side effects","effets secondaires"],
    ["nausea","nausée"],
    ["eyestrain","fatigue occulaire"],
    ["an advance","une avancée"],
    ["device","appareil"],
    ["breakthrough","percée"],
    ["achievement","réussite"],
    ["achievement","accomplissement"],
    ["scientist","scientifique"],
    ["experiment","expérience"],
    ["landscape","paysage"],
    ["flight","vol"],
    ["accommodation","logement"],
    ["a deal","un accord"],
    ["discount","réduction"],
    ["insurance","assurance"],
    ["luggage","bagages"],
    ["weather","météo"],
    ["journey","voyage"],
    ["itinerary","itinéraire"],
    ["futuristic","futuriste"],
    ["imaginary","imaginaire"],
    ["visionary","visionaire"],
    ["innovative","innovant"],
    ["unique","unique"],
    ["rare","rare"],
    ["original","original"],
    ["interactive","interactif"],
    ["accurate","précis"],
    ["educational","éducatif"],
    ["award-winning","médaillé"],
    ["award-winning","médaillé"],
    ["moving","émouvant"],
    ["fun","amusant"],
    ["immersive","immersif"],
    ["breathtaking","à vous couper le souffle"],
    ["stunning","étourdissant"],
    ["user-friendly","facile à utiliser"],
    ["state-of-the-art","dernier cri"],
    ["trustworthy","fiable"],
    ["pointless","futile"],
    ["broaden one's horizons","élargir ses horizons"],
    ["be out of touch with reality","être déconnecté de la réalité"],
    ["to long for","désirer"],
    ["push back the limits","repousser les limites"],
    ["achieve","accomplir"],
    ["travel abroad","voyager à l'étranger"],
    ["book a travel","réserver un voyage"],
    ["go sightseeing","visiter"],
    ["purchase","achetter"],
];

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

let words = new Array();

function rand(s) {
    return Math.floor(Math.random() * s)
}

function addWords(to_add) {
    for (const p of to_add) {
        words.insert(rand(words.length),[p[0],p[1]]);
        words.insert(rand(words.length),[p[1],p[0]]);
    }
}

addWords(WORDS);

function updateDisplay() {
    $("#app__display").text("Traduisez : "+words[0][0]);
}

$("#app__button_hint").click(() => {
    $("#app__input_0").addClass("is-valid");
    $("#app__input_0").val(words[0][1]);
    Swal.fire({
        icon: 'warning',
        title: 'Hint added'
    })
});

$("#app__button_check").click(() => {
    if (words[0][1].toLowerCase().trim() === $("#app__input_0").val().toLowerCase().trim()) {
        $("#app__input_0").removeClass("is-invalid");
        $("#app__input_0").removeClass("is-valid");
        Swal.fire({
            icon: 'success',
            title: 'Good job...'
        })
        words.push(words.shift());
        $("#app__input_0").val("")
        updateDisplay();
    } else {
        $("#app__input_0").addClass("is-invalid");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Check the entered answer'
        })
    }
});

updateDisplay();
