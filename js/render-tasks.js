'use strict';
(function () {
    // Функция рендерит весь список
    window.renderTasks = function () {
        var taskList = document.querySelector('.task-list'); // Место для вставки списка
        var emptyList = document.querySelector('.empty-list'); // Блок который выводится если список пустой
        var templateTaks = document.querySelector('#task-list-item').content; // Шаблон задачи по которому будем выводить элементы
        var taskText = templateTaks.querySelector('.task-text'); // Место для вставки текса задачи
        var btnRemove = templateTaks.querySelector('.btn-remove');  // Кнопка с id для удаления задачи
        
        taskList.textContent = ''; // Очищаем список, для отрисовки с 0

        // Вставляем наши элементы в HTML
        var renderTask = function () {
            var taskElement = templateTaks.cloneNode(true);
            taskList.appendChild(taskElement);
        };

        // Заполняем HTML шаблон данными
        var initTask = function () {
            var taskListData  = window.getData(); // Получаем данные из localStorage
            if (taskListData && taskListData.tasks.length !== 0) {
                taskListData.tasks.reverse();
                emptyList.classList.add('hidden');
                taskListData.tasks.forEach(function (element) {
                    taskText.textContent = element.text;
                    btnRemove.id = element.id;
                    renderTask();
                });
                
            } else {
                emptyList.classList.remove('hidden');
            }
        };

        initTask();
    };

    window.renderTasks();
})();
