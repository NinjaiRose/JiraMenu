AJS.toInit(function() {
    AJS.$('#website_link').click(function () {
        if(document.getElementById("ghx-board-name").textContent == 'Tow Epics') {
            $(this).toggleClass('btn_yellow');

            $("span.ghx-extra-field.ghx-fa").css("margin-left", "30px");

            $(".ghx-issue .ghx-extra-fields").css("margin-top", "5px");
            $(".ghx-issue .ghx-extra-fields").css("display", "flex");

            $(".ghx-issue .ghx-flags").css("left", "20px");
            $(".ghx-issue .ghx-flags").css("top", "5px");

            $(".ghx-issue .ghx-highlighted-fields").css("margin-top", "5px");

            $(".ghx-issue .ghx-type").css("left", "5px");
            $(".ghx-issue .ghx-type").css("top", "5px");

            $(".ghx-issue-content").css("font-size", "12px");
            $(".ghx-issue-content").css("margin-top", "3px");
            $(".ghx-issue-content").css("padding", "5px");
            $(".ghx-issue-content").css("display", "flex");
            $(".ghx-issue-content").css("margin-bottom", "-30px");

            $(".ghx-issue-fields .ghx-key ").css("margin-left", "30px");

            return false;
        }
        return false;
    });
});
