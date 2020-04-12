/* when i tried running  the codes, i  recieved  an error of "Uncaught TypeError: cannot read property
'addEventListener' of null, to fix this issue i had to use window.onload, and problem was because my html
file was loading before the javascript,  this way making the  error message to pop up"*/
window.onload = function(){
    //here i  declared my button as "buttons" to make my button at the html part to be linked.
    let buttons = document.getElementById('btn');
    // i added an eventListener to give action to the button, this action is what the button should do when clicked
buttons.addEventListener('click', function(){
    // i linked the values from by input in my  html to  my javascript, declared my weight input as weight and height as height
    let weight = document.getElementById('weight-lab').value;
    let height = document.getElementById('height-lab').value;
    // the unit for BMI is kg/m2 which means, weight  divided by  the height raised to the power of 2
    // to make sure the  value is in meter i multiplied it by 10000(10000 is gotten from 100X100 which is the  conversio of the cm to m
    // i addded tofixed(2) so that the answer  will  be in 2 decimal places.
    let final = (weight / (height * height) * 10000).toFixed(2);
    document.getElementById('bmiresult').value = final;
})
}