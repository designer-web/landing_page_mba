(function ($) {
    "use strict";
    var $wn =  $(window);
    $wn.on('load',function () {


            /*********************
             *  Banner Carousel  *
             *********************/
            var $element = $('.banner-slider');
            if ($element.length > 0) {
                $element.bxSlider({
                    controls: false,
                    auto: true,
                    mode: 'fade',
					speed: 800,
                });
            }
			
            /***************************
             *   Gallery Popup  *
             ***************************/
            var $groups = {};
            var $gallery = $('.galleryItem');
            $gallery.each(function () {
                var id = parseInt($(this)
                    .attr('data-group'), 10);
                if (!$groups[id]) {
                    $groups[id] = [];
                }
                $groups[id].push(this);
            });
            $.each($groups, function () {
                $(this)
                    .magnificPopup({
                        type: 'image',
                        closeOnContentClick: true,
                        gallery: {
                            enabled: true
                        }
                    })
            });
			

            /**********************
             *   Gallery Isotope  *
             **********************/
            var $isotopeContainer = $('.isotopeContainer');
            if ($isotopeContainer.length > 0) {
                $isotopeContainer.isotope({
                    itemSelector: '.isotopeSelector'

                });
                $('.isotopeFilters')
                    .on('click', 'a', function (e) {
                        $('.isotopeFilters')
                            .find('.active')
                            .removeClass('active');
                        $(this)
                            .parent()
                            .addClass('active');
                        var $filterValue = $(this)
                            .attr('data-filter');
                        $isotopeContainer.isotope({
                            filter: $filterValue
                        });
                        e.preventDefault();
                        return false;
                    });
            }

            /**************************
             *   Testimonial Masonry  *
             **************************/
            var $element = $('.testimonials');
            if ($element.length > 0) {
                $element.masonry({
                    itemSelector: '.grid-item',
                    percentPosition: true
                });
            }

            /****************************
             *   News & Events Masonry  *
             ****************************/
            var $element = $('.news-listing');
            if ($element.length > 0) {
                $element.masonry({
                    itemSelector: '.grid-item',
                    percentPosition: true
                });
            }

            /*****************
             *   Datepicker  *
             *****************/
            var $element = $('.datepicker');
            if ($element.length > 0) {
                $element.datepicker()
            }

            /****************************
             *   Validate Contact Form  *
             ****************************/
            var $form = $("#ContactForm");
            if ($form.length > 0) {
                $form.validate({
                    rules: {
                        first_name: {
                            required: true,
                            minlength: 3
                        },
                        last_name: {
                            required: true
                        },
                        company: {
                            required: true
                        },
                        business_email: {
                            required: true,
                            email: true
                        },
                        phone_number: {
                            required: true,
                            number: true,
                            minlength: 10
                        },
                        job_title: {
                            required: true
                        }
                    },
                    messages: {
                        first_name: {
                            required: "Please Enter Name",
                            minlength: "Name must consist of at least 3 characters"
                        },
                        business_email: {
                            required: "Please provide an Email",
                            email: "Please enter a valid Email"
                        },
                        phone_number: {
                            required: "Please provide Phone Number",
                            number: "Please enter only digits",
                            minlength: "Phone Number must be atleast 10 Numbers"
                        },
                        job_title: {
                            required: "Please Enter Job Tittle"
                        },
                        last_name: {
                            required: "Please Enter Last Name"
                        },
                    },

                    submitHandler: function ($form) {
                        //Send Booking Mail AJAX
                        var formdata = jQuery("#ContactForm")
                            .serialize();
                        jQuery.ajax({
                            type: "POST",
                            url: "contact_form/ajax-contact.php",
                            data: formdata,
                            dataType: 'json',
                            async: false,
                            success: function (data) {
                                if (data.success) {
                                    jQuery('.msg')
                                        .removeClass('msg-error');
                                    jQuery('.msg')
                                        .addClass('msg-success');
                                    jQuery('.msg')
                                        .text('Thank You, Your Message Has been Sent');
                                } else {
                                    jQuery('.msg')
                                        .removeClass('msg-success');
                                    jQuery('.msg')
                                        .addClass('msg-error');
                                    jQuery('.msg')
                                        .text('Error on Sending Message, Please Try Again');
                                }

                            },
                            error: function (error) {
                                jQuery('.msg')
                                    .removeClass('msg-success');
                                jQuery('.msg')
                                    .addClass('msg-error');
                                jQuery('.msg')
                                    .text('Something Went Wrong');
                            }
                        });
                    }
                });
            }
        });

    /***************************
     *   Scroll to top action  *
     ***************************/
    var $element = $('.scroll-top');

    $wn.on("scroll", function () {
            if ($(this)
                .scrollTop() > 100) {
                $element.fadeIn();
            } else {
                $element.fadeOut();
            }
        });

    $element.on("click", function () {
        var $scrollElement = $("html, body");
        $scrollElement.animate({
            scrollTop: 0
        }, 600);
        return false;
    });

})(jQuery);