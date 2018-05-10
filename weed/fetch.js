
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}



const ul = document.getElementById('section');
const url = 'https://api.treez.io/v1.0/dispensary/goe/menu/product_list?type=all&offset=0&limit=600';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let weeds = data.product_list;
        return weeds.map(function(weed) {
            let li = createNode('li'),
                img = createNode('img'),
                div = createNode('div'),
                div2 = createNode('div'),
                div3 = createNode('div');


            img.src = weed.images.cropped_image;
            div.innerHTML = `${weed.brand} `;
            div2.innerHTML = `${weed.product_name}`;
            div3.innerHTML = `${weed.classifications}`;


            append(li, img);
            append(li, div);
            append(li, div2);
            append(li, div3);
            append(ul, li);

            div2.className='name';
            div3.className='type';

        })
    })


    .catch(function(error) {
        console.log(JSON.stringify(error));
    });
