async function bestofficeproduct1GetData() {
    const response = await fetch(`http://localhost:3000/INDEX3`);
    let json = await response.json();
    console.log("hello", json);

    const hotOfficeProduct1 = document.getElementById("V_hotofficeproduct1");

    // Filter watches with at least 1 star rating
    const filteredOfficeproduct1 = json?.OfficeProducts1?.filter((element) => element?.starrating >= 1);

    const html = filteredOfficeproduct1.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                            <a href="singleproduct.html?id=${element?.id}&array=OfficeProducts1&object=INDEX3">
                    <div class="product-card-img double-img">
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
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


    hotOfficeProduct1.innerHTML = html;
}

bestofficeproduct1GetData();


async function bestHealthCareGetData() {
    const response = await fetch(`http://localhost:3000/INDEX3`);
    let json = await response.json();
    console.log("hello", json);

    const hothealthcare = document.getElementById("V_healthcare");

    // Filter watches with at least 1 star rating
    const filteredHealthCare = json?.HealthCare?.filter((element) => element?.starrating >= 1);

    const html = filteredHealthCare.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                            <a href="singleproduct.html?id=${element?.id}&array=HealthCare&object=INDEX3">
                    <div class="product-card-img double-img">
                        
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        
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


    hothealthcare.innerHTML = html;
}

bestHealthCareGetData();


async function bestMSAmazonRewnewedGetData() {
    const response = await fetch(`http://localhost:3000/INDEX3`);
    let json = await response.json();
    console.log("hello", json);

    const hotMSAmazonRewnewedGetData = document.getElementById("V_MSAmazonRewnewed");

    // Filter watches with at least 1 star rating
    const filteredMSAmazonRewnewed = json?.MSAmazonRewnewed?.filter((element) => element?.starrating >= 1);

    const html = filteredMSAmazonRewnewed.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                   <a href="singleproduct.html?id=${element?.id}&array=MSAmazonRewnewed&object=INDEX3">
                    <div class="product-card-img double-img">
                        
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        
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


    hotMSAmazonRewnewedGetData.innerHTML = html;
}

bestMSAmazonRewnewedGetData();


async function bestBagsWalletLuggageGetData() {
    const response = await fetch(`http://localhost:3000/INDEX3`);
    let json = await response.json();
    console.log("hello", json);

    const hotBagsWalletLuggage = document.getElementById("V_BagsWalletLuggage");

    // Filter watches with at least 1 star rating
    const filteredBagsWalletLuggage = json?.BagsWalletLuggage?.filter((element) => element?.starrating >= 1);

    const html = filteredBagsWalletLuggage.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                   <a href="singleproduct.html?id=${element?.id}&array=BagsWalletLuggage&object=INDEX3">
                    <div class="product-card-img double-img">
                        
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        
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


    hotBagsWalletLuggage.innerHTML = html;
}

bestBagsWalletLuggageGetData();

async function bestMSElectronicsGetData() {
    const response = await fetch(`http://localhost:3000/INDEX3`);
    let json = await response.json();
    console.log("hello", json);

    const hotMSElectronics = document.getElementById("V_MSElectronics");

    // Filter watches with at least 1 star rating
    const filteredMSElectronics = json?.MSElectronics?.filter((element) => element?.starrating >= 1);

    const html = filteredMSElectronics.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                   <a href="singleproduct.html?id=${element?.id}&array=MSElectronics&object=INDEX3">
                    <div class="product-card-img double-img">
                        
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        
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


    hotMSElectronics.innerHTML = html;
}

bestMSElectronicsGetData();

async function bestMSToysGamesGetData() {
    const response = await fetch(`http://localhost:3000/INDEX3`);
    let json = await response.json();
    console.log("hello", json);

    const hotMSToysGames = document.getElementById("V_MSToysGames");

    // Filter watches with at least 1 star rating
    const filteredMSToysGames = json?.MSToysGames?.filter((element) => element?.starrating >= 1);

    const html = filteredMSToysGames.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3" key="${element?.id}">
                <div class="product-card hover-btn">
                   <a href="singleproduct.html?id=${element?.id}&array=MSToysGames&object=INDEX3">
                    <div class="product-card-img double-img">
                        
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                        
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


    hotMSToysGames.innerHTML = html;
}

bestMSToysGamesGetData();

async function sendInspiredbyHistory2GetData() {
    const response = await fetch(`http://localhost:3000/INDEX3`);
    let json = await response.json();
    console.log("hello", json);

    const hotInspiredbyHistory2 = document.getElementById("V_InspiredbyHistory22");

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
                            <a href="singleproduct.html?id=${element?.id}&array=InspiredbyHistory2&object=INDEX3">
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
                            <a href="singleproduct.html?id=${element?.id}&array=ViewedbyCustomers&object=INDEX3">
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
