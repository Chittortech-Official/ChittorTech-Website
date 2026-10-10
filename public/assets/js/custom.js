window.initChittorTechServices = function() {
  // Check if jQuery and owlCarousel plugin exist
  if (typeof $ !== 'undefined' && $.fn && typeof $.fn.owlCarousel === 'function') {
    // Destroy existing carousels first to prevent duplicates
    try {
      $('.owl-carousel').trigger('destroy.owl.carousel');
    } catch(e){}
    
    // Sliders
    $('.clients-silder').owlCarousel({
        loop:true, margin:30, autoplay: true, autoplayTimeout: 2000, autoplayHoverPause: true, nav:false, dots: false,
        responsive:{ 0:{ items:1 }, 600:{ items:3 }, 1000:{ items:6 } }
    });
    $('#clients-header').owlCarousel({
        loop:false, margin:30, autoplay: false, autoplayTimeout: 2000, autoplayHoverPause: true, nav:false, dots: false,
        responsive:{ 0:{ items:1 }, 600:{ items:3 }, 1000:{ items:6 } }
    });
    $('.simplifying').owlCarousel({
        loop:false, margin:30, autoplay: false, autoplayTimeout: 2000, autoplayHoverPause: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        nav:true, dots: false,
        responsive:{ 0:{ items:1 }, 600:{ items:2 }, 1000:{ items:3 } }
    });
    $('.store-silder').owlCarousel({
        loop:true, margin:10, nav:true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{ 0:{ items:1 }, 600:{ items:1 }, 1000:{ items:1 } }
    });
    $('#stories').owlCarousel({
        loop: true, margin: 20, nav: true, dots: true, autoplay: true, autoplayTimeout: 3500, autoplayHoverPause: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } }
      });

    // tabs
    $(".nav-links").off('click').on('click', function(){
        var tabId = parseInt($(this).data("id"));
        var pairedTabId = tabId % 2 === 0 ? tabId - 1 : tabId + 1;
        $(".nav-links").removeClass("active");
        $(".payment-arrow").removeClass("active");
        $(".tab-pane-integration").removeClass("active");
        $(".nav-links[data-id='" + tabId + "'], .nav-links[data-id='" + pairedTabId + "']").addClass("active");
        $(".payment-arrow[data-id='" + tabId + "'], .payment-arrow[data-id='" + pairedTabId + "']").addClass("active");
        $(".tab-pane-integration[data-content-id='content" + tabId + "'], .tab-pane-integration[data-content-id='content" + pairedTabId + "']").addClass("active");
    });
  }

  // Pure JS Initializations:
  // Scroll Spy
  const sections = document.querySelectorAll(".page-section");
  const navLinks = document.querySelectorAll(".side-nav a");
  function updateActiveLink() {
      let scrollPosition = window.scrollY + 150;
      sections.forEach((section, i) => {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
              document.querySelector(".side-nav a.active")?.classList.remove("active");
              navLinks[i]?.classList.add("active");
          }
      });
  }
  
  window.removeEventListener("scroll", updateActiveLink);
  window.addEventListener("scroll", updateActiveLink);
  
  navLinks.forEach(link => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          let targetId = this.getAttribute("href").substring(1);
          let targetSection = document.getElementById(targetId);
          if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: "smooth"
            });
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
          }
      });
  });
  updateActiveLink();

  // navbar toggle links mobile close
  document.querySelectorAll(".navbar-nav .nav-item .nav-link").forEach(link => {
      link.addEventListener("click", function(e){
        let parent = this.parentElement;
        let submenu = parent.querySelector(".mega-menu, .sub-menu");
        if(window.innerWidth < 992 && submenu){
          e.preventDefault();
          document.querySelectorAll(".navbar-nav .nav-item").forEach(item => {
            if(item !== parent){
              item.classList.remove("active");
              item.classList.remove("show");
            }
          });
          parent.classList.toggle("active");
          parent.classList.toggle("show");
        }
      });
    });

  // blog load more
  const blogs = document.querySelectorAll(".blog-card");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  let visibleCount = 9;
  blogs.forEach((blog, index) => {
    if (index >= visibleCount) blog.style.display = "none";
  });
  if (loadMoreBtn) {
    loadMoreBtn.onclick = null; // reset
    loadMoreBtn.addEventListener("click", function () {
      const hidden = Array.from(blogs).filter(b => b.style.display === "none");
      hidden.slice(0, 9).forEach(b => b.style.display = "block");
      if (Array.from(blogs).every(b => b.style.display === "block")) {
        loadMoreBtn.style.display = "none";
      }
    });
  }

  // Solution List
  document.querySelectorAll('.solution-list li').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.solution-list li').forEach(li => li.classList.remove('active'));
      document.querySelectorAll('.solution-panel').forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      document.getElementById(item.dataset.target)?.classList.add('active');
    });
  });

  // Integration Tabs
  const tabs = document.querySelectorAll('.integration-tabs button');
  const contents = document.querySelectorAll('.integration-content');
  tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      contents.forEach(c=>c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab)?.classList.add('active');
    });
  });

  // Side nav-link click handlers
  const sideNavLinks = document.querySelectorAll('.side-nav-link');
  const pageSections = document.querySelectorAll('.page-section');
  function openSection(id){
    pageSections.forEach(sec => sec.classList.remove('active'));
    sideNavLinks.forEach(link => link.classList.remove('active'));
    const section = document.getElementById(id);
    const link = document.querySelector('.side-nav-link[data-target="'+id+'"]');
    if(section) section.classList.add('active');
    if(link) link.classList.add('active');
  }
  sideNavLinks.forEach(link=>{
    link.addEventListener('click', function(){
      openSection(this.dataset.target);
    });
  });
  const defaultLink = document.querySelector('.side-nav-link.active');
  if(defaultLink){
    openSection(defaultLink.dataset.target);
  }

  // Footer City search
  const searchInput = document.getElementById('footerCitySearch');
  const citiesList = document.getElementById('footerCitiesList');
  if (searchInput && citiesList) {
      const cityLinks = citiesList.querySelectorAll('.city-link');
      searchInput.addEventListener('input', function() {
          const query = this.value.toLowerCase().trim();
          cityLinks.forEach(link => {
              const cityName = link.textContent.toLowerCase();
              if (cityName.includes(query)) {
                  link.style.display = 'inline-block';
              } else {
                  link.style.display = 'none';
              }
          });
          let noResults = document.getElementById('noCityResults');
          const allHidden = Array.from(cityLinks).every(l => l.style.display === 'none');
          if (allHidden) {
              if (!noResults) {
                  noResults = document.createElement('p');
                  noResults.id = 'noCityResults';
                  noResults.className = 'text-muted small mt-2';
                  noResults.textContent = 'No cities found matching your search.';
                  citiesList.appendChild(noResults);
              }
          } else {
              if (noResults) noResults.remove();
          }
      });
  }
};

// Also run once initially
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.initChittorTechServices);
  } else {
    window.initChittorTechServices();
  }
}
