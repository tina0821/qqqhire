//露營用品類別
let campingSub = ['帳篷', '睡袋', '野餐桌椅', '戶外爐具', '防潮墊'];
let mountainSub = ['背包', '登山鞋', '攀岩器材', '抓握器材', '登山配件'];
let waterSportsSub = ['浮潛用具', '游泳用具', '獨木舟', '划艇', '帆板'];
let cyclingSub = ['單車', '車燈', '安全帽', '行李架', '單車配件'];
let skiingSub = ['雪板', '滑雪板', '滑雪服', '雪靴', '滑雪配件'];
let divingSub = ['潛水面鏡', '潛水呼吸管', '潛水蛙鞋', '浮潛套裝', '潛水配件'];
let sportsLeisureSub = ['球類運動', '健身器材', '戶外遊憩', '休閒娛樂', '運動配件'];
let photographySub = ['相機', '鏡頭', '三腳架', '攝影配件', '拍攝器材'];
let categories = [
  { category: 'camping', sub: campingSub },
  { category: 'mountain', sub: mountainSub },
  { category: 'waterSports', sub: waterSportsSub },
  { category: 'cycling', sub: cyclingSub },
  { category: 'skiing', sub: skiingSub },
  { category: 'diving', sub: divingSub },
  { category: 'sportsLeisure', sub: sportsLeisureSub },
  { category: 'photography', sub: photographySub }
];
let subSelect = $('#sub-category-select');

$(function () {
  $('#category-select').change(function () {
    let selectedCat = $(this).val();
    subSelect.empty();
    for (let i = 0; i < categories.length; i++) {
      let currentCat = categories[i];
      if (selectedCat === currentCat.category) {
        for (let j = 0; j < currentCat.sub.length; j++) {
          subSelect.append('<option value="' + currentCat.sub[j] + '">' + currentCat.sub[j] + '</option>');
        }
        break;
      }
    }
  });

  $('#search-form').submit(function (event) {
    event.preventDefault();

    let selectedCat = $('#category-select').val();
    let selectedSub = $('#sub-category-select').val();
    let selectedLoc = $('#location-select').val();

    // 其他處理程式碼...
  });
});


//縣市類別
let cities = ['台北市', '新北市', '桃園市', '台中市', '台南市', '高雄市', '基隆市', '新竹市', '嘉義市', '新竹縣', '苗栗縣', '彰化縣', '南投縣', '雲林縣', '嘉義縣', '屏東縣', '宜蘭縣', '花蓮縣', '台東縣', '澎湖縣', '金門縣', '連江縣'];
$(function () {
  $('#location-select').html(cities.map(city => `<option value="${city}">${city}</option>`));
});




const productData = [
  {
    image: "../img/product/22323890211104_206_m.jpg",
    title: "站立式划水獎版",
    money: 650
  },
  {
    image: "../img/product/22323890312522_638_m.jpg",
    title: "雙層加強材質划水獎版",
    money: 1020
  },
  {
    image: "../img/product/22305959385089_784_m.webp",
    title: "AROPEC 男女款 5mm膠底長筒 防滑水鞋 ",
    money: 200
  },
  {
    image: "../img/product/22320722076249_196_m.webp",
    title: "Peacock 浮力衣 耐衝擊夾克 防撞背",
    money: 700
  },
];

const productContainer = document.querySelector(".row");

for (let i = 0; i < 100; i++) {
  const product = productData[i % productData.length];

  const card = document.createElement("div");
  card.className = "col-md-4 rental-goods-group list-item";

  card.innerHTML = `
  <div class="card">
    <div class="card-img">
      <img
      src="${product.image}" class="card-img-top" alt="${product.title}">
    </div>
    <div class="card-body">
      <h4 class="card-title">${product.title}</h4>
      <div class="card-text2">
        <span>台中市</span>
        <span>南屯區</span>
        <span></span>
        <span>可出租</span>
      </div>
      <p class="card-text">$${product.money}/日</p>
      </div>
      </div>
      `;

      // <div class="card-text3">
      //   <div class="card-btn">
      //     <a href="">查看</a>
      //     <a href="">私訊</a>
      //   </div>
      //   <a href="#" class="bi bi-cart-fill"></a>
      // </div>

  productContainer.appendChild(card);
}

let perPage = 15;
let num = $('.list-item').length;
$('.list-item:gt(' + (perPage - 1) + ')').hide();
const options = {
  items: num, // 總共的項目數量
  itemsOnPage: perPage, // 每頁顯示的項目數量
  prevText: "<< 上一頁",
  nextText: "下一頁 >>",
  onPageClick: function (pageNumber) {
    let from = perPage * (pageNumber - 1);
    let to = from + perPage;
    $('.list-item').hide().slice(from, to).show();
  },
};

$("#pagination-container").pagination(options);
