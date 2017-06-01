type msg =
  Increment | Decrement | Reset | Edit of int | Set | Disable of bool

type model = { cur_val : int; cur_edit : int; disabled : bool }

let init_model = { cur_val = 0; cur_edit = 0; disabled = false }

let update model = function
  | Increment -> { model with cur_val = model.cur_val + 1 }
  | Decrement -> { model with cur_val = model.cur_val - 1 }
  | Reset -> init_model
  | Edit i -> { model with cur_edit = i; disabled = false }
  | Set -> { model with cur_val = model.cur_edit }
  | Disable d -> { model with disabled = d }

let view_button ?(disabled=false) title msg =
  Tea.Html.(
    button
      [ onClick msg;
        if disabled
          then Vdom.prop "disabled" "disabled" else Vdom.noProp ]

      [text title])

let view { cur_val; cur_edit; disabled } =
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
