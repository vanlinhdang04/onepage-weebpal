$('.member').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.blogs-content').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

// active menu
var sections = document.querySelectorAll('section');

var removeActiveClass = function() {
    document.querySelectorAll('ul.menu li').forEach( (item) => {
        item.classList.remove('active');
    })
};
var addActiveClass = function(id) {
    var selector = `ul.menu li[title="${id}"]`;
    document.querySelector(selector).classList.add('active');
};
onscroll = function() {
    var scrollPosition = document.documentElement.scrollTop;

    sections.forEach( section => {
        if (
            scrollPosition >= section.offsetTop - section.offsetHeight*0.5 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.5
        ) {
            var currentId = section.attributes.id.value;
            removeActiveClass();
            addActiveClass(currentId);
        }
    })
    
    
}

// ONCLICK SHOW MENU MOBILE
function showMenu() {
    var menu = document.querySelector(`ul.menu`);

    if (menu.classList.value.search('showMenu') != -1) {
        menu.classList.remove('showMenu');
    }
    else {
        menu.classList.add('showMenu');
    }
    
}

// SHOW CHANGE SKIN
function showChangeSkin() {
    var changeSkin = document.querySelector(`.changeSkin`);
    var skinCog = document.querySelector(`.changeSkin .skin-icon i`)

    if (changeSkin.classList.value.search('show-change-skin') != -1) {
        changeSkin.classList.remove('show-change-skin');
        skinCog.classList.remove('fa-spin');
    }
    else {
        changeSkin.classList.add('show-change-skin');
        skinCog.classList.add('fa-spin');
    }
}
