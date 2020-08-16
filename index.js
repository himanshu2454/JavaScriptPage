function btnfunc(){
    //console.log("1");
    let email = document.getElementById("exampleInputEmail1").value;
    let pass = document.getElementById("exampleInputPassword1").value;
    // console.log("2");
    if( email == 'rajputshubham@gmail.com' && pass == 'asdf'){
        //alert("cooming");
        window.open('file:///D:/himanshu.chouhan/JavaScript/average.html', '_blank');
        //window.location = "file:///D:/himanshu.chouhan/JavaScript/average.html";
    }
   
}

function avgcal(form){
  
    let ss1 = Number(document.getElementById("s1").value);
    let ss2 = Number(document.getElementById("s2").value);
    let ss3 = Number(document.getElementById("s3").value)
    let ss4 = Number(document.getElementById("s4").value);
    let ss5 = Number(document.getElementById("s5").value);

    let avg = (ss1 + ss2 + ss3 + ss4 + ss5) / 5;
    alert("average is" + avg );

}

function calsum(){
    //let ss1 = Number()
    window.location = "file:///D:/himanshu.chouhan/JavaScript/average.html";
    //alert("hlllo");
}