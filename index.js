//select svg container first
const svg = d3.select('.canvas')
    .append('svg')
    .attr('width', 600)
    .attr('height', 600);

//create margins and dimension
const margin = { top: 20, right: 20, bottom: 100, left: 100 };
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const graph = svg.append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left},${margin.top})`);

const xAxisGroup = graph.append('g')
    .attr('transform', `translate(0,${graphHeight})`);
const yAxisGroup = graph.append('g');

//scales
const y = d3.scaleLinear()
    .range([graphHeight, 0]);

const x = d3.scaleBand()
    .range([0, 500])
    .paddingInner(0.2)
    .paddingOuter(0.2);

//create the axes
const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y)
    .ticks(4)
    .tickFormat(d => d + ' orders');




//update x axis text
 xAxisGroup.selectAll('text')
    .attr('transform', 'rotate(-40)')
    .attr('text-anchor', 'end')
    .attr('fill', 'orange');


//update function
const update = (data) => {
    //updating domain scales
        y.domain([0, d3.max(data, d => d.orders)]);
        x.domain(data.map(item => item.name));
        
    //join the data to rect
        const rects = graph.selectAll('rect')
        .data(data);
    
    //remove exit selection
    rects.exit().remove();

    //update current shapes in DOM
    rects.attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.orders));

    //append the enter selection to the DOM
    rects.enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height',0)
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y',graphHeight)
        .transition().duration(500)
            .attr('y', d => y(d.orders))
            .attr('height', d => graphHeight - y(d.orders));

    //call axes
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

}


var data = [];
// get data from firestore
db.collection('dishes').onSnapshot(res=>{
    res.docChanges().forEach(change=>{
        const doc = {...change.doc.data(),id:change.doc.id};
        switch(change.type){
            case 'added':
                data.push(doc);
                break;
            case 'modified':
                const index = data.findIndex(item=>item.id == doc.id);
                data[index] = doc;
                break;
            case 'removed':
                data = data.filter(item => item.id !== doc.id);  
                break;
            default:
                break;
        }
    });
    update(data)
})



    // var data = [];
    // console.log(res);
    // res.docs.forEach(doc => {
    //     console.log(doc.data());
    //     data.push(doc.data());
    // });
    // update(data);

    // d3.interval(()=>{
    //     data.pop();
    //     update(data);
    // },3000)





    // const min = d3.min(data,d => d.orders);
    // const max = d3.max(data,d => d.orders);
    // const extent = d3.extent(data,d => d.orders);


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