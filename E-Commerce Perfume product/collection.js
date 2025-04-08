
const searchInput = document.getElementById('search');
const productItems = document.querySelectorAll('.product-item');




searchInput.addEventListener('keyup', ()  => {
    const searchTerm = searchInput.value.toUpperCase();

    productItems.forEach(product => {
        const productName = product.querySelector('p').textContent.toUpperCase();

        if(productName.includes(searchTerm)){
            product.style.display = "block"
        }else{
            product.style.display = "none"
        }
    })
})

