import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.directive('red', {
    inserted(el, binding, vNode) {
        console.log(vNode, binding.value);
        if (binding.value) {
            el.style.color = binding.value;
        } else if (binding.modifiers.red)
            el.style.color = 'red';
        else
            el.style.color = 'blue';
    }
});

Vue.directive('dropdown', {
    inserted(el) {
        el.addEventListener('click', function() {
            if (el.classList.contains('open')) {
                el.classList.remove('open');
            } else {
                el.classList.add('open');
            }
        });
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
});