const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const country = document.getElementById("country");

const state = document.getElementById("state");
const city = document.getElementById("city");
const phone = document.getElementById("phone");
const userid = document.getElementById("userID");
const refcode = document.getElementById("refcode");
const form = document.getElementById("form");

form.addEventListener('submit', function(e)
{
    if (firstname.value == '' || firstname.value == null)
    {
        e.preventDefault();
    }
})