/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/welcome
*/
try
{
	/*
		======================================
		| WELCOME | layout inner child element 
		======================================
	*/
	document.getElementById("welcome").innerHTML = 
	(
		`<div id="lonch">

               <div id="logo">
                    <img src="data/logo.png" alt="M">
               </div>

               <h1> Welcome To Master </h1>

               <strong> The top one percent of the one percent, the ones in control, the ones who play God without permission, and now I'm gonna take them down. All of them. </strong>

               <!-- एक प्रतिशत में से शीर्ष एक प्रतिशत, जो नियंत्रण में हैं, वे जो बिना अनुमति के भगवान की भूमिका निभाते हैं, और अब मैं उन्हें नीचे ले जाऊंगा। उन सभी को। -->

               <a href="#fact" id="explore_btn"> Explore More </a>

          </div>`
	)
}
catch(error)
{
	console.error(` welcome layout : ${error}`)
}