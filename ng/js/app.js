// AngularJS App.js for handling the total one-page-app

(function() {
    
    // declare the app
    var app = angular.module('myport', []);
    
    // new directive
    app.directive('items', function() {
        return {
            restrict: 'E',
            templateUrl: 'items.html',
            controller: function() {
                // the items
                this.items = myitems;
                
                // type
                this.showType = function(type) {
                    switch(type) {
                        case 1:
                            return 'width-and-small';
                            break;
                        case 2:
                            return 'width-and-long';
                            break;
                        case 3:
                            return 'width-and-big';
                            break;
                        case 4:
                            return 'width-and-height';
                            break;
                    }
                };
                
                // filter
                this.showFilter = function(filter) {
                    var str = '';
                    
                    for(var i = 0; i < filter.length; i++) {
                        str += ' filter_' + filter [i];
                    }
                    
                    return str;
                };
            },
            // let the controller be 'item'
            controllerAs: 'item'
        };
    });
    
    // info controller
    app.controller('InfoController', function() {
        // the author name
        this.author = author;
        // the logo text
        this.logo = logo;
    });
    
})();