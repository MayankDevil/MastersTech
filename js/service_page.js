/*
-	website-4 "Master"
-	CopyRight by Master Mayank
-	Design & Developed by Mayank
-	JavaScript : js/layout/service_page
*/
try
{
	/*
		============================================
		| SERVICE PAGE | all service box layout 
		============================================
	*/
	let service_page = document.getElementById("service_page");
	/*
          -----------------------------------------------------
          } SERVICE BOX : layout return service box structure {
          -----------------------------------------------------
     */ 
     function service_box(Data,index)
     {
          return (
               `<!-- ${index} -->
               <a href="#price_page" class="service_box">
     
                    <div class="srv_icon">
                         ${Data[index].icon}
                    </div>
     
                    <div class="serve_title"> ${Data[index].name} </div>
                    
                    <p> ${Data[index].blog} </p>
                    
               </a>`
          )
     }
     /*
          ---------------------------------------------------------
          | for loop : call service box and service data and index
          ---------------------------------------------------------
     */ 
     for (let i = 0; i < service_Data.length; i++)
          service_page.insertAdjacentHTML("beforeend",service_box(service_Data,i));
}
catch(error)
{
	console.error(` service layout : ${error}`)
}