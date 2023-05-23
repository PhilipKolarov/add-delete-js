function addItem() {
    const text = document.getElementById('newItemText').value;
    const li = document.createElement('li');
    const a = document.createElement('a');
    const span = document.createElement('span');

    a.setAttribute('href', '#');
    a.addEventListener('click', deleteItem)
    span.textContent = '[ Delete ]';
    li.textContent = text;
    a.appendChild(span);
    li.appendChild(a);

    const ul = document.getElementById('items');
    ul.appendChild(li);

    document.getElementById('newItemText').value = '';

    function deleteItem() {
        ul.removeChild(li);
    }
}