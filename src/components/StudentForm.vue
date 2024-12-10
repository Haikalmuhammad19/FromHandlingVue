<script setup lang="ts">
import { ref } from 'vue';
import { StudentFormData } from '../types/student';
import FormInput from './form/FormInput.vue';
import FormSelect from './form/FormSelect.vue';
import FormRadio from './form/FormRadio.vue';

const emit = defineEmits<{
  (e: 'submit', data: StudentFormData): void;
}>();

const formData = ref<StudentFormData>({
  name: '',
  age: 0,
  gender: 'male',
  grade: '10'
});

const grades = ['10', '11', '12'];

const handleSubmit = () => {
  emit('submit', { ...formData.value });
  formData.value = {
    name: '',
    age: 0,
    gender: 'male',
    grade: '10'
  };
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Data Siswa Baru</h2>
    
    <FormInput
      v-model="formData.name"
      label="Nama"
      type="text"
      required
    />

    <FormInput
      v-model.number="formData.age"
      label="Usia"
      type="number"
      min="1"
      required
    />

    <FormRadio
      v-model="formData.gender"
      label="Gender"
      :options="[
        { value: 'male', label: 'Laki-laki' },
        { value: 'female', label: 'Perempuan' }
      ]"
    />

    <FormSelect
      v-model="formData.grade"
      label="Kelas"
      :options="grades"
    />

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors mt-6"
    >
      Tambah Siswa
    </button>
  </form>
</template>