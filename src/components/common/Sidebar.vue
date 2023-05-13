<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: 'dashboard',
                    title: '系统首页'
                },
                
                {
                    icon: 'el-icon-lx-calendar',
                    index: '1',
                    title: '体质辨识',
                    subs:[{
                        icon: 'el-icon-s-data',
                        index: 'question-data',
                        title: '题库数据'
                    },
                    
                    {
                        icon: 'el-icon-user',
                        index: 'tizhi-data',
                        title: '体质数据'
                    },{
                            index: 'tiku',
                            title: '题库数据管理'
                        },
                        
                        {
                            index: 'tizhi',
                            title: '体质数据管理'
                        },]
                },
                {
                    icon: 'el-icon-bangzhu',
                    index: '2',
                    title: '健康养生数据管理',
                    subs:[{
                        icon: 'el-icon-food',
                        index: 'treatment-category-data',
                        title: '方剂分类数据'
                    }, {
                        icon: 'el-icon-food',
                        index: 'treatment-data',
                        title: '方剂数据'
                    }, {
                        icon: 'el-icon-food',
                        index: 'xuewei-category-data',
                        title: '穴位分类数据'
                    },{
                        icon: 'el-icon-food',
                        index: 'xuewei-data',
                        title: '穴位数据'
                    },{
                        icon: 'el-icon-food',
                        index: 'jingluo-data',
                        title: '经络数据'
                    },{
                        icon: 'el-icon-food',
                        index: 'food-data',
                        title: '药膳数据'
                    },{
                        icon: 'el-icon-aim',
                        index: 'reference-data',
                        title: '临证数据'
                    }]
                },
                {
                    icon: 'el-icon-s-management',
                    index: '3',
                    title: '数据添加',
                    subs: [
                        // {
                        //     index: 'tiku',
                        //     title: '题库'
                        // },
                        
                        // {
                        //     index: 'tizhi',
                        //     title: '体质'
                        // },
                        {
                            index: 'treatment',
                            title: '方剂'
                        },
                        {
                            index: 'reference',
                            title: '临证'
                        },
                        {
                            index: 'treatment-category',
                            title: '方剂分类'
                        },{
                            index: 'jingluo',
                            title: '经络'
                        },
                        {
                            index: 'xuewei-category',
                            title: '穴位分类'
                        },
                        {
                            index: 'xuewei',
                            title: '穴位'
                        },
                        {
                            index: 'food',
                            title: '药膳'
                        }
                        
                    ]
                },

            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
