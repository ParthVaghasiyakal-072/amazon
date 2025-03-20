async function carMotorbikeGetData() {
    const response = await fetch(`http://localhost:3000/INDEX`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_CarMotorBike");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.CarMoterbike?.filter((element) => element?.starrating >= 1);

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
            <a href="singleproduct.html?id=${element?.id}&array=CarMoterbike&object=INDEX">
                    <div class="product-card-img double-img">
                       
                            <img src="${element?.image}" class="objectfit" />
                            <div class="batch"></div>
                       
                        <div class="view-and-favorite-area"></div>
                    </div>
                    <div class="product-card-content">
                        <h6>
                            <P  class="ds_hover-underline text-dark">
                                ${element?.title?.slice(0, 60)}
                            </P>
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


    hotWatch.innerHTML = html;
}

carMotorbikeGetData();



async function clothingGetData() {
    const response = await fetch(`http://localhost:3000/INDEX`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_Clothing");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.ClothingandAccessories?.filter((element) => element?.starrating >= 1);

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
                 <a href="singleproduct.html?id=${element?.id}&array=ClothingandAccessories&object=INDEX">
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


    hotWatch.innerHTML = html;
}

clothingGetData();

async function babyProductGetData() {
    const response = await fetch(`http://localhost:3000/INDEX`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_BabyProduct");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.BabyProducts?.filter((element) => element?.starrating >= 1);

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
                 <a href="singleproduct.html?id=${element?.id}&array=BabyProducts&object=INDEX">
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


    hotWatch.innerHTML = html;
}

babyProductGetData();

async function toysGamesGetData() {
    const response = await fetch(`http://localhost:3000/INDEX`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_ToysGames");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.Toysgames1?.filter((element) => element?.starrating >= 1);

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
                 <a href="singleproduct.html?id=${element?.id}&array=Toysgames1&object=INDEX">
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


    hotWatch.innerHTML = html;
}

toysGamesGetData();

async function computerGetData() {
    const response = await fetch(`http://localhost:3000/INDEX`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_Computer");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.ComputersAccessories?.filter((element) => element?.starrating >= 1);

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
                 <a href="singleproduct.html?id=${element?.id}&array=ComputersAccessories&object=INDEX">
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


    hotWatch.innerHTML = html;
}

computerGetData();

async function beautyGetData() {
    const response = await fetch(`http://localhost:3000/INDEX`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_Beauty");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.Beauty?.filter((element) => element?.starrating >= 1);

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
                 <a href="singleproduct.html?id=${element?.id}&array=Beauty&object=INDEX">
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


    hotWatch.innerHTML = html;
}

beautyGetData();



async function  viewCustomerGetData() {
    const response = await fetch(`http://localhost:3000/INDEX`);
    let json = await response.json();
    console.log("hello", json);

    const hotWatch = document.getElementById("ds_BrowseHistory");

    // Filter watches with at least 1 star rating
    const filteredWatches = json?.InspiredbyHistory1?.filter((element) => element?.starrating >= 1);

    const html = filteredWatches?.map((element) => {
        // Generate star rating dynamically (Filled & Outlined)
        const stars = Array.from({ length: 5 }, (_, index) => {
            return index < element.starrating
                ? `<li><i class="fa-solid fa-star" style="color: gold;"></i></li>`  // Filled Star (Gold)
                : `<li><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
        }).join("");

        return `
            <div class="swiper-slide p-3 h-100" key="${element?.id}">
                <div class="product-card hover-btn h-100">
                 <a href="singleproduct.html?id=${element?.id}&array=InspiredbyHistory1&object=INDEX">
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



    hotWatch.innerHTML = html;
}

viewCustomerGetData();