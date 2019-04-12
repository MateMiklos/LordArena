// let raceSelector = document.querySelector('.race-selector');
// let raceElement = document.querySelector('.element');
// let mainClassSelector = document.querySelector('.main-class-selector');
// let subClassSelectorOptions = document.querySelectorAll('.sub-class-selector-option');
// let subClassSelectables = document.querySelectorAll('.sub-class-selectables');
// let subClassSelector = document.querySelector('.sub-class-selector');
// let finalClassSelectorOptions = document.querySelectorAll('.final-class-selector-option');
// let finalClassSelectables = document.querySelectorAll('.final-class-selectables');
// let finalClassSelector = document.querySelector('.final-class-selector');
// let strengthAttributes = document.querySelectorAll('.strength-attribute');
// let intellectAttributes = document.querySelectorAll('.intellect-attribute');
// let dexterityAttributes = document.querySelectorAll('.dexterity-attribute');
// const listOfSelectors = [raceSelector, mainClassSelector, subClassSelector, finalClassSelector];
//
//
// const listOfRaces = ['human', 'orc', 'elf', 'goblin'];
// const listOfMainClasses = ['warrior', 'mage', 'rouge'];
// const warriorSubClasses = ['hunter', 'soldier', 'mageknight'];
// const mageSubClasses = ['mageknight', 'scientist', 'witchdoctor'];
// const rougeSubClasses = ['witchdoctor', 'ranger', 'hunter'];
// const listOfMainClassSubClasses = [warriorSubClasses, mageSubClasses, rougeSubClasses];
// const listOfSubClasses = ['hunter', 'soldier', 'mageknight', 'scientist', 'witchdoctor', 'ranger'];
// const hunterFinalClasses = ['fortune hunter', 'assassin', 'renegade'];
// const soldierFinalClasses = ['renegade', 'champion', 'guardian'];
// const mageknightFinalClasses = ['guardian', 'witcher', 'priest'];
// const scientistFinalClasses = ['priest', 'wizard', 'necromancer'];
// const witchdoctorFinalClasses = ['necromancer', 'shaman', 'shapeshifter'];
// const rangerFinalClasses = ['shapeshifter', 'explorer', 'fortune hunter'];
// const listOfSubClassFinalClasses = [hunterFinalClasses, soldierFinalClasses, mageknightFinalClasses,
//                                     scientistFinalClasses, witchdoctorFinalClasses, rangerFinalClasses];
// const listOfFinalClasses = ['fortune hunter', 'assassin', 'renegade', 'champion', 'guardian', 'witcher',
//                             'priest', 'wizard', 'necromancer', 'shaman', 'shapeshifter', 'explorer'];
// const listOfSelectableLists = [listOfRaces, listOfMainClasses, listOfSubClasses, listOfFinalClasses];
//
//
// const humanAttributes = {'element': 'water', 'strength': '2', 'intellect': '2', 'dexterity': '2'};
// const orcAttributes = {'element': 'fire', 'strength': '3', 'intellect': '1', 'dexterity': '2'};
// const elfAttributes = {'element': 'air', 'strength': '2', 'intellect': '3', 'dexterity': '1'};
// const goblinAttributes = {'element': 'earth', 'strength': '1', 'intellect': '2', 'dexterity': '3'};
// const listOfRaceAttributes = [humanAttributes, orcAttributes, elfAttributes, goblinAttributes];
// const warriorAttributes = {'strength': '4', 'intellect': '0', 'dexterity': '0'};
// const mageAttributes = {'strength': '0', 'intellect': '4', 'dexterity': '0'};
// const rougeAttributes = {'strength': '0', 'intellect': '0', 'dexterity': '4'};
// const listOfMainClassAttributes = [warriorAttributes, mageAttributes, rougeAttributes];
// const hunterAttributes = {'strength': '2', 'intellect': '0', 'dexterity': '2'};
// const soldierAttributes = {'strength': '4', 'intellect': '0', 'dexterity': '0'};
// const mageknightAttributes = {'strength': '2', 'intellect': '2', 'dexterity': '0'};
// const scientistAttributes = {'strength': '0', 'intellect': '4', 'dexterity': '0'};
// const witchdoctorAttributes = {'strength': '0', 'intellect': '2', 'dexterity': '2'};
// const rangerAttributes = {'strength': '0', 'intellect': '0', 'dexterity': '4'};
// const listOfSubClassAttributes = [hunterAttributes, soldierAttributes, mageknightAttributes,
//                                 scientistAttributes, witchdoctorAttributes, rangerAttributes];
// const fortunehunterAttributes = {'strength': '1', 'intellect': '0', 'dexterity': '3'};
// const assassinAttributes = {'strength': '2', 'intellect': '0', 'dexterity': '2'};
// const renegadetAttributes = {'strength': '3', 'intellect': '0', 'dexterity': '1'};
// const championAttributes = {'strength': '4', 'intellect': '0', 'dexterity': '0'};
// const guardianAttributes = {'strength': '3', 'intellect': '1', 'dexterity': '0'};
// const witcherAttributes = {'strength': '2', 'intellect': '2', 'dexterity': '0'};
// const priestAttributes = {'strength': '1', 'intellect': '3', 'dexterity': '0'};
// const wizardAttributes = {'strength': '0', 'intellect': '4', 'dexterity': '0'};
// const necromancerAttributes = {'strength': '0', 'intellect': '3', 'dexterity': '1'};
// const shamanAttributes = {'strength': '0', 'intellect': '2', 'dexterity': '2'};
// const shapeshifterAttributes = {'strength': '0', 'intellect': '1', 'dexterity': '3'};
// const explorerAttributes = {'strength': '0', 'intellect': '0', 'dexterity': '4'};
// const listOfFinalClassAttributes = [fortunehunterAttributes, assassinAttributes, renegadetAttributes,
//                                     championAttributes, guardianAttributes, witcherAttributes,
//                                     priestAttributes, wizardAttributes, necromancerAttributes,
//                                     shamanAttributes, shapeshifterAttributes, explorerAttributes];
// const listOfAttributeLists = [listOfRaceAttributes, listOfMainClassAttributes, listOfSubClassAttributes, listOfFinalClassAttributes];


// function subClassSelectorSetter() {
//     for (let i = 0; i < listOfMainClasses.length; i++) {
//         if (mainClassSelector.value === listOfMainClasses[i]) {
//             for (let j = 0; j < 3; j++) {
//                 subClassSelectorOptions[j].innerHTML = listOfMainClassSubClasses[i][j];
//                 subClassSelectorOptions[j].value = listOfMainClassSubClasses[i][j];
//                 subClassSelectables[j].innerHTML = listOfMainClassSubClasses[i][j];
//             }
//         }
//     }
// }


// function finalClassSelectorSetter() {
//     for (let i = 0; i < listOfSubClasses.length; i++) {
//         if (subClassSelector.value === listOfSubClasses[i]) {
//             for (let j = 0; j < 3; j++) {
//                 finalClassSelectorOptions[j].innerHTML = listOfSubClassFinalClasses[i][j];
//                 finalClassSelectorOptions[j].value = listOfSubClassFinalClasses[i][j];
//                 finalClassSelectables[j].innerHTML = listOfSubClassFinalClasses[i][j];
//             }
//         }
//     }
// }


// function selectorSetter() {
//      subClassSelectorSetter();
//      finalClassSelectorSetter();
// }


// function attributeSetter(i) {
//     for (i; i < listOfSelectors.length; i++) {
//         for (let j = 0; j < listOfSelectableLists[i].length; j++) {
//             if (listOfSelectors[i].value === listOfSelectableLists[i][j]) {
//                 if (listOfSelectors[i] === listOfSelectors[0]) {
//                     raceElement.innerHTML = 'Element: ' + listOfAttributeLists[i][j].element;
//                 }
//                 strengthAttributes[i].innerHTML = 'Strength: ' + listOfAttributeLists[i][j].strength;
//                 intellectAttributes[i].innerHTML = 'Intellect: ' + listOfAttributeLists[i][j].intellect;
//                 dexterityAttributes[i].innerHTML = 'Dexterity: ' + listOfAttributeLists[i][j].dexterity;
//                 if (i < listOfSelectors.length - 1) {
//                     i++;
//                     attributeSetter(i);
//                 }
//             }
//         }
//     }
// }


// function eventListenersOnFire() {
//     for (let selector of listOfSelectors) {
//         selector.addEventListener('change', function () {
//             selectorSetter();
            // let index = 0;
            // attributeSetter(index);
//         })
//     }
// }
//
//
// eventListenersOnFire();


// ########################################## API VERSION STARTS HERE #################################################


// let mainClassSelector = document.querySelector('.main-class-selector');
// let subClassSelector = document.querySelector('.sub-class-selector');
// let subClassSelectorOptions = document.querySelectorAll('.sub-class-selector-option');
// let subClassSelectables = document.querySelectorAll('.sub-class-selectables');
// let finalClassSelector = document.querySelectorAll('.final-class-selector');
// let finalClassSelectorOptions = document.querySelectorAll('.final-class-selector-option');
// let finalClassSelectables = document.querySelectorAll('.final-class-selectables');
// let strengthAttributes = document.querySelectorAll('.strength-attribute');
// let intellectAttributes = document.querySelectorAll('.intellect-attribute');
// let dexterityAttributes = document.querySelectorAll('.dexterity-attribute');
//
//
// mainClassSelector.addEventListener('change', subClassChange);
// subClassSelector.addEventListener('change', finalClassChange);
// finalClassSelector.addEventListener('change', );
//
//
// function subClassSelectorSetter(subclasses) {
//     for (let i = 0; i < subclasses.length; i++) {
//         subClassSelectorOptions[i].innerHTML = subclasses[i];
//         subClassSelectorOptions[i].value = subclasses[i];
//         subClassSelectables[i].innerHTML = subclasses[i];
//     }
// }
//
//
// function finalClassSelectorSetter(finalclasses) {
//     for (let i = 0; i < finalclasses.length; i++) {
//         finalClassSelectorOptions[i].innerHTML = finalclasses[i];
//         finalClassSelectorOptions[i].value = finalclasses[i];
//         finalClassSelectables[i].innerHTML = finalclasses[i];
//     }
// }
//
//
// function subClassAttributeSetter(attributes) {
//     let subClassSelector = document.querySelector('.sub-class-selector');
//     for (let i = 0; i < attributes.length; i++) {
//         if (subClassSelector.value === attributes[i].name) {
//             strengthAttributes[2].innerHTML = 'Strength: ' + attributes[i].strength;
//             intellectAttributes[2].innerHTML = 'Intellect: ' + attributes[i].intellect;
//             dexterityAttributes[2].innerHTML = 'Dexterity: ' + attributes[i].dexterity;
//         }
//     }
// }
//
//
// function finalClassAttributeSetter(attributes) {
//     let finalClassSelector = document.querySelector('.final-class-selector');
//     for (let i = 0; i < attributes.length; i++) {
//         if (finalClassSelector.value === attributes[i].name) {
//             strengthAttributes[3].innerHTML = 'Strength: ' + attributes[i].strength;
//             intellectAttributes[3].innerHTML = 'Intellect: ' + attributes[i].intellect;
//             dexterityAttributes[3].innerHTML = 'Dexterity: ' + attributes[i].dexterity;
//         }
//     }
// }
//
//
// function mainClassAbilitySetter(abilities) {
//     let mainClassAbilities = document.querySelectorAll('.ability');
//     for (let i = 0; i < abilities.length; i++) {
//
//     }
// }
//
//
// async function subClassChange(event) {
//     const response = await fetch('/selector-data/' + event.target.value);
//     const fetchedData = await response.json();
//     let subClassList = [];
//     for (let subClass of fetchedData.sub_classes_data) {
//         subClassList.push(subClass.name);
//     }
//     subClassSelectorSetter(subClassList);
//     finalClassChangeFromMain(subClassList[0]);
//     subClassAttributeSetter(fetchedData.sub_classes_data);
//     mainClassAbilitySetter(fetchedData.main_class_abilities);
// }
//
//
// async function finalClassChange(event) {
//     const responseForFinalClasses = await fetch('/selector-data/' + event.target.value);
//     const subClass = await responseForFinalClasses.json();
//     const responseForSubclasses = await fetch('/selector-data/' + event.target.value);
//     const mainClass = await responseForSubclasses.json();
//     let finalClassList = [];
//     for (let finalClass of subClass.final_classes_data) {
//         finalClassList.push(finalClass.name);
//     }
//     finalClassSelectorSetter(finalClassList);
//     subClassAttributeSetter(mainClass.sub_classes_data);
//     finalClassAttributeSetter(subClass.final_classes_data);
// }
//
//
// async function finalClassChangeFromMain(name) {
//     const response = await fetch('/final-classes/' + name);
//     const subClass = await response.json();
//     let finalClassList = [];
//     for (let finalClass of subClass.final_classes_data) {
//         finalClassList.push(finalClass.name);
//     }
//     finalClassSelectorSetter(finalClassList);
//     finalClassAttributeSetter(subClass.final_classes_data);
// }


// ############################################## STRUCTURE ADAPTED ####################################################


let subClassSelectorOptions = document.querySelectorAll('.sub-class-selector-option');
let subClassSelectables = document.querySelectorAll('.sub-class-selectables');
let finalClassSelectorOptions = document.querySelectorAll('.final-class-selector-option');
let finalClassSelectables = document.querySelectorAll('.final-class-selectables');
let strengthAttributes = document.querySelectorAll('.strength-attribute');
let intellectAttributes = document.querySelectorAll('.intellect-attribute');
let dexterityAttributes = document.querySelectorAll('.dexterity-attribute');


function eventListenersOnFire() {
    let mainClassSelector = document.querySelector('.main-class-selector');
    let subClassSelector = document.querySelector('.sub-class-selector');
    let finalClassSelector = document.querySelectorAll('.final-class-selector');
    let listOfClassSelectors = [mainClassSelector, subClassSelector, finalClassSelector];
    for (let selector of listOfClassSelectors) {
        selector.addEventListener('change', makeApiCall)
    }
}


async function makeApiCall(event) {
    const response = await fetch('/selector-data/' + event.target.value);
    const classJsonData = await response.json();
    changeSelectorsAndAttributes(classJsonData);
}


function changeSelectorsAndAttributes(classJsonData) {
    let subClassesData = classJsonData.sub_classes_data;
    let subClassList = [];
    for (let subClass of classJsonData.sub_classes_data) {
        subClassList.push(subClass.name);
    }
    let finalClassData = classJsonData.final_classes_data;

    subClassSelectorSetter(subClassesData);
    finalClassSelectorSetter(finalClassData);
    subClassAttributeSetter(subClassesData);
    mainClassAttributeSetter(classJsonData.main_classes_data);
    finalClassAttributeSetter(finalClassData);
    finalClassSetterFromMain(subClassList[0]);
    mainClassAbilitySetter(classJsonData.main_class_abilities);
}


async function finalClassSetterFromMain(className) {
    const response = await fetch('/selector-data/' + className);
    const classJsonData = await response.json();
    let finalClassData = classJsonData.final_classes_data;

    finalClassSelectorSetter(finalClassData);
    finalClassAttributeSetter(finalClassData);
}


function subClassSelectorSetter(subClassList) {
    for (let i = 0; i < subClassList.length; i++) {
        subClassSelectorOptions[i].innerHTML = subClassList[i].name;
        subClassSelectorOptions[i].value = subClassList[i].name;
        subClassSelectables[i].innerHTML = subClassList[i].name;
    }
}


function finalClassSelectorSetter(finalClassList) {
    for (let i = 0; i < finalClassList.length; i++) {
        finalClassSelectorOptions[i].innerHTML = finalClassList[i].name;
        finalClassSelectorOptions[i].value = finalClassList[i].name;
        finalClassSelectables[i].innerHTML = finalClassList[i].name;
    }
}


function mainClassAttributeSetter(attributes) {
    let mainClassSelector = document.querySelector('.main-class-selector');
    for (let i = 0; i < attributes.length; i++) {
        if (mainClassSelector.value === attributes[i].name) {
            strengthAttributes[1].innerHTML = 'Strength: ' + attributes[i].strength;
            intellectAttributes[1].innerHTML = 'Intellect: ' + attributes[i].intellect;
            dexterityAttributes[1].innerHTML = 'Dexterity: ' + attributes[i].dexterity;
        }
    }
}


function subClassAttributeSetter(attributes) {
    let subClassSelector = document.querySelector('.sub-class-selector');
    for (let i = 0; i < attributes.length; i++) {
        if (subClassSelector.value === attributes[i].name) {
            strengthAttributes[2].innerHTML = 'Strength: ' + attributes[i].strength;
            intellectAttributes[2].innerHTML = 'Intellect: ' + attributes[i].intellect;
            dexterityAttributes[2].innerHTML = 'Dexterity: ' + attributes[i].dexterity;
        }
    }
}


function finalClassAttributeSetter(attributes) {
    let finalClassSelector = document.querySelector('.final-class-selector');
    for (let i = 0; i < attributes.length; i++) {
        if (finalClassSelector.value === attributes[i].name) {
            strengthAttributes[3].innerHTML = 'Strength: ' + attributes[i].strength;
            intellectAttributes[3].innerHTML = 'Intellect: ' + attributes[i].intellect;
            dexterityAttributes[3].innerHTML = 'Dexterity: ' + attributes[i].dexterity;
        }
    }
}


function mainClassAbilitySetter(abilities) {
    let mainClassAbilities = document.querySelectorAll('.main-class-ability');
    for (let i = 0; i < abilities.length; i++) {
        mainClassAbilities[i].innerHTML = abilities[i].name;
    }
}


eventListenersOnFire();

