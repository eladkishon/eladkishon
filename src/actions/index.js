
export default {

    init: () => (state, actions) => {
        const url = 'https://medium.com/feed/@eladk';

        feednami.load(url,(result) => {
            if (result.error) {
                console.log(result.error);
            } else {
                actions.showPosts(result.feed.entries);
            }
        });

    },

    showPosts: (posts) => ()=> ({posts})

};