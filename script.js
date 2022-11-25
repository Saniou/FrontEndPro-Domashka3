
const yearOfBirth = prompt('В якому році ви народились?');
let yearValue = '';

switch (true) {
    case isNaN(+yearOfBirth):
        console.log('це не число(((');
        // yearValue = ('це не число(((');
        break;
    }

switch (yearOfBirth) {    
    case '':
        yearValue = 'Пусто...';
        break;
    case null:
        yearValue = 'Шкода, що Ви не захотіли ввести свій вік';
        break;
    default:
        yearValue = `Ваш вік: ${2022 - yearOfBirth}`;
    }
    
const city = prompt('В якому місці ви проживаєте?');
console.log(city);

let cityValue = '';

switch (city) {    
    case '':
        cityValue = 'Пусто...';
        break;
    case null:
        cityValue = 'Шкода, що Ви не захотіли ввести своє місто';
        break;
    case 'Київ':
        cityValue = 'Ти живеш у столиці України';
        break;
    case 'Париж':
        cityValue = 'Ти живеш у столиці Франції';
        break;
    case 'Вашингтон':
        cityValue = 'Ти живеш у столиці Сплучених Штатів Америки';
        break;
    default:
        cityValue = `Ти живеш у місці ${city}`
    }

const sport = prompt('Який ваш улюблений вид спорту?');
console.log(sport)

let sportValue = '';

switch (sport) {    
    case '':
        sportValue = 'Пусто...';
        break;
    case null:
        sportValue = 'Шкода, що Ви не захотіли ввести свій вид спорту';
        break;
    case 'Футбол':
        sportValue = 'Круто! Хочеш стати як Луі Суарес!?';
        break;
    case 'Баскетбол':
        sportValue = 'Круто! Хочеш стати як Джеймс Леброн!?';
        break;
    case 'Теніс':
        sportValue = 'Круто! Хочеш стати як Роджер Федерер!?';
        break;
    default:
        sportValue = `Круто! ${sport} гарний вибір`
    }

alert(`${yearValue} \n${cityValue},\n${sportValue}`)