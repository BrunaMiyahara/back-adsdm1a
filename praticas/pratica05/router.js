const express = require('express');

const router = express.Router();

const produtos = [];

router.get("/produtos/:produtoId", function(req, res) {
    const encontrado = produtos.find(item => item.id == req.params.produtoId);
    if (encontrado) {
      res.json(encontrado);  //200 e JSON
    } else {
      res.status(404).json({msg: "Produto nao encontrado"});
    }
});

module.exports = router;