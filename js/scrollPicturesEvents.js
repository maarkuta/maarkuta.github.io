let picuresDescriptions = [
    'В этой работе хотел показать единство человека и природы в виде лесной принцессы. В работе просматривается градиент от лица к низу работы, таким образом внимание уделяется как лицу, так и растениям.',
    'Однажды, я что-то искал в шкафу у родителей, и нашёл сумку со старой камерой и такими кассетами. Хотел показать невероятный дизайн этих вещей в своём стиле.',
    'Однажды, я что-то искал в шкафу у родителей, и нашёл сумку со старой камерой и кассетами. Хотел показать неверноятный дизайн этих вещей в своём стиле.',
    'Этой холодной зимой я не ходил, а бегал. Весь закутанный в курточку, шарфы и перчатки. Приходя домой, я хотел передать это состояние, поэтому рисовал скетчи, используя эллипсы для нахождения нужной формы персонажа. На бумаге - сет из 3 работ. В цифровом варианте сделал только одну.',
    '',
    'Графический концепт на тему "достижение цели". Голубым цветом обозначил ЦЕЛЬ. Каждая маленькая цель - часть большей, как пазл, который нужно собирать по кусочкам. Красным цветом обозначены "дурные" мысли, которые мешают работать.',
    'Графический концепт на тему "развитие идеи". Желтым цветом обозначил ИДЕЮ. Для ее развития нужно найти несколько вариантов развития. Сначала пойти к экспертам для сбора информации, после немного времени, и идея превращаеться в жизнь, что обозначил синим "свечение" вокруг головы.',
    'Иллюстрация офисного сотрудника, пьющего кофе. Сотрудних прорисован четче, чем окружающие его элементы,для его выделения испльзуетс большее количество жёлтых фрагментов. На чашке нарисовано кофейное зерно, для понимания того, что в ней. Кружка раскрашена в контрастные цвета для акцентирования внимания.',
    'Обложка к блокноту. Делаю блокноты как хобби. Зелёным цветом выделил растительность на иллюстрации. А 2 ньюансных цвета символизируют дерево, тоже как часть природы.',
    'Принт на шоппер. Идея была реализована. Это ленивец, а не кот)',
    'Иконки для проекта The Noun Project на тему деревообработка. Был вдохновлён уборкой сада на даче.',
    'Этикетка арахисовой пасты. Акцент на составе.',
    'Дизайн персонажей из геометрических фигур. Все персонажи стоят на ступеньках, а "сноубордист" съезжает по ним.',
    'Flat-иконки на разную тематику',
    'Фрукты в упрощённом стиле. Хотел подчеркуть основные особенности представленных фруктов, используя простые формы',
];


let neededPage = window.location.href.toString().split("/")[6];

for (let i = 0; i < 30; i++) { // меньше 30 ибо впадлу считать количество елементов. Так быстрее.
    if (window.screen.width >= 1200) {
        $("#picture" + i).click(function () {
            let imgSrc = $("#pictureToShow" + i).attr("src");

            $("body").append("<img src='" + imgSrc + "' class='img-preview'/>").show("slow");
            $("body").append("<div class='img-preview-bcg'></div>").show("slow");

            if (neededPage === "sketches.html") {
                $(".img-preview").css({
                    "transition": "0",
                    "width": "54vw",
                    "right": "12vw"
                });

                setTimeout(function () {
                    $(".img-preview").css({
                        "opacity": "1",
                        "transition": ".7s ease"
                    });

                    $(".img-preview-bcg").css({
                        "opacity": "1",
                        "transition": ".4s ease"
                    });
                }, 100);
            }
            else {
                $(".img-preview").css({
                    "opacity": "1",
                    "transition": ".7s ease"
                });

                $(".img-preview-bcg").css({
                    "opacity": "1",
                    "transition": ".4s ease"
                });

            }

            $(".sidebar li").remove();
            $(".sidebar ul").append("<li id='closePreview' style='opacity: 0' class='close-btn'>close</li>");

            $("#closePreview").css({
                "cursor": "pointer",
                "padding": "2vh",
                "background-color": "white"
            });

            $("#closePreview:hover").css({
                "background-color": "#04900026"
            });

            $("#closePreview").animate({
                opacity: 1,
            }, 1000, function () {
                // Animation complete.
            });

            $("#closePreview").click(function () {
                $(".img-preview").css({
                    "opacity": "0",
                    "transition": "0.5s ease"
                });

                $(".img-preview-bcg").css({
                    "opacity": "0",
                    "transition": "0.5s ease"
                });

                setTimeout(function () {
                    $(".img-preview").remove();
                    $(".img-preview-bcg").remove();
                }, 500);

                $("#closePreview").css("display", "none");

                $(".sidebar ul").append("<li><a href='./home.html' style='opacity: 0'>home</a></li>");
                $(".sidebar ul").append("<li><a class='active' href='./works.html' style='opacity: 0'>works</a></li>");
                $(".sidebar ul").append("<li><a href='./skills.html' style='opacity: 0'>skills</a></li>");
                $(".sidebar ul").append("<li><a href='./about.html' style='opacity: 0'>about</a></li>");
                $(".sidebar ul").append("<li><a href='./contacts.html' style='opacity: 0'>contacts</a></li>");
                $(".sidebar ul").append('<li><a href="https://freelancehunt.com/freelancer/uta_manufacture.html?r=zjQYk" target="_blank" title="Фриланс просто"><img src="https://freelancehunt.com/static/images/buttons/106.gif" alt="Удаленная работа и фриланс" width="80" height="15"></a></li>');

                $(".sidebar ul li a").animate({
                    opacity: 1,
                }, 1000, function () {
                    // Animation complete.
                });
            });

        });
    }



    if (window.screen.width <= 1200) {
        $("#picture" + i).click(function () {
            let picName = $("#picture" + i + " > img").attr("src").substring(12);

            $("#picture-title").css("opacity", 0).text(picName.substring(-1, picName.length - 4));
            $("#picture-title").animate({
                opacity: 1
            }, "slow");
            $("#picture-title").css("opacity", 0);

            $("#picDescription").css("opacity", 0).text(picuresDescriptions[i]);
            if (i === 4) {
                $("#picDescription").css("opacity", 0).append("<p>Иллюстрация для проекта <span style='border-bottom: black 2px solid'><a  target='_blank' href='https://dererumnatura.github.io/music.html'>Sounds better...</a></span><p>Идея заключаеться в создании плейлистов по жанрам. Ничего нового, и не очень нужно в эпоху стриминговых сервисов, но мне нравиться делать прелоадеры и иллюстрации, так что будем развиваться.</p>");
            }

            $("#picDescription").animate({
                opacity: 1
            }, "slow");
            $("#picDescription").css("opacity", 0);
        });
    } else {
        $("#picture" + i).hover(function () {
            let picName = $("#picture" + i + " > img").attr("src").substring(12);

            $("#picture-title").css("opacity", 0).text(picName.substring(-1, picName.length - 4));
            $("#picture-title").animate({
                opacity: 1
            }, "slow");
            $("#picture-title").css("opacity", 0);

            $("#picDescription").css("opacity", 0).text(picuresDescriptions[i]);
            if (i === 4) {
                $("#picDescription").css("opacity", 0).append("<p>Иллюстрация для проекта <span style='border-bottom: black 2px solid'><a  target='_blank' href='https://dererumnatura.github.io/music.html'>Sounds better...</a></span><p>Идея заключаеться в создании плейлистов по жанрам. Ничего нового, и не очень нужно в эпоху стриминговых сервисов, но мне нравиться делать прелоадеры и иллюстрации, так что будем развиваться.</p>");
            }

            $("#picDescription").animate({
                opacity: 1
            }, "slow");
            $("#picDescription").css("opacity", 0);
        });
    }
}