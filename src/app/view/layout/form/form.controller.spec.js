describe('Form Controller', function() {
    var FormController;
    var $httpBackend;
    var mockPost = {
        title : 'title',
        body : 'body',
        id : 5
    };

    var url = 'http://localhost:3000/post';

    beforeEach(module('af.form'));
    beforeEach(inject(function($controller, _$httpBackend_, $q) {
        FormController = $controller('FormController');
        $httpBackend = _$httpBackend_;
        $httpBackend.whenPOST(url).respond(mockPost);
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should make an http call when submit method is called', function() {
        FormController.postForm = {
            $valid : true
        };
        FormController.submit();
        $httpBackend.expectPOST(url);
        $httpBackend.flush();
    });
});
