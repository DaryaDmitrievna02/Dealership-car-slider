(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const o="/assets/car1-CCf5Hoy3.png",d="/assets/car2-DUeYKFBF.png",i=[{name:"Mercedes-Benz ML",description:"Гамма двигателей представлена тремя моторами: 4-цилиндровым 2,1-литровым дизельным двигателем мощностью 204 л.с., 6-цилиндровым 3.0-литровым турбодизелем, выдающим 258 л.с. мощности, а также 4,7-литровым бензиновым двигателем, развивающим мощность в 306 «лошадок». Минимальный расход топлива для моторов составляет 6 л на 100 км. А максимальный разгон достигает 245 км/ч. Mercedes-Benz ML-class – отличный комфортный внедорожник, который способен удовлетворить самых требовательных владельцев."},{name:"Mercedes-Benz G-class",description:" Комфорт внедорожника дополняется подогревом сидений и центральным подлокотником между передними сидениями, куда встроен вещевой ящик и подстаканники. Гамма двигателей автомобиля представлена 6-цилиндровым 3,0-литровым двигателем мощностью 211 л.с. или же 8-цилиндровым 5,5-литровым бензиновым мотором, выдающим мощность в 388 «лошадок». Расход топлива, в зависимости от двигателя, составит от 11 до 15 л на 100 км. В паре с двигателями работает 7-ступенчатая автоматическая коробка передач. Mercedes-Benz G-class – просторный внедорожник, обеспечивающий водителя и пассажиров максимальным комфортом при длительных поездках даже по сложному бездорожью."},{name:"Mercedes-Benz ML",description:"Гамма двигателей представлена тремя моторами: 4-цилиндровым 2,1-литровым дизельным двигателем мощностью 204 л.с., 6-цилиндровым 3.0-литровым турбодизелем, выдающим 258 л.с. мощности, а также 4,7-литровым бензиновым двигателем, развивающим мощность в 306 «лошадок». Минимальный расход топлива для моторов составляет 6 л на 100 км. А максимальный разгон достигает 245 км/ч. Mercedes-Benz ML-class – отличный комфортный внедорожник, который способен удовлетворить самых требовательных владельцев."},{name:"Mercedes-Benz G-class",description:" Комфорт внедорожника дополняется подогревом сидений и центральным подлокотником между передними сидениями, куда встроен вещевой ящик и подстаканники. Гамма двигателей автомобиля представлена 6-цилиндровым 3,0-литровым двигателем мощностью 211 л.с. или же 8-цилиндровым 5,5-литровым бензиновым мотором, выдающим мощность в 388 «лошадок». Расход топлива, в зависимости от двигателя, составит от 11 до 15 л на 100 км. В паре с двигателями работает 7-ступенчатая автоматическая коробка передач. Mercedes-Benz G-class – просторный внедорожник, обеспечивающий водителя и пассажиров максимальным комфортом при длительных поездках даже по сложному бездорожью."}];window.onload=function(){const r=document.getElementById("cars__slider");r.innerHTML+=` <div id="car__container1" class="car__container current">
    <img src=${o} alt="">
      </div>
      <div id="car__container2" class="car__container">
    <img src=${d} alt="">
      </div>

        <div id="car__container2" class="car__container">
    <img src=${o} alt="">
      </div>

        <div id="car__container2" class="car__container">
    <img src=${d} alt="">
      </div>
    `;const e=document.getElementById("car__description");e.innerHTML=`       
            
            <h1>${i[0].name}</h1>
            <p>
            ${i[0].description}
            </p>
    
    `;let n=0;document.getElementById("btn-next").addEventListener("click",function(t){document.getElementById("btn-next").disabled=!0,setTimeout(()=>{document.getElementById("btn-next").disabled=!1},600),c(1)}),document.getElementById("btn-return").addEventListener("click",function(){document.getElementById("btn-return").disabled=!0,setTimeout(()=>{document.getElementById("btn-return").disabled=!1},600),c(-1)});function c(t){let s=document.getElementsByClassName("car__container");t==1&&n<s.length-1&&(n++,s[n-1].classList.add("swapLeft"),s[n-1].classList.remove("current"),s[n].classList.add("current"),e.classList.add("opacityHide"),e.classList.remove("opacityShow"),setTimeout(()=>{e.innerHTML=`            
      <h1>${i[n].name}</h1>
      <p>
      ${i[n].description}
      </p>
`,e.classList.remove("opacityHide"),e.classList.add("opacityShow")},500)),t==-1&&n>0&&(s[n-1].classList.add("current"),s[n-1].classList.remove("swapLeft"),s[n].classList.remove("current"),n--,e.classList.add("opacityHide"),e.classList.remove("opacityShow"),setTimeout(()=>{e.innerHTML=`            
      <h1>${i[n].name}</h1>
      <p>
      ${i[n].description}
      </p>
`,e.classList.remove("opacityHide"),e.classList.add("opacityShow")},500))}};window.addEventListener("resize",()=>{let r=document.getElementsByClassName("car__container");for(let e=0;e<r.length;e++)r[e].classList.add("no-transition");setTimeout(()=>{for(let e=0;e<r.length;e++)r[e].classList.remove("no-transition")},50)});
