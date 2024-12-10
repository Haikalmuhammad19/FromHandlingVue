<script setup lang="ts">
import { Student } from '../types/student';
import { TransitionGroup } from 'vue';

defineProps<{
  students: Student[];
}>();
</script>

<template>
  <div class="mt-8">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Daftar Siswa</h2>
    <TransitionGroup
      name="list"
      tag="ul"
      class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="student in students"
        :key="student.id"
        class="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
      >
        <h3 class="font-semibold text-lg text-gray-800">{{ student.name }}</h3>
        <div class="text-gray-600">
          <p>Usia: {{ student.age }} tahun</p>
          <p>Gender: {{ student.gender === 'male' ? 'Laki-laki' : 'Perempuan' }}</p>
          <p>Kelas: {{ student.grade }}</p>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>