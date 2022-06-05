<template>
  <div id="main-layout">
    <div class="navbar">
      <div class="title">КОКБ <br> Кемерово</div>
      <div class="links">
        <router-link class="links-item" to="/">Главная</router-link>
        <router-link class="links-item" to="/about">О нас</router-link>
        <router-link class="links-item" to="/news">Новости</router-link>
        <router-link class="links-item" to="/services">Услуги</router-link>
        <router-link class="links-item" to="/doctors">Врачи</router-link>
        <router-link class="links-item" to="/efi">ЭФИ</router-link>
        <router-link class="links-item" to="/enroll">Записаться</router-link>
      </div>
      <div class="prof-notif">
        <img class="bell" src="../assets/bell.svg" alt="">
        <img class="profile" src="../assets/profile_ic.svg" alt="">
      </div>
    </div>
    <div class="right-background">
      <img src="../assets/background_pic.svg" alt="" v-if="!withPicture">
      <img src="../assets/background_doc.svg" alt="" v-if="withPicture">
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  computed: {
    withPicture() {
      return this.$route.meta.withPicture;
    }
  },

}
</script>

<style scoped lang="scss">

#main-layout{
  width: calc(100% - 48px);
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 48px;
}

.title {
  font-weight: bold;
  font-size: 20px;
}

.right-background {
  position: absolute;
  left: 50%;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: -1;
  img{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;

  &-item {
    text-decoration: none;
    color: black;
    margin-right: 60px;
    font-size: 20px;

    &:hover {
      color: rgba(0, 173, 168, 0.87);
    }
  }
}

.bell {
  margin-right: 30px;
  cursor: pointer;
}

.profile {
  cursor: pointer;
}

#content{
  margin: 60px 48px;
  width: 100%;
  height: 100%;
}

.router-link-exact-active{
  color: rgba(0, 173, 168, 0.87);
  border-bottom: 2px solid rgba(0, 173, 168, 0.87);
}


</style>
