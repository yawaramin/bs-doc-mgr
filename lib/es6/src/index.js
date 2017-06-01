// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
'use strict';

import * as Tea_app     from "bucklescript-tea/lib/es6/src/tea_app.js";
import * as Tea_html    from "bucklescript-tea/lib/es6/src/tea_html.js";
import * as Pervasives  from "bs-platform/lib/es6/pervasives.js";
import * as Caml_format from "bs-platform/lib/es6/caml_format.js";

var init_model = /* tuple */[
  0,
  0
];

function update(param, param$1) {
  var cur_val = param[0];
  if (typeof param$1 === "number") {
    var cur_edit = param[1];
    switch (param$1) {
      case 0 : 
          return /* tuple */[
                  cur_val + 1 | 0,
                  cur_edit
                ];
      case 1 : 
          return /* tuple */[
                  cur_val - 1 | 0,
                  cur_edit
                ];
      case 2 : 
          return init_model;
      case 3 : 
          return /* tuple */[
                  cur_edit,
                  cur_edit
                ];
      
    }
  } else {
    return /* tuple */[
            cur_val,
            param$1[0]
          ];
  }
}

function view_button(title, msg) {
  return Tea_html.button(/* None */0, /* None */0, /* :: */[
              Tea_html.onClick(msg),
              /* [] */0
            ], /* :: */[
              Tea_html.text(title),
              /* [] */0
            ]);
}

function view(param) {
  var edit = function (input_val) {
    return /* Edit */[Caml_format.caml_int_of_string(input_val)];
  };
  return Tea_html.div(/* None */0, /* None */0, /* [] */0, /* :: */[
              Tea_html.p(/* None */0, /* None */0, /* [] */0, /* :: */[
                    Tea_html.text(Pervasives.string_of_int(param[0])),
                    /* [] */0
                  ]),
              /* :: */[
                Tea_html.p(/* None */0, /* None */0, /* [] */0, /* :: */[
                      view_button("Increment", /* Increment */0),
                      /* [] */0
                    ]),
                /* :: */[
                  Tea_html.p(/* None */0, /* None */0, /* [] */0, /* :: */[
                        view_button("Decrement", /* Decrement */1),
                        /* [] */0
                      ]),
                  /* :: */[
                    Tea_html.p(/* None */0, /* None */0, /* [] */0, /* :: */[
                          view_button("Reset", /* Reset */2),
                          /* [] */0
                        ]),
                    /* :: */[
                      Tea_html.p(/* None */0, /* None */0, /* [] */0, /* :: */[
                            Tea_html.input$prime(/* None */0, /* None */0, /* :: */[
                                  Tea_html.onInput(/* None */0, edit),
                                  /* [] */0
                                ], /* :: */[
                                  Tea_html.text(Pervasives.string_of_int(param[1])),
                                  /* [] */0
                                ]),
                            /* [] */0
                          ]),
                      /* :: */[
                        Tea_html.p(/* None */0, /* None */0, /* [] */0, /* :: */[
                              view_button("Set", /* Set */3),
                              /* [] */0
                            ]),
                        /* [] */0
                      ]
                    ]
                  ]
                ]
              ]
            ]);
}

var partial_arg = /* record */[
  /* model */init_model,
  /* update */update,
  /* view */view
];

function main(param, param$1) {
  return Tea_app.beginnerProgram(partial_arg, param, param$1);
}

export {
  init_model  ,
  update      ,
  view_button ,
  view        ,
  main        ,
  
}
/* No side effect */