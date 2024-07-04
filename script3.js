document.addEventListener('DOMContentLoaded', ()=>{
    let yourScore = localStorage.getItem('yourPoint');
   if(yourScore){
    let val = (yourScore/10)*100;
    console.log(val);
    document.getElementById('progressvalue').style.width = `${val}%`;
    document.getElementById('span').textContent= `${yourScore}/10`
   } 
});

document.getElementById("retry").addEventListener('click',()=>{
    window.location.href = 'index.html';
    localStorage.clear();
    history.replaceState(null, null, 'index.html');
})
