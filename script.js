// hide burger menu while scholling
$(window).scroll(function(){ 
    //more then or equals to 
    if($(window).scrollTop() >= 100 ){ 
        $( "#hamburger" ).css( "display", "none" ); 
    //less then 100px from top 
    } else { 
        
   $( "#hamburger" ).css( "display", "block" ); 
    } 
  }); 

// burger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
// FAQ
const accordion = document.getElementsByClassName
('contentBx');

for (i = 0; i<accordion.length; i++ ) {
    accordion[i].addEventListener('click', function()
    {
        this.classList.toggle('active')
    })
}




// 2 gis section
DG.then(function() {
  var map,
      marker1,
      marker2,
      marker3,
      group;

  map = DG.map('map', {
      center: [49.820256, 73.111941],
      zoom: 11
  });

  marker1 = DG.marker([49.820256, 73.111941]).addTo(map);
  marker2 = DG.marker([49.874158, 73.195548]).addTo(map);
  marker3 = DG.marker([54.99, 82.896]).addTo(map);

  group = DG.featureGroup([marker1, marker2, marker3]);
  group.addTo(map);
  group.on('click', function(e) {
      map.setView([e.latlng.lat, e.latlng.lng]);
  });
});
// 2gis section end






