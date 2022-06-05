<template>
  <div>
    <div class="user">
      <div>
        <div class="field">Фамилия:</div>
        <input type="text" v-model="userInfo.last_name">
      </div>

      <div>
        <div class="field">Имя:</div>
        <input type="text" v-model="userInfo.first_name">
      </div>

      <div>
        <div class="field">Отчество:</div>
        <input type="text" v-model="userInfo.surname">
      </div>

      <div>
        <div class="field">Категория:</div>
        <input type="text" v-model="userInfo.category">
      </div>

      <div>
        <div class="field">Телефон:</div>
        <input type="text" v-model="userInfo.phoneNumber">
      </div>

      <div>
        <div class="field">Должность:</div>
        <input type="text" v-model="userInfo.position">
      </div>

      <div>
        <div class="field">Описание:</div>
        <textarea type="text" v-model="userInfo.description"></textarea>
      </div>

    </div>
    <button class="save" @click.stop="saveUser">Сохранить</button>
  </div>

</template>

<script>
export default {
  name: 'UserAdd',
  data(){
    return{
      userInfo: {
        last_name: '',
        first_name: '',
        surname: '',
        category: '',
        phoneNumber: '',
        position: '',
        description: '',
      }
    }
  },
  methods: {
    async saveUser(){
      try {
        await fetch(`http://82.179.9.51:8080/api/editor/add-doctor`,{
          method: 'GET',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...this.userInfo
          }),
        })
      } catch (e) {
        console.error(e);
      }
    }
  },
}
</script>

<style scoped lang="scss">
.user{
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 24px;
}

.field{
  margin-bottom: 8px;
}

.save{
  height: 49px;
  width: 250px;
  color: #fff;
  margin-top: 50px;
  background: #00ADA8;
  border: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
}
input {
  border: none;
  border-radius: 4px;
  height: 32px;
  width: 250px;
  padding-left: 8px;
  background: lightblue;
}

input:focus {
  outline: 2px solid #00ADA8;
}

textarea{
  min-width: 530px;
  max-width: 50%;
  min-height: 125px;
  resize: none;
}
</style>