use wasm_bindgen::prelude::*;

#[no_mangle]
pub extern fn triple(x: i32) -> i32 {
  return 3 * x;
}

#[wasm_bindgen]
pub fn say(s: &str) -> String {
  let r = String::from("hello ");
  return r + &s;
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(super::say("Bob!"), "hello Bob!");
    }
}
