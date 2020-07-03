// (Lines like the one below ignore selected Clippy rules
//  - it's useful when you want to check your code with `cargo make verify`
// but some rules are too "annoying" or are not applicable for your case.)
#![allow(clippy::wildcard_imports)]

mod demineur;
use demineur::CaseType;

use seed::{prelude::*, *};

// ------ ------
//     Init
// ------ ------

// `init` describes what should happen when your app started.
fn init(_: Url, _: &mut impl Orders<Msg>) -> Model {
    Model{grid: demineur::Grid::new(15, 20)}
}

// ------ ------
//     Model
// ------ ------

// `Model` describes our app state.
struct Model {
    grid: demineur::Grid
}

// ------ ------
//    Update
// ------ ------

// (Remove the line below once any of your `Msg` variants doesn't implement `Copy`.)
#[derive(Copy, Clone)]
// `Msg` describes the different events you can modify state with.
enum Msg {
    Reveal(usize, usize),
    Mark(usize, usize),
}

// `update` describes how to handle each `Msg`.
fn update(msg: Msg, model: &mut Model, _: &mut impl Orders<Msg>) {
    match msg {
        Msg::Reveal(x, y) => {
            if !model.grid.click_reveal(x as isize, y as isize) {
                web_sys::window().unwrap().alert_with_message("Défaite !");
            }
        },
        Msg::Mark(x, y) => {
            if model.grid.click_mark(x as isize, y as isize) {
                web_sys::window().unwrap().alert_with_message("Victoire !");

            }
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
        C!["tableau"],
        
        div![
            C!["score"],
            h2![
                format!("{}/{} mine trouvées", model.grid.marked, model.grid.total)
            ]
        ],
        model.grid.cases.iter().enumerate().map(|(posx,x)|{
            div![
                C!["ligne"],
                x.iter().enumerate().map(|(posy,y)|{
                    div![
                        C!["cellule"],
                        button![
                            match y {
                                CaseType::EmptyCase(true) => {
                                    C!["cell-button", "cell-flag"]
                                },
                                CaseType::Mine(true) => {
                                    C!["cell-button", "cell-flag"]
                                },
                                CaseType::EmptyCaseRevealed(i) => {
                                    C!["cell-button", "cell-reveal", match i {
                                        1 => "one",
                                        2 => "two",
                                        3 => "three",
                                        4 => "four",
                                        5 => "five",
                                        6 => "six",
                                        7 => "seven",
                                        8 => "height",
                                        _ => ""
                                    }]
                                },
                                CaseType::FalsePosition => {
                                    C!["cell-button", "cell-reveal", "cell-mine"]
                                }
                                _ => {
                                    C!["cell-button"]
                                }
                            },
                            mouse_ev(Ev::ContextMenu, move |event| {
                                event.prevent_default();
                                Msg::Mark(posx, posy)
                            }),
                            mouse_ev(Ev::Click, move |event| {
                                event.prevent_default();
                                Msg::Reveal(posx, posy)
                            })
                        ]
                    ]
                }).collect::<Vec<Node<Msg>>>()
            ]
        }).collect::<Vec<Node<Msg>>>()
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
