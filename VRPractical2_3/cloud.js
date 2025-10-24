

class Clouds{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
    this.obj.setAttribute("position", {x:x, y:y, z:z});

    
    let clouds = document.createElement("a-sphere");
    clouds.setAttribute("color","white");
    clouds.setAttribute("position","1 0.3 0");
    clouds.setAttribute("radius","0.8");
    this.obj.append(clouds);

   let cloud1 = document.createElement("a-sphere");
    cloud1.setAttribute("color","white");
    cloud1.setAttribute("position","1 5 -0.5");
    cloud1.setAttribute("radius","1");
    this.obj.append( cloud1 );

    let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("color","white");
    cloud2.setAttribute("position","1 0.5 0");
    cloud2.setAttribute("radius","1.25");
    this.obj.append( cloud2 );

    let cloud3 = document.createElement("a-sphere");
    cloud3.setAttribute("color","white");
    cloud3.setAttribute("position","-1 0.5 0");
    cloud3.setAttribute("radius","0.5");
    this.obj.append( cloud3 );

   scene.append(this.obj);
}
}
