var app = angular.module('contactApp', []);

app.controller('ContactController', function($scope) {
    // Initialize form data
    $scope.formData = {
        name: '',
        email: '',
        message: '',
        selectedRadio: ''
    };

    // Function to handle emoji selection
    $scope.selectEmoji = function(emoji) {
        $scope.feedbackEmoji = emoji;
    };

    // Function to handle form submission
    $scope.submitForm = function() {
        // Construct URL parameters from form data
        var params = new URLSearchParams($scope.formData).toString();
        
        // Redirect to next_page.html with form data as query parameters
        window.location.href = 'next_page.html?' + params;
    };
});
