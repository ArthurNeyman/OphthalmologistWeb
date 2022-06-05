<template>
  <div class="main-info">
    <div class="main-info-department">Отделение офтальмологии</div>
    <div class="main-info-clinic">Кузбасской клинической <br> больницы им. С.В. Беляева</div>
    <div class="main-info-biggest">Крупнейшее медицинское <br> учреждение региона!</div>
    <div class="main-info-sign">Записаться</div>
  </div>
</template>

<script>
export default {
  name: "MainPage"
}
</script>

<style scoped lang="scss">
.main-info{
  margin-top: 200px;
  &-department{
    font-size: 42px;
    color: rgba(0, 173, 168, 0.87);
  }
  &-clinic{
    font-size: 42px;
  }
  &-biggest{
    margin-top: 41px;
    font-size: 34px;
  }
  &-sign{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 82px;
    width: 197px;
    height: 58px;
    background: #00ADA8;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-size: 26px;
  }

}
</style>
