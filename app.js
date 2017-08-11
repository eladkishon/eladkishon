

Vue.component('posts-component', {
    data: function () {
        return {
            message: 'elad',
            posts: [],
            arr: [1, 2, 3, 4, 5]
        }
    },
    mounted: function () {
        let compInstance = this;
        var url = 'https://medium.com/feed/@eladk';
        feednami.load(url, function (result) {
            if (result.error) {
                console.log(result.error);
            } else {
                compInstance.posts = result.feed.entries;
                console.log(compInstance.posts);
            }
        });
    }
});



let vueApp = new Vue({
    el: '#app',
    data: {
        greeting: 'Welcome to your Vue.js app!',
        docsURL: 'http://vuejs.org/guide/',
        gitterURL: 'https://gitter.im/vuejs/vue',
        forumURL: 'http://forum.vuejs.org/',
    },
    methods: {
        humanizeURL: function (url) {
            return url
                .replace(/^https?:\/\//, '')
                .replace(/\/$/, '')
        },

    }
});



