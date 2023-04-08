<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 问题
                </el-breadcrumb-item>
                <el-breadcrumb-item>问题表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="问题名称" required>
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>  
                    <el-form-item label="问题唯一标识" required>
                        <el-input v-model="form.uni_key"></el-input>
                    </el-form-item> 
                    <el-form-item label="是否显示程度">
                        <el-switch v-model="form.level"></el-switch>
                    </el-form-item>   
                    <el-form-item label="问题答案选项" required >
                        <el-input type="textarea" v-model="form.options"></el-input>
                    </el-form-item> 
                    <el-form-item label="问题答案描述">
                        <el-input type="textarea" v-model="form.description"></el-input>
                    </el-form-item> 
                    <el-form-item label="对应体质">
                        <el-input v-model="form.uni_body_key"></el-input>
                    </el-form-item>  
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                       
                    </el-form-item>                 
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import {addQuestion} from '../../api/admin'
export default {
    name: 'baseform',
    data() {
        return {
            
            form: {
                title: '',
                uni_key: '',
                description: '',
                uni_body_key:'',
                level: false,
                options: ""
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    try{
                        const response = await addQuestion({
                        ...this.form
                    })
                        this.$message.success('添加成功');
                        
                    }catch(err){
                        this.$message.error('添加失败');
                    }
                    
                } else {
                    this.$message.error('添加失败');
                    return false;
                }
            });
        }
    }
};
</script>