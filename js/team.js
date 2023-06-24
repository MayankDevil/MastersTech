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
	let team_page = document.getElementById("team_page");
     
     /*
          -------------------------------------------------------------------------
          } TEAM MEMBER FUNCTION : get args team_Data and return team_member frame
          -------------------------------------------------------------------------
     */
     function team_member(team_Data,index)
     {
          return (`<div class="team_member">
                    <img src="data/team/${team_Data[index].image}" alt="hritik" class="member">
                    <div class="member_detail">
                         <h4> ${team_Data[index].name} </h4>
                         <div class="em">${(team_Data[index].qoute == null)? "wait i am thinking!" : team_Data[index].qoute}</div>
                         <a href="${team_Data[index].portfolio}" class="profile_btn">  <span> &#9729; </span> Online ProtFolio </a>
                    </div>
               </div>`)
     }

     /*
          team Data loop --------------
     */ 
     for (let i = 0; i < team_Data.length; i++)
          team_page.insertAdjacentHTML("afterbegin",team_member(team_Data,i));
     
     
     // team_Data.forEach(index =>  team_page.insertAdjacentHTML("beforebegin",team_member(team_Data,i)));
     
     /*
          ===============================================================
     */ 
}
catch(error)
{
	alert(console.error(error));
}