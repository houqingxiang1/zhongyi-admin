<template>
    <div>
        <div class="wrap">
            <div class="right-item">
                <div class="item-info">
                    <span>题库数量</span> <span class="number">{{ dashboardData.questionTotal }}</span>
                </div>
            </div>
            <div class="right-item">
                <div class="item-info">
                    <span>体质数量</span> <span class="number">{{ dashboardData. bodyTotal}}</span>
                </div>
            </div>
            <div class="right-item">
                <div class="item-info">
                    <span>方剂数量</span> <span class="number">{{ dashboardData.treatmentTotal }}</span>
                </div>
            </div>
            <div class="right-item">
                <div class="item-info">
                    <span>经络数据</span> <span class="number">{{ dashboardData.jingluo }}</span>
                </div>
            </div>
            <div class="right-item">
                <div class="item-info">
                    <span>穴位数据</span> <span class="number">{{ dashboardData.xuewei }}</span>
                </div>
            </div>
            <div class="right-item">
                <div class="item-info">
                    <span>临证数据</span> <span class="number">{{ dashboardData.reference }}</span>
                </div>
            </div>
            <div class="right-item">
                <div class="item-info">
                    <span>药膳数据</span> <span class="number">{{ dashboardData.food }}</span>
                </div>
            </div>
        </div>
        <!-- questionTotal,
            bodyTotal,
            symptomTotal,
            treatmentTotal,
            jingluo,
            xuewei,
            reference,
            treatment,
            food -->
        
    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
import {dashboard} from '../../api/admin'
export default {
    name: 'dashboard',
    data() {
        return {
           name: localStorage.getItem('ms_username'),
           dashboardData: {}          
        };
    },
    components: {
        Schart
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    async created() {
     const {data} = await dashboard()
     this.dashboardData = data
    },
    
    methods: {
        
        
    }
};
</script>


<style scoped>
.el-row {
    margin-bottom: 20px;
}

.grid-content {
    display: flex;
    align-items: center;
    height: 100px;
}

.grid-cont-right {
    flex: 1;
    text-align: center;
    font-size: 14px;
    color: #999;
}

.grid-num {
    font-size: 30px;
    font-weight: bold;
}

.grid-con-icon {
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #fff;
}

.grid-con-1 .grid-con-icon {
    background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
    color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
    background:#F56C6C;
}

.grid-con-2 .grid-num {
    color: #F56C6C;
}

.grid-con-3 .grid-con-icon {
    background: #E6A23C;
}

.grid-con-3 .grid-num {
    color: #E6A23C;
}
.grid-con-4 .grid-con-icon {
    background: #3ce69a;
}
.grid-con-4 .grid-num {
    color: 3ce69a;
}

.user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
    margin-bottom: 20px;
}

.user-avator {
    width: 120px;
    height: 120px;
    border-radius: 50%;
}

.user-info-cont {
    padding-left: 50px;
    flex: 1;
    font-size: 14px;
    color: #999;
}

.user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
}

.user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
}

.user-info-list span {
    margin-left: 70px;
}

.mgb20 {
    margin-bottom: 20px;
}

.todo-item {
    font-size: 14px;
}

.todo-item-del {
    text-decoration: line-through;
    color: #999;
}

.schart {
    width: 100%;
    height: 300px;
}
.right-item{
    display: flex;
    padding: 36px 20px;
    align-items: center;
    /* width: 200px; */
    height: 80px;
    border-radius: 4px;
    box-shadow: 0 6px 12px 0 hsl(215deg 9% 63% / 20%);
    background-color: #fff;
    box-sizing: border-box;
    margin-left: 12px;
    margin-bottom: 12px;
    justify-content: space-between;
    cursor: pointer;
}
.number{
    font-size: 24px;
    font-weight: bold;
    color: #2d8cf0;
}
.item-info{
    display: flex;
    flex-direction: column;
}
.wrap{
    display: grid;
    grid-template-columns:repeat(5,1fr);
}
</style>
