'use strict';
(function() {
    // Функция сохраняет объект с данными в localStorage
    // list объект с уже имеющимся данными в который добавляется новая задача newTask
    window.saveList = function (list, newTask) {
        if (newTask) {
            var listLength = list.tasks.length;
        
            if (listLength === 0) {
                id = 0;
            } else {
                var id = list.tasks[listLength - 1].id;
                id++;
            }
            list.tasks.push({'id': id, 'text': newTask});
        }
            
        localStorage.setItem('list', JSON.stringify(list));
    };
})();
