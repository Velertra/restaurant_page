
class Renderthree {
    bodyDiv() {
        let bodyContainer = document.createElement("div");
        bodyContainer.classList.add("body_div");
        bodyContainer.setAttribute('id', 'body_div');
        //let trailDiv = document.querySelector("#body_div");
        content.appendChild(bodyContainer);
    }
    headline() {
        let topDiv = document.createElement('div');
        topDiv.classList.add("topDiv")
        topDiv.setAttribute('id', "topDiv")
        topDiv.innerHTML = "........sit amet.........";
        body_div.appendChild(topDiv); 
        //console.log('whodatdar')
        
    }          
    centerImg() {
        let mainPic = document.createElement("img");                    //three divs built for main page
        mainPic.classList.add("main_pic")
        body_div.appendChild(mainPic);
        mainPic.src = "https://picsum.photos/500/500";
        //console.log('gotem')
    } 
    discribeDiv() {
        let disDiv = document.createElement('div');
        disDiv.classList.add("discription");
        disDiv.setAttribute('id', 'discription');
        disDiv.innerHTML = "oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
        body_div.appendChild(disDiv);

    }
    trial(parent) {
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild)
        }
      };
      allTheDivs() {
        //this.contentClass();
        let contentLength = document.getElementsByClassName("body_div");

        if(contentLength.length > 0){
            let trailDiv = document.querySelector("#body_div");
                this.trial(trailDiv);
                this.headline();
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

//let render = new Render();



export let renderThree = new Renderthree()