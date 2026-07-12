(function($) {
	
	"use strict";
	
	
	function handlePreloader() {
		if($('.preloader').length){
			$('body').addClass('page-loaded');
			$('.preloader').delay(1000).fadeOut(300);
		}
	}
	
	
	function headerStyle() {
		
		
		
		
		
			
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		if($('.main-header').length){
			var scrollY = $(window).scrollTop();
			var header = $('.main-header');
			var headerTop = $('.header-top'); 

			if (scrollY <= 400) {
				
				header.removeClass('header-fixed').addClass('header-absolute');
				header.css({
					"transform": "translateY(0)",
					"opacity": "1"
				});
				
				
				
			} else if (scrollY > 400 && scrollY <= 550) {
				
				header.css({
					"transform": "translateY(-100px)",
					"opacity": "0"
				});
				
			} else {
				
				header.addClass('header-fixed').removeClass('header-absolute');
				header.css({
					"transform": "translateY(0)",
					"opacity": "1"
				});
				
				
			}
		}
	}
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
	
	headerStyle();

	$(window).on('scroll', function() {
		headerStyle();
	});

	
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
		
	}

	
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}

	$(window).on('scroll', function() {
		var scrollPos = $(window).scrollTop();
		var btn = $('#backToTop');

		if (scrollPos > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	
	$('#backToTop').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 0);
	});
	
	
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);
const lecturers = [
    {
        name: "Ade Andri Hendriadi, S.Si., M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0402047903",
        email: "adeandri@unsika.ac.id",
        image: "assets/img/dosen/PA ADE ANDRI.png"
    },
    {
        name: "Adhi Rizal, S.Pd., M.T.",
        role: "Dosen Informatika",
        nidn: "0007089101",
        email: "adhi.rizal@staff.unsika.ac.id",
        image: "assets/img/dosen/PA ADHI.png"
    },
    {
        name: "Agung Susilo Yuda Irawan, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0015069302",
        email: "agung@unsika.ac.id",
        image: "assets/img/dosen/PA AGUNG.png"
    },
    {
        name: "Aji Primajaya, S.Si., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0026048706",
        email: "aji.primajaya@staff.unsika.ac.id",
        image: "assets/img/dosen/PA AJI.png"
    },
    {
        name: "Apriade Voutama, M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0004049401",
        email: "apriade.voutama@staff.unsika.ac.id",
        image: "assets/img/dosen/PA APRIADE.png"
    },
    {
        name: "Aries Suharso, S.Si., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0422037701",
        email: "aries.suharso@staff.unsika.ac.id",
        image: "assets/img/dosen/PA ARIES.png"
    },
    {
        name: "Arip Solehudin, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0016048902",
        email: "arip.solehudin@unsika.ac.id",
        image: "assets/img/dosen/PA ARIF.png"
    },
    {
        name: "Asep Jamaludin, S.Si., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0010017606",
        email: "asep.jamaludin@staff.unsika.ac.id",
        image: "assets/img/dosen/PA ASEP.png"
    },
    {
        name: "Azhari Ali Ridha, S.Kom., MMSI.",
        role: "Dosen Sistem Informasi",
        nidn: "0415098003",
        email: "azhari.ali@unsika.ac.id",
        image: "assets/img/dosen/PA AZHARI.png"
    },
    {
        name: "Betha Nurina Sari, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0023108901",
        email: "betha.nurina@staff.unsika.ac.id",
        image: "assets/img/dosen/BU BETHA.png"
    },
    {
        name: "Carudin, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0013048804",
        email: "carudin@staff.unsika.ac.id",
        image: "assets/img/dosen/PA CARUDIN.png"
    },
    {
        name: "Chaerur Rozikin, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0020058305",
        email: "chaerur.rozikin@staff.unsika.ac.id",
        image: "assets/img/dosen/PA CHAERUR.png"
    },
    {
        name: "Dadang Yusup, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0424048202",
        email: "dadang.dyf@staff.unsika.ac.id",
        image: "assets/img/dosen/PA DADANG.png"
    },
    {
        name: "Didi Juardi, S.T., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0422047101",
        email: "didi.juardi@staff.unsika.ac.id",
        image: "assets/img/dosen/PA DIDI.png"
    },
    {
        name: "Dr. Oman Komarudin, S.Si., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0406047702",
        email: "oman@unsika.ac.id",
        image: "assets/img/dosen/PA OMAN.png"
    },
    {
        name: "E. Haodudin Nurkifli, M.Cs., Ph.D.",
        role: "Dosen Informatika",
        nidn: "0003048503",
        email: "dudi.nurkifli@staff.unsika.ac.id",
        image: "assets/img/dosen/PA HAO.png"
    },
    {
        name: "Garno, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0029017806",
        email: "garno@staff.unsika.ac.id",
        image: "assets/img/dosen/PA GARNO.png"
    },
    {
        name: "H. Bagja Nugraha, S.T., M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0012108501",
        email: "bagja.nugraha@staff.unsika.ac.id",
        image: "assets/img/dosen/PA BAGJA.png"
    },
    {
        name: "Hannie, M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0430088205",
        email: "hannie@staff.unsika.ac.id",
        image: "assets/img/dosen/BU HANNIE.png"
    },
    {
        name: "Intan Purnamasari, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0006029201",
        email: "intan.purnamasari@staff.unsika.ac.id",
        image: "assets/img/dosen/BU INTAN.png"
    },
    {
        name: "Iqbal Maulana, S.Si., M.Sc.",
        role: "Dosen Informatika",
        nidn: "0012029105",
        email: "iqbal.maulana@staff.unsika.ac.id",
        image: "assets/img/dosen/PA IQBAL.png"
    },
    {
        name: "Jajam Haerul Jaman, S.E., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0010117808",
        email: "jajam.haeruljaman@staff.unsika.ac.id",
        image: "assets/img/dosen/PA JAJAM.png"
    },
    {
        name: "Kamal Prihandani, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0002069106",
        email: "kamal.prihandani@unsika.ac.id",
        image: "assets/img/dosen/PA KAMAL.png"
    },
    {
        name: "M. Jajuli, M.Si.",
        role: "Dosen Informatika",
        nidn: "0404128701",
        email: "mohamad.jajuli@unsika.ac.id",
        image: "assets/img/dosen/PA JAJULI.png"
    },
    {
        name: "Nina Sulistiyowati, S.T., M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "000902830",
        email: "nina.sulistiyowati@unsika.ac.id",
        image: "assets/img/dosen/BU NINA.png"
    },
    {
        name: "Nono Heryana, M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0003038905",
        email: "nono@unsika.ac.id",
        image: "assets/img/dosen/PA NONO.png"
    },
    {
        name: "Purwantoro, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0408117702",
        email: "purwantoro.masbro@staff.unsika.ac.id",
        image: "assets/img/dosen/PA PUR.png"
    },
    {
        name: "Ratna Mufidah, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0004068708",
        email: "ratna.mufidah@cs.unsika.ac.id",
        image: "assets/img/dosen/BU RATNA.png"
    },
    {
        name: "Rini Mayasari, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0028059101",
        email: "rini.mayasari@staff.unsika.ac.id",
        image: "assets/img/dosen/BU RINI.png"
    },
    {
        name: "Riza Ibnu Adam, M.Si.",
        role: "Dosen Informatika",
        nidn: "0006119002",
        email: "riza.adam@staff.unsika.ac.id",
        image: "assets/img/dosen/PA RIZA.png"
    },
    {
        name: "Siska, M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0030109004",
        email: "siska@staff.unsika.ac.id",
        image: "assets/img/dosen/BU SISKA.png"
    },
    {
        name: "Sofi Defiyanti, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0413128502",
        email: "sofi.defiyanti@unsika.ac.id",
        image: "assets/img/dosen/BU SOFI.png"
    },
    {
        name: "Susilawati, M.Si.",
        role: "Dosen Informatika",
        nidn: "0018019002",
        email: "susilawati.sobur@staff.unsika.ac.id",
        image: "assets/img/dosen/BU SUSILAWATI.png"
    },
    {
        name: "Taufik Ridwan, S.T., M.T.",
        role: "Dosen Sistem Informasi",
        nidn: "0006079201",
        email: "taufik.ridwan@cs.unsika.ac.id",
        image: "assets/img/dosen/PA TAUFIQ.png"
    },
    {
        name: "Tesa Nur Padilah, S.Si., M.Sc.",
        role: "Dosen Informatika",
        nidn: "0019109001",
        email: "tesa.nurpadilah@staff.unsika.ac.id",
        image: "assets/img/dosen/BU TESA.png"
    },
    {
        name: "Ultach Enri, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0001018108",
        email: "ultach@staff.unsika.ac.id",
        image: "assets/img/dosen/BU ULTACH.png"
    },
    {
        name: "Yuyun Umaidah, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0005088303",
        email: "yuyun.umaidah@unsika.ac.id",
        image: "assets/img/dosen/BU YUYUN.png"
    }
];




function createLecturerCard(lecturer) {
    return `
        <div class="dosen-card">
            <img class="dosen-card-image"
                 src="${lecturer.image}"
                 alt="${lecturer.name}">

            <div class="dosen-card-content">

                <div class="dosen-card-title">
                    <h3>Faculty Member</h3>
                    <h2>${lecturer.name}</h2>
                    <p>${lecturer.role}</p>
                </div>

                <div class="dosen-card-info">

                    <div class="dosen-card-item">
                        <div class="dosen-card-icon">
                            <img src="assets/img/icon/Icon-NIDN.svg" alt="">
                        </div>

                        <div class="dosen-card-info-content">
                            <h4>NIDN</h4>
                            <p>${lecturer.nidn}</p>
                        </div>
                    </div>

                    <div class="dosen-card-item">
                        <div class="dosen-card-icon">
                            <img src="assets/img/icon/Icon-email.svg" alt="">
                        </div>

                        <div class="dosen-card-info-content">
                            <h4>Email Address</h4>
                            <p>${lecturer.email}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;
}




const dosenGrid = document.querySelector(".dosen-grid");
const searchInput = document.querySelector(".dosen-search input");
const filterSelect = document.querySelector(".dosen-filter select");




function displayLecturers(data) {
    dosenGrid.innerHTML = data
        .map(createLecturerCard)
        .join("");
}


displayLecturers(lecturers);




function updateLecturers() {

    const searchText = searchInput.value.toLowerCase().trim();
    const selectedRole = filterSelect.value;

    const filtered = lecturers.filter(lecturer => {

        
        const matchesSearch =
            lecturer.name.toLowerCase().includes(searchText) ||
            lecturer.email.toLowerCase().includes(searchText) ||
            lecturer.nidn.includes(searchText);

        
        const matchesRole =
            selectedRole === "Semua Dosen" ||
            lecturer.role === selectedRole;

        return matchesSearch && matchesRole;
    });

    displayLecturers(filtered);
}




searchInput.addEventListener("input", updateLecturers);
filterSelect.addEventListener("change", updateLecturers);