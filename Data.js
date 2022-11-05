


 ingredients =[
    {
        id:0,
         name:'Thin crust',
         img:'<img src="thin.jpg"/>',
         calories:300 ,


    },
    {
        id:1,
        name:'Thick crust',
        img:'<img src="thick.jpg"/>',
        calories:600 ,
    },
    {
        id:2,
        name:'Mushrooms',
        img:'<img src="953da63f-a25a-c88e-bf7d-95c492c9ae85.jpg"/>',
        calories:50 ,
    },
    {
        id:3,
        name:'Olives',
        img:'<img src="xr92oRp2LQCBnPyG.jpg"/>',
        calories:30 
    },
    {
         id: 4,
         name: 'Tomatos',
        img: '<img src="668842101000100490326no.jpg"/>',
         calories: 55
    } 
]

class Ingredient{
    
     constructor(id,name, img, calories){
        this.id=id;
        this.name=name;
        this.img=img;
        this.calories=calories;
   }

 }
 class Dish{
    constructor(name,ingred,time,cookingMethod, total) {
        this.name = name;
        this.ingred = ingred;
        this.time=time;
        this.cookingMethod=cookingMethod;
      
        this.total = total;
    }
 }
 