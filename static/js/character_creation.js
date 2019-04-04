let raceSelector = document.querySelector('.race-selector');
let raceElement = document.querySelector('.element');
let mainClassSelector = document.querySelector('.main-class-selector');
let subClassSelectorOptions = document.querySelectorAll('.sub-class-selector-option');
let subClassSelectables = document.querySelectorAll('.sub-class-selectables');
let subClassSelector = document.querySelector('.sub-class-selector');
let finalClassSelectorOptions = document.querySelectorAll('.final-class-selector-option');
let finalClassSelectables = document.querySelectorAll('.final-class-selectables');
let finalClassSelector = document.querySelector('.final-class-selector');
let strengthAttributes = document.querySelectorAll('.strength-attribute');
let intellectAttributes = document.querySelectorAll('.intellect-attribute');
let dexterityhAttributes = document.querySelectorAll('.dexterity-attribute');


const listOfRaces = ['human', 'orc', 'elf', 'goblin'];
const listOfMainClasses = ['warrior', 'mage', 'rouge'];
const warriorSubClasses = ['hunter', 'soldier', 'mageknight'];
const mageSubClasses = ['mageknight', 'scientist', 'witchdoctor'];
const rougeSubClasses = ['witchdoctor', 'ranger', 'hunter'];
const listOfMainClassSubClasses = [warriorSubClasses, mageSubClasses, rougeSubClasses];
const listOfSubClasses = ['hunter', 'soldier', 'mageknight', 'scientist', 'witchdoctor', 'ranger'];
const hunterFinalClasses = ['fortune hunter', 'assassin', 'renegade'];
const soldierFinalClasses = ['renegade', 'champion', 'guardian'];
const mageknightFinalClasses = ['guardian', 'witcher', 'priest'];
const scientistFinalClasses = ['priest', 'wizard', 'necromancer'];
const witchdoctorFinalClasses = ['necromancer', 'shaman', 'shapeshifter'];
const rangerFinalClasses = ['shapeshifter', 'explorer', 'fortune hunter'];
const listOfSubClassFinalClasses = [hunterFinalClasses, soldierFinalClasses, mageknightFinalClasses,
                                    scientistFinalClasses, witchdoctorFinalClasses, rangerFinalClasses];
const listOfFinalClasses = ['fortune hunter', 'assassin', 'renegade', 'champion', 'guardian', 'witcher',
                            'priest', 'wizard', 'necromancer', 'shaman', 'shapeshifter', 'explorer'];


const humanAttributes = {'element': 'water', 'strength': '2', 'intellect': '2', 'dexterity': '2'};
const orcAttributes = {'element': 'fire', 'strength': '3', 'intellect': '1', 'dexterity': '2'};
const elfAttributes = {'element': 'air', 'strength': '2', 'intellect': '3', 'dexterity': '1'};
const goblinAttributes = {'element': 'earth', 'strength': '1', 'intellect': '2', 'dexterity': '3'};
const listOfRaceAttributes = [humanAttributes, orcAttributes, elfAttributes, goblinAttributes];
const warriorAttributes = {'strength': '4', 'intellect': '0', 'dexterity': '0'};
const mageAttributes = {'strength': '0', 'intellect': '4', 'dexterity': '0'};
const rougeAttributes = {'strength': '0', 'intellect': '0', 'dexterity': '4'};
const listOfMainClassAttributes = [warriorAttributes, mageAttributes, rougeAttributes];
const hunterAttributes = {'strength': '2', 'intellect': '0', 'dexterity': '2'};
const soldierAttributes = {'strength': '4', 'intellect': '0', 'dexterity': '0'};
const mageknightAttributes = {'strength': '2', 'intellect': '2', 'dexterity': '0'};
const scientistAttributes = {'strength': '0', 'intellect': '4', 'dexterity': '0'};
const witchdoctorAttributes = {'strength': '0', 'intellect': '2', 'dexterity': '2'};
const rangerAttributes = {'strength': '0', 'intellect': '0', 'dexterity': '4'};
const listOfSubClassAttributes = [hunterAttributes, soldierAttributes, mageknightAttributes,
                                scientistAttributes, witchdoctorAttributes, rangerAttributes];
const fortunehunterAttributes = {'strength': '1', 'intellect': '0', 'dexterity': '3'};
const assassinAttributes = {'strength': '2', 'intellect': '0', 'dexterity': '2'};
const renegadetAttributes = {'strength': '3', 'intellect': '0', 'dexterity': '1'};
const championAttributes = {'strength': '4', 'intellect': '0', 'dexterity': '0'};
const guardianAttributes = {'strength': '3', 'intellect': '1', 'dexterity': '0'};
const witcherAttributes = {'strength': '2', 'intellect': '2', 'dexterity': '0'};
const priestAttributes = {'strength': '1', 'intellect': '3', 'dexterity': '0'};
const wizardAttributes = {'strength': '0', 'intellect': '4', 'dexterity': '0'};
const necromancerAttributes = {'strength': '0', 'intellect': '3', 'dexterity': '1'};
const shamanAttributes = {'strength': '0', 'intellect': '2', 'dexterity': '2'};
const shapeshifterAttributes = {'strength': '0', 'intellect': '1', 'dexterity': '3'};
const explorerAttributes = {'strength': '0', 'intellect': '0', 'dexterity': '4'};
const listOfFinalClassAttributes = [fortunehunterAttributes, assassinAttributes, renegadetAttributes,
                                    championAttributes, guardianAttributes, witcherAttributes,
                                    priestAttributes, wizardAttributes, necromancerAttributes,
                                    shamanAttributes, shapeshifterAttributes, explorerAttributes];


function mainClassSelectorSetter(callback) {
    mainClassSelector.addEventListener('change', function () {
        for (let i = 0; i < 3; i++) {
            if (mainClassSelector.value === listOfMainClasses[i]) {
                for (let j = 0; j < 3; j++) {
                    subClassSelectorOptions[j].innerHTML = listOfMainClassSubClasses[i][j];
                    subClassSelectorOptions[j].value = listOfMainClassSubClasses[i][j];
                    subClassSelectables[j].innerHTML = listOfMainClassSubClasses[i][j];
                    callback();
                }
            }
        }
    })
}


function subClassSelectorSetter() {
    subClassSelector = document.querySelector('.sub-class-selector');
    for (let i = 0; i < 6; i++) {
        if (subClassSelector.value === listOfSubClasses[i]) {
            for (let j = 0; j < 3; j++) {
                finalClassSelectorOptions[j].innerHTML = listOfSubClassFinalClasses[i][j];
                finalClassSelectorOptions[j].value = listOfSubClassFinalClasses[i][j];
                finalClassSelectables[j].innerHTML = listOfSubClassFinalClasses[i][j];
            }
        }
    }
}


function eventListenerOnSubClassSelector () {
    subClassSelector.addEventListener('change', subClassSelectorSetter)
}


function raceAttributeSetter() {
    raceSelector.addEventListener('change', function () {
        for (let i = 0; i < 4; i++) {
            if (raceSelector.value === listOfRaces[i]) {
                raceElement.innerHTML = 'Element: ' + listOfRaceAttributes[i].element;
                strengthAttributes[0].innerHTML = 'Strength: ' + listOfRaceAttributes[i].strength;
                intellectAttributes[0].innerHTML = 'Intellect: ' + listOfRaceAttributes[i].intellect;
                dexterityhAttributes[0].innerHTML = 'Dexterity: ' + listOfRaceAttributes[i].dexterity;
            }
        }
    })
}


function mainClassAttributeSetter() {
    mainClassSelector.addEventListener('change', function () {
        for (let i = 0; i < 3; i++) {
            if (mainClassSelector.value === listOfMainClasses[i]) {
                strengthAttributes[1].innerHTML = 'Strength: ' + listOfMainClassAttributes[i].strength;
                intellectAttributes[1].innerHTML = 'Intellect: ' + listOfMainClassAttributes[i].intellect;
                dexterityhAttributes[1].innerHTML = 'Dexterity: ' + listOfMainClassAttributes[i].dexterity;
                subClassAttributeSetter()
            }
        }
    })
}


function subClassAttributeSetter() {
    for (let i = 0; i < 6; i++) {
        if (subClassSelector.value === listOfSubClasses[i]) {
            strengthAttributes[2].innerHTML = 'Strength: ' + listOfSubClassAttributes[i].strength;
            intellectAttributes[2].innerHTML = 'Intellect: ' + listOfSubClassAttributes[i].intellect;
            dexterityhAttributes[2].innerHTML = 'Dexterity: ' + listOfSubClassAttributes[i].dexterity;
            finalClassAttributeSetter()
        }
    }
}


function finalClassAttributeSetter() {
    for (let i = 0; i < 12; i++) {
        if (finalClassSelector.value === listOfFinalClasses[i]) {
            strengthAttributes[3].innerHTML = 'Strength: ' + listOfFinalClassAttributes[i].strength;
            intellectAttributes[3].innerHTML = 'Intellect: ' + listOfFinalClassAttributes[i].intellect;
            dexterityhAttributes[3].innerHTML = 'Dexterity: ' + listOfFinalClassAttributes[i].dexterity;
        }
    }
}


function eventListenerOnSubClassAttributeSetter() {
    subClassSelector.addEventListener('change', subClassAttributeSetter)
}


function eventListenerOnFinalClassAttributeSetter() {
    finalClassSelector.addEventListener('change', finalClassAttributeSetter)
}


function attributeSetter() {
    raceAttributeSetter();
    mainClassAttributeSetter();
    eventListenerOnSubClassAttributeSetter();
    eventListenerOnFinalClassAttributeSetter();
}


mainClassSelectorSetter(subClassSelectorSetter);
eventListenerOnSubClassSelector();
attributeSetter();