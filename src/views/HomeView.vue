<template>
   <el-row>
    
    <el-col :span="6">
      <el-statistic :value="store.inWorkUsersCount">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            In Work users 
          </div>
        </template>
        <template #suffix>/{{ store.usersCount }}</template>
      </el-statistic>
    </el-col>
    <el-col :span="6">
      <el-statistic :value="store.menUsersCount">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men
          </div>
        </template>
        <template #suffix>/{{ store.usersCount }}</template>
      </el-statistic>
    </el-col>
    <el-col :span="6">
      <el-statistic :value="store.womenUsersCount">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of women
          </div>
        </template>
        <template #suffix>/{{ store.usersCount }}</template>
      </el-statistic>
    </el-col>

  </el-row>
</template>

<script setup lang="ts">
import { useMyStore } from '@/stores/myStore'
const store = useMyStore()
</script>



