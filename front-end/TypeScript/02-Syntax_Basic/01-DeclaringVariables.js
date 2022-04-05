function VarVsLet() {
    if (5 > 3) {
        var v = "older var";
        var l = "newer let";
    }
    console.log(v); // works fine
    //    console.log(l);// error
}
VarVsLet();
