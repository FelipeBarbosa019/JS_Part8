const btn = document.querySelector ("#submit")
const json = document.querySelector ("#json-ans")
let ok = 0

btn.addEventListener("click", function() {
    // Declaring constants
    const infoName = document.querySelector ("#name")
    const infoDay = document.querySelector ("#day")
    const infoMonth = document.querySelector ("#month")
    const infoYear = document.querySelector ("#year")
    const infoGender = document.querySelector ("#gender")

    // Manipulating date
    const day = infoDay.value;
    const month = infoMonth.value;
    const year = infoYear.value;
    let date = `${month}/${day}/${year}`
    let datebr = `${day}/${month}/${year}`
    let bDate = new Date (date)
    let currentDate = Date.now()
    const CurrentDate = new Date ()
    const dayc = String(CurrentDate.getDate()).padStart(2,'0')
    const monthc = String(CurrentDate.getMonth() + 1).padStart(2,'0')
    const yearc = CurrentDate.getFullYear()
    const currentdate= `${monthc}/${dayc}/${yearc}`
    let cDate = new Date (currentdate)

    // Accepting "," in the weight field
    const infoWeight = parseFloat(document.getElementById ('weight').value.replace(',','.'))
    const infoHeight = parseFloat(document.getElementById ('height').value.replace(',','.'))

    // Demanding integer in the height field
    let checkInt = Number.isInteger(infoHeight)

    try {
        if (infoName == "" || infoName.value.length < 5) throw 'Field “name” is invalid!'
        if ((bDate > cDate) || (day>31 || day<1) || (month > 12 || month<1) || year<1904) throw 'Field “birthDate” is invalid!'
        if (isNaN(infoWeight)) throw 'Field “weight” is invalid!'
        if (isNaN(infoHeight) || (checkInt == false)) throw 'Field “height” is invalid!'
        if (gender.value == "Select") throw 'Field “gender” is invalid!'
        ok = 1;
    } catch (error) {
        alert(error)
    }

    let user = {
        name: infoName.value,
        birthDate: bDate,
        weight: infoWeight,
        height: infoHeight,
        gender: infoGender.value
    }

    if (ok=="1") {
        document.querySelector("#ans1").textContent=`Name: ${user.name}`
        document.querySelector("#ans2").textContent=`Birth date: ${datebr}`
        document.querySelector("#ans3").textContent=`Weight: ${user.weight}`
        document.querySelector("#ans4").textContent=`Height: ${user.height}`
        document.querySelector("#ans5").textContent=`Gender: ${user.gender}`
        console.log (user)
        json.textContent=JSON.stringify(user);
    }
})