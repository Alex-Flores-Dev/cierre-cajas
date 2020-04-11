var app = new Vue({
    el: "#form",
    data:{
        ciudad:null,
        agencia:null,
        departamentos:[
                {ciudad:"La Paz",id:1},
                {ciudad:"El Alto",id:2},
                {ciudad:"Cochabamba",id:3},
                {ciudad:"Santa Cruz",id:4},
                {ciudad:"Oruro",id:5},
                {ciudad:"Potosi",id:6},
                {ciudad:"Tarija",id:7},
                {ciudad:"Chuquisaca",id:8},
                {ciudad:"Beni",id:9},
                {ciudad:"Pando",id:10}
        ],
        agencias:{
            'La Paz':[{agencia:"16 de Julio",codigo:123,id:1},{agencia:"Ventilla",codigo:123123,id:2},{agencia:"LadfsPaz",codigo:11423,id:3}],
            'El Alto':[{agencia:"La Paggz",codigo:113,id:1}],
        },
    },
    methods:{}
});



$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

