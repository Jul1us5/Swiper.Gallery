axios.get('https://picsum.photos/v2/list')
.then(response => {
    console.log(response);
})



// const getData = (param) => {
    let data = document.getElementById('full');
    let HTML = '';

    for(let i = 0; i < 5; i++) {
        HTML += `<div class="swiper-slide">
        <figure class="slide-bgimg">
          <img src="https://drive.google.com/uc?export=view&id=0B_koKn2rKOkLbVhsNzdIYmlfN1E" class="entity-img" />?
        </figure>
        <div class="content">
          <p class="title">TITLE ${i}</p>
          <span class="caption">TEXT</span>
        </div>
      </div>`
    }
    console.log(HTML);
    data.innerHTML = HTML;
// }


export default axios;  