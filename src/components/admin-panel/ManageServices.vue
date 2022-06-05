<template>
  <div>
    <div class="add-service" @click.stop="addService">
      <span>Добавить услугу</span>
      <img src="../../assets/plus-icon.png" alt="">
    </div>
    <div class="services">
      <div v-for="(service, idx) in services" :key="idx" class="services-item">
        <span>{{ service.name }}</span>
        <div class="services-item-buttons">
          <img src="../../assets/edit-icon.png" @click.stop="editService(service.id)" alt="">
          <img src="../../assets/delete-icon.png" @click.stop="deleteService(service.id)" style="background: transparent" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ManageServices',
  data() {
    return{
      services: []
    }
  },
  methods: {
    async getServices(){
      try {
        await fetch('http://82.179.9.51:8080/api/user/services',{
          method: 'GET'
        }).then((response) => {
          return response.json();
        })
          .then((data) => {
              this.services = data
          });
      } catch (e) {
        console.error(e);
      }
    },

    addService(){
      this.$router.push({ name: 'service-add'})
    },

    editService(id){
      this.$router.push({ name: 'service-edit', params: { id }})
    },

    async deleteService(id){
      try {
        await fetch('http://82.179.9.51:8080/api/editor/delete-service',{
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            serviceId: id
          }),
        }).then((response) => {
          return response.json();
        }).then((data) => {
              this.services = data
          });
      } catch (e) {
        console.error(e);
      }
    }
  },
  created() {
    this.getServices()
  }
}
</script>

<style scoped lang="scss">
img{
  width: 36px;
  height: 36px;
  margin-right: 16px;
}

.services{
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

.add-service{
  width: 320px;
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