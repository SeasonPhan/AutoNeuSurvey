const textAreas = document.querySelectorAll('textarea.txtAnswer');
const fillString = " ";
textAreas.forEach(textArea => {
  textArea.value = fillString;
});

const radioGroups = document.querySelectorAll('input[type="radio"]');
radioGroups.forEach(radio => {
    const groupName = radio.getAttribute('name');
    const firstOption = document.querySelector(`input[type="radio"][name="${groupName}"]:first-of-type`);
    if (firstOption) {
        firstOption.click();
    }
});

const tableRows = document.querySelectorAll('.questionTable tbody tr');
tableRows.forEach(row => {
    const radioButtons = row.querySelectorAll('input[type="radio"]');
    if (radioButtons.length >= 3) {
        radioButtons[2].click();
    }
});