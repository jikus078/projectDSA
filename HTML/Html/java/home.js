var product = [{
    id: 1,
    img:  'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    name: 'BBQ T-shirt',
    price: 500,
    description: 'BBQ geyta asdwqe asdwq sad',
    type: 'shirt' 
}, {
    id: 2,
    img: 'hoodie.png',
    name: 'BBQ Hoodie',
    price: 500,
    description: 'BBQ geyta asdwqe asdwq sad',
    type: 'Hoodie'
}, {
    id: 3,
    img: 'sp2.png',
    name: 'BBQ Sweatpants',
    price: 500,
    description: 'BBQ geyta asdwqe asdwq sad',
    type: 'Sweatpants'
}, {
    id: 4,
    img: 'cs.png',
    name: 'BBQ Compression',
    price: 500,
    description: 'BBQ geyta asdwqe asdwq sad',
    type: 'shirt'
},{
    id: 5,
    img: 'whry.png',
    name: 'BBQ Whey',
    price: 500,
    description: 'BBQ geyta asdwqe asdwq sad',
    type: 'Whey Protein'
}];

$(document).ready(() => {
    var html = '';
    for(let i = 0; i < product.length; i++){
        html += `<div class="product-items ${product[i].type}">
                    <img class="product-img" src="${product[i].img}" alt="${product[i].name}">
                    <p style="font-size: 1.2vw;">${product[i].name}</p>
                    <p style="font-size: 1.2vw;">${product[i].price}</p>
                </div>`;
    }
    $("#productlist").html(html);
})