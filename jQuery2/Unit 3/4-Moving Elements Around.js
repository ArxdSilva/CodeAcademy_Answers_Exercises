$(document).ready(function() {
    $('div #one').after("<p>I'm a paragraph!</p>");
    $('div #two').after($("p"));
    });
