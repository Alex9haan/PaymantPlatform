/* globals angular */
(function() {
    'use strict';

    angular
        .module('angularJSTypedEffect', [])
        .directive('typedEffect', typedEffect);

    typedEffect.$inject = ['$interval', '$timeout'];

    function typedEffect($interval, $timeout) {
        var directive = {
            restrict: 'A',
            scope: {
                text: '<',
                callback: '&',
                isstart: '='
            },
            link: link
        };

        return directive;

        function link(scope, element, attrs) {
            var i = 0, interval,
                text = scope.text || '',
                delay = parseInt(attrs.delay) || 0,
                speed = parseInt(attrs.speed) || 100,
                _cursor = attrs.cursor || '|',
                blink = attrs.blink ? attrs.blink === 'true' : true,
                onCall = attrs.starton === 'true'? true : false;

            _cursor = angular.element('<span>' + _cursor + '</span>');

            if (attrs.isstart) {
                scope.$watch('isstart', function (newValue, oldValue) {
                    if (newValue)
                        $timeout(typeText, delay);
                }, true);
            }
            else
            $timeout(typeText, delay);

            function typeText() {
                element.html("");
                typeChar();
                interval = $interval(typeChar, speed);

                function typeChar() {
                    if (i <= text.length) {
                        element.html(text.substring(0, i)).append(_cursor);
                        i++;
                    } else {
                        $interval.cancel(interval);

                        if (blink) {
                            _cursor.addClass('blink');
                        } else {
                            _cursor.remove();
                        }

                        if (attrs.callback) {
                            scope.callback();
                        }
                    }
                }
            }
        }
    }
})();
