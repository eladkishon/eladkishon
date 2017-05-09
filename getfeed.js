// https://toolkit.sekando.com/docs/en/feednami
// https://medium.com/feed/@eladk
$(document).ready(function() {
    
    var url = 'https://medium.com/feed/@eladk';
    
    feednami.load(url,function(result){
        if(result.error) {
            console.log(result.error);
        } else {
            var entries = result.feed.entries;
            for(var i = 0; i < entries.length; i++){
                var entry = entries[i];
                console.log(entry);
            }
            addFeedToPostsList(entries);
        }
    });
    
});


// <!--<li>-->
// <!--<span class="post-meta">Apr 4, 2017</span>-->
// <!--<h2><a class="post-link" href="https://bilaw.al/hello-spotify.html">Goodbye MLH, Hello Spotify</a></h2>-->
// <!--</li>-->

function addFeedToPostsList(entries) {
    var list = $('#posts_list');


    for(var i =0; i<entries.length; i++) {
        list.append(`<li>
      <span class="post-meta">${entries[i].date}</span>
    <h2><a class="post-link" href="${entries[i].link}">${entries[i].title}</a></h2>
    </li>`);
    }

}