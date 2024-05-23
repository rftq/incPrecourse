// alert('hello');



/*
const h1Element = document.createElement('h1');
h1Element.append('Hello from it-incubator');
document.body.append(h1Element);
*/




/*
// Создание элемента заголовка (h1) и добавление текста к этому элементу 
const titleElement = document.createElement('h1');
titleElement.append('Hello from it-incubator');

// Добавление элемента заголовка в тело документа 
document.body.append(titleElement);

// Создание выпадающего списка (select) 
const techSelectElement = document.createElement('select');

// Создание первого варианта (option) для выпадающего списка 
const techSelectOption0Element = document.createElement('option');
techSelectOption0Element.value = 1;
techSelectOption0Element.append('JS'); // Добавление текста 'JS' к первому варианту 
techSelectElement.append(techSelectOption0Element); // Добавление первого варианта в выпадающий список 

// Создание второго варианта (option) для выпадающего списка 
const techSelectOption1Element = document.createElement('option');
techSelectOption1Element.value = 2;
techSelectOption1Element.append('HTML'); // Добавление текста 'HTML' ко второму варианту 
techSelectElement.append(techSelectOption1Element); // Добавление второго варианта в выпадающий список 

// Добавление второго варианта в тело документа (вместо этого, вероятно, предполагалось добавить сам выпадающий список) 
document.body.append(techSelectElement);
*/


// data
// const title = 'it-incubator';
// const graduatesCount = 2000;
// const areYouChampion = true;
// // render
// let pageTitleElement = document.createElement('h1');
// pageTitleElement.innerText = title;
// document.body.append(pageTitleElement);
// let graduatesCountElement = document.createElement('input');
// graduatesCountElement.value = graduatesCount;
// document.body.append(graduatesCountElement);
// let areYouChampionElement = document.createElement('input');
// areYouChampionElement.type = 'checkbox';
// areYouChampionElement.checked = areYouChampion;
// document.body.append(areYouChampionElement);





// data
const info = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true,
    technologies: [
        { title: 'Front' },
        { title: 'Back' },
        { title: 'DevOps' }
    ]
}


const info2 = {
    title: 'it-incubator',
    graduatesCount: 2000,
    areYouChampion: true
}

// render
let pageTitleElement = document.createElement('h1');
pageTitleElement.innerText = info.title;
document.body.append(pageTitleElement);

let graduatesCountElement = document.createElement('input');
graduatesCountElement.value = info.graduatesCount;
document.body.append(graduatesCountElement);

let areYouChampionElement = document.createElement('input');
areYouChampionElement.type = 'checkbox';
areYouChampionElement.checked = info.areYouChampion;
document.body.append(areYouChampionElement);



let techSelectElement = document.createElement('select');

let techSelectOptions0Element = document.createElement('option');
techSelectOptions0Element.append(info.technologies[0].title);

let techSelectOptions1Element = document.createElement('option');
techSelectOptions1Element.append(info.technologies[1].title);

let techSelectOptions2Element = document.createElement('option');
techSelectOptions2Element.append(info.technologies[2].title);

techSelectElement.append(techSelectOptions0Element, techSelectOptions1Element, techSelectOptions2Element);

document.body.append(techSelectElement);