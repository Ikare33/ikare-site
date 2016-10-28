(function() {
    'use strict';

    angular.module('af.liseuse').controller('LiseuseController',
            LiseuseController);

    /**
     * 
     * @param $log
     * @param $postModel
     * @constructor
     * @ngInject
     */
    function LiseuseController($log, $mdTheming, angularPlayer, $scope,
            $stateParams, $location, $mdMedia) {
        var vm = this;

        $log.debug('LiseuseController start');

        vm.ready = false;
        vm.determinateValue = 0;

        vm.canvasWidth = $mdMedia('gt-sm') ? 260 : 0;

        vm.zoom = 100;

        vm.scaleBase = 2;

        vm.basePath = $location.absUrl().replace($location.path(), '');

        vm.title = "Essai Liseuse";

        // $scope.pdfUrl =
        // "nekogamiNoTabi/chapitres/chapitre1/nekogamiNoTabi1.pdf";
        vm.pdfUrl = "/nekogamiNoTabi/chapitres/chapitre"
                + $stateParams.chapitre + "/nekogaminotabi"
                + $stateParams.chapitre + ".pdf";

        vm.renderPage = function() {

            var vm = this;
            vm.pdf
                    .getPage(vm.page)
                    .then(
                            function getPageHelloWorld(page) {
                                var scale = (vm.zoom / 100) * vm.scaleBase;
                                var viewport = page.getViewport(scale);
                                //
                                var canvas = document
                                        .getElementById('the-canvas');

                                // viewport = page.getViewport(scale);
                                //
                                // Prepare canvas using PDF page dimensions
                                //
                                canvas.height = viewport.height;
                                canvas.width = viewport.width;

                                //
                                // Render PDF page into canvas context
                                //
                                var context = canvas.getContext('2d');
                                var pageRendering = page.render({
                                    canvasContext : context,
                                    viewport : viewport
                                });

                                vm.determinateValue = 90;
                                $scope.$apply();

                                var completeCallback = pageRendering._internalRenderTask.callback;
                                pageRendering._internalRenderTask.callback = function(
                                        error) {
                                    // Step 2: what you want to do before
                                    // calling the complete method
                                    completeCallback.call(vm, error);
                                    // Step 3: do some more stuff

                                    vm.determinateValue = 100;
                                    $log.debug('finish rendering');
                                    vm.ready = true;
                                    $scope.$apply();
                                };
                            });
        }

        vm.nextPage = function() {
            var vm = this;
            if (vm.page < vm.pdf.numPages) {
                vm.page += 1;

                $log.debug(vm.songs[vm.page - 1]);

                if (vm.songs[vm.page - 1].id !== vm.songs[vm.page - 2].id) {
                    vm.changeTrack();
                }
                vm.renderPage();
            }
        }

        vm.previousPage = function() {
            var vm = this;
            if (vm.page > 1) {
                vm.page -= 1;
                if (vm.songs[vm.page - 1].id !== vm.songs[vm.page].id) {
                    vm.changeTrack();
                }
                vm.renderPage();
            }
        }

        vm.zoomIn = function() {
            if (vm.zoom < 500) {
                vm.zoom += 10;
                vm.renderPage();
            }
        }

        vm.zoomOut = function() {
            if (vm.zoom > 50) {
                vm.zoom -= 10;
                vm.renderPage();
            }
        }

        vm.changeTrack = function() {
            angularPlayer.stop();
            angularPlayer.setCurrentTrack(null);
            angularPlayer.clearPlaylist(function(data) {
                angularPlayer.addTrack(vm.songs[vm.page - 1]);
                angularPlayer.play();
                angularPlayer.repeatToggle();
            });
        }

        vm.playMicroTrack = function() {
            angularPlayer.addTrack({
                url : 'assets/sounds/point1sec.mp3'
            });
            angularPlayer.play();
        }

        vm.loop = 0;

        vm.initListOfSongs = function() {
            $log.debug('initListOfSongs start');

            if ($stateParams.chapitre === "1") {
                vm.songs = [
                        {
                            id : 1,
                            title : 'Musique 1',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique1.mp3'
                        },
                        {
                            id : 2,
                            title : 'Musique 2',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique2.mp3'
                        },
                        {
                            id : 3,
                            title : 'Musique 3',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique3.mp3'
                        },
                        {
                            id : 3,
                            title : 'Musique 3',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique3.mp3'
                        },
                        {
                            id : 4,
                            title : 'Musique 4',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique4.mp3'
                        },
                        {
                            id : 5,
                            title : 'Musique 5',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique5.mp3'
                        },
                        {
                            id : 6,
                            title : 'Musique 6',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique6.mp3'
                        },
                        {
                            id : 7,
                            title : 'Musique 7',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique7.mp3'
                        },
                        {
                            id : 8,
                            title : 'Musique 8',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique8.mp3'
                        },
                        {
                            id : 8,
                            title : 'Musique 8',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique8.mp3'
                        },
                        {
                            id : 9,
                            title : 'Musique 9',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique9.mp3'
                        },
                        {
                            id : 9,
                            title : 'Musique 9',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique9.mp3'
                        },
                        {
                            id : 9,
                            title : 'Musique 9',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique9.mp3'
                        },
                        {
                            id : 10,
                            title : 'Musique 10',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique10.mp3'
                        },
                        {
                            id : 10,
                            title : 'Musique 10',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique10.mp3'
                        },
                        {
                            id : 10,
                            title : 'Musique 10',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique10.mp3'
                        },
                        {
                            id : 11,
                            title : 'Musique 11',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique11.mp3'
                        },
                        {
                            id : 11,
                            title : 'Musique 11',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique11.mp3'
                        },
                        {
                            id : 12,
                            title : 'Musique 12',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique12.mp3'
                        },
                        {
                            id : 13,
                            title : 'Musique 13',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique13.mp3'
                        },
                        {
                            id : 13,
                            title : 'Musique 13',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique13.mp3'
                        },
                        {
                            id : 13,
                            title : 'Musique 13',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre1/musiques/musique13.mp3'
                        } ];

            } else {
                vm.songs = [
                        {
                            id : 1,
                            title : 'Musique 1',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique1.mp3'
                        },
                        {
                            id : 2,
                            title : 'Musique 2',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique2.mp3'
                        },
                        {
                            id : 3,
                            title : 'Musique 3',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique3.mp3'
                        },
                        {
                            id : 4,
                            title : 'Musique 4',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique4.mp3'
                        },
                        {
                            id : 4,
                            title : 'Musique 4',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique4.mp3'
                        },
                        {
                            id : 5,
                            title : 'Musique 5',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique5.mp3'
                        },
                        {
                            id : 6,
                            title : 'Musique 6',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique6.mp3'
                        },
                        {
                            id : 7,
                            title : 'Musique 7',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique7.mp3'
                        },
                        {
                            id : 7,
                            title : 'Musique 7',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique7.mp3'
                        },
                        {
                            id : 7,
                            title : 'Musique 7',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique7.mp3'
                        },
                        {
                            id : 8,
                            title : 'Musique 8',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique8.mp3'
                        },
                        {
                            id : 8,
                            title : 'Musique 8',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique8.mp3'
                        },
                        {
                            id : 9,
                            title : 'Musique 9',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique9.mp3'
                        },
                        {
                            id : 9,
                            title : 'Musique 9',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique9.mp3'
                        },
                        {
                            id : 10,
                            title : 'Musique 10',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique10.mp3'
                        },
                        {
                            id : 10,
                            title : 'Musique 10',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique10.mp3'
                        },
                        {
                            id : 10,
                            title : 'Musique 11',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique10.mp3'
                        },
                        {
                            id : 11,
                            title : 'Musique 11',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique11.mp3'
                        },
                        {
                            id : 12,
                            title : 'Musique 12',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique12.mp3'
                        },
                        {
                            id : 13,
                            title : 'Musique 13',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique13.mp3'
                        },
                        {
                            id : 13,
                            title : 'Musique 13',
                            artist : 'Artiste',
                            url : '/nekogamiNoTabi/chapitres/chapitre2/musiques/musique13.mp3'
                        } ];
            }

            vm.initSongsTag();
        };

        vm.initSongsTag = function() {
            $log.debug('initSongsTag start ' + vm.loop);
            var number = vm.loop;
            if (number < vm.songs.length) {
                jsmediatags.read(vm.basePath + vm.songs[number].url, {
                    onSuccess : function(result) {
                        vm.songs[number].title = result.tags.title;
                        vm.songs[number].artist = result.tags.artist;
                        vm.songs[number].album = result.tags.album;

                        vm.determinateValue = Math
                                .floor(50 / (vm.songs.length / number));
                        $scope.$apply();
                        $log.debug(vm.determinateValue);

                        vm.loop = number + 1;
                        vm.initSongsTag();
                    },
                    onError : function(err) {
                        $log.debug(err);
                    }
                });
            } else {
                vm.init();
            }
        };

        vm.init = function() {
            $log.debug('init start');

            // vm.playMicroTrack();

            $log.debug(vm.songs[0]);
            angularPlayer.init();
            angularPlayer
                    .clearPlaylist(function(data) {
                        angularPlayer.addTrack(vm.songs[0]);

                        vm.determinateValue = 55;
                        $scope.$apply();

                        try {
                            angularPlayer.play();
                            $log.debug('past');
                        } catch (err) {
                            $log.debug(err);
                        }

                        vm.determinateValue = 65;
                        $scope.$apply();

                        angularPlayer.pause();
                        $log.debug('pause');
                        angularPlayer.repeatToggle();

                        vm.determinateValue = 75;
                        $scope.$apply();

                        if (PDFJS) {
                            $log.debug(PDFJS);
                            PDFJS.workerSrc = 'pdfjs/pdf.worker.jsext';
                            //
                            // Asynchronous download PDF as an ArrayBuffer
                            //
                            PDFJS
                                    .getDocument(vm.pdfUrl)
                                    .then(
                                            function getPdf(pdf) {
                                                //
                                                // Fetch the first page
                                                //

                                                vm.pdf = pdf;
                                                vm.page = 1;

                                                vm.determinateValue = 85;
                                                $scope.$apply();

                                                vm.pdf
                                                        .getPage(vm.page)
                                                        .then(
                                                                function getPageHelloWorld(
                                                                        page) {

                                                                    var viewport = page
                                                                            .getViewport(2);

                                                                    $log
                                                                            .warn(document
                                                                                    .getElementById('loadPDF').clientWidth);

                                                                    vm.scaleBase = ((document
                                                                            .getElementById('loadPDF').clientWidth - 20) / viewport.width) * 2;

                                                                    $log
                                                                            .warn(vm.scaleBase);

                                                                    vm
                                                                            .renderPage();
                                                                });
                                            });

                        } else {
                            $log.err('PDFJS failed');
                        }
                    });

        };

        angular.element(document).ready(vm.initListOfSongs);
        $scope.$on('$stateChangeStart', function() {
            angularPlayer.stop();
        });
    }
})();
