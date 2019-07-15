<template>
  <div class="container">
    <div class="row" v-if="articles.length > 0">
      <div class="col-md-12 margin-top">
        <div class="row">
          <div class="offset-2 col-md-8">
            <div class="articles"
                 :key="key"
                 v-for="(article, key) in articles">
              <div class="article-body">
                <h3>{{ article.title }}</h3>
                <h5><span>{{ article.author }}</span> | <span>{{ article.publishedAt }}</span></h5>
                <p class="text-muted block-with-text">{{ article.description }}</p>
                <p class="text-muted block-with-text">{{ article.content }}</p>
              </div>
              <div class="article-thumbnail"
                   :style="`background-image: url(${article.urlToImage})`">
              </div>
            </div>
          </div>
          <div class="offset-2 col-md-8">
            <paginate
              :page-count="totalPage"
              :page-range="3"
              :margin-pages="4"
              :click-handler="onFetchNews"
              class-active="page-item page-link active"
              :prev-text="'Prev'"
              :next-text="'Next'"
              prev-class="page-link"
              next-class="page-link"
              :container-class="'pagination'"
              :page-class="'page-item page-link'">
            </paginate>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-md-12">
        <div class="loading">
          <h3>Loading...</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const NewsAPI = require('newsapi')
  const newsapi = new NewsAPI('ac4080b04b764a418f6caef2bbc54532')


  export default {
    name: "index",
    data() {
      return {
        articles: [],
        totalPage: 0,
        page: 1,
      }
    },
    methods: {
      fetchNews() {
        let self = this
        newsapi.v2.everything({
          q: '',
          sources: 'bbc-news,the-verge,CNN,le-monde',
          domains: 'bbc.co.uk, techcrunch.com',
          language: 'en',
          sortBy: 'popularity',
          page: self.page,
          pageSize: 10
        }).then(response => {
          this.articles = response.articles
          this.totalPage = response.totalResults
        })
      },
      onFetchNews (pageNum) {
        this.page = pageNum
        this.fetchNews()
      }
    },
    created() {
      this.fetchNews()
    }
  }
</script>

<style scoped>
  .articles {
    display: flex;
    background: #fff;
    margin-bottom: 25px;
    padding-left: 16px;
    border-radius: 0.5rem;
    -webkit-box-shadow: 2px 17px 19px -2px rgba(126, 125, 230, 0.24);
    -moz-box-shadow: 2px 17px 19px -2px rgba(126, 125, 230, 0.24);
    box-shadow: 2px 17px 19px -2px rgba(126, 125, 230, 0.24);
  }
  .article-thumbnail {
    height: 290px;
    background-size: cover;
    background-position: center center;
    width: 100%;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  .article-body {
    padding-top: 10px;
    padding-right: 10px;
  }

  ul.pagination li.page-item {
    padding: 7.5px 11.25px !important;
  }
  .loading {
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
