var app = angular.module('noteApp', ['ui.router', 'ngStorage']);


app.config(function($stateProvider, $urlRouterProvider) {
  // Redirect all other requests to the home state
  $urlRouterProvider.otherwise("/");
  
  // Now set up the states
  $stateProvider
    .state('notes', {
      url: "/",
      views: {
        "page_nav": {
            templateUrl: "partials/page_nav/default.html",
            controller: "NavCtrl",
        },
        "page_content": {
            templateUrl: "partials/page_content/notes.html",
            controller: "NoteCtrl",
        }
      }
    })
    .state('note', {
      url: "/note/:id",
      views: {
        "page_nav": {
            templateUrl: "partials/page_nav/subpage.html",
            controller: "NavCtrl",
        },
        "page_content": {
            templateUrl: "partials/page_content/note.html",
            controller: "NoteCtrl",
        }
      }
    })
    .state('note-edit', {
      url: "/note/:id/edit",
      views: {
        "page_nav": {
            templateUrl: "partials/page_nav/subpage.html",
            controller: "NavCtrl",
        },
        "page_content": {
            templateUrl: "partials/page_content/note-edit.html",
            controller: "NoteCtrl",
        }
      }
    })
    .state('note-post', {
      url: "/new",
      views: {
        "page_nav": {
            templateUrl: "partials/page_nav/subpage.html",
            controller: "NavCtrl",
        },
        "page_content": {
            templateUrl: "partials/page_content/note-post.html",
            controller: "NoteCtrl",
        }
      }
    })
    .state('settings', {
      url: "/settings",
      views: {
        "page_nav": {
            templateUrl: "partials/page_nav/settings.html",
            controller: "NavCtrl",
        },
        "page_content": {
            templateUrl: "partials/page_content/settings.html",
            controller: "NoteCtrl",
        }
      }
    });

});