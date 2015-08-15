$(document).ready(function () {

    function swapContent(e) {
        $(e.currentTarget).find('.content').toggleClass('hidden');
    }

    //jQuery function to show/hide team-member Bios
    //$('.member').on("mouseenter click", function(e) {
    //    //Returns false if the event is running
    //    var nameHidden = $(e.currentTarget).find('.name').hasClass('hidden');
    //
    //    if (nameHidden) {
    //        e.stopPropagation();
    //    } else {
    //        // Fires once
    //        // - Hides Name
    //        // - Shows Tagline
    //        swapContent(e);
    //        // Waits 2 seconds and returns the page to normal.
    //        setTimeout(function() {
    //            swapContent(e);
    //        }, 2000);
    //    }
    //});
});