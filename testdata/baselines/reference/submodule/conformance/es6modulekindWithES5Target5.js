//// [tests/cases/conformance/externalModules/es6/es6modulekindWithES5Target5.ts] ////

//// [es6modulekindWithES5Target5.ts]
export enum E1 {
    value1
}

export const enum E2 {
    value1
}

//// [es6modulekindWithES5Target5.js]
export { E1 };
var E1;
(function (E1) {
    E1[E1["value1"] = 0] = "value1";
})(E1 || (E1 = {}));
export { E2 };
var E2;
(function (E2) {
    E2[E2["value1"] = 0] = "value1";
})(E2 || (E2 = {}));
