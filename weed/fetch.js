
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}



const ul = document.getElementById('section');
const url = 'https://api.treez.io/v1.0/dispensary/airfield/menu/product_list?type=all&offset=0&limit=600&stock=all';
fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        let weeds = data.product_list;
        return weeds.map(function(weed) {
            let li = createNode('li'),
                img = createNode('img'),
                div = createNode('div'),
                div2 = createNode('div'),
                div3 = createNode('div'),
                flower = createNode('img'),
                span1 = createNode('sup'),
                span2 = createNode('span'),
                span3 = createNode('span');


            flower.src='1.jpg';
            img.src = weed.images.cropped_image;
            div.innerHTML = `${weed.brand} `;
            div2.innerHTML = `${weed.product_name}`;
            div3.innerHTML = `${weed.classifications}`;
            span1.innerHTML= '$';
            for( let i=0; i < weed.size_list.length;i++){

                    span2.innerHTML = ` ${Math.ceil(weed.size_list[i].price_sell)} `;


            }
            span3.innerHTML= '/0.5g';

            append(li, flower);
            append(li, img);
            append(li, div);
            append(li, div2);
            append(li, div3);
            append(li, span1);
            append(li, span2);
            append(li, span3);
            append(ul, li);




            switch(div3.textContent){
                case 'CBD':
                    div3.className='cbd';
                    break;

                case 'S/I':
                    div3.className='si';
                    break;

                case 'INDICA':
                    div3.className='indica';
                    break;
                default: div3.className='type';
            }


            div.className='brand';
            div2.className='name';
            flower.className='flower';
            span2.className='price';
            span1.className='bucks';
            span3.className='gramm';

        })
    })


    .catch(function(error) {
        console.log(JSON.parse(error));
    });
