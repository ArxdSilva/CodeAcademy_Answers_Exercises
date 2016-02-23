'same thing as previous'

$(document).ready(function() {
    $('#button').click(function(){
        var toAdd = $('input[name=checkListItem]').val();
        $('.list').append('<div class='item'>" + toAdd + "</div>');
        });
    $(document).on('click','div', function(){
        $(this).remove();
    });
});
