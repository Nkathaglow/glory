function grades(event) {
    event.preventDefault()
    const gradeElm =document
    const score = parseInt(document.getElementById('grades').value)
if (score >79 && score <=100) {
    const gradeElm.innerhtml="A"
    return "A"
}

else if (score >= 60 &&  score < 80) {
    const gradeElm.innerhtml="B"
    return "B"
}
else if (score >= 49 && score ) {
    const gradeElm.innerhtml="C"
    return "C"
}
else if (score >=40 && score < 50) {
    const gradeElm.innerhtml="D"
    return "D"
}
else if (score < 40 && score <= 0) {
    const gradeElm.innerhtml="E"
    return "E"
}
}