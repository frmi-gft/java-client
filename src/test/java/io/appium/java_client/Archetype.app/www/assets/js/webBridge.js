// This function identifies the device type (Android/iOS)
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) return "Windows Phone";
    if (/android/i.test(userAgent)) return "Android";
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return "iOS";
    return "unknown";
}


//Send the answer message through valid handler according to the operating system of the device.
function callComponent(componentName, componentParams){
    // Create a unique name for the callback event
    let cb = componentName+Date.now();
    // This function returns a Promise
    return new Promise( resolve => {
        // Identify device type for native handling
        let device = getMobileOperatingSystem();
        let listen = false;
        if (device === 'iOS' && window.hasOwnProperty('webkit')) {
            window['webkit'].messageHandlers.callbackHandler
                .postMessage(JSON.stringify({
                    component: componentName,
                    params: JSON.stringify(componentParams),
                    callbackName: cb
                })
            );
            listen = true;
        } else if (device === 'Android' && window.hasOwnProperty('javascriptObject')) {
            window['javascriptObject'].nativeCode(componentName, JSON.stringify(componentParams), cb);
            listen = true;
        } else console.log('Error calling native code. Am I running on a device?');
        // Event handler that will be executed on component return
        const eventHandler = (event) => {
            window.removeEventListener(cb, eventHandler);
            resolve(event.detail);
        }
        if (listen) {
            window.addEventListener(cb, eventHandler);
            setTimeout(() => {
                window.removeEventListener(cb, eventHandler);
                resolve({error: 'TimeOut'});
            } ,3000)
        }
    
    });
}
