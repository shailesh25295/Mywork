
//create Dyanamic div
var div1=$("<div/>",{class:"inputArea"});
div1.appendTo("body");


var inputbox=$("<input/>",{type:"text",id:"result"});
inputbox.appendTo(".inputArea");



var div2=$("<div/>",{class:"buttonArea"});
div2.insertAfter(".inputArea");


var div3=$("<div/>",{class:"row1"});
div3.insertAfter(".buttonArea");


var div4=$("<div/>",{class:"row2"});
div4.insertAfter(".row1");


//create Dyanamic Buttons
for(var i=0;i<10;i++){
    if(i==0 || i==1 || i==2|| i==3 ||i==4){
        var btn=$("<button/>",{text:i,class:"btn btnNumber btn"+i});
        btn.appendTo(".buttonArea");    
    }else if(i==5 || i==6 || i==7 || i==8 || i==9){
        var btn1=$("<button/>",{text:i,class:"btn btnNumber btn"+i});
        btn1.appendTo(".row1");    
    }
}

//create Buttons of opeartion
var btnAdd=$("<button/>",{text:"+",class:"btnAdd btn btnOperations"});
btnAdd.appendTo(".row2");


var btnSub=$("<button/>",{text:"-",class:"btnSub btn btnOperations"});
btnSub.appendTo(".row2");

var btnMul=$("<button/>",{text:"*",class:"btnMulti btn btnOperations"});
btnMul.appendTo(".row2");

var btnDiv=$("<button/>",{text:"/",class:"btnDiv btn btnOperations"});
btnDiv.appendTo(".row2");

var btnEqual=$("<button/>",{text:"=",class:"btnEquals btn btnOperations"});
btnEqual.appendTo(".row2");



//Main code
var result = document.getElementById("result");

var currentNum = 0;
var prevNumber = 0;

var wasPlusBtnPressed = false, wasSubstractBtnPressed = false;
var wasMultiBtnPressed = false,wasDivisionBtnPressed = false;
var operation = "";




$(".btnNumber").click(function () {
    var value = $(this).text();
    var resultValue = $("#result").val();
    $("#result").val(resultValue + value);
    currentNum = parseInt($("#result").val());
})



$(".btnAdd").click(function(){
    operation="+"
    if(wasPlusBtnPressed===true)
    {
    
        $(result).val(prevNumber + currentNum);
        currentNum=$(result).val();
        wasPlusBtnPressed=false;
    }else{
    
        prevNumber=currentNum;
        currentNum=0;
        $(result).val("");
        wasPlusBtnPressed=true;
    }
    });
    

    $(".btnSub").click(function(){
        operation="-";
        if(wasSubstractBtnPressed===true)
        {
        
            $(result).val(prevNumber - currentNum);
            currentNum=$(result).val();
            wasSubstractBtnPressed=false;
        }else{
        
            prevNumber=currentNum;
            currentNum=0;
            $(result).val("");
            wasSubstractBtnPressed=true;
        }
        });


        $(".btnMulti").click(function () {
            operation = "*";
            if (wasMultiBtnPressed === true) {
                // add the numbers
                $(result).val(prevNumber * currentNum);
                currentNum = $(result).val();
                wasMultiBtnPressed = false;
            } else {
                // save the current number to previous number
                prevNumber = currentNum;
                currentNum = 0;
                $(result).val("");
                //result.value = "";
                wasMultiBtnPressed = true;
            }
        });


        $(".btnDiv").click(function () {
            operation = "/";
            if (wasDivisionBtnPressed === true) {
                // add the numbers
                $(result).val(prevNumber / currentNum);
                currentNum = $(result).val();
                wasDivisionBtnPressed = false;
            } else {
                // save the current number to previous number
                prevNumber = currentNum;
                currentNum = 0;
                $(result).val("");
                //result.value = "";
                wasDivisionBtnPressed = true;
            }
        });



    var equalsBtn = document.getElementsByClassName("btnEquals")[0];
    equalsBtn.addEventListener("click", function () {

    if (operation == "+") {
        result.value = prevNumber + currentNum;
    } else if (operation == "-") {
        result.value = prevNumber - currentNum;
    } else if (operation == "*") {
        result.value = prevNumber * currentNum;
    }else if (operation == "/") {
        result.value = prevNumber / currentNum;
    }

    currentNum = result.value;
    wasPlusBtnPressed = false;
    wasSubstractBtnPressed = false;
    wasMultiBtnPressed = false;
    wasDivisionBtnPressed=false;

});

