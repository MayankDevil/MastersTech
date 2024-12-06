/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/script
*/
try
{
	let loginButton = document.getElementById('login_btn')

    loginButton.onclick = () => {

        let username = document.getElementById('username')
        
        let email = document.getElementById('email')

        let password = document.getElementById('password').value


        let activeAccount = {
            "username" : username.value,
            "email" : email.value,
            "password" : password.value
        }
        
        if (password.value == 'open')
        {
            window.open('./app.html','_self',true)
        }
        else
        {
            console.log("_access is denied?")
        }
    }

	document.title = `MayankDevil`
}
catch(error)
{
	console.error(error)
}
