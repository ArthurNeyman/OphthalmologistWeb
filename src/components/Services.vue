<template>
  <div class="services">
    <div class="services-header">
      <div class="services-header-types">
        <div :class="type === 'paid' ? 'services-header-types-paid-active' : 'services-header-types-paid'"
             @click.stop="changeType('paid')">ПЛАТНЫЕ УСЛУГИ
        </div>
        <div :class="type === 'free' ? 'services-header-types-free-active' : 'services-header-types-free'"
             @click.stop="changeType('free')">БЕСПЛАТНЫЕ УСЛУГИ
        </div>
      </div>
      <div class="services-header-search">
        <input type="text" placeholder="Введите название услуги" class="services-header-search-input">
      </div>
    </div>
    <div class="services-content">
      <div class="services-content-card">
        <div class="services-content-card-image">
          <img src="../assets/eye_ic.svg" alt="">
        </div>
        <div class="services-content-card-title">
          Факоэмульсификация <br> катаракты
        </div>
        <div class="services-content-card-buttons">
          <div class="services-content-card-buttons-question">ЗАДАТЬ ВОПРОС</div>
          <div class="services-content-card-buttons-details">ПОДРОБНЕЕ</div>
        </div>
      </div>
      <div class="services-content-card">
        <div class="services-content-card-image">
          <img src="../assets/operation_ic.svg" alt="">
        </div>
        <div class="services-content-card-title">
          Амбулаторные <br> операции
        </div>
        <div class="services-content-card-buttons">
          <div class="services-content-card-buttons-question">ЗАДАТЬ ВОПРОС</div>
          <div class="services-content-card-buttons-details">ПОДРОБНЕЕ</div>
        </div>
      </div>
      <div class="services-content-card">
        <div class="services-content-card-image">
          <img src="../assets/pills_ic.svg" alt="">
        </div>
        <div class="services-content-card-title">
          Медикаментозное <br> лечение
        </div>
        <div class="services-content-card-buttons">
          <div class="services-content-card-buttons-question">ЗАДАТЬ ВОПРОС</div>
          <div class="services-content-card-buttons-details">ПОДРОБНЕЕ</div>
        </div>
      </div>
      <div class="services-content-card">
        <div class="services-content-card-image">
          <img src="../assets/eye_ic.svg" alt="">
        </div>
        <div class="services-content-card-title">
          Еще одна <br> услуга
        </div>
        <div class="services-content-card-buttons">
          <div class="services-content-card-buttons-question">ЗАДАТЬ ВОПРОС</div>
          <div class="services-content-card-buttons-details">ПОДРОБНЕЕ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      type: 'paid',
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
.services {
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

      &-paid, &-free {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 48px;
        color: black;
        font-size: 18px;
        cursor: pointer;

        &-active {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 250px;
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
        //background: #F1F1F1;
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
          width: 120px;
          height: 120px;
        }
      }
      &-title{
        width: 100%;
        height: 20%;
        font-size: 22px;
        padding-left: 20px;
      }
      &-buttons{
        width: 100%;
        height: 30%;
        font-size: 20px;
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
