

Vue.component('posts-component', {
    data: function () {
        return {
            posts: [],
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
       
    },
    methods: {
        humanizeURL: function (url) {
            return url
                .replace(/^https?:\/\//, '')
                .replace(/\/$/, '')
        },

    }
});



