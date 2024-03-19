const tab1_feature = document.getElementById('tab1-content');
const tab2_feature = document.getElementById('tab2-content');
const tab3_feature = document.getElementById('tab3-content');

const tab1_button = document.getElementById('tab1-button');
const tab2_button = document.getElementById('tab2-button');
const tab3_button = document.getElementById('tab3-button');

function londonfunct() {
   tab1_feature.classList.remove('hidden');
   tab2_feature.classList.add('hidden');
   tab3_feature.classList.add('hidden');

   tab1_button.classList.add('clicked-btn');
   tab2_button.classList.remove('clicked-btn');
   tab3_button.classList.remove('clicked-btn');
}

function parisfunct() {
   tab1_feature.classList.add('hidden');
   tab2_feature.classList.remove('hidden');
   tab3_feature.classList.add('hidden');

   tab1_button.classList.remove('clicked-btn');
   tab2_button.classList.add('clicked-btn');
   tab3_button.classList.remove('clicked-btn');
}

function tokyofunct() {
   tab1_feature.classList.add('hidden');
   tab2_feature.classList.add('hidden');
   tab3_feature.classList.remove('hidden');

   tab1_button.classList.remove('clicked-btn');
   tab2_button.classList.remove('clicked-btn');
   tab3_button.classList.add('clicked-btn');
}