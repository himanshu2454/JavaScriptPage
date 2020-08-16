function btnfunc(){
    //console.log("1");
    var email = document.getElementById("exampleInputEmail1").value;
    var pass = document.getElementById("exampleInputPassword1").value;
    // console.log("2");
    if( email == "rajputshubham@gmail.com" && pass == "asdf"){
        
        window.location.replace("file:///D:/himanshu.chouhan/JavaScript/average.html");
    }
   
}

function avgcal(form){
   let ss = Number(form.s1.value);
   alert(ss);
    // let ss1 = Number(getElementById("s1").value);
    // let ss2 = Number(getElementById("s2").value);
    // let ss3 = Number(getElementById("s3").value)
    // let ss4 = Number(getElementById("s4").value);
    // let ss5 = Number(getElementById("s5").value);

    // let avg = (ss1 + ss2 + ss3 + ss4 + ss5) / 5;
    // alert("average is" + avg );

}