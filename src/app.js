// TODO: Submit button to send spell info to card
// Spells URL
// const spellsUrl = 'https://fedeperin-harry-potter-api-en.herokuapp.com/spells'

// setting up variables of house images
const houseGryffindor = document.getElementById('gryffindor');
const houseHufflepuff = document.getElementById('hufflepuff');
const houseRavenclaw = document.getElementById('ravenclaw');
const houseSlytherin = document.getElementById('slytherin');

// Setting up variables for search

const spellSearch = document.getElementById('spell-search');
const spellList = document.getElementById('spell-list');


// changing background color and font color to house colors on click 

// Gryffindor
houseGryffindor.addEventListener('click', (e) => document.body.style.backgroundColor = "#740001");
houseGryffindor.addEventListener('click', (e) => document.body.style.color = "#D3A625");



// Hufflepuff
houseHufflepuff.addEventListener('click', (e) => document.body.style.backgroundColor = "#FFD800");
houseHufflepuff.addEventListener('click', (e) => document.body.style.color = "#000000");

// Ravenclaw
houseRavenclaw.addEventListener('click', (e) => document.body.style.backgroundColor = "#0E1A40");
houseRavenclaw.addEventListener('click', (e) => document.body.style.color = "#946B2D");

// Slytherin
houseSlytherin.addEventListener('click', (e) => document.body.style.backgroundColor = "#1A472A");
houseSlytherin.addEventListener('click', (e) => document.body.style.color = "#5D5D5D");

// Search Spells and Filters Results

const searchSpells = async (searchText) => {
    const res = await fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/spells');
    const arrSpells = await res.json();

    let matches = arrSpells.filter((spellName) => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return spellName.spell.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        spellList.innerHTML = ''
    }
    
    outputSpellsInfo(matches);
};

// Send Results to HTML

const outputSpellsInfo = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
        <div id="spellResult">
            <h4 class="spellName">${match.spell} <!-- <span>Use: ${match.use}</span>--></h4>
        </div>`)
        .join('');

        spellList.innerHTML = html;
    }
};


spellSearch.addEventListener('input', () => searchSpells(spellSearch.value));

