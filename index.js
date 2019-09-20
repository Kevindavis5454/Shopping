$('.shopping-list').empty();

$(function myShoppingList() {
    $("#js-shopping-list-form").submit( event => {
        event.preventDefault();


        const itemNeeded = $(this).find('input[name="shopping-list-entry"]').val();

        const results = [];

        results.push( $('<li><span class="shopping-item">'+ itemNeeded +'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button>&nbsp;<button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'));


        $('.shopping-list').append(results);


    });

    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
});


