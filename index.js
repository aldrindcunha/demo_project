

let data = [];
 document.getElementById("load-news").addEventListener("click", newsFeed)

 
    
    async function newsFeed(){
        let url = "https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news";
        let getFetch = await fetch(url);
       data = await getFetch.json();  
       for(let i = 0; i < data.length; i++){       
      let unorderedList = document.querySelector("#cardId")
        let list = document.createElement('li');
        let container = document.createElement("div");
        container.className = 'para1';
        let author = document.createElement('h4');
        author.innerHTML = `Author By: ${data[i] [' author']}`;
        container.appendChild(author);
        let category = document.createElement('h5');
        category.innerHTML = `Category: ${data[i] [" category"]}`;
        container.appendChild(category);
        list.appendChild(container)        

        let para = document.createElement('p');
        para.className = "card-para";
        para.innerHTML = data[i].content;
        list.appendChild(para);
        let span = document.createElement('span');
        span.className = 'bi bi-heart-fill';
        span.id = 'fill3';
        list.appendChild(span);
        unorderedList.appendChild(list);

       }
    
           
    }

    document.getElementById('load-business').addEventListener('click', loadIndividual);
    document.getElementById('load-all').addEventListener('click', loadIndividual);
    document.getElementById('load-sports').addEventListener('click', loadIndividual);
    document.getElementById('load-world').addEventListener('click', loadIndividual);
    document.getElementById('load-politics').addEventListener('click', loadIndividual);
    document.getElementById('load-hatke').addEventListener('click', loadIndividual);
    document.getElementById('load-science').addEventListener('click', loadIndividual);
   
  
    

       async function loadIndividual(event){
        
        event.preventDefault();
        let indivData = await fetch(`https://content.newtonschool.co/v1/pr/64806cf8b7d605c99eecde47/news?%20category=${event.target.parentElement.id.split("-")[1]}`);
        let finalData = await indivData.json();
        // console.log(finalData); 
        for(let i = 0; i < finalData.length; i++){
          event.preventDefault();
        let ul = document.querySelector("#refCardId");
          let list = document.createElement('li');
          list.id = "List1"
          let container = document.createElement("div");
          container.className = 'para1';
          let author = document.createElement('h4');
          author.innerHTML = `Author By: ${finalData[i][' author']}`;
          container.appendChild(author);
          let category = document.createElement('h5');
          category.innerHTML = `Category: ${finalData[i][" category"]}`;
          container.appendChild(category);
          list.appendChild(container)        
  
          let para = document.createElement('p');
          para.className = "card-para";
          para.innerHTML = finalData[i].content;
          list.appendChild(para);
          let bttn = document.createElement('button');
          bttn.className = 'bi bi-heart-fill';
          bttn.id = 'fill3';
          list.appendChild(bttn);
          let readMore = document.createElement('div');
          readMore.id = 'readmore';
          readMore.innerHTML = `Readmore..`;
          list.appendChild(readMore);          
          ul.appendChild(list);
          

      
        }

        

      }

      let colorChange = document.getElementById('fill3');
          colorChange.addEventListener('click', function(e){
            console.log("red");
          })

      

     

     
       
               
      

      
      

    
    







