// 페페 이미지 URL
const PEPE_IMAGE_URL = 'https://i.namu.wiki/i/QeUjtKtffKpo4BiAIQZqVCzjC26V9Gw5Nm9RuFv1pGH2fY66Jn6Ff6gkrx447pETx4ZDccv5QV-5Xnam-vBF2GLGX6rqzsFaZmVUUuHNJKkWj-xen2-ewuBZoug7KTwpSSJvAEl1MTC5RAiCBvmptw.webp';

// 이미지 교체 함수
function replaceImage(img) {
    if (img.src !== PEPE_IMAGE_URL) {
        img.src = PEPE_IMAGE_URL;
    }
}

// 모든 이미지 요소를 찾아서 페페 이미지로 교체
function replaceImages() {
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        const img = images[i];
        replaceImage(img);
    }
    const images2 = document.querySelectorAll('img');
    for (let i = 0; i < images2.length; i++) {
        const img = images2[i];
        replaceImage(img);
    }
}

// MutationObserver 설정
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeName === 'IMG') {
                    replaceImage(node);
                }
                if (node.getElementsByTagName) {
                    const images = node.getElementsByTagName('img');
                    for (let i = 0; i < images.length; i++) {
                        replaceImage(images[i]);
                    }
                }
            });
        }
    });
});

// 0.5초마다 이미지 교체 실행
setInterval(replaceImages, 500);

// 페이지 로드 시 이미지 교체 실행
document.addEventListener('DOMContentLoaded', function() {
    replaceImages();
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

// 초기 이미지 교체 실행
replaceImages();
observer.observe(document.body, {
    childList: true,
    subtree: true
}); 