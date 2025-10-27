const swiperTrending = new Swiper('.trending-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            touchRatio: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            touchRatio: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            touchRatio: 0,
        },
        1440: {
            slidesPerView: 6,
            spaceBetween: 10,
            touchRatio: 0,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperWatchAgain = new Swiper('.watch-again-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            touchRatio: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            touchRatio: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            touchRatio: 0,
        },
        1440: {
            slidesPerView: 6,
            spaceBetween: 10,
            touchRatio: 0,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperNewReleases = new Swiper('.new-releases-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            touchRatio: 1,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
            touchRatio: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            touchRatio: 0,
        },
        1440: {
            slidesPerView: 6,
            spaceBetween: 10,
            touchRatio: 0,
        },
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Create Movie Card
const trendingContainer = document.querySelector(
    '.trending-swiper .swiper-wrapper'
);
const watchAgainContainer = document.querySelector(
    '.watch-again-swiper .swiper-wrapper'
);
const newReleasesContainer = document.querySelector(
    '.new-releases-swiper .swiper-wrapper'
);

const createSlideImage = (element) => {
    const slideImage = createElement('div');
    addClass(slideImage, 'slide-image', 'position-relative');

    const movieImage = createElement('img');
    addClass(movieImage, 'card-img');
    addAttribute(movieImage, 'data-src', `${element.img}`);
    addAttribute(movieImage, 'alt', `${element.alt}`);

    const slideMuteButton = createElement('button');
    addClass(slideMuteButton, 'slide-mute-button');
    slideMuteButton.innerHTML = `<ion-icon name="volume-mute-outline"></ion-icon>`;

    appendElement(slideImage, movieImage, slideMuteButton);

    return slideImage;
};

const createHiddenButtons = (element) => {
    const hiddenThumbsContainer = createElement('div');
    addClass(
        hiddenThumbsContainer,
        'hidden-thumbs-container',
        'position-absolute',
        'bg-dark',
        'gap-4',
        'd-flex',
        'justify-content-center',
        'rounded-pill'
    );

    const hiddenThumbUp = createElement('button');
    addClass(
        hiddenThumbUp,
        'hidden-thumb-up',
        'hidden-thumb',
        'position-relative'
    );
    hiddenThumbUp.innerHTML = ` <ion-icon name="thumbs-up-outline" data-hidden-thumb="${element.alt}">
                                </ion-icon>
                                <span class="position-absolute bg-white text-black fw-medium px-3 py-1 mb-0 shadow">
                                 I like this
                                </span>`;

    const hiddenThumbDown = createElement('button');
    addClass(
        hiddenThumbDown,
        'hidden-thumb-down',
        'hidden-thumb',
        'position-relative'
    );
    hiddenThumbDown.innerHTML = ` <ion-icon name="thumbs-down-outline" data-hidden-thumb="${element.alt}">
                                  </ion-icon>
                                  <span class="position-absolute bg-white text-black fw-medium px-3 py-1 mb-0 shadow">
                                  Not for me
                                  </span>`;

    appendElement(hiddenThumbsContainer, hiddenThumbUp, hiddenThumbDown);

    return hiddenThumbsContainer;
};

const createSlideBodyButtons = (element) => {
    const slideBodyButtons = createElement('div');
    addClass(slideBodyButtons, 'slide-body-buttons', 'd-flex', 'gap-1');

    const playButton = createElement('button');
    playButton.innerHTML = `<ion-icon name="play"></ion-icon>`;

    const addButton = createElement('button');
    addClass(addButton, 'add-icon', 'position-relative');
    addButton.innerHTML = `<ion-icon name="add"></ion-icon>
                            <span class="position-absolute bg-white text-black fw-medium px-3 py-1 mb-0 shadow">Add to My List</span>`;

    const thumbButton = createElement('div');
    addClass(thumbButton, 'slide-thumb', 'position-relative');
    thumbButton.innerHTML = `<ion-icon name="thumbs-up-outline" 
                              data-slide-thumb="${element.alt}"></ion-icon>`;

    appendElement(thumbButton, createHiddenButtons(element));

    const chevronButton = createElement('button');
    addClass(
        chevronButton,
        'chevron-down-icon',
        'position-relative',
        'ms-auto'
    );
    chevronButton.innerHTML = `<ion-icon name="chevron-down-outline"></ion-icon>
                            <span class="position-absolute bg-white text-black fw-medium px-3 py-1 mb-0 shadow">More info</span>`;

    appendElement(
        slideBodyButtons,
        playButton,
        addButton,
        thumbButton,
        chevronButton
    );

    return slideBodyButtons;
};

const createSlideBodyInfo = (element) => {
    const slideBodyInfo = createElement('div');
    addClass(slideBodyInfo, 'slide-body-info');
    slideBodyInfo.innerHTML = `<p>
                                  <span class="maturity-num">${element.maturityRating}</span>
                                  ${element.seasonLength}
                                  <span class="player-feature-badge">${element.playerFeatureBadge}</span>
                                </p>`;

    return slideBodyInfo;
};

const createSlideBodyGenres = (element) => {
    const slideBodyGenres = createElement('div');
    addClass(slideBodyGenres, 'slide-body-genres', 'd-flex', 'gap-2');
    slideBodyGenres.innerHTML = `<p>${element.genres[0]}</p>
                                 <p>${element.genres[1]}</p>
                                 <p>${element.genres[2]}</p>`;

    return slideBodyGenres;
};

const createSlideBody = (element) => {
    const slideBody = createElement('div');
    addClass(slideBody, 'slide-body');

    appendElement(
        slideBody,
        createSlideBodyButtons(element),
        createSlideBodyInfo(element),
        createSlideBodyGenres(element)
    );
    return slideBody;
};

const createMovieSlide = (array, container) => {
    array.forEach((element) => {
        const slide = createElement('div');
        addClass(slide, 'swiper-slide', 'slide');

        appendElement(
            slide,
            createSlideImage(element),
            createSlideBody(element)
        );

        return appendElement(container, slide);
    });
};

createMovieSlide(trending, trendingContainer);
createMovieSlide(watchAgain, watchAgainContainer);
createMovieSlide(newReleases, newReleasesContainer);

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');

const lazyImageObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            const image = entry.target;

            if (entry.isIntersecting) {
                image.src = image.getAttribute('data-src');
                observer.unobserve(image);
            }
        });
    },
    {
        root: null,
        threshold: 0,
    }
);

observeElement(lazyImageObserver, lazyImages);

// Observe Sections
const sections = document.querySelectorAll('section.hidden');

const sectionObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                removeClass(entry.target, 'hidden');
                addClass(entry.target, 'slide-up');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        root: null,
        threshold: 0.65,
    }
);

observeElement(sectionObserver, sections);

// Like or Dislike Movie
const slideImages = document.querySelectorAll('.card-img');
const cardThumbButtons = document.querySelectorAll('.slide-thumb > ion-icon');
const hiddenThumbButtons = document.querySelectorAll('.hidden-thumb ion-icon');

const isThumbUp = (hiddenThumb) => {
    return hiddenThumb.getAttribute('name') === 'thumbs-up-outline'
        ? 'thumbs-up'
        : 'thumbs-down';
};

hiddenThumbButtons.forEach((hiddenThumb) => {
    hiddenThumb.addEventListener('click', () => {
        cardThumbButtons.forEach((cardThumb) => {
            const isSlideAndThumbTheSameAttribute =
                getAttribute(hiddenThumb, 'data-hidden-thumb') ===
                getAttribute(cardThumb, 'data-slide-thumb');

            isSlideAndThumbTheSameAttribute &&
                cardThumb.setAttribute('name', isThumbUp(hiddenThumb));

            slideImages.forEach((image) => {
                const isMovieLiked = isThumbUp(hiddenThumb) === 'thumbs-up';
                const isImageAndThumbTheSameAttribute =
                    getAttribute(image, 'alt') ===
                    getAttribute(hiddenThumb, 'data-hidden-thumb');

                if (isMovieLiked && isImageAndThumbTheSameAttribute) {
                    removeClass(image, 'gray-image');
                } else if (isImageAndThumbTheSameAttribute) {
                    addClass(image, 'gray-image');
                }
            });
        });
    });
});

// Show Search Bar
const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.search-icon');
const searchInput = document.querySelector('.search-bar input');

const searchBarVisibility = (e) => {
    const isTargetSearchIcon = e.target === searchIcon;
    const isTargetOutsideSearchBar =
        e.target !== searchBar &&
        e.target !== searchIcon &&
        e.target !== searchInput;

    if (isTargetSearchIcon) {
        toggleClass(searchBar, 'show-search-bar');
        toggleClass(searchInput, 'visually-hidden');
    } else if (isTargetOutsideSearchBar) {
        addClass(searchInput, 'visually-hidden');
        removeClass(searchBar, 'show-search-bar');
    }
};

document.addEventListener('click', searchBarVisibility);

// Bottom Navbar: Show Genres Dropdown Menu
const genresMenu = document.querySelector('.genres-menu');
const genresButton = document.querySelector('.genres-button');

const genresMenuVisibility = (e) => {
    const isTargetGenresMenu = e.target === genresButton;
    const isTargetOutsideGenresMenu = e.target !== genresButton;

    if (isTargetGenresMenu) {
        toggleClass(genresMenu, 'visually-hidden');
        toggleClass(genresButton, 'genres-clicked-background');
    } else if (isTargetOutsideGenresMenu) {
        addClass(genresMenu, 'visually-hidden');
        removeClass(genresButton, 'genres-clicked-background');
    }
};

document.addEventListener('click', genresMenuVisibility);

// Bottom Navbar: Toggle Background on Scroll
const bottomRowNav = document.querySelector('.bottom-row-nav');

const toggleBottomNavBackground = () => {
    const isScrollZero = window.scrollY === 0;

    if (isScrollZero) {
        addClass(bottomRowNav, 'bottom-row-transparent');
        removeClass(bottomRowNav, 'bottom-row-black-bg');
    } else {
        addClass(bottomRowNav, 'bottom-row-black-bg');
        removeClass(bottomRowNav, 'bottom-row-transparent');
    }
};

window.addEventListener('scroll', toggleBottomNavBackground);
