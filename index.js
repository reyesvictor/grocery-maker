// Ingredient portion is for one person
const json = {
    "recipes": {
        "protein_breakfast": {
            "meta": {
                title: "Protein breakfast",
                src: "https://www.eatingwell.com/thmb/QhS7SWXfbfxbBxU6bntNhBy62VI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-beauty-01-435-d6cbb0c6a9d0407d9750c6bde58efa8f.jpg",
            },
            "oat": {
                "quantity": 50,
                "measure": "g",
            },
            "yogurt": {
                "quantity": 100,
                "measure": "g",
            },
            "banana": {
                "quantity": 1,
                "measure": null,
            },
            "dark_chocolate": {
                "quantity": 25,
                "measure": "g",
            }
        },
        "protein_meal": {
            "meta": {
                title: "Protein meal",
                src: "https://www.eatingwell.com/thmb/QhS7SWXfbfxbBxU6bntNhBy62VI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-beauty-01-435-d6cbb0c6a9d0407d9750c6bde58efa8f.jpg",
            },
            "lentil": {
                "quantity": 100,
                "measure": "g",
            },
            "egg": {
                "quantity": 2,
                "measure": null,
            },
        },
        "chicken_teriyaki_jow": {
            "meta": {
                title: "Chicken teriyaki jow",
                src: "https://www.eatingwell.com/thmb/QhS7SWXfbfxbBxU6bntNhBy62VI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-beauty-01-435-d6cbb0c6a9d0407d9750c6bde58efa8f.jpg",
            },
            "cherry_tomato": {
                "quantity": 120,
                "measure": "g",
            },
            "chicken": {
                "quantity": 1,
                "measure": "slice",
            },
            "soja": {
                "quantity": 15,
                "measure": "ml",
            },
            "rice": {
                "quantity": 1,
                "measure": "person",
            },
            "sesame_seed": {
                "quantity": 5,
                "measure": "g",
            },
            "salade": {
                "quantity": 10,
                "measure": "g",
            },
        },
        "oignon_beeg_cooking_with_morgane": {
            "meta": {
                title: "Oignon beeg cooking with morgane",
                src: "https://www.eatingwell.com/thmb/QhS7SWXfbfxbBxU6bntNhBy62VI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-beauty-01-435-d6cbb0c6a9d0407d9750c6bde58efa8f.jpg",
            },
            "beef": {
                "quantity": 150,
                "measure": "g",
            },
            "flour": {
                "quantity": 10,
                "measure": "g",
            },
            "oyster_sauce": {
                "quantity": 7,
                "measure": "g",
            },
            "soja": {
                "quantity": 7,
                "measure": "g",
            },
            "onion": {
                "quantity": 125,
                "measure": "g",
            },
        },
        "burger": {
            "meta": {
                title: "Burger",
                src: "https://www.eatingwell.com/thmb/QhS7SWXfbfxbBxU6bntNhBy62VI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-beauty-01-435-d6cbb0c6a9d0407d9750c6bde58efa8f.jpg",
            },
            "minced_meat_(haché)": {
                "quantity": 150,
                "measure": "g",
            },
            "fries": {
                "quantity": 150,
                "measure": "g",
            },
            "burger_bread": {
                "quantity": 2,
                "measure": null,
            },
            "salad": {
                "quantity": 10,
                "measure": "g",
            },
            "tomato": {
                "quantity": 0.25,
                "measure": null,
            },
            "pickle": {
                "quantity": 3,
                "measure": "g",
            },
            "onion": {
                "quantity": 0.10,
                "measure": null,
            },
        },
        "tonkatsu_pork": {
            "meta": {
                title: "Tonkatsu pork",
                src: "https://www.eatingwell.com/thmb/QhS7SWXfbfxbBxU6bntNhBy62VI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-beauty-01-435-d6cbb0c6a9d0407d9750c6bde58efa8f.jpg",
            },
            "pork": {
                "quantity": 1,
                "measure": null,
            },
            "flour": {
                "quantity": 30,
                "measure": "g",
            },
            "egg": {
                "quantity": 1,
                "measure": null,
            },
            "panko": {
                "quantity": 40,
                "measure": "g",
            },
        },
        "noodle_ginger_(mine)": {
            "meta": {
                title: "Noodle ginger (mine)",
                src: "https://www.eatingwell.com/thmb/QhS7SWXfbfxbBxU6bntNhBy62VI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-beauty-01-435-d6cbb0c6a9d0407d9750c6bde58efa8f.jpg",
            },
            "chicken": {
                "quantity": 1,
                "measure": null,
            },
            "egg_noodle_or_egg_pasta": {
                "quantity": 80,
                "measure": "g",
            },
            "ginger": {
                "quantity": 5,
                "measure": "g",
            },
            "onion": {
                "quantity": 0.3,
                "measure": null,
            },
            "pepper": {
                "quantity": 0.3,
                "measure": null,
            },
        },
        "pasta_arrabiata": {
            "meta": {
                title: "Pasta arrabiata",
                src: "https://www.eatingwell.com/thmb/QhS7SWXfbfxbBxU6bntNhBy62VI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/old-fashioned-oatmeal-beauty-01-435-d6cbb0c6a9d0407d9750c6bde58efa8f.jpg",
            },
            "pasta": {
                "quantity": 80,
                "measure": "g",
            },
            "garlic": {
                "quantity": 1,
                "measure": null,
            },
            "tomato": {
                "quantity": 0.5,
                "measure": null,
            },
            "tomato_concentrate": {
                "quantity": 0.5,
                "measure": "small can",
            },
        },
    },
};


// ========== UTILS========= =================================================
function displayResults (listElem) {
    result.innerHTML = '';
    result.appendChild(listElem);
}

// ========== LOCAL STORAGE =================================================
const STORAGE_KEY = 'formData';
function saveFormDataInLocalStorage (formData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function eraseFormDataInLocalStorage () {
    localStorage.removeItem(STORAGE_KEY);
}

// ========== CREATE FRONT =================================================

const main = document.querySelector('#recipes');
const main_content = main.querySelector('#main_content');
const result = document.querySelector('#result');
const reset = document.querySelector('#reset');

function doesFormDataExistInLocalStorage () {
    return localStorage.hasOwnProperty(STORAGE_KEY) && null !== localStorage.getItem(STORAGE_KEY);
}

if (doesFormDataExistInLocalStorage()) {
    const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    displaySubmit(formData);
}

reset.onclick = function () {
    eraseFormDataInLocalStorage();
    result.innerHTML = '';
}

function getSelect() {
    const select = document.createElement('select');

    for (let i = 0; i < 15; i++) {
        const newOption = document.createElement('option');
        newOption.value = i;
        newOption.innerText = i;
        select.appendChild(newOption);
    }

    return select;
}

// TODO RETRIEVE INFO FROM JSON FILE AND NOT FROM CONSTANT
for (const recipeName in json.recipes) {
    const newLabel = document.createElement('label');
    // newLabel.innerText = recipeName;
    newLabel.classList.add('label_style');
    newLabel.for = recipeName;
    const select = getSelect();
    select.name = recipeName;

    // add img if exists and add title
    const meta = json.recipes[recipeName].meta;
    if (meta) {
        const img = document.createElement('img');
        img.src = meta.src;
        img.alt = recipeName;
        img.title = recipeName;
        img.classList.add('image_style');
        newLabel.appendChild(img);
    }

    // add select
    newLabel.appendChild(select);

    // append to main_content
    main_content.appendChild(newLabel);
    main_content.appendChild(document.createElement('hr'));
}

function getAllRecipeNames () {
    return Object.keys(json.recipes);
}

main.onsubmit = function (e) {
    // ========== RETRIEVE INFO FROM FORM ==========================================
    e.preventDefault();
    const formDataTest = {"recipes": {}};
    for (const recipeName of getAllRecipeNames()) {
        formDataTest.recipes[recipeName] = parseInt(e.target[recipeName].value);
    }
    saveFormDataInLocalStorage(formDataTest);
    displaySubmit(formDataTest);
}

function displaySubmit (formDataTest) {
    // ========== CALCULATE ========================================================
    // test
    // const formDataTest = {
    //     "recipes": {
    //         "lomo": 1,
    //         "nasi_goreng": 4,
    //         "protein_breakfast": 5,
    //         "protein_meal": 5,
    //         "protein_shake": 5,
    //     }
    // };

    const list = {};

    for (const recipeName in formDataTest.recipes) {
        const quantityAsked = formDataTest.recipes[recipeName];

        if (0 === quantityAsked) {
            continue;
        }

        const recipeInfo = json.recipes[recipeName];

        for (const ingredientName in recipeInfo) {
            if ('meta' === ingredientName) {
                continue;
            }
            const ingredientInfo = recipeInfo[ingredientName];

            if (false === list.hasOwnProperty(ingredientName)) {
                list[ingredientName] = {};
                list[ingredientName].quantity = ingredientInfo.quantity * quantityAsked;
                list[ingredientName].measure = ingredientInfo.measure; // would be simpler if I could research the object and find what the measure is
            } else {
                list[ingredientName].quantity += (ingredientInfo.quantity * quantityAsked);
            }
        }
    }

    // ========== SHOW PARSED LIST ========================================================
    const listElem = document.createElement('ul');
    for (const ingredientName in list) {
        const itemElem = document.createElement('li');

        // parse ingredient name
        let ingNameParsed = ingredientName.replace('_', ' '); // TODO uppercase first letter
        itemElem.innerText = `${ingNameParsed} : ${list[ingredientName].quantity} ${list[ingredientName].measure ?? ''}`;
        listElem.appendChild(itemElem);
    }

    displayResults(listElem);
}
