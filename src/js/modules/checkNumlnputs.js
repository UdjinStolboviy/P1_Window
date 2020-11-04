const checkNumlnputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', function () {
            item.value = item.value.replace(/\D/, '');
        });
       
    });
};

export default checkNumlnputs;