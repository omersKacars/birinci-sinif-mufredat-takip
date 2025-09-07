// data.js

const planData = [
    // ===============================================================================================
    // 1. DÖNEM
    // ===============================================================================================

    // EYLÜL 2025
    // -----------------------------------------------------------------------------------------------
    {
        donem: 1,
        hafta: "Uyum Haftası",
        tarih: "1 Eylül – 5 Eylül 2025",
        tema: "Okula Merhaba: Tanışma ve Okul Ortamını Keşfetme",
        dersler: [
            {
                ad: "Okula Uyum Etkinlikleri",
                konu: "Tanışma oyunları, sınıf ve okulun bölümlerinin gezilmesi, temel sınıf kurallarının eğlenceli bir dille anlatılması, serbest çizgi ve boyama çalışmaları.",
                kazanimlar: [
                    "Okulun iç ve dış mekanlarını tanır.",
                    "Sınıf arkadaşları ve öğretmeniyle tanışır.",
                    "Okul ve sınıf kuralları hakkında fikir edinir.",
                    "Kalem tutma ve boyama gibi temel motor becerilerini geliştirir."
                ]
            }
        ]
    },
    {
        donem: 1,
        hafta: 1,
        tarih: "8 Eylül – 12 Eylül 2025",
        tema: "İlköğretim Haftası / Çizgilerle Başlıyoruz",
        dersler: [
            { ad: "Türkçe", konu: "Okuma yazmaya hazırlık, çizgi çalışmaları (düz, eğik, yuvarlak).", kazanimlar: ["T.1.1.1. Yazma materyallerini kuralına uygun kullanır.", "T.1.1.2. Çizgi çalışmaları yapar."] },
            { ad: "Matematik", konu: "Uzamsal ilişkiler (altında-üstünde, içinde-dışında, önünde-arkasında).", kazanimlar: ["M.1.1.1. Nesnelerin uzaydaki konumunu ifade eder."] },
            { ad: "Hayat Bilgisi", konu: "Okulumuzda Hayat: Kendimi tanıtıyorum.", kazanimlar: ["HB.1.1.1. Kendini tanıtır."] },
            { ad: "Beden Eğitimi ve Oyun", konu: "Serbest oyun ve tanışma etkinlikleri.", kazanimlar: ["BEO.1.1.1. Kendini ve arkadaşlarını tanımaya yönelik oyunlar oynar."] },
            { ad: "Müzik", konu: "Ses ve nefes çalışmaları, tanışma şarkıları.", kazanimlar: ["M.1.A.1. Belirli bir amaca yönelik ses ve nefes çalışmaları yapar."] },
            { ad: "Görsel Sanatlar", konu: "Serbest karalama ve boyama çalışmaları.", kazanimlar: ["GS.1.B.1. Duygu ve düşüncelerini görsel sanat çalışmalarıyla ifade eder."] }
        ]
    },
    {
        donem: 1,
        hafta: 2,
        tarih: "15 Eylül – 19 Eylül 2025",
        tema: "Sesleri Tanıyorum / Rakamları Keşfediyorum",
        dersler: [
            { ad: "Türkçe", konu: "Ses hissetme ve tanıma (e, l, a, k, i, n).", kazanimlar: ["T.1.2.1. Harfi tanır ve seslendirir.", "T.1.2.2. Harfleri yazar."] },
            { ad: "Matematik", konu: "Varlıkları niteliklerine göre eşleştirme, 1 ve 2 rakamını tanıma ve yazma.", kazanimlar: ["M.1.2.1. Nesneleri niteliklerine göre eşleştirir.", "M.1.2.2. 20’ye kadar olan sayıları birer birer okur ve yazar."] },
            { ad: "Hayat Bilgisi", konu: "Sınıfımızı tanıyalım, sınıf eşyalarımız.", kazanimlar: ["HB.1.1.2. Sınıfını ve sınıfında bulunan araç gereçleri tanır."] },
            { ad: "Beden Eğitimi ve Oyun", konu: "Temel yürüme ve koşma egzersizleri.", kazanimlar: ["BEO.1.1.2. Yer değiştirme hareketlerini yapar."] },
            { ad: "Müzik", konu: "Ritim çalışmaları, tekerlemeler ve şarkılar.", kazanimlar: ["M.1.A.2. Verilen ritim tartımlarını seslendirir."] },
            { ad: "Görsel Sanatlar", konu: "Yırtma-yapıştırma tekniği ile serbest çalışmalar.", kazanimlar: ["GS.1.B.3. Farklı sanat malzemelerini kullanarak çalışmalar yapar."] }
        ]
    },
    {
        donem: 1,
        hafta: 3,
        tarih: "22 Eylül – 26 Eylül 2025",
        tema: "Harflerle Kelimeler / Sayılarla Oynuyorum",
        dersler: [
            { ad: "Türkçe", konu: "Ses hissetme ve tanıma (o, m, u, t, ü, y), hece ve kelime oluşturma.", kazanimlar: ["T.1.2.3. Hece ve kelimeleri okur.", "T.1.2.4. Hece ve kelimeleri yazar."] },
            { ad: "Matematik", konu: "3, 4 ve 5 rakamlarını tanıma ve yazma.", kazanimlar: ["M.1.2.2. 20’ye kadar olan sayıları birer birer okur ve yazar."] },
            { ad: "Hayat Bilgisi", konu: "Okulda iletişim, nezaket ifadeleri.", kazanimlar: ["HB.1.1.5. Okulda iletişim kurarken nezaket ifadelerini kullanır."] },
            { ad: "Beden Eğitimi ve Oyun", konu: "Sıralanma ve dizilme çalışmaları.", kazanimlar: ["BEO.1.1.3. Sıraya girme ve sıradan ayrılma çalışmalarını yapar."] },
            { ad: "Müzik", konu: "Müzikli dramatizasyon.", kazanimlar: ["M.1.C.1. Müzik ve hareket aracılığıyla kendini ifade eder."] },
            { ad: "Görsel Sanatlar", konu: "Oyun hamuru ile üç boyutlu şekiller.", kazanimlar: ["GS.1.B.2. Üç boyutlu çalışmalar yapar."] }
        ]
    },
    {
        donem: 1,
        hafta: 4,
        tarih: "29 Eylül – 3 Ekim 2025",
        tema: "Hayvanları Koruma Günü / Okumaya Başlıyorum",
        dersler: [
            { ad: "Türkçe", konu: "Ses hissetme ve tanıma (ö, r, ı, d, s, b), anlamlı cümleler oluşturma.", kazanimlar: ["T.1.2.5. Basit ve kısa cümleleri okur.", "T.1.2.6. Basit ve kısa cümleleri yazar."] },
            { ad: "Matematik", konu: "Sayıları karşılaştırma (az, çok, eşit).", kazanimlar: ["M.1.2.3. Nesne gruplarını azlık ve çokluk bakımından karşılaştırır."] },
            { ad: "Hayat Bilgisi", konu: "Okulda kurallar, kurallara uymanın önemi.", kazanimlar: ["HB.1.1.4. Okul ve sınıf kurallarına uyar."] },
            { ad: "Beden Eğitimi ve Oyun", konu: "Topla oynanan eğitsel oyunlar.", kazanimlar: ["BEO.1.1.4. Nesne kontrolü gerektiren hareketleri yapar."] },
            { ad: "Müzik", konu: "Hayvan seslerini taklit etme, hayvan konulu şarkılar.", kazanimlar: ["M.1.A.3. Çevresindeki ses kaynaklarını ayırt eder."] },
            { ad: "Görsel Sanatlar", konu: "Hayvan figürleri çizme ve boyama.", kazanimlar: ["GS.1.B.1. Gözlemlerinden yola çıkarak çizimler yapar."] }
        ]
    },

    // EKİM 2025
    // ... plan bu şekilde tüm yılı kapsayacak şekilde devam eder ...

    // KASIM 2025
    //-----------------------------------------------------------------------------------------------
    {
        donem: 1,
        hafta: 10,
        tarih: "10 Kasım – 14 Kasım 2025",
        tema: "1. ARA TATİL",
        dersler: [
            { ad: "Tüm Dersler", konu: "Ara tatil etkinlikleri.", kazanimlar: ["Öğrenciler dinlenir ve sosyal etkinliklere katılır."] }
        ]
    },

    // ...

    // OCAK 2026
    // -----------------------------------------------------------------------------------------------
    {
        donem: 1,
        hafta: 19,
        tarih: "19 Ocak – 23 Ocak 2026",
        tema: "1. Dönem Sonu Tekrarı ve Karne Heyecanı",
        dersler: [
            { ad: "Tüm Dersler", konu: "1. dönemde öğrenilen harfler, sayılar ve konuların genel tekrarı. Eğitsel oyunlar ve dönem sonu değerlendirme.", kazanimlar: ["Birinci dönemde öğrenilen konuları pekiştirir."] },
        ]
    },
    {
        donem: 1,
        hafta: 20,
        tarih: "26 Ocak – 6 Şubat 2026",
        tema: "YARIYIL TATİLİ",
        dersler: [
            { ad: "Tüm Dersler", konu: "Yarıyıl tatili.", kazanimlar: ["Öğrenciler dinlenir."] }
        ]
    },

    // ===============================================================================================
    // 2. DÖNEM
    // ===============================================================================================

    // ŞUBAT 2026
    // -----------------------------------------------------------------------------------------------
    {
        donem: 2,
        hafta: 21,
        tarih: "9 Şubat – 13 Şubat 2026",
        tema: "Yeni Dönem, Yeni Heyecan",
        dersler: [
            { ad: "Türkçe", konu: "Metin okuma ve anlama çalışmaları, 5N1K soruları.", kazanimlar: ["T.1.3.5. Kısa metinleri okur.", "T.1.3.8. Okuduğu metinle ilgili soruları cevaplar."] },
            { ad: "Matematik", konu: "Toplama işlemi, toplama işleminin anlamı.", kazanimlar: ["M.1.3.1. Toplama işleminin anlamını kavrar."] },
            { ad: "Hayat Bilgisi", konu: "Ailem ve Evim: Aile bireylerini tanır.", kazanimlar: ["HB.1.3.1. Aile bireylerini tanıtır."] },
            { ad: "Beden Eğitimi ve Oyun", konu: "Eğitsel oyunlar ve yarışmalar.", kazanimlar: ["BEO.1.2.1. Kurallı oyunların önemini fark eder."] }
        ]
    },

    // ... plan bu şekilde tüm yılı kapsayacak şekilde devam eder ...

    // NİSAN 2026
    // -----------------------------------------------------------------------------------------------
    {
        donem: 2,
        hafta: 30,
        tarih: "13 Nisan – 17 Nisan 2026",
        tema: "2. ARA TATİL",
        dersler: [
            { ad: "Tüm Dersler", konu: "Ara tatil etkinlikleri.", kazanimlar: ["Öğrenciler dinlenir ve sosyal etkinliklere katılır."] }
        ]
    },
    {
        donem: 2,
        hafta: 31,
        tarih: "20 Nisan – 24 Nisan 2026",
        tema: "23 Nisan Ulusal Egemenlik ve Çocuk Bayramı",
        dersler: [
            { ad: "Tüm Dersler", konu: "Ulusal egemenliğin anlamı, Atatürk ve çocuklar, 23 Nisan konulu şiirler, şarkılar ve görsel çalışmalar. (23 Nisan Perşembe - Resmi Tatil)", kazanimlar: ["Ulusal egemenliğin önemini fark eder.", "Atatürk'ün çocuklara verdiği değeri anlar.", "Bayram coşkusunu yaşar."] }
        ]
    },

    // ...

    // HAZİRAN 2026
    // -----------------------------------------------------------------------------------------------
    {
        donem: 2,
        hafta: 38,
        tarih: "8 Haziran – 12 Haziran 2026",
        tema: "Yıl Sonu Faaliyet Haftası ve Genel Tekrar",
        dersler: [
            { ad: "Tüm Dersler", konu: "Öğrenilen tüm konuları kapsayan eğitsel oyunlar, yarışmalar, proje sunumları ve sosyal etkinlikler.", kazanimlar: ["Yıl boyunca öğrenilen bilgi ve becerileri eğlenceli etkinliklerle pekiştirir.", "Arkadaşlarıyla iş birliği içinde çalışır."] }
        ]
    },
    {
        donem: 2,
        hafta: 39,
        tarih: "15 Haziran – 19 Haziran 2026",
        tema: "Karne Haftası ve Yaza Merhaba",
        dersler: [
            { ad: "Tüm Dersler", konu: "Yıl sonu değerlendirmeleri, karne dağıtımı ve yaz tatili için öneriler. (19 Haziran 2026 - Okulların Kapanışı)", kazanimlar: ["Bir yıllık akademik gelişimini değerlendirir."] }
        ]
    }
];