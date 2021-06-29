const headerList: HTMLElement | null = document.querySelector('.header__list') as HTMLElement;
const modal = document.querySelector('#modal') as HTMLElement;
const modalClose = document.querySelector('.modal__close') as Element;

type motionTitle = 'IMAGE' | 'VIDEO' | 'NOTE' | 'TASK';

class modalInfoImpl{

    constructor(private name: motionTitle){
        
    }
    
    build(){
        const modalLabel: Element | null = document.querySelector('label[for="main"]');
        const modalInputs: NodeListOf<Element> | null = document.querySelectorAll('#modal input');

        console.log(modalInputs);

        modalInputs.forEach((modalInput) => {
            modalInput.value = '';
        });

        if(this.name === 'IMAGE' || this.name === 'VIDEO'){
            modalLabel && (modalLabel.textContent = 'URL');
        }else{
            modalLabel && (modalLabel.textContent = 'Body');
        }

        modal.style.visibility = 'visible';
    }

    create(name: motionTitle){
        
    }
}

headerList.addEventListener('click', (e) => {
    const target: EventTarget | null = e.target as EventTarget;
    const motionSelect = target.id.toUpperCase();

    if(motionSelect !== ""){
        return new modalInfoImpl(motionSelect).build();
    }
});

modalClose.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
});
