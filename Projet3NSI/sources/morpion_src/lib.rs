// (Lines like the one below ignore selected Clippy rules
//  - it's useful when you want to check your code with `cargo make verify`
// but some rules are too "annoying" or are not applicable for your case.)
#![allow(clippy::wildcard_imports)]

mod morpion;
use morpion::*;

use seed::{prelude::*, *};

// ------ ------
//     Init
// ------ ------

// `init` describes what should happen when your app started.
fn init(_: Url, _: &mut impl Orders<Msg>) -> Model {
    Model {
        morpion: morpion::Morpion::new()
    }
}

// ------ ------
//     Model
// ------ ------

// `Model` describes our app state.
struct Model {
    morpion: morpion::Morpion
}

// ------ ------
//    Update
// ------ ------

// (Remove the line below once any of your `Msg` variants doesn't implement `Copy`.)
#[derive(Copy, Clone)]
// `Msg` describes the different events you can modify state with.
enum Msg {
    Play(usize, usize)
}

// `update` describes how to handle each `Msg`.
fn update(msg: Msg, model: &mut Model, _: &mut impl Orders<Msg>) {
    match msg {
        Msg::Play(x, y) => {
            if model.morpion.get(x, y) == Some(&CaseType::Blank) {
                model.morpion.play(x, y);
            }
            model.morpion.victory()
        }
    }
}

// ------ ------
//     View
// ------ ------

// (Remove the line below once your `Model` become more complex.)
#[allow(clippy::trivially_copy_pass_by_ref)]
// `view` describes what to display.
fn view(model: &Model) -> Node<Msg> {
    div![
        C!["plateau"],
        model.morpion.plateau.iter().enumerate().map(|(posx, x)| {
            div![
                C!["ligne"],
                x.iter().enumerate().map(|(posy, y)| {
                    div![
                        match y {
                            CaseType::Red => {
                                C!["case", "neon", "neon-red", "x"]
                                
                            },
                            CaseType::Blue => {
                                C!["case", "neon", "neon-blue", "o"]
                            },
                            _ => {
                                C!["case"]
                            }
                        },
                        mouse_ev(Ev::Click, move |_| {
                            Msg::Play(posx, posy)
                        })
   
                    ]
                }).collect::<Vec<Node<Msg>>>()
            ]
        }).collect::<Vec<Node<Msg>>>(),
        div![
            C!["player"],
            if model.morpion.player {
                "Joueur rouge"
            } else {
                "Joueur bleu"
            }
        ],
        div![
            match model.morpion.victory {
                CaseType::Red => {
                    C!["victoire", "rouge" ,"neon", "neon-red"]
                },
                CaseType::Blue => {
                    C!["victoire" ,"bleu" ,"neon", "neon-blue"]
                },
                _ => {
                    C!["undisplay"]
                }
            }
        ]
    ]
}

// ------ ------
//     Start
// ------ ------

// (This function is invoked by `init` function in `index.html`.)
#[wasm_bindgen(start)]
pub fn start() {
    // Mount the `app` to the element with the `id` "app".
    App::start("app", init, update, view);
}
