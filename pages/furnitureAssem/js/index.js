$(document).ready(function() {

    if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        const userPhoto = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url || "";
        $('[userCardTitle]').text(lastName + " " + firstName);
        $('img[userCardImg]').attr('src', userPhoto);


        // $('a[downloaddoc]').on('click', function(){
        //     window.Telegram.WebApp.downloadFile({
        //         url: "https://img.freepik.com/free-vector/image-folder-concept-illustration_114360-114.jpg",
        //         file_name: 'file.jpg'
        //     }, (item) => {
        //         $('div[Info]').append(`donwload file : ${item}`);
        //     })
        // })

        // $('a[label]').on('click', function(){
        //     window.Telegram.WebApp.addToHomeScreen();
        // })

        // $('a[Shared]').on('click', function(){

        //     window.Telegram.WebApp.shareMessage('',(res) => console.log(res));
        // })

    }
    
    window.Telegram.WebApp.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= document.referrer;
    });
    // window.Telegram.WebApp.checkHomeScreenStatus((status) => {
    //     $('div[Info]').append(`status: ${status}`);
    //     if(status === 'unknown' || status === 'missed'){
    //         // const btnAddHomeScreen = $(`
    //         //     <img class="w-4 h-4 object-contain" src="./img/icon/Plus.svg"/>`);
    //         //     btnAddHomeScreen.on('click', function(){
    //         //         const item = window.Telegram.WebApp.addToHomeScreen();
    //         //         $('div[Info]').append(`add homeScreen: ${item}`);
    //         //     })
    //         // $('div[usercard]').append(btnAddHomeScreen);
    //     }
    // })

    // window.Telegram.WebApp.LocationManager.init(() => {

    //     window.Telegram.WebApp.LocationManager.getLocation(
    //         (location) => {
    //             console.log(location);
    //             //$('div[Info]').append(`location: latitude - ${location.latitude} ; longitude - ${location.longitude}`)
    //             if(location !== undefined){

    //                 //$('p[location]').text('широта: ' + location.latitude + 'долгота: ' + location.longitude);
    //                 const url = `https://nominatim.openstreetmap.org/reverse?lat=${location.latitude}&lon=${location.longitude}&format=json`;
    
    //                 fetch(url)
    //                     .then(response => {
    //                         if (!response.ok) {
    //                             throw new Error('Network response was not ok');
    //                         }
    //                         //$('div[Info]').append(`API status ok: ${response.ok}`);
    //                         return response.json();
    //                     })
    //                     .then(data => {
    //                         //$('div[Info]').append(`UserAdress: ${data.display_name}`);
    //                         $('p[location]').text('Address:' + data.display_name);
    //                     })
    //                     .catch(error => {
    //                         console.error('Error:', error);
    //                         //$('div[Info]').append(`Error API get Adress: ${error}`);
    //                     });
    //             }else{
    //                 $('p[location]').parent().hide();
    //             }
    //         }
    //     );
    // });

});