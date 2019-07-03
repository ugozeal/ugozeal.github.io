/*=================================
| | | | | | PreLoader | | | | | |
=====================================*/
$(window).on("load", function() {
  $("#status").fadeOut();
  $("#preloader")
    .delay(350)
    .fadeOut("slow");
});
/*=================================
| | | | | | Team Section | | | | | |
=====================================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      }
    }
  });
});

/*=================================
| | | | | | Progress Bars | | | | | |
=====================================*/
$(function() {
  $("#progress-elements").waypoint(
    function() {
      $(".progress-bar").each(function() {
        $(this).animate(
          {
            width: $(this).attr("aria-valuenow") + "%"
          },
          2000
        );
      });
      this.destroy();
    },
    { offset: "bottom-in-view" }
  );
});

/*=================================
| | | | | | Responsive Tabs | | | | | |
=====================================*/
$(function() {
  $("#services-tabs").responsiveTabs({
    animation: "slide"
  });
});

/*=================================
| | | | | | Portfolio | | | | | |
=====================================*/
$(window).on("load", function() {
  // Initialize Isotope
  $("#isotope-container").isotope({});
  // filter items on button click
  $("#isotope-filters").on("click", "button", function() {
    // Get filter value
    var filterValue = $(this).attr("data-filter");

    // Filter Portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });

    // Active button
    $("#isotope-filters")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });
});
/*=================================
| | | | | | MAgnifier | | | | | |
=====================================*/
$(function() {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true
    }
    // other options
  });
});
/*=================================
| | | | | | Testimonial | | | | | |
=====================================*/
$(function() {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ]
  });
});
/*=================================
| | | | | | Stats | | | | | |
=====================================*/
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});
/*=================================
| | | | | | Clients | | | | | |
=====================================*/
$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      480: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 6
      }
    }
  });
});

/*=================================
| | | | | | Google Map | | | | | |
=====================================*/
$(window).on("load", function() {
  // Google Map Variables
  var addressString =
    "Ocean Center, Plot 1018 Cadastral Zone B18, Off Oladipo Diya Road. Gudu District, Abuja, NG";
  var myLatlng = { lat: 9.006318, lng: 7.404088 };

  // 1. Render Map
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: myLatlng
  });

  // 2. Add Marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "click To See Address"
  });

  // 3. Add Info window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });

  // Show info window on marker click
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });

  // Resize Function
  google.maps.event.addDomListener(window, "resize", function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, "resize");
    map.setCenter(center);
  });
});

/*=================================
| | | | | | Navigation | | | | | |
=====================================*/
// Show and hide white nav bar
$(function() {
  // Show/hide nav on page load
  showHideNav();

  $(window).scroll(function() {
    // Show/hide nav on page scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show white nav bar
      $("nav").addClass("white-nav-top");

      // Show back to top btn
      $("#back-to-top").fadeIn();

      // Show dark logo
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
    } else {
      $("nav").removeClass("white-nav-top");

      // Show normal logo
      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      // Hide back to top btn
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();
    // Get Section Id
    var section_id = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64
      },
      1250,
      "easeInOutExpo"
    );
  });
});

/*=================================
| | | | | | Mobile Menu | | | | | |
=====================================*/
$(function() {
  // Show mobile navigation
  $("#mobile-nav-open-btn").click(function() {
    $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile navigation
  $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
    $("#mobile-nav").css("height", "0%");
  });
});

/*=================================
| | | | | | Animation | | | | | |
=====================================*/
// Animate on Scroll
$(function() {
  new WOW().init();
});

// Home animation on page load
$(window).on("load", function() {
  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});
