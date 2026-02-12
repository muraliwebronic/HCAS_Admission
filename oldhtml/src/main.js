document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Modal Logic (Login Page)
    const modal = document.getElementById("notesModal");
    const openBtn = document.getElementById("openNotesBtn");
    const closeBtn = document.getElementById("closeNotesBtn");
    const closeBtnBottom = document.getElementById("closeNotesBtnBottom");

    if (modal) {
        const openModal = () => {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
            document.body.style.overflow = "hidden";
        };
        const closeModal = () => {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
            document.body.style.overflow = "";
        };

        if (openBtn) openBtn.addEventListener("click", openModal);
        if (closeBtn) closeBtn.addEventListener("click", closeModal);
        if (closeBtnBottom) closeBtnBottom.addEventListener("click", closeModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // 3. Initialize Carousels
    // Check if renderCarousel exists (for placements) and call it
    if (typeof renderCarousel === "function") renderCarousel();

    // Initialize Academic Sliders
    if (typeof programsData !== 'undefined') {
        programsData.forEach(program => {
            updateUI(program.id);
            renderStaticList(program.id);
        });
    }
});

/* =========================================
   SECTION A: ACADEMIC SLIDER LOGIC
   ========================================= */
const CAPS = { green: "./images/greencap.png", blue: "./images/bluecap.png" };
// programsData is now loaded from src/data.js

const sliderState = {};
programsData.forEach((s) => (sliderState[s.id] = 0));
const itemsPerPage = 6;

const getThemeStyles = (theme) => {
    switch (theme) {
        case "red":
            return { pagination: "bg-red-600", paginationInactive: "bg-gray-300" };
        case "blue":
        default:
            return { pagination: "bg-blue-600", paginationInactive: "bg-gray-300" };
    }
};

function renderGridHTML(items) {
    return items
        .map(
            (item) => `
    <div class="group relative flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-500 bg-white/40 backdrop-blur-md border border-white/60 hover:bg-white hover:border-white hover:shadow-xl hover:-translate-y-1 h-full">
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-gradient-to-b ${item.color === "green" ? "from-green-50/50" : "from-blue-50/50"} to-transparent pointer-events-none"></div>
        <div class="mb-4 relative h-16 w-16 flex items-center justify-center">
            <div class="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 ${item.color === "green" ? "bg-green-200" : "bg-blue-200"}"></div>
            <img src="${item.color === "green" ? CAPS.green : CAPS.blue}" alt="Cap" class="w-full h-full object-contain relative z-10 drop-shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
        </div>
        <h3 class="relative z-10 text-xs lg:text-sm font-bold text-gray-800 mb-4 line-clamp-2 min-h-[2.5rem] flex items-center justify-center leading-tight">${item.name}</h3>
        <a href="${item.link || '#'}" class="relative z-10 mt-auto px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider hover:bg-blue-600 hover:text-white transition-colors duration-300">
            Apply Now
        </a>
    </div>
  `,
        )
        .join("");
}

function updateUI(id) {
    const section = programsData.find((d) => d.id === id);
    if (!section) return; // Guard clause

    const styles = getThemeStyles(section.theme);
    const current = sliderState[id];
    const start = current * itemsPerPage;
    const visible = section.sliderItems.slice(start, start + itemsPerPage);
    const total = Math.ceil(section.sliderItems.length / itemsPerPage);

    const grid = document.getElementById("slider-grid-" + id);
    if (grid) {
        const emptyCount = itemsPerPage - visible.length;
        const emptyHTML = Array.from({ length: emptyCount })
            .map(() => '<div class="hidden lg:block min-h-[200px]"></div>')
            .join("");
        grid.innerHTML =
            '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in-up">' +
            renderGridHTML(visible) +
            emptyHTML +
            "</div>";
    }

    const dots = document.getElementById("slider-pagination-" + id);
    if (dots) {
        dots.innerHTML = Array.from({ length: total })
            .map(
                (_, i) => `
        <button onclick="changeSlide('${id}', ${i})" class="h-1 rounded-full transition-all duration-500 ease-out cursor-pointer ${i === current ? "w-8 " + styles.pagination : "w-2 " + styles.paginationInactive + " hover:bg-gray-400"}"></button>
      `,
            )
            .join("");
    }
    if (window.lucide) window.lucide.createIcons();
}

// Global functions for ACADEMIC slider
window.nextSlide = (id) => {
    const s = programsData.find((d) => d.id === id);
    if (!s) return;
    const total = Math.ceil(s.sliderItems.length / itemsPerPage);
    sliderState[id] = (sliderState[id] + 1) % total;
    updateUI(id);
};
window.prevSlide = (id) => {
    const s = programsData.find((d) => d.id === id);
    if (!s) return;
    const total = Math.ceil(s.sliderItems.length / itemsPerPage);
    sliderState[id] = sliderState[id] === 0 ? total - 1 : sliderState[id] - 1;
    updateUI(id);
};
window.changeSlide = (id, idx) => {
    sliderState[id] = idx;
    updateUI(id);
};

function renderStaticList(id) {
    const section = programsData.find((d) => d.id === id);
    if (!section) return;

    const listContainer = document.getElementById("static-list-" + id);
    if (listContainer) {
        listContainer.innerHTML = section.staticList
            .map(
                (item) => `
            <a href="${item.link}" class="flex items-start gap-2 group/item hover:bg-white/50 p-2 rounded-lg transition-colors">
                 <div class="mt-1.5 min-w-[6px] h-1.5 rounded-full ${section.theme === 'red' ? 'bg-red-500' : 'bg-blue-500'} group-hover/item:scale-125 transition-transform"></div>
                 <span class="text-[10px] md:text-xs font-bold text-gray-700 leading-relaxed group-hover/item:text-blue-900 transition-colors">
                    ${item.name}
                 </span>
            </a>
            `
            )
            .join("");
    }
}

/* =========================================
   SECTION B: VIDEO PLAYER LOGIC
   ========================================= */
window.playVideo = function () {
    const placeholder = document.getElementById("video-placeholder");
    const container = document.getElementById("video-iframe-container");
    if (placeholder && container) {
        placeholder.style.display = "none";
        container.classList.remove("hidden");
        container.innerHTML = `
        <iframe class="w-full h-full" src="https://www.youtube.com/embed/6t4i0zal984?si=w1dISYTtEQUNqmSr&autoplay=1" title="HCAS Campus Tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
    }
};

/* =========================================
   SECTION C: PLACEMENT SLIDER LOGIC
   ========================================= */
const PLACEMENTS = [
    {
        name: "Nida Amreen",
        course: "B.Sc Psychology",
        company: "Rinex",
        image: "./hcas-images/students/NIDA-AMREEN-rinex.jpg",
    },
    {
        name: "Aditya Kumar",
        course: "B.COM BM",
        company: "Sutherland",
        image: "./hcas-images/students/ADITYA-KUMAR-sutherland.jpg",
    },
    {
        name: "Anitha V",
        course: "B.SC CS",
        company: "TVS",
        image: "./hcas-images/students/ANITHA.V-tvs.jpg",
    },
    {
        name: "Siddarth P",
        course: "B.Com (G)",
        company: "Elewayte",
        image: "./hcas-images/students/SIDDARTH-P-elewayte.jpg",
    },
    {
        name: "Nithish A P",
        course: "B.Com (CS)",
        company: "ICICI",
        image: "./hcas-images/students/NITHISH-AP-icici.jpg",
    },
];

let placementIndex = 0;
const placementItemsToShow = 5;
const totalPlacementItems = PLACEMENTS.length;

function renderCarousel() {
    const container = document.getElementById("carousel-grid");
    if (!container) return; // Guard against running on pages without this grid
    container.innerHTML = "";

    for (let i = 0; i < placementItemsToShow; i++) {
        const itemIndex = (placementIndex + i) % totalPlacementItems;
        const student = PLACEMENTS[itemIndex];

        const cardHTML = `
        <div class="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 animate-fade-in-up">
            <div class="w-full h-[280px] overflow-hidden relative">
                <img src="${student.image}" alt="${student.name}" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop'" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div class="absolute top-3 right-3 bg-green-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
                    <i data-lucide="sparkles" class="w-[10px] h-[10px] fill-current"></i> PLACED
                </div>
            </div>
            <div class="absolute bottom-0 left-0 w-full p-4 text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 class="text-lg font-bold font-serif mb-0.5 text-white drop-shadow-md">${student.name}</h3>
                <p class="text-[10px] text-gray-200 uppercase tracking-wider font-medium mb-3">${student.course}</p>
                <div class="inline-flex items-center gap-1.5 bg-white text-blue-900 px-3 py-1.5 rounded-full text-[10px] font-bold shadow-lg mb-2">
                    <i data-lucide="briefcase" class="w-[10px] h-[10px]"></i> ${student.company}
                </div>
            </div>
        </div>
    `;
        container.innerHTML += cardHTML;
    }
    if (window.lucide) window.lucide.createIcons();
}

// Global functions for PLACEMENT slider (Renamed to avoid conflict)
window.nextPlacement = function () {
    placementIndex = (placementIndex + 1) % totalPlacementItems;
    renderCarousel();
};

window.prevPlacement = function () {
    placementIndex = placementIndex === 0 ? totalPlacementItems - 1 : placementIndex - 1;
    renderCarousel();
};
