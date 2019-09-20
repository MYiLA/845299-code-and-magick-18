'use strict';
var wizardsNumber = 4;
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

document.querySelector('.setup-similar').classList.remove('hidden');

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_NAMES = [];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var generateRandomId = function (arr) {
  var index = Math.round(Math.random() * (arr.length - 1));
  return index;
};

var wizards = [];

for (var j = 0; j < NAMES.length; j++) {
  var randomName = generateRandomId(NAMES);
  var randomSurname = generateRandomId(SURNAMES);
  WIZARD_NAMES [j] = NAMES[randomName] + ' ' + SURNAMES[randomSurname];
}

for (var a = 0; a < wizardsNumber; a++) {
  wizards[a] = {
    name: WIZARD_NAMES[a],
    coatColor: COAT_COLORS[generateRandomId(COAT_COLORS)],
    eyesColor: EYES_COLORS[generateRandomId(EYES_COLORS)]
  };
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
