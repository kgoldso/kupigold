document.addEventListener("DOMContentLoaded", function () {
    function updateTimer() {
        // Установим новую дату окончания акции
        const endDate = new Date("2023-12-01T23:59:59").getTime();

        // Обновим таймер каждую секунду
        const timerInterval = setInterval(function () {
            const now = new Date().getTime();
            const distance = endDate - now;

            if (distance < 0) {
                // Акция закончилась, установим новую дату окончания акции через 24 часа
                clearInterval(timerInterval);
                endDate = new Date(now + 24 * 60 * 60 * 1000).getTime();
            }

            // Рассчитаем оставшееся время
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Выведем таймер
            document.getElementById("timer").innerHTML =
                days + "д " + hours + "ч " + minutes + "м " + seconds + "с ";
        }, 1000);
    }

    // Вызовем функцию для первоначальной установки таймера
    updateTimer();
});

document.addEventListener('DOMContentLoaded', function () {
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');

    openModalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');

    openModalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            modal.style.display = 'flex';
            document.body.classList.add('modal-open');
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const modal = document.getElementById('myModal');
    const closeBtn = document.querySelector('.close');
    const numberInput = document.getElementById('numberInput');
    const submitBtn = document.getElementById('submitBtn');
    const savedValueText = document.getElementById('savedValueText');

    let selectedValue; // Переменная для хранения выбранного значения

    openModalButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            selectedValue = button.getAttribute('data-value');
            modal.style.display = 'flex';
            document.body.classList.add('modal-open');

            // Отображаем сохраненное значение под текстовым полем
            savedValueText.innerHTML = `К оплате ${selectedValue}₽`;
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    submitBtn.addEventListener('click', function () {
        // Тут можно добавить логику обработки введенного числа
        const enteredNumber = numberInput.value;
        // ...

        // Очищаем поле ввода и скрываем сохраненное значение
        numberInput.value = '';
        savedValueText.textContent = '';

        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        }
    });
});


