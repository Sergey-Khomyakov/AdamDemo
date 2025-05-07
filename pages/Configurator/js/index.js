class ProductManager{
    constructor(){
        this.body = document.querySelector('.cards');
        this.templateProductEl = this.body.querySelector('[templateProduct]');
        this.init();
    }
    async init(){
        this.products = await this.getProducts();
        if(this.products.length > 0){
            this.products.forEach(el => {
                this.render(el);
            });
        }
    }
    getProducts(){
        return new Promise (resolve => {
            setTimeout(() => {
                let data = products;
                resolve(data);
            }, 500);
        })
    }
    render(el){
        const clone = this.templateProductEl.content.cloneNode(true);
        const title = clone.querySelector('.product__title');
        const price = clone.querySelector('.product__price');
        const image = clone.querySelector('.product__img img');
        const btnDetailed = clone.querySelector('.product__btn[btn="detailed"]');
        const cart = clone.querySelector('.product__cart');

        cart.setAttribute('product-id', el.id);
        if(title !== null) title.textContent = el.name;
        if(price !== null) price.textContent = el.price + " руб.";
        if(image !== null) {
            image.setAttribute('src', el.images[0].src);
            image.setAttribute('alt', el.images[0].alt);
        }

        if(btnDetailed !== null) btnDetailed.setAttribute('href', '/ConfiguratorProduct.html?id=' +el.id);

        this.body.appendChild(clone);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    if(window.Telegram.WebApp.initDataUnsafe !== null){
        
        window.Telegram.WebApp.BackButton.show();
        Telegram.WebApp.onEvent('backButtonClicked', function(){
            window.location.href= "https://sergey-khomyakov.github.io/AdamDemo/index.html";
        });
        const userPhoto = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url || "";
        $('img[userCardImg]').attr('src', userPhoto);
    }
    const productManager = new ProductManager();
})