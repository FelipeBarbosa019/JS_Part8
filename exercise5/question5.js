let btn = document.querySelector ("#submit")

btn.addEventListener("click", function () {
    // Using square brackets;
    let object = {};
    object["Um atributo com espaços"] = 1;
    console.log(object);

    // Without using square brackets
    let object2 = {};
    Object.defineProperty (object2, "Um atributo com espaços", {value: 1})
    console.log(object2);
})