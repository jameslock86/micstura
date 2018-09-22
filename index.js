$(document).ready(()=>{
    const TIME_OUT_TIME = 1500
    let waitOn = 2;

    // $(this).scrollTop(0);

    function removeOverlay() {
        waitOn--;
        if (waitOn === 0)
            $('#loading-overlay').addClass('loaded').removeClass('loading');
    }
    
    window.onload = () => {
        removeOverlay();
    }
    
    setTimeout(function(){ 
        removeOverlay();
     }, TIME_OUT_TIME);  
})