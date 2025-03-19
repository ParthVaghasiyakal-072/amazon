async function hotWatchGetData() {
    const response = await fetch(`http://localhost:3000/INDEX2`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_hotwatch");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.Watches?.filter((element) => element?.starrating >= 1);

    const html = filteredWatches.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                    <div class="product-card-img double-img">
                        <a href="product-default.html">
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        </a>
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <a href="product-default.html" class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </a>
                        </h6>
                        <p class="price">
                            ₹${Math.round(element?.price - (element?.price * 10 / 100))} 
                            <del>₹${element?.price}</del>
                        </p>
                        <div class="rating">
                            <ul style="display: flex; gap: 2px;">${stars}</ul>
                        </div>
                    </div>
                    <span class="for-border"></span>
                </div>
            </div>
        `;
    }).join("");

    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 6,
            // loopedSlides: 50,
            autoHeight: true,
            shortSwipes: false,
            longSwipes: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1500: {
                    slidesPerView: 5,
                },
                1440: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });
    });


    hotWatch.innerHTML = html;
}

hotWatchGetData();


async function hotHomeImproveGetData() {
    const response = await fetch(`http://localhost:3000/INDEX2`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_HomeImprove");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.HomeImprovement?.filter((element) => element?.starrating >= 1);

    const html = filteredWatches.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                    <div class="product-card-img double-img">
                        <a href="product-default.html">
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        </a>
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <a href="product-default.html" class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </a>
                        </h6>
                        <p class="price">
                            ₹${Math.round(element?.price - (element?.price * 10 / 100))} 
                            <del>₹${element?.price}</del>
                        </p>
                        <div class="rating">
                            <ul style="display: flex; gap: 2px;">${stars}</ul>
                        </div>
                    </div>
                    <span class="for-border"></span>
                </div>
            </div>
        `;
    }).join("");

    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 6,
            // loopedSlides: 50,
            autoHeight: true,
            shortSwipes: false,
            longSwipes: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1500: {
                    slidesPerView: 5,
                },
                1440: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });
    });


    hotWatch.innerHTML = html;
}

hotHomeImproveGetData();


async function hotHomeKitchenGetData() {
    const response = await fetch(`http://localhost:3000/INDEX2`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_HomeKitchen");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.HomeKitchen?.filter((element) => element?.starrating >= 1);

    const html = filteredWatches.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                    <div class="product-card-img double-img">
                        <a href="product-default.html">
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        </a>
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <a href="product-default.html" class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </a>
                        </h6>
                        <p class="price">
                            ₹${Math.round(element?.price - (element?.price * 10 / 100))} 
                            <del>₹${element?.price}</del>
                        </p>
                        <div class="rating">
                            <ul style="display: flex; gap: 2px;">${stars}</ul>
                        </div>
                    </div>
                    <span class="for-border"></span>
                </div>
            </div>
        `;
    }).join("");

    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 6,
            // loopedSlides: 50,
            autoHeight: true,
            shortSwipes: false,
            longSwipes: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1500: {
                    slidesPerView: 5,
                },
                1440: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });
    });


    hotWatch.innerHTML = html;
}

hotHomeKitchenGetData();


async function hotClothAccessGetData() {
    const response = await fetch(`http://localhost:3000/INDEX2`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_ClothAccess");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.ClothingAccessories?.filter((element) => element?.starrating >= 1);

    const html = filteredWatches.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                    <div class="product-card-img double-img">
                        <a href="product-default.html">
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        </a>
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <a href="product-default.html" class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </a>
                        </h6>
                        <p class="price">
                            ₹${Math.round(element?.price - (element?.price * 10 / 100))} 
                            <del>₹${element?.price}</del>
                        </p>
                        <div class="rating">
                            <ul style="display: flex; gap: 2px;">${stars}</ul>
                        </div>
                    </div>
                    <span class="for-border"></span>
                </div>
            </div>
        `;
    }).join("");

    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 6,
            // loopedSlides: 50,
            autoHeight: true,
            shortSwipes: false,
            longSwipes: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1500: {
                    slidesPerView: 5,
                },
                1440: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });
    });


    hotWatch.innerHTML = html;
}

hotClothAccessGetData();

async function hotToyGamesGetData() {
    const response = await fetch(`http://localhost:3000/INDEX2`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_ToysGames");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.Toysgames?.filter((element) => element?.starrating >= 1);

    const html = filteredWatches.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                    <div class="product-card-img double-img">
                        <a href="product-default.html">
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        </a>
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <a href="product-default.html" class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </a>
                        </h6>
                        <p class="price">
                            ₹${Math.round(element?.price - (element?.price * 10 / 100))} 
                            <del>₹${element?.price}</del>
                        </p>
                        <div class="rating">
                            <ul style="display: flex; gap: 2px;">${stars}</ul>
                        </div>
                    </div>
                    <span class="for-border"></span>
                </div>
            </div>
        `;
    }).join("");

    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 6,
            // loopedSlides: 50,
            autoHeight: true,
            shortSwipes: false,
            longSwipes: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1500: {
                    slidesPerView: 5,
                },
                1440: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });
    });


    hotWatch.innerHTML = html;
}

hotToyGamesGetData();

async function hotElectronicsGetData() {
    const response = await fetch(`http://localhost:3000/INDEX2`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_Electronics");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.Electronics?.filter((element) => element?.starrating >= 1);

    const html = filteredWatches.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                    <div class="product-card-img double-img">
                        <a href="product-default.html">
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        </a>
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <a href="product-default.html" class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </a>
                        </h6>
                        <p class="price">
                            ₹${Math.round(element?.price - (element?.price * 10 / 100))} 
                            <del>₹${element?.price}</del>
                        </p>
                        <div class="rating">
                            <ul style="display: flex; gap: 2px;">${stars}</ul>
                        </div>
                    </div>
                    <span class="for-border"></span>
                </div>
            </div>
        `;
    }).join("");

    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            slidesPerView: 6,
            // loopedSlides: 50,
            autoHeight: true,
            shortSwipes: false,
            longSwipes: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1500: {
                    slidesPerView: 5,
                },
                1440: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 2,

                },
                768: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                }
            },
        });
    });


    hotWatch.innerHTML = html;
}

hotElectronicsGetData();

async function hotInspireHistoryGetData() {
    const response = await fetch(`http://localhost:3000/INDEX2`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_InspireHistory");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.InspiredbyHistory?.filter((element) => element?.starrating >= 1);

    const html = filteredWatches.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3 h-100" key="${element?.id}">
                <div class="product-card hover-btn h-100">
                    <div class="product-card-img double-img position-relative">
                        <a href="product-default.html">
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        </a>
                        <div class="view-and-favorite-area"></div>
                        ${element?.type?.seller ? `<div class="ds_offer">${element?.type?.seller}</div> ` : ""}
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <a href="product-default.html" class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </a>
                        </h6>
                        <div class="">
                        </div>
                        <p class="price">
                            ₹${Math.round(element?.price - (element?.price * 10 / 100))} 
                            <del>₹${element?.price}</del>
                        </p>
                        <div class="ds_description">${element?.discription}</div>
                        <div class="rating">
                            <ul style="display: flex; gap: 2px;">${stars}</ul>
                        </div>
                    </div>
                    <span class="for-border"></span>
                </div>
            </div>
        `;
    }).join("");

    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper1", {
            loop: true,
            slidesPerView: 10,
            // loopedSlides: 50,
            autoHeight: true,
            shortSwipes: false,
            longSwipes: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1700: {
                    slidesPerView: 6,
                },
                1600: {
                    slidesPerView: 5,
                },
                1441: {
                    slidesPerView: 5,

                },
                1200: {
                    slidesPerView: 5,

                },
                1000: {
                    slidesPerView: 3,
                },
                700: {
                    slidesPerView: 2,
                },
                400: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                }

            },
        });
    });



    hotWatch.innerHTML = html;
}

hotInspireHistoryGetData();

async function  viewCustomerGetData() {
    const response = await fetch(`http://localhost:3000/INDEX2`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_VeiwCustomer");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.ViewedbyCustomers?.filter((element) => element?.starrating >= 1);

    const html = filteredWatches.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3 h-100" key="${element?.id}">
                <div class="product-card hover-btn h-100">
                    <div class="product-card-img double-img position-relative">
                        <a href="product-default.html">
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        </a>
                        <div class="view-and-favorite-area"></div>
                        ${element?.type?.seller ? `<div class="ds_offer">${element?.type?.seller}</div> ` : ""}
                        ${element?.type?.discount ? `<div class="ds_discount">${element?.type?.discount}</div> ` : ""}
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <a href="product-default.html" class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </a>
                        </h6>
                        <div class="">
                        </div>
                        <p class="price">
                            ₹${Math.round(element?.price - (element?.price * 10 / 100))} 
                            <del>₹${element?.price}</del>
                        </p>
                        <div class="ds_description">${element?.discription}</div>
                        <div class="rating">
                            <ul style="display: flex; gap: 2px;">${stars}</ul>
                        </div>
                    </div>
                    <span class="for-border"></span>
                </div>
            </div>
        `;
    }).join("");

    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper1", {
            loop: true,
            slidesPerView: 10,
            // loopedSlides: 50,
            autoHeight: true,
            shortSwipes: false,
            longSwipes: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1700: {
                    slidesPerView: 6,
                },
                1600: {
                    slidesPerView: 5,
                },
                1441: {
                    slidesPerView: 5,

                },
                1200: {
                    slidesPerView: 5,

                },
                1000: {
                    slidesPerView: 3,
                },
                700: {
                    slidesPerView: 2,
                },
                400: {
                    slidesPerView: 1,
                },
                320: {
                    slidesPerView: 1,
                }

            },
        });
    });



    hotWatch.innerHTML = html;
}

viewCustomerGetData();
