'use strict';

function getDogImage() {
    const breed = $('#breed').val().toLowerCase();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => {
            if (response.ok)
                return response.json();
            throw "Unable to locate this breed, please select a new breed."
        })
        .then(responseJson => {
            console.log(responseJson);
            displayResults(responseJson);
        })
        .catch(error => alert(error));
}

function displayResults(responseJson) {
    $('.results').children().remove();
    $('.results').append(
        `<img src="${responseJson.message}">`
    )
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

$(function() {
    watchForm();
});