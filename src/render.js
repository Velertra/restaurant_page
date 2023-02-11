
class Render {
  /*   contentClass() {
        let createClass = document.getElementById('content');
        createClass.classList.add("content");
    } */
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
        topDiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur";
        body_div.appendChild(topDiv); 
        
        
    }          
    centerImg() {
        let mainPic = document.createElement("img");                    //three divs built for main page
        mainPic.classList.add("main_pic")
        body_div.appendChild(mainPic);
        mainPic.src = "https://picsum.photos/200/301";
        
    } 
    discribeDiv() {
        let disDiv = document.createElement('div');
        disDiv.classList.add("discription");
        disDiv.setAttribute('id', 'discription');
        disDiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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



export let render = new Render()