export class Modal{
    private readonly id: string;
    public static modals: any[] = [];

    constructor(id = null){
        if (!(Modal.modals.find(x => x.id === id))){
            Modal.removeById(id);
        }
        Modal.modals.push(this);
        this.id = id || (Math.random() + Modal.modals.length);
    }

    public open(template: string): void{
        const divWrap: Element = document.createElement("div");
        divWrap.innerHTML = template;
        divWrap.id = this.id;
        divWrap.setAttribute('modal-id', this.id);
        divWrap.classList.add('modal-element');
        document.body.appendChild(divWrap);
    }

    public remove():void{
        const modalEl: Element = document.getElementById(this.id);
        modalEl.parentNode.removeChild(modalEl);
    }

    public static removeById(id: string = null): void{
        let modalID: string = id;
        const findEl: Modal = Modal.modals.find(x => x.id === modalID);
        if (findEl){
            findEl.remove();
            Modal.modals = Modal.modals.filter((el) => el.id !== modalID)
        }
        else{
            if (Array.isArray(Modal.modals)) {
                const lastEl: Element = Modal.modals.pop();
                if (lastEl) {
                    lastEl.remove();
                }
            }
        }
    }
}
