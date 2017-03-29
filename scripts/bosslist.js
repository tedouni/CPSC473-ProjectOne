(function(window) {
    'use strict';
    var App = window.App || {};
    var allComments;
    function BossList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    BossList.prototype.getAllComments = function(DataStore){
          DataStore.getAll(function(s){
              allComments = s;
              allComments.forEach(function(item){
                //console.log("this is item " + item.id);
                $("#comments").append("<div><h5>" + item.bossName + " - " + item.bossDepartment + " - Rating:" + item.rating + "</h5>" + item.bossFeedback + "</div>");
              });
          });
    };

    App.BossList = BossList;
    window.App = App;
})(window);
