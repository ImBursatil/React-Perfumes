const products =  [
    {
        id: '1',
        name: 'One Million',
        price: 25000,
        category: 'perfumes masculinos',
        img: 'https://www.pacorabanne.com/medias/sys_master/images/images/h98/h5a/9309047226398/9309047226398.jpg',
        stock: 25,
        description: 'Paco Rabanne'
    },

    {
        id: '2',
        name: 'Good Girl',
        price: 25000,
        category: 'perfumes femeninos',
        img: 'https://riadigos.com.ar/wp-content/uploads/2020/10/8411061972151-1-3.jpg',
        stock: 15,
        description: 'Carolina Herrera'
    },

    {
        id: '3',
        name: 'Invictus',
        price: 22000,
        category: 'perfumes masculinos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_867194-MLA49666833673_042022-O.jpg',
        stock: 25,
        description: 'Paco Rabanne'
    },

    {
        id: '4',
        name: '212 Vip Rose',
        price: 23000,
        category: 'perfumes femeninos',
        img: 'https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/3caedb57c154f4c66adc1fae2b6a3bf5/c/-/c-212-vip-ros_-edp_1_1.jpg',
        stock: 15,
        description: 'Paco Rabanne'
    },

    {
        id: '5',
        name: 'Bad Boy',
        price: 25000,
        category: 'perfumes masculinos',
        img: 'https://www.musingsofamuse.com/wp-content/uploads/2021/05/Carolina-Herrera-Bad-Boy-Eau-de-Parfum.jpg',
        stock: 25,
        description: 'Carolina Herrera'
    },
    
    {
        id: '6',
        name: 'Flower',
        price: 20000,
        category: 'perfumes femeninos',
        img: 'https://www.globestyles.com/wp-content/uploads/2022/07/Flower-by-Kenzo-LAbsolue-cover.jpg',
        stock: 12,
        description: 'Kenzo'
    },
    
    {
        id: '7',
        name: 'Sauvage',
        price: 21000,
        category: 'perfumes masculinos',
        img: 'https://falabella.scene7.com/is/image/FalabellaPE/16237038_5?wid=800&hei=800&qlt=70',
        stock: 25,
        description: 'Dior'
    },

    {
        id: '8',
        name: 'La Vie Est Belle',
        price: 20000,
        category: 'perfumes femeninos',
        img: 'https://riadigos.com.ar/wp-content/uploads/2020/11/eclat21-20d305563adcce1d5e15123741991058-1024-1024-1.jpg',
        stock: 12,
        description: 'Lancome'
    }

]

    export const getProducts = (categoryId) => {
        return new Promise ((resolve) => {
            setTimeout(() =>{
                resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
            },1000)
        })
    }

    export const getProduct = (id) => {
        return new Promise ((resolve) => {
            setTimeout(() =>{
                resolve(products.find(prod => prod.id === id))
            },1000)
        })
    } 