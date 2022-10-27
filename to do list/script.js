const formAdd = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

const listAdd = todo => {
    const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="fa-solid fa-trash-can delete"></i>
            </li>
`
    ul.innerHTML += html;
    console.log(todo);

}

formAdd.addEventListener('submit', e => {
    e.preventDefault();
    const todo = e.target.inputAdd.value.trim();
    if (todo.length > 0) {
        listAdd(todo);
        console.log(todo);
    }

    e.target.inputAdd.value = "";
});

ul.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodos = term => {
    // console.log(term);
    // console.log(ul.children);
    // console.log(Array.from(ul.children));

    Array.from(ul.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('fitred'))

    Array.from(ul.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('fitred'))

}

search.addEventListener('keyup', e => {
    const term = search.value.toLowerCase().trim();

    filterTodos(term);
});







//trim  (e.target.classList.contains('delete'))