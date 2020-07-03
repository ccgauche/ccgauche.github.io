use rand::prelude::*;

#[derive(Debug, PartialEq)]
pub struct Grid {
    pub cases: Vec<Vec<CaseType>>,
    pub total: usize,
    pub marked: usize
}

impl Grid {
    pub fn new(x: usize, y: usize) -> Self {
        let mut total = 0;
        let mut rng = thread_rng();
        let mut vec = Vec::with_capacity(x);
        for _ in 0..x {
            let mut vec1 = Vec::with_capacity(y);
            for _ in 0..y {
                if rng.gen_range(0, 4) == 0 {
                    vec1.push(CaseType::Mine(false));
                    total += 1
                } else {
                    vec1.push(CaseType::EmptyCase(false))
                }
            }
            vec.push(vec1)
        }
        Self { cases: vec , total, marked: 0}
    }

    pub fn get_case(&self, x: isize, y: isize) -> Option<&CaseType> {
        let x = if x < 0 { return None } else { x as usize };
        let y = if y < 0 { return None } else { y as usize };
        self.cases.get(x)?.get(y)
    }

    pub fn set_case(&mut self, x: isize, y: isize, value: CaseType) -> Option<()> {
        let x = if x < 0 { return None } else { x as usize };
        let y = if y < 0 { return None } else { y as usize };
        *(self.cases.get_mut(x)?.get_mut(y)?) = value;
        Some(())
    }

    pub fn count_mine(&self, x: usize, y: usize) -> u8 {
        let mut total = 0u8;
        for dx in -1..2 {
            for dy in -1..2 {
                match self.get_case(x as isize + dx, y as isize + dy) {
                    Some(CaseType::Mine(_)) => {
                        total += 1;
                    },
                    Some(CaseType::FalsePosition) => {
                        total += 1;
                    },
                    _ => {}
                }
            }
        }
        total
    }

    pub fn click_reveal(&mut self, x: isize, y: isize) -> bool {
        match self.get_case(x, y) {
            Some(CaseType::EmptyCase(false)) => {
                let val = self.count_mine(x as usize, y as usize);
                self.set_case(
                    x,
                    y,
                    CaseType::EmptyCaseRevealed(val),
                );
                if val == 0 {
                    for dx in -1..2 {
                        for dy in -1..2 {
                            self.click_reveal(x+dx,y+dy);
                        }
                    }
                }
                true
            }
            Some(CaseType::Mine(false)) => {
                self.set_case(x, y, CaseType::FalsePosition);
                false
            }
            _ => true,
        }
    }

    pub fn click_mark(&mut self, x: isize, y: isize) -> bool{
        match self.get_case(x, y) {
            Some(CaseType::Mine(value)) => {
                self.set_case(x, y, CaseType::Mine(!value));
                return self.victory()
            }
            Some(CaseType::EmptyCase(value)) => {
                self.set_case(x, y, CaseType::EmptyCase(!value));
                return self.victory()
            }
            _ => {
                false
            }
        }
    }

    pub fn victory(&mut self) -> bool {
        let mut marked = 0;
        let mut found = 0;
        let mut total = 0;
        for x in self.cases.iter() {
            for y in x.iter() {
                match y {
                    CaseType::Mine(a) => {
                        total += 1;
                        if *a {
                            found += 1;
                            marked += 1;
                        }
                    },
                    CaseType::EmptyCase(true) => {
                        marked += 1;
                    }
                    _ => ()
                }
            }
        }
        self.marked = marked;
        return found == total;
    }
}
#[derive(Debug, PartialEq)]
pub enum CaseType {
    EmptyCase(bool),
    Mine(bool),
    EmptyCaseRevealed(u8),
    FalsePosition,
}
