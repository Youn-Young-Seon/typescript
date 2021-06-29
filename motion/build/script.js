"use strict";
var headerList = document.querySelector('.header__list');
var modal = document.querySelector('#modal');
var modalClose = document.querySelector('.modal__close');
var modalInfoImpl = /** @class */ (function () {
    function modalInfoImpl(name) {
        this.name = name;
    }
    modalInfoImpl.prototype.build = function () {
        var modalLabel = document.querySelector('label[for="main"]');
        var modalInputs = document.querySelectorAll('#modal input');
        console.log(modalInputs);
        modalInputs.forEach(function (modalInput) {
            modalInput.value = '';
        });
        if (this.name === 'IMAGE' || this.name === 'VIDEO') {
            modalLabel && (modalLabel.textContent = 'URL');
        }
        else {
            modalLabel && (modalLabel.textContent = 'Body');
        }
        modal.style.visibility = 'visible';
    };
    modalInfoImpl.prototype.create = function (name) {
    };
    return modalInfoImpl;
}());
headerList.addEventListener('click', function (e) {
    var target = e.target;
    var motionSelect = target.id.toUpperCase();
    if (motionSelect !== "") {
        return new modalInfoImpl(motionSelect).build();
    }
});
modalClose.addEventListener('click', function () {
    modal.style.visibility = 'hidden';
});
//# sourceMappingURL=script.js.map