let techSection = $(".tech-skls ul");
let creativeSection = $(".creative-skls ul");
let softSection = $(".soft-skls ul");

if (window.screen.width <= 992) {
    // burger menu
    $("#burgerMnu").click(function () {
        $(".sidebar ul").css({
            "display": "flex",
            "font-size": "8vh",
            "margin-top": "10vh",
            "align-items": "center"
        });

        $(".main .sidebar").animate({
            "flex-direction": "column",
            "height": "100vh",
        }, 500);

        $(".sidebar img").animate({
            "margin-right": "0vw",
        }, 800);

        if (window.screen.width <= 992 && window.screen.width >= 425) {
            $("#burgerMnu").animate({
                "right": "-15vw"
            }, 500);
        }

        if (window.screen.width <= 425) {
            $("#burgerMnu").animate({
                "right": "-22vw"
            }, 500);
        }

        $(".closeBurger").css({
            "display": "flex"
        });

    });
    $("#closeBurger").click(function () {
        $(".sidebar ul").css({
            "display": "none",
        });

        if (window.screen.width <= 425) {
            $(".main .sidebar").animate({
                "flex-direction": "column",
                "height": "11vh",
            }, 700);
        } else {
            $(".main .sidebar").animate({
                "flex-direction": "column",
                "height": "15vh",
            }, 700);    
        }


        $(".sidebar img").animate({
            "margin-right": "66vw",
        }, 800);

        $(".burger-mnu").css({
            "display": "flex",
        });

        $(".burger-mnu").animate({
            "right": "5vw"
        });

    });

}




$("#creativeSkillsButton").click(function () {
    softSection.css({
        "display": "none"
    });

    techSection.css({
        "display": "none"
    });

    creativeSection.css({
        "display": "flex"
    });

    $("#creativeSkillsButton").css({
        "border-bottom": "3px solid #04900026",
        "margin-bottom": "0px"
    });

    $("#techSkillsButton").css({
        "border-bottom": "0px solid #04900026",
        "margin-bottom": "3px"
    });

    $("#softSkillsButton").css({
        "border-bottom": "0px solid #04900026",
        "margin-bottom": "3px"
    });
});

$("#techSkillsButton").click(function () {
    softSection.css({
        "display": "none"
    });

    techSection.css({
        "display": "flex"
    });

    creativeSection.css({
        "display": "none"
    });

    $("#creativeSkillsButton").css({
        "border-bottom": "0px solid #04900026",
        "margin-bottom": "3px"
    });

    $("#techSkillsButton").css({
        "border-bottom": "3px solid #04900026",
        "margin-bottom": "0px"
    });

    $("#softSkillsButton").css({
        "border-bottom": "0px solid #04900026",
        "margin-bottom": "3px"
    });
});

$("#softSkillsButton").click(function () {
    softSection.css({
        "display": "flex"
    });

    techSection.css({
        "display": "none"
    });

    creativeSection.css({
        "display": "none"
    });

    $("#creativeSkillsButton").css({
        "border-bottom": "0px solid #04900026",
        "margin-bottom": "3px"
    });

    $("#techSkillsButton").css({
        "border-bottom": "0px solid #04900026",
        "margin-bottom": "3px"
    });

    $("#softSkillsButton").css({
        "border-bottom": "3px solid #04900026",
        "margin-bottom": "0px"
    });
});


$("#aboutBtn").click(function () {
    $(".about-me-text").css({
        "display": "flex",
        "opacity": 0
    });

    $(".about-me-text").animate({
        opacity: 1,
    }, 800, function () {
        // Animation complete.
    });

    $(".hobbies-data").css({
        "display": "none"
    });

    $("#aboutBtn").css({
        "border-bottom": "3px solid #04900026",
        "margin-bottom": "0"
    });

    $("#hobbiesBtn").css({
        "border-bottom": "0px solid #04900026",
        "margin-bottom": "3px"
    });
});

$("#hobbiesBtn").click(function () {
    $(".about-me-text").css({
        "display": "none"
    });


    $(".hobbies-data").css({
        "display": "flex",
        "opacity": 0
    });

    $(".hobbies-data img").css({
        "display": "flex",
        "opacity": 0
    });

    $(".hobbies-data img").animate({
        opacity: 1,
    }, 900, function () {
        // Animation complete.
    });

    $(".hobbies-data").animate({
        opacity: 1,
    }, 800, function () {
        // Animation complete.
    });

    $("#hobbiesBtn").css({
        "border-bottom": "3px solid #04900026",
        "margin-bottom": "0"
    });

    $("#aboutBtn").css({
        "border-bottom": "0px solid #04900026",
        "margin-bottom": "3px"
    });
});



