'use strict';
(function () {
    var addTaskBtn = document.querySelector('.add-task'); // Кнопка добавления задачи

    // Функция проверяет валидность элемента
    var checkInput = function (newTask) {
        if (newTask.length === 0) {
            return 'Введите текст для новой задачи!';
        } else if (newTask.length < 2) {
            return 'Минимальная длина 2 символа!';
        }
        return '';
    };

    var addNewTaskHandler = function (evt) {
        evt.preventDefault();
        var taskInput = document.querySelector('.task-value'); // Получаем значения input'a с задачей
        var newTask = taskInput.value;
        var error_msg = checkInput(newTask);
        var alert = document.querySelector('.alert'); // Место для вывода ошибок если валидация не прошла

        if (error_msg) {
            alert.textContent = error_msg;
            alert.classList.remove('hidden');
            return;
        } else {
            alert.classList.add('hidden');
        }

        var list = window.getData(window.Config.Data.OBJECT_NAME);
        
        window.saveList(list, newTask); // Функция сохраняет данные в localStorage
        taskInput.value = '';
        window.renderTasks(); // После добавления в localStorage заново отрисовываем список задач 
    };

    // Добавляем задачу
    addTaskBtn.addEventListener('click', addNewTaskHandler);
})();
