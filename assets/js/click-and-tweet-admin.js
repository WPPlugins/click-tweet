jQuery(function($){

    /**
     * toggles username text field
     */
    $('[name="click_and_tweet_settings[use_default_username]"]').on('change', function(){
        $('.default-username').toggleClass('hidden');
    });

    var myOptions = {
        defaultColor: false,
        hide: true,
        palettes: ['#55acee','','','','']
    };
    
    $('.tweet-color-field').wpColorPicker(myOptions);

});
