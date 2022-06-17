const btn = document.querySelector ("#submit")
const infoName = document.querySelector ("#name")
const infoDay = document.querySelector ("#day")
const infoMonth = document.querySelector ("#month")
const infoYear = document.querySelector ("#year")
const infoGender = document.querySelector ("#gender")

btn.addEventListener("click", function() {
    const infoWeight = parseFloat(document.getElementById ('weight').value.replace(',','.'))
    const infoHeight = parseInt(document.getElementById ('height').value.replace(',','.'))

    // Manipulating date
    const day = infoDay.value;
    const month = infoMonth.value;
    const year = infoYear.value;
    let date = `${month}/${day}/${year}`
    let bDate = new Date (date)
    let currentDate = Date.now()
    const CurrentDate = new Date ()
    const dayc = String(CurrentDate.getDate()).padStart(2,'0')
    const monthc = String(CurrentDate.getMonth() + 1).padStart(2,'0')
    const yearc = CurrentDate.getFullYear()
    const currentdate= `${monthc}/${dayc}/${yearc}`
    let cDate = new Date (currentdate)

    try {
        if ((bDate > cDate) || (day>31 || day<1) || (month > 12 || month<1) || year<1904) throw 'Invalid date'
        alert ('Submited with sucessefully')
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

})