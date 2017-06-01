type msg =
  Increment | Decrement | Reset | Edit of int | Set | Disable of bool

(** Current value, current edit value, 'Set' button disabled *)
let init_model = 0, 0, false

let update (cur_val, cur_edit, disable) = function
  | Increment -> cur_val + 1, cur_edit, disable
  | Decrement -> cur_val - 1, cur_edit, disable
  | Reset -> init_model
  | Edit i -> cur_val, i, false
  | Set -> cur_edit, cur_edit, disable
  | Disable d -> cur_val, cur_edit, d

let view_button ?(disabled=false) title msg =
  Tea.Html.(
    button
      [ onClick msg;
        if disabled
          then Vdom.prop "disabled" "disabled" else Vdom.noProp ]

      [text title])

let view (cur_val, cur_edit, disabled) =
  let open Tea.Html in
  let edit input_val =
    try Edit (int_of_string input_val) with _ -> Disable true in

  div []
    [ p [] [text (string_of_int cur_val)];
      p [] [view_button "Increment" Increment];
      p [] [view_button "Decrement" Decrement];
      p [] [view_button "Reset" Reset];
      p []
        [input' [onChange edit; cur_edit |> string_of_int |> value] []];

      p [] [view_button ~disabled "Set" Set] ]

let main = Tea.App.beginnerProgram { model = init_model; view; update }
