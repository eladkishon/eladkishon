import axios from "axios"

export default {

    init: () => (state, actions) => {
        console.log("initializing app state");
        const url = 'https://medium.com/feed/@eladk';

        feednami.load(url,(result) => {
            console.log(result);
            if (result.error) {
                console.log(result.error);
            } else {
                actions.showPosts(result.feed.entries);
            }
        });

    },

    showPosts: (posts) => ()=> ({posts})

};