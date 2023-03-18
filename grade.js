//This is to show that if you input a score it should give a grade in return

if (score > 79 && score <= 100) {
    console.log("A");
}//if it fulfills the condition it should give the grade A
else if(score >= 60 && score < 80) {
    console.log("B")
}//if not it does this instead
else if(score >= 49 && score < 60) {
    console.log("C");
}//if it still doesn't it should output this 
else if(score >= 40 && score < 50) {
    console.log("D");
}//it still doesn't this should be done instead
else if (score < 49 && score >= 0){
    console.log("E");
}//if it doesn't it should do this instead

else {
  console.log("Invalid!!, Input correct Marks");
}//if the score is not within the desired range then this shoul be the outputs
