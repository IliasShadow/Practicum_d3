let draw = (dataForm) => {
    const width = 600;
    const height = 600;
	const svg = d3.select("svg")
        .attr("width", width)
	    .attr("height", height);
    let pict = drawSmile(svg)
    pict.attr("transform", `translate(${dataForm.cx.value},
                                      ${dataForm.cy.value}) scale(${dataForm.on_x.value},
                                                                  ${dataForm.on_y.value}) rotate(${dataForm.rotation.value})`);
}
let runAnimation = (dataForm) => {
    const width = 600;
    const height = 600;
	const svg = d3.select("svg")
        .attr("width", width)
	    .attr("height", height);
    let pict = drawSmile(svg);
    if (!(document.getElementById("Ane").checked)) {
        let easeType = document.getElementById("options").value;
        let easingFunc = d3[easeType];
        pict.attr("transform", `translate(${dataForm.cx.value},
                                        ${dataForm.cy.value}) scale(${dataForm.on_x.value},
                                                                    ${dataForm.on_y.value}) rotate(${dataForm.rotation.value})`)
        .transition()
        .duration(6000)
        .ease(easingFunc)
        .attr("transform", `translate(${dataForm.cx_finish.value},
                                        ${dataForm.cy_finish.value}) scale(${dataForm.do_x.value},
                                                                    ${dataForm.do_y.value}) rotate(${dataForm.f_rotation.value})`);
    } else {
        let easeType = document.getElementById("options").value;
        let easingFunc = d3[easeType];
        let path = drawPath(document.getElementById("cx_finish_blok1_s").selectedIndex);	
        pict.transition()
        .ease(easingFunc)
        .duration(6000)
        .attrTween('transform', translateAlong(path.node()));
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const width = 600;
    const height = 600;      
    const svg = d3.select("svg")
       .attr("width", width)
	   .attr("height", height);
    document.getElementById("draw").onclick = function() {
        draw(document.getElementById("setting"))
    }
    document.getElementById('clear').onclick = function() {
        d3.select("svg").selectAll('*').remove()
    }
    document.getElementById("Animat").onclick = function() {
        runAnimation(document.getElementById("setting"));
    };
})
document.addEventListener('change', function() {
    if (document.getElementById("animateToggle").checked) {
        document.getElementById("options").style.display = '';
        document.getElementById("An").style.display = '';
        document.getElementById("draw").style.display = 'none';
        document.getElementById("cx_finish_blok").style.display = '';
        document.getElementById("cx_finish_blok2").style.display = '';
        document.getElementById("cx_finish_blok3").style.display = '';
    } else {
        document.getElementById("options").style.display = 'none';
        document.getElementById("An").style.display = 'none';
        document.getElementById("draw").style.display = '';
        document.getElementById("cx_finish_blok").style.display = 'none';
        document.getElementById("cx_finish_blok2").style.display = 'none';
        document.getElementById("cx_finish_blok3").style.display = 'none';
        document.getElementById("Ane").checked = false;
    }
    if (document.getElementById("Ane").checked) {
        document.getElementById("cx_finish_blok4").style.display = 'none';
        document.getElementById("cx_finish_blok4_1").style.display = 'none';
        document.getElementById("cx_finish_blok1").style.display = '';
        document.getElementById("cx_finish_blok").style.display = 'none';
        document.getElementById("cx_finish_blok4_2").style.display = '';
        document.getElementById("stg_one").style.display = 'none';
        document.getElementById("spin").style.display = 'none';
    } else {
        document.getElementById("cx_finish_blok1").style.display = 'none';
        document.getElementById("cx_finish_blok").style.display = '';
        document.getElementById("cx_finish_blok4").style.display = '';
        document.getElementById("cx_finish_blok4_1").style.display = '';
        document.getElementById("cx_finish_blok4_2").style.display = 'none';
    }
});