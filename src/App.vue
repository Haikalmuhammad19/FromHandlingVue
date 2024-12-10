<script setup lang="ts">
import { ref } from 'vue';
import StudentForm from './components/StudentForm.vue';
import StudentList from './components/StudentList.vue';
import { Student, StudentFormData } from './types/student';
import { useToast } from 'vue-toastification';

const toast = useToast();
const students = ref<Student[]>([]);

const handleAddStudent = (formData: StudentFormData) => {
  const newStudent: Student = {
    ...formData,
    id: crypto.randomUUID()
  };
  
  students.value.push(newStudent);
  toast.success('Siswa berhasil ditambahkan!');
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8 text-gray-800">
        Manajemen Data Siswa
      </h1>
      
      <StudentForm @submit="handleAddStudent" />
      <StudentList :students="students" />
    </div>
  </div>
</template>