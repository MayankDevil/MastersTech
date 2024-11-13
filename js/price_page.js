/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/price_page
*/
try
{
	/*
		==========================================
		| PRICE PAGE | layout inner child element 
		==========================================
	*/
	let price_page = document.querySelector("#price_page > .container")

	/*
		------------------------------------------------------
		| price box : function return structure of price_box
		------------------------------------------------------
	*/ 
	function price_box(Data,index)
	{
		return (
			`<!-- ${index} -->
			<a href="${Data[index].url}" class="price_box standered">
				
				<div class="title"> ${Data[index].title} </div>
				
				<div class="amount">
					${Data[index].charge} <sub>${Data[index].time}</sub>
				</div>

				<ol class="option">
					<li> <div class="bi-check2-circle"></div> Repdevelope and stand web. </li>
					<li> <div class="bi-check2-circle"></div> Full project stablise. </li>
					<li> <div class="bi-check2-circle"></div> Lorem, ipsum dolor. </li>
					<li> <div class="bi-check2-circle"></div> Lorem ipsum dolor sit amet. </li>
					<li> <div class="bi-check2-circle"></div> Develope full web or software. </li>
				</ol>

			</a>`
		)
	}
	/*
		--------------------------------------------------------------------------------
		[ for loop ] call price box with pass price data and index or insert in layout
		--------------------------------------------------------------------------------
	*/ 
	for (let i = 0; i < price_Data.length; i++)
        	price_page.insertAdjacentHTML("afterbegin",price_box(price_Data,i));

	// one caches of code incomplete

}
catch(error)
{
	console.error(` price_page layout : ${error}`)
}