// let raceSelector = document.querySelector('.race-selector');
// let raceElement = document.querySelector('.element');
// let mainClassSelector = document.querySelector('.main-class-selector');
let subClassSelectorOptions = document.querySelectorAll('.sub-class-selector-option');
let subClassSelectables = document.querySelectorAll('.sub-class-selectables');
// let subClassSelector = document.querySelector('.sub-class-selector');
let finalClassSelectorOptions = document.querySelectorAll('.final-class-selector-option');
let finalClassSelectables = document.querySelectorAll('.final-class-selectables');
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


function subClassSelectorSetter(subclasses) {
    for (let i = 0; i < subclasses.length; i++) {
        subClassSelectorOptions[i].innerHTML = subclasses[i];
        subClassSelectorOptions[i].value = subclasses[i];
        subClassSelectables[i].innerHTML = subclasses[i];
    }
}


function finalClassSelectorSetter(finalclasses) {
    for (let i = 0; i < finalclasses.length; i++) {
        finalClassSelectorOptions[i].innerHTML = finalclasses[i];
        finalClassSelectorOptions[i].value = finalclasses[i];
        finalClassSelectables[i].innerHTML = finalclasses[i];
    }
}


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






let mainClassSelector = document.querySelector('.main-class-selector');
let subClassSelector = document.querySelector('.sub-class-selector');

mainClassSelector.addEventListener('change', subClassChange);

async function subClassChange(event) {
    const response = await fetch('/sub-classes/' + event.target.value);
    const mainClass = await response.json();
    let subClassList = [];
    for (let subClass of mainClass.sub_classes) {
        subClassList.push(subClass.name)
    }
    // selectorSetter();
    subClassSelectorSetter(subClassList);
    finalClassChangeFromMain(subClassList[0]);
    subClassSelector.addEventListener('change', finalClassChange)
}


async function finalClassChange(event) {
    const response = await fetch('/final-classes/' + event.target.value);
    const subClass = await response.json();
    console.log(subClass);
    let finalClassList = [];
    for (let finalClass of subClass.final_classes) {
        console.log(finalClass.name);
        finalClassList.push(finalClass.name);
    }
    console.log(finalClassList);
    finalClassSelectorSetter(finalClassList);
}


async function finalClassChangeFromMain(name) {
    const response = await fetch('/final-classes/' + name);
    const subClass = await response.json();
    console.log(subClass);
    let finalClassList = [];
    for (let finalClass of subClass.final_classes) {
        console.log(finalClass.name);
        finalClassList.push(finalClass.name);
    }
    console.log(finalClassList);
    finalClassSelectorSetter(finalClassList);
}