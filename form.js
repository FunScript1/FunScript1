function emailSend(){

	var userName = document.getElementById('name').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;

	var messageBody = "Name " + userName +
	"<br/> Phone " + phone +
	"<br/> Email " + email;
	Email.send({
    Host : "smtp.gmail.com",
    Username : "shainese",
    Password : "wkpm xocd gkqi jlyn",
    To : 'oriefrat90@gmail.com',
    From : "oriefrat90@gmail.com",
    Subject : "Shainese",
    Body : "messageBody"
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}