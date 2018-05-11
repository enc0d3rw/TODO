'use strict';
(function () {
    // Функция возвращает полученные данные из localStorage
    // или объект с пустым массивом для дальнешего заполнения
    window.getData = function (objectName) {
        var itemName = window.Config.Data.ITEM_NAME; // Получаем имя массива данных
        var allTasks = localStorage.getItem(objectName);
        if (allTasks) {
            var list = JSON.parse(allTasks);
            return list;
        }
        
        allTasks = {
            [itemName]: []
        };
        return allTasks;
    };
})();
