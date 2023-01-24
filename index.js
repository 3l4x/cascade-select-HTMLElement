/*
Updates:
        CascadeSelect now extends HTMLElement
        implemented connectedCallback (renamed init)
        implemented disconnectedCallback
        createSelectOptions concatenating bug fixed
*/

class CascadeSelect extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback() {
        this.collectOptions();
        this.createSelects();
        this.appendToShadowRoot();
    }

    collectOptions() {
        /*
        @returns obj
        example obj:  {"4-legged pets": Array(3) [ "hamster", "dog", "cat" ],
        "Flying pets": Array(3) [ "parrot", "macaw", "albatross" ]} */
        this.options = [...this.querySelectorAll('select > optgroup')].reduce((acc, optgroup) => {
            if (optgroup.label) {
                acc[optgroup.label] = [...optgroup.children].map(opt => opt.value);
            }
            return acc;
        }, {});
    }

    appendToShadowRoot(){
        this.shadowRoot.appendChild(this.select);
        this.shadowRoot.appendChild(this.selectOptions);
        this.innerHTML = '';
    }

    createSelect()
    {
        return document.createElement('select');
    }

    createSelects() {

        this.select = this.createSelect();
        this.createSelectOptions(this.select, Object.keys(this.options));
        this.select.selectedIndex = 0;
        this.selectOptions = this.createSelect();
        this.updateOptions();
        //everytime this.select.selectedIndex  is changed we update 2nd select
        //have to use bind/arrowfunct or this will refer to event target
        this.select.addEventListener("change", this.updateOptions.bind(this));
    }


    updateOptions()
    {
        this.createSelectOptions(this.selectOptions,this.options[this.select.value]);
    }

    createSelectOptions(select,options)
    {
        select.innerHTML = options.map((option)=>{return `<option value="${option}">${option}</option>`}).join('');
    }

    disconnectedCallback(){
        this.select.removeEventListener("change", this.updateOptions);
    }
}


customElements.define('cascade-select',CascadeSelect);
