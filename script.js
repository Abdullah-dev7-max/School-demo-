const $ = (s) => document.querySelector(s),
  ic = (n) => `<svg class="i"><use href="#${n}"/></svg>`,
  ini = (s) =>
    s
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2);
const H = (id, a, f) => {
  const el = $("#" + id);
  if (el) el.innerHTML = a.map(f).join("");
};
document.querySelectorAll("img[data-optional-image]").forEach((image) => {
  const hideMissingImage = () => image.classList.add("image-unavailable");
  if (image.complete && !image.naturalWidth) hideMissingImage();
  else image.addEventListener("error", hideMissingImage, { once: true });
});
H(
  "msgs",
  [
    [
      "Director’s Name",
      "Director",
      "Every child carries a unique spark. Our job is to protect it, challenge it and help it shine. Thank you for trusting Spring Field with your most precious asset.",
      "assets/images/Director.png",
    ],
    [
      "Principal’s Name",
      "Principal",
      "Our classrooms are built on warmth and high expectations. I invite you to visit, meet our teachers and see how learning feels at Spring Field.",
      "assets/images/principle.png",
    ],
  ],
  (m) =>
    `<article class="card lift leadership-card"><img class="leadership-photo" src="${m[3]}" alt="${m[0]}, ${m[1]}" /><div class="leadership-copy"><p class="mut text-[15px]">“${m[2]}”</p><b class="block mt-4">${m[0]}</b><span class="text-sm" style="color:var(--g)">${m[1]}</span></div></article>`,
);
H(
  "levels",
  [
    [
      "Pre-School",
      "Playgroup, Nursery, Prep",
      "Play-based learning that builds language, motor skills and curiosity.",
    ],
    [
      "Primary",
      "Grade 1 to 5",
      "Strong foundations in English, Urdu, Maths, Science and Islamiyat.",
    ],
    [
      "Middle",
      "Grade 6 to 8",
      "Subject teachers, labs and projects that deepen understanding.",
    ],
    [
      "Matric",
      "Grade 9 to 10",
      "Focused board preparation with mock exams and career guidance.",
    ],
  ],
  (l) =>
    `<div class="card lift"><div class="ico">${ic("book")}</div><h3 class="font-semibold text-lg mt-4">${l[0]}</h3><p class="text-sm font-medium" style="color:var(--g)">${l[1]}</p><p class="mut text-sm mt-2">${l[2]}</p></div>`,
);
const cls = [
  "Playgroup",
  "Nursery",
  "Prep",
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => "Grade " + n),
];
const classes = $("#classes");
if (classes) {
  classes.innerHTML = cls
    .map(
      (c) =>
        `<span class="px-4 py-2 rounded-full text-sm font-medium" style="background:var(--paper);border:1px solid var(--line)">${c}</span>`,
    )
    .join("");
}
const grade = $("#gr");
if (grade) grade.innerHTML += cls.map((c) => `<option>${c}</option>`).join("");
H(
  "fac",
  [
    [
      "flask",
      "Science laboratories",
      "Physics, Chemistry and Biology labs with guided practicals.",
    ],
    [
      "pc",
      "Computer labs",
      "Modern systems and digital skills from the primary years.",
    ],
    [
      "book",
      "Library",
      "A calm reading space with English and Urdu collections.",
    ],
    [
      "cup",
      "Sports",
      "Cricket, football, badminton and athletics with trained coaches.",
    ],
    [
      "board",
      "Smart classrooms",
      "Interactive displays that bring lessons to life.",
    ],
    [
      "star",
      "Co-curricular activities",
      "Debating, art, robotics and science clubs.",
    ],
  ],
  (f) =>
    `<div class="card lift"><div class="ico">${ic(f[0])}</div><h3 class="font-semibold text-lg mt-4">${f[1]}</h3><p class="mut text-sm mt-2">${f[2]}</p></div>`,
);
H(
  "gal",
  ["Campus", "Classroom", "Science lab", "Playground"],
  (g) => `<div class="ph aspect-[4/3]">${g}<br>photo</div>`,
);
H(
  "top",
  [
    [
      "Student Name",
      "Grade 10",
      "1,020 / 1,100",
      "Board position holder",
      "assets/images/Download_premium_image_of_Young_indian_boy_happy_smile_portrait__by_Tong_about_student_image__indian_school_boy_png__indian_school_boys__indian_school_student_png__and_indian_kid_18693633-removebg-pre.png",
    ],
    [
      "Student Name",
      "Grade 10",
      "1,005 / 1,100",
      "A1 grade",
      "assets/images/Special_Education_Tutoring_Free_Consultation_Long_-_Special_Ed_Resource-removebg-preview (1).png",
    ],
    [
      "Student Name",
      "Grade 8",
      "Gold medal",
      "Science fair winner",
      "assets/images/Polegar_Se_Para_Estudantes_Com_Livros_E_Mochila_PNG___Realista__Estudante__Afirmativo_PNG_Imagem_para_download_gratuito-removebg-preview.png",
    ],
    [
      "Student Name",
      "Grade 5",
      "1st position",
      "Inter-school debate",
      "assets/images/Become_a_Teacher_in_Ohio___Ohio_Teacher_Certification___American_Board-removebg-preview.png",
    ],
  ],
  (s) =>
    `<article class="card lift about-profile-card"><img class="about-profile-photo" src="${s[4]}" alt="${s[0]}, ${s[1]}" /><div class="about-profile-copy"><b>${s[0]}</b><span class="text-sm mut">${s[1]}</span><strong>${s[2]}</strong><p class="text-sm mut">${s[3]}</p></div></article>`,
);
H(
  "team-g",
  [
    ["Vice Principal", "Academics and discipline", "assets/images/Director.png"],
    ["Academic Coordinator", "Curriculum and exams", "assets/images/principle.png"],
    ["Head of Pre-School", "Playgroup to Prep", "assets/images/Director.png"],
    ["Administration Manager", "Operations and admissions", "assets/images/principle.png"],
  ],
  (t) =>
    `<article class="card lift about-profile-card"><img class="about-profile-photo" src="${t[2]}" alt="${t[0]}" /><div class="about-profile-copy"><b>Full Name</b><span class="text-sm font-medium" style="color:var(--g)">${t[0]}</span><p class="text-sm mut">${t[1]}</p></div></article>`,
);
H(
  "age",
  [
    ["Playgroup", "2.5 years"],
    ["Nursery", "3.5 years"],
    ["Prep", "4.5 years"],
    ["Grade 1", "5.5 years"],
    ["Grade 6", "10 years"],
    ["Grade 9", "13 years"],
  ],
  (a) => `<tr><td>${a[0]}</td><td>${a[1]}</td></tr>`,
);
H(
  "fee",
  [
    ["Pre-School", "Rs. 10,000", "Rs. 6,500"],
    ["Primary", "Rs. 12,000", "Rs. 7,500"],
    ["Middle", "Rs. 15,000", "Rs. 9,000"],
    ["Matric", "Rs. 18,000", "Rs. 11,000"],
  ],
  (f) => `<tr><td>${f[0]}</td><td>${f[1]}</td><td>${f[2]}</td></tr>`,
);
const sb =
  "w-11 h-11 rounded-full grid place-items-center text-white font-semibold";
const socials = $("#soc");
if (socials) {
  socials.innerHTML =
    `<a href="#" aria-label="Facebook" class="${sb}" style="background:var(--g)">f</a><a href="#" aria-label="Instagram" class="${sb}" style="background:var(--g)"><svg class="i !w-[18px] !h-[18px]"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a><a href="#" aria-label="YouTube" class="${sb}" style="background:var(--g)"><svg class="i !w-[18px] !h-[18px]"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/></svg></a><a href="https://wa.me/923000000000" target="_blank" rel="noopener" aria-label="WhatsApp" class="${sb}" style="background:var(--g2)">W</a>`;
}
const cardImages = [
  "assets/images/Download_premium_image_of_Young_indian_boy_happy_smile_portrait__by_Tong_about_student_image__indian_school_boy_png__indian_school_boys__indian_school_student_png__and_indian_kid_18693633-removebg-pre.png",
  "assets/images/Special_Education_Tutoring_Free_Consultation_Long_-_Special_Ed_Resource-removebg-preview.png",
  "assets/images/Polegar_Se_Para_Estudantes_Com_Livros_E_Mochila_PNG___Realista__Estudante__Afirmativo_PNG_Imagem_para_download_gratuito-removebg-preview.png",
  "assets/images/Become_a_Teacher_in_Ohio___Ohio_Teacher_Certification___American_Board-removebg-preview.png",
];
document
  .querySelectorAll('body:not([data-page="home"]) .card')
  .forEach((card, index) => {
    if (card.closest("#msgs, #top, #team-g, #history .grid-cols-3, #apply")) return;
    const art = document.createElement("div");
    const image = document.createElement("img");
    art.className = `card-art card-art-${(index % 4) + 1}`;
    art.setAttribute("aria-hidden", "true");
    image.src = cardImages[index % cardImages.length];
    image.alt = "";
    image.loading = "lazy";
    art.append(image);
    card.prepend(art);
    card.classList.add("illustrated-card");
    if (card.getBoundingClientRect().width < 180) {
      card.classList.add("illustrated-card-compact");
    }
  });
const b = $("#burger"),
  m = $("#mob");
if (b && m) {
  b.onclick = () => {
    const hidden = m.classList.toggle("hidden");
    b.setAttribute("aria-expanded", String(!hidden));
  };
  m.querySelectorAll("a").forEach(
    (a) => (a.onclick = () => m.classList.add("hidden")),
  );
}
document.querySelectorAll("[data-page-link]").forEach((link) => {
  if (link.dataset.pageLink === document.body.dataset.page) {
    link.setAttribute("aria-current", "page");
  }
});
const form = $("#adm");
if (form) {
  const requiredIds = ["sn", "dob", "gr", "gn", "ph", "em", "ad"];
  $("#dob").max = new Date().toISOString().slice(0, 10);
  form.onsubmit = (e) => {
    e.preventDefault();
    const error = $("#err");
    const missing = requiredIds.filter((id) => !$("#" + id).value.trim());
    requiredIds.forEach((id) =>
      $("#" + id).classList.toggle("bad", missing.includes(id)),
    );
    if (missing.length) {
      error.textContent = "Please complete the highlighted required fields.";
      error.classList.remove("hidden");
      $("#" + missing[0]).focus();
      return;
    }

    const phone = $("#ph").value.replace(/\D/g, "");
    if (phone.length < 10 || phone.length > 13) {
      $("#ph").classList.add("bad");
      error.textContent = "Enter a valid phone number, for example 0300 1234567.";
      error.classList.remove("hidden");
      $("#ph").focus();
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($("#em").value.trim())) {
      $("#em").classList.add("bad");
      error.textContent = "Enter a valid email address.";
      error.classList.remove("hidden");
      $("#em").focus();
      return;
    }

    error.classList.add("hidden");
    $("#dt").textContent =
      `The application details for ${$("#sn").value.trim()} (${$("#gr").value}) are ready. This demo does not send or store applications; please contact the admissions office to submit them.`;
    form.classList.add("hidden");
    $("#done").classList.remove("hidden");
  };
  $("#again").onclick = () => {
    $("#done").classList.add("hidden");
    form.classList.remove("hidden");
  };
}
const year = $("#yr");
if (year) year.textContent = new Date().getFullYear();

if (document.body.dataset.page !== "application") {
  const applicationDialog = document.createElement("div");
  applicationDialog.className = "application-dialog";
  applicationDialog.hidden = true;
  applicationDialog.innerHTML =
    '<div class="application-dialog-backdrop" data-application-close></div><section class="application-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="application-dialog-title" tabindex="-1"><header class="application-dialog-header"><div><p>SPRING FIELD INTERNATIONAL SCHOOL</p><h2 id="application-dialog-title">Admission application</h2></div><button class="application-dialog-close" type="button" aria-label="Close application form" data-application-close>&times;</button></header><iframe class="application-dialog-frame" title="Admission application form" loading="lazy"></iframe></section>';
  document.body.append(applicationDialog);

  const closeButton = applicationDialog.querySelector(
    ".application-dialog-close",
  );
  const applicationFrame = applicationDialog.querySelector("iframe");
  let lastFocusedElement = null;

  const closeApplicationDialog = () => {
    applicationDialog.hidden = true;
    document.body.classList.remove("application-dialog-open");
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
  };

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const applyLink = target.closest('a[href$="application.html"]');
    if (applyLink) {
      event.preventDefault();
      lastFocusedElement = applyLink;
      if (m) m.classList.add("hidden");
      if (b) b.setAttribute("aria-expanded", "false");
      if (!applicationFrame.hasAttribute("src")) {
        applicationFrame.src = new URL(
          "application.html?embed=1",
          window.location.href,
        ).href;
      }
      applicationDialog.hidden = false;
      document.body.classList.add("application-dialog-open");
      closeButton.focus();
      return;
    }

    if (target.closest("[data-application-close]")) closeApplicationDialog();
  });

  document.addEventListener("keydown", (event) => {
    if (applicationDialog.hidden) return;
    if (event.key === "Escape") {
      closeApplicationDialog();
    }
  });

  applicationFrame.addEventListener("load", () => {
    applicationFrame.contentDocument.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeApplicationDialog();
    });
  });
}

if (new URLSearchParams(window.location.search).has("embed")) {
  document.body.classList.add("application-embed");
}

const whatsapp = document.createElement("a");
whatsapp.className = "floating-whatsapp";
whatsapp.href =
  "https://wa.me/923000000000?text=Assalam%20o%20Alaikum%2C%20I%20would%20like%20more%20information.";
whatsapp.target = "_blank";
whatsapp.rel = "noopener noreferrer";
whatsapp.setAttribute("aria-label", "Chat with us on WhatsApp");
whatsapp.innerHTML =
  '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.6 12.6 0 0 0 5.2 22.3L3.5 28.5l6.4-1.7A12.6 12.6 0 1 0 16 3.2Z"/><path d="M11.2 9.5c-.4-.8-.8-.8-1.2-.8h-1c-.4 0-.9.2-1.3.7-.5.5-1.7 1.7-1.7 4.1s1.8 4.8 2 5.1c.2.3 3.5 5.6 8.6 7.6 4.2 1.7 5.1 1.4 6 .9.9-.4 2.8-1.2 3.2-2.4.4-1.2.4-2.2.3-2.4-.2-.2-.5-.4-1.1-.7l-3.2-1.5c-.4-.2-.8-.3-1.1.3-.3.5-1.3 1.5-1.6 1.8-.3.3-.6.4-1.1.1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.3-.3-.5 0-.8.2-1 .2-.2.5-.6.8-.9.3-.3.4-.5.5-.8.2-.3.1-.6 0-.9Z"/></svg>';
document.body.append(whatsapp);
