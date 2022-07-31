class Collapse {

    constructor(rootElement, label, content) {
       this.rootElement = rootElement,
       this.label = label,
       this.content = content

       this.collapsed = true
    
    }
    render() {
        //HTML text Fragment
        //this.rootElement.innerHTML = `
        //<div class="collapse">
        //<button>${this.label}</button>
        //</div>
        //`

        //DOM FRAGMENT
        
        let div = document.createElement('div')
        div.className = "collapse"

        let button = document.createElement('button')
        button.innerText = this.label

        div.appendChild(button)

        this.rootElement.appendChild(div)

        button.addEventListener('click', this.clickHandler.bind(this))

        
        if (!this.collapsed) {
            

            let details = document.createElement('div');
            details.className = 'collapse-content';

            let paragraph = document.createElement('p');
            paragraph.innerHTML = this.content;

            this.rootElement.appendChild(details);
            details.appendChild(paragraph);
   
            
            
            
            //HW4:create the next DOM fragment
            //<div class = "collapse-content">
            // <p>{this.content}<p>
            //  </div>
            //and append it to wrapper

            //HiNT: try to find out was rendered
       }
       
        
    }
    
    

    clickHandler() {
         this.collapsed = !this.collapsed
         this.render()
         

         
    }
    
}
