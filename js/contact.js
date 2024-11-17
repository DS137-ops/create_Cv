function SendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "Hussein Alkattash",
        Password :"",
        To : 'bsmahasan66@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(  message => alert(message)
    );
}
