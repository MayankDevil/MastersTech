/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/vedio_page
*/
try
{
	/*
		======================================
		| VEDIO PAGE | layout inner child element 
		======================================
	*/
	document.getElementById("vedio_page").innerHTML = 
	(
		`<!-- vedio frame -->
          <div id="vedio_frame">
               <!-- vedio -->
               <a href="#" id="vedio">
                    <!-- vedio pic -->
                    <img src="data/vedio.jpg" alt="">
                    <!-- play button -->
                    <div id="play">
                         <span class="fa solid fa-play"></span>
                    </div>
               </a>
               <!-- why us -->
               <div id="whyus">
                    <!-- reason 1 -->
                    <div class="vedio_detail">
                         <!-- icon -->
                         <div class="fa_vedio">
                              <span class="fa solid fa-pen"></span>
                         </div>
                         <!-- explain -->
                         <div>

                              <h6> Hard & Smart Work </h6>

                              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas illo nulla dolores itaque! Nobis nesciunt maxime molestias architecto saepe. </p>

                         </div>
                    </div>
                    <!-- reason 2 -->
                    <div class="vedio_detail">
                         <!-- icon -->
                         <div class="fa_vedio">
                              <span class="fa solid fa-bookmark"></span> 
                         </div>
                         <!-- explain -->
                         <div>

                              <h6> Passionate About Work </h6>

                              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptas illo nulla dolores itaque! Nobis nesciunt maxime molestias architecto saepe. </p>

                         </div>
                    </div>

               </div>

          </div>`
	)
}
catch(error)
{
	console.error(` vedio_page layout : ${error}`)
}