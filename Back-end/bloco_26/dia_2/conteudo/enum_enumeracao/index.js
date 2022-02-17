"use strict";
var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["segunda"] = 1] = "segunda";
    daysOfWeek[daysOfWeek["ter\u00E7a"] = 2] = "ter\u00E7a";
    daysOfWeek[daysOfWeek["quarta"] = 3] = "quarta";
    daysOfWeek[daysOfWeek["quinta"] = 4] = "quinta";
    daysOfWeek[daysOfWeek["sexta"] = 5] = "sexta";
    daysOfWeek[daysOfWeek["sabado"] = 6] = "sabado";
    daysOfWeek[daysOfWeek["domingo"] = 7] = "domingo";
})(daysOfWeek || (daysOfWeek = {}));
;
var rainbow_colors;
(function (rainbow_colors) {
    rainbow_colors[rainbow_colors["cor1"] = 0] = "cor1";
    rainbow_colors[rainbow_colors["cor2"] = 1] = "cor2";
    rainbow_colors[rainbow_colors["cor3"] = 2] = "cor3";
    rainbow_colors[rainbow_colors["cor4"] = 3] = "cor4";
    rainbow_colors[rainbow_colors["cor5"] = 4] = "cor5";
    rainbow_colors[rainbow_colors["cor6"] = 5] = "cor6";
    rainbow_colors[rainbow_colors["cor7"] = 6] = "cor7";
})(rainbow_colors || (rainbow_colors = {}));
var actions;
(function (actions) {
    actions[actions["salvar"] = 0] = "salvar";
    actions[actions["imprimir"] = 1] = "imprimir";
    actions[actions["abrir"] = 2] = "abrir";
    actions[actions["visualizar"] = 3] = "visualizar";
    actions[actions["fechar"] = 4] = "fechar";
})(actions || (actions = {}));
var cardeal_points;
(function (cardeal_points) {
    cardeal_points["Norte"] = "N";
    cardeal_points["Leste"] = "L";
    cardeal_points["Sul"] = "S";
    cardeal_points["Oeste"] = "O";
})(cardeal_points || (cardeal_points = {}));
