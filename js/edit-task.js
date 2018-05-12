'use strict';
(function () {
        // Функция редактирует задачу
        window.editTask = function (elem) {
            var id = elem.id;
            var textArea = document.querySelector('.task-edit-area').value;
            var errorMsg = window.checkInput(textArea);
            if (errorMsg) {
                var editAlert = document.querySelector('.edit-alert');
                editAlert.classList.remove('hidden');
                editAlert.textContent = errorMsg;
                return;
            }

            document.removeEventListener('keydown', window.onEditEscPress);
            var list = window.getData(window.Config.Data.OBJECT_NAME);
            var item = window.Config.Data.ITEM_NAME;
            list[item] = list[item].filter(function (element) {
                if (element.id === Number(id)) {
                    element.text = textArea;
                }
                return element;
            });
            
            window.saveList(list);
            window.renderTasks();
    };
})();
