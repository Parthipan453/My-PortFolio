/*===================== text design  =================*/

var typed = new Typed(".design-text", 
    {
    strings:["FullStack Webdeveloper."],
    typeSpeed : 100,
    backSpeed : 100, 
    backDelay : 1000,
    loop : true
});


function sendmail(){
    var params = {
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,


    }
    emailjs.send("service_dyxzxl3", "template_syzsvbx", params).then(function(Response)
    {
       alert("success", + Response.status);
    })
}



let menuIcon = document.querySelector('#menu-icon');
let nbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    nbar.classList.toggle('active');
}

/*===================== scroll section active link =================*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });
/*===================== sticky navbar =================*/

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*===================== remove toggle icon and navbar =================*/

menuIcon.classList.remove('fa-xmark');
nbar.classList.remove('active'); 
};


