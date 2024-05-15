let foodList = 
[
    {
        id: 1,
        src: "img/1-1.png",
        desc: "Truffle Infused Wagyu Steak<br>with Red Wine Reduction",
        alt: "food_1"
    },
    {
        id: 2,
        src: "img/1-2.png",
        desc: "Seared Duck Breast with Port Wine Cherry Reduction",
        alt: "food_2"
    },
    {
        id: 3,
        src: "img/1-3.png",
        desc: "Caviar-Topped Oysters Rockefeller with Gold Leaf Garnish",
        alt: "food_3"
    },
    {
        id: 4,
        src: "img/1-4.png",
        desc: "Foie Gras and Black Truffle Risotto",
        alt: "food_4"
    },
    {
        id: 5,
        src: "img/2-1.png",
        desc: "Truffle Infused Wagyu Steak with Red Wine Reduction",
        alt: "food_5"
    },
    {
        id: 6,
        src: "img/2-2.png",
        desc: "Seared Duck Breast with Port Wine Cherry Reduction",
        alt: "food_6"
    },
    {
        id: 7,
        src: "img/2-3.png",
        desc: "Caviar-Topped Oysters Rockefeller with Gold Leaf Garnish",
        alt: "food_7"
    },
    {
        id: 8,
        src: "img/2-4.png",
        desc: "Foie Gras and Black Truffle Risotto",
        alt: "food_8"
    },
    {
        id: 9,
        src: "img/1-1.png",
        desc: "Truffle Infused Wagyu Steak<br>with Red Wine Reduction",
        alt: "food_1"
    },
    {
        id: 10,
        src: "img/1-2.png",
        desc: "Seared Duck Breast with Port Wine Cherry Reduction",
        alt: "food_2"
    },
    {
        id: 11,
        src: "img/1-3.png",
        desc: "Caviar-Topped Oysters Rockefeller with Gold Leaf Garnish",
        alt: "food_3"
    },
    {
        id: 12,
        src: "img/1-4.png",
        desc: "Foie Gras and Black Truffle Risotto",
        alt: "food_4"
    },
    {
        id: 13,
        src: "img/2-1.png",
        desc: "Truffle Infused Wagyu Steak with Red Wine Reduction",
        alt: "food_5"
    },
    {
        id: 14,
        src: "img/2-2.png",
        desc: "Seared Duck Breast with Port Wine Cherry Reduction",
        alt: "food_6"
    },
    {
        id: 15,
        src: "img/2-3.png",
        desc: "Caviar-Topped Oysters Rockefeller with Gold Leaf Garnish",
        alt: "food_7"
    },
    {
        id: 16,
        src: "img/2-4.png",
        desc: "Foie Gras and Black Truffle Risotto",
        alt: "food_8"
    }
];
showgallery(foodList);
function showgallery(currarray)
{
    document.getElementById('list').innerHTML = " ";
    for(let i = 0; i < currarray.length; i++)
    {
        document.getElementById('list').innerHTML+=
        `<div class="food-content flex">
        <div class="food-icon">
            <img src="${currarray[i].src}" alt="${currarray[i].alt}">
        </div>
        <div class="food-description">
            <p>${currarray[i].desc}</p>
        </div>
    </div>`
    }
};