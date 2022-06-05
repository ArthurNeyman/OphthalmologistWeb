<template>
  <div>
    <div class="service">
      <div>
        <div class="field">Название* :</div>
        <input type="text" v-model="service.name">
      </div>

      <div>
        <div class="field">Цена:</div>
        <input type="text" v-model="service.price">
      </div>

      <div>
        <div class="field">Описание* :</div>
        <textarea type="text" v-model="service.description"></textarea>
      </div>

    </div>
    <button class="save" @click.stop="saveService">Сохранить</button>
  </div>

</template>

<script>
export default {
  name: 'ServiceAdd',
  props: {
    id: String,
  },
  data(){
    return{
      service: {
        name: '',
        description: '',
        price: ''
      }
    }
  },
  methods: {
    async saveService(){
      try {
        await fetch('http://82.179.9.51:8080/api/editor/add-service',{
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({
            name: this.service.name,
            description: this.service.description,
            price: this.service.price
          }),
        }).then(() => {
          this.$router.push({ name: 'ManageServices'})
        });
      } catch (e) {
        console.error(e);
      }
    }
  },
}
</script>

<style scoped lang="scss">
.service{
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