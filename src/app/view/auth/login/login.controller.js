(function(){
  'use strict';

  angular.module('af.auth')
    .controller('LoginController', LoginController);

  /**
     * 
     * @constructor
     * @ngInject
     */
  function LoginController($log, $auth, $state, $mdDialog, $mdMedia, afLoginForm){
    var vm = this;

    $log.debug('LoginController start');

    vm.loginFailed = false;

    vm.loginForm = afLoginForm;

    vm.login = function(user){
      $auth.login(user)
        .then(function(data){
          $log.debug('Success :) : ', data);
          $state.go('home');
          $auth.me = data.user;
        })
        .catch(function(err){
          $log.error('Erreur !!! : ', err);
          vm.showAlert();
      })
    };

    vm.showAlert = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Login failed')
          .content('Bad mail or password')
          .ariaLabel('Alert Dialog login failed')
          .ok('OK')
          .targetEvent(ev)
      );
    };
  }
})();
