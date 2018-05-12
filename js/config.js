'use strict';
(function () {
    // Описываем имена данных которые мы будем сохранять в localStorage
    window.Config = {
        Data: {
            OBJECT_NAME: 'list', // Имя объекта который сохранен в localStorage
            ITEM_NAME: 'tasks' // Имя массива со списком данных
        },
        KeyCode: {
            ENTER: 13, // Код клавиши Enter
            ESC: 27 // Код клавиши ESC
        }
    };
})();
