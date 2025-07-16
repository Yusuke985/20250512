document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let currentIndex = 0;

    function showImage(index) {
        galleryItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        showImage(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        showImage(currentIndex);
    }

    // 初期表示
    if (galleryItems.length > 0) {
        showImage(currentIndex);
    }

    // ボタンにイベントリスナーを追加
    if (nextButton) {
        nextButton.addEventListener('click', showNextImage);
    }
    if (prevButton) {
        prevButton.addEventListener('click', showPrevImage);
    }

    // 自動スライドショー (オプション)
    // setInterval(showNextImage, 5000); // 5秒ごとに画像を自動で切り替える
});