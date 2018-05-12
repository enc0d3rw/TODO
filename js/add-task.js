'use strict';
(function () {
    var addTaskBtn = document.querySelector('.add-task'); // Кнопка добавления задачи

    // Функция проверяет валидность элемента
    window.checkInput = function (newTask) {
        if (newTask.length === 0) {
            return 'Поле не может быть пустым!';
        } else if (newTask.length < 2) {
            return 'Минимальная длина 2 символа!';
        }
        return '';
    };

    var addNewTaskHandler = function (evt) {
        evt.preventDefault();
        var taskInput = document.querySelector('.task-value'); // Получаем значения input'a с задачей
        var newTask = taskInput.value;
        var error_msg = window.checkInput(newTask);
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
