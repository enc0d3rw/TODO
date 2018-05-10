'use strict';
(function () {
    // Функция удаляет элементы (задачи)
    window.removeTask = function (elem) {
        var taskIndexForRemove = elem.id; // Получаем ID удаляемой задачи
        taskIndexForRemove = Number(taskIndexForRemove);
        var list = window.getData(window.Config.Data.OBJECT_NAME);
        var listName = window.Config.Data.ITEM_NAME;
        
        list[listName] = list[listName].filter(function (element) {
            return element.id !== taskIndexForRemove;
        });
        
        //Если это была последняя задача то мы полностью чистим все
        if (list[listName].length === 0) {
            localStorage.clear();
            window.renderTasks();
            return;
        }

        window.saveList(list, false); //Перезаписываем список задач
        window.renderTasks(); // После удаления заново отрисовываем список задач
    };
})();
