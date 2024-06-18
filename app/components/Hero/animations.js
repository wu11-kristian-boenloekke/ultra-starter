import { gsap } from 'gsap'

export const animateTitle = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: "expo.out",
            duration: 2
        }
    })

    // [] targets css selectors
    tl.to('[data-hero-line]', {
        scaleX: 1
    }).fromTo('[data-title-first]', {
            //from, moving title 100px to the right
            x: 100,
            autoAlpha: 0
        }, {
            //to
            x: 0,
            autoAlpha: 1

        }, 
        //position parameter, when to start the animation relative to the first
        '<15%'

    ).fromTo('[data-title-last]', {
            x: -100,
            autoAlpha: 0 
        }, 
        {
            x: 0,
            autoAlpha: 1
        },
        // position par, start the same time as the one before
        '<'
    )


    return tl
}


export const animateImage = () => {
    const tl = gsap.timeline({
        defaults: {
            ease: "expo.out",
            duration: 1.5
        }
    })

    tl.to('[data-image-overlay]', {
        scaleY: 1
    }).from('[data-image]', {
        yPercent: 100,
    }, '<'
    ).to('[data-image-overlay]', {
        scaleY: 0,
        transformOrigin: "top center"
    }).from('[data-image]', {
        duration: 2,
        scale: 1.3
    }, '<')

    return tl 
}

export const revealMenu = () => {
    const tl = gsap.timeline()

    tl.fromTo('[data-menu-item]', {
        autoAlpha: 0,
        y: 32, 
    }, {
        autoAlpha: 1,
        y: 0,
        //stagger displays the each item with a delay of 0.2s 
        stagger: 0.2,
        ease: "expo.out",
        duration: 2
    })
}