<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 体质
                </el-breadcrumb-item>
                <el-breadcrumb-item>体质表单</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="120px">
                    <el-form-item label="体质名称" required>
                        <el-input v-model="form.title"></el-input>
                    </el-form-item>  
                    <el-form-item label="体质唯一标识" required>
                        <el-input v-model="form.uni_key"></el-input>
                    </el-form-item> 
                    <el-form-item label="常见人群" required>
                        <el-input type="textarea" v-model="form.common_crowd"></el-input>
                    </el-form-item> 
                    <el-form-item label="常见表现" required>
                        <el-input type="textarea" v-model="form.common_manifestations"></el-input>
                    </el-form-item>  
                    <el-form-item label="主要调养方式" required>
                        <el-input type="textarea" v-model="form.nursing_way_key"></el-input>
                    </el-form-item>
                    <el-form-item label="调养方式" required>
                        <el-input type="textarea" v-model="form.nursing_way"></el-input>
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
import {addBody} from '../../api/admin'
export default {
    name: 'baseform',
    data() {
        return {
            
            form: {
                title: '',
                uni_key: '',
                common_manifestations:'',
                physical_characteristics:'',
                mental_characteristics:'',
                psychological_characteristics:'',
                nursing_way:'',
                fangji_key:''
                
            }
        };
    },
    methods: {
        onSubmit() {            
            this.$refs.form.validate(async valid => {
                if (valid) {
                    try{
                        const response = await addBody({...this.form})
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