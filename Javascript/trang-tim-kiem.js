var slide_search ={

    slide_search1: function () {
        var bannerSize = document.querySelector('.product-ed').clientWidth;

        var banner = document.querySelector('.product-ed-full');

        var bannerPrev = document.querySelector('.product-pre');

        var bannerNext = document.querySelector('.product-next');

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


        setInterval(nextBanner, 70000)
    },

    start: function(){
        this.slide_search1();
    }

};

slide_search.start();
