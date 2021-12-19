import { useRef, useCallback, useEffect } from 'react';

const useScrollFadeIn = (dir) => {
	console.log('시작은 했니...?');
	const compRef = useRef();
	const handleScroll = useCallback((entries) => {
		const { current } = compRef;
		entries.forEach((entry) => {
			// 초기 entry가 배열구성이라서 forEach로 각각 entry에 대해 진행
			if (entry.isIntersecting) {
				// 원하는 이벤트를 추가 할 것
				current.style.transitionProperty = 'opacity transform';
				current.style.transitionDuration = '1s';
				current.style.opacity = 1;
				current.style.transform = 'translateY(0)';
			}
		});
	}, []);

	useEffect(() => {
		let observer;
		const { current } = compRef;

		if (current) {
			observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
			observer.observe(current);
			return () => observer && observer.disconnect();
		}
	}, [handleScroll]);
	const handleDirection = (dir) => {
		switch (dir) {
			case 'up':
				return 'translateY(5%)';
			case 'down':
				return 'translateY(-5%)';
			case 'right':
				return 'translateX(-5%)';
			case 'left':
				return 'translateX(5%)';
			default:
				return 'translateY(-5%)';
		}
	};
	return {
		ref: compRef,
		style: {
			opacity: 0,
			transform: handleDirection(dir),
		},
	};
};
export default useScrollFadeIn;