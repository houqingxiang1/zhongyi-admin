<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                
            </el-col>
            <el-col :span="24">
                <el-row :gutter="20" class="mgb20">
                    
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-1">
                                <i class="el-icon-s-data grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ dashboardData.questionTotal }}</div>
                                    <div>题库数量</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                    <!-- <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-3">
                                <i class="el-icon-aim grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ dashboardData.symptomTotal }}</div>
                                    <div>症候</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col> -->
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-2">
                                <i class="el-icon-user grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ dashboardData.bodyTotal }}</div>
                                    <div>体质</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                   
                    
                    <el-col :span="6">
                        <el-card shadow="hover" :body-style="{padding: '0px'}">
                            <div class="grid-content grid-con-4">
                                <i class="el-icon-food grid-con-icon"></i>
                                <div class="grid-cont-right">
                                    <div class="grid-num">{{ dashboardData.treatmentTotal }}</div>
                                    <div>方剂</div>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
               
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <!-- <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="bar" class="schart" canvasId="bar" :options="options"></schart>
                </el-card>
            </el-col> -->
            <!-- <el-col :span="12">
                <el-card shadow="hover">
                    <schart ref="line" class="schart" canvasId="line" :options="options2"></schart>
                </el-card>
            </el-col> -->
        </el-row>
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
</style>
