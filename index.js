function generatePassword(){
    var items = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz","01234567899876543210739182","[]:|\/*-+.!@#$%^&*()?{}{}_"];
    var lengthOfPassword = document.getElementById("length").value;
    var password = "";

    for(var i=0;i<lengthOfPassword;i++){
        var outer = Math.floor(Math.random()*4);
        var inner = Math.floor(Math.random()*26);

        password = password + items[outer].charAt(inner);
    }
    
    document.getElementById("showPassword").value=password;
}