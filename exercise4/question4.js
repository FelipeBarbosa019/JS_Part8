let btn = document.querySelector ("#submit")
let ans = document.querySelector ("#answer")

btn.addEventListener("click", function () {
    let jsonFormat = document.querySelector ("#textArea").value
    try {
        let objectFormat = JSON.parse(jsonFormat)
        console.log(objectFormat)
        console.log(typeof objectFormat)
        ans.textContent = "Parsable JSON string!"
        ans.style.color = '#00ff00';
    } catch {
        ans.textContent = "Error, invalid format"
        ans.style.color = '#ff0000';
    }
})