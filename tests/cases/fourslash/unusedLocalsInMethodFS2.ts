/// <reference path='fourslash.ts' />

// @noUnusedLocals: true
// @noUnusedParameters: true
////class greeter {
////    public function1() {
////        [| var x, y; |]
////        y = 1;
////    }
////}

verify.codeFixAtPosition("var  y;");