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
        var taskListData  = window.getData(window.Config.Data.OBJECT_NAME); // Получаем объект с данными из localStorage
        var item = window.Config.Data.ITEM_NAME; // Получаем имя нужного нам массива с данными в объекте window.Config.Data.OBJECT_NAME

        if (taskListData && taskListData[item].length !== 0) {
            taskListData[item].reverse();
            emptyList.classList.add('hidden');

            // Функция добавляет данные HTML а замем в Fragment
            var renderHTML = function (element) {
                btnRemove.id = element.id;
                taskText.textContent = element.text;
                var taskElement = templateTaks.cloneNode(true);
                fragment.appendChild(taskElement);
            };

            taskListData[item].map(renderHTML);
            
        } else {
            emptyList.classList.remove('hidden');
            return;
        }

        // Вставляем DocumentFragment со всеми задачами в HTML
        taskList.appendChild(fragment);
    };

    window.renderTasks();
})();
