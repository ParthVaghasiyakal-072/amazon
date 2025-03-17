
async function hotWatchGetData () {
   const response = await fetch(`http://localhost:3000/Watches`)
   let json = await response.json()
   console.log("hello" , json);


   const hotWatch = document.getElementById("ds_hotwatch")
   const html = json.map((element)=>{
       return(
           `<div class="swiper-slide p-3" key="${element?.id}">
                                        <div class="product-card hover-btn">
                                            <div class="product-card-img double-img">
                                               <a href="product-default.html">
                                                <img src="${element?.image}" class="objectfit" />
                                                <div class="batch"> 
                                                </div>
                                               </a>
                                                <div class="overlay">
                                                </div>
                                                <div class="view-and-favorite-area">
                                                </div>
                                            </div>
                                            <div class="product-card-content">
                                                <h6><a href="product-default.html" class="ds_hover-underline">${element?.title}</a></h6>
                                                <p class="ds_watch_title"><a href="shop-list.html">Radiant Glow</a></p>
                                                <p class="price">$150.00 <del>₹200.00</del></p>
                                                <div class="rating">
                                                    <ul>
                                                        <li><i class="bi bi-star-fill"></i></li>
                                                        <li><i class="bi bi-star-fill"></i></li>
                                                        <li><i class="bi bi-star-fill"></i></li>
                                                        <li><i class="bi bi-star-fill"></i></li>
                                                        <li><i class="bi bi-star-fill"></i></li>
                                                    </ul>
                                                    <span>(50)</span>
                                                </div>
                                            </div>
                                            <span class="for-border"></span>
                                        </div>
                              </div>
                      `
       )
   }).join("")
   
   hotWatch.innerHTML = html
}
hotWatchGetData()