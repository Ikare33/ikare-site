describe('Login Controller', function(){
  var LoginController;
  var $auth;
  var loginForm;

  beforeEach(module('af.auth'));
  beforeEach(inject(function($controller, _$auth_, _afLoginForm_, $q){
    LoginController = $controller('LoginController');
    $auth = _$auth_;
    loginForm = _afLoginForm_;
    spyOn($auth, 'login').and.callFake(function(){
      return $q(function(resolve){
        resolve();
      });
    });
  }));

  it('should contain a property loginForm which is equal to afLoginForm service', function(){
    expect(LoginController.loginForm).toBe(loginForm);
  });

  it('should call the login method of auth service when login method of the controller is called', function(){
    LoginController.login();
    expect($auth.login).toHaveBeenCalled();
  });
});
