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
    function PostController($log, postModel, $stateParams, $document) {
        var vm = this;

        $log.debug('PostController start');

        $log.debug($stateParams.id);

        vm.post = postModel.get($stateParams.id);

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

                    // initialisation disqus
                    var disqus_shortname = 'I-kare'; // required:
                    // replace
                    // example with
                    // your forum
                    // shortname
                    var disqus_disable_mobile = true;

                    /* * * DON'T EDIT BELOW THIS LINE * * */
                    (function() {
                        var dsq = $document.createElement('script');
                        dsq.type = 'text/javascript';
                        dsq.async = true;
                        dsq.src = '//' + disqus_shortname
                        + '.disqus.com/embed.js';
                        ($document.getElementsByTagName('head')[0] || $document
                                .getElementsByTagName('body')[0])
                                .appendChild(dsq);
                    })();

                    // initialisation FB
                    (function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id))
                            return;
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//connect.facebook.net/fr_FR/all.js#xfbml=1";
                        fjs.parentNode.insertBefore(js, fjs);
                    }(document, 'script', 'facebook-jssdk'));

                    // initialisation google plus
                    var js = $document.createElement("script");

                    js.type = "text/javascript";
                    js.src = 'https://apis.google.com/js/plusone.js';

                    $document.body.appendChild(js);
                })
    }
})();
