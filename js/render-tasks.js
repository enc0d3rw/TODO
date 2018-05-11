'use strict';
(function () {
    var taskList = document.querySelector('.task-list'); // Место для вставки списка
    var emptyList = document.querySelector('.empty-list'); // Блок который выводится если список пустой
    var templateTaks = document.querySelector('#task-list-item').content; // Шаблон задачи по которому будем выводить элементы
    var taskText = templateTaks.querySelector('.task-text'); // Место для вставки текса задачи
    var btnRemove = templateTaks.querySelector('.btn-remove');  // Кнопка с id для удаления задачи

    // Функция рендерит весь список
    window.renderTasks = function () {
        taskList.textContent = ''; // Очищаем список, для отрисовки с 0

        var fragment = document.createDocumentFragment(); // Создаем фрагмент документа
        // Вставляем наши элементы в Fragment
        var insertInFragment = function () {
            var taskElement = templateTaks.cloneNode(true);
            fragment.appendChild(taskElement);
        };

        var taskListData  = window.getData(window.Config.Data.OBJECT_NAME); // Получаем объект с данными из localStorage
        var item = window.Config.Data.ITEM_NAME; // Получаем имя нужного нам массива с данными в объекте window.Config.Data.OBJECT_NAME
        if (taskListData && taskListData[item].length !== 0) {
            taskListData[item].reverse();
            emptyList.classList.add('hidden');
            taskListData[item].forEach(function (element) {
                taskText.textContent = element.text;
                btnRemove.id = element.id;
                insertInFragment();
            });
            
        } else {
            emptyList.classList.remove('hidden');
            return;
        }

        // Вставляем DocumentFragment со всеми задачи в HTML
        taskList.appendChild(fragment);
    };

    window.renderTasks();
})();
