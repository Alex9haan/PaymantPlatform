var welcomescreen;
var _fnWelcomInit = function () {

    var options = {
        'bgcolor': 'linear-gradient(to right top, #570214, #73011b, #910022, #af0028, #ce002e)',
        'fontcolor': '#fff',
        'onOpened': function () {
            console.log("welcome screen opened");
        },
        'onClosed': function () {
            console.log("welcome screen closed");
        }
    },
        welcomescreen_slides,
        welcomescreen;

    welcomescreen_slides = [
        {
            id: 'slide0',
            picture: '<div class="tutorialicon">♥</div>',
            text: 'Welcome to this tutorial. In the <a class="tutorial-next-link" href="#">next steps</a>'
        },
        {
            id: 'slide1',
            picture: '<div class="tutorialicon">✲</div>',
            text: '<a class="tutorial-previous-slide" href="#">previous</a><a class="tutorial-next-link" href="#">next</a>'
        },
        {
            id: 'slide2',
            picture: '<div class="tutorialicon">♫</div>',
            text: '<a class="tutorial-previous-slide" href="#">previous</a><a class="tutorial-next-link" href="#">next</a>'
        },
        {
            id: 'slide3',
            picture: '<div class="tutorialicon">☆</div>',
            text: 'Thanks for reading! Enjoy this app or go to <a class="tutorial-previous-slide" href="#">previous</a>.<br><br><a class="tutorial-close-btn" href="#">End Tutorial</a>'
        }

    ];
    welcomescreen = new Welcomescreen(welcomescreen_slides, options);

    $(document).on('click', '.tutorial-close-btn', function () {
        welcomescreen.close();
    });

    $('.tutorial-open-btn').click(function () {
        welcomescreen.open();
    });

    $(document).on('click', '.tutorial-next-link', function (e) {
        welcomescreen.next();
    });

    $(document).on('click', '.tutorial-previous-slide', function (e) {
        welcomescreen.previous();
    });

    return welcomescreen;
}
