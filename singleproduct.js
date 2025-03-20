document.addEventListener('DOMContentLoaded', function () {
    // Step 1: Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const selectedId = urlParams.get("id"); // ID from URL
    const selectedArray = urlParams.get("array"); // Array name from URL
    const selectedObject = urlParams.get("object"); // Object name from URL

    console.log("Selected ID:", selectedId);
    console.log("Array:", selectedArray);
    console.log("Object:", selectedObject);

    // Step 2: Fetch data from the JSON server
    fetch(`http://localhost:3000/${selectedObject}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Fetched Data:", data);

            // Step 3: Ensure the array exists
            if (!data[selectedArray] || !Array.isArray(data[selectedArray])) {
                console.error("Array not found in the fetched object!");
                return;
            }

            // Step 4: Find the product by ID
            const product = data[selectedArray].find(item => item.id == selectedId);

            if (!product) {
                console.error(`Product with ID ${selectedId} not found!`);
                return;
            }

            console.log("Product Data Found:", product);

            // Step 5: Select the image element and update it
            const itemImage = document.getElementById("V_image");

            // if (!itemImage) {
            //   console.error("Image element with ID 'V_image' not found in DOM!");
            //   return;
            // }
            console.log('123', itemImage);

            itemImage.innerHTML = `
          <div class="item">
          <img src="${product?.image}"  alt="Product Image" class="w-100" />
          </div>
            `
            // Step 6: Update the title in a separate element
            const itemTitle = document.getElementById("V_title");
            if (itemTitle) {
                itemTitle.innerHTML = product.title.slice(0, 70) || "Product Title";
            }

            const itemPrice = document.getElementById("V_price");
            if (itemPrice) {
                itemPrice.innerHTML = Math.round(product ?.price - (product ?.price * (product?.discount2 / 100)));
            }
            const itemPrice1 = document.getElementById("V_price1");
            if (itemPrice1) {
                itemPrice1.innerHTML = Math.round(product ?.price - (product ?.price * (product?.discount2 / 100)));
            }

            const itemDiscount2 = document.getElementById("V_discount2");
            if (itemDiscount2) {
                itemDiscount2.innerHTML = product?.discount2 ? product?.discount2 : null;
            }





            if (product?.type ?.seller) {
                const itemBestSeller = document.getElementById("V_best");
                if (itemBestSeller) {
                    itemBestSeller.innerHTML = product?.type?.seller ? product?.type?.seller : null;
                }
            } else {
                const itemDiscount = document.getElementById("V_discount");
                if (itemDiscount) {
                    itemDiscount.innerHTML = product?.type?.discount ? product?.type ?.discount : null;
                }
            }


            const itemDescription = document.getElementById("V_description");
            console.log("suju" , product?.discription);
            if (product?.discription ) {
               
                itemDescription.innerHTML = product?.discription;
            }
    
            else {
                itemDescription.classList.add("d-none")
            }



            if (product?.type?.seller) {
                const itemCatogery = document.getElementById("V_catogery");
                if (itemCatogery) {
                    itemCatogery.innerHTML = product?.catogery;
                }
            } else {
                console.log("cvbnwejvhweivghhviweghiehiwehgiewhhhhhhhhhhhhhhhhhhhhhhh");

                const itemCatogery2 = document.getElementById("V_catogery2");
                if (itemCatogery2) {
                    itemCatogery2.innerHTML = product?.catogery;
                }
            }

            

            if (!product.type?.seller?.trim()) {
                document.getElementById("V_best").classList.add("d-none");
                document.getElementById("V_catogery").classList.add("d-none");
            }
            if (!product.type?.discount?.trim()) {
                document.getElementById("V_discount").classList.add("d-none");
                document.getElementById("V_catogery2").classList.add("d-none");
            }

            if (!product.type?.seller?.trim() && !product.type?.discount?.trim()) {
                document.getElementById("V_catogery2").classList.remove("d-none");  
            }

            const itemMRP = document.getElementById("V_mrp");
            if (itemMRP) {
                itemMRP.innerHTML = product?.price;
            }


            const stars = Array.from({
                length: 5
            }, (_, index) => {
                return index < product.starrating ?
                    `<li class="list-unstyled"><i class="fa-solid fa-star" style="color: gold;"></i></li>` // Filled Star (Gold)
                    :
                    `<li class="list-unstyled"><i class="fa-regular fa-star" style="color: gold;"></i></li>`; // Outlined Star (Gold Border)
            }).join("");
            const rating = document.getElementById("V_rating");
            if (rating) {
                rating.innerHTML = stars;
            }
        })
        .catch(error => console.error("Error fetching data:", error));
})