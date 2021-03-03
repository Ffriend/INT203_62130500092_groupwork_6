const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    }
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            education: 'IT Student',
            article: '34',
            followers: '940',
            ratings: '8.9',
            url: 'my_img.jpg',
            email: null,
            phone: null,
            age: null,
            errors: null

        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                phone: this.phone,
                age: this.age
            },
                constraints)
            if (!this.errors) {
                alert("Your profile is updated successfully.")
            }
        }
    }
})
app.mount('#app')