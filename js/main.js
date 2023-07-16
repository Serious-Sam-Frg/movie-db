$(function(){



    $(document).ready(function() {
        var words = [
            "movie",
            "producer",
            "film",
            "actor",
            "serial",
            "movie movie movie",
            "producer producer producer",
            "film film film",
            "actor actor actor",
            "serial serial serial",
            "mode mode mode",
            "watch",
            "online",
        ];

        function getRandomWord() {
            var randomIndex = Math.floor(Math.random() * words.length);
            return words[randomIndex];
        }

        function createMatrixText() {
            var text = getRandomWord();
            var xPos = Math.random() * ($(window).width() - 100);
            var $matrixText = $("<div>")
                .addClass("matrix-text")
                .text(text)
                .css("left", xPos + "px");

            $("#matrix-animation").append($matrixText);

            setTimeout(function() {
                $matrixText.css("opacity", 1);
            }, 10);

            setTimeout(function() {
                $matrixText.css("opacity", 0);
            }, 3500);

            $matrixText.animate(
                { top: $(window).height() },
                6000,
                "linear",
                function() {
                    $(this).remove();
                }
            );
        }

        setInterval(createMatrixText, 100);
    });




});