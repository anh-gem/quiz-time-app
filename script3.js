document.addEventListener('DOMContentLoaded', () => {
    let yourScore = localStorage.getItem('yourPoint');
    if (yourScore) {
        let val = (yourScore / 10) * 100;
        console.log(val);
        document.getElementById('progressvalue').style.width = `${val}%`;
        document.getElementById('span').textContent = `${yourScore}/10`
        console.log(yourScore);
        if (yourScore <= 3)
            document.getElementById('message').textContent = '“Keep learning, you can do better!”'
        else if (yourScore <= 6)
            document.getElementById('message').textContent = '“Keep learning, you have a good score!”'
        else if (yourScore <= 9)
            document.getElementById('message').textContent = '“Keep learning, you are doing great!”'
        else if(yourScore == 10)
            document.getElementById('message').textContent = '“Congratulations!”'
        else{
            document.getElementById('message').textContent = '“Something went wrong,please retry!”'
        }
    }
});

document.getElementById("retry").addEventListener('click', () => {
    window.location.href = 'index.html';
    localStorage.clear();
    history.replaceState(null, null, 'index.html');
})
