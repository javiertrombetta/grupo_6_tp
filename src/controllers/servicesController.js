const servicesController = {
    list: (req,res) => {res.send('Listado del servicio');},
    create: (req,res) => {res.send('Creación del servicio');},
    description: (req,res) => {res.send('Descripción del servicio ' + req.params.idServicio);},
    details: (req,res) => {
        if(req.params.idServicio == undifined){
            res.send("Bienvendies al detalle del servicio " + req.params.idServicio)
        } else {
            res.send("Bienvenides al detalle del servicio " + req.params.idServicio + " y estás enfocado en el subdetalle " + req.params.idServicio);
        }
    }
};

module.exports = servicesController;
