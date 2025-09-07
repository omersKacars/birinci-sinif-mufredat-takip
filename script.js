// script.js

document.addEventListener('DOMContentLoaded', () => {
    // HTML elementlerini seçme
    const weekNumberTitle = document.getElementById('week-number-title');
    const weekDateRange = document.getElementById('week-date-range');
    const weekTheme = document.getElementById('week-theme');
    const planContainer = document.getElementById('plan-container');
    const prevWeekBtn = document.getElementById('prev-week');
    const nextWeekBtn = document.getElementById('next-week');

    let currentWeekIndex = 0;

    // Yılın hangi haftasında olduğumuzu hesaplayan fonksiyon
    // Bu basit bir yaklaşımdır, okul takvimine göre daha hassas ayarlanabilir.
    const getWeekOfYear = (date) => {
        const start = new Date(date.getFullYear(), 0, 1);
        const diff = (date - start) + ((start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const day = Math.floor(diff / oneDay);
        return Math.ceil(day / 7);
    };

    // Mevcut tarihe en uygun hafta index'ini bulan fonksiyon
    const findCurrentWeekIndex = () => {
        const today = new Date();
        // Geçici olarak 2025 yılına ayarlıyoruz, test için
        // Gerçek kullanımda bu satırı silebilirsiniz.
        // today.setFullYear(2025, 8, 16); // Örnek: 16 Eylül 2025

        // planData'daki ilk haftanın başlangıç tarihini baz alalım
        const schoolStartDate = new Date('2025-09-08');
        const timeDiff = today.getTime() - schoolStartDate.getTime();
        
        // Eğer okul başlamadıysa ilk haftayı göster
        if (timeDiff < 0) return 0;

        const weekDiff = Math.floor(timeDiff / (1000 * 3600 * 24 * 7));

        // Eğer hesaplanan hafta veri setimizden büyükse son haftayı göster
        if (weekDiff >= planData.length) {
            return planData.length - 1;
        }
        
        return weekDiff;
    };


    // Belirli bir haftanın planını ekrana çizen fonksiyon
    const renderWeek = (weekIndex) => {
        // Geçersiz index kontrolü
        if (weekIndex < 0 || weekIndex >= planData.length) {
            console.error("Geçersiz hafta index'i:", weekIndex);
            return;
        }

        const weekData = planData[weekIndex];

        // Hafta bilgilerini güncelle
        weekNumberTitle.textContent = `${weekData.hafta}. Hafta`;
        weekDateRange.textContent = weekData.tarih;
        weekTheme.textContent = weekData.tema;

        // Ders kartlarını temizle
        planContainer.innerHTML = '';

        // Her ders için bir kart oluştur
        weekData.dersler.forEach(ders => {
            const card = document.createElement('div');
            card.className = 'lesson-card';

            // Kazanımlar listesini HTML'e çevir
            const kazanimlarHTML = ders.kazanimlar.map(k => `<li>${k}</li>`).join('');

            card.innerHTML = `
                <div class="card-header">
                    <h3>${ders.ad}</h3>
                </div>
                <div class="card-body">
                    <div class="card-section">
                        <h4>Konu</h4>
                        <p>${ders.konu}</p>
                    </div>
                    <div class="card-section">
                        <h4>Kazanımlar</h4>
                        <ul>
                            ${kazanimlarHTML}
                        </ul>
                    </div>
                </div>
            `;
            planContainer.appendChild(card);
        });

        // Butonların durumunu güncelle (ilk veya son haftadaysa pasif yap)
        prevWeekBtn.disabled = weekIndex === 0;
        nextWeekBtn.disabled = weekIndex === planData.length - 1;
    };

    // Butonlara tıklama olaylarını ekleme
    prevWeekBtn.addEventListener('click', () => {
        if (currentWeekIndex > 0) {
            currentWeekIndex--;
            renderWeek(currentWeekIndex);
        }
    });

    nextWeekBtn.addEventListener('click', () => {
        if (currentWeekIndex < planData.length - 1) {
            currentWeekIndex++;
            renderWeek(currentWeekIndex);
        }
    });

    // Uygulamayı başlat
    const init = () => {
        currentWeekIndex = findCurrentWeekIndex();
        renderWeek(currentWeekIndex);
    };

    init();
});