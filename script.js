const container = document.querySelector ('#container'); //sélectionne le container html

function createGrid(size = 16) { //fonction pour créer la grille 16x16
    container.innerHTML = ''; //vide le container existant pour le redimensionner

    for (let i = 0; i < size * size; i++) { //boucle qui crée size au carré cases (16x16)
        const square = document.createElement('div');//crée une nouvelle div (case)
        square.classList.add('grid-square');//ajoute la class css
        container.appendChild(square);//ajoute la case au container
    }


 // 2c. REDIMENSIONNE cases dynamiquement
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    square.style.flexBasis = `${100 / size}%`;
    square.style.height = `${100 / size}%`;
  });
}

container.addEventListener('mouseover' , (e) => { //effet dessin au survol case noire
    if (e.target.classList.contains('grid-square')) {//vérifie si cible = case
        e.target.style.backgroundColor = 'black';//colore en noir
    }
});

const resizeButton = document.createElement('button');//crée le bouton en js
resizeButton.textContent = 'Nouveau Dessin';
resizeButton.style.cssText = `
margin: 20px auto;
padding: 12px 24px;
font-size: 16px;
background: #007cba;
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
font-weight: bold;
`;
document.body.insertBefore(resizeButton, container);

resizeButton.addEventListener('click' , () => { //click button prompt

    let gridSize = prompt('Combien de cases par coté? (max 100)','16');
    if (gridSize === null || gridSize === '') return; //annulé

    gridSize = parseInt(gridSize); //string ->nombre

    if (gridSize > 100 || gridSize < 1 || isNaN(gridSize)) {
        alert('Entre un nombre entre 1 et 100!'); 
        return; 
    }
    createGrid(gridSize); // re crée la grille nouvelle taille
});

createGrid(16);//crée la grille au chargement