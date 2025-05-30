//// [tests/cases/compiler/generativeRecursionWithTypeOf.ts] ////

//// [generativeRecursionWithTypeOf.ts]
class C<T> {
    static foo(x: number) { }
    type: T;
}

module M {
    export function f(x: typeof C) {   
        return new x<typeof x>();     
    }
}

//// [generativeRecursionWithTypeOf.js]
class C {
    static foo(x) { }
    type;
}
var M;
(function (M) {
    function f(x) {
        return new x();
    }
    M.f = f;
})(M || (M = {}));
