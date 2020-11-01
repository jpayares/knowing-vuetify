<template>
  <v-container grid-list-xl>
    <v-layout row crap>

      <v-flex md6 v-if="formAgregar">
        <v-card class="mb-3 mt-3 pa-3">
          <v-form @submit.prevent="agregarTarea">
            <v-text-field label="Titulo de tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Descripcion de tarea" v-model="descripcion"></v-textarea>
            <v-btn block color="success" type="submit">Agregar Tareas</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex md6 v-if="!formAgregar">
        <v-card class="mb-3 mt-3 pa-3">
          <v-form @submit.prevent="editarTarea">
            <v-text-field label="Titulo de tarea" v-model="titulo"></v-text-field>
            <v-textarea label="Descripcion de tarea" v-model="descripcion"></v-textarea>
            <v-btn block color="warning" type="submit">Editar Tareas</v-btn>
          </v-form>
        </v-card>
      </v-flex>

      <v-flex md6>
        <v-card class="mb-3 mt-3" v-for="(item, index) in listaTareas" :key="index">
          <v-card-text>
            <v-chip class="ma-2 ml-0" color="pink" label text-color="white">
            <v-icon left>label</v-icon>
              {{item.titulo}}
            </v-chip>
            <p>{{item.descripcion}}</p>
            <v-btn color="warning" class="mx-2 ml-0" @click="editar(index)">Editar</v-btn>
            <v-btn color="error" @click="eliminarTarea(item.id)">Eliminar</v-btn>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
    <v-snackbar
      v-model="snackbar"
    >
      {{ mensaje }}
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({listaTareas:[
    {id: 1, titulo: 'Titulo Tarea #1', descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas excepturi dolorum ullam perspiciatis quis sapiente nisi maxime? Repellat obcaecati quam cumque mollitia natus modi nam illum in blanditiis. Quam, sit.'}
  ],
  titulo: '',
  descripcion: '',
  snackbar: false,
  mensaje: '',
  formAgregar: true,
  indexTarea: ''
  }),
  methods: {
    agregarTarea(){
      if(this.titulo === ''  ||  this.descripcion ===  ''){
        this.snackbar = true
        this.mensaje = 'Llena todos los campos!'
      }else{
        this.listaTareas.push({
          id: Date.now(),
          titulo: this.titulo,
          descripcion: this.descripcion
        })
        this.titulo = ''
        this.descripcion = ''
        this.snackbar = true
        this.mensaje = 'Tarea Agregada!'
      };
      localStorage.setItem("Lista de Tareas", JSON.stringify(this.listaTareas));
    },
    eliminarTarea(id){
      this.listaTareas = this.listaTareas.filter(e => e.id != id);
      localStorage.setItem("Lista de Tareas", JSON.stringify(this.listaTareas));
    },
    editar(index){
      this.formAgregar = false
      this.titulo = this.listaTareas[index].titulo
      this.descripcion = this.listaTareas[index].descripcion
      this.indexTarea = index
      localStorage.setItem("Lista de Tareas", JSON.stringify(this.listaTareas));
    },
    editarTarea(){
      this.listaTareas[this.indexTarea].titulo = this.titulo    
      this.listaTareas[this.indexTarea].descripcion = this.descripcion
      this.formAgregar = true
      this.titulo = ''
      this.descripcion = ''
      this.snackbar = true
      this.mensaje = 'Editaste la tarea!'
      localStorage.setItem("Lista de Tareas", JSON.stringify(this.listaTareas));
  },
  created: function () {
      let datosDB = JSON.parse(localStorage.getItem("Lista de Tareas"));
      if (datosDB === null) {
        this.listaTareas = [];
      } else {
        this.listaTareas = datosDB;
      }
    },
  }
}
</script>