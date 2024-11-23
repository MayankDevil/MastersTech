/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/service_section
*/
try
{
	/*
		============================================
		| SERVICE PAGE | all service box layout 
		============================================
	*/
     
     let service_section = document.getElementById('service_page').firstElementChild
	
     /*
          -----------------------------------------------------
          } SERVICE BOX : layout return service box structure {
          -----------------------------------------------------
     */ 
     function service_card(data,index)
     {
          return (
               `<!-- ${index} -->
               <div class="service_card">
     
                    <div class="srv_icon">
                         ${data[index].icon}
                    </div>
     
                    <div class="serve_title"> ${data[index].name} </div>
                    
                    <p> ${data[index].blog} </p>
                    
               </div>`
          )
     }
     /*
		------------------------------------------------------
		| price box : function return structure of price_card
		------------------------------------------------------
	*/ 
	function price_card(data,index)
	{
		return (
			`<!-- ${index} -->
			<a href="${data[index].url}" class="price_card">
				
				<div class="title"> ${data[index].title} </div>
				
				<div class="amount">
					${data[index].charge} <sub>${data[index].time}</sub>
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
          ---------------------------------------------------------
          | for loop : call service box and service data and index
          ---------------------------------------------------------
     */ 
     for (let i = 0; i < serviceData.length; i++)
     {
          service_section.insertAdjacentHTML("beforeend",service_card(serviceData,i));
     }

     let service = document.getElementsByClassName('service_card')

     for (let i = 0; i < service.length; i++)
     {
          service[i].onclick = function()
          {
               service_section.innerHTML = null

               for (let index = 0; index < serviceData[i].price.length; index++)
               {
                    service_section.insertAdjacentHTML("beforeend",price_card(serviceData[i].price,index));
               }
               service_section.classList.add('price_container')
          }
     }


     service_card.innerHTML = "done"


}
catch(error)
{
	console.error(` service layout : ${error}`)
}