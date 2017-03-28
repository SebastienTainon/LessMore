var LessMoreApp = new Vue({
    el: '#less-more-app',

    data: {
        form: {
            choiceNumber: null
        }
    },

    methods: {
        less: function () {
            this.form.choiceNumber--;
        },

        more: function () {
            this.form.choiceNumber++;
        },

        play: function () {
            this.$http.post(
                '/choice',
                this.form
            );
        }
    },

    watch: {
        'form.choiceNumber': function (newValue, oldValue) {
            if (newValue < 0 || newValue > 100) {
                this.form.choiceNumber = oldValue;
            }
        }
    }
});
