export type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ResizeCallback = (size: ScreenSize) => void;

const handleResize = (callback: ResizeCallback): (() => void) => {
	function onResize() {
		const width = window.innerWidth;
		let screenSize: ScreenSize;

		if (width < 640) {
			screenSize = 'xs';
		} else if (width >= 640 && width < 768) {
			screenSize = 'sm';
		} else if (width >= 768 && width < 1024) {
			screenSize = 'md';
		} else if (width >= 1024 && width < 1280) {
			screenSize = 'lg';
		} else {
			screenSize = 'xl';
		}

		callback(screenSize);
	}

	window.addEventListener('resize', onResize);
	onResize();

	return () => {
		window.removeEventListener('resize', onResize);
	};
};

export default handleResize;
