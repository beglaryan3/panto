const data = {
    chair: [
        { img: "images/chair1.png", category: "Chair", name: "Sakarias Armchair", price: 392, id: 1 },
        { img: "images/chair2.png", category: "Chair", name: "Baltsar Chair", price: 299, id: 2 },
        { img: "images/chair3.png", category: "Chair", name: "Anjay Chair", price: 519, id: 3 },
        { img: "images/chair4.png", category: "Chair", name: "Nyantuy Chair", price: 921, id: 4 },
        { img: "images/chair5.webp", category: "Chair", name: "Dining chair Galliden", price: 396, id: 5 },
        { img: "images/chair6.webp", category: "Chair", name: "Dining chair Valebeck", price: 447, id: 6 },
        { img: "images/chair7.webp", category: "Chair", name: "Dining UPH Side Chair Moriville", price: 345, id: 7 },
        { img: "images/chair8.webp", category: "Chair", name: "Dining chair Skempton", price: 108, id: 8 },
        { img: "images/chair9.webp", category: "Chair", name: "Heartcort Accent Chair", price: 235, id: 33 },
        { img: "images/chair10.webp", category: "Chair", name: "Lindyn Oversized Swivel Accent Chair", price: 1115, id: 34 },
        { img: "images/chair11.webp", category: "Chair", name: "Akinlane Accent Chair", price: 322, id: 35 },
        { img: "images/chair12.webp", category: "Chair", name: "Novelda Accent Chair", price: 645, id: 36 },
        { img: "images/chair13.webp", category: "Chair", name: "Chair Lyncott", price: 732, id: 37 },
        { img: "images/chair14.webp", category: "Chair", name: "Rencott Dining Chair", price: 107, id: 38 },
        { img: "images/chair15.webp", category: "Chair", name: "Dining chair Wyndahl", price: 123, id: 39 },
        { img: "images/chair16.webp", category: "Chair", name: "Dining chair Sturlayne", price: 56, id: 340 },
    ],
    beds: [
        { img: "images/bed1.webp", category: "Beds", name: "Lavinton Poster Bed", price: 1950, id: 9 },
        { img: "images/bed2.webp", category: "Beds", name: "Bed Maloken", price: 1479, id: 10 },
        { img: "images/bed3.webp", category: "Beds", name: "Bed Realyn", price: 1150, id: 11 },
        { img: "images/bed4.webp", category: "Beds", name: "Bed Neymorton", price: 1943, id: 12 },
        { img: "images/bed5.webp", category: "Beds", name: "Storage Bed Robbinsdale", price: 1389, id: 13 },
        { img: "images/bed6.webp", category: "Beds", name: "Bed Kendamor", price: 2540, id: 14 },
        { img: "images/bed7.webp", category: "Beds", name: "Bed Jesstean", price: 2378, id: 15 },
        { img: "images/bed8.webp", category: "Beds", name: "Bed Sonian", price: 980, id: 16 },
        { img: "images/bed9.webp", category: "Beds", name: "Bed Lettner", price: 453, id: 41 },
        { img: "images/bed10.webp", category: "Beds", name: "Bed Jorlaina", price: 2134, id: 42 },
        { img: "images/bed11.webp", category: "Beds", name: "Landocken Panel Bed", price: 4567, id: 43 },
        { img: "images/bed12.webp", category: "Beds", name: "Bed Portdown", price: 436, id: 44 },
        { img: "images/bed13.webp", category: "Beds", name: "Bed Arkenton", price: 3433, id: 45 },
        { img: "images/bed14.webp", category: "Beds", name: "Bed Caitbrook", price: 1534, id: 46 },
        { img: "images/bed15.webp", category: "Beds", name: "Bed Starmore", price: 1543, id: 47 },
        { img: "images/bed16.webp", category: "Beds", name: "Nashburg Metal Bed", price: 1234, id: 48 },
    ],
    sofa: [
        { img: "images/sofa1.webp", category: "Sofa", name: "Rannis Full Sofa Sleeper", price: 1950, id: 17 },
        { img: "images/sofa2.webp", category: "Sofa", name: "Sectional sofa Abberson", price: 6289, id: 18 },
        { img: "images/sofa3.webp", category: "Sofa", name: "Valerano sofa set", price: 6200, id: 19 },
        { img: "images/sofa4.webp", category: "Sofa", name: "Sectional sofa Lindyn", price: 9465, id: 20 },
        { img: "images/sofa5.webp", category: "Sofa", name: "Altari Sofa", price: 1970, id: 21 },
        { img: "images/sofa6.webp", category: "Sofa", name: "Sectional sofa Modmax", price: 4539, id: 22 },
        { img: "images/sofa7.webp", category: "Sofa", name: "Sectional sofa Carnaby", price: 6599, id: 23 },
        { img: "images/sofa8.webp", category: "Sofa", name: "Bonnacraft Reclining Sofa", price: 2100, id: 24 },
        { img: "images/sofa9.webp", category: "Sofa", name: "Bixler sofa set", price: 2354, id: 49 },
        { img: "images/sofa10.webp", category: "Sofa", name: "Padova sofa set", price: 6787, id: 50 },
        { img: "images/sofa11.webp", category: "Sofa", name: "Bolsena sofa set", price: 4564, id: 51 },
        { img: "images/sofa12.webp", category: "Sofa", name: "Stoughton sofa set", price: 1341, id: 52 },
        { img: "images/sofa13.webp", category: "Sofa", name: "Maggie sofa set", price: 1243, id: 53 },
        { img: "images/sofa14.webp", category: "Sofa", name: "Bixler sofa set", price: 3467, id: 54 },
        { img: "images/sofa15.webp", category: "Sofa", name: "Sectional sofa Carnaby", price: 765, id: 55 },
        { img: "images/sofa16.webp", category: "Sofa", name: "Evansley sofa set", price: 677, id: 56 },
    ],
    lamp: [
        { img: "images/lamp1.webp", category: "Lamp", name: "Floor lamp", price: 270, id: 25 },
        { img: "images/lamp2.webp", category: "Lamp", name: "Lamp Durango", price: 265, id: 26 },
        { img: "images/lamp3.webp", category: "Lamp", name: "Lamp Lemrich", price: 120, id: 27 },
        { img: "images/lamp4.webp", category: "Lamp", name: "Lamp Alec", price: 70, id: 28 },
        { img: "images/lamp5.webp", category: "Lamp", name: "Floor lamp", price: 80, id: 29 },
        { img: "images/lamp6.webp", category: "Lamp", name: "Lamp Dris", price: 50, id: 30 },
        { img: "images/lamp7.webp", category: "Lamp", name: "Lamp", price: 290, id: 31 },
        { img: "images/lamp8.webp", category: "Lamp", name: "Lamp Dris", price: 39, id: 32 },
        { img: "images/lamp9.webp", category: "Lamp", name: "Lamp", price: 132, id: 57 },
        { img: "images/lamp10.webp", category: "Lamp", name: "Lamp", price: 321, id: 58 },
        { img: "images/lamp11.webp", category: "Lamp", name: "Lamp", price: 523, id: 59 },
        { img: "images/lamp12.webp", category: "Lamp", name: "Lamp Sily", price: 432, id: 60 },
        { img: "images/lamp13.webp", category: "Lamp", name: "Floor lamp", price: 221, id: 61 },
        { img: "images/lamp14.webp", category: "Lamp", name: "Floor lamp Runo", price: 324, id: 62 },
        { img: "images/lamp15.webp", category: "Lamp", name: "Floor lamp Le Collectionneur", price: 231, id: 63 },
        { img: "images/lamp16.webp", category: "Lamp", name: "Floor lamp ", price: 665, id: 64 },
    ]
}

//burger menu
const burgerBtn = document.querySelector(".burger_btn")
const nav = document.querySelector(".nav")
const burgerLines = document.querySelectorAll(".burger_line")

burgerBtn.onclick = () => {
    nav.classList.toggle("show")
    burgerLines.forEach(element => element.classList.toggle("active"))
}
//-----------------------------------

//cart

const cartBtn = document.querySelector(".cart_icon")
const cart = document.querySelector(".cart")
const cartItems = document.querySelector(".cart_items")

cartBtn.onclick = () => {
    cart.classList.toggle("show")
    document.body.style.overflowY = cart.classList.contains("show") ? "hidden" : "scroll"
}

//-------------------------------------



// վերադարձնում է մեր տված թվով ապրանքների օբյեկտներով զանգված
function getRandomProduct(productCount) {
    let newData = []
    let randomProducts = []
    for (let i in data) {
        newData = [...newData, ...data[i]]
    }

    for (let i = 0; i < productCount; i++) {
        let randomIndex = Math.round(Math.random() * (newData.length - 1))

        let sameProduct = randomProducts.find(elem => elem.id === newData[randomIndex].id)
        if (sameProduct) {
            i--
        } else {
            randomProducts.push(newData[randomIndex])
        }
    }
    return randomProducts
}


// Հաշվում և վերադարձնում է ապրանքի գինը ըստ զեղճի
function newPrice(price, sale) {
    return price - Math.floor(price * sale / 100)
}

const swiperWrapper = document.querySelector(".slider")
const productContainer = document.querySelector(".productContainer")
const categoryesButtons = document.querySelector(".categoryesButtons")
const allCategoryesBtns = categoryesButtons.querySelectorAll(".categoryes_btn")
const showMoreBtn = document.querySelector(".showMoreBtn")

let currentData = [];
let visibleCount = 0;
const step = 10;



categoryesButtons.onclick = (event) => {
    let productsData = []
    const btn = event.target.closest(".categoryes_btn")
    allCategoryesBtns.forEach(el => el.classList.remove("active"))
    btn.classList.add("active")

    if (!btn) return
    const key = btn.getAttribute("data-category")

    if (key === "all") {
        for (let i in data) {
            productsData = [...productsData, ...data[i]]
        }
    } else {
        productsData = data[key]
    }

    createProduct(productsData, true)
}

function createProduct(array, reset) {
    if (reset) {
        productContainer.innerHTML = ""
        visibleCount = 0
        currentData = array
    }
    let newData = currentData.slice(visibleCount, visibleCount + step)
    newData.forEach(element => {
        const newProduct = document.createElement("div")
        newProduct.className = "product"
        newProduct.innerHTML = `
        <img loading="lazy" src="${element.img}" alt="" class="product_img" data-img="${element.img}">
        <span class="product_category" data-category="${element.category}">${element.category}</span>
        <p class="product_name">${element.name}</p>
        <div class="section2_product_price_addBtn">
        <p class="price">$${element.price}</p>
        <button class="add_btn">+</button>
        </div>
        `
        productContainer.append(newProduct)
    })

    // երևացող ապրանքների քանակը
    visibleCount += newData.length
    toggleShowMoreButton()

}

createProduct(data.chair, true)

// ցույց ենք տալիս նոր ապրանքներ
showMoreBtn.onclick = () => createProduct([], false)


// թաքցնում ենք կոճակը եթե նոր ապրանքներ չկան
function toggleShowMoreButton() {
    showMoreBtn.style.display = visibleCount >= currentData.length ? "none" : "block"
}

productContainer.onclick = (event) => {
    const btn = event.target.closest(".add_btn")
    if (!btn) return

    const productData = getProductObject(btn.closest(".product"))
    const allCartItems = [...cartItems.querySelectorAll(".cart_item")]
    const sameItem = allCartItems.find(element => {
        const data = getProductObject(element)
        return productData.id == data.id
    })

    if (sameItem) {
        const quantityElement = sameItem.querySelector(".quantiti")
        quantityElement.textContent = +quantityElement.textContent + 1
    } else {
        createCartItem(productData)
    }

    updateCartItemsCount()
    updateTotalPrice()
    showMessage()
}



// ստանում է ապրանքների օբյեկտներով զանգված և զեղճ
function createBestProduct(productArray, productSale) {
    let content = productArray.map(element => {
        const product = document.createElement("div")
        product.className = "swiper-slide"
        product.innerHTML = `
             <div class="product">
                <span class="sale_value">${productSale}%</span>
                <img loading="lazy" src="${element.img}" alt="" class="product_img" data-img="${element.img}">
                <span class="product_category" data-category="${element.category}">${element.category}</span>
                <p class="product_name">${element.name}</p>
                <div class="section2_product_price_addBtn">
                    <div class="product_price">
                        <p class="old_price">$${element.price}</p>
                        <p class="new_price">$${newPrice(element.price, productSale)}</p>
                    </div>
                    <button class="add_btn">+</button>
                </div>
            </div>
            `
        return product
    })
    content.forEach(div => swiperWrapper.append(div))
}

createBestProduct(getRandomProduct(10), 30)

swiperWrapper.onclick = (event) => {
    const btn = event.target.closest(".add_btn")   //գտնում է այն կոճակը որը ունի add_btn class-ը
    if (!btn) return  //եթե click ենք արել այլ էլեմենտի վրա դուրս ենք գալիս ֆունկցիայից

    const product = btn.closest(".product")  //գտնում ենք կոճակի ծնողին
    const productData = getProductObject(product)  // գտոնւմ ենք կոճակի ծնողին ստեղծելու օբյեկտը

    // ապրանքի գինը փոխում ենք զեղճվածով
    const newPrice = +product.querySelector(".new_price").textContent.replace("$", "")
    productData.price = newPrice

    // բոլոր ապրանքներից գտնում ենք այն որից արդեն ունենք
    const allCartItems = [...cartItems.querySelectorAll(".cart_item")]
    const sameData = allCartItems.find(element => {
        const data = getProductObject(element)
        return data.id === productData.id
    })


    // եթե ապրանքից զաբյուղում կա ավելացնում ենք նրա քնաակը,հակառակ դեպքում ստեղծում ենք նոր ապրանք
    if (sameData) {
        const quantityElement = sameData.querySelector(".quantiti")
        quantityElement.textContent = +quantityElement.textContent + 1
    } else {
        createCartItem(productData)
    }
    updateCartItemsCount()
    updateTotalPrice()
    showMessage()
}


// ֆունկցիան զամբյուղի մեջ ավելացնում է նոր ապրանքներ 
const cartItms = document.querySelector(".cart_items")
function createCartItem(productObject) {
    const cartItem = document.createElement("div")
    cartItem.className = "cart_item"
    cartItem.innerHTML = `
        <img src="${productObject.img}" loading="lazy" alt="" class="cart_item_img" data-img="${productObject.img}">
        <div class="cart_item_box">
            
               <div class="cart_item_info">
                  <span class="cart_item_category" data-category="${productObject.category}">${productObject.category}</span>
                  <p class="carta_item_name">${productObject.name}</p>
               </div>
           
               <div class="cart_item_controls">
                  <button class="quantiti_minus_btn">-</button>
                  <span class="quantiti">1</span>
                  <button class="quantiti_plus_btn">+</button>
                  <p class="cart_item_price">$${productObject.price}</p>
                  <button class="cart_item_delete_btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
               </div>

        </div>
         `
    cartItems.append(cartItem)
}


function getProductObject(productItem) {

    const productCategory = productItem.querySelector("[data-category]").textContent.toLowerCase()
    const productImage = productItem.querySelector("[data-img]").getAttribute("src")
    const productData = data[productCategory].find(element => element.img === productImage)

    return productData
}


cartItems.onclick = (event) => {
    const btn = event.target
    const parent = btn.closest(".cart_item")
    const quantityElement = parent.querySelector(".quantiti")
    let quantity = +quantityElement.textContent

    if (btn.classList.contains("quantiti_plus_btn")) {
        quantityElement.textContent = ++quantity
    } else if (btn.classList.contains("quantiti_minus_btn")) {
        if (quantity > 1) {
            quantityElement.textContent = --quantity
        }
    } else if (btn.closest(".cart_item_delete_btn")) {
        parent.remove()
    }

    updateTotalPrice()
    updateCartItemsCount()
}

function updateTotalPrice() {
    let totalPrice = 0
    const items = document.querySelectorAll(".cart_item")
    items.forEach(element => {
        const quantiti = +element.querySelector(".quantiti").textContent
        const price = +element.querySelector(".cart_item_price").textContent.replace("$", "")
        return totalPrice = totalPrice + quantiti * price

    })
    const totalPriceBox = document.querySelector(".cart_info")
    totalPriceBox.innerHTML = `
       <p class="tottal_pric_text">Total price:</p>
        <p class="total_price">$${totalPrice}</p>
    `
}

function updateCartItemsCount() {
    const items = [...document.querySelectorAll(".cart_item")]
    let count = items.reduce((acc, element) => {
        const quantity = +element.querySelector(".quantiti").textContent
        return acc + quantity
    }, 0)


    const cartItemCount = document.querySelector(".cart_itemCount")
    cartItemCount.innerHTML = count

}


function showMessage() {
    const textElement = document.createElement("p")
    textElement.textContent = "Product added to cart"
    textElement.classList = "message"
    document.body.append(textElement)

    setTimeout(() => {
        textElement.remove()
    }, 1200)
}


const header = document.querySelector(".header_top")
const scrollToTopBtn = document.querySelector(".scrollToTopBtn")

window.addEventListener("scroll", function (e) {
    if (scrollY > 1000) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }

    if (scrollY > 1500) {
        scrollToTopBtn.classList.add("show")
    } else {
        scrollToTopBtn.classList.remove("show")
    }
})

scrollToTopBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior:"smooth",
    })
}