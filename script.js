/*MENU BURGER*/
'use strict'

$('.menu-container, .logo-zentral').click(function () {
    $('.menu-container').toggleClass('is-menu-open');
    $('.sidenav').toggleClass('over');
    $('.sidenav2').toggleClass('over2');
    event.stopPropagation();
});

document.addEventListener("click", function () {
    $('.menu-container').removeClass('is-menu-open');
    $('.sidenav').removeClass('over');
    $('.sidenav2').removeClass('over2');
});



/*APPel À L'API*/

function getApiData() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const data = JSON.parse(xhr.responseText).data.results[0]
            console.log(data)

            const name = data.name
            console.log(name)
            const description = data.description
            console.log(description)

            const series = data.series.items
            console.log(series)

            const img = data.thumbnail.path.extension
            console.log(img)


            const nbSeries = data.series.items.length

            for (let i = 0; i < nbSeries; i++) {
                const serie = data.series.items[i]
                console.log(serie)
            }


            document.querySelector('jk').innerHTML = name
            document.querySelector('j').innerHTML = description
            document.querySelector('k').innerHTML = name




        }

    }

    xhr.open('GET', 'https://gateway.marvel.com/v1/public/characters?name=spider-man&apikey=b7287f791e9cd24e6791c69c4eafbf76')
    xhr.send()
}

getApiData()

