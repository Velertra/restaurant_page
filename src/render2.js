
class Rendertwo {
    bodyDiv() {
        let bodyContainer = document.createElement("div");
        bodyContainer.classList.add("body_div");
        bodyContainer.setAttribute('id', 'body_div');               //creates container for img, discription, and headline div
      //  let trailDiv = document.querySelector("#body_div");
        content.appendChild(bodyContainer);
    }

    headline() {
        let topDiv = document.createElement('div');
        topDiv.classList.add("topDiv")
        topDiv.setAttribute('id', "topDiv")             
        topDiv.innerHTML = "consectetur";
        body_div.appendChild(topDiv); 
        //console.log('whodatdar')
        
    }          
    centerImg() {
        let mainPic = document.createElement("img");                    //three divs built for main page
        mainPic.classList.add("main_pic")
        body_div.appendChild(mainPic);
        mainPic.src = "https://picsum.photos/800/801";
        //console.log('gotem')
    } 
    discribeDiv() {
        let disDiv = document.createElement('div');
        disDiv.classList.add("discription");
        disDiv.setAttribute('id', 'discription');
        disDiv.innerHTML = "lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll"
        body_div.appendChild(disDiv);

    }
    trial(parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild)             //removes divs from "parent" div
        }
      };
      allTheDivs() {
        //this.contentClass();
        let contentLength = document.getElementsByClassName("body_div");

        if(contentLength.length > 0){
            let trailDiv = document.querySelector("#body_div");
                this.trial(trailDiv);                           //states if pages is empty fill it,
                this.headline();                                //if not, removes divs, then fill
                this.centerImg();
                this.discribeDiv(); 

         } else {
                
                this.bodyDiv();
                this.headline();
                this.centerImg();
                this.discribeDiv();
            }; 
            }
};


export let renderTwo = new Rendertwo()