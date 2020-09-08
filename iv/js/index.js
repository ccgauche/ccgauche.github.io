
let elements;
let validate;

(function () {

    function $(selector) {
        return document.getElementById(selector);
    }

    const js_infinitive = $("js_infinitive");
    const js_preterit = $("js_preterit");
    const js_past_participle = $("js_past_participle");
    const js_french = $("js_french");
    const js_points = document.getElementsByClassName("js_points");

    function updatePoints(a) {
        for (const e of js_points) {
            e.innerText = a + " ★";
        }
    }
    let points = 0;

    class Element {

        constructor(french, infinitive, preterit, past_participle) {
            this.french = french;
            this.infinitive = infinitive;
            this.preterit = preterit;
            this.past_participle = past_participle;
            this.points = 3;
            this.hint = false;
        }

        display() {
            js_french.innerText = this.french;
            js_infinitive.value = "";
            js_infinitive.classList = "";
            js_preterit.value = "";
            js_preterit.classList = "";
            js_past_participle.value = "";
            js_past_participle.classList = "";
            this.hint = false;
        }

        _hint() {
            js_infinitive.value = this.infinitive;
            js_preterit.value = this.preterit;
            js_past_participle.value = this.past_participle;
            this.points = 0;
            this.hint = true;
        }
    }

    elements = [new Element("Couper", "cut", "cut", "cut"), new Element("Être", "be", "was/were", "been"), new Element("Parier", "bet", "bet/betted", "bet/betted")]

    function normalize(a) {
        return a.trim().split(" ").join("").toLowerCase();
    }

    validate = () => {
        const a = elements[0];
        let o = 0;
        if (normalize(js_infinitive.value) == a.infinitive) {
            o++;
            js_infinitive.classList = "valid";
        } else {
            js_infinitive.classList = "error";
        }
        if (normalize(js_preterit.value) == a.preterit) {
            o++;
            js_preterit.classList = "valid";
        } else {
            js_preterit.classList = "error";
        }
        if (normalize(js_past_participle.value) == a.past_participle) {
            o++;
            js_past_participle.classList = "valid";
        } else {
            js_past_participle.classList = "error";
        }
        if (o == 3) {
            elements.push(elements.shift());
            elements[0].display();
            points += a.points;
            updatePoints(points);
            if (a.points > 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'You earned ' + a.points + ' points!',
                    footer: 'Tip: You lose one point every time you make an invalid submit!'
                })
            } else if (a.points == 1) {
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'You earned a point!',
                    footer: 'Tip: You lose one point every time you make an invalid submit!'

                })
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    text: 'You earned no point!',
                    footer: 'Tip: ' + (a.hint ? "If you use a hint you lose all points for the current verb!" : "If you make more than 2 mistakes, you don't get any points for the current verb!")
                })
            }
            return;
        } else if (a.points > 0) {
            a.points -= 1;
        }
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You made an error'
        })
    };
    elements[0].display();
})();
