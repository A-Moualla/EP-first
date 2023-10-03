<template>
  
  <el-container>
      <el-header class="success">
        
        <el-menu
          default-active="2"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item index="1" @click="toggleDark()">LOGO</el-menu-item>
          <el-menu-item index="2" @click="myRouter('')">Home</el-menu-item>
          <el-menu-item index="3" @click="myRouter('about')">About</el-menu-item>
        </el-menu>
      </el-header>

      <el-container>
        <el-aside width="200px">
            <el-menu
              default-active="1"
            >
              <el-menu-item index="1" @click="myRouter('')">
                <el-icon><House /></el-icon>
                <template #title>Home</template>
              </el-menu-item>
              <el-sub-menu index="2">
                <template #title>
                  <el-icon><IconMenu /></el-icon>
                  <span>Users</span>
                </template>
                  <el-menu-item index="2-1" @click="myRouter('adduser')">Add User</el-menu-item>
                  <el-menu-item index="2-2" @click="myRouter('viewuser')">View All Users</el-menu-item>
              </el-sub-menu>
              <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <template #title>tables</template>
              </el-menu-item>
              <el-menu-item index="4" @click="myRouter('about')">
                <el-icon><Warning /></el-icon>
                <template #title>About </template>
              </el-menu-item>
            </el-menu>

        </el-aside>

        <el-main> <RouterView /></el-main>


      </el-container>
    </el-container>

</template>

<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);


import { useRouter } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  House,
  Warning,
} from '@element-plus/icons-vue'

const router = useRouter()
const myRouter = (path: String) => {
router.push(`/${path}`)
}

</script>


