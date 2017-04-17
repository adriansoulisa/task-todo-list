
"use strict";

var saveToLocalStorage = function saveToLocalStorage(task) {
    localStorage('task', JSON.stringify(task));
};

    new Vue({
        
            el: "#todo",
            
            data: {
                newTask: "",
                tasks: [
                    
                ],

            },

        methods: {

            addTask: function () {
                var task = this.newTask.trim();
                if (task) {
                    this.tasks.push({text: task, checked: false});
                    this.newTask = "";
                }
            },

            removeTask: function (task) {
        var index = this.tasks.indexOf(task);
                this.tasks.splice(index, 1);
            },
            endEditing: function (task) {
                this.editingTask = {};
                if (task.text.trim() == ""){
                    this.removeTask(task);
                }
                
            },
            clearList: function () {
                this.tasks = [

                ];
            },

            selectAll: function (task) {
                var targetValue = this.areAllSelected ? false : true;
                for (var i = 0; i < this.tasks.length; i++) {
                    this.tasks[i].checked = targetValue;
                }
            },

            check: function (task) {
                task.checked = true;
            },

            isChecked: function (task) {
                return task.checked;
            }
        }
    });
