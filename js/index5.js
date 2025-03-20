async function bestOfficeProductsGetData() {
    const response = await fetch(`http://localhost:3000/INDEX5`);
    let json = await response.json();
    console.log("hello", json);

    const hotOfficeProducts = document.getElementById("V_OfficeProducts");

    // Filter watches with at least 1 star rating
    const filteredOfficeProducts = json?.OfficeProducts?.filter((element) => element?.starrating >= 1);

    const html = filteredOfficeProducts.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                            <a href="singleproduct.html?id=${element?.id}&array=OfficeProducts&object=INDEX5">
                    <div class="product-card-img double-img">
               
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        <
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <p class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </p>
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
                    </a>
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


    hotOfficeProducts.innerHTML = html;
}

bestOfficeProductsGetData();


async function bestAmazonRenewedGetData() {
    const response = await fetch(`http://localhost:3000/INDEX5`);
    let json = await response.json();
    console.log("hello", json);

    const hotAmazonRenewed = document.getElementById("V_AmazonRenewed");

    // Filter watches with at least 1 star rating
    const filteredAmazonRenewed = json?.AmazonRenewed?.filter((element) => element?.starrating >= 1);

    const html = filteredAmazonRenewed.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                     <a href="singleproduct.html?id=${element?.id}&array=AmazonRenewed&object=INDEX5">
                    <div class="product-card-img double-img">
               
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        <
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <p class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </p>
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
                    </a>
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


    hotAmazonRenewed.innerHTML = html;
}

bestAmazonRenewedGetData();


async function bestMusicalInstrumentsGetData() {
    const response = await fetch(`http://localhost:3000/INDEX5`);
    let json = await response.json();
    console.log("hello", json);

    const hotMusicalInstrumentsGetData = document.getElementById("V_MusicalInstruments");

    // Filter watches with at least 1 star rating
    const filteredMusicalInstruments = json?.MusicalInstruments?.filter((element) => element?.starrating >= 1);

    const html = filteredMusicalInstruments.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                     <a href="singleproduct.html?id=${element?.id}&array=MusicalInstruments&object=INDEX5">
                    <div class="product-card-img double-img">
               
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        <
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <p class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </p>
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
                    </a>
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


    hotMusicalInstrumentsGetData.innerHTML = html;
}

bestMusicalInstrumentsGetData();


async function bestGiftedInBeautyGetData() {
    const response = await fetch(`http://localhost:3000/INDEX5`);
    let json = await response.json();
    console.log("hello", json);

    const hotGiftedInBeauty = document.getElementById("V_GiftedInBeauty");

    // Filter watches with at least 1 star rating
    const filteredGiftedInBeauty = json?.GiftedInBeauty?.filter((element) => element?.starrating >= 1);

    const html = filteredGiftedInBeauty.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                     <a href="singleproduct.html?id=${element?.id}&array=GiftedInBeauty&object=INDEX5">
                    <div class="product-card-img double-img">
               
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        <
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <p class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </p>
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
                    </a>
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


    hotGiftedInBeauty.innerHTML = html;
}

bestGiftedInBeautyGetData();

async function bestGardenOutdoorGetData() {
    const response = await fetch(`http://localhost:3000/INDEX5`);
    let json = await response.json();
    console.log("hello", json);

    const hotGardenOutdoor = document.getElementById("V_GardenOutdoor");

    // Filter watches with at least 1 star rating
    const filteredGardenOutdoor = json?.GardenOutdoor?.filter((element) => element?.starrating >= 1);

    const html = filteredGardenOutdoor.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                     <a href="singleproduct.html?id=${element?.id}&array=GardenOutdoor&object=INDEX5">
                    <div class="product-card-img double-img">
               
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        <
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <p class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </p>
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
                    </a>
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


    hotGardenOutdoor.innerHTML = html;
}

bestGardenOutdoorGetData();

async function bestBooksGetData() {
    const response = await fetch(`http://localhost:3000/INDEX5`);
    let json = await response.json();
    console.log("hello", json);

    const hotBooks = document.getElementById("V_Books");

    // Filter watches with at least 1 star rating
    const filteredBooks = json?.Books?.filter((element) => element?.starrating >= 1);

    const html = filteredBooks.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                     <a href="singleproduct.html?id=${element?.id}&array=Books&object=INDEX5">
                    <div class="product-card-img double-img">
               
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        <
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <p class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </p>
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
                    </a>
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


    hotBooks.innerHTML = html;
}

bestBooksGetData();

async function sendInspiredbyHistory2GetData() {
    const response = await fetch(`http://localhost:3000/INDEX5`);
    let json = await response.json();
    console.log("hello", json);

    const hotInspiredbyHistory2 = document.getElementById("V_InspiredbyHistory");

    // Filter watches with at least 1 star rating
    const filteredInspiredbyHistory2 = json?.InspiredbyHistory2?.filter((element) => element?.starrating >= 1);

    const html = filteredInspiredbyHistory2.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3 h-100" key="${element?.id}">
                <div class="product-card hover-btn h-100">
                            <a href="singleproduct.html?id=${element?.id}&array=InspiredbyHistory2&object=INDEX5">
                    <div class="product-card-img double-img position-relative">
                       
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                     
                        <div class="view-and-favorite-area"></div>
                        ${element?.type?.seller ? `<div class="ds_offer">${element?.type?.seller}</div> ` : ""}
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <p class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </p>
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
                    </a>
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



    hotInspiredbyHistory2.innerHTML = html;
}

sendInspiredbyHistory2GetData();

async function  bestViewedbyCustomersGetData() {
    const response = await fetch(`http://localhost:3000/INDEX3`);
    let json = await response.json();
    console.log("hello", json);

    const hotViewedbyCustomers = document.getElementById("V_ViewedbyCustomers");

    // Filter watches with at least 1 star rating
    const filteredViewedbyCustomers = json?.ViewedbyCustomers?.filter((element) => element?.starrating >= 1);

    const html = filteredViewedbyCustomers.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3 h-100" key="${element?.id}">
                <div class="product-card hover-btn h-100">
                            <a href="singleproduct.html?id=${element?.id}&array=ViewedbyCustomers&object=INDEX2">
                    <div class="product-card-img double-img position-relative">
                        
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        
                        <div class="view-and-favorite-area"></div>
                        ${element?.type?.seller ? `<div class="ds_offer">${element?.type?.seller}</div> ` : ""}
                        ${element?.type?.discount ? `<div class="ds_discount">${element?.type?.discount}</div> ` : ""}
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <p class="ds_hover-underline">
                                ${element?.title?.slice(0, 60)}
                            </p>
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
                    </a>
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



    hotViewedbyCustomers.innerHTML = html;
}

bestViewedbyCustomersGetData();
