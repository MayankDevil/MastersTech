/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/fact
*/
try
{
	/*
		======================================
		| fact | layout inner child element 
		======================================
	*/
	document.getElementById("fact").innerHTML = 
	(
		`<!-- Project -->
          <div class="fact_box">
               
               <div class="count_number"> 201 </div>
               
               <div class="fact_fa">
                    <span class="fa solid fa-folder"></span>
               </div>
               
               <h6> Success Project </h6>
               
          </div>
          <!-- client -->
          <div class="fact_box">
               
               <div class="count_number"> 132 </div>
               
               <div class="fact_fa">
                    <span class="fa solid fa-smile"></span>
               </div>
               
               <h6> Happy Client </h6>
               
          </div>
          <!-- Team -->
          <div class="fact_box">
               
               <div class="count_number"> 6 </div>
               
               <div class="fact_fa">
                    <span class="fa solid fa-user"></span>
               </div>

               <h6> Passionate Team </h6>

          </div>
          <!-- hour -->
          <div class="fact_box">
               
               <div class="count_number"> 2 </div>
               
               <div class="fact_fa">
                    <span class="fa solid fa-headset"></span>
               </div>

               <h6> Hour of Support </h6>

          </div>`
	)
}
catch(error)
{
	console.error(` fact layout : ${error}`)
}