let elearningControllers = angular.module('elearningControllers', ['localDataService']);

elearningControllers.controller('elearningController',
    ['$scope', function ($scope) {
        let thisObj = this;

        this.LoadCodeSchoolData = function () {
            
            $.ajax({
                url: 'https://www.codeschool.com/users/1808758.json',
                dataType: 'jsonp',
                success: function (response) {
                    // handle response
                    thisObj.addProfile(response.user);
                    thisObj.addCourses(response.courses.completed);
                },
                failed: function (error) {
                    $("#badges").append('<div>Sorry: can\'t retrive any badges</div>');
                }
            });
        };

        this.addProfile = function (user) {
            let $user = $("#user");

            $("<img />", {
                'class': 'img-thumbnail',
                src: user.avatar
            }).appendTo($user);

            let $titlepage = $("#titlepage");
            $("<h4 />", {
                text: "Codeschooling since: "
                + new Date(user.member_since).toDateString()
            }).appendTo($titlepage);

        };

        this.addCourses = function (courses) {
            let $badges = $('#badges');

            courses.sort(function (item1, item2) {
                if (item1.title <= item2.title)
                    return -1;
                else
                    return 1;
            }
            );

            for (let course of courses) {
                if(course.title.indexOf('Try') === 0)
                    continue;
                
                let $course = $('<div />', {
                    'class': "course"
                }).appendTo($badges);

                $('<h3 />', {
                    text: course.title
                }).appendTo($course);

                $('<img />', {
                    src: course.badge
                }).appendTo($course);

                $('<a />', {
                    'class': 'btn btn-primary',
                    target: '_blank',
                    href: course.url,
                    text: 'Take a look'
                }).appendTo($course);

            }
        };

    }]);
