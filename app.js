const registerForm =
document.getElementById("registerForm");

const welcome =
document.getElementById("welcome");

const countryInput =
document.getElementById("countryInput");

const searchBtn =
document.getElementById("searchBtn");

const countryInfo =
document.getElementById("countryInfo");

const favorites =
document.getElementById("favorites");

const historyDiv =
document.getElementById("history");

const themeBtn =
document.getElementById("themeBtn");

document.addEventListener(
    "DOMContentLoaded",
    init
);



function init(){

    loadUser();
    loadFavorites();
    loadHistory();
    updateDashboard();
    loadTheme();

}

registerForm.addEventListener(
    "submit",
    saveUser
);

function saveUser(e){

    e.preventDefault();

    const user = {

        name:
        document.getElementById("name").value,

        email:
        document.getElementById("email").value,

        residence:
        document.getElementById(
            "countryResidence"
        ).value

    };

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    loadUser();



}

function loadUser(){

    const user =
    JSON.parse(
        localStorage.getItem("user")
    );

    if(user){

        welcome.textContent =
        `Bienvenido ${user.name}`;

        document.getElementById(
            "registerSection"
        ).style.display = "none";

    }else{

        document.getElementById(
            "registerSection"
        ).style.display = "block";

    }

}

searchBtn.addEventListener(
    "click",
    searchCountry
);

function searchCountry(){

    const user =
    JSON.parse(
        localStorage.getItem("user")
    );

    if(!user){

        alert(
            "Debes registrarte primero"
        );

        return;
    }

    const search =
    countryInput.value
    .toLowerCase()
    .trim();

    const country =
    countries[search];

    if(!country){

        alert("País no encontrado");

        return;
    }

    countryInfo.innerHTML = `

    <div class="country-card">

        <img
        src="${country.flag}"
        alt="${country.name}">

        <h2>${country.name}</h2>

        <p><strong>Capital:</strong> ${country.capital}</p>

        <p><strong>Población:</strong> ${country.population}</p>

        <p><strong>Región:</strong> ${country.region}</p>

        <p><strong>Moneda:</strong> ${country.currency}</p>

        <p><strong>Idioma:</strong> ${country.language}</p>

        <p><strong>Clima:</strong> ${country.weather}</p>

        <h3>Atracciones</h3>

        <ul>
            ${country.attractions
            .map(item =>
            `<li>${item}</li>`)
            .join("")}
        </ul>

        <button
        onclick="addFavorite('${country.name}')">
        Agregar Favorito
        </button>

    </div>

    `;

    saveHistory(
        country.name
    );

}

function addFavorite(name){

    const user =
    JSON.parse(
        localStorage.getItem("user")
    );

    if(!user){

        alert(
            "Debes registrarte primero"
        );

        return;
    }

    let favs =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

    if(
        favs.includes(name)
    ){
        return;
    }

    favs.push(name);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favs)
    );

    loadFavorites();
    updateDashboard();

}


function removeFavorite(name){

    let favs =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

    favs = favs.filter(
        item => item !== name
    );

    localStorage.setItem(
        "favorites",
        JSON.stringify(favs)
    );

    loadFavorites();
    updateDashboard();

}

function loadFavorites(){

    let favs =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

    favorites.innerHTML =
    "";

    favs.forEach(item=>{

        favorites.innerHTML += `

        <div class="favorite-item">

            ${item}

            <button
            onclick="removeFavorite('${item}')">

            Eliminar

            </button>

        </div>

        `;

    });

}

function saveHistory(name){

    let history =
    JSON.parse(
        localStorage.getItem("history")
    );

    if(!Array.isArray(history)){
        history = [];
    }

    history.unshift(name);

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

    loadHistory();
    updateDashboard();

}

function loadHistory(){

    let history =
    JSON.parse(
        localStorage.getItem("history")
    );

    if(!Array.isArray(history)){
        history = [];
    }

    historyDiv.innerHTML = "";

    history.forEach(item => {

        historyDiv.innerHTML += `
        <div class="history-item">
            ${item}
        </div>
        `;

    });

}


function updateDashboard(){

    const searches =
    JSON.parse(
        localStorage.getItem(
            "history"
        )
    ) || [];

    const favs =
    JSON.parse(
        localStorage.getItem(
            "favorites"
        )
    ) || [];

    document.getElementById(
        "totalSearches"
    ).textContent =
    searches.length;

    document.getElementById(
        "totalFavorites"
    ).textContent =
    favs.length;

}

themeBtn.addEventListener(
    "click",
    ()=>{

        document.body.classList.toggle(
            "dark"
        );

        localStorage.setItem(
            "theme",
            document.body.classList.contains(
                "dark"
            )
        );

    }
);

function loadTheme(){

    if(
        localStorage.getItem(
            "theme"
        ) === "true"
    ){

        document.body.classList.add(
            "dark"
        );

    }

}

const logoutBtn =
document.getElementById(
    "logoutBtn"
);

logoutBtn.addEventListener(
    "click",
    logout
);

function logout(){

    localStorage.removeItem("user");

    welcome.textContent = "";

    countryInfo.innerHTML = "";

    favorites.innerHTML = "";

    historyDiv.innerHTML = "";

    document.getElementById(
        "registerSection"
    ).style.display = "block";

    registerForm.reset();

    document.getElementById(
        "totalSearches"
    ).textContent = "0";

    document.getElementById(
        "totalFavorites"
    ).textContent = "0";

}

