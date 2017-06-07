(function() {
    'use strict';

    angular.module('af.post').controller('PostController', PostController);

    /**
     * 
     * @param $log
     * @param $postModel
     * @constructor
     * @ngInject
     */
    function PostController($log, $scope,  $rootScope, $location, postModel, commentModel, $stateParams) {
        var vm = this;

        $log.debug('PostController start');

        $log.debug($stateParams.id);

        vm.post = postModel.get($stateParams.id.trim());
        vm.showSpinner = false;
        vm.showMessageCommentaire = false;
        
        vm.post.oldurl = $location.absUrl();
        
        //google et titre
        $rootScope.title = "I-kare - " + vm.post.title;
        $rootScope.description = vm.post.description;
        $rootScope.url =  $location.absUrl();
        $rootScope.image =  $location.protocol() + "://" + $location.host() + vm.post.image;
        
        $log.debug(vm.post);

        angular
        .element(document)
        .ready(
                function() {

                    // initialisation twitter
                    !function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/
                            .test(vm.post.oldurl) ? 'http'
                                    : 'https';
                        if (!d.getElementById(id)) {
                            js = d.createElement(s);
                            js.id = id;
                            js.src = p
                            + '://platform.twitter.com/widgets.js';
                            fjs.parentNode.insertBefore(js, fjs);
                        }
                    }(document, 'script', 'twitter-wjs');

                    // initialisation FB
                    (function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.9";
                        fjs.parentNode.insertBefore(js, fjs);
                      }(document, 'script', 'facebook-jssdk'));

                    // initialisation google plus
                    var js = document.createElement("script");
                    
                    js.type = "text/javascript";
                    js.src = 'https://apis.google.com/js/plusone.js';

                    document.body.appendChild(js);
                });
        vm.addComment = function(){
            if(vm.commentForm.$valid && (!vm.comment.bot || vm.comment.bot.length === 0)){
                
                vm.showSpinner = true;
                vm.showMessageCommentaire = false;
                
                var comment = {};
                comment.name = vm.comment.name;
                comment.text = vm.comment.text.replace("\n", "<br/>");
                
                var currentDate = new Date();
                comment.date = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
                comment.post_id = vm.post.id;
                //vm.post.comments.push(comment);
                
                commentModel.create(comment).then(function (createdComment) {
                    /*$log.debug('Creation success : ' + createdComment);
                    vm.post = postModel.get($stateParams.id.trim());*/
                    vm.comment = {};
                    
                    vm.commentForm.$setUntouched();
                    vm.commentForm.$setPristine();
                    
                    if(!vm.post.comments){
                        vm.post.comments = [];
                    }
                    
                    vm.post.comments.push(createdComment);
                    vm.showSpinner = false;
                    vm.showMessageCommentaire = true;
                    
                    var scroller = document.getElementById("divContent");
                    scroller.scrollTop = scroller.scrollHeight;
                })
                .catch(function (err) {
                  $log.error('Fatality : ' + err);
                });
            }
        };
    }
})();
