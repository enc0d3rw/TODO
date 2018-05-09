'use strict';
(function () {
    // Функция возвращает полученные данные из localStorage
    // или false если данных нету
    window.getData = function () {
        var allTasks = localStorage.getItem('list');
        if (allTasks) {
            var list = JSON.parse(allTasks);
            return list;
        }

        return false;
    };
})();
