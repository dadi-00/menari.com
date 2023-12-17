const express = require('express');
const cors = require('cors');
const app = express();
const port = 9000;

app.use(cors());
// app.use(express.json())

const dances = [
  {
    id: 1,
    nama: 'Tari Saman',
    video: 'https://www.youtube.com/watch?v=q-8tMZKBgrA',
    details: 'Deskripsi tariTari Saman merupakan tarian yang berasal dari suku Gayo dan biasanya ditampilkan dalam suatu perayaan penting di suatu peristiwa adat. Syair pada tariannya juga mempergunakan Bahasa-bahasa Gayo. Selain itu tarian ini juga kerap ditampilkan saat merayakan hari raya kelahiran Nabi Muhammad SAW. Beberapa literatur menyatakan Syekh Saman yaitu seorang ulama yang berasal dari Suku Gayo di Aceh Tenggaralah yang kemudian menemukan dan mendirikan tari Saman hingga akhirnya ditetapkan oleh UNESCO sebagai Daftar Representatif Budaya Takbenda  pada 24 November 2011 silam. Sebelum Tari Saman dimulai dilakukan pembukaan dimana tampil pemuka adat atau seorang tua cerdik pandai yang akan mewakili masyarakat setempat (keketar) dengan nasihat-nasihat yang berguna bagi para penonton dan pemainnya sekaligus. Syair dan lagu pengungkapannya sendiri dilakukan secara Bersama-sama dan berkesinambungan, penari saman biasanya terdiri dari pria-pria muda yang menggunakan pakaian adat. Penyajian tarian ini juga kemudian dipertandingkan antar grup dan grup tamu. Penilaian pada tari saman akan dititik beratkan pada kemampuan setiap grup dalam mengikuti berbagai gerakan, lagu (syair) dengan bentul tari yang disajikan oleh pihak lawan. Sebab tari saman dapat dikreasikan dengan gerakan yang berbeda-beda.an 1',
    gambar: 'https://cdnwpedutorenews.gramedia.net/wp-content/uploads/2022/01/10150442/popmama.jpg',
    favorite: false
  },
  {
    id: 2,
    nama: 'Tari Tor Tor',
    video: 'https://www.youtube.com/watch?v=GUkd-Pxe1z4',
    details: 'Tari tradisional dari Sumatera Utara ini diperkirakan sudah ada sejak zaman Batak purba. Akan tetapi, pakar tari tor tor mengatakan jika tarian ini ada pada sekitaran abad ke-13. Pada waktu itu, tarian ini dilakukan sebagai tari persembahan untuk roh leluruh. Berdasarkan buku Agama Hindu yang ditulis oleh Ida Bagus Sudirga dkk, dikatakan bahwa tari tor tor adalah salah satu peninggalan zaman Hindu di wilayah Sumatera. Oleh sebab itu, usia dari tarian ini sudah cukup tua karena sudah ada sejak lama. Awalnya, tarian ini hanya berada di kawasan Toba, Samosir, dan beberapa wilayah Humbang. Namun, setelah menyebarnya agama Kristen di kota Silindung, tarian ini akhirnya dikenal sebagai tarian modern yang merupakan hasil dari kebudayaan suku Batak. Menurut Togarma Naibaho, seorang praktisi dan pencinta budaya tari tor tor, dulunya tarian ini digunakan untuk upacara panen, penyembuhan, kematian, serta pesta atau hiburan anak muda. Namun sebelum melaksanakan tarian itu, perlu melalui ritual tertentu. Meski demikian, hingga kini belum ada literatur ilmiah yang menjelaskan dengan pasti sejarah tari tor tor ini. Akan tetapi, ada catatan dari zaman kolonial yang menggambarkan perjalanan tari tor tor. Pada masa penjajahan, tarian ini menjadi kesenian yang menghibur para raja yang juga merupakan bentuk perlawanan kepada tentara Belanda. Raja-raja itu memanfaatkan bunyi dari tari tor tor sebagai sebuah isyarat untuk masyarakat. Salah satu contohnya adalah ketika ada bunyi yang ditabuh, maka itu berarti tentara Belanda telah tiba. Sedangkan, jika ada bunyi gordang maka masyarakat harus segera mengungsi. Walaupun tor tor merupakan tarian tradisional Indonesia, namun ternyata tarian ini mendapat pengaruh dari budaya India. Bahkan, jika ditelusuri lebih jauh, tarian ini berkaitan dengan budaya Babilonia.',
    gambar: 'https://asset.kompas.com/crops/b5xklZhig5yb4rjRQ9hzJ-laIbY=/0x0:750x500/750x500/data/photo/2022/01/22/61ec1b0e871f6.jpg',
    favorite: false
  },
  {
    id: 3,
    nama: 'Tari Piring',
    video: 'https://www.youtube.com/watch?v=pQNyro8qmP0',
    details: 'Tari piring merupakan tari tradisional yang berasal dari Minangkabau, secara tradisional dapat disebutkan bahwa tari piring berasal dari Solok, Sumatera Barat. Tarian ini menampilkan aksi atraksi menari menggunakan piring. Para penari akan mengayunkan piring yang berada di telapak tangan mereka selaras dengan music iringan serta gerakan yang cepat dan teratur tanpa melepaskan atau membiarkan satu piring pun terjatuh. Gerakan tari piring diambil dari gerakan silat Minangkabau atau yang biasa disebut silek. Tari piring dipopulerkan oleh Huriah Adam. Modern ini, tari piring biasanya digunakan sebagai sambutan untuk menyambut tamu terhormat atau juga biasanya digunakan untuk pembukaan suatu upacara adat. Tari piring sangatlah popular di Indonesia, bersama dengan tari lainnya, seperti tari saman, jaipong, dan pendet yang kerap digunakan sebagai tari untuk menyambut tamu-tamu terhormat dalam beberapa acara dan digunakan sebagai ajang promosi pariwisata serta kebudayaan yang ada di Indonesia.',
    gambar: 'https://asset.kompas.com/crops/b5xklZhig5yb4rjRQ9hzJ-laIbY=/0x0:750x500/750x500/data/photo/2022/01/22/61ec1b0e871f6.jpg',
    favorite: false
  },
  {
    id: 4,
    nama: 'Tari Tor Tor',
    video: 'https://www.youtube.com/watch?v=GUkd-Pxe1z4',
    details: 'Tari tradisional dari Sumatera Utara ini diperkirakan sudah ada sejak zaman Batak purba. Akan tetapi, pakar tari tor tor mengatakan jika tarian ini ada pada sekitaran abad ke-13. Pada waktu itu, tarian ini dilakukan sebagai tari persembahan untuk roh leluruh. Berdasarkan buku Agama Hindu yang ditulis oleh Ida Bagus Sudirga dkk, dikatakan bahwa tari tor tor adalah salah satu peninggalan zaman Hindu di wilayah Sumatera. Oleh sebab itu, usia dari tarian ini sudah cukup tua karena sudah ada sejak lama. Awalnya, tarian ini hanya berada di kawasan Toba, Samosir, dan beberapa wilayah Humbang. Namun, setelah menyebarnya agama Kristen di kota Silindung, tarian ini akhirnya dikenal sebagai tarian modern yang merupakan hasil dari kebudayaan suku Batak. Menurut Togarma Naibaho, seorang praktisi dan pencinta budaya tari tor tor, dulunya tarian ini digunakan untuk upacara panen, penyembuhan, kematian, serta pesta atau hiburan anak muda. Namun sebelum melaksanakan tarian itu, perlu melalui ritual tertentu. Meski demikian, hingga kini belum ada literatur ilmiah yang menjelaskan dengan pasti sejarah tari tor tor ini. Akan tetapi, ada catatan dari zaman kolonial yang menggambarkan perjalanan tari tor tor. Pada masa penjajahan, tarian ini menjadi kesenian yang menghibur para raja yang juga merupakan bentuk perlawanan kepada tentara Belanda. Raja-raja itu memanfaatkan bunyi dari tari tor tor sebagai sebuah isyarat untuk masyarakat. Salah satu contohnya adalah ketika ada bunyi yang ditabuh, maka itu berarti tentara Belanda telah tiba. Sedangkan, jika ada bunyi gordang maka masyarakat harus segera mengungsi. Walaupun tor tor merupakan tarian tradisional Indonesia, namun ternyata tarian ini mendapat pengaruh dari budaya India. Bahkan, jika ditelusuri lebih jauh, tarian ini berkaitan dengan budaya Babilonia.',
    gambar: 'https://asset.kompas.com/crops/b5xklZhig5yb4rjRQ9hzJ-laIbY=/0x0:750x500/750x500/data/photo/2022/01/22/61ec1b0e871f6.jpg',
    favorite: false
  },
  {
    id: 5,
    nama: 'Tari Tanggai',
    video: 'https://www.youtube.com/watch?v=GUkd-Pxe1z4',
    details: 'Tari tradisional dari Sumatera Utara ini diperkirakan sudah ada sejak zaman Batak purba. Akan tetapi, pakar tari tor tor mengatakan jika tarian ini ada pada sekitaran abad ke-13. Pada waktu itu, tarian ini dilakukan sebagai tari persembahan untuk roh leluruh. Berdasarkan buku Agama Hindu yang ditulis oleh Ida Bagus Sudirga dkk, dikatakan bahwa tari tor tor adalah salah satu peninggalan zaman Hindu di wilayah Sumatera. Oleh sebab itu, usia dari tarian ini sudah cukup tua karena sudah ada sejak lama. Awalnya, tarian ini hanya berada di kawasan Toba, Samosir, dan beberapa wilayah Humbang. Namun, setelah menyebarnya agama Kristen di kota Silindung, tarian ini akhirnya dikenal sebagai tarian modern yang merupakan hasil dari kebudayaan suku Batak. Menurut Togarma Naibaho, seorang praktisi dan pencinta budaya tari tor tor, dulunya tarian ini digunakan untuk upacara panen, penyembuhan, kematian, serta pesta atau hiburan anak muda. Namun sebelum melaksanakan tarian itu, perlu melalui ritual tertentu. Meski demikian, hingga kini belum ada literatur ilmiah yang menjelaskan dengan pasti sejarah tari tor tor ini. Akan tetapi, ada catatan dari zaman kolonial yang menggambarkan perjalanan tari tor tor. Pada masa penjajahan, tarian ini menjadi kesenian yang menghibur para raja yang juga merupakan bentuk perlawanan kepada tentara Belanda. Raja-raja itu memanfaatkan bunyi dari tari tor tor sebagai sebuah isyarat untuk masyarakat. Salah satu contohnya adalah ketika ada bunyi yang ditabuh, maka itu berarti tentara Belanda telah tiba. Sedangkan, jika ada bunyi gordang maka masyarakat harus segera mengungsi. Walaupun tor tor merupakan tarian tradisional Indonesia, namun ternyata tarian ini mendapat pengaruh dari budaya India. Bahkan, jika ditelusuri lebih jauh, tarian ini berkaitan dengan budaya Babilonia.',
    gambar: 'https://asset.kompas.com/crops/b5xklZhig5yb4rjRQ9hzJ-laIbY=/0x0:750x500/750x500/data/photo/2022/01/22/61ec1b0e871f6.jpg',
    favorite: false
  }
];

app.get('/api/dances', (req, res) => {
  res.json(dances);
});

app.get('/api/dances/:id', (req, res) => {
  const danceId = parseInt(req.params.id);
  const dance = dances.find((d) => d.id === danceId);

  if (dance) {
    res.json(dance);
  } else {
    res.status(404).json({ message: 'Tarian tidak ditemukan' });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
