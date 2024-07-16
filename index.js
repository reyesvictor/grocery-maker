// Ingredient portion is for one person
const json = {
    "recipes": {
        "protein_breakfast": {
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

// ========== CREATE FRONT =================================================

const main = document.querySelector('#recipes');

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
    newLabel.innerText = recipeName;
    newLabel.for = recipeName;
    const select = getSelect();
    select.name = recipeName;
    newLabel.appendChild(select);
    main.appendChild(newLabel);
    main.appendChild(document.createElement('hr'));
}

const submit = document.createElement('button');
submit.type = 'submit';
submit.innerText = 'Create';
main.appendChild(submit);

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
    document.querySelector('body').appendChild(listElem);
}
