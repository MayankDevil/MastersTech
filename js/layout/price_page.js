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
	document.getElementById("price_page").innerHTML = 
	(
		`<!-- 1 -->
		<a href="#" class="price_box basic">

			<div class="title"> Basic </div>

			<div class="amount">
				$10 <sub>per / month</sub>
			</div>

			<ol class="option">
				<li> <div class="check"> &#10004; </div> Repdevelope and stand web. </li>
				<li> <div class="check"> &#10004; </div> Full project stablise. </li>
				<li> <div class="check"> &#10004; </div> Lorem, ipsum dolor. </li>
				<li> <div class="check"> &#10004; </div> Lorem ipsum dolor sit amet. </li>
				<li> <div class="check"> &#10004; </div> Develope full web or software. </li>
			</ol>

		</a>
		<!-- 2 -->
		<a href="#" class="price_box Business">
			
			<div class="title"> Business </div>

			<div class="amount">
				$100 <sub>per / month</sub>
			</div>
			
			<ol class="option">
				<li> <div class="check"> &#10004; </div> Repdevelope and stand web. </li>
				<li> <div class="check"> &#10004; </div> Full project stablise. </li>
				<li> <div class="check"> &#10004; </div> Lorem, ipsum dolor. </li>
				<li> <div class="check"> &#10004; </div> Lorem ipsum dolor sit amet. </li>
				<li> <div class="check"> &#10004; </div> Develope full web or software. </li>
			</ol>
			
		</a>
		<!-- 3 -->
		<a href="#" class="price_box standered">
			
			<div class="title"> Standered </div>
			
			<div class="amount">
				$50 <sub>per / month</sub>
			</div>

			<ol class="option">
				<li> <div class="check"> &#10004; </div> Repdevelope and stand web. </li>
				<li> <div class="check"> &#10004; </div> Full project stablise. </li>
				<li> <div class="check"> &#10004; </div> Lorem, ipsum dolor. </li>
				<li> <div class="check"> &#10004; </div> Lorem ipsum dolor sit amet. </li>
				<li> <div class="check"> &#10004; </div> Develope full web or software. </li>
			</ol>

		</a>`
	)
}
catch(error)
{
	console.error(` price_page layout : ${error}`)
}