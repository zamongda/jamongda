module.exports = {
	plugins: {
		'@pandacss/dev/postcss': {
			viewportWidth: 375, // 뷰포트 너비
			viewportHeight: 667, // 뷰포트 높이
			unitPrecision: 5, // 소수점 자릿수
			viewportUnit: 'vw', // 변환할 단위
			selectorBlackList: ['ignore', 'tab-bar'], // 변환하지 않을 클래스
			minPixelValue: 1, // 변환할 최소 px 값
			mediaQuery: false, // 미디어 쿼리에서도 변환
		},
	},
};
