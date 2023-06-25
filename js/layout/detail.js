/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/detail
*/
try
{
	/*
		======================================
		| DETAIL | layout inner child element 
		======================================
	*/
	document.getElementById("detail").innerHTML = 
	(
		`<div id="detail_box">
						
               <h3> -[ Short Tale ]----- </h3>
               
               <p> One upon a time, Some friends study together and they combain work about some projects and study matterial. All are Unempolyeed and passionate. They share you knowledge and idea together or work to approch new things. Time passed and they build your bussiness Team to successful. Today that team called Master Industry.</p>

               <h6> Today - </h6>
               
               <ul>
                    <li> &#10004; Self Employeed. </li>
                    <li> &#10004; Do passion as work. </li>
                    <li> &#10004; Never Stop Learning new things. </li>
                    <li> &#10004; Grow your self and bussiness. </li>
                    <li> &#10004; Earn Respect, Name, Money at society. </li>
               </u>
               
          </div>
          
          <div>
               <img src="data/us.jpg" alt="TEC" id="tec">
          </div>`
	)
}
catch(error)
{
	console.error(` detail layout : ${error}`)
}