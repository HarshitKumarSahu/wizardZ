function breakTheText() {
   
    let h1 = document.querySelector(".section1 nav h1");
    
    let h1Text = h1.textContent;
   
    let splittedText = h1Text.split("");
   
    let clutter = "";

    splittedText.forEach(function(element) {
        clutter += `<span>${element}</span>`;
    });
  
    h1.innerHTML = clutter

}

function animePageOne() {
    let tl = gsap.timeline();
    tl.from("nav i , nav h1 , nav h4 , nav button", {
        y:-30,
        opacity:0,
        delay:0.5,
        duration:0.7,
        stagger:0.15
    })
    tl.from(".center-part1 h1", {
        x:-150,
        opacity:0,
        duration:0.5
    })
    tl.from(".center-part1 p", {
        x:-150,
        opacity:0,
        duration:0.5
    })

    tl.from(".center-part1 button",{
        opacity:0,
        duration:0.5
    })
    tl.from(".center-part2 img",{
        opacity:0,
        duration:1.5
    }, "-=1.3")
    tl.from(".section1-bottom img", {
        opacity:0,
        y:40,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:".section1-bottom",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 90%",
            scrub:5,
            pin:true
        }
    })
}

function animePageTwo() {
    let tl2 = gsap.timeline({
        scrollTrigger : {
            trigger:".section2",
            scroller:"body",
            // markers:true,
            start:"top 65%",
            end:"top 10%",
            scrub:3
        }
    })
    tl2.from(".services", {
        y:30,
        opacity:0,
        duration:0.7
    })
    tl2.from(".elem.line1.left", {
        x:-300,
        opacity:0,
        duration:1
    },"same")
    tl2.from(".elem.line1.right", {
        x:300,
        opacity:0,
        duration:1
    },"same")
    tl2.from(".elem.line2.left", {
        x:-300,
        opacity:0,
        duration:1
    },"same2")
    tl2.from(".elem.line2.right", {
        x:300,
        opacity:0,
        duration:1
    },"same2")
}

function animePageThree() {
    let tl3 = gsap.timeline({
        scrollTrigger : {
            trigger:".section3",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 25%",
            scrub:3
        }
    })
    tl3.from(".section3 h1", {
        y:-50,
        opacity:0,
        duration:1
    }) 
    tl3.from(".section3 p", {
        y:-50,
        opacity:0,
        duration:1
    }) 
    tl3.from(".section3 button", {
        opacity:0,
        duration:2,
        delay:0.5
    }) 
    tl3.from(".section3 img", {
        y:-100,
        opacity:0,
        // x:-10,
        // yoyo:true,
        duration:5,
        // repeat:-1,
        ease : "bounce.out"
    }) 

}

function marquee() {
    window.addEventListener("wheel", (dets)=> {
        if(dets.deltaY > 0) {
            gsap.to(".marque", {
                transform : "translateX(-250%)",
                duration:2,
                repeat:-1,
                ease:"none"
            });
            gsap.to(".marque img", {
                rotate:180
            });
            
        } else {
            gsap.to(".marque", {
                transform : "translateX(0%)",
                duration:2,
                repeat:-1,
                ease:"none"
            });
            gsap.to(".marque img", {
                rotate:0
            });
            
        }
    })
}

function svg() {
    let path = `M 50 100 Q 615 100 1230 100`;

    let finalPath = `M 50 100 Q 615 100 1230 100`;

    let string = document.querySelector("#string");

    string.addEventListener("mouseenter", function(dets) {
        path = `M 50 100 Q ${dets.x} ${dets.y} 1230 100`;
        gsap.to("svg path", {
            attr: { d:path },
            duration:0.2,
            ease:"power3.out"
        })
    });

    string.addEventListener("mouseleave", function() {
        gsap.to("svg path", {
            attr: { d:finalPath },
            duration:1.3,
            ease:"elastic.out(1,0.2)"
        })
    });
}

function animePageFour() {
    let tl4 = gsap.timeline({
        scrollTrigger : {
            trigger:".section4",
            scroller:"body",
            // markers:true,
            start:"top 70%",
            end:"top 25%",
            scrub:3
        }
    });
    tl4.from(".section4 .casestudy", {
        opacity:0,
        duration:0.5
    });
    tl4.from(".container2-part1 .case-elem h2 , .container2-part1 .case-elem h1", {
        y:30,
        opacity:0,
        duration:0.7
    });
    tl4.from(".container2-part2 .case-elem h2 , .container2-part2 .case-elem h1", {
        y:-30,
        opacity:0,
        duration:0.7
    });
    
}

function cursor() {
    let body = document.querySelector("body");

    let cursor = document.querySelector("#cursor");

    let container2 = document.querySelector(".section4 .container2");

    body.addEventListener("mousemove", function(dets) {
        gsap.to(cursor , {
            x:dets.x,
            y:dets.y,
            duration:0.5
        })
    })
    container2.addEventListener("mouseenter", function(dets) {
        // console.log("heeeeeeeeeeeee")
        cursor.innerHTML="More";
        gsap.to(cursor , {
            scale:3,
            backgroundColor:"#ffffff8b"
        })
    })
    container2.addEventListener("mouseleave", function(dets) {
        cursor.innerHTML="";
        gsap.to(cursor , {
            scale:1,
            backgroundColor:"#B9FF66"
        })
    })
}

breakTheText()
gsap.from("h1 span", {
    y:-50,
    opacity:0,
    delay:0.3,
    duration:0.6,
    stagger:0.15
})


animePageOne()
animePageTwo()
animePageThree()
marquee()
svg()
animePageFour()
cursor()


























