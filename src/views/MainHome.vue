<template>
  <div class="main-home">
    <h1 class="title">Добро пожаловать на сайт спортивного врачевания!</h1>
    <p class="description">Это главная страница, выберите необходимый раздел.</p>

    <div class="button-group">
      <router-link to="/doctors" class="btn">Список врачей</router-link>
      <router-link to="/patient-profile" class="btn">Ваш профиль</router-link>
      <router-link to="/user-appointments" class="btn">Ваши записи</router-link>
    </div>

    <!-- Список врачей -->
    <div v-if="$route.path === '/doctors'" class="doctors-list">
      <h2>Список врачей</h2>
      <div class="card-container">
        <div class="doctor-card" v-for="doctor in doctors" :key="doctor.id">
          <h3>{{ doctor.name }}</h3>
          <p>Специальность - {{ doctor.specialty }}</p>
          <router-link :to="{ name: 'DoctorProfile', params: { id: doctor.id } }" class="card-btn">Подробнее</router-link>
        </div>
      </div>
    </div>

    <!-- Профиль пациента -->
    <div v-if="$route.path === '/patient-profile'" class="patient-profile">
      <h2>Ваш профиль</h2>
      <div class="profile-card">
        <h3>Имя - Иванов Иван Иванович</h3>
        <p>Возраст - 30 лет</p>
        <p>Контактный номер - +79991234567</p>
        <p>Email - ivanov@mail.ru</p>
      </div>
    </div>

    <!-- Записи пользователя -->
    <div v-if="$route.path === '/user-appointments'" class="appointments-list">
      <h2>Ваши записи</h2>
      <div class="card-container">
        <div class="appointment-card" v-for="(appointment, index) in appointments" :key="index">
          <h3>Запись к - {{ appointment.doctor }}</h3>
          <p>Дата: {{ appointment.date }}</p>
          <p>Время: {{ appointment.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHome',
  data() {
    return {
      doctors: [
        { id: 1, name: 'Доктор Иванов', specialty: 'терапевт' },
        { id: 2, name: 'Доктор Петров', specialty: 'хирург' },
        { id: 3, name: 'Доктор Сидоров', specialty: 'кардиолог' },
      ],
      appointments: [
        { doctor: 'Доктор Иванов', date: '10.04.2025', time: '12:00' },
        { doctor: 'Доктор Петров', date: '11.04.2025', time: '10:00' },
      ],
    };
  },
};
</script>

<style scoped>
.main-home {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.title {
  color: #343a40;
  font-size: 2rem;
  text-align: center;
}

.description {
  color: #666;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.btn {
  display: block;
  width: 200px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

.doctors-list,
.appointments-list,
.patient-profile {
  margin-top: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.doctor-card {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 20px;
  width: calc(33.333% - 20px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
}

.doctor-card:hover {
  transform: scale(1.05);
}

.card-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}

.card-btn:hover {
  background-color: #218838;
}

.profile-card {
  background: #e7f3ff;
  border: 1px solid #007bff;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  width: 80%;
}

.appointment-card {
  background: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 10px;
  padding: 20px;
  width: calc(33.333% - 20px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
}

.appointment-card:hover {
  transform: scale(1.05);
}
</style>
