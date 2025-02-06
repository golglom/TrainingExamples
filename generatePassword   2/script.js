const generateBtn = document.getElementById('generateBtn');
const passwordsList = document.getElementById('passwords');

// Fonction pour générer un mot de passe aléatoire
function generatePassword(length = 12) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

// Ajout d'un mot de passe à la liste
generateBtn.addEventListener('click', () => {
    const password = generatePassword();

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${password}</span>
        <button class="delete-btn">Supprimer</button>
    `;

    const deleteBtn = listItem.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        passwordsList.removeChild(listItem);
    });

    passwordsList.appendChild(listItem);
});
