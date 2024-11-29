$(document).ready(function() {
    $('div[docId]').on('click', '[docDonwload]', function(){
        const $btn = $(this);
        const $parent = $btn.closest('div[docId]');
        const docId = $parent.attr('docId');

        if(docId === "1"){
            window.Telegram.WebApp.downloadFile({
                url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                file_name: 'test.pdf'
            })
        }
        else if(docId === "2"){
            window.Telegram.WebApp.downloadFile({
                url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
                file_name: 'test2.pdf'
            })
        }
    });

    window.Telegram.WebApp.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= "https://sergey-khomyakov.github.io/AdamDemo/furnitureAssemMain.html";
    });
});