const formAdd = document.querySelector('.form-add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const listAdd = todo => {
    const html = `
    
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa-solid fa-trash-can delete"></i>
</li>
    `
    list.innerHTML += html;
}



formAdd.addEventListener('click', e => {
    e.preventDefault();
    const todo = e.target.add.value.trim();
    //console.log(todo);
    if (todo.length > 0) {
        listAdd(todo);
    }
    e.target.add.value = "";

});

list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    };

});

const filterTodos = term => {
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('fitred'))

    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('fitred'))

}

search.addEventListener('keyup', e => {
    const term = search.value.toLowerCase().trim();

    filterTodos(term);
});
