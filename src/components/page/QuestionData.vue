<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 问题列表
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
                <el-table-column prop="title" label="问题"></el-table-column>
                <el-table-column label="答案">
                    <template slot-scope="scope">{{`${scope.row.options.join()}`}}</template>
                </el-table-column>
                <el-table-column label="是否显示程度">
                    <template slot-scope="scope">{{`${scope.row.level}`}}</template>
                </el-table-column>
                
                <el-table-column prop="uni_body_key" label="对应体质ID"></el-table-column>
                
                
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button>
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
                <el-form-item label="名称" required>
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="唯一ID" required>
                    <el-input v-model="form.uni_key"></el-input>
                </el-form-item>
                <el-form-item label="问题答案选项" required>
                    <el-input type="textarea" v-model="form.options"></el-input>
                </el-form-item>
                <el-form-item label="问题答案描述">
                        <el-input type="textarea" v-model="form.description"></el-input>
                    </el-form-item>
                <el-form-item label="是否显示程度">
                    <el-switch v-model="form.level"></el-switch>
                </el-form-item> 

                <el-form-item label="体质唯一标识">
                    <el-input v-model="form.uni_body_key"></el-input>
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
import { getQuestionList, updateQuestion, deleteQuestion } from '../../api/admin';
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
    methods: {
        
        // 获取 easy-mock 的模拟数据
        async getData() {
            const {data} = await getQuestionList()
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
            this.$confirm('确定要删除吗？', '提示', {
                type: 'warning'
            })
                .then(async() => {
                    await deleteQuestion(row.id)
                    this.$message.success('删除成功');
                    this.tableData.splice(index, 1);
                })
                .catch(() => {});
        },
        // 多选操作
        
        
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = {
                ...row,
                options: row.options.join("\n"),
               
            };
            this.editVisible = true;
        },
        // 保存编辑
        async saveEdit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    this.editVisible = false;
                    const newData = {
                        ...this.form,
                        options: this.form.options.split('\n'),                
                    }            
                     this.$set(this.tableData, this.idx, newData);
                    await  updateQuestion(this.form)
                     this.$message.success(`修改第 ${this.idx + 1} 行成功`);
                        
                    } else {
                        this.$message.error('添加失败');
                        return false;
                    }
            });            
            
        },
        
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
</style>
