<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 用户管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">                
                <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border
                class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <!-- <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column> -->
                <el-table-column prop="name" label="用户名"></el-table-column>
                <!-- <el-table-column prop="role_id" label="角色"> -->
                    <!-- <template slot-scope="scope">{{scope.row.role_id === 1?'管理员':'普通用户'}}</template>
                </el-table-column> -->
                
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        
                        <el-button
                            type="text"
                            icon="el-icon-delete"
                            class="red"
                            @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="80%">
            <el-form ref="form" :model="form" label-width="130px">
                <el-form-item label="名称">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="唯一ID" required>
                    <el-input v-model="form.uni_key"></el-input>
                </el-form-item>  
                <el-form-item label="描述">
                    <el-input type="textarea" :rows="6" v-model="form.description"></el-input>
                </el-form-item>
                
               
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { getAccount, deleteAccount } from '../../api/admin';
export default {
    name: 'basetable',
    data() {
        return {
           
            tableData: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1
        };
    },
    created() {
        this.handleSearch();
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        
        // 获取 easy-mock 的模拟数据
        async getData() {
            const {data} = await getAccount()
            return data
        },
        // 触发搜索按钮
        async handleSearch() {
            const data = await this.getData();
            this.tableData = data.list;
            this.pageTotal = data.total || 0;
        },
        // 删除操作
         handleDelete(index, row) {
            // 二次确认删除
            if(this.username !== 'admin'){
                this.$message.error('只有admin用户可以删除其他用户');
                return
            }
            if(row.name === 'admin'){
                this.$message.error('不能删除admin用户');
                return
            }
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(async() => {
                    await deleteAccount(row.id)
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        
        
        // 分页导航
        handlePageChange(val) {
            // this.$set(this.query, 'pageIndex', val);
            // this.getData();
        }
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
.single{
    overflow:hidden;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>
