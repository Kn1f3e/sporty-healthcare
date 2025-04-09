import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../views/MainHome.vue';
import DoctorProfile from '../views/DoctorProfile.vue';
import PatientProfile from '../views/PatientProfile.vue';
import UserAppointments from '../views/UserAppointments.vue';

const routes = [
  { path: '/', name: 'Home', component: MainHome },
  { path: '/doctors', name: 'Doctors', component: MainHome },
  { path: '/doctor-profile/:id', name: 'DoctorProfile', component: DoctorProfile },
  { path: '/patient/:id', name: 'PatientProfile', component: PatientProfile },
  { path: '/appointments', name: 'Appointments', component: UserAppointments },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


