$(function () {
    const swiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "vertical",
        loop: true,
    });

    $(".faq-list-item").click(function () {
        var $answer = $(this).find(".answer");
        // 変数 $answerと取得　　this=.faq-list-item の子要素.answerをfindメソッドで取得
        if ($answer.hasClass("open")) {
            $answer.removeClass("open");
            $answer.slideUp();
        } else {
            $answer.addClass("open");
            $answer.slideDown();
        }
    })
});
