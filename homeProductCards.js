const productContainer = document.querySelector('#productContainer')
const productTemplate = document.querySelector('#productTemplate')
export const showProductContainer = (products) =>{
    if(!products){
        return false;
    }

    products.forEach((curProd) => {
        const{brand, category, description, id, image, name, price, stock} = curProd;

        const productClone = document.importNode(productTemplate.content,true);

        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src=image;
        productClone.querySelector(".productImage").alt=name;
        productClone.querySelector(".category").textContent=category;
        productClone.querySelector(".productDescription").textContent=description;
        productClone.querySelector(".productStock").textContent=stock;
        productClone.querySelector(".productPrice").textContent='₹${price}';
        productClone.querySelector(".productActualPrice").textContent='₹${price*4}';
        

        productContainer.append(productClone)
    });
};