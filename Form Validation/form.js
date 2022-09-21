let validation= () => {
    let name = document.getElementById('Name').value
    if (name ==""){
        document.getElementById('Message').innerHTML ="Oggy Please Enter Name "

    }

else
if (name.length < 4 ){
    document.getElementById('Message').innerHTML="Name Must Be 6 character"
}
return false

}
