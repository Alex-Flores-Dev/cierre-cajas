var app = new Vue({
    el: "#app",
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
            1:[{agencia:"El Alfto",codigo:123,id:1},{agencia:"El Alghto",codigo:123123,id:2},{agencia:"LadfsPaz",codigo:11423,id:3}],
            2:[{agencia:"La Paggz",codigo:113,id:1}],
        },
    },
    methods:{
        enviar

    }
});



function validacion(){
    var fecha_ini;
    var fecha_fin;
    fecha_ini = document.getElementById("fecha_ini").value;
    fecha_fin = document.getElementById("fecha_fin").value;
    if(fecha_fin<fecha_ini){
        alert("no se puede enviar");
        return false;
    }

}



