const igra = document.getElementById('igra')
const kateriIgralec = document.getElementById('Kateri-Igralec')
const vrsta1 = document.getElementById('Vrsta-1')
const vrsta2 = document.getElementById('Vrsta-2')
const vrsta3 = document.getElementById('Vrsta-3')
const vrsta4 = document.getElementById('Vrsta-4')
const palice = document.querySelectorAll('.Palica')
const gumbPoteze = document.getElementById('Konec-Poteze')

let vrsta = []

document.addEventListener('DOMContentLoaded', () => {

    gumbPoteze.addEventListener("click", () => {

        kateriIgralec.textContent = kateriIgralec.textContent === "Igralec 1" ? "Igralec 2" : "Igralec 1";
        igra.style.background = igra.style.background === 'white' ? 'lightblue' : 'white';
        vrsta = []
        if(document.querySelectorAll('.Palica').length === 0) {
            alert(kateriIgralec.textContent + " je zmagal! Klikni 'Refresh' za novo igro!")
        }
    })
        palice.forEach(palica => {

            palica.addEventListener("click", () => {
                if(vrsta.length === 0) {
                    vrsta.push(palica.parentNode.id)
                    palica.remove()
                    console.log(document.querySelectorAll('.Palica').length)
                }
                else if(vrsta[vrsta.length - 1] === palica.parentNode.id) {
                    palica.remove()
                    console.log(document.querySelectorAll('.Palica').length)
                }
            })
        })
})