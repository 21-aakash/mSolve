var t1 = gsap.timeline();

t1
.to("#anim", {
    opacity: 0,
    duration: 1.5,
    delay: 4,
    ease: Circ.easeInOut,
})
.to("#main", {
    height: 0,
    duration: 0,
    delay: -1,
    ease: Circ.easeInOut,
})
var answers = document.getElementsByClassName("ans")

function showAns(qNo){
    for (ans of answers){
        ans.classList.remove("activeQ");
    }
    document.getElementById(qNo).classList.add("activeQ");
};

