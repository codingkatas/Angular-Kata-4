/*jslint browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : false
 */
/*global namespace, log, window, angular, kata, kataModule */

namespace('kata.service');
kata.service.TodoService = function () {
    var getTodoList = function() {
        var list = [
            {
                subject:'Take the dishes',
                done:false
            },
            {
                subject:'Do my homework',
                done:false
            },
            {
                subject:'Cook dinner',
                done:false
            }
        ];

        return list;
    };

    return {
        getTodoList : getTodoList
    };
};

/*
Inject the $resource service into this service. Follow the description in the README.MD file.
To make the point of how AngularJS can help reduce code, be sure to delete ALL the code you do not need anymore
 */
kataModule.factory('TodoService', function () {
    var theService = kata.service.TodoService();
    return theService;
});
