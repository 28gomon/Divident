document.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const callBackPopUp = () => {

        const callbackPhone = document.getElementById('callbackPhone');
        const callbackPhoneSection = document.querySelector('.callback-phone');
        const callbackPhoneFooter = document.getElementById('callbackPhoneFooter');
        const phoneField = document.querySelector('.phone-field');

        phoneField.firstElementChild.classList.remove('in');
        

        callbackPhone.addEventListener('click', () => {

            callbackPhoneSection.style.display = 'flex';
            phoneField.firstElementChild.classList.add('in');
            document.body.style.overflow = 'hidden';
        });

        callbackPhoneFooter.addEventListener('click', () => {

            callbackPhoneSection.style.display = 'flex';
            phoneField.firstElementChild.classList.add('in');
            document.body.style.overflow = 'hidden';
        });

        callbackPhoneSection.addEventListener('click', (event) => {

            event.preventDefault();
            let target = event.target;

            if (target.classList.contains('callback-phone')) {

                callbackPhoneSection.style.display = 'none';
                phoneField.firstElementChild.classList.remove('in');
                document.body.style.overflow = '';
            }

            if (target.closest('.btn-close-form')) {
                
                callbackPhoneSection.style.display = 'none';
                phoneField.firstElementChild.classList.remove('in');
                document.body.style.overflow = '';
            }
            
        });
        
    };

    callBackPopUp();


    const phoneRotateArrow = (classElement) => {

        const phoneContacts = document.querySelector(classElement);

        phoneContacts.addEventListener('mouseover', (event) => {

            if (event.target.closest(classElement)) {
                phoneContacts.classList.add('add');
            }
        });

        phoneContacts.addEventListener('mouseout', (event) => {

            if (event.target.closest(classElement)) {
                phoneContacts.classList.remove('add');
            }
        });
    };

    phoneRotateArrow('.phone-contacts');
    phoneRotateArrow('.button-phone .phone');
    
});