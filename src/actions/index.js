import moment from 'moment'
import _ from 'lodash'
import {location} from "@hyperapp/router"

export default {
    location: location.actions,

    init: () => (state, actions) => {
        const url = 'https://medium.com/feed/@eladk';

        feednami.load(url, (result) => {
            if (result.error) {
                console.log(result.error);
            } else {

                actions.showPosts(_.map(result.feed.entries, post => {
                    post.date = moment(post.date).format("DD/MM/YYYY");
                    return post;
                }));
            }
        });

    },

    showPosts: (posts) => () => ({posts})

};