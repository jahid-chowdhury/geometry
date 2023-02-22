const blog = document.getElementById('my-blog').addEventListener('click',function(){
   window.open('blog.html');
}
)
const tribuj = document.getElementById('triangle-calculate').addEventListener('click',function(){
    const heighte = document.getElementById('h').value;
    const land = document.getElementById('b').value;
    const trianglecalculation = 0.5* heighte*land;
    const trianglearea = 'Tringle :'+trianglecalculation +'cm2';

    var node = document.createElement('li');
node.appendChild(document.createTextNode(trianglearea));
 
document.querySelector('ol').appendChild(node);
 

})
const rectangle = document.getElementById('rectangle-calculate').addEventListener('click',function(){
    const wide = document.getElementById('w').value;
    const lanth = document.getElementById('l').value;
    const rectanglearea = wide*lanth;

    const rectangleArea = 'Rectangle :'+rectanglearea +'cm2';

    var node = document.createElement('li');
node.appendChild(document.createTextNode(rectangleArea));
 
document.querySelector('ol').appendChild(node);
 
   
})
     const parallelogram = document.getElementById('parallelogram-cal').addEventListener('click',function(){
    const perawide = document.getElementById('pera-b').value;
    const peralanth = document.getElementById('pera-h').value;
    const parallelogramarea = perawide*peralanth;
    const parallelogramArea = 'Parallelogram :'+ parallelogramarea+'cm2';


    var node = document.createElement('li');
node.appendChild(document.createTextNode(parallelogramArea));
 
document.querySelector('ol').appendChild(node);
 
   
})


const rhombus = document.getElementById('rhombus').addEventListener('click',function(){
    const rhombuswide = document.getElementById('d1').value;
    const rhombuslanth = document.getElementById('d2').value;
    const rhombusarea = 0.5*rhombuslanth*rhombuswide;
    const rhombustotal = 'Rhombus :'+rhombusarea +'cm2';

    var node = document.createElement('li');
node.appendChild(document.createTextNode(rhombustotal));
 
document.querySelector('ol').appendChild(node);
 
   
})

const pentagon = document.getElementById('pentagon').addEventListener('click',function(){
    const pentagonp = document.getElementById('pen-p').value;
    const pentagonb = document.getElementById('pen-b').value;
    const pentagonArea= 0.5*pentagonp*pentagonb;
    const pentagonarea = 'Pentagon :'+ pentagonArea +'cm2';

    var node = document.createElement('li');
node.appendChild(document.createTextNode(pentagonarea));
 
document.querySelector('ol').appendChild(node);
 
   
})

const ellipse = document.getElementById('ellipse').addEventListener('click',function(){
    const ellipseA = document.getElementById('ab').value;
    const ellipseB = document.getElementById('ba').value;
    const ellipseArea= 3.14*ellipseA*ellipseB;
    const ellipsearea = 'Ellips :'+ellipseArea + 'cm2';

    var node = document.createElement('li');
    node.appendChild(document.createTextNode(ellipsearea));
     
    document.querySelector('ol').appendChild(node);
     
 
})
