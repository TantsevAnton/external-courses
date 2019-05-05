function prepend(container, newElement) {
    newElement.innerHTML = container.childElementCount + 1;
    container.insertBefore(newElement, container.firstChild);
}
const buttonPrepend = document.querySelector('button');
buttonPrepend.addEventListener('click', () => prepend(document.querySelector('div'), document.createElement('div')));