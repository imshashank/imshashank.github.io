<template>
    <div>
        <template>
            <Tinder ref="tinder" key-name="id" id="deck" :queue.sync="queue" :offset-y="10"
                    @submit="onSubmit">
                <template slot-scope="scope" class=".vue-tinder">
                    <div class="pic">
                        <div class="card vertical-center">
                            <div class="card-body"
                                 style="color: black;text-align: center;font-size: 14px;overflow-y: hidden;">
                                <p>{{$route.params.id}}</p>
                                <div v-if="scope.data.item.content" class="card-img-top"
                                     v-html="span(scope.data.item.content)"/>
                                <h3 class="card-title">{{ scope.data.item.title }}</h3>
                                <!--                                <div style="text-overflow: ellipsis;-->
                                <!--                                                            text-align: left;-->
                                <!--                                                            overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2; /* number of lines to show */-webkit-box-orient: vertical;"-->
                                <!--                                     class="card-text">-->
                                <!--&lt;!&ndash;                                    <div v-if="scope.data.item.Summary<350"> {{ scope.data.item.Summary&ndash;&gt;-->
                                <!--&lt;!&ndash;                                        }}&ndash;&gt;-->
                                <!--&lt;!&ndash;                                    </div>&ndash;&gt;-->
                                <!--&lt;!&ndash;                                    <div v-else>{{ scope.data.item.Summary.substring(0,350)+".." }}</div>&ndash;&gt;-->


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
    import Tinder from "vue-tinder";
    import Vue from 'vue'
    import cards from './decks/bedsheet.json';
    import intro from './decks/start.json';
    import VueFriendlyIframe from 'vue-friendly-iframe';
    import VueFullPage from 'vue-fullpage.js'

    Vue.use(VueFriendlyIframe);
    Vue.use(VueFullPage);

    export default {
        name: "App",
        components: {Tinder},
        data: () => ({
            queue: [],
            windowHeight: window.innerHeight,
            offset: 0,
            history: [],
            articles: [],
            nextToken: null,
            currentUrl: null,
            isHidden: true
        }),
        mounted() {
            this.init();
            console.log('The id is: ' + this.$route.params.id);
        },
        created() {
            this.getCards();
        },
        methods: {
            init () {
                console.log(this.$route);  //should return object
                console.log(this.$route.params); //should return object
                console.log(this.$route.params.id); //should return id of URL param
            },
            span(text) {
                return `<span> ${text} </span>`
            },
            async getCards() {
                //console.log(this.deck_id);
                const list = []
                let index = 0;
                for (let i = 0; i < intro.deck.length; i++) {
                    list.push({id: index, item: intro.deck[i]});
                    index++;
                }
                for (let i = 0; i < cards.deck.length; i++) {
                    list.push({id: index, item: cards.deck[i]});
                    index++;
                }
                this.queue = this.queue.concat(list);
            },
            onSubmit(item) {
                this.offset++;
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

    .card {
        margin: auto;
        padding: 10px;
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

    .vertical-center {
        margin: 0;
        position: absolute;
        top: 50%;
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
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

    .card-img-top {
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

