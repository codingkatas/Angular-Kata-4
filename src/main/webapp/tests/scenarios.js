'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Kata 2', function () {

    beforeEach(function () {
        browser().navigateTo('http://localhost:8080/Angular-Kata-4/');
    });

    it('should show a list of three todos from the TodoService in a html table', function () {

        expect(repeater('.table tbody tr').count()).toBe(3);

    });

    it('should show the subject of the selected todo item, in the headline below the table', function () {

        element('.table tbody tr:first-child input').click();
        var selectedSubjectValue = element('#result').text();
        expect(selectedSubjectValue).toBe('Take the dishes');

    });

});
