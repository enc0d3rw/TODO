'use strict';
(function () {
    // Функция проверяет валидность элемента
    var checkInput = function (newTask) {
        if (newTask.length === 0) {
            return 'Поле не должно быть пустым!';
        } else if (newTask.length < 2) {
            return 'Минимальная длина 2 символа!';
        }
        return false;
    };

    // Функция добавляет задачу
    var addTask = function () {
        var taskInput = document.querySelector('.task-value'); // Получаем значения input'a с задачей
        var addTaskBtn = document.querySelector('.add-task'); // Кнопка добавления задачи

        addTaskBtn.addEventListener('click', function (evt) {
            evt.preventDefault();
            var newTask = taskInput.value;
            var error_msg = checkInput(newTask);
            var alert = document.querySelector('.alert'); // Место для вывод ошибок если валидация не прошла
            if (error_msg) {
                alert.textContent = error_msg;
                alert.classList.remove('hidden');
                return;
            } else {
                alert.classList.add('hidden');
            }
            

            var list = window.getData();
            // Если задач нету то мы создаем пустой объект
            if (!list) {
                list = {
                    tasks: []
                };
            }
            window.saveList(list, newTask); // Функция сохраняет данные в localStorage
            taskInput.value = '';
            // После добавления в localStorage заново отрисовываем список задач
            window.renderTasks(); 
        });
    };
    addTask();
})();
