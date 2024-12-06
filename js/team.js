/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/team
*/
try
{
	/*
		===============================================================
		| MENU OPERATION |
		===============================================================
	*/
	let team_page = document.querySelector("#team_page > .container");
     
     /*
          -------------------------------------------------------------------------
          } TEAM MEMBER FUNCTION : get args team_Data and return team_member frame
          -------------------------------------------------------------------------
     */
     function team_member(data,index)
     {
          return (
               `<div class="team_member">
                    <img src="data/team/${data[index].image}" alt="hritik" class="member">
                    <div class="member_detail">
                    <b> ${data[index].name} </b>
                    <p>${(data[index].qoute == null)? "wait i am thinking!" : data[index].qoute}</p>
                    </div>
                    <a href="${data[index].portfolio}" class="profile_btn">  <span class="bi-globe-asia-australia"></span> Portfolio </a>
               </div>`
          )
     }

     /*
          team Data loop --------------
     */ 
     for (let i = 0; i < team_Data.length; i++)
          team_page.insertAdjacentHTML("afterbegin",team_member(team_Data,i));

     /*
          join us ---------------------
     */ 

     team_page.insertAdjacentHTML("beforeend",`
               <a href="#footer" class="team_member" id="join">

                    <div class="bi-person-fill-add"></div>

                    <div class="border"></div>
                    
                    <div class="center"> <h5>Join us</h5> </div>
                    
                    <p class="center">  let start the journey today by make once of us </p>
                         
               </a>
          `);
     
     
     // team_Data.forEach(index =>  team_page.insertAdjacentHTML("beforebegin",team_member(team_Data,i)));
     
     /*
          ===============================================================
     */ 
}
catch(error)
{
	alert(console.error(error));
}