app.controller('indexController',['$scope','indexFactory',($scope,indexFactory) => {

    const connectionOptions = {
        reconnectionAttempts: 3,
        reconnectionDelay: 600
    };

    indexFactory.connectSocket('http://localhost:3000',connectionOptions)
        .then((socket) => {
            console.log('Boglanish amalga oshirildi.', socket);
        }).catch((err) => {
         console.log(err);
    });
}]);