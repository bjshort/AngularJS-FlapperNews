angular.module('flapperNews', [])
    .controller('MainCtrl', [
        '$scope',
        function($scope){
            $scope.test = 'Hello world!';
            $scope.posts = [
                {title: 'post 1', upvotes: 5, body: 'The first post.'},
                {title: 'post 2', upvotes: 2, body: 'The second post.'},
                {title: 'post 3', upvotes: 15, body: 'The third post.'},
                {title: 'post 4', upvotes: 9, body: 'The fourth post.'},
                {title: 'post 5', upvotes: 4, body: 'The fifth post.'}
            ];

            $scope.addPost = function(){
                if(!$scope.title || $scope.title === '') { return; }

                $scope.posts.push(
                    {
                        title: $scope.title,
                        upvotes: 0,
                        link: $scope.link,
                        body: $scope.body
                    }
                );
                $scope.title = '';
                $scope.link = '';
                $scope.body = '';
            };

            $scope.incrementUpvotes = function(post) {
                post.upvotes += 1;
            };
        }]);
