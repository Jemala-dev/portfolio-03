/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/accordion/accordion.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/accordion/accordion.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $accordion = $('.js-accordion');
  if (!$accordion.length) return;
  $accordion.on("click", function () {
    var that = $(this);
    var nextEl = that.next();
    var nextHeight = nextEl[0].scrollHeight;
    that.toggleClass("accordion__head_active");

    if (that.hasClass("accordion__head_active")) {
      return nextEl.css({
        "max-height": nextHeight,
        overflow: "visible",
        opacity: 1
      });
    }

    nextEl.css({
      "max-height": 0,
      overflow: "hidden",
      opacity: 0
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/buy/address.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/buy/address.js ***!
  \*******************************************/
/*! exports provided: mapAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAddress", function() { return mapAddress; });
var mapAddress = [{
  id: 1,
  coords: [55.804691, 36.981356],
  city: "Москва"
}, {
  id: 2,
  coords: [55.602142, 37.346512],
  city: "Санкт-Петербург"
}, {
  id: 3,
  coords: [55.909983, 37.736710],
  city: "Пермь"
}, {
  id: 4,
  coords: [55.570397, 37.475477],
  city: "Владимир"
}];

/***/ }),

/***/ "./src/blocks/modules/buy/buy.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/buy/buy.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var mapAddress = [{
    id: 1,
    coords: [55.804691, 36.981356],
    city: "Москва"
  }, {
    id: 2,
    coords: [55.602142, 37.346512],
    city: "Санкт-Петербург"
  }, {
    id: 3,
    coords: [55.909983, 37.736710],
    city: "Пермь"
  }, {
    id: 4,
    coords: [55.570397, 37.475477],
    city: "Владимир"
  }];
  var $ymapsObj = $('.buy');
  var $buyShops = $('.js-buy-shops');
  var $buyShopSearch = $('.js-shop-search');
  if (!$ymapsObj.length) return;
  var myMap = null;
  var markers = [];
  ymaps.ready(init);

  function init() {
    $('.buy__map').each(function (_, el) {
      myMap = new ymaps.Map(el, {
        center: [55.814472, 37.324874],
        zoom: 8,
        controls: []
      });
    });
    setPlaceMarks(mapAddress, function (mapPlace) {
      return myMap.geoObjects.add(mapPlace);
    });
  }

  function setPlaceMarks(data, cb) {
    var addresses = data.length > 0 ? data : [data];
    addresses.forEach(function (address) {
      var mapPlace = new ymaps.Placemark(address.coords, {}, {
        iconLayout: 'default#image',
        iconImageHref: './img/content/pin.png',
        iconColor: '#5A5C69',
        iconImageSize: [24, 46],
        imageOffset: [-21, -56]
      });
      mapPlace.options.set('_id_', address.id);
      markers.push(mapPlace);
      mapPlace.events.add('click', function (e) {
        var options = e.get('target').options;
        var currentId = options.get('_id_');
        changeShops(currentId);
        changePlacemark(currentId);
      });
      cb(mapPlace);
    });
  }

  function changeShops(id) {
    var scrollTo = $("[data-shop-id=\"".concat(id, "\"]"));
    scrollTo.toggleClass('is_active').siblings().removeClass('is_active');
    var parent = scrollTo.parent();
    var position = scrollTo.offset().top - parent.offset().top + parent.scrollTop();
    parent.animate({
      scrollTop: position
    });
  }

  function changePlacemark(id) {
    var currentPin = markers.find(function (p) {
      return p.options.get('_id_') === Number(id);
    });
    markers.filter(function (p) {
      return p.options.get('_id_') !== Number(id);
    }).forEach(function (p) {
      if (p.options.get('iconImageHref').includes('pin-orange')) {
        p.options.set('iconImageHref', './img/content/pin.png');
      }
    });

    if (!currentPin.options.get('iconImageHref').includes('pin-orange')) {
      currentPin.options.set('iconImageHref', './img/content/pin-orange.png');
    } else {
      currentPin.options.set('iconImageHref', './img/content/pin.png');
    }
  }

  function shopsFilter(value) {
    var filter = value.toUpperCase();
    var items = $buyShops.find('[data-shop-city]');
    items.each(function (_, item) {
      item.classList.remove('is_active');
      var shopCity = item.dataset.shopCity;

      if (shopCity.toUpperCase().indexOf(filter) > -1) {
        item.style.display = null;
      } else {
        item.style.display = 'none';
      }
    });
  }

  var timer = null;
  $buyShopSearch.on('input', function (e) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      markers.forEach(function (p) {
        return myMap.geoObjects.remove(p);
      });
      markers = [];
      var value = e.target.value;
      var current = mapAddress.find(function (address) {
        return address.city.toLowerCase() === value.toLowerCase();
      });
      shopsFilter(value);

      if (current) {
        setPlaceMarks(current, function (mapPlace) {
          return myMap.geoObjects.add(mapPlace);
        });
      } else if (value === '') {
        setPlaceMarks(mapAddress, function (mapPlace) {
          return myMap.geoObjects.add(mapPlace);
        });
      }

      clearTimeout(timer);
    }, 300);
  });
  $buyShops.on('click', '[data-shop-id]', function (e) {
    var shopId = e.currentTarget.dataset.shopId;
    changePlacemark(shopId);
    changeShops(shopId);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/card-detail/card-detail.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/card-detail/card-detail.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $tabs = $('.js-card-detail-tabs');
  var cardDetails = $('.js-card-detail').children();
  $tabs.on('click', 'button[data-id]', function (e) {
    var id = e.currentTarget.dataset.id;
    var $current = $(e.currentTarget);
    changeClass($current);
    $('html, body').animate({
      scrollTop: $("#".concat(id)).offset().top - 90
    }, 700);
  });

  function changeClass(btn) {
    btn.addClass('tabs__button_active').parent().siblings().children().removeClass('tabs__button_active');
  }

  function scrollToPosition(scrollTo, parent) {
    var position = scrollTo.offset().left - parent.offset().left + parent.scrollLeft();
    parent.animate({
      scrollLeft: position
    });
  }

  var currentId = null;
  $(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    cardDetails.each(function (_, block) {
      var $block = $(block);
      var offsetTop = $block.offset().top - 100;
      var offsetBottom = offsetTop + $block.outerHeight();

      if (offsetTop <= scrollTop && offsetBottom >= scrollTop) {
        if (currentId !== $block.attr('id')) {
          currentId = $block.attr('id');
          var $currentTab = $("[data-id=\"".concat($block.attr('id'), "\"]"));
          changeClass($currentTab);
          scrollToPosition($currentTab, $tabs);
        }
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/card/card.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/card/card.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $cardSlider = $('.js-card-slider');
  if (!$cardSlider.length) return;
  $cardSlider.each(function (_, slider) {
    var $slider = $(slider);
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/catalog/catalog.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/catalog/catalog.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $sliderCatalog = $('.js-catalog-slider');
  var $sliderCatalogPrev = $('.js-catalog-slider-prev');
  var $sliderCatalogNext = $('.js-catalog-slider-next');
  if (!$sliderCatalog.length) return;
  $sliderCatalog.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false
  });
  $sliderCatalogPrev.on('click', function () {
    return $sliderCatalog.slick('slickPrev');
  });
  $sliderCatalogNext.on('click', function () {
    return $sliderCatalog.slick('slickNext');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/comparison/comparison.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/comparison/comparison.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $window = $(window);
  var $comparisonFixed = $('.js-comparison-fixed');
  var $comparisonNav = $('.js-comparison-nav');
  var $imgComparisonSlider = $('.js-comparison-img-slider');
  var $comparisonSlider = $('.js-comparison-slider');
  var $comparisonParamSlider = $('.js-comparison-params-slider');
  var $comparisonSliderClone = $('.js-comparison-slider-clone');
  var $comparisonParamSliderClone = $('.js-comparison-params-slider-clone');
  var $comparisonCounterNav = $('.js-comparison-counter-nav');
  var $comparisonCounterNavClone = $('.js-comparison-counter-nav-clone');

  var addZero = function addZero(n) {
    return "".concat(n < 10 ? '0' + n : n);
  };

  var counterTemplate = function counterTemplate(count, total) {
    return "\n            <span class=\"active\">".concat(count, "</span> <span class=\"total\">/ ").concat(total, "</span>\n        ");
  };

  $comparisonNav.on('click', 'button', function (e) {
    var dir = e.currentTarget.dataset.dir;
    if (dir === 'prev') $comparisonSlider.slick('slickPrev');
    if (dir === 'next') $comparisonSlider.slick('slickNext');
  });
  $comparisonCounterNav.on('click', 'button', function (e) {
    var dir = e.currentTarget.dataset.dir;
    if (dir === 'counter-prev') $comparisonSlider.slick('slickPrev');
    if (dir === 'counter-next') $comparisonSlider.slick('slickNext');
  });
  $comparisonCounterNavClone.on('click', 'button', function (e) {
    var dir = e.currentTarget.dataset.dir;
    if (dir === 'counter-clone-prev') $comparisonSliderClone.slick('slickPrev');
    if (dir === 'counter-clone-next') $comparisonSliderClone.slick('slickNext');
  });
  $comparisonSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    slick.$slider.parent('[data-catalog]').find('.js-comparison-counter').html(counterTemplate(addZero(i), addZero(slick.slideCount)));

    if (slick.slideCount === 0) {
      $('.js-comparison-counter').css("display", "none");
      $('.js-comparison-wrap').remove();
    }
  });
  $comparisonSliderClone.on('init reInit', function (event, slick, currentSlide, nextSlide) {
    slick.$slider.parent('[data-catalog]').find('.js-comparison-counter-clone').html(counterTemplate('02', addZero(slick.slideCount)));
  });
  $comparisonSliderClone.on('init afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    slick.$slider.parent('[data-catalog]').find('.js-comparison-counter-clone').html(counterTemplate(addZero(i), addZero(slick.slideCount)));

    if (slick.slideCount === 0) {
      slick.$slider.parent('[data-catalog]').find('.js-comparison-counter-clone').css("display", "none");
    }
  });
  $comparisonSlider.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    asNavFor: '.js-comparison-params-slider',
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 1381,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: false
      }
    }, {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }]
  });
  $comparisonParamSlider.slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js-comparison-slider',
    arrows: false,
    dots: false,
    draggable: false,
    touchMove: false,
    swipe: false,
    responsive: [{
      breakpoint: 1381,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable: false,
        touchMove: false,
        swipe: false
      }
    }, {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        draggable: false,
        touchMove: false,
        swipe: false
      }
    }]
  });
  $comparisonSliderClone.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-comparison-params-slider-clone',
    arrows: false,
    dots: false
  });
  $comparisonParamSliderClone.slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-comparison-slider-clone',
    arrows: false,
    dots: false,
    draggable: false,
    touchMove: false,
    swipe: false
  });
  $window.on('scroll', function () {
    if ($window.scrollTop() >= 470) {
      $comparisonFixed.addClass("is_fixed");
    } else {
      $comparisonFixed.removeClass("is_fixed");
    }
  });
  $imgComparisonSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/counter/counter.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/counter/counter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var app = {
    numberFormat: function numberFormat(num) {
      return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ");
    },
    counter: function counter(selector) {
      var _this = this;

      var $app = typeof selector === 'string' ? document.querySelector(selector) : selector;

      if ($app) {
        listenApp = this.changeAllSumOutputResult($app);
        var _$app$dataset = $app.dataset,
            min = _$app$dataset.min,
            max = _$app$dataset.max,
            price = _$app$dataset.price;
        var decrement = $app.querySelector('[data-decrement]');
        var increment = $app.querySelector('[data-increment]');
        var input = $app.querySelector('[data-input]');
        var sumResult = $app.querySelector('[data-sum]');
        var counter = Number(input.value);

        var changeSum = function changeSum(counter) {
          var sum = Number(price) * counter;
          sumResult.innerText = _this.numberFormat(sum);
          sumResult.setAttribute('data-sum', sum);
        };

        changeSum(counter);
        decrement.addEventListener('click', function () {
          if (Number(min) < counter) {
            counter--;
            input.value = counter;
            changeSum(counter);
            listenApp();
          }
        });
        increment.addEventListener('click', function () {
          if (Number(max) > counter) {
            counter++;
            input.value = counter;
            changeSum(counter);
            listenApp();
          }
        });
        input.addEventListener('change', function (e) {
          var value = e.target.value;
          if (value === '') e.target.value = counter = Number(min);
          if (Number(value) < Number(max)) counter = Number(value);else e.target.value = counter = Number(max);
          changeSum(counter);
          listenApp();
        });
      }
    },
    handleSumChange: function handleSumChange() {
      var sum = 0;
      Array.from(document.querySelectorAll('.js-counter [data-sum]')).forEach(function (s) {
        sum += +s.dataset.sum;
      });
      var shoppingSum = document.querySelector('.js-shopping-sum');
      if (shoppingSum) shoppingSum.innerText = app.numberFormat(sum);
    },
    changeAllSumOutputResult: function changeAllSumOutputResult(el) {
      var event = new Event('changeSum');
      el.addEventListener('changeSum', this.handleSumChange, false);
      return function () {
        return el.dispatchEvent(event);
      };
    }
  };
  document.querySelectorAll('.js-counter').forEach(function (el) {
    return app.counter(el);
  });
  app.handleSumChange();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.js-phone').inputmask({
    "mask": "+7 (999) 999-9999"
  });
  var $addUrlInput = $('.js-add-url-input');
  $addUrlInput.on('click', '[data-add-button]', function (e) {
    var $that = $(e.currentTarget);
    var parent = $that.parents('.js-add-url-input');
    var inputTemplate = parent.find('#add-url-input')[0].content.cloneNode(true);
    $that.parent().before(inputTemplate);
    var inputLength = $('[data-add-input]').length;

    if (inputLength >= 4) {
      return $that.remove();
    }
  });

  var _submitHandler = function submitHandler() {
    $.ajax('https://jsonplaceholder.typicode.com/todos').done(function () {
      var _window;

      (_window = window) === null || _window === void 0 ? void 0 : _window.showFancyBox("#modal-success");
    });
  };

  var validationRules = {
    dealers: {
      rules: {
        lastname: "required",
        name: "required",
        surname: "required",
        job: "required",
        country: "required",
        locality: "required",
        region: "required",
        namecompany: "required",
        company: "required",
        sitecompany: {
          required: true
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: function required(elem) {
            var onlyNumbers = elem.value.replace(/[^0-9]/g, '');
            return onlyNumbers.length >= 11 ? false : true;
          }
        },
        url: {
          required: true
        }
      },
      messages: {
        name: "Указана неверная информация",
        surname: "Указана неверная информация",
        lastname: "Указана неверная информация",
        job: "Указана неверная информация",
        region: "Указана неверная информация",
        country: "Указана неверная информация",
        locality: "Указана неверная информация",
        company: "Указана неверная информация",
        namecompany: "Указана неверная информация",
        sitecompany: "Указана неверная информация",
        email: "Указана неверная информация",
        phone: "Указана неверная информация",
        url: "Указана неверная информация"
      },
      submitHandler: function submitHandler() {
        _submitHandler();

        return false;
      }
    },
    shopping: {
      rules: {
        email: {
          required: true,
          email: true
        },
        phone: {
          required: function required(elem) {
            var onlyNumbers = elem.value.replace(/[^0-9]/g, '');
            return onlyNumbers.length >= 11 ? false : true;
          }
        },
        name: "required",
        city: {
          required: true
        },
        dealership: {
          required: true
        }
      },
      messages: {
        name: "Указана неверная информация",
        email: "Указана неверная информация",
        phone: "Указана неверная информация",
        city: "",
        dealership: ""
      },
      submitHandler: function submitHandler(form) {
        return false;
      }
    }
  };
  var $form = $('.js-form');
  if (!$form.length) return;
  {
    $form.each(function (_, form) {
      var formValidation = form.dataset.formValidation;
      $(form).validate(validationRules[formValidation]);
    });
  }
  ;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $body = $("body");
  var $header = $('.js-header');
  var $headerBurger = $(".js-header-burger");
  var $headerMenu = $(".js-header-menu");
  var $window = $(window);
  var isFixed = false;
  $window.on("scroll", function () {
    if ($window.scrollTop() > $header.height() && !isFixed) {
      $header.addClass("is-fixed");
      isFixed = true;
    } else if ($window.scrollTop() < $header.height() && isFixed) {
      $header.removeClass("is-fixed");
      isFixed = false;
    }
  });
  $headerBurger.on("click", function () {
    if ($(this).hasClass("is-change")) {
      $body.removeAttr("style");
    } else {
      $body.css("overflow", "hidden");
    }

    $(this).toggleClass("is-change");
    $headerMenu.toggleClass("is-show");
  });
  $headerMenu.on("click", function (e) {
    if (!!e.target.closest("a")) {
      setTimeout(function () {
        $headerBurger.removeClass("is-change");
        $headerMenu.removeClass("is-show");
      }, 500);
      $body.removeAttr("style");
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/intro/intro.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/intro/intro.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $anchor = $('.js-anchor');
  $anchor.on('click', function (e) {
    e.preventDefault();
    var $hash = e.currentTarget.getAttribute('href');
    var $current = $(e.currentTarget);

    if (window.matchMedia("(min-width: 1241px)").matches) {
      $('html, body').animate({
        scrollTop: $current.offset().top + 80
      }, 1000);
    } else {
      $('html, body').animate({
        scrollTop: $current.offset().top + 50
      }, 1000);
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $jsFancy = $('.js-fancy');
  $jsFancy.on('click', function (e) {
    e.preventDefault();
    var modalSrc = e.currentTarget.dataset.src || e.currentTarget.getAttribute('data-src');
    showFancyBox(modalSrc);
  });

  function showFancyBox(src) {
    Fancybox.show([{
      src: src,
      type: "inline"
    }]);
  }

  window.showFancyBox = showFancyBox;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/photogallery/photogallery.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/photogallery/photogallery.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $sliderImg = $('.js-slider-img');
  var $sliderImgPrev = $('.js-slider-img-prev');
  var $sliderImgNext = $('.js-slider-img-next');
  if (!$sliderImg.length) return;
  $sliderImg.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [{
      breakpoint: 1240,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }, {
      breakpoint: 670,
      settings: {
        dots: false,
        arrows: false,
        variableWidth: true
      }
    }]
  });
  $sliderImgPrev.on('click', function () {
    return $sliderImg.slick('slickPrev');
  });
  $sliderImgNext.on('click', function () {
    return $sliderImg.slick('slickNext');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/product/product.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/product/product.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $sliderProduct = $('.js-product-slider');
  var $sliderProductNav = $('.js-product-nav');
  var $sliderProductNavPrev = $('.js-product-nav-prev');
  var $sliderProductNavNext = $('.js-product-nav-next');
  if (!$sliderProduct.length) return;
  $sliderProduct.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.js-product-nav',
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        asNavFor: null,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  });
  $sliderProductNav.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    asNavFor: '.js-product-slider',
    focusOnSelect: true,
    verticalSwiping: true,
    // variableWidth: true,
    vertical: true // centerMode: true,

  });
  $sliderProductNavPrev.on('click', function () {
    return $sliderProduct.slick('slickPrev');
  });
  $sliderProductNavNext.on('click', function () {
    return $sliderProduct.slick('slickNext');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/select/select.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/select/select.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $select = $('.js-select');
  if (!$select.length) return;
  $select.each(function (_, select) {
    var $that = $(select);

    var _$that$data = $that.data(),
        placeholder = _$that$data.placeholder;

    $that.select2({
      placeholder: placeholder,
      width: null
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/shopping/shopping.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/shopping/shopping.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $anchor = $('.js-anchor-form');
  $anchor.on('click', function (e) {
    e.preventDefault();
    var $hash = e.currentTarget.getAttribute('href');
    var scrollToBlock = document.querySelector($hash);
    window.scrollTo({
      behavior: "smooth",
      top: scrollToBlock.offsetTop - 50
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $tabBtn = $('.js-tabs-btn');
  var $tabContent = $('.js-tabs-content');

  if ($tabBtn.length) {
    $tabBtn.on('click', function () {
      $tabBtn.toggleClass('tabs__button_active');
      var $that = $(this);
      var tab = $that.data('tab');
      $tabContent.children().removeClass('is-active');
      $tabContent.find("[data-tab=\"".concat(tab, "\"]")).addClass('is-active');
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/technologies/technologies.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/technologies/technologies.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $technologiesNav = $('.js-technologies-nav');
  var $sliderFor = $('.js-slider-for');
  var $sliderPrev = $('.js-slider-prev');
  var $sliderNext = $('.js-slider-next');
  if (!$sliderFor.length) return;
  $sliderFor.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true
  });
  $sliderPrev.on('click', function () {
    return $sliderFor.slick('slickPrev');
  });
  $sliderNext.on('click', function () {
    return $sliderFor.slick('slickNext');
  });
  $sliderFor.on('beforeChange', function (e, slick, prev, next) {
    var current = $technologiesNav.children().eq(next);
    current.addClass('is_active').siblings().removeClass('is_active');
    scrollToPosition(current, $technologiesNav);
  });
  $technologiesNav.children().on('click', function (e) {
    var that = $(e.currentTarget);
    var idx = that.index();
    $sliderFor.slick('slickGoTo', idx);
  });

  function scrollToPosition(scrollTo, parent) {
    var position = scrollTo.offset().left - parent.offset().left + parent.scrollLeft();
    parent.animate({
      scrollLeft: position
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/blocks/modules/video/video.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/video/video.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  var $sliderVideo = $('.js-slider-video');
  var $sliderVideoPrev = $('.js-slider-video-prev');
  var $sliderVideoNext = $('.js-slider-video-next');
  if (!$sliderVideo.length) return;
  $sliderVideo.slick({
    slidesToShow: 1.5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    // variableWidth: true,
    responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
        dots: false,
        arrows: false
      }
    }]
  });
  $sliderVideo.on('afterChange', function () {
    $sliderVideo.find('video').each(function (_, video) {
      video.pause();
    });
  });
  $sliderVideoPrev.on('click', function () {
    return $sliderVideo.slick('slickPrev');
  });
  $sliderVideoNext.on('click', function () {
    return $sliderVideo.slick('slickNext');
  });
  $sliderVideo.on('click', '.js-video', function () {
    var that = $(this);
    that.addClass('active');
    var video = that.find('video');
    video.attr('controls', true);
    video[0].play();
  });
});
$(function () {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/catalog/catalog */ "./src/blocks/modules/catalog/catalog.js");
/* harmony import */ var _modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_catalog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_technologies_technologies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/technologies/technologies */ "./src/blocks/modules/technologies/technologies.js");
/* harmony import */ var _modules_technologies_technologies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_technologies_technologies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_buy_buy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/buy/buy */ "./src/blocks/modules/buy/buy.js");
/* harmony import */ var _modules_buy_buy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_buy_buy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_buy_address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/buy/address */ "./src/blocks/modules/buy/address.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/accordion/accordion */ "./src/blocks/modules/accordion/accordion.js");
/* harmony import */ var _modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_accordion_accordion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_card_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/card/card */ "./src/blocks/modules/card/card.js");
/* harmony import */ var _modules_card_card__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_card_card__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/select/select */ "./src/blocks/modules/select/select.js");
/* harmony import */ var _modules_select_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_select_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_photogallery_photogallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/photogallery/photogallery */ "./src/blocks/modules/photogallery/photogallery.js");
/* harmony import */ var _modules_photogallery_photogallery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_photogallery_photogallery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/product/product */ "./src/blocks/modules/product/product.js");
/* harmony import */ var _modules_product_product__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_product_product__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/counter/counter */ "./src/blocks/modules/counter/counter.js");
/* harmony import */ var _modules_counter_counter__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_counter_counter__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_video_video__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/video/video */ "./src/blocks/modules/video/video.js");
/* harmony import */ var _modules_video_video__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_video_video__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_card_detail_card_detail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/card-detail/card-detail */ "./src/blocks/modules/card-detail/card-detail.js");
/* harmony import */ var _modules_card_detail_card_detail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_card_detail_card_detail__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_comparison_comparison__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/comparison/comparison */ "./src/blocks/modules/comparison/comparison.js");
/* harmony import */ var _modules_comparison_comparison__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_comparison_comparison__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/intro/intro */ "./src/blocks/modules/intro/intro.js");
/* harmony import */ var _modules_intro_intro__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_intro_intro__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_shopping_shopping__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/shopping/shopping */ "./src/blocks/modules/shopping/shopping.js");
/* harmony import */ var _modules_shopping_shopping__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_shopping_shopping__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_18__);




















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map