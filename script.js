/*-------------------------------
Purpose: Main JS File // Version: 0.1 // Author: Spenser Wellen // Date: 07/09/2020 // Last Update: 08/04/2020
-------------------------------*/

/* -------------------------------------------*/
/* BACKGROUND COLOR PALLETTES
#264653 / 38,70,83      / 197°,37%,24%    -Blue
#2A9D8F / 42,157,144    / 173°, 58%, 39%  -Light Blue
#E9C46A / 233, 196, 106 / 43°, 74%, 66%   -Yellow
#F4A261 / 244, 162, 97  / 27°, 87%, 67%   -Orange
#E76F51 / 231, 111, 81  / 12°, 76%, 61%   -Dark Orange

#FFCDB2 / 255, 205, 178 / 21°, 100%, 85%  -Salmon 1
#FFB4A2 / 255, 180, 162 / 12°, 100%, 82%  -Salmon 2
#E5989B / 229, 152, 155 / 358°, 60%, 75%  -Pink
#B5838D / 181, 131, 141 / 348°, 25%, 61%  -Dark Pink
#6D6875 / 109, 104, 117 / 263°, 6%, 43%   -Violetish

#FFB997 / 255, 185, 151 / 20°, 100%, 80%  -Muted Orange
#F67E7D / 246, 126, 125 / 0°, 87%, 73%    -Flamingo
#843B62 / 132, 59, 98   / 328°, 38%, 37%  -Purple
#0B032D / 11, 3, 45     / 251°, 87%, 9%   -Dark Blue
#74546A / 116, 84, 106  / 319°, 16%, 39%  -Off Violet
*//* -------------------------------------------*/

// Setting up constants
const opacity1 = ",0.17"; // controls the opacity of the color filter added onto the background-image.
const opacity2 = ",0.33";
const palette = [[38,70,83],[42,157,144],[233, 196, 106],[244, 162, 97],[231, 111, 81],[255, 205, 178],[255, 180, 162],[229, 152, 155],[181, 131, 141],[109, 104, 117],[255, 185, 151],[246, 126, 125],[132, 59, 98],[11, 3, 45],[116, 84, 106]];      
const links = ["src/IMG-20250624-WA0000.jpg","src/IMG-20250624-WA0001.jpg","src/IMG-20250624-WA0002.jpg","src/IMG-20250624-WA0003.jpg","src/IMG-20250624-WA0004.jpg","https://images.unsplash.com/photo-1527039257570-2d493710cdae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1544018579-6b3f89e57b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1930&q=80","https://images.unsplash.com/photo-1555580142-c49aa98ada01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80","https://images.unsplash.com/photo-1567939909368-a5e368dbc954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80","https://images.unsplash.com/flagged/photo-1556790335-76dcee7ae1f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1097&q=80"];

var backgrounds = [];

for (let i=0; i < palette.length; i++) {
  for (let j=0; j < palette.length; j++) {
    for (let k=0; k < links.length; k++) {
      backgrounds.push(`-webkit-gradient(linear,left top,left bottom,from(rgba(${palette[i].toString() + opacity1})),to(rgba(${palette[j].toString() + opacity2}))),url(${links[k]})`)
    }
  }
}

    /*
      background-image: -webkit-gradient(linear,left top,left bottom,from(rgba(249, 96, 16, 0.25)),to(rgba(250, 246, 245, 0.4))),url(https://i.imgur.com/ntED7Np.png); 
    
*/

// Wrap all the code in a IIFE to prevent the global scope pollution;
;(function() {
  "use strict";
  
  // Quotes Collection, thanks to inc.com & entrepreneur.com
  var quotes = [{
        "quote": "Menjadi Ketua Pelaksana bukan hal yang mudah, tetapi kamu berhasil membuktikan kalau kamu bisa. Banyak orang yang harus kamu rangkul, banyak suara yang harus kamu dengar, dan kamu tetap berdiri di tengah semuanya. Ketegasan mu dalam mengambil keputusan menjadi pondasi acara ini.",
        "author": "Naufal Al Hafizh Saputra"
  },
    {
        "quote": "Di balik layar, kamu yang selalu sigap jadi penyeimbang dari segala sisi. Nggak hanya sekadar ‘wakil’, tapi kamu benar-benar jadi tangan kanan yang bisa diandalkan. Setiap masalah kamu hadapi dengan tenang, dan setiap konflik kamu redam dengan hati. Terus jaga integritas dan ketulusanmu, Nadine, karena itu kekuatan kamu yang sesungguhnya.",
        "author": "Nadine Virlytha Setiawan"
  },
    {
        "quote": "Buku catatanmu mungkin penuh coretan, tapi dari situ semua alur jadi rapi dan terarah. Kamu hadir bukan hanya dengan pena dan kertas, tapi juga dengan ketelitian dan konsistensi. Terkadang orang lupa pentingnya dokumentasi, tapi kamu bikin semuanya berjalan tanpa celah.",
        "author": "Sheren Umma Sulaim"
    },
    {
        "quote": "Kamu bukan sekadar pelengkap, tapi justru penguat sistem yang ada. Setiap detail kamu jaga, setiap agenda kamu urus dengan sepenuh hati. Nggak banyak yang tahu effort kamu di balik semua kejelasan informasi, tapi percayalah, peranmu itu penting banget. Semangat terus, Rahmaa",
        "author": "Nur Rahma Alya Putri"
    },
    {
        "quote": "Ngatur keuangan itu bukan sekadar hitung-menghitung, tapi juga tentang kepercayaan dan tanggung jawab. Kamu udah ngelewatin itu semua dengan jujur dan teliti. Uang boleh jalan, tapi hatimu tetap tenang. Kamu keren, Bilqis. Lanjut terus jadi pribadi yang bisa dipercaya dalam kondisi apa pun.",
        "author": "Bilqis Rahma Amalia Suci"
    },
    {
        "quote": "Kamu tahu caranya bekerja dalam diam tapi tetap berdampak besar. Bersama bendahara Bilqis, kamu jadi partner yang tangguh dan siap backup kapan pun dibutuhkan. Semangat kamu nggak kelihatan di permukaan, tapi terasa banget dalam hasil kerja kamu. Tetap semangat yaa, Aluna",
        "author": "Aluna Syahira"
    },
    {
        "quote": "Improvisasi, perubahan, dan adaptasi, semua udah banyak kamu lewati. Jadi koor Acara itu nggak gampang, tapi kamu jalanin semua dengan kepala dingin dan semangat yang nggak padam. Banyak banget hal yang bikin pusing, tapi kamu tetep sigap cari solusi. Keren banget, Terus semangat ya, Aini.",
        "author": "Aini Syafriani"
    },
    {
        "quote": "Kamu tipe yang banyak bicara, tapi kerja kamu nyata dan bisa diandalkan. Di balik acara yang lancar, ada kamu yang selalu gercep bantu sana-sini. Tenang tapi mantap, itu kamu. Terus jaga konsistensinya mu yaa, Alkaa",
        "author": "Davikia Alkaiz"
    },
    {
        "quote": "Ide-idemu seringkali di luar dugaan, dan itu yang bikin tim Acara jadi hidup. Kamu tipe orang yang nggak takut mencoba hal baru, dan itu keren banget. Jangan ragu buat bersuara dan terus kasih warna ya, Malvin. Kreativitas kamu terlalu sayang kalau dipendam.",
        "author": "Malvin Oktaviano"
    },
    {
        "quote": "Kamu itu energi positif tim. Meski suasana tegang, kamu tetap bisa jaga mood tim tetap nyaman. Orang kayak kamu langka banget, Devia. Terus jadi penguat tim dengan cara khasmu, ya. Jangan pernah lelah buat senyum dan bantu karena kamu itu berharga.",
        "author": "Devia Citra Wijayanti"
    },
    {
        "quote": "Keuletan kamu kelihatan dari awal, dan kamu konsisten sampai akhir. Meski kadang hal kecil terkesan sepele, kamu tetap totalin semua. Itu yang bikin kamu beda. Semangat terus ya, Nurul Kamu punya kualitas pejuang sejati!",
        "author": "Nurulfalah Pinasti Isandryea Putri"
    },
    {
        "quote": "Suara kamu bukan cuma nyampe ke luar, tapi juga bikin dalam tim makin solid. Jadi koor Humas itu butuh ketenangan dan ketegasan, dan kamu punya dua-duanya. Terus jadi jembatan yang kuat antara panitia dan dunia luar ya, Dipo",
        "author": "Krisyuda Dipo Wijaya"
    },
    {
        "quote": "Kamu itu vibes-nya ramah banget. Setiap interaksi kamu bawa dengan senyum dan ketulusan. Humas butuh yang kayak kamu, bisa nyambungin banyak kepala dengan hati yang hangat. Tetap rendah hati ya, Edward",
        "author": "Edward Gunadi"
    },
    {
        "quote": "Santai tapi fokus, itu gaya kerja kamu. Kamu bisa banget jaga image tim tanpa ribut-ribut. Elegan dalam bergerak, tapi tegas kalau udah mulai kerja. Terus jadi versi terbaik dari dirimu ya, Almeira",
        "author": "Almeira Dewi Andesela"
    },
    {
        "quote": "Suaramu lantang, tapi bukan buat pamer, itu untuk nyuarain hal yang penting. Kamu tahu kapan harus speak up dan kapan harus diam. Itu tandanya kamu paham situasi. Keep being bold, Rival.",
        "author": "Rival Senopati"
    },
    {
        "quote": "Deby, kamu kayak penyejuk di tengah riuhnya kegiatan. Tenang, sabar, dan tahu kapan harus turun tangan. Di Humas, kamu jadi kekuatan yang bikin semuanya tetap terkendali. Terus jaga ketenangan itu ya, itu kekuatan diam kamu.",
        "author": "Deby Febiola"
    },
    {
        "quote": "Annisa, kamu peka dan punya intuisi kuat soal orang lain. Itu bikin kamu cocok banget di Humas. Kamu tahu gimana cara jaga relasi dan bikin orang nyaman. Terus latih kepekaan kamu ya, karena itu nilai emas yang nggak semua orang punya.",
        "author": "Annisa Zahra"
    },
    {
        "quote": "Improvisasi, perubahan, dan adaptasi, sudah banyak terjadi di diri kamu. Ditambah dengan tanggung jawab sebagai koor Akomodasi, kamu jadi banyak belajar dan memperbaiki diri. Jadi terus berani ya dan tetap semangat akan apa yang terjadi ke depan.",
        "author": "Kevin Hottua Purba"
    },
    {
        "quote": "Kerja keras kamu jarang kelihatan, tapi hasilnya selalu terasa. Kamu nggak banyak ngomong, tapi siap gerak kalau dibutuhkan. Akomodasi jadi lebih kuat karena kamu hadir. Terus jadi orang yang sigap dan bisa diandalkan, Wildan. Tetap semangat, yaa",
        "author": "Muhammad Wildan Khabibi"
    },
    {
        "quote": "Safa, kamu itu telaten dan peka, dua hal penting yang dibutuhkan di Akomodasi. Kamu tahu harus ngapain tanpa banyak disuruh. Itu artinya kamu punya inisiatif luar biasa. Terus rawat ketulusanmu ya, kamu penting banget di tim ini!",
        "author": "Safa Ery Octaviani"
    },
    {
        "quote": "Kamu selalu hadir di saat yang dibutuhkan. Nggak pernah banyak ribut, tapi gerakanmu nyata dan bikin semua lebih teratur. Niken, tetap jadi pribadi yang tangguh dan kalem itu ya. Panitia butuh energi sejuk kayak kamu.",
        "author": "Niken Inggita"
    },
    {
        "quote": "Keysa, kamu bisa multitasking dengan sangat baik. Di tengah padatnya urusan Akomodasi, kamu tetap cekatan dan nggak panik. Kamu buktiin kalau perempuan juga bisa jadi pekerja lapangan yang solid. Terus bersinar ya, Keysa",
        "author": "Keysa Dwi Rizkiani"
    },
    {
        "quote": "Andini, kamu punya jiwa suportif yang luar biasa. Setiap kali ada yang kesusahan, kamu salah satu yang paling cepat gerak. Nggak semua orang bisa sepeka dan sepeduli itu.",
        "author": "Putri Andini"
    },
    {
        "quote": "Kamu punya rasa tanggung jawab yang tinggi banget. Meski sibuk dan capek, kamu tetap selesaiin tugasmu dengan sepenuh hati. Kamu inspirasi buat teman-temanmu, Aniendya. Teruskan kebiasaan baik itu ya, hasil nggak akan mengkhianati proses.",
        "author": "Putri Aniendya"
    },
    {
        "quote": "Suminah, kamu punya aura pekerja keras yang kalem tapi meyakinkan. Kamu bukan tipe yang nyari pujian, tapi kinerjamu pantas banget buat diapresiasi. Terus semangat ya, kerja kerasmu pasti akan mengantar ke hal-hal besar ke depan.",
        "author": "Suminah"
    },
    {
        "quote": "Naysila, kamu membawa semangat positif yang bikin suasana jadi nyaman. Kamu nggak cuma kerja, tapi juga nyebarin vibes baik ke sekitar. Itu sesuatu yang langka. Tetap jadi sumber semangat buat yang lain yaa",
        "author": "Naysila Chintia Raysha"
    },
    {
        "quote": "Wildan, kamu punya mata yang tajam dan hati yang peka. Jadi koor Dokumentasi bukan cuma tentang ambil gambar, tapi juga tahu momen apa yang layak diabadikan. Dan kamu paham banget soal itu. Terus asah insting dan kreativitasmu ya, kamu keren",
        "author": "Wildan Wahidin"
    },
    {
        "quote": "Bara, kamu punya jiwa seniman yang nggak neko-neko. Kamu tahu caranya bikin hal sederhana jadi punya makna. Di balik hasil dokumentasi yang rapi dan estetik, ada kamu yang total dalam bekerja. Terus berkarya ya",
        "author": "Bara Ibrahim"
    },
    {
        "quote": "Yashmin, kamu bisa melihat keindahan dari sudut yang nggak semua orang lihat. Setiap dokumentasi yang kamu hasilkan punya rasa. Jangan berhenti mengekspresikan diri lewat lensa, ya. Kamu punya bakat yang luar biasa!",
        "author": "Yashmin Riendra"
    },
    {
        "quote": "Rizka, kamu teliti dan sabar, dua kunci utama di dunia dokumentasi. Kamu nggak asal ambil momen, tapi benar-benar pikirin komposisinya. Itu yang bikin hasil kerjamu spesial. Terus pertahankan ketekunan itu ya",
        "author": "Rizka Siti Nuraryanti"
    },
    {
        "quote": "Chawla, kamu punya kepekaan emosional yang kuat. Kamu tahu kapan harus ambil momen haru, kapan harus ambil tawa. Itu bukan sekadar dokumentasi, tapi cerita. Terus kembangkan kemampuan bercerita lewat foto, ya",
        "author": "Callysta Nur Chawla Siregar"
    },
    {
        "quote": "Dengan nama yang unik, kamu juga punya karya yang nggak biasa. Kamu kreatif, dan itu kebawa ke hasil dokumentasimu. Tetap semangat ya, Siluet. Terus jadi siluet yang diam-diam menangkap semua cahaya.",
        "author": "Siluet Jingga Jify"
    },
    {
        "quote": "Jadi koor Keamanan itu nggak gampang, harus sigap, sabar, dan tetap tenang. Tapi kamu bisa jalani semua itu dengan tegas tanpa kasar. Kamu tegas tapi tetap manusiawi. Terus jadi pemimpin yang bisa diandalkan dan diteladani ya, Azis",
        "author": "Azis Alfadilah"
    },
    {
        "quote": "Defina, kamu tegas tapi tetap sopan. Kamu tahu kapan harus turun tangan dan kapan harus observasi dulu. Itu bikin kamu jadi penjaga yang bijak. Terus jaga energi tangguh itu ya, kamu luar biasa",
        "author": "Defina Aisyah Nursaadah"
    },
    {
        "quote": "Shery, kamu cepat tanggap dan punya naluri perlindungan tinggi. Kamu nggak takut hadapi tantangan, dan itu kekuatan besar. Terus jadi pelindung tim yang penuh integritas, ya",
        "author": "Shery Devi Cahayadi"
    },
    {
        "quote": "Syarifa, kamu punya mental kuat dan nggak gampang goyah. Di tengah situasi tegang, kamu tetap jaga kepala dingin. Itu kemampuan penting banget di keamanan. Terus jadi penyeimbang yang bijaksana, ya",
        "author": "Syarifa Nanda Fitri"
    },
    {
        "quote": "Latisha, kamu punya aura kepemimpinan alami. Bahkan dalam diam pun, kamu bisa bikin orang merasa tenang. Terus kembangkan sisi kuatmu itu ya, dunia butuh lebih banyak sosok seperti kamu.",
        "author": "Latisha Syafa Almeira"
    },
    {
        "quote": "Khanza, kamu berani dan punya prinsip. Nggak semua orang punya nyali untuk berdiri di depan dan jaga ketertiban. Tapi kamu bisa. Terus jadi pelindung yang adil dan tegas ya",
        "author": "Khanza Adhana Kurniawan"
    },
    {
        "quote": "Riby, kamu punya sisi tenang yang bikin orang lain juga ikut kalem. Tapi jangan salah, di balik itu kamu sigap banget. Terus rawat keseimbangan antara kelembutan dan ketegasan itu ya",
        "author": "Riby Rendiraputri"
    },
    {
        "quote": "Rini, kamu cepat adaptasi dan nggak gampang panik. Dua hal itu bikin kamu jadi pilar yang bisa diandalkan di tim keamanan. Terus tingkatkan kepekaanmu ya, karena itu senjata utama kamu.",
        "author": "Rini Indriyani"
    },
    {
        "quote": "Janeeta, kamu tipe yang nggak takut hadapi keruwetan. Kamu tahu gimana cara jaga suasana tetap terkendali tanpa bikin gaduh. Terus semangat ya, kamu itu kombinasi tenang dan kuat yang susah dicari",
        "author": "Janeeta Syahdan"
    }
],
      
    // Finished Background Collection      
    colors = [...backgrounds],  
      
    // Random number Constructor
    // Generate a random number within a provided
    // range a stores the last value, so the next value
    // doesn't match the previous
    Random = function Random(max) {
      var prev, next;
      this.max = max;
      this.generate = function generate() {
        while(prev === next) 
          next = Math.floor(Math.random() * this.max);
        prev = next;
        return next;
      };
    },
      
    // Opens a new tweet window with the quote shown on 
    // screen and some other parameters.
    // https://dev.twitter.com/web/intents
    composeTweet = function composeTweet(text) {
      // My tweet object
      var tweet = {
        url: "https://twitter.com/intent/tweet?",
        via: "via=SpenserWellen&",
        hashtags: "hashtags=motivation,inspiration&",
        related: "related=@freecodecamp&",
        text: "text=" + '"' +  $('.quote__body').html().replace(/<br>|\s/g, '+'), //edit tweet here???
        author: '"' + escape("\n- " + $('.quote__cite').html().replace(/<br>|\s/g, '+') + "\n\n")
      };
      
      // Open the tweet window
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/open#Examples
      return window.open(
        tweet.url + tweet.hashtags + tweet.related + tweet.text + tweet.author,
        "Tweet This Quote",
        "resizable,scrollbars,status,width=550px,height=420px"
      );
    },
      
    randomQuote = new Random(quotes.length),  // Random instance for quote
    randomColor = new Random(colors.length),  // Random instance for colors     
   // randomImage = new Random(images.legth),   // Random instance for images  
      
    // Main app function
    // Generates Quotes and app themes
    newQuote = function newQuote(e) {
      var
        // Get a quote and a theme
        quote = quotes[randomQuote.generate()],
        color = colors[randomColor.generate()],
          
        // Cache some DOM Elements
        $page = $('#page'),
        $button = $page.find('.new-quote'),
        $quote = $page.find('.quote'),
        $quoteFooter = $quote.find('.quote__footer'),
        $footerLinks = $('.page-footer a'),
          
        // Test if the quote has an author 
        hasAuthor = !!quote.author;
      
      // Replace the old quote with a new one
      $quote
        .find('.quote__body')
        .html( quote.quote );      
      
      // Change  the theme
      $page.css('background-image', color);
      //$page.css('background-color', color);
      $button.css('color', color);
      $footerLinks.css('color', color);
      
      // Some quotes have author
      // others not
      if ( hasAuthor ) {
        // Put the text and
        // show the footer
        $quoteFooter
          .find('.quote__cite')
          .text( '– ' + quote.author + ' –')
          .html( quote.author )
          .end()
          .show();      
        
      } else {
        // hide the footer
        $quoteFooter.hide()
      }

    },
    
    // Buttons functionality
    registerHandlers = function registerHandlers() {
      $(document)
        .on('click', '.new-quote', newQuote)
        .on('click', '.tweet', composeTweet);
    },
      
    // Initialization using IIFE
    init = function init(){
      registerHandlers();
      newQuote();
    }(); // <- look at this!
  
})();
