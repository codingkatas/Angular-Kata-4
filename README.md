Angular-Kata-4

This kata will be about using the $resource service to help with REST services.
The goal in this kata is to replace the static data in the TodoService with data from a RESTful backend.
There is a REST service, which has been created using JEE6 and JBoss RESTEasy, in the class

codingkatas.service.TodoService

The URL to the service is

http://localhost:8080/Angular-Kata-4/rest/Todo

It will return 3 instances of Todos (actually, the same as before, only they are not static anymore)

In AngularJS it is very easy to enable a RESTful backend.
To start with you must include the angular-resource.min.js file in the index.html.
Then inject the module in the app.js, using the form

var kataModule = angular.module('Kata', ['ngResource']);

Notice that the dependency module is named 'ngResource'.

Now you have $resource service available in the application.
Inject the $resource service in the TodoService. Use the form

kataModule.factory('TodoService', ['$resource', function ($resource) {
    return [THE_SERVICE];
}]);

Delete all the code in the TodoService method and just let it return

$resource('rest/Todo')

In the TodoListController you must use the 'query()' method of the $resource service, which is now wrapped in
the TodoService. The wrapping is done to encapsulate the REST backend and make it easier to reuse across the app.
E.g. you can now just inject 'TodoService' in the controller and call 'TodoService.query()'. Assign the returned values
to '$scope.todos'.

When you are ready, click the test link



