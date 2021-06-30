"use strict";
var headerList = document.querySelector('.header__list');
var modal = document.querySelector('#modal');
var modalClose = document.querySelector('.modal__close');
var modalAdd = document.querySelector('.modal__add');
var ModalInfo = /** @class */ (function () {
    function ModalInfo(_name) {
        this._name = _name;
    }
    Object.defineProperty(ModalInfo.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    ModalInfo.newIns = function (name) {
        return new ModalInfo(name);
    };
    ModalInfo.prototype.build = function () {
        var modalLabel = document.querySelector('label[for="main"]');
        var modalInputs = document.querySelectorAll('#modal input');
        modalInputs.forEach(function (modalInput) {
            modalInput.value = '';
        });
        if (this._name === 'IMAGE' || this._name === 'VIDEO') {
            modalLabel && (modalLabel.textContent = 'URL');
        }
        else {
            modalLabel && (modalLabel.textContent = 'Body');
        }
        modal.style.visibility = 'visible';
    };
    return ModalInfo;
}());
headerList.addEventListener('click', function (e) {
    var target = e.target;
    var motionSelect = target.id.toUpperCase();
    if (motionSelect !== "") {
        return ModalInfo.newIns(motionSelect).build();
    }
});
modalClose.addEventListener('click', function () {
    modal.style.visibility = 'hidden';
});
modalAdd.addEventListener('click', function (e) {
});
//# sourceMappingURL=script.js.map