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
        image: "assets/img/dosen/PA ADE ANDRI.webp",
        matkul: "Technopreneur, Sistem Informasi Akuntansi dan Keuangan"
    },
    {
        name: "Adhi Rizal, S.Pd., M.T.",
        role: "Dosen Informatika",
        nidn: "0007089101",
        email: "adhi.rizal@staff.unsika.ac.id",
        image: "assets/img/dosen/PA ADHI.webp",
        matkul: "Sistem Operasi, Blockchain"
    },
    {
        name: "Agung Susilo Yuda Irawan, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0015069302",
        email: "agung@unsika.ac.id",
        image: "assets/img/dosen/PA AGUNG.webp",
        matkul: "Jaringan Komputer, A/B Testing, Pengantar Cloud Computing"
    },
    {
        name: "Aji Primajaya, S.Si., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0026048706",
        email: "aji.primajaya@staff.unsika.ac.id",
        image: "assets/img/dosen/PA AJI.webp",
        matkul: "Capstone Project, Data Visualisasi, Pengantar Cloud Computing"
    },
    {
        name: "Apriade Voutama, M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0004049401",
        email: "apriade.voutama@staff.unsika.ac.id",
        image: "assets/img/dosen/PA APRIADE.webp",
        matkul: "Etika Profesi, Pemrograman Animasi dan Multimedia"
    },
    {
        name: "Aries Suharso, S.Si., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0422037701",
        email: "aries.suharso@staff.unsika.ac.id",
        image: "assets/img/dosen/PA ARIES.webp",
        matkul: "Blockchain, Etika Profesi, Kapita Selekta Ilmu Komputer"
    },
    {
        name: "Arip Solehudin, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0016048902",
        email: "arip.solehudin@unsika.ac.id",
        image: "assets/img/dosen/PA ARIF.webp",
        matkul: "Cloud Computing, Pengantar Cloud Computing"
    },
    {
        name: "Asep Jamaludin, S.Si., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0010017606",
        email: "asep.jamaludin@staff.unsika.ac.id",
        image: "assets/img/dosen/PA ASEP.webp",
        matkul: "Pengenalan Pemrograman, Database Administration"
    },
    {
        name: "Azhari Ali Ridha, S.Kom., MMSI.",
        role: "Dosen Sistem Informasi",
        nidn: "0415098003",
        email: "azhari.ali@unsika.ac.id",
        image: "assets/img/dosen/PA AZHARI.webp",
        matkul: "Organisasi dan Arsitektur Komputer, Enterprise Resource Planning"
    },
    {
        name: "Betha Nurina Sari, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0023108901",
        email: "betha.nurina@staff.unsika.ac.id",
        image: "assets/img/dosen/BU BETHA.webp",
        matkul: "Basis Data, Data Mining, Text Mining"
    },
    {
        name: "Carudin, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0013048804",
        email: "carudin@staff.unsika.ac.id",
        image: "assets/img/dosen/PA CARUDIN.webp",
        matkul: "Interaksi Manusia dan Komputer, Etika Profesi"
    },
    {
        name: "Chaerur Rozikin, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0020058305",
        email: "chaerur.rozikin@staff.unsika.ac.id",
        image: "assets/img/dosen/PA CHAERUR.webp",
        matkul: "Internet of Things, Data Engineering, Enterprise Resource Planning"
    },
    {
        name: "Dadang Yusup, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0424048202",
        email: "dadang.dyf@staff.unsika.ac.id",
        image: "assets/img/dosen/PA DADANG.webp",
        matkul: "Pemrograman Berbasis Platform Web, Framework Pemrograman Web"
    },
    {
        name: "Didi Juardi, S.T., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0422047101",
        email: "didi.juardi@staff.unsika.ac.id",
        image: "assets/img/dosen/PA DIDI.webp",
        matkul: "Organisasi dan Arsitektur Komputer, Etika Profesi, Ethical Hacking, IT Governance"
    },
    {
        name: "Dr. Oman Komarudin, S.Si., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0406047702",
        email: "oman@unsika.ac.id",
        image: "assets/img/dosen/PA OMAN.webp",
        matkul: "Pengenalan Pemrograman, Enterprise Resource Planning"
    },
    {
        name: "E. Haodudin Nurkifli, M.Cs., Ph.D.",
        role: "Dosen Informatika",
        nidn: "0003048503",
        email: "dudi.nurkifli@staff.unsika.ac.id",
        image: "assets/img/dosen/PA HAO.webp",
        matkul: "Organisasi dan Arsitektur Komputer, Cloud Computing, Network Security, Kapita Selekta Ilmu Komputer"
    },
    {
        name: "Garno, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0029017806",
        email: "garno@staff.unsika.ac.id",
        image: "assets/img/dosen/PA GARNO.webp",
        matkul: "Komputer dan Masyarakat, Organisasi dan Arsitektur Komputer"
    },
    {
        name: "H. Bagja Nugraha, S.T., M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0012108501",
        email: "bagja.nugraha@staff.unsika.ac.id",
        image: "assets/img/dosen/PA BAGJA.webp",
        matkul: "Pengantar Kecerdasan Buatan, Integrasi Aplikasi Korporasi, Analisis dan Perancangan Sistem Informasi"
    },
    {
        name: "Hannie, M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0430088205",
        email: "hannie@staff.unsika.ac.id",
        image: "assets/img/dosen/BU HANNIE.webp",
        matkul: "Manajemen Proses Bisnis, Etika Profesi dan Profesional, IT in Financial Market, Hukum Paten & Merk"
    },
    {
        name: "Intan Purnamasari, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0006029201",
        email: "intan.purnamasari@staff.unsika.ac.id",
        image: "assets/img/dosen/BU INTAN.webp",
        matkul: "Algoritma Fundamental, Rekayasa Perangkat Lunak"
    },
    {
        name: "Iqbal Maulana, S.Si., M.Sc.",
        role: "Dosen Informatika",
        nidn: "0012029105",
        email: "iqbal.maulana@staff.unsika.ac.id",
        image: "assets/img/dosen/PA IQBAL.webp",
        matkul: "Matematika Diskrit, Etika Profesi"
    },
    {
        name: "Irfan Sriyono Putro, S.T., M.Si.",
        role: "Dosen Informatika",
        nidn: "199012092024061001",
        nidnLabel: "NIP",
        email: "irfan.sriyono@staff.unsika.ac.id",
        image: "assets/img/dosen/PA IRFAN.webp",
        matkul: "Matematika Diskrit, Pemrograman Berbasis Mobile, Internet of Things, Pengantar Kecerdasan Buatan"
    },
    {
        name: "Jajam Haerul Jaman, S.E., M.Kom.",
        role: "Dosen Informatika",
        nidn: "0010117808",
        email: "jajam.haeruljaman@staff.unsika.ac.id",
        image: "assets/img/dosen/PA JAJAM.webp",
        matkul: "Technopreneur, Data Mining, Rekayasa dan Manajemen Kebutuhan, Analisis Big Data"
    },
    {
        name: "Kamal Prihandani, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0002069106",
        email: "kamal.prihandani@unsika.ac.id",
        image: "assets/img/dosen/PA KAMAL.webp",
        matkul: "Framework Pemrograman Web, Pengantar Cloud Computing"
    },
    {
        name: "M. Jajuli, M.Si.",
        role: "Dosen Informatika",
        nidn: "0404128701",
        email: "mohamad.jajuli@unsika.ac.id",
        image: "assets/img/dosen/PA JAJULI.webp",
        matkul: "Technopreneur"
    },
    {
        name: "Nina Sulistiyowati, S.T., M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "000902830",
        email: "nina.sulistiyowati@unsika.ac.id",
        image: "assets/img/dosen/BU NINA.webp",
        matkul: "Pengantar Teknologi Informasi, IS Risk Management"
    },
    {
        name: "Nono Heryana, M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0003038905",
        email: "nono@unsika.ac.id",
        image: "assets/img/dosen/PA NONO.webp",
        matkul: "Pengantar Big Data, Sistem Informasi Manajemen, Sistem Operasi"
    },
    {
        name: "Purwantoro, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0408117702",
        email: "purwantoro.masbro@staff.unsika.ac.id",
        image: "assets/img/dosen/PA PUR.webp",
        matkul: "Pemrograman Berbasis Mobile, Pengantar Kecerdasan Buatan"
    },
    {
        name: "Ratna Mufidah, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0004068708",
        email: "ratna.mufidah@cs.unsika.ac.id",
        image: "assets/img/dosen/BU RATNA.webp",
        matkul: "Algoritma Fundamental, Data Visualisasi, Pengantar Big Data"
    },
    {
        name: "Rini Mayasari, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0028059101",
        email: "rini.mayasari@staff.unsika.ac.id",
        image: "assets/img/dosen/BU RINI.webp",
        matkul: "Komputer dan Masyarakat, Penjaminan Mutu Perangkat Lunak (SQA), Pengantar Big Data"
    },
    {
        name: "Riza Ibnu Adam, M.Si.",
        role: "Dosen Informatika",
        nidn: "0006119002",
        email: "riza.adam@staff.unsika.ac.id",
        image: "assets/img/dosen/PA RIZA.webp",
        matkul: "Sistem Operasi, Etika Profesi"
    },
    {
        name: "Siska, M.Kom.",
        role: "Dosen Sistem Informasi",
        nidn: "0030109004",
        email: "siska@staff.unsika.ac.id",
        image: "assets/img/dosen/BU SISKA.webp",
        matkul: "Konsep Sistem Informasi, Analisis dan Perancangan Sistem Informasi"
    },
    {
        name: "Sofi Defiyanti, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0413128502",
        email: "sofi.defiyanti@unsika.ac.id",
        image: "assets/img/dosen/BU SOFI.webp",
        matkul: "Capstone Project, Data Engineering, Kapita Selekta Ilmu Komputer"
    },
    {
        name: "Susilawati, M.Si.",
        role: "Dosen Informatika",
        nidn: "0018019002",
        email: "susilawati.sobur@staff.unsika.ac.id",
        image: "assets/img/dosen/BU SUSILAWATI.webp",
        matkul: "Internet of Things"
    },
    {
        name: "Taufik Ridwan, S.T., M.T.",
        role: "Dosen Sistem Informasi",
        nidn: "0006079201",
        email: "taufik.ridwan@cs.unsika.ac.id",
        image: "assets/img/dosen/PA TAUFIQ.webp",
        matkul: "Algoritma dan Dasar Pemrograman, Pemrograman Berorientasi Objek"
    },
    {
        name: "Tesa Nur Padilah, S.Si., M.Sc.",
        role: "Dosen Informatika",
        nidn: "0019109001",
        email: "tesa.nurpadilah@staff.unsika.ac.id",
        image: "assets/img/dosen/BU TESA.webp",
        matkul: "Kalkulus"
    },
    {
        name: "Ultach Enri, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0001018108",
        email: "ultach@staff.unsika.ac.id",
        image: "assets/img/dosen/BU ULTACH.webp",
        matkul: "-"
    },
    {
        name: "Yuyun Umaidah, M.Kom.",
        role: "Dosen Informatika",
        nidn: "0005088303",
        email: "yuyun.umaidah@unsika.ac.id",
        image: "assets/img/dosen/BU YUYUN.webp",
        matkul: "Basis Data, Data Mining, Pengantar Big Data"
    },
    {
        name: "Taufiq Paribo Pane, S.T.",
        role: "Staff Tata Usaha",
        tugas: "Kepala Urusan Tim Fasilkom",
        nidn: "196909272021211002",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/TaupikP.webp"
    },
    {
        name: "Ade Mulyadi, S.Pd.",
        role: "Staff Tata Usaha",
        tugas: "Pengelola Akademik",
        nidn: "198204282021211005",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/AdeMul.webp"
    },
    {
        name: "Ginanjar Mulya Hendarsyah, S.E., M.M.",
        role: "Staff Tata Usaha",
        tugas: "Bendahara",
        nidn: "198810062021211001",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/ginanjar.webp"
    },
    {
        name: "Muhammad Rizki Fauzi Suharto, S.Pd.",
        role: "Staff Tata Usaha",
        tugas: "Pengelola Barang Milik Negara, Administrasi Mahasiswa, Humas dan Kerjasama",
        nidn: "199111052021211001",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/muh rizki.webp"
    },
    {
        name: "Riga Karamudi, S.Pd.",
        role: "Staff Tata Usaha",
        tugas: "Pengelola Feeder, Administrasi Umum, Pengelola Layanan Mahasiswa",
        nidn: "199008212025211042",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/riga.webp"
    },
    {
        name: "Wahyu Darmawan, S.E., M.H.",
        role: "Staff Tata Usaha",
        tugas: "Pengelola Kepegawaian, Administrasi Keuangan",
        nidn: "198207272025211060",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/wahyu.webp"
    },
    {
        name: "Bagas",
        role: "Staff Tata Usaha",
        tugas: "Operator Layanan Mahasiswa",
        nidn: "199807022025211038",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/Bagas.webp"
    },
    {
        name: "Mahpud, S. Pd",
        role: "Staff Tata Usaha",
        tugas: "Operator Layanan Administrasi",
        nidn: "198305192025211039",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/Mahpud.webp"
    },
    {
        name: "Suhendri",
        role: "Staff Tata Usaha",
        tugas: "Operator Layanan Barang Milik Negara",
        nidn: "198305212025211025",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/suhendri.webp"
    },
    {
        name: "Asep Kosasih",
        role: "Staff Tata Usaha",
        tugas: "Operator Humas",
        nidn: "198306072025211068",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/Asep.webp"
    },
    {
        name: "Gebby Dwi Putri Haryanto, S.Kom.",
        role: "Staff Tata Usaha",
        tugas: "Operator Humas dan Kerja Sama",
        nidn: "-",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/geby.webp"
    },
    {
        name: "Salwa Nur Atifah, S.Kom.",
        role: "Staff Tata Usaha",
        tugas: "Programmer",
        nidn: "-",
        nidnLabel: "NIP",
        email: "-",
        image: "assets/img/dosen/salwa.webp"
    }
];

function createLecturerCard(lecturer) {
    const isStaffTU = lecturer.role === "Staff Tata Usaha";
    const categoryTitle = isStaffTU ? "Staff Member" : "Faculty Member";
    const idLabel = lecturer.nidnLabel || "NIDN";
    const idValue = lecturer.nidn || "-";
    const imageSrc = lecturer.image || "assets/img/icon/dosen-placeholder.svg";
    const roleSubtitle = lecturer.tugas ? `${lecturer.role} - ${lecturer.tugas}` : lecturer.role;

    return `
        <div class="dosen-card">
            <img class="dosen-card-image"
                 src="${imageSrc}"
                 alt="${lecturer.name}"
                 loading="lazy"
                 decoding="async">

            <div class="dosen-card-content">

                <div class="dosen-card-title">
                    <h3>${categoryTitle}</h3>
                    <h2>${lecturer.name}</h2>
                    <p>${roleSubtitle}</p>
                </div>

                <div class="dosen-card-info">

                    <div class="dosen-card-item">
                        <div class="dosen-card-icon">
                            <img src="assets/img/icon/Icon-NIDN.svg" alt="">
                        </div>

                        <div class="dosen-card-info-content">
                            <h4>${idLabel}</h4>
                            <p>${idValue}</p>
                        </div>
                    </div>

                    ${!isStaffTU ? `
                    <div class="dosen-card-item">
                        <div class="dosen-card-icon">
                            <img src="assets/img/icon/Icon-email.svg" alt="">
                        </div>

                        <div class="dosen-card-info-content">
                            <h4>Email Address</h4>
                            <p>${lecturer.email || '-'}</p>
                        </div>
                    </div>

                    <div class="dosen-card-item">
                        <div class="dosen-card-icon">
                            <img src="assets/img/icon/Icon-matkul.svg" alt="">
                        </div>

                        <div class="dosen-card-info-content">
                            <h4>Mata Kuliah</h4>
                            <p>${lecturer.matkul || '-'}</p>
                        </div>
                    </div>
                    ` : ''}

                </div>
            </div>
        </div>
    `;
}

const dosenGrid = document.querySelector(".dosen-grid");
const searchInput = document.getElementById("searchInput") || document.querySelector(".dosen-search input");
const dropdown = document.querySelector(".custom-dropdown");

function displayLecturers(data) {
    if (!dosenGrid) return;
    
    dosenGrid.innerHTML = data
        .map(createLecturerCard)
        .join("");

    const notFoundEl = document.getElementById("dosenNotFound");
    const sliderWrapper = document.querySelector(".dosen-slider-wrapper");

    if (notFoundEl && sliderWrapper) {
        if (data.length === 0) {
            sliderWrapper.style.display = "none";
            notFoundEl.style.display = "flex";
        } else {
            sliderWrapper.style.display = "";
            notFoundEl.style.display = "none";
        }
    }
}

function updateLecturers() {
    const searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const selectedCategory = dropdown ? dropdown.querySelector(".dropdown-selected span").innerText.trim().toLowerCase() : "semua dosen";

    const filtered = lecturers.filter(lecturer => {
        const matchesSearch =
            lecturer.name.toLowerCase().includes(searchText) ||
            (lecturer.email && lecturer.email.toLowerCase().includes(searchText)) ||
            (lecturer.nidn && lecturer.nidn.toLowerCase().includes(searchText)) ||
            (lecturer.role && lecturer.role.toLowerCase().includes(searchText)) ||
            (lecturer.matkul && lecturer.matkul.toLowerCase().includes(searchText)) ||
            (lecturer.tugas && lecturer.tugas.toLowerCase().includes(searchText));

        const matchesRole =
            selectedCategory === "semua dosen" ||
            lecturer.role.toLowerCase() === selectedCategory;

        return matchesSearch && matchesRole;
    });

    displayLecturers(filtered);
}

displayLecturers(lecturers);

if (dropdown) {
    const selected = dropdown.querySelector(".dropdown-selected");
    const selectedText = dropdown.querySelector(".dropdown-selected span");
    const optionsContainer = dropdown.querySelector(".dropdown-options");
    const optionsList = dropdown.querySelectorAll(".dropdown-option");

    selected.addEventListener("click", (e) => {
        e.stopPropagation();
        optionsContainer.classList.toggle("active");
        selected.classList.toggle("active");
    });

    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            selectedText.innerHTML = o.innerHTML;
            optionsContainer.classList.remove("active");
            selected.classList.remove("active");
            optionsList.forEach(opt => opt.classList.remove("active"));
            o.classList.add("active");
            updateLecturers();
        });
    });

    window.addEventListener("click", function(e) {
        if (!dropdown.contains(e.target)) {
            optionsContainer.classList.remove("active");
            selected.classList.remove("active");
        }
    });
}

if (searchInput) {
    searchInput.addEventListener("input", updateLecturers);
}