<template>
    <div>
        <template>
            <Tinder ref="tinder" key-name="id" id="deck" :queue.sync="queue" :offset-y="10"
                    @submit="onSubmit">
                <template slot-scope="scope" class=".vue-tinder">
                    <div class="pic">
                        <div class="card">
                            {{scope.data.CONTENT}}
<!--                            <div class="card-body"-->
<!--                                 style="color: black;text-align: center;font-size: 14px;overflow-y: hidden;">-->
<!--                                <h3 class="card-title">{{ scope.data.item.Title }}</h3>-->
<!--                                <div style="text-overflow: ellipsis;-->
<!--                                text-align: left;-->
<!--                                overflow: hidden;display: -webkit-box;-webkit-line-clamp: 2; /* number of lines to show */-webkit-box-orient: vertical;"-->
<!--                                     class="card-text">-->
<!--                                    <div v-if="scope.data.item.Summary<350"> {{ scope.data.item.Summary-->
<!--                                        }}-->
<!--                                    </div>-->
<!--                                    <div v-else>{{ scope.data.item.Summary.substring(0,350)+".." }}-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </div>-->
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
    import Tinder from "vue-tinder";
    import Vue from 'vue'
    import cards from '../decks/bedsheet.json';
    import VueFriendlyIframe from 'vue-friendly-iframe';
    import VueFullPage from 'vue-fullpage.js'

    Vue.use(VueFriendlyIframe);
    Vue.use(VueFullPage);

    export default {
        name: "Deck",
        components: {Tinder},
        data: () => ({
            queue: cards,
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
            this.$nextTick(() => {
                window.addEventListener('resize', this.onResize);
            });
        },
        created() {
            this.getCards();
        },
        methods: {
            async getCards(count = 10, append = true) {
                this.queue = this.queue.concat(cards);
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

