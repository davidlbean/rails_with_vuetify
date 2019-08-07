This is a small Rails project that illustrates how I got Vue and Vuetify to play nicely with Rails.  


Thanks to the following that helped me:
* https://www.youtube.com/watch?v=2uZYKcKHgU0 is a series of Vuetify videos that were super helpful to me.  All free, although you can sign up for a buck a month to help the author out, which I support.
* https://mkdev.me/en/posts/rails-5-vue-js-how-to-stop-worrying-and-love-the-frontend is a good post for how to get your Rails app up and running with Vue.  
* https://github.com/kokiBit/rails-vuetify-example  kokiBit's repo gave me the hints I needed to get Vuetify styling to work.


Some misc thoughts:

* There are gobs of postings online about how to get css-loader and sass-loader and such to work properly.  I went down a lot of rabbit holes but never got to a good point.  I'm sure that's because I don't understand all the details under webpacker. In the end, I found that it was better to stay very simple and just let Vue and Vuetify handle things…so there is no special importing of loaders and other tweaks.

