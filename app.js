// 1. Находим чекбокс на странице по его id
const toggleCheckbox = document.getElementById('diff-toggle');

// 2. Находим все строки таблицы
const allRows = document.querySelectorAll('#table-body tr');

// 3. Добавляем слежку за изменением состояния чекбокса
toggleCheckbox.addEventListener('change', function () {

    // Сохраняем true (галочка стоит) или false (галочки нет)
    const isChecked = toggleCheckbox.checked;

    // 4. Проходимся по каждой строке таблицы
    for (let i = 0; i < allRows.length; i++) {
        const currentRow = allRows[i];

        // Берем значение атрибута data-same у текущей строки
        const sameAttribute = currentRow.getAttribute('data-same');

        // Проверяем: если эта фича одинаковая во всех 3-х тарифах
        if (sameAttribute === 'true') {

            // Если галочка стоит — скрываем строку
            if (isChecked === true) {
                currentRow.classList.add('hidden');
            }
            // Если галочки нет — показываем строку обратно
            else {
                currentRow.classList.remove('hidden');
            }

        }
    }

});