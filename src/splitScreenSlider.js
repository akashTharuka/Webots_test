document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top-section');
    let handleOne = wrapper.querySelector('.handle-one');
    let handleTwo = wrapper.querySelector('.handle-two');
    let skew = 0;
    let delta = 0;

    if (wrapper.className.indexOf('skewed') != -1){
        skew = 990;
    }
    
    wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
    
        handleOne.style.left = e.clientX + delta + 'px';
        handleTwo.style.left = e.clientX + delta - 10 + 'px';

        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
});


