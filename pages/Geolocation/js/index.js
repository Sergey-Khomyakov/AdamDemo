$(document).ready(function() {
    if(window.Telegram.WebApp.initDataUnsafe !== null){
        const lastName = window.Telegram.WebApp.initDataUnsafe?.user?.last_name || "";
        const firstName = window.Telegram.WebApp.initDataUnsafe?.user?.first_name || "";
        const userPhoto = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url || "";
        $('a[userCardTitle]').text(lastName + " " + firstName);
        $('img[userCardImg]').attr('src', userPhoto);
    }
    
    window.Telegram.WebApp.BackButton.show();
    Telegram.WebApp.onEvent('backButtonClicked', function(){
        window.location.href= document.referrer;
    });

    window.Telegram.WebApp.LocationManager.init(() => {

        window.Telegram.WebApp.LocationManager.getLocation(
            (location) => {
                console.log(location);
                //$('div[Info]').append(`location: latitude - ${location.latitude} ; longitude - ${location.longitude}`)
                if(location !== undefined){

                    //$('p[location]').text('широта: ' + location.latitude + 'долгота: ' + location.longitude);
                    const url = `https://nominatim.openstreetmap.org/reverse?lat=${location.latitude}&lon=${location.longitude}&format=json`;
    
                    fetch(url)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            //$('div[Info]').append(`API status ok: ${response.ok}`);
                            return response.json();
                        })
                        .then(data => {
                            //$('div[Info]').append(`UserAdress: ${data.display_name}`);
                            $('p[location]').text('Address:' + data.display_name);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            //$('div[Info]').append(`Error API get Adress: ${error}`);
                        });
                }else{
                    $('p[location]').parent().hide();
                }
            }
        );
    });

});