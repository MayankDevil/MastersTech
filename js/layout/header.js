/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/header
*/
try
{
	/*
		======================================
		| HEADER | layout inner child element 
		======================================
	*/
	document.getElementById("header").innerHTML = 
	(
		`<!-- brand -->
		<div id="brand_name"> MASTER </div>

		<!-- menu button -->
		<div id="menu_btn"> &#9776; </div>

		<!-- navbar -->
		<nav id="nav">

			<a href="index.html"> Home </a>

			<a href="about.html"> About </a>

			<a href="service.html"> Service </a>

			<a href="team.html"> Team </a>

			<a href="project.html"> Projects </a>

			<a href="contact.html"> Contact </a>

		</nav>`
	)
}
catch(error)
{
	console.error(` header layout : ${error}`)
}