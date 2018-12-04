// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("social_media").style.display = "block";

    } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("social_media").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Form Validation Plug in
$(document).ready(function() {
    var validation = $("#myForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            season: {
                minlength: jQuery.validator.format("Pick a minimum of {0} choices")
            }
        },
        errorPlacement: function(error, element) {
            if (element.is("[name=color]"))
                error.appendTo($('p#color'));
            else if (element.is("[name=season]"))
                error.appendTo($('p#season'));
            else if (element.is("[name=comments]"))
                error.insertAfter($('label[for=comments]'));
            else
                error.insertAfter(element);
        }
    });
});