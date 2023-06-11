let select=document.querySelectorAll('select');
let amt=document.querySelector('#userInput');
let btn=document.querySelector('.btn');

fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(obj=>dropDown(obj))


function dropDown(res){
  let curr=Object.entries(res)
  for(i=0;i<curr.length;i++){
      let currName=`<option value=${curr[i][0]}>${curr[i][0]}</option>`
      select[0].innerHTML+=currName;
      select[1].innerHTML+=currName;
  }

}

btn.addEventListener('click',()=>{
    let curr1=select[0].value;
    let curr2=select[1].value;
    let inputValue=amt.value;
    if(curr1==curr2){
        alert("please select diffrent currency");
    }
    getValue(curr1,curr2,inputValue);
})

function getValue(curr1,curr2,val){
    const host = 'api.frankfurter.app';
fetch(`https://${host}/latest?amount=${val}&from=${curr1}&to=${curr2}`)
  .then(resp => resp.json())
  .then((data) =>{
    let input=0;
    input=Object.values(data.rates)[0];
    document.querySelector('#finalval').value=input;
   // console.log(input)
  });
  
}
