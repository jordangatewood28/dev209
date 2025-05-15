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

    try {
        const response = await fetch(`${API}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        });
        if (response.status===201){
            const data = await response.json();
            alert("Registration successul. Please lgon.")
            clearInput();
        } else {
            const error = await response.text();
            alert(`Registration failed: ${error}`)
        }
    }
    catch (error) {
    alert(`Error: ${error.message}`);}
}
