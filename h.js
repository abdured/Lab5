

let arr=[5,2,3,21,40];

function sum(arr){
	const a=arr.filter(elem=>elem>20).reduce((acumm,current)=>{
		acumm+=current;
		return acumm;
	});
	return a;
}

let v=sum(arr);
console.log(v);



function getNewarray(arr){
	let b=arr.filter((elem)=>{
		return (elem.length>=5) && (elem.includes('a'));
	});
	return b;
}
let s=["abbbb","hellelo","hahey","hhffhfh"];
console.log(getNewarray(s));