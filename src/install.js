import Pdf from "./components/Pdf.vue";

const PdfSimple = {
	install(Vue) {
		// Let's register our component globally
		// https://vuejs.org/v2/guide/components-registration.html
		Vue.component("Pdf-js", Pdf);
	}
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(PdfSimple);
}

export default PdfSimple;
