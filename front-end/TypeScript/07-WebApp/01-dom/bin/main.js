var app;
(function (app) {
    class Greeter {
        constructor(greeting) {
            this.greeting = greeting;
        }
        greet() {
            console.log(this.greeting);
            if (this.greeting.trim().length > 0) {
                document.getElementById("greetElement").innerText = this.greeting;
                document.getElementById("error").innerText = "";
            }
            else {
                document.getElementById("error").innerText = "You can not leave it blank...";
            }
        }
    }
    app.Greeter = Greeter;
})(app || (app = {}));
document.addEventListener("DOMContentLoaded", () => {
    var btn = document.getElementById("btnGreet");
    btn.addEventListener("click", () => {
        var name = document.getElementById("txtName").value;
        var greeter = new app.Greeter(name);
        greeter.greet();
    });
});
