<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="Full Name">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="ID">
      <el-input v-model="form.ID" />
    </el-form-item>

    <el-form-item label="Contract Type">
      <el-select v-model="form.type" placeholder="please select your contract type">
        <el-option label="private" value="private" />
        <el-option label="public" value="public" />
      </el-select>
    </el-form-item>

    <el-form-item label="Contract Date">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
          value-format="YYYY-MM-DD"
        />
    </el-form-item>

    <el-form-item label="In Work">
      <el-switch v-model="form.inWork" />
    </el-form-item>

    <el-form-item label="Skils">
      <el-checkbox-group v-model="form.skils">
        <el-checkbox label="HTML" name="skils" />
        <el-checkbox label="CSS" name="skils" />
        <el-checkbox label="JS" name="skils" />
      </el-checkbox-group>
    </el-form-item>

    <el-form-item label="Gender">
      <el-radio-group v-model="form.gender">
        <el-radio label="Male" />
        <el-radio label="Female" />
      </el-radio-group>
    </el-form-item>

    <el-form-item label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>

      <el-button type="primary" @click="onSubmit">Add User</el-button>
      
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

import type { User } from '@/stores/myStore'

import { useMyStore } from '@/stores/myStore'

const store = useMyStore()


const form: User = reactive({
  name: '',
  ID: '',
  type: '',
  date: '',
  inWork: false,
  skils: [],
  gender: '',
  desc: '',
})

const onSubmit = () => {
  store.createNewUser(form)
  router.push('/viewuser')
}
</script>