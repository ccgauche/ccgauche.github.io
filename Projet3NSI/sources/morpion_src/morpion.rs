pub struct Morpion {
    pub plateau: [[CaseType; 3]; 3],
    pub player: bool,
    pub victory: CaseType
}

impl Morpion {
    pub fn new() -> Self {
        Self {
            plateau: [[CaseType::Blank, CaseType::Blank, CaseType::Blank], [CaseType::Blank, CaseType::Blank, CaseType::Blank], [CaseType::Blank, CaseType::Blank, CaseType::Blank]],
            player: true,
            victory: CaseType::Blank
        }
    }

    pub fn get(&self, x: usize, y: usize) -> Option<&CaseType> {
        self.plateau.get(x)?.get(y)
    }

    pub fn set(&mut self, x: usize, y: usize, color: CaseType) -> Option<()> {
        *self.plateau.get_mut(x)?.get_mut(y)? = color;
        Some(())
    }

    pub fn play(&mut self, x: usize, y: usize) -> Option<()> {
        self.player = !self.player;
        if let Some(CaseType::Blank) = self.get(x, y) {
            if self.player {
                self.set(x, y, CaseType::Blue)
            } else {
                self.set(x, y, CaseType::Red)
            }
        } else {
            Some(())
        }
    }

    pub fn victory(&mut self) {
        if self.get(0, 0) == Some(&CaseType::Blue) && self.get(0, 1) == Some(&CaseType::Blue) && self.get(0, 2) == Some(&CaseType::Blue)
        || self.get(1, 0) == Some(&CaseType::Blue) && self.get(1, 1) == Some(&CaseType::Blue) && self.get(1, 2) == Some(&CaseType::Blue)
        || self.get(2, 0) == Some(&CaseType::Blue) && self.get(2, 1) == Some(&CaseType::Blue) && self.get(2, 2) == Some(&CaseType::Blue)
        || self.get(0, 0) == Some(&CaseType::Blue) && self.get(1, 0) == Some(&CaseType::Blue) && self.get(2, 0) == Some(&CaseType::Blue)
        || self.get(0, 1) == Some(&CaseType::Blue) && self.get(1, 1) == Some(&CaseType::Blue) && self.get(2, 1) == Some(&CaseType::Blue)
        || self.get(0, 2) == Some(&CaseType::Blue) && self.get(1, 2) == Some(&CaseType::Blue) && self.get(2, 2) == Some(&CaseType::Blue)
        || self.get(0, 0) == Some(&CaseType::Blue) && self.get(1, 1) == Some(&CaseType::Blue) && self.get(2, 2) == Some(&CaseType::Blue)
        || self.get(0, 2) == Some(&CaseType::Blue) && self.get(1, 1) == Some(&CaseType::Blue) && self.get(2, 0) == Some(&CaseType::Blue) {
            self.victory = CaseType::Blue
        } else if self.get(0, 0) == Some(&CaseType::Red) && self.get(0, 1) == Some(&CaseType::Red) && self.get(0, 2) == Some(&CaseType::Red)
        || self.get(1, 0) == Some(&CaseType::Red) && self.get(1, 1) == Some(&CaseType::Red) && self.get(1, 2) == Some(&CaseType::Red)
        || self.get(2, 0) == Some(&CaseType::Red) && self.get(2, 1) == Some(&CaseType::Red) && self.get(2, 2) == Some(&CaseType::Red)
        || self.get(0, 0) == Some(&CaseType::Red) && self.get(1, 0) == Some(&CaseType::Red) && self.get(2, 0) == Some(&CaseType::Red)
        || self.get(0, 1) == Some(&CaseType::Red) && self.get(1, 1) == Some(&CaseType::Red) && self.get(2, 1) == Some(&CaseType::Red)
        || self.get(0, 2) == Some(&CaseType::Red) && self.get(1, 2) == Some(&CaseType::Red) && self.get(2, 2) == Some(&CaseType::Red)
        || self.get(0, 0) == Some(&CaseType::Red) && self.get(1, 1) == Some(&CaseType::Red) && self.get(2, 2) == Some(&CaseType::Red)
        || self.get(0, 2) == Some(&CaseType::Red) && self.get(1, 1) == Some(&CaseType::Red) && self.get(2, 0) == Some(&CaseType::Red) {
            self.victory = CaseType::Red
        }
    }
}

#[derive(PartialEq)]
pub enum CaseType {
    Blank,
    Blue,
    Red
}
