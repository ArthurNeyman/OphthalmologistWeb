<template>
  <div id="admin-layout">
    <div class="sidebar">
      <div class="title">КОКБ <br> Кемерово <br> Администрирование</div>
      <div class="links">
<!--        <router-link class="links-item" to="/admin">Страница "Главная"</router-link>-->
<!--        <router-link class="links-item" to="/admin/about">Страница "О нас"</router-link>-->
<!--        <router-link class="links-item" to="/admin/news">Новости</router-link>-->
        <router-link class="links-item" to="/admin/services">Услуги</router-link>
        <router-link class="links-item" to="/admin/users">Пользователи</router-link>
      </div>

    </div>

    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLayout',
}
</script>

<style scoped lang="scss">

#admin-layout{
  display: flex;
  width: 100vw;
  height: 100vh;
}

.sidebar{
  min-width: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px 10px 0 20px;
  white-space: nowrap;
  box-shadow: 10px 5px 5px grey;
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 40px;
  row-gap: 10px;

  &-item {
    text-decoration: none;
    color: black;
    margin-bottom: 20px;
    font-size: 20px;
    width: fit-content;

    &:hover {
      color: rgba(0, 173, 168, 0.87);
    }
  }
}

.profile {
  cursor: pointer;
}

#content{
  padding: 120px 48px;
  width: 100%;
  height: 100%;
}

.router-link-exact-active{
  color: rgba(0, 173, 168, 0.87);
  border-bottom: 2px solid rgba(0, 173, 168, 0.87);
}

</style>