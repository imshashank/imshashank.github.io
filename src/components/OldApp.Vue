<template>
    <div id="app">
        <template>
            <Tinder ref="tinder" key-name="id" id="deck" :queue.sync="queue" :offset-y="10"
                    @submit="onSubmit">
                <template slot-scope="scope" class=".vue-tinder">
                    <div class="pic">
                        <div class="card">
                            <a :href="scope.data.item.Url" target="_blank">
                                <img class="card-img-top" :src="scope.data.item.UrlToImage"
                                     alt="Card image cap">
                            </a>
                            <button v-on:click="isHidden = true">Hide the text below</button>
                            <button v-on:click="isHidden = !isHidden">Toggle hide and show</button>

                            <div class="card-body"
                                 style="color: black;text-align: center;font-size: 14px;overflow-y: hidden;">
                                <h3 class="card-title">{{ scope.data.item.Title }}</h3>
                                <div style="text-overflow: ellipsis;
                                text-align: left;
                                overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2; /* number of lines to show */-webkit-box-orient: vertical;"
                                     class="card-text">
                                    <div v-if="scope.data.item.Summary<350"> {{ scope.data.item.Summary
                                        }}
                                    </div>
                                    <div v-else>{{ scope.data.item.Summary.substring(0,350)+".." }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </template>
                <img class="like-pointer" slot="like" src="./assets/img/like-txt.png">
                <img class="nope-pointer" slot="nope" src="./assets/img/nope-txt.png">
                <img class="super-pointer" slot="super" src="./assets/img/super-txt.png">
                <img class="rewind-pointer" slot="rewind" src="./assets/img/super-txt.png">
            </Tinder>
            <div class="btns">
                <img src="./assets/img/rewind.png" @click="decide('rewind')">
                <img src="./assets/img/nope.png" @click="decide('nope')">
                <img src="./assets/img/super-like.png" @click="decide('super')">
                <img src="./assets/img/like.png" @click="decide('like')">
                <img src="./assets/img/help.png" @click="decide('help')">
            </div>
            <div v-if="currentUrl" id="frame">
                <vue-friendly-iframe v-if="!isHidden" :src="currentUrl"
                                     @load="onLoad"></vue-friendly-iframe>
            </div>
        </template>
    </div>
</template>

<script>
    import Amplify, {API, Auth} from 'aws-amplify';
    import Tinder from "vue-tinder";
    import aws_exports from "./aws-exports";
    import {getFeed} from './graphql/queries';
    //import {updateLikes} from './graphql/mutations';
    import Vue from 'vue'
    import VueFriendlyIframe from 'vue-friendly-iframe';
    import VueFullPage from 'vue-fullpage.js'

    Vue.use(VueFriendlyIframe);
    Vue.use(VueFullPage);

    Auth.currentCredentials()
        .then(d => console.log('data: ', d))
        .catch(e => console.log('error: ', e))

    var appType = null;
    var inputStr = null;
    var requestType = "TOP"

    Amplify.configure(aws_exports);

    export default {
        name: "App",
        components: {Tinder},
        data: () => ({
            options: {
                menu: '#menu',
                anchors: ['page1', 'page2'],
                sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
            },
            queue: [],
            windowHeight: window.innerHeight,
            offset: 0,
            history: [],
            articles: [],
            nextToken: null,
            currentUrl: null,
            isHidden: true
        }),
        watch: {
            windowHeight(newHeight, oldHeight) {
                this.txt = `it changed to ${newHeight} from ${oldHeight}`;
            }
        },
        mounted() {
            this.init();
            this.$nextTick(() => {
                window.addEventListener('resize', this.onResize);
            });
        },
        created() {
            let getVars = {};
            let uri = window.location.href.split('?');
            if (uri.length === 2) {
                let vars = uri[1].split('&');

                let tmp = '';
                vars.forEach(function (v) {
                    tmp = v.split('=');
                    if (tmp.length === 2)
                        getVars[tmp[0]] = tmp[1];
                });
            }
            console.log(this.$route.params.appType) // outputs 'yay'
            console.log("Setting appType to: " + this.$route.query["appType"])
            if (getVars.appType != null) {
                appType = getVars.appType;
                console.log("Setting appType to: " + appType)
            }
            if (getVars.inputStr != null) {
                inputStr = getVars.inputStr;
                console.log("Setting inputStr to: " + inputStr)
            }
            if (getVars.requestType != null) {
                requestType = getVars.requestType;
                console.log("Setting requestType to: " + requestType)
            }
            this.getArticles();
            this.init();
        },
        methods: {
            onResize() {
                this.windowHeight = window.innerHeight
            },
            init() {
            },
            async getArticles(count = 10, append = true) {
                const articles = await API.graphql({
                    query: getFeed,
                    variables: {
                        requestType: requestType,
                        inputStr: inputStr,
                        appType: appType,
                        nextToken: this.nextToken,
                        limit: count
                    },
                });
                this.nextToken = articles.data.getFeed.nextToken;

                const list = [];
                for (let i = 0; i < articles.data.getFeed.items.length; i++) {
                    let tempArticle = articles.data.getFeed.items[i];
                    if (tempArticle !== undefined && this.queue[tempArticle.ArticleId] === undefined) {
                        list.push({id: tempArticle.ArticleId, item: tempArticle});
                        this.articles.push(tempArticle);
                        if (this.currentUrl == null) {
                            this.currentUrl = tempArticle.Url;
                        }
                    }
                }
                if (append) {
                    this.queue = this.queue.concat(list);
                } else {
                    this.queue.unshift(...list);
                }
            },
            onSubmit(item) {
                // type: result，'like': swipe right, 'nope': swipe left, 'super': swipe up
                // key:  The keyName of the removed card
                // item: Child object in queue
                // let val = 1;
                // if (item.type === "like") {
                //     val = 1
                // }
                // if (item.type === "nope") {
                //     val = -1
                // }
                // var updateLikesInput = {
                //     "ArticleId": item.item.ArticleId,
                //     "Value": val,
                //     "PluginName": item.item.PluginName
                // }
                // if (item.type === "like" || item.type === "nope") {
                //     const result = API.graphql({
                //         query: updateLikes,
                //         variables: {input: updateLikesInput},
                //     });
                //     console.log(result)
                //     console.log("Like")
                // }
                this.offset++;
                this.currentUrl = this.articles[this.offset].Url;
                if (this.queue.length < 4) {
                    this.getArticles();
                }
                this.history.push(item);
            },
            async decide(choice) {
                if (choice === "rewind") {
                    if (this.history.length) {
                        this.$refs.tinder.rewind([this.history.pop()]);
                    }
                } else if (choice === "help") {
                    window.open("https://pip.link");
                } else {
                    this.$refs.tinder.decide(choice);
                }
            }
        }
    };
</script>

<!--<script>-->
<!--    //import Amplify, {API, Auth} from 'aws-amplify';-->
<!--    import Amplify from 'aws-amplify';-->
<!--    import VueTinder from 'vue-tinder'-->
<!--    import '@aws-amplify/ui-vue';-->
<!--    import aws_exports from './aws-exports';-->

<!--    // import {getFeed} from './graphql/queries';-->
<!--    // import {AmplifyEventBus} from 'aws-amplify-vue'-->

<!--    Amplify.configure(aws_exports);-->
<!--    Auth.currentCredentials()-->
<!--            .then(d => console.log('data: ', d))-->
<!--            .catch(e => console.log('error: ', e))-->


<!--    export default {-->
<!--        name: 'App',-->
<!--        components: {-->
<!--            VueTinder-->
<!--        },-->
<!--        async beforeCreate() {-->
<!--            try {-->
<!--                this.signedIn = true-->
<!--            } catch (err) {-->
<!--                this.signedIn = false-->
<!--            }-->
<!--            AmplifyEventBus.$on('authState', info => {-->
<!--                if (info === 'signedIn') {-->
<!--                    this.signedIn = true-->
<!--                } else {-->
<!--                    this.signedIn = false-->
<!--                }-->
<!--            });-->
<!--        },-->
<!--        async created() {-->
<!--            this.getTodos();-->
<!--        },-->
<!--        data() {-->
<!--            return {-->
<!--                name: '',-->
<!--                description: '',-->
<!--                todos: []-->
<!--            }-->
<!--        },-->
<!--        methods: {-->
<!--            decide(choice) {-->
<!--                this.$refs.tinder.decide(choice)-->
<!--            },-->
<!--            async getTodos() {-->
<!--                await Auth.currentCredentials()-->
<!--                    .then(d => console.log('data: ', d))-->
<!--                    .catch(e => console.log('error: ', e))-->
<!--                const articles = await API.graphql({-->
<!--                    query: getFeed,-->
<!--                    variables: {requestType: "TOP", inputStr: "Facebook"},-->
<!--                });-->
<!--                console.log(articles);-->
<!--                this.todos = articles.data.getFeed.items;-->
<!--            }-->
<!--        }-->
<!--    }-->
<!--</script>-->

<style>
    html,
    body {
        height: 100%;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    body {
        margin: 0;
        background-color: #20262e;
        overflow: hidden;
    }

    #app .vue-tinder {
        /*position: absolute;*/
        /*z-index: 1;*/
        /*left: 0;*/
        /*right: 0;*/
        /*top: 23px;*/
        /*margin: auto;*/
        /*width: calc(100% - 20px);*/
        /*height: calc(100% - 23px - 65px - 47px - 16px);*/
        /*min-width: 300px;*/
        /*max-width: 355px;*/
        /*max-height: 653px;*/
    }
    .card{
        width: 100%;
        border: none !important;
    }

    iframe {
        margin: auto;
        z-index: 1;
        width: 1000px;
        height: 1000px;
    }

    #deck {
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 23px;
        margin: auto;
        width: calc(100% - 20px);
        height: calc(100% - 23px - 65px - 47px - 16px);
        min-width: 300px;
        max-width: 355px;
        max-height: 653px;
    }

    .btns {
        position: absolute;
        /*top: calc(100% - 23px - 65px - 47px - 16px);*/
        left: 0;
        right: 0;
        bottom: 30px;
        margin: auto;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 300px;
        max-width: 355px;
    }

    .nope-pointer,
    .like-pointer {
        position: absolute;
        z-index: 1;
        top: 20px;
        width: 64px;
        height: 64px;
    }

    .nope-pointer {
        right: 10px;
    }

    .like-pointer {
        left: 10px;
    }

    .super-pointer {
        position: absolute;
        z-index: 1;
        bottom: 80px;
        left: 0;
        right: 0;
        margin: auto;
        width: 112px;
        height: 78px;
    }

    .rewind-pointer {
        position: absolute;
        z-index: 1;
        top: 20px;
        right: 10px;
        width: 112px;
        height: 78px;
    }

    .pic {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
    }

    .parent {
        z-index: 1;
        /*position: relative;*/
    }

    .child {
        position: absolute;
        bottom: 0;
    }
    .card-img-top{
        height: max-content;
        max-width: 100%;
        max-height: 254px;
    }

    .btns img {
        margin-right: 12px;
        box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
        border-radius: 50%;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .btns img:nth-child(2n + 1) {
        width: 53px;
    }

    .btns img:nth-child(2n) {
        width: 65px;
    }

    .btns img:nth-last-child(1) {
        margin-right: 0;
    }
</style>

