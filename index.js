// Ingredient portion is for one person
const json = {
    "recipes": {
        "protein_breakfast": {
            "meta": {
                title: "Protein breakfast",
                src: "imgs/protein_breakfast.webp",
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
        "butter_bread_breakfast": {
            "meta": {
                title: "Butter bread breakfast",
                src: "imgs/pain_beurre.webp",
            },
            "soft_bread_(mie)": {
                "quantity": 2,
                "measure": null,
            },
            "butter": {
                "quantity": 15,
                "measure": "g",
            },
        },
        "skyr_granola_breakfast": {
            "meta": {
                title: "Skyr granola breakfast",
                src: "imgs/skyr_granola_breakfast.webp",
            },
            "skyr": {
                "quantity": 1,
                "measure": null,
            },
            "granola_homemade_or_cereal": {
                "quantity": 20,
                "measure": "g",
            },
            "blueberry": {
                "quantity": 20,
                "measure": "g",
            }
        },
            "chicken_teriyaki_jow": {
            "meta": {
                title: "Chicken teriyaki summer bowl from jow",
                src: "imgs/chicken_teriyaki_bowl_jow.jpg",
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
        "oignon_beef_cooking_with_morgane": {
            "meta": {
                title: "Oignon beef cooking with morgane",
                src: "imgs/oinion_beef_morgane.jpg",
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
        "burger_maison": {
            "meta": {
                title: "Burger Maison by moi meme",
                src: "imgs/burger_maison.jpg",
            },
            "minced_meat": { // haché
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
            "mayonnaise": {
                "quantity": 10,
                "measure": "g",
            },
            "barbecue_sauce": {
                "quantity": 10,
                "measure": "g",
            }
        },
        "tonkatsu_pork": {
            "meta": {
                title: "Tonkatsu pork",
                src: "imgs/tonkkatsu_pork.jpg",
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
            "rice": {
                "quantity": 60,
                "measure": "g",
            },
            "broccoli": {
                "quantity": 0.3,
                "measure": null,
            }
        },
        "pasta_arrabiata": {
            "meta": {
                title: "Pasta arrabiata",
                src: "imgs/pasta_arrabiata.webp",
            },
            "pasta_mafaldine": {
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
        "sushi": {
            "meta": {
                title: "Sushi maison",
                src: "imgs/sushi_avocado.jpg",
            },
            "sushi_rice": {
                "quantity": 70,
                "measure": "g",
            },
            "avocado": {
                "quantity": 0.5,
                "measure": null,
            },
            "nori_sheet": {
                "quantity": 1.5,
                "measure": null,
            },
            "frozen_salmon": {
                "quantity": 0.5,
                "measure": null,
            },
            "soja": {
                "quantity": 5,
                "measure": "ml",
            },
            "fried_onion": {
                "quantity": 5,
                "measure": "g",
            }
        },
        "hot_dog": {
            "meta": {
                title: "Hot dog",
                src: "imgs/hot_dog.webp",
            },
            "hot_dog_bread": {
                "quantity": 2,
                "measure": null,
            },
            "sausage": {
                "quantity": 2,
                "measure": null,
            },
            "ketchup": {
                "quantity": 10,
                "measure": "g",
            },
            "mustard": {
                "quantity": 10,
                "measure": "g",
            },
            "salad": {
                "quantity": 10,
                "measure": "g",
            }
        },
        "lomo_saltado": {
            "meta": {
                title: "Lomo saltado",
                src: "imgs/lomo_saltado.jpg",
            },
            "beef": {
                "quantity": 70,
                "measure": "g",
            },
            "onion": {
                "quantity": 0.25,
                "measure": null,
            },
            "pepper": {
                "quantity": 0.25,
                "measure": null,
            },
            "tomato": {
                "quantity": 0.5,
                "measure": null,
            },
            "soja": {
                "quantity": 15,
                "measure": "ml",
            },
            "oyster_sauce": {
                "quantity": 10,
                "measure": "g",
            },
            "white_vinegar": {
                "quantity": 5,
                "measure": "ml",
            },
            "rice": {
                "quantity": 75,
                "measure": "g",
            },
            "french_fries": {
                "quantity": 150,
                "measure": "g",
            }
        },
        // https://jow.fr/en/recipes/chicken-ramen-soup-81ya71eklqb400wj0kih
        "chicken_ramen_jow": {
            "meta": {
                title: "Chicken ramen soup from jow",
                src: "imgs/chicken_ramen_soup_jow.jpg",
            },
            "noodles": {
                "quantity": 80,
                "measure": "g"
            },
            "garlic": {
                "quantity": 0.5,
                "measure": null,
            },
            "chicken_breast": {
                "quantity": 1,
                "measure": null,
            },
            "baby_bella_mushrooms": {
                "quantity": 50,
                "measure": "g",
            },
            "miso_paste": {
                "quantity": 0.5,
                "measure": "tbsp"
            },
            "chicken_cube_bouillon": {
                "quantity": 0.5,
                "measure": null
            },
            "ginger": {
                "quantity": 1,
                "measure": null
            },
            "cilantro": {
                "quantity": 0.2,
                "measure": null,
                "optional": true
            }
        },
        "picard_meal": {
            "meta": {
                title: "Picard meal",
                src: "imgs/any_picard.webp",
            },
            "picard_meal": {
                "quantity": 1,
                "measure": null,
            },
        },
        "rice_gyoza_nem_picard": {
            "meta": {
                title: "Rice gyoza nem picard",
                src: "imgs/rice_nem_gyoza_picard.jpeg",
            },
            "rice": {
                "quantity": 70,
                "measure": null,
            },
            "nem_picard": {
                "quantity": 0.5,
                "measure": null,
            },
            "gyoza_picard": {
                "quantity": 0.5,
                "measure": null,
            },
            "broccoli": {
                "quantity": 0.3,
                "measure": null,
            }
        },
        "bananas": {
            "meta": {
                title: "Bananas",
                src: "imgs/banana.jpg",
            },
            "banana": {
                "quantity": 1,
                "measure": null,
            }
        },
        "batata_harra_and_meat": {
            "meta": {
                title: "Libanese potatoes (batata harra) and meat",
                src: "imgs/libanese_potatoes.webp",
            },
            "potatoes": {
                "quantity": 3,
                "measure": null,
            },
            "beef": {
                "quantity": 0.5,
                "measure": null,
            },
            "cilantro": {
                "quantity": 0.3,
                "measure": null,
            },
            "libanese_red_spice": {
                "quantity": 1,
                "measure": "tbsp",
            }
        },
        "eggplant_strifry": {
            "meta": {
                title: "Eggplant strifry",
                src: "imgs/eggplant_stirfry.png",
            },
            "eggplant": {
                "quantity": 0.5,
                "measure": null,
            },
            "brown_sugar": {
                "quantity": 1,
                "measure": "tbsp",
            },
            "soy_sauce": {
                "quantity": 15,
                "measure": "ml",
            },
            "rice_vinegar": {
                "quantity": 7,
                "measure": "ml",
            },
            "toasted_sesame_oil": {
                "quantity": 1.25,
                "measure": "ml",
            },
            "cornstarch_(maizena)": {
                "quantity": 0.25,
                "measure": "tbsp",
            },
            "olive_oil": {
                "quantity": 3,
                "measure": "tbsp",
            },
            "garlic": {
                "quantity": 2,
                "measure": null,
            },
            "ginger": {
                "quantity": 2,
                "measure": "tbsp",
            },
            "green_onion_(cebette)_optional": {
                "quantity": 1,
                "measure": null,
            },
            "toasted_sesame_seeds": {
                "quantity": 1,
                "measure": "tbsp",
            }
        },
        "pizza_pesto_picard": {
            "meta": {
                title: "Pizza pesto picard",
                src: "imgs/pizza_pesto_picard.webp",
            },
            "pizza_pesto_picard": {
                "quantity": 1,
                "measure": null,
            }
        },
        "smoked_salmon_salad": {
            "meta": {
                title: "Smoked salmon salad",
                src: "imgs/smoked_salmon_salad.png",
            },
            "smoked_salmon": {
                "quantity": 2,
                "measure": null,
            },
            "avocado": {
                "quantity": 0.5,
                "measure": null,
            },
            "salad": {
                "quantity": 10,
                "measure": "g",
            },
            "cucumber": {
                "quantity": 0.2,
                "measure": null,
            },
            "balsamic_vinegar": {
                "quantity": 10,
                "measure": "g",
            },
            "olive_oil": {
                "quantity": 10,
                "measure": "g",
            }
        },
        "meat_and_fries": {
            "meta": {
                title: "Meat and fries",
                src: "imgs/meat_and_fries.png",
            },
            "red_meat": {
                "quantity": 0.5,
                "measure": null,
            },
            "fries": {
                "quantity": 150,
                "measure": "g",
            },
            "onion": {
                "quantity": 0.3,
                "measure": null,
            },
            "butter": {
                "quantity": 30,
                "measure": "g",
            }
        },
        "empanadas": {
            "meta": {
                title: "Empanadas",
                src: "imgs/empanadas.webp",
            },
            "pate_feuilletee_herta_bleue": {
                "quantity": 0.5,
                "measure": null,
            },
            "minced_beef": {
                "quantity": 0.5,
                "measure": null,
            },
            "onion": {
                "quantity": 0.3,
                "measure": null,
            },
            "egg": {
                "quantity": 1,
                "measure": null,
            },
            "pepper": {
                "quantity": 0.3,
                "measure": null,
            },
            "salad": {
                "quantity": 30,
                "measure": "g",
            }
        },
        "eggplant_curry_otto_lenghi": {
            "meta": {
                title: "Eggplant curry otto lenghi",
                src: "imgs/eggplant_curry_otto_lenghi.png",
            },
            "eggplant": {
                "quantity": 0.5,
                "measure": null,
            },
            "greek_yogurt": {
                "quantity": 50,
                "measure": "g",
            },
            "onion": {
                "quantity": 0.25,
                "measure": null,
            },
            "garlic": {
                "quantity": 1,
                "measure": null,
            },
            "cilantro": {
                "quantity": 0.3,
                "measure": null,
            },
        },
        "cod_with_lemon_butter_jow": {
            "meta": {
                title: "Cod with lemon butter, rice & green beans",
                src: "imgs/cod_with_lemon_butter.png",
            },
            "cod": {
                "quantity": 0.5,
                "measure": null,
            },
            "butter": {
                "quantity": 15,
                "measure": "g",
            },
            "lemon": {
                "quantity": 0.25,
                "measure": null,
            },
            "rice": {
                "quantity": 75,
                "measure": "g",
            },
            "green_beans_(can_be_frozen)": {
                "quantity": 150,
                "measure": "g",
            },
            "parsley": {
                "quantity": 0.2,
                "measure": null,
            }
        }
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

function getQuantitySelectElem() {
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
    const select = getQuantitySelectElem();
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
    const selectContainer = document.createElement('div');
    selectContainer.classList.add('select_container');
    const minusButton = document.createElement('button');
    minusButton.innerText = '-';
    minusButton.onclick = function () {
        if (0 < select.value) {
            select.value--;
        }
    }
    selectContainer.appendChild(minusButton);
    selectContainer.appendChild(select);
    const plusButton = document.createElement('button');
    plusButton.innerText = '+';
    plusButton.onclick = function () {
        select.value++;
    }
    selectContainer.appendChild(plusButton);
    newLabel.appendChild(selectContainer);

    // append to main_content
    main_content.appendChild(newLabel);
    // main_content.appendChild(document.createElement('hr'));
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
