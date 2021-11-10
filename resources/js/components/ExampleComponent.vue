<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                        <input v-model="form.username" type="text" name="username" placeholder="Username">
                        <div style="color:red" v-if="form.errors.has('username')" v-html="form.errors.get('username')" />

                        <input v-model="form.password" type="password" name="password" placeholder="Password">
                        <div style="color:red" v-if="form.errors.has('password')" v-html="form.errors.get('password')" />

                        <button type="submit" :disabled="form.busy">
                        Log In
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: () => ({
                    form: new Form({
                    username: '',
                    password: ''
                    })
                }),

                methods: {
                    async login () {
                      this.$Progress.start()
                    this.form.post('api/login').then((data)=>{
                            
                              console.log(data)
                              this.$Progress.finish()
                    }).catch((error)=>{
                             console.log(error)
                             this.$Progress.fail();
                    });
                    // ...
                    }
                }
    }
</script>
