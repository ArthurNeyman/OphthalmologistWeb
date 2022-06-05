<template>
  <div class="doctors">
    <div class="doctors-header">
      <div class="doctors-header-types">
        <div :class="type === 'surgeon' ? 'doctors-header-types-surgeon-active' : 'doctors-header-types-surgeon'"
             @click.stop="changeType('surgeon')">ХИРУРГИЧЕСКОЕ ОТДЕЛЕНИЕ
        </div>
        <div :class="type === 'tomography' ? 'doctors-header-types-tomography-active' : 'doctors-header-types-tomography'"
             @click.stop="changeType('tomography')">ОПТИЧЕСКАЯ КОГЕРЕНТНАЯ ТОМОГРАФИЯ
        </div>
      </div>
      <div class="doctors-header-search">
        <input type="text" placeholder="Введите название услуги" class="doctors-header-search-input">
      </div>
    </div>
    <div class="doctors-content">
      <div class="doctors-content-card">
        <div class="doctors-content-card-image">
          <img src="../assets/doctor_photo.svg" alt="">
        </div>
        <div class="doctors-content-card-title">
          Иванова <br> Ева Ивановна
          <img src="../assets/account_circle.svg" alt="">
        </div>
        <div class="doctors-content-card-position">Хирург-офтальмолог</div>
        <div class="doctors-content-card-buttons">
          <div class="doctors-content-card-buttons-question">РАСПИСАНИЕ</div>
          <div class="doctors-content-card-buttons-details">ЗАДАТЬ ВОПРОС</div>
        </div>
      </div>
      <div class="doctors-content-card">
        <div class="doctors-content-card-image">
          <img src="../assets/doctor_photo.svg" alt="">
        </div>
        <div class="doctors-content-card-title">
          Иванова <br> Ева Ивановна
          <img src="../assets/account_circle.svg" alt="">
        </div>
        <div class="doctors-content-card-position">Хирург-офтальмолог</div>
        <div class="doctors-content-card-buttons">
          <div class="doctors-content-card-buttons-question">РАСПИСАНИЕ</div>
          <div class="doctors-content-card-buttons-details">ЗАДАТЬ ВОПРОС</div>
        </div>
      </div>
      <div class="doctors-content-card">
        <div class="doctors-content-card-image">
          <img src="../assets/doctor_photo.svg" alt="">
        </div>
        <div class="doctors-content-card-title">
          Иванова <br> Ева Ивановна
          <img src="../assets/account_circle.svg" alt="">
        </div>
        <div class="doctors-content-card-position">Хирург-офтальмолог</div>
        <div class="doctors-content-card-buttons">
          <div class="doctors-content-card-buttons-question">РАСПИСАНИЕ</div>
          <div class="doctors-content-card-buttons-details">ЗАДАТЬ ВОПРОС</div>
        </div>
      </div>
      <div class="doctors-content-card">
        <div class="doctors-content-card-image">
          <img src="../assets/doctor_photo.svg" alt="">
        </div>
        <div class="doctors-content-card-title">
          Иванова <br> Ева Ивановна
          <img src="../assets/account_circle.svg" alt="">
        </div>
        <div class="doctors-content-card-position">Хирург-офтальмолог</div>
        <div class="doctors-content-card-buttons">
          <div class="doctors-content-card-buttons-question">РАСПИСАНИЕ</div>
          <div class="doctors-content-card-buttons-details">ЗАДАТЬ ВОПРОС</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Doctors",
  data() {
    return {
      type: 'surgeon',
    }
  },
  methods: {
    changeType(type) {
      this.type = type;
    }
  }
}
</script>

<style scoped lang="scss">
.doctors {
  margin-top: 120px;
  width: 100%;

  &-header {
    background: white;
    box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    height: 48px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-types {
      display: flex;
      align-items: center;

      &-tomography, &-surgeon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 380px;
        height: 48px;
        color: black;
        font-size: 18px;
        cursor: pointer;

        &-active {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 380px;
          height: 48px;
          color: rgba(0, 173, 168, 0.87);
          border-bottom: 2px solid rgba(0, 173, 168, 0.87);
          font-size: 18px;
          cursor: default;
        }
      }
    }

    &-search {
      margin-right: 14px;

      &-input {
        width: 282px;
        height: 33px;
        border-radius: 4px;
        display: flex;
        border: unset;
        outline: none;
        padding: 0 10px;
        background: url("../assets/search_ic.svg") #F1F1F1 no-repeat right;

        &::placeholder {
          color: rgba(192, 192, 192, 0.87);
          font-size: 14px;
        }
      }
    }
  }

  &-content {
    margin-top: 90px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-card {
      background: white;
      width: 300px;
      height: 400px;
      border-radius: 8px;
      box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.2);
      margin-right: 110px;
      display: flex;
      flex-direction: column;
      align-content: center;
      &-image{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50%;
        img{
          width: 200px;
          height: 200px;
        }
      }
      &-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 15%;
        font-size: 22px;
        padding-left: 20px;
        padding-right: 20px;
        line-height: 23px;
        img{
          width: 40px;
          height: 40px;
        }
      }
      &-position{
        height: 5%;
        padding-left: 20px;
        color: rgba(0, 0, 0, 0.6);
      }
      &-buttons{
        width: 100%;
        height: 30%;
        font-size: 18px;
        color: rgba(0, 173, 168, 0.87);
        padding-left: 20px;
        &-question{
          margin-top: 20px;
        }
        &-details{
          margin-top: 20px;
        }
      }
    }
  }
}
</style>
