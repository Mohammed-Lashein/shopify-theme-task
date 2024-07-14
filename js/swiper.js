import Swiper from 'swiper'
import { Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const swiper = new Swiper('.swiper', {
	modules: [Pagination, Autoplay],
	direction: 'horizontal',
	loop: true,
	speed: 1000,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class='${className}'></span>`
		},
	},
	autoplay: {
		delay: 4000,
	},
	on: {
		init: function () {
      // Set the initial active bullet
      // let bullets = document.querySelectorAll('.swiper-pagination-bullet');
			// console.log(bullets);
      this.pagination.bullets[this.realIndex].classList.add('swiper-pagination-bullet-active');
    },
		slideChangeTransitionStart: function () {
			let bullets = document.querySelectorAll('.swiper-pagination-bullet')
			bullets.forEach((bullet) => bullet.classList.remove('swiper-pagination-bullet-active'))

			bullets[swiper.realIndex].classList.add('swiper-pagination-bullet-active')
		},
		},
})
