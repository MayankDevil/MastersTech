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
			<div href="${data[index].url}" class="price_card">
				
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

			</div>`
		)
	}

     /*
		------------------------------------------------------
		| policy section : function return structure of price_card
		------------------------------------------------------
	*/ 

     function policy_section()
     {
          return (` <!-- policy -->
               <div class="lead">
                    <h3> Terms & Policy </h3>
               </div>
               
               <p> Lorem ipsum dolor, sit amet <a href="#"> Team </a> consectetur adipisicing elit. Quos voluptate
                    fugiat blanditiis quam autem nobis, cumque dolores dolorum rem, repudiandae deleniti ipsa maxime. <a
                    href="#"> Service </a> Nisi obcaecati, possimus, itaque laboriosam eum quisquam omnis impedit
                    mollitia illo, minima dolores voluptates error. Voluptatum quod reprehenderit earum, aspernatur
                    expedita animi facere sequi odit! Asperiores, eligendi? </p>
               
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, optio veniam nisi cupiditate rerum
                    iure dicta, nam aut sint quas, similique excepturi. <a href="#"> Fact </a> Quia nemo incidunt
                    deserunt dolores. Eos, ad necessitatibus! </p>
                    
               <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit explicabo aspernatur
                    distinctio rerum odio vitae ipsa ratione perferendis harum earum fugiat repudiandae minus qui,
                    consequatur velit. Aperiam assumenda sequi qui. </p>
                         
               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eaque veniam quaerat harum quidem
                    distinctio, quae rerum maxime animi, quod magni? Dicta unde labore natus deserunt et aliquam amet
                    voluptatum harum magni optio, repudiandae placeat, dignissimos sapiente velit adipisci? Temporibus.
               </p>
               
               <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet facilis dolore hic repellat incidunt,
                    quidem corporis magni odio, sunt rem eius quod soluta eum sit odit cum praesentium ut nobis, <a
                    href="#"> Contact </a> ducimus maiores voluptatem nostrum modi dolores repudiandae? Voluptatem,
                    eos quia! </p>
                                   
               <h6> Do You Aagree this Term & Policy </h6>
               
               <div class="btn_grp">
                    
                    <button class="btn" id="agreed"> Yes </button>
                    
                    <button class="btn" id="disagreed"> No </button>
                    
               </div>`
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

               let priceElement = document.getElementsByClassName('price_card')
               
               for (let bond = 0; bond < priceElement.length; bond++)
               {
                    priceElement[bond].onclick = function()
                    {
                         service_section.innerHTML = policy_section()

                         service_section.classList.add('policySection')
                         
                         document.getElementById("agreed").onclick = () => {

                              window.location.href = "https://mayankdevil.github.io/myData/bug"
                         }
                         document.getElementById("disagreed").onclick = () => {

                              window.location.reload()
                         }
                    }
               }
          }
     }
}
catch(error)
{
	console.error(` service layout : ${error}`)
}