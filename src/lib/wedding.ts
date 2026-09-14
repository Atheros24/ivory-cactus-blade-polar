export const WEDDING = {
  groom: {
    short: "Rizal",
    full: "Rizal Alfianto",
    parents: "Putra dari Bapak Heri Yusanto & Ibu Munasri",
    photo: "/wedding/groom.jpeg",
  },
  bride: {
    short: "Farah",
    full: "Aulia Farah Fa’izah",
    parents: "Putri dari Bapak Ribut Santoso & Ibu Nur Zekiyah",
    photo: "/wedding/bride.jpeg",
  },
  names: "Rizal & Farah",
  title: "The Wedding of Rizal & Farah",
  dateLabel: "15. 10. 2026",
  dayLabel: "Kamis",
  dateLong: "Kamis, 15 Oktober 2026",
  /** Akad start — used for countdown */
  targetIso: "2026-10-15T07:00:00+07:00",
  quote:
    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.",
  quoteRef: "Qs. Ar-Rum : 21",
  intro:
    "Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta kerabat sekalian untuk menghadiri acara pernikahan kami.",
  grateful:
    "Dan kami bersyukur, dipertemukan Allah di waktu terbaik. Kini kami menanti hari istimewa kami.",
  closing:
    "Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.",
  story: [
    "Pada awalnya kami tidak pernah tahu bahwa dua orang asing yang berjalan di jalan hidup masing-masing akan dipertemukan oleh semesta dalam satu cerita yang perlahan mengubah banyak hal.",
    "Kami pernah berada pada titik di mana jarak menjadi bagian dari perjalanan hidup yang sangat berarti. Namun dari perjalanan itu kami belajar bahwa rindu bukan hanya tentang ingin bertemu, tetapi tentang bagaimana dua hati tetap memilih untuk saling menjaga meski tidak selalu berada di tempat yang sama. Waktu mengajarkan kami bahwa cinta sejati bukanlah tentang seberapa cepat menemukan pasangan, melainkan tentang siapa yang tetap saling menggenggam tangan ketika kehidupan dihadapkan dengan banyak rintangan.",
    "Hingga akhirnya kami sampai di titik ini bukan karena semuanya selalu mudah, tapi karena kami tidak pernah benar-benar berhenti berjuang. Sampai pada akhirnya sebuah keputusan tidak lagi sekadar saling mencintai, tetapi mengikat cinta itu dalam sebuah janji pernikahan. Melangkah bersama membawa segala doa, harapan, dan keyakinan bahwa apa yang telah dipertemukan oleh Allah semoga senantiasa dijaga oleh-Nya.",
  ],
  akad: {
    title: "Akad Nikah",
    date: "Kamis, 15 Oktober 2026",
    time: "07:00 WIB – selesai",
    place: "Masjid Agung Al-Abror Situbondo",
    maps: "https://maps.app.goo.gl/4JYeQ6ExusbnPMTe6?g_st=ic",
  },
  resepsi: {
    title: "Resepsi",
    date: "Kamis, 15 Oktober 2026",
    time: "10:00 – 13:00 WIB",
    place: "Gedung Aula SMADA Situbondo",
    address: "Jl. Anggrek No. 1, Patokan, Kec. Situbondo, Kab. Situbondo",
    maps: "https://www.google.com/maps/search/?api=1&query=SMAN+2+Situbondo+Jl+Anggrek+No.1",
  },
  calendarUrl:
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Rizal+%26+Farah&dates=20261015T100000/20261015T130000&ctz=Asia/Jakarta&details=Resepsi+pernikahan+Rizal+Alfianto+%26+Aulia+Farah+Fa%27izah%0AGedung+Aula+SMADA+Situbondo&location=Gedung+Aula+SMADA+Situbondo%2C+Jl.+Anggrek+No.+1%2C+Patokan%2C+Situbondo",
  photos: {
    cover: "/wedding/cover.jpeg",
    story: "/wedding/love-story.jpeg",
    closing: "/wedding/closing.jpeg",
  },
  gallery: [
    { src: "/wedding/gallery-1.jpeg", alt: "Rizal dan Farah — potret bersama", wide: false },
    { src: "/wedding/gallery-2.jpeg", alt: "Rizal dan Farah berjalan di taman", wide: true },
    { src: "/wedding/gallery-3.jpeg", alt: "Farah dalam balutan kebaya maroon", wide: false },
    { src: "/wedding/gallery-4.jpeg", alt: "Rizal dan Farah di bawah pohon", wide: false },
    { src: "/wedding/gallery-5.jpeg", alt: "Farah tersenyum di taman", wide: false },
    { src: "/wedding/gallery-6.jpeg", alt: "Rizal dan Farah berpegangan tangan", wide: false },
    { src: "/wedding/gallery-7.jpeg", alt: "Pasangan di antara pepohonan", wide: false },
    { src: "/wedding/gallery-8.jpeg", alt: "Rizal dan Farah duduk di taman", wide: false },
  ],
  music: {
    src: "/wedding/beautiful-in-white.mp3",
    title: "Beautiful in White",
    artist: "Shane Filan",
  },
  gifts: [
    {
      bank: "BNI",
      bankFull: "Bank Negara Indonesia",
      name: "Aulia Farah Faizah",
      number: "2091653346",
    },
    {
      bank: "BRI",
      bankFull: "Bank Rakyat Indonesia",
      name: "Nur Zekiyah",
      number: "009001023318532",
    },
  ],
  giftNote:
    "Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.",
} as const;

export type Wish = {
  id: string;
  name: string;
  message: string;
  attending: "yes" | "no";
  at: number;
};

export const WISHES_KEY = "rizal-farah-wishes";
