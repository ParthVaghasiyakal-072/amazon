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
            if(itemPrice) {
                itemPrice.innerHTML = product.price;
            }
            const itemPrice1= document.getElementById("V_price1");
            if(itemPrice1) {
                itemPrice1.innerHTML = product.price;
            }
            
        })
        .catch(error => console.error("Error fetching data:", error));
})