<template>
<div class="wrap">
    <Headers />
    <transition name="slide-fade">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>
import Headers from './components/header';

import './assets/css/base.css';
import './assets/css/common.css';
import './assets/css/trans.css';
import './assets/css/head.css';
import './assets/css/crumbs.css';

export default {
    name: 'app',
    components: {
        Headers
    },
    data() {
        return {

        }
    },
    methods: {
    }
}
</script>
