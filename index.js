//select svg container first
const svg = d3.select('svg');
d3.json('menu.json').then(data =>{

    const y = d3.scaleLinear()
        .domain([0,1000])
        .range([0,500]);
     

    const x = d3.scaleBand()
        .domain(data.map(item =>item.name)) 
        .range([0,500])
        .paddingInner(0.2)
        .paddingOuter(0.2);

    //join the data to rect
    const rects = svg.selectAll('rects')
        .data(data);

    rects.attr('width',x.bandwidth)
        .attr('height',d=>y(d.orders))
        .attr('fill','orange')
        .attr('x',d=>x(d.name));

    rects.enter()
        .append('rect')
        .attr('width',x.bandwidth)
        .attr('height',d=>y(d.orders))
        .attr('fill','orange')
        .attr('x',d=>x(d.name));
    



    // rects.attr('width',50)
    //     .attr('height',d=>y(d.orders))
    //     .attr('fill','orange')
    //     .attr('x',(d,i)=>i *70);

    // rects.enter()
    //     .append('rect')
    //     .attr('width',50)
    //     .attr('height',d=>y(d.orders))
    //     .attr('fill','orange')
    //     .attr('x',(d,i)=>i *70);
})



// //select svg container first
// const svg = d3.select('svg');
// d3.json('planets.json').then(data=>{
//     const circs = svg.selectAll('circle')
//         .data(data);
//     //add attrs to circs already in DOM
//     circs.attr('cy',200)
//         .attr('cx',d => d.distance)
//         .attr('r',d =>d.radius)
//         .attr('fill',d =>d.fill);

//     // append the enter selection to  the DOM
//     circs.enter()
//         .append('circle')
//             .attr('cy',200)
//             .attr('cx',d => d.distance)
//             .attr('r',d =>d.radius)
//             .attr('fill',d =>d.fill);
// })



// const data = [
//     {width:400,height:500,fill:'yellow'},
//     {width:300,height:200,fill:'pink'},
//     {width:100,height:100,fill:'green'}
  
// ];

// const svg = d3.select('svg');

// // join  data to rects
// const rects = svg.selectAll('rect')
//     .data(data);

// // add attrs to rects already in the DOM
// rects.attr('width',(d,i,n)=> d.width)
//     .attr('height',d =>d.height)
//     .attr('fill',d => d.fill);

// // append the enter selection to DOM
// rects.enter()
//     .append('rect')
//     .attr('width',(d,i,n)=> d.width)
//     .attr('height',d =>d.height)
//     .attr('fill',d => d.fill);







// simplified format, those statement downbelow are idential.
// .attr('width',function(d){return d.width});
// .attr('width',(d)=>{
//     return d.width;
// })
// .attr('width'd => d.width);

//function and function calling
// var a = function(x) {return x^2}
// console.log(a(6));

// var b = function(d){return d.width}
// b = function(e){return e}

// function c(d){return d.width}

// function abc(x){return x^2}
// abc(2)


/*
class rect {
    var _private_data=[{width:100}];
    var dict;
    function data(input) {
        this._private_data = input;
        return this;
    }
    function attr(key, fn) {
        this.dict[key] = fn(this._private_data);
        return this;
    }
}
*/







// const canvas = d3.select('.canvas');

// const svg = canvas.append('svg')
//     .attr('height',600)
//     .attr('width',600);

// const group = svg.append('g')
//     .attr('transform','translate(0,100)');

// //append shapes to svg container

// group.append('rect')
//     .attr('width',200)
//     .attr('height',100)
//     .attr('fill','blue')
//     .attr('x',20)
//     .attr('y',20);

// group.append('circle')
//     .attr('r',50)
//     .attr('cx',300)
//     .attr('cy',70)
//     .attr('fill','pink');

// group.append('line')
//     .attr('x1',370)
//     .attr('x2',400)
//     .attr('y1',20)
//     .attr('y2',120)
//     .attr('stroke','red');

// svg.append('text')
//     .attr('x',20)
//     .attr('y',200)
//     .attr('fill','grey')
//     .text('hello,world!')
//     .style('font-family','arial');