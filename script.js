const cardContainer = document.getElementById("product-container")
const cartIndicator = document.getElementById("cart-indicator")
let filter_ = 'none'
let cartList=0


const selectFilter = (filter)=>{
    filter_=filter
    cardContainer.innerHTML=''
    fetchData()
}

const fetchData = async()=>{
    try{
        const response = await fetch('./bd/products.json')

        const productList= await response.json()
        
        additems(productList)

    }catch(e){
        console.log("Error: ",e)
    }
    

}

fetchData();

const additems = (data)=>{
    if(filter_!='none'){
        data.forEach(element=>{
            if(element.category==filter_){
                const card = document.createElement('div')
                card.className='card'
                card.style='width: 18rem'
                card.innerHTML=`
                    <!--Carrusel -->
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="${element.img1}" class="d-block w-100" alt="Imagen del Producto">
                            </div>
                            <div class="carousel-item">
                                <img src="${element.img1}" class="d-block w-100"  alt="Imagen del Producto">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Anterior</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Siguiente</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">${element.description}</p>
                        <h5 class="card-title">${element.price}</h5>
                        <hr>
                        <a href="#" class="btn btn-secondary">Comprar</a>
                    </div>`
                cardContainer.append(card)
            }
        })            
    }else{
        data.forEach(element=>{
            const card = document.createElement('div')
            card.className='card'
            card.style='width: 18rem'
            card.innerHTML=`
                <!--Carrusel -->
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${element.img1}" class="d-block w-100" alt="Imagen del Producto">
                        </div>
                        <div class="carousel-item">
                            <img src="${element.img1}" class="d-block w-100"  alt="Imagen del Producto">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                    </button>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.description}</p>
                    <h5 class="card-title">${element.price}</h5>
                    <hr>
                    <div onclick="addToCart()" class="btn btn-secondary">Comprar</div>
                </div>`
            cardContainer.append(card)
    
        })
    }

}

const addToCart = ()=>{
    cartList++
    cartIndicator.innerText=`${cartList}`
    console.log(cartIndicator.length)
}


fetchData()