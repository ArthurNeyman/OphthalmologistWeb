<template>
  <div>
    <div class="add-user" @click.stop="addUser">
      <span>Добавить пользователя</span>
      <img src="../../assets/plus-icon.png" alt="">
    </div>
    <div class="users">
      <div v-for="(user, idx) in users" :key="idx" class="users-item">
        <span>{{ user.last_name + ' ' + user.first_name + ' ' + user.surname}}</span>
        <div class="users-item-buttons">
          <img src="../../assets/edit-icon.png" alt="" @click.stop="openUserProfile(user.id)">
          <img src="../../assets/delete-icon.png" @click.stop="deleteUser(user.id)" style="background: transparent" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageUsers',
  data() {
    return{
      users: []
    }
  },
  methods: {
    async getUsers(){
      try {
        await fetch('http://82.179.9.51:8080/api/user/doctors',{
          method: 'GET'
        }).then((response) => {
          return response.json();
        })
            .then((data) => {
              this.users = data
            });
      } catch (e) {
        console.error(e);
      }
    },

    addUser(){
      this.$router.push({ name: 'user-add'})
    },

    openUserProfile(id){
      this.$router.push({ name: 'user', params: { id } })
    },

    async deleteUser(id){
      try {
        await fetch('http://82.179.9.51:8080/api/editor/delete-doctor',{
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            doctorId: id
          }),
        }).then((response) => {
          return response.json();
        }).then((data) => {
          this.users = data
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
  created() {
    this.getUsers()
  }
}
</script>

<style scoped lang="scss">
img{
  width: 36px;
  height: 36px;
  margin-right: 16px;
}

.users{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 24px;
  &-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-column: span 6;
    padding: 24px;
    box-shadow: 10px 5px 5px rgba(0, 173, 168, 0.44);
    background: rgba(0, 173, 168, 0.44);
    border-radius: 8px;
    &-buttons{
      img{
        cursor: pointer;
      }
    }
  }
}

.add-user{
  width: 456px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #00ADA8;
  border-radius: 10px;
  cursor: pointer;
  font-size: 26px;
  margin-bottom: 40px;
  span{
    margin-left: 16px;
  }
  &:hover{
    background: #00ADA8;
    color: white;
  }
}
</style>