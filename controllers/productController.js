let productos = ['Helado 1/4 kg', 'Franui Chocolate Negro', 'Surtido Chocolate 1/2kg'];

const productController = {
    list: (req,res) => {
        res.render('./products/productDetail');
    },
    cart: (req,res) => {
        res.render('./products/productCart');
    },    
    show: (req,res) => {
        res.render('./products/productEdit');
    },
    create: (req,res) => {
        res.render('./products/productEdit');
    },
    save: (req, res)=>{
        res.render('./products/productEdit');
    },
    edit: function (req,res){
        res.render('./products/productEdit',{items: productos});
    },
    update: function (req,res){
        res.render('./products/productEdit',{items: productos});
    },
    delete: function (req,res){
        res.render('./products/productEdit',{items: productos});
    }
};


module.exports = productController;
