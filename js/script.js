/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/script
*/
try
{
	let header = document.getElementById('header')


	document.getElementById('set_btn').onclick = () => header.classList.toggle('activeNav')

	document.getElementById('toggle_btn').onclick = () => header.classList.toggle('activeNav')


	/*
		{ menu operaion end } ==========
	*/

	let welcome = document.getElementById('welcome')

	let fact = document.getElementById('fact')

	let service = document.getElementById('service_page')

	let vedio = document.getElementById('vedio_page')

	let feature = document.getElementById('feature')

	let price = document.getElementById('price_page')

	let policy = document.getElementById('policy')

	let faq = document.getElementById('faq')

	let contact = document.getElementById('contact_page')

	let detail = document.getElementById('detail')


	let section = document.querySelectorAll("#wrapper > section")
	
	let nav_link = document.querySelectorAll("#nav > a");


	

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
	// activeSection(section, 9)

	function displayBlock(element,index)
	{
		element[index].style.display = 'block'
	}

	// displayBlock(fact, 1)

	

	// console.log(`एक प्रतिशत में से शीर्ष एक प्रतिशत, जो नियंत्रण में हैं, वे जो बिना अनुमति के भगवान की भूमिका निभाते हैं, और अब मैं उन्हें नीचे ले जाऊंगा। उन सभी को।`)
	
	document.title = `MayankDevil`
}
catch(error)
{
	console.error(error)
}
