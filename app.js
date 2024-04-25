AOS.init();

function submitForm(event) {
    //Preventing page refresh
    event.preventDefault();
}


var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    var dateOfBirth = new Date(document.getElementById("dOB").value);
    var msDiff = new Date().getTime() - dateOfBirth.getTime();

    var days = Math.ceil(msDiff / (1000 * 60 * 60 * 24));

    var months = Math.floor(msDiff / 2629746000);

    var years = Math.floor(msDiff / 31556952000);

    var theDay = dateOfBirth.getDate();

    document.getElementById("demo").innerHTML = "You are " + days + " days, " + months + " months & " + years + " years old.";
})