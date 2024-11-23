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

        document.getElementById('username')
        
        document.getElementById('email')
        
        if (document.getElementById('password').value == 'open')
        {
            window.open('./app.html','_self',true)
        }
        else
        {
            
        }
    }

	document.title = `MayankDevil`
}
catch(error)
{
	console.error(error)
}
