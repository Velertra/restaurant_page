import { render } from "./render";
import { renderTwo } from "./render2";
import { renderThree } from "./render3";






class TabSelect {
    
    display() {
        let tabs = document.createElement('div'),
            firstTab = document.createElement('div'),
            secondTab = document.createElement('div'),
            thirdTab = document.createElement('div');
      //  let parent = element.parentNode;
        
        tabs.classList.add('tab_container');
        tabs.setAttribute('id', 'tab_container');
        content.appendChild(tabs)    
        
        firstTab.classList.add("first_tab");
        firstTab.setAttribute('id', 'first_tab')


        tab_container.appendChild(firstTab)
        secondTab.classList.add("second_tab");
        secondTab.setAttribute('id', 'second_tab')              //creates div tabs at the top
        tab_container.appendChild(secondTab)
        thirdTab.classList.add("third_tab");
        thirdTab.setAttribute('id', 'third_tab')
        tab_container.appendChild(thirdTab);

        firstTab.innerHTML = "a";
        secondTab.innerHTML = "b";
        thirdTab.innerHTML = "c"
    }    
    tabThru() {
    console.log('information')
        let firstClick = document.getElementById("first_tab");
        firstClick.addEventListener('click', () => render.allTheDivs());
        
        let secondClick = document.getElementById('second_tab');
        secondClick.addEventListener('click', () => renderTwo.allTheDivs());        //adds event listener clicks to run the other modules(render 1-2)
        
        let thirdClick = document.getElementById('third_tab');
        thirdClick.addEventListener('click', () => renderThree.allTheDivs());
    }
    
    
    playAll() {
        this.display();
        this.tabThru();
    }
}

/* render.allTheDivs() */


let tabSelect = new TabSelect();


tabSelect.playAll();

