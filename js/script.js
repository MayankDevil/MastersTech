/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/script
*/
try
{
	// window.onload = () => {
	/*
		------------------
		| MENU OPERATION |
		------------------
	*/
	let menu_btn = document.getElementById("menu_btn");

	// let nav = document.getElementById("nav");

	let nav_link = document.querySelectorAll("#nav > a");

	var n = 0;
	/*
		menu close function
	*/
	function menu_close()
	{
		nav.style.display = "none";
		menu_btn.innerHTML = "&#9776;";
		n = 0;
	}
	/*
		menu open function
	*/
	function menu_open()
	{
		nav.style.display = "grid";
		menu_btn.innerHTML = "X";
		n = 1;
	}
	/*
		menu button function : close & open
	*/ 
	menu_btn.onclick = function()
	{
		if(n != 0)
			menu_close();
		else
			menu_open();
	}
	/*
		nav link close
	*/ 
	for(let i = 0; i < nav_link.length; i++)
		nav_link[i].onclick = () => {
			menu_close();
		}
	/*
		{ menu operaion end } ==========
	*/

	// let goto_btn = document.getElementById("goto_btn");

	// document.body.ondblclick = () => goto_btn.style.zIndex = '0';

	// if(goto_btn.style.zIndex == '0')
	// {
	// 	goto_btn.onclick = () => this.style.zIndex = '-5';
	// }
	// }
}
catch(error)
{
	console.error(error)
}