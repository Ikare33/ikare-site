(function(){
    'use strict';

    angular.module('af.auth')
    .factory('afLoginForm', loginForm);

    /**
     * @ngInject
     */
    function loginForm(){
        return [
                {
                    key: 'email',
                    type: 'input',
                    templateOptions: {
                        label: 'Mail',
                        required: 'email',
                        type: 'email'
                    },
                    validation: {
                        messages: {
                            required: function () {
                                return 'Namého ! Tu rentres ton mail !'
                            },
                            email: function (viewValue) {
                                return viewValue + ', c\'est pas un email, petit chenapan !'
                            }
                        }
                    }
                },
                {
                    key: 'password',
                    type: 'input',
                    templateOptions: {
                        label: 'Password',
                        required: 'password',
                        type: 'password'
                    }
                },
                {
                    key: 'repeatPassword',
                    type: 'input',
                    templateOptions: {
                        label: 'Repeat password',
                        required: 'repeatPassword',
                        type: 'password'
                    },
                    validators: {
                        samePassword: function(viewValue, modelValue, $scope){
                            var val = viewValue || modelValue;
                            return val === $scope.model.password;
                        }
                    }
                }
                ]
    }
})();
