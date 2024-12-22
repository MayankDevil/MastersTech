/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/script
*/
try
{
	console.log(`welcome in society!`)
	/*
		{ menu operaion end } ==========
	*/

	let header = document.getElementById('header')

	document.getElementById('set_btn').onclick = () => header.classList.toggle('activeNav')

	document.getElementById('toggle_btn').onclick = () => header.classList.toggle('activeNav')

	window.onscroll = function()
	{
		if (window.scrollY > 200)
		{
			header.classList.add("header_bg")
		}
		else
		{
			header.classList.remove("header_bg")
		}
	}

	let section = document.querySelectorAll("#wrapper > section")

	/*
		activeSection : between all section active once index
	*/ 
	
	function activeSection(section, active_index)
	{
		section.forEach((element) => {
	
			element.style.display = `none`
		})
		
		section[active_index].style.display = `block`
	}
	
	document.getElementById("mail_btn").onclick = () => {
		
		// activeSection(section, 0)

		window.location.href = "https://mayankdevil.github.io/EvilCorp";
	}
	
	// console.log(`एक प्रतिशत में से शीर्ष एक प्रतिशत, जो नियंत्रण में हैं, वे जो बिना अनुमति के भगवान की भूमिका निभाते हैं, और अब मैं उन्हें नीचे ले जाऊंगा। उन सभी को।`)
	
	document.title = `MayankDevil`
}
catch(error)
{
	console.error(error)
}
