/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/faq
*/
try
{
	/*
		======================================
		| F.A.Q | layout inner child element 
		======================================
	*/
	document.getElementById("faq").innerHTML = 
	(
		`<!-- title -->
          <div class="center">
               <h3> __ F.A.Q __ </h3>
          </div>
          <!-- detail -->
          <div>
               <!-- question 1 -->
               <details>
                    <summary> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ex? </summary>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eligendi vero et perspiciatis unde minima dicta ducimus numquam suscipit similique. </p>
               </details>
               <!-- question 2 -->
               <details>
                    <summary> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ex? </summary>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eligendi vero et perspiciatis unde minima dicta ducimus numquam suscipit similique. </p>
               </details>
               <!-- question 3 -->
               <details>
                    <summary> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ex? </summary>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eligendi vero et perspiciatis unde minima dicta ducimus numquam suscipit similique. </p>
               </details>
               <!-- question 4 -->
               <details>
                    <summary> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, ex? </summary>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eligendi vero et perspiciatis unde minima dicta ducimus numquam suscipit similique. </p>
               </details>

          </div>`
	)
}
catch(error)
{
	console.error(` faq layout : ${error}`)
}