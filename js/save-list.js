'use strict';
(function() {
    // Функция сохраняет объект с данными в localStorage
    // list объект с уже имеющимся данными в который добавляется новая задача newTask
    window.saveList = function (list, newTask) {
        var item = window.Config.Data.ITEM_NAME; // Получаем имя элемента с массивом данными
        if (newTask && typeof list === 'object') {
            var listLength = list[item].length;
        
            if (listLength === 0) {
                id = 0;
            } else {
                var elem = list[item];
                var id = elem[listLength - 1].id;
                id++;
            }
            list[item].push({'id': id, 'text': newTask});
        }
            
        localStorage.setItem(window.Config.Data.OBJECT_NAME, JSON.stringify(list));
    };
})();
