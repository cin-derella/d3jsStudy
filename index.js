

const data = [
    {width:400,height:500,fill:'yellow'},
    {width:300,height:200,fill:'pink'},
    {width:100,height:100,fill:'green'}
  
];

const svg = d3.select('svg');
const rect = svg.selectAll('rect')
    .data(data)
    .attr('width',(d,i,n)=> d.width)
    .attr('height',d =>d.height)
    .attr('fill',d => d.fill)
console.log(rect);







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