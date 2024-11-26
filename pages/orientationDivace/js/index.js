$(document).ready(function() {
    const $AccelerometerX = $('[data-block="AccelerometerX"]');
    const $AccelerometerY = $('[data-block="AccelerometerY"]');
    const $AccelerometerZ = $('[data-block="AccelerometerZ"]');
    const $DeviceOrientationX = $('[data-block="DeviceOrientationX"]');
    const $DeviceOrientationY = $('[data-block="DeviceOrientationY"]');
    const $DeviceOrientationZ = $('[data-block="DeviceOrientationZ"]');
    const $GyroscopeX = $('[data-block="GyroscopeX"]');
    const $GyroscopeY = $('[data-block="GyroscopeY"]');
    const $GyroscopeZ = $('[data-block="GyroscopeZ"]');
    window.Telegram?.WebApp?.Accelerometer.start();
    window.Telegram?.WebApp?.DeviceOrientation.start();
    window.Telegram?.WebApp?.Gyroscope.start();
    setInterval(() =>{
        $AccelerometerX.find('.text__result').text(window.Telegram?.WebApp?.Accelerometer.x);
        $AccelerometerY.find('.text__result').text(window.Telegram?.WebApp?.Accelerometer.y);
        $AccelerometerZ.find('.text__result').text(window.Telegram?.WebApp?.Accelerometer.z);
        $DeviceOrientationX.find('.text__result').text(window.Telegram?.WebApp?.DeviceOrientation.x);
        $DeviceOrientationY.find('.text__result').text(window.Telegram?.WebApp?.DeviceOrientation.y);
        $DeviceOrientationZ.find('.text__result').text(window.Telegram?.WebApp?.DeviceOrientation.z);
        $GyroscopeX.find('.text__result').text(window.Telegram?.WebApp?.Gyroscope.x);
        $GyroscopeY.find('.text__result').text(window.Telegram?.WebApp?.Gyroscope.y);
        $GyroscopeZ.find('.text__result').text(window.Telegram?.WebApp?.Gyroscope.z);
    }, 1000);
});