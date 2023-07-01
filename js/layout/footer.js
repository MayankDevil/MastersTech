/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/footer
*/
try
{
	/*
		======================================
		| FOOTER | layout inner child element 
		======================================
	*/
	document.getElementById("footer").innerHTML = 
	(
		`<!-- newletter -->
          <div id="newsletter">
               <!-- left frame -->
               <div class="left">

                    <h4> Our NewsLetter </h4>

                    <div class="em"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.Veritatis blanditiis quas architecto atque voluptatibus cumque. </div>

               </div>
               <!-- right frame -->
               <div class="right">
                    
                    <form action="#">
                         <input type="email" name="email" id="email_fld" placeholder="Your Email Address">
                         <input type="submit" value="Subscribe" id="email_btn">
                    </form>
               
               </div>

          </div>
          <!-- base links -->
          <div id="baselink">
               <!-- information -->
               <div class="link_box">

                    <h5> Information </h5>

                    <div class="links">

                         <a href="#"> <span class="ent1"> &#10097; </span> Experiantion </a>

                         <a href="#"> <span class="ent1"> &#10097; </span> About </a>

                         <a href="#"> <span class="ent1"> &#10097; </span> Service </a>
                         
                         <a href="#"> <span class="ent1"> &#10097; </span> Terms </a>

                         <a href="#"> <span class="ent1"> &#10097; </span> Policy </a>

                         <a href="#"> <span class="ent1"> &#10097; </span> Privacy </a>

                    </div>

               </div>
               <!-- service -->
               <div class="link_box">

                    <h5> Our Services </h5>

                    <div class="links">

                         <a href="#"> <span class="ent1"> &#10097; </span> Web Development </a>

                         <a href="#"> <span class="ent1"> &#10097; </span> Database Management </a>

                         <a href="#"> <span class="ent1"> &#10097; </span> Software Developement </a>
                         
                         <a href="#"> <span class="ent1"> &#10097; </span> Web Server </a>

                         <a href="#"> <span class="ent1"> &#10097; </span> Web Hosting </a>

                         <a href="#"> <span class="ent1"> &#10097; </span> Software Security </a>

                    </div>

               </div>
               <!-- contact -->
               <div class="link_box">

                    <h5> Contact Us </h5>

                    <div class="links">

                         <span class="ent1"> Location </span>

                         <a href="#"> #420 Sector-13, Chandigarh pincode 160102 at India  </a>

                         <span class="ent1"> Number </span>

                         <a href="tel:+9211420420"> 9211420420 </a>

                         <span class="ent1"> Email </span>
                         
                         <a href="mailto:fack@gmailcom"> fack@gmailcom </a>

                    </div>

               </div>
               <!-- company -->
               <div class="link_box">

                    <h5> About Company </h5>

                    <div class="links">

                         <div class="em"> Since 2021 stand Indian private cyber company &nbsp; MASTER &nbsp; founded by Mayank and other team member. </div>

                         <!-- social media -->
                         <div class="social">

                              <a href="#" class="media">
                                   <span class="fa brands fa-github" ></span>
                              </a>

                              <a href="#" class="media">
                                   <span class="fa brands fa-linkedin" ></span>
                              </a>
                              
                              <a href="#" class="media">
                                   <span class="fa brands fa-telegram" ></span>
                              </a>

                              <a href="#" class="media">
                                   <span class="fa brands fa-youtube" ></span>
                              </a>
                              <!--
                              <a href="#" class="media">
                                   <span class="fa brands fa-instagram" ></span>
                              </a>
                              -->
                         </div>

                    </div>

               </div>
          </div>
          <!-- copyright -->
          <div id="copy_right">
          
               <div class="copy"> <a href="#"> MASTER </a>  &copy; All Right Reserved &nbsp; | </div>
               <div class="right"> &nbsp; Developed by <a href="https://mastermayank.w3spaces.com"> Mayank </a> </div>

          </div>`
	)
}
catch(error)
{
	console.error(` footer layout : ${error}`)
}