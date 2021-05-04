
const sendBtn = document.querySelector('.submit');
const form = document.querySelector('#form');
const seeAgain = document.querySelector('#again');
const refresh = document.querySelector('#refresh');
const input = document.querySelector('.country');
const errorcatch = document.querySelector('.error')

form.addEventListener('submit', function(e) {
        e.preventDefault();
        let country = document.querySelector('.country').value;
        country = country.toLowerCase();
        const url="https://api.covid19api.com/total/dayone/country/" +country;
        fetch(url)
        .then((res)=> res.json())
    
        .then((res) => {
        button();
        
        console.log(res);
        let length = res.length;
        let index = length - 1;
        document.querySelector('.total').textContent = res[index].Active + res[index].Recovered + res[index].Deaths ;
        document.querySelector('.active').textContent = res[index].Active;
        document.querySelector('.recovered').textContent = res[index].Recovered;
        document.querySelector('.deaths').textContent = res[index].Deaths;
        });

});

function button() {
    input.style.width =  "100%";
    sendBtn.style.display = "none";
    refresh.style.display = "block";
    seeAgain.style.display = "block";
    seeAgain.style.background = "lightgreen";
    seeAgain.style.color = "crimson";
}

function re() {
    window.location.reload();
}