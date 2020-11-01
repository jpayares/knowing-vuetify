<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex xs12 sm4>
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
                        <v-container>
                            <v-layout>
                                <v-flex>
                                    <span class="headline white--text">Lorem, ipsum, dolor.</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title>
                        <h2>Lorem, ipsum dolor.</h2>
                    </v-card-title>
                    
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla id eveniet voluptatibus quisquam sit? Maiores nesciunt fugit odit perspiciatis reiciendis ducimus inventore ipsum itaque unde, repellendus a, sapiente, placeat voluptates?</p>
                    </v-card-text>
                        
                    <v-card-actions>
                        <v-btn color="info" text @click="dialog = true">Acción</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm4>
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                    <v-card-title>
                        <h2>Lorem, ipsum dolor.</h2>
                    </v-card-title>
                    
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla id eveniet voluptatibus quisquam sit? Maiores nesciunt fugit odit perspiciatis reiciendis ducimus inventore ipsum itaque unde, repellendus a, sapiente, placeat voluptates?</p>
                    </v-card-text>
                        
                    <v-card-actions>
                        <v-btn color="info" text @click="dialog = true">Acción</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm4>
                <v-card>
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

                    <v-card-title>
                        <h2>Lorem, ipsum dolor.</h2>
                    </v-card-title>
                    
                    <v-card-text>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla id eveniet voluptatibus quisquam sit? Maiores nesciunt fugit odit perspiciatis reiciendis ducimus inventore ipsum itaque unde, repellendus a, sapiente, placeat voluptates?</p>
                    </v-card-text>
                        
                    <v-card-actions>
                        <v-btn color="info" text @click="dialog = true">Acción</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

        <!-- Dialogo -->

        <v-dialog v-model="dialog" width="500" persistent>
            <v-card>
                <v-card-title>Este es el titulo</v-card-title>
                <v-card-text><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus molestias ipsam tempora vero repellendus voluptatem iure? Reiciendis eligendi accusantium doloribus similique iure voluptates tempore velit recusandae laborum amet, consequatur mollitia!</p></v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn @click="dialog = false">Cerrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>

</template>

<script>
export default {
name: 'App',
  data: () => ({dialog: false}),    
}
</script>