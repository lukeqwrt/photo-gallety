let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
};
let callback = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting
            && entry.target.className === 'image'){
                let imageUrl = entry.target.getAttribute('data-img');
                if(imageUrl){
                    entry.target.src = imageUrl;
                    observer.unobserve(entry.target);
                }
            }
    });
}
let observer = new IntersectionObserver(callback, options);
const images = document.querySelectorAll('.image')
images.forEach(i => {
    observer.observe(i)    
})


// observer.observe(document.querySelector('#image1'))
// observer.observe(document.querySelector('#image2'))
// observer.observe(document.querySelector('#image3'))
// observer.observe(document.querySelector('#image4'))
// observer.observe(document.querySelector('#image5'))
// observer.observe(document.querySelector('#image6'))
// observer.observe(document.querySelector('#image7'))
// observer.observe(document.querySelector('#image8'))
// observer.observe(document.querySelector('#image9'))
// observer.observe(document.querySelector('#image10'))
// observer.observe(document.querySelector('#image11'))
// observer.observe(document.querySelector('#image12'))
// observer.observe(document.querySelector('#image13'))
// observer.observe(document.querySelector('#image14'))