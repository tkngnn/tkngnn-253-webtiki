var product ={
    bannerSliderpro: function () {
        var bannerSize = document.querySelector('.trademark-slider-app-product').clientWidth;

        var banner = document.querySelector('.trademark-slider-full-product');

        var bannerPrev = document.querySelector('.banner-prev-product');

        var bannerNext = document.querySelector('.banner-next-product');

        var bannerFull = bannerSize * 2;

        bannerFull -= bannerSize;

        var bannerTransfer = 0

        function nextBanner() {
            if (bannerTransfer < bannerFull) {
                bannerTransfer += bannerSize;
            } else {
                bannerTransfer = 0;
            }

            banner.style.transform = 'translateX(' + '-' + bannerTransfer + 'px';

        }

        bannerNext.addEventListener('click', nextBanner);

        function prevBanner() {
            if (bannerTransfer == 0) {
                bannerTransfer = bannerFull;
            }

            bannerTransfer -= bannerSize;

            banner.style.transform = 'translateX(' + '-' + bannerTransfer + 'px';

        }

        bannerPrev.addEventListener('click', prevBanner);


        setInterval(nextBanner, 70000);
    },

    start: function () {
        this.bannerSliderpro();
    }
};
product.start();