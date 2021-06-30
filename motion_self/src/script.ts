const headerList: HTMLElement | null = document.querySelector('.header__list') as HTMLElement;
const modal = document.querySelector('#modal') as HTMLElement;
const modalClose = document.querySelector('.modal__close') as Element;
const modalAdd = document.querySelector('.modal__add') as Element;

type motionTitle = 'IMAGE' | 'VIDEO' | 'NOTE' | 'TASK';

class ModalInfo {

    private constructor(private _name: motionTitle){}

    get name(){
        return this._name;
    }

    static newIns(name: motionTitle): ModalInfo{
        return new ModalInfo(name);
    }
    
    build(){
        const modalLabel: Element | null = document.querySelector('label[for="main"]');
        const modalInputs: NodeListOf<Element> | null = document.querySelectorAll('#modal input');        

        modalInputs.forEach((modalInput) => {
            modalInput.value = '';
        });

        if(this._name === 'IMAGE' || this._name === 'VIDEO'){
            modalLabel && (modalLabel.textContent = 'URL');
        }else{
            modalLabel && (modalLabel.textContent = 'Body');
        }

        modal.style.visibility = 'visible';
    }
}

headerList.addEventListener('click', (e) => {
    const target: EventTarget | null = e.target as EventTarget;
    const motionSelect = target.id.toUpperCase();

    if(motionSelect !== ""){        
        return ModalInfo.newIns(motionSelect).build();
    }
});

modalClose.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
});

modalAdd.addEventListener('click', (e) => {
    
});
