<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 药膳
                </el-breadcrumb-item>
                <el-breadcrumb-item>药膳表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="名称" required>
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>  
                    
                    <el-form-item label="描述" required>
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
import {addFood} from '../../api/admin'
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
                        const response = await addFood({
                            title: this.form.title,
                            description: this.form.description,
                            
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