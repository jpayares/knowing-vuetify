<template>
    <v-container>
        <v-layout>
            <v-flex>
                <v-btn class="mx-2">texto</v-btn>

                <v-btn color="primary mx-2">texto</v-btn>
                <v-btn dark color="blue mx-2">texto</v-btn>

                <v-btn text color="secondary mx-2">sin fondo</v-btn>

                <v-btn color="warning mx-2" large>largo</v-btn>
                <v-btn color="warning mx-2" small>largo</v-btn>
                <v-btn color="warning mx-2" :disabled="false">largo</v-btn>

                <v-btn color="info" depressed>Boton</v-btn>

                <v-btn class="mx-2">
                    <v-icon>forum</v-icon>
                </v-btn>

                <v-btn color="primary mx-2" icon text>
                    <v-icon>hola</v-icon>
                </v-btn>
                <v-btn color="primary mx-2" fab>
                    <v-icon>code</v-icon>
                </v-btn>
                <v-btn color="primary mx-2" fab small>
                    <v-icon>forum</v-icon>
                </v-btn>
                <v-btn color="primary mx-2" fab large>
                    <v-icon>forum</v-icon>
                </v-btn>
                <v-btn color="success mx-2">
                    texto
                    <v-icon>forum</v-icon>
                </v-btn>
                <v-btn color="success mx-2">
                    texto
                    <v-icon right>forum</v-icon>
                </v-btn>
                <v-btn color="success mx-2">
                    <v-icon left>forum</v-icon>
                    texto
                </v-btn>
                <v-btn color="success mx-2" outlined>
                    <v-icon left>forum</v-icon>
                    texto
                </v-btn>
                <v-btn class="my-2" color="success" outlined block>
                    <v-icon left>forum</v-icon>
                    texto
                </v-btn>

            </v-flex>
        </v-layout>
       
    </v-container>
</template>

<script>
export default {
    
}
</script>