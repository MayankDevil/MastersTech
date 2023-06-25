/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/feature
*/
try
{
	/*
		======================================
		| FEATURE | layout inner child element 
		======================================
	*/
	document.getElementById("feature").innerHTML = 
	(
		`<div class="center">
               <h3> __ Feature __ </h3>
          </div>

          <!-- feature 1 -->
          <div class="feature_box">

               <img src="data/feature/1.svg" alt="1" class="feature_img">
               
               <div class="feature_title"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, fugit. </div>
          
          </div>
          <!-- feature 2 -->
          <div class="feature_box">
               
               <div class="feature_title"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, fugit. </div>
          
               <img src="data/feature/2.svg" alt="1" class="feature_img">
          
          </div>
          <!-- feature 3 -->
          <div class="feature_box">
          
               <img src="data/feature/3.svg" alt="1" class="feature_img">
               
               <div class="feature_title"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, fugit. </div>
          
          </div>
          <!-- feature 4 -->
          <div class="feature_box">
               
               <div class="feature_title"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, fugit. </div>
          
               <img src="data/feature/4.svg" alt="1" class="feature_img">
          
          </div>`
	)
}
catch(error)
{
	console.error(` feature layout : ${error}`)
}