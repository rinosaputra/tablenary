/**
 * Legal content — Terms, Privacy, Cookies for Tablenary.
 * Each content block uses a flat array of sections with title and body.
 */

export interface LegalSection {
  heading: string;
  body: string;
}

/** Terms & Conditions content */
export const termsContent: LegalSection[] = [
  {
    heading: "1. Ketentuan Umum",
    body:
      "Dengan mendaftar dan menggunakan layanan Tablenary (selanjutnya 'Layanan'), Anda menyetujui ketentuan ini. Jika Anda tidak menyetujui sebagian atau seluruh ketentuan, mohon untuk tidak menggunakan Layanan. Layanan ini disediakan 'AS-IS' oleh PT Tablenary Indonesia.",
  },
  {
    heading: "2. Deskripsi Layanan",
    body:
      "Tablenary menyediakan toolkit data no-code yang mencakup 4 builder: Table Builder, Form Builder, Chart Builder, dan PDF Builder. Layanan tersedia dalam tier Free, Pro, dan Team. Setiap tier memiliki fitur dan batasan yang berbeda. Hak akses Anda ditentukan oleh tier yang Anda pilih atau langganan.",
  },
  {
    heading: "3. Penggunaan yang Diterima",
    body:
      "Anda bertanggung jawab atas semua aktivitas yang terjadi di akun Anda. Anda wajib menjaga kerahasiaan kredensial login dan tidak boleh membagikan akun kepada pihak ketiga tanpa persetujuan tertulis dari Tablenary. Penyalahgunaan layanan untuk aktivitas ilegal dapat mengakibatkan penghentian akun.",
  },
  {
    heading: "4. Privasi dan Data",
    body:
      "Data Anda disimpan secara lokal di browser (IndexedDB) pada perangkat Anda. Kami hanya mengumpulkan data anonim penggunaan (anonymous usage analytics) untuk perbaikan produk. Data pribadi yang diproses saat registrasi dan pembayaran tunduk pada Kebijakan Privasi kami. Lihat halaman Kebijakan Privasi untuk informasi lengkap.",
  },
  {
    heading: "5. Berlangganan dan Pembayaran",
    body:
      "Tier Pro dan Team memerlukan pembayaran tahunan. Harga yang berlaku saat Anda berlangganan akan tetap untuk seluruh periode langganan. Pembayaran dilakukan sekali per tahun. Masa percobaan gratis (trial) untuk tier Pro dapat dibatalkan kapan saja tanpa biaya. Kami tidak menawarkan tagihan bulanan.",
  },
  {
    heading: "6. Kebijakan Refund",
    body:
      "Anda dapat meminta refund penuh dalam 14 hari pertama setelah pembayaran. Setelah masa 14 hari, refund dipertimbangkan secara individual. Jika kami menghentikan atau mengubah Layanan secara material, kami akan menawarkan refund pro-rata.",
  },
  {
    heading: "7. Penghentian Layanan",
    body:
      "Kami berhak menangguhkan atau mengakhiri akun Anda jika melanggar ketentuan ini. Setelah penghentian, data Anda di IndexedDB perangkat tetap di bawah kendali Anda. Kami tidak bertanggung jawab atas hilangnya data lokal yang tidak di-sync ke cloud.",
  },
  {
    heading: "8. Pembatasan Tanggung Jawab",
    body:
      "Tablenary tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan Layanan. Tanggung jawab maksimum kami terbatas pada jumlah yang Anda bayar kepada kami dalam 12 bulan preceding klaim.",
  },
  {
    heading: "9. Perubahan Ketentuan",
    body:
      "Kami dapat memperbarui Ketentuan ini sewaktu-waktu. Perubahan material akan diinformasikan melalui email atau notifikasi dalam aplikasi. Penggunaan berkelanjutan setelah perubahan berarti Anda menerima Ketentuan yang baru.",
  },
  {
    heading: "10. Kontak",
    body:
      "Untuk pertanyaan mengenai Ketentuan ini, hubungi kami di legal@tablenary.id.",
  },
];

/** Privacy Policy content */
export const privacyContent: LegalSection[] = [
  {
    heading: "1. Informasi yang Kami Kumpulkan",
    body:
      "Kami hanya mengumpulkan informasi yang diperlukan untuk menyediakan Layanan: (a) informasi akun saat registrasi (nama, email), (b) data pembayaran diproses oleh penyedia pihak ketiga dan tidak disimpan oleh kami, dan (c) anonymous usage analytics untuk meningkatkan pengalaman pengguna. Data tabel, form, chart, dan dokumen Anda tersimpan lokal di perangkat Anda dan tidak dikirim ke server kami.",
  },
  {
    heading: "2. Bagaimana Kami Menggunakan Informasi",
    body:
      "Informasi yang kami kumpulkan digunakan untuk: menyediakan dan meningkatkan Layanan, berkomunikasi dengan Anda (pengumuman, pembaruan keamanan), memproses pembayaran, dan menganalisis penggunaan anonymized untuk perbaikan produk.",
  },
  {
    heading: "3. Cloud Sync dan Keamanan Data",
    body:
      "Untuk pengguna Pro dan Team, fitur cloud sync opsional tersedia. Data yang di-sync dienkripsi end-to-end menggunakan kunci yang hanya Anda pegang. Kami tidak dapat membaca data yang terenkripsi. Data dienkripsi saat transit (TLS 1.3) dan saat istirahat (AES-256).",
  },
  {
    heading: "4. Berbagi Informasi dengan Pihak Ketiga",
    body:
      "Kami tidak menjual data pribadi Anda. Kami dapat membagikan informasi hanya dalam kasus berikut: (a) penyedia layanan pihak ketiga yang membantu mengoperasikan Layanan (payment processor, hosting), (b) kewajiban hukum, atau (c) dengan persetujuan eksplisit Anda.",
  },
  {
    heading: "5. Hak Anda",
    body:
      "Anda memiliki hak untuk mengakses, memperbaiki, dan menghapus data pribadi Anda. Anda juga memiliki hak untuk mengekspor data Anda dalam format CSV atau JSON. Untuk exercising hak-hak ini, hubungi privacy@tablenary.id.",
  },
  {
    heading: "6. Retensi Data",
    body:
      "Data akun Anda disimpan selama akun Anda aktif atau sepanjang diperlukan untuk menyediakan Layanan. Jika akun Anda dihapus, data pribadi akan dihapus dari server kami dalam 30 hari. Data lokal di perangkat Anda tidak terpengaruh oleh penghapusan akun.",
  },
  {
    heading: "7. Perubahan Kebijakan Privasi",
    body:
      "Kami dapat memperbarui Kebijakan Privasi ini. Perubahan material akan diinformasikan melalui email atau notifikasi dalam aplikasi.",
  },
];

/** Cookie Policy content */
export const cookiesContent: LegalSection[] = [
  {
    heading: "1. Apa Itu Cookie",
    body:
      "Cookie adalah file kecil yang disimpan di perangkat Anda saat Anda mengunjungi website. Cookie digunakan untuk mengingat preferensi Anda, analisis keamanan, dan pengalaman penggunaan.",
  },
  {
    heading: "2. Cookie yang Kami Gunakan",
    body:
      "Tablenary menggunakan beberapa jenis cookie: (a) Strictly Necessary — cookie untuk autentikasi dan keamanan akun, (b) Performance — anonymous analytics untuk mengukur kinerja aplikasi, (c) Functional — menyimpan preferensi seperti bahasa dan tema tampilan, (d) Third-Party — cookie dari penyedia layanan pihak ketiga (payment processor, analytics).",
  },
  {
    heading: "3. Manajemen Cookie",
    body:
      "Anda dapat mengontrol dan/menghapus cookie sesuka hati. Sebagian besar browser memungkinkan Anda melihat cookie apa yang disimpan dan menghapusnya. Anda juga dapat menonaktifkan cookie melalui pengaturan browser, meskipun hal ini mungkin mempengaruhi fungsionalitas tertentu dari Layanan kami.",
  },
  {
    heading: "4. IndexedDB vs Cookie",
    body:
      "Tablenary terutama mengandalkan IndexedDB (bukan cookie) untuk menyimpan data aplikasi Anda secara lokal. IndexedDB memberikan kapasitas penyimpanan jauh lebih besar daripada cookie dan tidak dikirimkan ke server dengan setiap permintaan HTTP, menjaga privasi dan performa aplikasi.",
  },
  {
    heading: "5. Perubahan Kebijakan Cookie",
    body:
      "Kami dapat memperbarui Kebijakan Cookie ini. Perubahan akan diinformasikan melalui notifikasi dalam aplikasi.",
  },
];
