'use strict';
(function () {
    // Функция удаляет элементы (задачи)
    window.removeTask = function (elem) {
        var taskIndexForRemove = elem.id; // Получаем ID удаляемой задачи
        taskIndexForRemove = Number(taskIndexForRemove);
        var list = window.getData();
        var updatedList = [];
        
        // Ищем задачу и удаляем ее
        list.tasks.forEach(function (element) {
            if (element.id !== taskIndexForRemove) {
                updatedList.push(element);
            }
        });

        list.tasks = updatedList;
        
        // Если это была последняя задача то мы полностью чистим все
        if (list.tasks.length === 0) {
            list = null;
            localStorage.clear();
            window.renderTasks();
            return;
        }

        window.saveList(list, false); //Перезаписываем список задач
        window.renderTasks(); // После удаления заново отрисовываем список задач
    };
})();
