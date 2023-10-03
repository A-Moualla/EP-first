<template>
  <el-table :data="store.users" style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <div>
          <div >Skils: <label v-for="skil in props.row.skils" :key="skil"> '{{ skil }}'</label></div>
          <p >Desc: {{ props.row.desc }}</p>
        </div>
      </template>
    </el-table-column>
    <el-table-column sortable prop="ID" label="ID" width="80" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="type" label="Type" width="120" />
    <el-table-column sortable prop="date" label="Date" width="120" />
    <el-table-column prop="gender" label="Gender" width="120" />
    <el-table-column prop="desc" label="Desc" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="props">
        <el-button link type="primary" size="small" @click="deleteUser(props.row.ID)" >Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { useMyStore } from '@/stores/myStore'
const store = useMyStore()

const deleteUser = (id: string) => {
  
  
  store.deleteUserById(id)
}

</script>
