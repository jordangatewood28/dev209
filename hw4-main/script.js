const API = 'http://localhost:3000';
let authToken = null;
let currentEditId = null;

window.onload = () => {
    const token = localStorage.getItem('token');
    if (token) {
        authToken = token;
        showToDoSection();
        fetchToDo();
    }
};

async function submitRegister(event) {
    event.preventDefault();
}

async function register() {
    const username = document.getElementById().value;
    const password = document.getElementById().value;

    
}
