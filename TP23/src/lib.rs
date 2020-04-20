
#[macro_use]
extern crate lazy_static;
extern crate rand;
//extern crate rand;

use seed::{*, prelude::*};

use rand::prelude::*;


struct Model {
    pub out_val: f32,
    pub in_curr: String,
    pub out_curr: String,
    pub in_val: String,
    pub random_number: u32,
    pub random_message: String,
    pub trying: String,
    pub attemps: u32
}

impl Default for Model {
    fn default() -> Self {
        Self {
            out_val: 0.0,
            in_curr: "Yen".to_string(),
            out_curr: "Yen".to_string(),
            in_val: "0".to_string(),
            random_number: rand::thread_rng().gen_range(0,100) + 1,
            random_message : String::new(),
            trying: String::new(),
            attemps: 0
        }
    }
}


#[derive(Clone)]
enum Msg {
    UpdateInput(String),
    UpdateInputCurrency(String),
    UpdateOutputCurrency(String),
    Attempt(String),
    Check
}

fn handle_aptemt(model: &mut Model) -> Option<()> {
    if let Ok(e) = model.trying.parse::<i32>() {
        if e < 0 {
            model.random_message = "Veuillez entrer un nombre supérieur a zéro".to_owned();
            return Some(());
        } else if e > 100 {
            model.random_message = "Veuillez entrer un nombre inférieur a cent".to_owned();
            return Some(());
        }
        model.attemps += 1;
        if e == model.random_number as i32 {
            model.random_message = format!("Bravo vous avez trouvé le nombre mystère en {} coups",model.attemps);
        } else if e < model.random_number as i32 {
            model.random_message = format!("Plus grand!");
        } else {
            model.random_message = format!("Plus petit!");
        }
    } else {
        model.random_message = "Veuillez entrer un nombre".to_owned();
    }
    Some(())
}

fn update(msg: Msg, model: &mut Model, _: &mut impl Orders<Msg>) {
    match msg {
        Msg::UpdateInput(a) => {
            model.in_val = a.to_string();
        },
        Msg::UpdateInputCurrency(a) => {
            model.in_curr = a.to_string();
        },
        Msg::UpdateOutputCurrency(a) => {
            model.out_curr = a.to_string();
        },
        Msg::Attempt(a) => {
            model.trying = a;
        },
        Msg::Check => {
            handle_aptemt(model);
        },
        _ => ()
    }
    model.out_val = if let Some(e) = convert(&model.in_curr,&model.in_val,&model.out_curr) {
        e
    } else {
        0.0
    };
}

lazy_static! {
    static ref changes: std::collections::HashMap<String,f32> = {
        let mut map = std::collections::HashMap::with_capacity(50);
        map.insert("Dolar américain".to_string(),0.92);
        map.insert("Yen".to_string(),0.0086);
        map.insert("Livre sterling".to_string(),1.15);
        map.insert("Euro".to_string(),1.0);
        map.insert("Bitcoin".to_string(),6529.79);
        map.insert("Etherum".to_string(),156.56);
        map
    };
}


fn device_dropdown(msg: impl FnOnce(String) -> Msg + 'static + Clone) -> Node<Msg> {
    select![
        changes.iter().map(|(x,_)| -> Node<Msg> {
            option![x.to_string()] 
        }),
        input_ev(Ev::Input, msg)
    ]
}

fn convert(input_currency: &str,number: &str,output_currency: &str) -> Option<f32> {
    Some(number.parse::<f32>().ok()? * changes.get(input_currency)? / changes.get(output_currency)?)
}

// 1 YEN -> 0.5 €
// 1€ -> 0.89$
// 2.7 * YEN_VALUE * DOLAR_VALUE

fn view(model: &Model) -> impl View<Msg> {
    div![
        class!["container"],
        h1![
            "Convertisseur de monaie"
        ],
        hr! [],
        div! [
            class!["form"],
            div! [
                class! ["input-group"],
                input![attrs!{At::Placeholder => "Devises",At::Type => "number"},
                    input_ev(Ev::Input, Msg::UpdateInput)],
                device_dropdown(Msg::UpdateInputCurrency)
            ],
            div! [
                class!["input-group"],
                input![class!["disabled"],attrs!{At::Placeholder => "Devises",At::Type => "number",At::Disabled => true.as_at_value(), At::Value => model.out_val}],
                device_dropdown(Msg::UpdateOutputCurrency)
            ]
        ],
        h1![
            "Effet de survol"
        ],
        hr! [],
        div![
            class!["centered-image"],
            style!{
                "display" => "flex",
                "justify-content" => "space-around",
            },
            img![
                attrs![At::Src => "logo.svg"],
                style!{
                    "max-width" => "20rem",
                }
            ]
        ],
        h1![
            "Nombre mystère"
        ],
        hr! [],
        div![
            class!["form-lined"],
            div![
                class!["form-row"],
                div![
                    class!["form-row-left"],
                    h4!["Veuillez entrer un nombre entre 1 et 100"]
                ],
                div![
                    class!["form-row-right"],
                    h4![format!("{} essais",model.attemps)]
                ]
            ],
            div![
                class!["form-row"],
                input![attrs!{At::Placeholder => "Nombre entre 1 et 100",At::Type => "number"},
                    input_ev(Ev::Input, Msg::Attempt)],
                button![
                    simple_ev(Ev::Click, Msg::Check),
                    "✓",
                ]
            ],
            a![
                model.random_message
            ]
        ]
    ]
}

#[wasm_bindgen(start)]
pub fn render() {
    App::builder(update, view)
        .build_and_start();
}