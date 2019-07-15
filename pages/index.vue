<template>
  <div class="container">
    <div class="row">
      <div class="app-intro col-12 margin-bottom margin-top">
        <h1>Welcome to <span class="branch-text">LaraMab</span>.com</h1>
      </div>
      <div class="col-12">
        <div class="app-banner app-bg-card margin-bottom">
          <div class="content-left">
            <h3>Answer to Your Eye Question!</h3>
            <p>You wish to have khmer web development online course</p>
          </div>
          <div class="content-right">
            <button class="app-btn-main app-bg-card">Getting Started</button>
          </div>
        </div>
      </div>
      <div class="col-12 margin-bottom">
        <div class="row">
          <LaramabBoxItem v-for="(title, key) in projects"
                          :key="key"
                          :title="title"/>
        </div>
      </div>
      <div class="col-12">
        <div class="row">
          <LaramabCardItem v-for="(post, key) in posts"
                           :post="post"
                           :key="key"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LaramabBoxItem from "../components/LaramabBoxItem";
  import LaramabCardItem from "../components/LaramabCardItem";

  export default {
    metaInfo: {
      meta: [
        { charset: 'utf-8' }
      ]
    },
    components: {LaramabCardItem, LaramabBoxItem},
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system.',
            description: 'See how aspects of the Bootstrap grid system work across multiple devices with a handy table.',
            tags: ['Technology', 'Web', 'Design'],
            thumbnail: '/img/screenshots/01.jpeg',
            createdAt: (new Date)
          },
          {
            id: 2,
            title: 'Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system.',
            description: 'See how aspects of the Bootstrap grid system work across multiple devices with a handy table.',
            tags: ['Technology', 'Web', 'Design'],
            thumbnail: '/img/screenshots/02.jpeg',
            createdAt: (new Date)
          },
          {
            id: 3,
            title: 'Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system.',
            description: 'See how aspects of the Bootstrap grid system work across multiple devices with a handy table.',
            tags: ['Technology', 'Web', 'Design'],
            thumbnail: '/img/screenshots/03.jpeg',
            createdAt: (new Date)
          },
          {
            id: 4,
            title: 'Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system.',
            description: 'See how aspects of the Bootstrap grid system work across multiple devices with a handy table.',
            tags: ['Technology', 'Web', 'Design'],
            thumbnail: '/img/screenshots/04.jpeg',
            createdAt: (new Date)
          },
          {
            id: 5,
            title: 'Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system.',
            description: 'See how aspects of the Bootstrap grid system work across multiple devices with a handy table.',
            tags: ['Technology', 'Web', 'Design'],
            thumbnail: '/img/screenshots/05.jpeg',
            createdAt: (new Date)
          },
          {
            id: 6,
            title: 'Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system.',
            description: 'See how aspects of the Bootstrap grid system work across multiple devices with a handy table.',
            tags: ['Technology', 'Web', 'Design'],
            thumbnail: '/img/screenshots/06.jpeg',
            createdAt: (new Date)
          },
        ],
        projects: [
          'PHP Bootcamp',
          'Laravel',
          'Vuejs',
          'Nodejs'
        ]
      }
    }
  }
</script>

<style>
</style>
