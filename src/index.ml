type msg = Increment | Decrement | Reset | Edit of int | Set

(** Current value, current edit value *)
let init_model = 0, 0

let update (cur_val, cur_edit) = function
  | Increment -> cur_val + 1, cur_edit
  | Decrement -> cur_val - 1, cur_edit
  | Reset -> init_model
  | Edit i -> cur_val, i
  | Set -> cur_edit, cur_edit

let view_button title msg = Tea.Html.(button [onClick msg] [text title])

let view (cur_val, cur_edit) =
  let open Tea.Html in
  let edit input_val = Edit (int_of_string input_val) in

  div []
    [ p [] [text (string_of_int cur_val)];
      p [] [view_button "Increment" Increment];
      p [] [view_button "Decrement" Decrement];
      p [] [view_button "Reset" Reset];
      p [] [input' [onInput edit] [cur_edit |> string_of_int |> text]];
      p [] [view_button "Set" Set] ]

let main = Tea.App.beginnerProgram { model = init_model; view; update }
