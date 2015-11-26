(function () {
    var app = angular.module('modone', []);
    //rect = {};
    //drag = false;

    app.controller("plan_control", function ($scope, $log, $http) {
        $scope.entry = {Figura: "Nombre"};
        $log.debug('se creo el $scope');
        $scope.entries = [];
        /*====================================================================*/
        $scope.loadData = function () {
            var configList = {
                method: "GET",
                url: "blueprints"
            };
            var response = $http(configList);
            response.success(function (data, status, headers, config) {
                $scope.entries = data;
            });
            response.error(function (data, status, headers, config) {
                alert("The petition has failed. HTTP Status:" + status);
            });
        };
        //$scope.loadData();

        /*====================================================================*/
        $scope.drawRectangles = function () {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            rect = {}, drag = false;
            function init() {
                canvas.addEventListener('mousedown', mouseDown, false);
                canvas.addEventListener('mouseup', mouseUp, false);
                canvas.addEventListener('mousemove', mouseMove, false);
            }
            function mouseDown(e) {
                rect.startX = e.pageX - this.offsetLeft;
                rect.startY = e.pageY - this.offsetTop;
                drag = true;
            }
            function mouseUp() {
                drag = false;
            }
            function mouseMove(e) {
                if (drag) {
                    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
                    rect.h = (e.pageY - this.offsetTop) - rect.startY;
                    //ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.fillStyle = "rgba(22,87,122,0.7)";
                    ctx.strokeRect(rect.startX, rect.startY, 200, 150);
                }
            }
            init();
        };
        /*====================================================================*/
        $scope.drawLines = function () {
            $log.debug('se haran lineas');
        };
        /*====================================================================*/
        $scope.addText = function () {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            var lol;

            function init() {
                canvas.addEventListener('mousedown', mouseDown, false);
                lol = document.getElementById('lolz').value;
            }

            function mouseDown(e) {
                ctx.font = "30pt Verdana";
                ctx.lineWidth = '1';
                ctx.strokeStyle = '#0FF';
                ctx.fillStyle = "#48A";

                ctx.fillText(lol, e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            }
            init();
        };
        /*====================================================================*/
         $scope.eraseCanvas = function () {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            rect = {}, drag = false;
            function init() {
                canvas.addEventListener('mousedown', mouseDown, false);
                canvas.addEventListener('mouseup', mouseUp, false);
                canvas.addEventListener('mousemove', mouseMove, false);
            }
            function mouseDown(e) {
                rect.startX = e.pageX - this.offsetLeft;
                rect.startY = e.pageY - this.offsetTop;
                drag = true;
            }
            function mouseUp() {
                drag = false;
            }
            function mouseMove(e) {
                if (drag) {
                    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
                    rect.h = (e.pageY - this.offsetTop) - rect.startY;
                    //ctx.clearRect(0, 0, canvas.width, canvas.height);
                    cctx.fillStyle = "#ffffff";
                    ctx.fillRect(rect.startX, rect.startY,  rect.w, rect.h);
                }
            }
            init();
        };
        /*====================================================================*/
        window.onload = function () {
            document.body.className = '';
        };
        window.ontouchmove = function () {
            return false;
        };
        window.onorientationchange = function () {
            document.body.scrollTop = 0;
        };
});
})();

