let students = [];

const form = document.getElementById('studentForm');
const button = document.getElementById('Btn');

const errorFirstname = document.querySelector('.errorFirstname');
const errorLastname = document.querySelector('.errorLastname');
const errorBirthday = document.querySelector('.errorBirthday');
const errorStartYear = document.querySelector('.errorStartYear');
const errorFaculty = document.querySelector('.errorFaculty');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const middleName = document.getElementById('middleName').value.trim();
    const birthDateValue = document.getElementById('birthday').value;
    const startYear = parseInt(document.getElementById('startYear').value);
    const faculty = document.getElementById('faculty').value.trim();

    const birthDate = new Date(birthDateValue);
    const today = new Date();
    const minDate = new Date('1900-01-01');

    errorFirstname.textContent = '';
    errorLastname.textContent = '';
    errorBirthday.textContent = '';
    errorStartYear.textContent = '';
    errorFaculty.textContent = '';

    let isValid = true;

    if (firstName === "") {
        errorFirstname.textContent = 'Введите имя';
        isValid = false;
    }

    if (lastName === "") {
        errorLastname.textContent = 'Введите фамилию';
        isValid = false;
    }

    if (birthDateValue === "") {
        errorBirthday.textContent = 'Введите дату рождения';
        isValid = false;
    }

    if (isNaN(startYear)) {
        errorStartYear.textContent = 'Введите год начала обучения';
        isValid = false;
    }

    if (faculty === "") {
        errorFaculty.textContent = 'Введите факультет';
        isValid = false;
    }

    if (birthDateValue !== "") {

        if (birthDate < minDate) {
            errorBirthday.textContent = 'Дата рождения должна быть после 01.01.1900';
            isValid = false;
        }
        if (birthDate > today) {
            errorBirthday.textContent = 'Дата рождения не может быть в будущем';
            isValid = false;
        }
    }

    if (!isNaN(startYear)) {
        const today = new Date();

        if (startYear < 2000) {
            errorStartYear.textContent = 'Год начала обучения не может быть раньше 2000г';
            isValid = false;
        }
        if (startYear > today.getFullYear()) {
            errorStartYear.textContent = 'Год начала обучения не может быть в будущем';
            isValid = false;
        }
    }

    if (isValid) {

        const student = {
            firstName,
            lastName,
            middleName,
            birthDate,
            startYear,
            faculty
        };

        students.push(student)
        console.log('Студент добавлен: ', students);

        form.reset();
        alert('Студент успешно добавлен!');
    }
});

