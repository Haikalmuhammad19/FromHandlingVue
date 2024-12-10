export interface Student {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  grade: string;
}

export interface StudentFormData {
  name: string;
  age: number;
  gender: 'male' | 'female';
  grade: string;
}