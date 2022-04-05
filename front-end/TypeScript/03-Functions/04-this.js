function Book1() {
    var self = this;
    self.publishDate = '15May2016';
    setInterval(function () {
        console.log(self.publishDate);
    }, 2000);
}
function Book2() {
    var _this = this;
    this.publishDate = '15May2016';
    setInterval(function () {
        console.log(_this.publishDate);
    }, 2000);
}
