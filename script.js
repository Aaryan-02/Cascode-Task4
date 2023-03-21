function getBMIvalue(){
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;

    height = height * 12;       // ft to inches
    height = height * 0.025;    // inches to meters
    
    var newbmivalue = weight / (height * height);
    newbmivalue = Math.round(newbmivalue);

    document.getElementById('bmi-value').value = newbmivalue;   
}