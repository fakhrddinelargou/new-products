
const cardS = document.querySelector('.cards');

(async()=>{
    const data =   await getData();
       cardS.innerHTML = data.map((el)=>{
   return fillUpProducts(el.category ,el.name,el.price.toFixed(2),el.image.desktop ) 
       }).join('')
   })()



function fillUpProducts(title , description , price , imgs){

    return `
            <div class="card">
<img src="${imgs}" alt="">
        <button class="btn">
  <div class="add-card">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <g fill="#C73B0F" clip-path="url(#a)">
        <path
          d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"
        />
        <path
          d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.333 0h20v20h-20z" />
        </clipPath>
      </defs></svg
    >Add to Card
  </div>
  <div class="mush">
    <span class="plus" onclick="plus()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10"
      >
        <path
          fill="#fff"
          d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
        />
      </svg>
    </span>
    <span id="mush-number"></span>
    <span class="minus" onclick="minus()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="2"
        fill="none"
        viewBox="0 0 10 2"
      >
        <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
      </svg>
    </span>
  </div>
</button>
          <span class="food-name">${title}</span>
          <span class="with">${description}</span>
          <span class="price">$${price}</span>
        </div>
    `
}





async function getData(){
    const data =  await fetch("http://localhost:3000/products")
    const response = await data.json()
    console.log(response);
    return response
}


/////////////////////////////////////////////////////////////////////////////////////


// async function updateImage() {
//   const width = window.innerWidth;
//   let imageType;

//   // تحديد نوع الصورة بناءً على عرض النافذة
//   if (width < 350) {
//     imageType = 'mobile'; // عرض الجوال
//   } else if (width < 850) {
//     imageType = 'tablet'; // عرض الجهاز اللوحي
//   } else {
//     imageType = 'desktop'; // عرض سطح المكتب
//   }

//   // جلب البيانات وتحديث المحتوى
//   const data = await getData();
//   cardS.innerHTML = data.map((el) => {
//     return fillUpProducts(el.category, el.name, el.price.toFixed(2), el.image[imageType]);
//   }).join('');
// }

// // استدعاء الدالة عند الحاجة
// updateImage();
// window.addEventListener('resize', updateImage); 

// const mushNumber = document.getElementById('mush-number')

// let num = 0 
// function plus(){
// num++;
// mushNumber.textContent = num
// }
// function minus(){
//     num--;

//     if(num < 0 ){
//         num = 0
//     }else{
//        mushNumber.textContent = num
//     }
//     return console.log(num)

// }


const addCart = document.querySelector('.add-card').classList.add('hidden')
