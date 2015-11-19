(function () {
    var app = angular.module('modone', []);

    rect = {};
    drag = false;

    app.controller("plan_control", function ($scope, $log, $http) {
        $scope.entry = {Figura: "Nombre"};
        $log.debug('se creo el $scope');
        $scope.entries = [];

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
        $scope.loadData();

        $scope.draw = function () {
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');
            rect = {},
                    drag = false;

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
                    draw();
                }
            }
            
            function draw() {
                ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
            }
            
            init();
        };
        
        $scope.getCanvas = function () {
            var cnv = document.getElementById("canvas");
            var ctx = cnv.getContext("2d");

            var configList = {
                method: "GET",
                url: "blueprints/" + $scope.entry.Figura
            };
            var response = $http(configList);
            response.success(function (data, status, headers, config) {
                var puntos = data.points;
                for (i = 0; i < puntos.length; i++) {
                    ctx.moveTo(puntos[i].x, puntos[i].y);
                    ctx.lineTo(puntos[(i + 1) % puntos.length].x, puntos[(i + 1) % puntos.length].y);
                    ctx.stroke();
                }




            });
            response.error(function (data, status, headers, config) {
                alert("The petition has failed. HTTP Status:" + status);
            });
        };
            window.onload = function() { document.body.className = ''; };
            window.ontouchmove = function() { return false; };
            window.onorientationchange = function() { document.body.scrollTop = 0; };

    });
})();

