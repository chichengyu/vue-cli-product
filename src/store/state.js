// 有些浏览器关闭了 本地存储 
var defaultCity = '未知';
try {
	if (localStorage.getItem('city')) {
		defaultCity = localStorage.getItem('city');
	}
} catch (e) {}


export default {
	currentCity: defaultCity
}