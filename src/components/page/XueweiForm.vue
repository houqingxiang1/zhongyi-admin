<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 穴位
                </el-breadcrumb-item>
                <el-breadcrumb-item>穴位表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="穴位名称" required>
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>  
                    <el-form-item label="穴位唯一标识" required>
                        <el-input v-model="form.uni_key"></el-input>
                    </el-form-item>   
                    <el-form-item label="穴位分类ID" required>
                        <el-input v-model="form.category_key"></el-input>
                    </el-form-item>  
                    <el-form-item label="穴位分类名称" required>
                        <el-input v-model="form.category_name"></el-input>
                    </el-form-item>   
                    <el-form-item label="封面图片" required>
                        <el-input type="textarea" v-model="form.poster"></el-input>
                    </el-form-item> 
                    <el-form-item label="穴位描述" required>
                        <el-input type="textarea" v-model="form.description"></el-input>
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
import {addXuewei} from '../../api/admin'
export default {
    name: 'baseform',
    data() {
        return {            
            form: {
                title: '',
                uni_key: '',
                category_key:'',
                poster: '',
                description: '',
                category_name:''              
            }
        };
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(async valid => {
                if (valid) {
                    try{
                        const response = await addXuewei({
                            title: this.form.title,
                            description: this.form.description,
                            uni_key: this.form.uni_key,
                            category_key: this.form.category_key,
                            category_name: this.form.category_name,
                            poster: this.form.poster
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